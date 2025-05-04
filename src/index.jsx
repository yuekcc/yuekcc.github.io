import { signal } from '@preact/signals';
import { render } from 'preact';
import docModules from '../doc-modules';
import renderIcpNotice from '../icp.md';
import renderToc from '../TOC.md';

import 'github-markdown-css/github-markdown-light.css';
import './style.css';

const body = signal();
body.subscribe(() => {
  window.scrollTo({ top: 0 });
});

async function dispatchRoutes(url) {
  const { pathname } = url;

  if (pathname === '/' || pathname === '/index.html') {
    body.value = renderToc();
    if (pathname === '/index.html') {
      window.history.replaceState({ pathname }, '', '/')
    }
    return;
  }

  const load = docModules[pathname.replace(/^\/[_]?/, '')];
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

function MainLayout({ children }) {
  return (
    <>
      <div class="top-bar">
        <a href="/">首页</a>
        <a href="https://github.com/yuekcc" target="_blank" rel="noreferrer">
          GITHUB↗️
        </a>
      </div>
      <article class="post">{children}</article>
      <div class="icp">{renderIcpNotice()}</div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  function handleLink({ target }) {
    if (target?.tagName === 'A') {
      const url = new URL(target.href);
      if (url.pathname.includes('_docs/')) {
        event.preventDefault();
        setLoading(true);
        dispatchRoutes(url).finally(() => setLoading(false));
        window.history.pushState({}, '', url);
      }
    }
  }

  return (
    <MainLayout>
      {loading && <div class="loading">加载中...</div>}
      <div onClick={handleLink}>
        {body.value || <div class="empty">暂无内容</div>}
        <div class="post-link">
          <p>{'----'}</p>
          <pre>
            <code>链接：{document.location.href}</code>
          </pre>
        </div>
      </div>
    </MainLayout>
  );
}

dispatchRoutes(document.location);
render(<App></App>, document.querySelector('#app'));
