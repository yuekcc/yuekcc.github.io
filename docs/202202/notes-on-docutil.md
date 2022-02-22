# docutil 开发笔记

## docutil 是什么？

docutil 是一个纯前端的网站生成工具。通过 docutil 可以快速、无后端部署一个静态网站。

像 hugo、haxe 这类静态网站生成器需要在本地生成 html 文件，然后才能部署。而 docutil 是完全在浏览器端运行。用户按约定的目录编写 markdown 文件，导入 index.html 及 dist 目录下的三个文件（一个 js、一个 css、一个 wasm）即完成网站部署，完全可以在线完成所有操作。

## 技术栈

docutil 核心是使用 rust 实现的 markdown 渲染、路由的 wasm 代码。样式主要使用 unocss。

## docutil 为什么使用 rust 开发？

TBD
