import { signal } from '@preact/signals';
import { render } from 'preact';
import docModules from './doc-modules';
import renderIcpNotice from './icp.md';
import renderToc from './TOC.md';

import 'github-markdown-css/github-markdown.css';
import './style.css';

const body = signal();
body.subscribe(() => {
  window.scrollTo({ top: 0 });
});

async function dispatchRoutes(url) {
  const { pathname } = url;

  if (pathname === '/') {
    body.value = renderToc();
    return;
  }

  const load = docModules[pathname.replace(/^\//, '')];
  if (load) {
    const { default: render } = await load();
    body.value = render();
    return;
  }

  body.value = <>Not found</>;
}

window.addEventListener('popstate', () => {
  dispatchRoutes(document.location);
});

function App() {
  async function handleLink(e) {
    if (e && e.target && e.target.tagName === 'A') {
      const href = e.target.href;
      const url = new URL(href);

      // 加载文章
      if (/\/.+\.md/.test(url.pathname)) {
        e.preventDefault();
        dispatchRoutes(url);
        window.history.pushState({ pathname: url.pathname }, '', url.pathname);
      }
    }
  }

  return body.value ? (
    <>
      <div class="top-bar">
        <a href="/">首页</a>
      </div>
      <div onClick={handleLink}>{body.value}</div>
      <div class="icp markdown-body">{renderIcpNotice()}</div>
    </>
  ) : undefined;
}

dispatchRoutes(document.location);
render(<App></App>, document.querySelector('#app'));
