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

  const updatedSrc = `/${src}`;

  console.log('IMG URL', src, '=>', updatedSrc);
  tokens[idx].attrSet('src', updatedSrc);
  return defaultImageRenderer(tokens, idx, options, env, self);
};

md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const href = tokens[idx].attrGet('href');
  if (/docs\/.+\.md/.test(href)) {
    const updatedHref = href.replace('docs/', '_docs/');
    tokens[idx].attrSet('href', updatedHref);

    console.log('link_open', href, '=>', updatedHref);
  }

  return self.renderToken(tokens, idx, options);
};

export async function parseMarkdown(filePath, source) {
  return md.renderAsync(source, { filePath });
}
