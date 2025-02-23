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

    build.onLoad({ filter: /\.md$/ }, async args => {
      console.log(`MD2JSX ${args.path}`);

      const contents = await Bun.file(args.path).text();
      const code = await compiler(args.path, contents);

      return {
        contents: code,
        loader: 'jsx',
      };
    });
  },
});
