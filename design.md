# 项目设计文档：yuekcc.github.io 静态文档站

> 本文档基于当前仓库代码（build.js、src/、build/ 等）逆向分析整理，覆盖**构建流程**与**运行时架构**两部分。

---

## 1. 项目定位与总体架构

这是一个**个人学习笔记 / 技术文档静态站点**（GitHub Pages 部署，域名 `lambdadriver.space` / `yuekcc.github.io`）。核心目标是：把 `docs/` 目录下大量 Markdown 笔记，在**构建期**编译成一个**单页应用（SPA）**，使其在浏览器中按需动态加载，避免一次性打包所有文章内容。

整个系统分为两条清晰的链路：

```
Markdown 源文件 (docs/**/*.md)
        │
   ┌────┴─────────────────────────────┐
   │  构建期 (Bun + 自定义插件)          │
   │  build.js → docs.js + 打包 JS 分块   │
   └────┬─────────────────────────────┘
        │  产物：根目录 index.html + dist/*.js
   ┌────┴─────────────────────────────┐
   │  运行期 (Preact SPA, 浏览器)        │
   │  路由 → 查 DOCS 表 → 动态 import    │
   └────┬─────────────────────────────┘
        ▼
   渲染 Markdown → github-markdown 样式
```

设计上的关键决策：

1. **构建期把 Markdown 转译成 JS 组件**，而非运行期用 JS 解析 Markdown。好处是运行时零 Markdown 解析开销，文章以代码分割（code splitting）的 JS chunk 形式按路由懒加载。
2. **Preact + @preact/signals** 作为极轻量运行时，替代 React，减小打包体积。
3. **Markdown 渲染走"Bun 内置 `Bun.markdown` 解析 → HTML 字符串 → `dangerouslySetInnerHTML`"** 路线（自 Bun 1.3.8 起内置，替代了 markdown-exit + hast/estree 工具链），代码高亮仍由 shiki 完成。

---

## 2. 技术栈

| 层 | 选型 | 用途 |
|----|------|------|
| 运行时 / 打包器 | **Bun** | `bun build.js` 执行构建；`bun` 内置 `Glob`、文件 API、bundler |
| 前端框架 | **Preact** (`jsxImportSource: preact`) | 渲染 SPA；`jsconfig.json` 指定 |
| 响应式状态 | **@preact/signals** | `body` 信号驱动路由内容切换 |
| Markdown 解析 | **Bun.markdown**（Bun 内置，自 1.3.8） | 解析 MD、GFM（表格/删除线/任务列表/自动链接），输出 HTML 字符串或自定义回调 |
| 代码高亮 | **shiki** | `highlighter.codeToHtml`，主题 `github-dark`，在 `Bun.markdown.render()` 的 `code` 回调内同步调用 |
| MD→HTML 转换 | **Bun.markdown.render()** 回调 | `codespan`/`code`/`link`/`image` 回调分别处理内联代码、代码块、链接与图片 |
| 文档样式 | **github-markdown-css** (`github-markdown-light.css`) | `.markdown-body` 容器样式 |
| 代码格式化 | **prettier** | 仅作开发约定（`package.json` 内配 `printWidth:120` 等） |

> 说明：旧版 `design.md` 中称"转换为 React 组件"，实为 **Preact**（JSX 经 Bun 按 `jsconfig.json` 的 `jsxImportSource: preact` 编译为 `preact/jsx-runtime`）。

---

## 3. 目录结构与职责

```
yuekcc.github.io/
├── build.js                 # 主构建脚本（三大步骤）
├── docs.js                 # 由 build 生成：docs 路径 → 动态 import 映射表（已提交）
├── doc-modules.js          # 与上类似的模块映射（历史遗留/备用）
├── package.json            # 依赖与 build 脚本（仅 "build": "bun build.js"）
├── jsconfig.json           # JSX → Preact 编译配置
├── manifest.json           # PWA manifest（"Yuekcc's notes"）
├── index.html              # 构建产物：引用 /dist/chunk-*.{css,js}
├── TOC.md                  # 站点首页内容（目录/导航页）
├── icp.md                  # 页脚备案信息
├── justfile                # 部署辅助（多远程 push / serve）
│
├── src/                    # 应用源码（打包入口）
│   ├── index.html          # 构建入口 HTML（<div id="app"> + index.jsx）
│   ├── index.jsx           # SPA 运行时：路由、信号、渲染
│   └── style.css           # 全局样式 + 响应式/打印样式
│
├── build/                  # 构建期工具（不被打包进产物）
│   ├── bun-plugin-md.js    # Bun 插件：.md → 含 dangerouslySetInnerHTML 的 render()（Bun.markdown + shiki）
│   ├── doc-list.js         # 用 Glob 扫描 docs/ 下所有 .md
│   └── CodePrinter.js      # 链式拼接代码字符串并写文件
│
└── docs/                   # Markdown 笔记源（按年份/主题分目录）
    ├── 2021/ … 2026/
    ├── pointers/、agent-design/ 等
    └── …（78 个 .md 文件，含部分 .zh.md、CLAUDE.md）
```

`docs/` 中的 `.md` 文件**不会被作为静态文件拷贝到 `dist/`**，而是在构建期被编译进 JS 分块。仓库里保留的 `docs/` 仅供源码与编辑使用。

---

## 4. 构建流程（`build.js`）

`build.js` 顺序执行三步，全程有计时与失败退出码（非 0）。

### STEP1 — 生成 `docs.js`
- 用 `build/doc-list.js` 的 `listDocs('docs')`，基于 `new Glob('**/*.md').scanSync('docs')` 扫描所有 Markdown（含子目录）。
- 对每个文件：`docs["docs/xxx.md"] = () => import("Z:\\...\\docs\\xxx.md");`
  - 映射键统一做 `replaceAll('\\','/')`，转成类 POSIX 路径（如 `docs/2024/rasync.md`）。
  - `import()` 的目标是**绝对路径**，构建期由 Bun 解析为对应分块。
- 用 `CodePrinter`（链式 `.print()`）累积代码，`writeFile('docs.js')` 写出。
- 产物：`docs.js` 开头 `const docs = {}`，结尾 `export default docs;`。

### STEP2 — Bun 打包 Web 应用
```js
build({
  target: 'browser',
  plugins: [md()],            // .md → JSX 组件
  entrypoints: ['./src/index.html'],
  outdir: 'out/dist',
  splitting: true,            // 代码分割
  minify: true,
  publicPath: '/dist/',
  naming: { chunk: 'chunk-[hash].[ext]' },
})
```
- 入口 `src/index.html` 引用 `src/index.jsx`。
- `md()` 插件把每个被 import 的 `.md`（含 `docs.js` 里的动态 import 目标、`TOC.md`、`icp.md`）转成 JSX 组件；配合 `splitting` 形成按需加载的分块。

### STEP3 — 部署归位
```sh
rm -rf dist index.html
mv out/* .
mv dist/index.html .
```
- 删除旧的 `dist/` 与根 `index.html`。
- 将 `out/` 内容（含 `dist/`）搬到根目录。
- 将 `dist/index.html` 提到根目录，成为最终入口。
- 最终站点结构：根 `index.html` + 根 `dist/*.js` + 根 `docs/`（源码，不对外提供静态访问）。

---

## 5. Markdown 处理管线（构建期，`build/bun-plugin-md.js`）

整体链路：`Markdown 源 → Bun.markdown.render() 生成 HTML 字符串 → shiki 在回调内高亮代码 → 包装为 dangerouslySetInnerHTML 的 render() 函数`。原先依赖 markdown-exit + hast/estree/estree-util-to-js 五包，现已全部由 Bun 内置能力替代，仅保留 shiki 负责高亮。

### 5.1 解析与 GFM
- 使用 **Bun 内置 `Bun.markdown`**（自 Bun 1.3.8 引入，基于 md4c 的 Zig 移植，CommonMark 合规）。
- 通过 `Bun.markdown.render(source, callbacks)` 逐元素回调生成最终 HTML 字符串。
- **GFM 原生支持**：表格、删除线、任务列表（`- [x]`）、自动链接，无需额外插件。

### 5.2 自定义回调（替代原 markdown-it 的 renderer 规则）
在 `render()` 的回调里完成四类处理：
- `codespan(text)`：内联代码 → `<code>` 包裹（HTML 转义）。
- `code(text, {language})`：围栏代码块 → 交给 **shiki** 高亮（`highlighter.codeToHtml(text, {lang, theme:'github-dark'})`）；未加载的语言回退为纯文本。shiki 的 highlighter 在插件 `setup()` 阶段 `await createHighlighter(...)` 预初始化一次，之后 `codeToHtml` 为同步调用。
- `link(children, {href})`：内部文档链接 `docs/xxx.md` → 改写为 `_docs/xxx.md`，与 SPA 路由约定一致；外链原样保留。
- `image(alt, {src})`：图片 `src` 统一规整为以 `/` 开头的站点相对路径。

### 5.3 产出
`compiler()` 最终返回一段 JSX 代码：
```js
export default function render() {
  const __html = /* Bun.markdown 生成的 HTML 字符串 */;
  return <div class="markdown-body" dangerouslySetInnerHTML={{__html}} />;
}
```
- `setup()` 注册 `build.onLoad({ filter: /\.md$/ })`，对每个 `.md`：读文本 → `compiler` → 返回 `{ contents: code, loader: 'jsx' }`。
- **带缓存**：`processedCache`（`Map`，按 `args.path`）避免重复编译。
- 运行期由 `index.jsx` 动态 `import()` 取得 `render()` 并调用。

> 与原方案区别：原方案把 Markdown 编译成"真正的 Preact/JSX 组件树"；新方案改为生成"HTML 字符串 + `dangerouslySetInnerHTML`"。对静态笔记站等价且更轻，代价是 Markdown 内无法再内嵌 Preact 交互组件（本项目未使用此能力）。shiki 高亮、链接/图片改写、GFM 任务列表等能力全部保留。

---

## 6. 运行时架构（`src/index.jsx`）

### 6.1 状态与路由
- `const body = signal()`：当前文章内容（Preact VNode）。
- `body.subscribe(() => window.scrollTo({ top: 0 }))`：内容切换后滚动回顶部。
- `dispatchRoutes(url)`：
  - `pathname === '/'` 或 `'/index.html'` → 渲染 `TOC.md`（`renderToc()`），即首页/目录。
  - 否则 `DOCS[pathname.replace(/^\/[_]?/, '')]` 查表：命中则 `await load()` 取 `default`（`render` 函数）并执行 `body.value = render()`；未命中渲染 `Not found`。
  - 查表时**去掉可选前导 `_`**：表中键为 `docs/...md`，而路由 URL 用 `_docs/...md`（见下）。

### 6.2 内部路由约定（`docs` vs `_docs`）
- `bun-plugin-md`（构建期）把文章内**内部链接**改写为 `_docs/xxx.md`。
- `index.jsx` 的点击拦截 `handleLink`：当 `<a>` 的 `href` 路径匹配 `/_docs\/.+\.md/` 时：
  ```js
  e.preventDefault();
  dispatchRoutes(url);
  window.history.pushState({ pathname }, '', url.pathname);
  ```
- `dispatchRoutes` 再去掉 `_` 还原为 `docs/...md` 去 `DOCS` 表查。
- 因此：**`docs/` 是源码/映射键命名空间，`_docs/` 是浏览器路由命名空间**，两者一一对应，靠去掉/加上 `_` 互转。

### 6.3 浏览器历史
- `window.addEventListener('popstate', …)` 处理前进/后退。
- 没有使用 Preact Router 等库，路由是**手写的正则 + history API**，规模小、零依赖。

### 6.4 页面骨架（`App()`）
```
top-bar   : 首页链接 + GITHUB↗（新标签）
post      : {body.value} + post-link（仅打印可见的"链接：当前 URL"）
icp       : renderIcpNotice() 页脚备案
```
- 初始 `body.value` 为 `undefined`，首屏由 `dispatchRoutes(document.location)` 在 `render()` 之前同步设置（`/` 同步；文章因 `await` 异步，加载完成前渲染为空，存在极短空白）。
- 最终 `render(<App/>, document.querySelector('#app'))`。

---

## 7. 样式（`src/style.css`）

- 引入 **minireset.css** 做基础重置（margin/padding 归零、box-sizing 等）。
- CSS 变量定义主题色：`--main-bg: #f9f7ec`（米色背景）、`--header-bg: #3b6837`（深绿）。
- `#app` 居中、最大宽度 `960px`。
- `.post` 白色卡片 + 阴影 + 圆角，小屏 `1rem`/大屏（`≥1024px`）`2rem` 内边距。
- **打印样式**：`@media print` 隐藏 `top-bar`、`.icp`，取消 `.post` 卡片样式，并显示 `.post-link`（打印出文章链接）。
- Markdown 内容容器 `.markdown-body` 套用 `github-markdown-light.css`，并对 `ul`/`hr` 等做本地微调。

---

## 8. 配置与部署

### 配置文件
- `package.json`：仅有 `"build": "bun build.js"`（**没有 `serve` 脚本**）。依赖见 §2。
- `jsconfig.json`：`jsx: react-jsx` + `jsxImportSource: preact` + `strict`，供 Bun 打包与编辑器识别。
- `manifest.json`：PWA 元信息（名称、图标 `dist/logo.png`、standalone）。
- `index.html`（根）：构建产物，引用 `/dist/chunk-*.css|js`。

### 部署
- GitHub Pages 站点（仓库名 `yuekcc.github.io`）。
- `justfile` 提供：
  - `@push`：依次 `git push` 到 `origin` / `gitcode` / `sourcehut` 三个远程。
  - `serve`：`npm run serve` —— **但 `package.json` 无 `serve` 脚本，此命令会失败**，属脚本不一致（见 §9）。

---

## 9. 关键观察与潜在问题

1. **`just serve` 不可用**：`justfile` 的 `serve` 调 `npm run serve`，而 `package.json` 只有 `build`。本地预览需手动用 `bun`/`npx serve out` 或静态服务器指向根目录，或补一个 `serve` 脚本。
2. **深链接 / 刷新会 404**：所有文章经 SPA 路由（`_docs/...md`），仓库未提供 `404.html` 做 SPA fallback。在 GitHub Pages 上直接访问或刷新深层文章 URL 会返回 404。站内点击导航正常，但外部直链与刷新受影响。
3. **`docs.js` 含绝对 Windows 路径**：生成的 `import("Z:\\projects\\...\\docs\\xxx.md")` 是机器相关路径。构建期由 Bun 解析为分块，运行时不依赖该路径，但**该文件不应脱离本机构建直接使用**，且提交到仓库显得平台耦合。（构建产物里这些 import 已被替换为 `dist/chunk-*`。）
4. **首屏文章加载空白**：进入具体文章时 `dispatchRoutes` 为 `async`，`body.value` 在 `await load()` 完成前为 `undefined`，`App` 渲染空内容，存在极短无内容期（可加 loading 态改善）。
5. **未使用的映射文件**：仓库根还有 `doc-modules.js`，内容与 `docs.js` 类似但条目不同步（缺 `agent-design`、`2026` 部分文件），疑似历史遗留，建议清理以免误导。
6. **Markdown 工具链已迁移到 Bun 内置**：原 `markdown-exit` + `hast-util-from-html` + `hast-util-to-estree` + `estree-util-to-js` + `markdown-it-task-lists` 五个依赖已被 Bun 1.3.8+ 内置的 `Bun.markdown` 替代（仅保留 shiki 负责高亮）；`build/markdown-parser.js` 已删除，`package.json` 依赖已精简。

---

## 10. 数据流小结（一次点击的全过程）

```
用户点击 TOC/文章内的 _docs/xxx.md 链接
  → handleLink 拦截 (e.preventDefault)
  → history.pushState('/_docs/xxx.md')
  → dispatchRoutes：strip '_' → 'docs/xxx.md'
  → DOCS['docs/xxx.md']()  → 动态 import 对应 dist chunk
  → 取得 render()  → body.value = render()
  → signal 触发 App 重渲染  → 显示文章
  → body.subscribe → scrollTo(0)
```

---

## 附：构建/运行命令

```sh
# 构建（STEP1→STEP2→STEP3）
bun build.js

# 本地预览（修复 just serve 缺失后可加；当前推荐）
# 用任意静态服务器指向仓库根目录，例如：
python3 -m http.server 8000      # 然后访问 http://localhost:8000

# 部署
just push                        # 推送到三个 git 远程
```
