import { createHighlighter, bundledLanguages } from 'shiki';

// 候选语言（覆盖站点笔记内容）；实际只加载 shiki 内置支持的语言 id，
// 未列出的语言在代码块回调里回退为纯文本。
const CANDIDATE_LANGS = [
  'c', 'cpp', 'csharp', 'java', 'kotlin', 'scala', 'go', 'rust', 'zig',
  'javascript', 'typescript', 'jsx', 'tsx', 'python', 'ruby', 'php', 'swift',
  'objective-c', 'objc', 'lua', 'perl', 'r', 'shell', 'bash', 'powershell', 'sql',
  'html', 'css', 'scss', 'json', 'yaml', 'toml', 'ini', 'xml', 'dockerfile',
  'makefile', 'diff', 'markdown', 'properties', 'plaintext', 'text', 'log',
];

const SHIKI_LANGS = CANDIDATE_LANGS.filter((l) => l in bundledLanguages);
const FALLBACK_LANG = SHIKI_LANGS.includes('text')
  ? 'text'
  : SHIKI_LANGS.includes('plaintext')
    ? 'plaintext'
    : SHIKI_LANGS[0];

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

// Bun.markdown 的 text 回调只做最小化转义（& < >），而 code 回调拿到的内容
// 已经是转义后的字符串。shiki 需要原始源码，故在 code 回调里把这三个实体还原回去
// （它们是可逆的最小转义集，不会与其他实体冲突）。
function unescapeHtml(s) {
  return String(s)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

/**
 * 编译单个 Markdown 文件为一段 JSX 代码（默认导出一个 render() 函数）。
 * 使用 Bun 内置的 Bun.markdown 完成解析（替代 markdown-exit + hast/estree 工具链），
 * 代码高亮仍由 shiki 完成，内部链接改写 docs/ → _docs/ 以适配 SPA 路由。
 *
 * @type {() => import('bun').BunPlugin}
 */
export default () => ({
  name: 'md',
  async setup(build) {
    console.log('PLUGIN setup md (markdown) plugin');

    const highlighter = await createHighlighter({
      themes: ['github-dark'],
      langs: SHIKI_LANGS,
    });
    const loaded = new Set(highlighter.getLoadedLanguages());

    // 缓存已处理的文件以避免重复处理
    const processedCache = new Map();

    async function compiler(filePath, source) {
      const html = Bun.markdown.render(source, {
        // 文本节点：最小转义（& < >）。其余结构回调拿到的是已转义的子树字符串，
        // 因此结构回调只负责包裹标签、不要再转义，避免双重转义。
        text: (t) => escapeHtml(t),

        // 内联代码：保持 <code> 包裹（不进入 shiki，text 已转义）
        codespan: (text) => `<code>${text}</code>`,

        // 围栏代码块：交给 shiki 高亮（github-dark 主题）。
        // 注意 Bun 传入的 text 已转义，需先还原成原始源码再高亮。
        code: (text, opts) => {
          const raw = unescapeHtml(text);
          const lang = opts?.language && loaded.has(opts.language) ? opts.language : FALLBACK_LANG;
          try {
            return highlighter.codeToHtml(raw, { lang, theme: 'github-dark' });
          } catch {
            return `<pre><code>${escapeHtml(raw)}</code></pre>`;
          }
        },

        // 链接：内部文档链接 docs/xxx.md → _docs/xxx.md（SPA 路由约定）
        link: (children, opts) => {
          const href = opts?.href ?? '';
          const out = /^docs\/.+\.md$/.test(href) ? href.replace('docs/', '_docs/') : href;
          return `<a href="${escapeAttr(out)}">${children}</a>`;
        },

        // 图片：统一以 / 开头的站点相对路径
        image: (alt, opts) => {
          const raw = opts?.src ?? '';
          const src = raw.startsWith('/') ? raw : `/${raw}`;
          return `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt ?? '')}" />`;
        },

        // —— 结构节点：Bun 默认不会输出这些标签（只吐文本），必须显式包裹 ——
        heading: (children, opts) => `<h${opts?.level ?? 1}>${children}</h${opts.level ?? 1}>`,
        paragraph: (children) => `<p>${children}</p>`,
        list: (children, opts) =>
          opts?.ordered ? `<ol>${children}</ol>` : `<ul>${children}</ul>`,
        listItem: (children, opts) => {
          // GFM 任务列表：[ ] / [x] 会带 checked 字段
          if (opts && 'checked' in opts && opts.checked !== undefined) {
            const box = `<input type="checkbox" class="task-list-item-checkbox" disabled${
              opts.checked ? ' checked' : ''
            } />`;
            return `<li class="task-list-item">${box}${children}</li>`;
          }
          return `<li>${children}</li>`;
        },
        blockquote: (children) => `<blockquote>${children}</blockquote>`,
        hr: () => '<hr />',
        emphasis: (children) => `<em>${children}</em>`,
        strong: (children) => `<strong>${children}</strong>`,
        strikethrough: (children) => `<del>${children}</del>`,

        // 表格
        table: (children) => `<table>${children}</table>`,
        thead: (children) => `<thead>${children}</thead>`,
        tbody: (children) => `<tbody>${children}</tbody>`,
        tr: (children) => `<tr>${children}</tr>`,
        th: (children) => `<th>${children}</th>`,
        td: (children) => `<td>${children}</td>`,

        // 块级原始 HTML（如文档里直接写的 <div> / <p>）原样透传
        html: (raw) => raw,
      });

      return `export default function render() { const __html = ${JSON.stringify(html)}; return <div class="markdown-body" dangerouslySetInnerHTML={{__html}} />; }`;
    }

    build.onLoad({ filter: /\.md$/ }, async (args) => {
      console.log(`MD2JSX ${args.path}`);

      try {
        if (processedCache.has(args.path)) {
          return processedCache.get(args.path);
        }

        const fileContent = await Bun.file(args.path).text();
        const code = await compiler(args.path, fileContent);

        const result = {
          contents: code,
          loader: 'jsx',
        };

        processedCache.set(args.path, result);
        return result;
      } catch (error) {
        console.error(`Error processing Markdown file ${args.path}:`, error);
        throw new Error(`Failed to compile ${args.path}: ${error.message}`);
      }
    });
  },
});
