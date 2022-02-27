# docutil 开发笔记

## docutil 是什么？

docutil 是一个纯前端博客应用。通过 docutil 可以高效地部署一个网站，而且不需要后台服务支持。

传统的静态网站生成工具，比如 hugo、hexo，用户需要先在本地生成 html 文件，然后才能部署。而 docutil 是完全运行在浏览器侧。因此只需要服务端提供静态文件托管功能即可。

用户按约定的目录编写 markdown 文件，导入 index.html 及 dist 目录下的三个文件（一个 js、一个 css、一个 wasm）即完成网站部署。而且从文章编写到最终上线，完全可以在浏览器上完成。

## 技术栈

docutil 核心是基于 sycamore 实现的 markdown 渲染、路由处理引擎。样式主要使用 unocss。

sycamore 是一个纯 rust 实现的前端框架。rust 有着非常优秀的 wasm 工具链，通过 wasm，rust 代码也可以调用 DOM API、JS API。

wasm——WebAssembly，2017 年正式成为 w3c 的标准之一，而且已经得到所有主流浏览器支持。

## sycamore vs yew.rs

yew.rs 是一 rust 另一个前端框架，社区规模、活跃度都是比较好的项目。

yew.rs 简直就是 react 的翻版，基于宏实现 jsx 模板，还有 hook，函数组件、对象（struct）组件。sycamore 更像是 solid.js 的 rust 版本，模板语法像 pug。solid.js 是 js 生态中一个年轻的前端框架，最大的物色是使用了 jsx 表示模板，而且使用响应式系统。

>sycamore 0.8 开始重写了响应式的部分代码。0.8 之前的代码需要大面积重写。所以发展中的框架，风险比较大。我选择 sycamore 主要因为之前有 vuejs 使用经验，更偏好响应式的编程方式。

## debug

唯有 `console.log` 大法。

TBD
