import { codeToHtml, bundledLanguages } from 'shiki';
import { createMarkdownExit } from 'markdown-exit';
import taskLists from 'markdown-it-task-lists';

function findCodeLanguage(lang) {
  return !!bundledLanguages[lang] ? lang : 'log';
}

const md = createMarkdownExit({
  html: true,
  linkify: true,
  async highlight(code, lang) {
    return await codeToHtml(code, { lang: findCodeLanguage(lang?.toLowerCase()), theme: 'github-dark' });
  },
});
md.use(taskLists);

const defaultImageRenderer = md.renderer.rules.image;
md.renderer.rules.image = (tokens, idx, options, env, self) => {
  let src = tokens[idx].attrGet('src');
  src = src.startsWith('/') ? src.replace(/^\//, '') : src;

  console.log('IMG URL', src);
  tokens[idx].attrSet('src', `/${src}`);
  return defaultImageRenderer(tokens, idx, options, env, self);
};

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const href = tokens[idx].attrGet('href');
  console.log('link_open', href);
  if (/docs\/.+\.md/.test(href)) {
    tokens[idx].attrSet('href', href.replace('docs/', '_docs/'));
  }

  return self.renderToken(tokens, idx, options);
};

export async function parseMarkdown(filePath, source) {
  return md.renderAsync(source, { filePath });
}
