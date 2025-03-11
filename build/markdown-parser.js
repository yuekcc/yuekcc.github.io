import Shiki from '@shikijs/markdown-it';
import MarkdownIt from 'markdown-it';
import taskLists from 'markdown-it-task-lists';

const md = MarkdownIt({ html: true, linkify: true });
md.use(
  await Shiki({
    theme: 'github-dark',
    fallbackLanguage: 'log',
  }),
);
md.use(taskLists);

const defaultImageRenderer = md.renderer.rules.image;
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const src = tokens[idx].attrGet('src');
  console.log('IMG URL', src);

  tokens[idx].attrSet('src', `/${src}`);
  return defaultImageRenderer(tokens, idx, options, env, self);
};

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const href = tokens[idx].attrGet('href');
  console.log('link_open', href)
  if (/docs\/.+\.md/.test(href)) {
    tokens[idx].attrSet('href', href.replace('docs/', '_docs/'));
  }

  return self.renderToken(tokens, idx, options);
};

export async function parseMarkdown(filePath, source) {
  return md.render(source, { filePath });
}
