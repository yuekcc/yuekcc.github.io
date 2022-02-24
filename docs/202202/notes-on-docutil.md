# docutil 开发笔记

## docutil 是什么？

docutil 是一个纯前端的网站生成工具。通过 docutil 可以快速、无后端部署一个静态网站。

像 hugo、haxe 这类静态网站生成器需要在本地生成 html 文件，然后才能部署。而 docutil 是完全在浏览器端运行。用户按约定的目录编写 markdown 文件，导入 index.html 及 dist 目录下的三个文件（一个 js、一个 css、一个 wasm）即完成网站部署，完全可以在线完成所有操作。

## 技术栈

docutil 核心是基于 sycamore 实现的 markdown 渲染、路由处理引擎。样式主要使用 unocss。

sycamore 是 一个纯 rust 实现的前端框架。rust 有着非常优秀的 wasm 工具链，通过 wasm，rust 可以与浏览器、js 引擎交互。wasm 也是 web 技术栈中的第二个正式的执行引擎。一般情况下，wasm 有着比 js 更好的性能。

不过 wasm 开发难道也比较高，起码得要使用像 rust、c/c++ 这样的工具。也有一部分带 gc 的编程语言也支持 wasm 环境——比如 go、c#，只是 wasm 的体积会变得非常巨大。wasm 的后续发展也是非常值得期望。

## sycamore vs yew.rs

yew.rs 简直就是 react 的翻版，基于宏实现 jsx 模板，还有 hook，函数组件、对象（struct）组件；sycamore 更像是 solid.js 的 rust 版本，模板更像 pug。

## debug

唯有 `console.log` 大法。

TBD
