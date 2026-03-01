import { jsx, toJs } from 'estree-util-to-js';
import { fromHtml } from 'hast-util-from-html';
import { toEstree } from 'hast-util-to-estree';
import { parseMarkdown } from './markdown-parser';

async function compiler(filePath, source) {
  const html = await parseMarkdown(filePath, source);
  const tree = toEstree(fromHtml(html, { fragment: true }));
  const code = toJs(tree, { handlers: jsx }).value;
  return `export default function render() { const body = ${code}; return <div class="markdown-body">{body}</div>; }`;
}

/**
 * @type {() => import('bun').BunPlugin}
 */
export default () => ({
  name: 'md',
  async setup(build) {
    console.log('PLUGIN setup md (markdown) plugin');

    // 缓存已处理的文件以避免重复处理
    const processedCache = new Map();

    build.onLoad({ filter: /\.md$/ }, async args => {
      console.log(`MD2JSX ${args.path}`);

      try {
        // 检查缓存
        if (processedCache.has(args.path)) {
          return processedCache.get(args.path);
        }

        // 并行读取文件内容
        const fileContent = await Bun.file(args.path).text();

        // 编译Markdown为JSX
        const code = await compiler(args.path, fileContent);

        const result = {
          contents: code,
          loader: 'jsx',
        };

        // 缓存结果
        processedCache.set(args.path, result);

        return result;
      } catch (error) {
        console.error(`Error processing Markdown file ${args.path}:`, error);
        throw new Error(`Failed to compile ${args.path}: ${error.message}`);
      }
    });
  },
});
