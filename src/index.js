import marked from 'marked';
import './style.css';

const $ = document.querySelector.bind(document);

function fetchText(url) {
  return fetch(url).then(resp => {
    if (resp.ok) {
      return resp.text();
    }

    return Promise.resolve('');
  });
}

function renderMarkdown(url, defaultResult = 'not found') {
  return fetchText(url)
    .then(text => {
      if (text) {
        return marked(text);
      }

      return defaultResult;
    })
    .catch(() => {
      return defaultResult;
    });
}

function renderContent(hash = '') {
  const url = hash.startsWith('#') ? hash.slice(1) : hash;
  return renderMarkdown(url || 'README.md').then(html => {
    $('#content').innerHTML = html;
  });
}

function renderSidebar() {
  return renderMarkdown('SIDEBAR.md', '').then(html => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(html, 'text/html');

    dom.querySelectorAll('a').forEach(it => {
      const url = new URL(it.href);
      const hash = `#${url.pathname}${url.search}`;
      it.setAttribute('href', hash);
    });

    $('#sidebar').innerHTML = dom.body.innerHTML;
  });
}

window.addEventListener('popstate', () => {
  renderContent(location.hash);
});

renderSidebar();
renderContent(location.hash);
