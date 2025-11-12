# Marknote 介绍

<img src="images/marknote-screenshot.jpg" style="border: 2px solid #ccc; max-width: 100%">

- [在线预览](https://yuekcc.github.io/marknote/)
- [源码](https://github.com/yuekcc/marknote)

[TOC]

## 想法

Marknote 最初的想法是山寨一个 [boot-cli](https://github.com/vvpvvp/book-cli)。book-cli 是一个纯前端渲染的网站工具。类似概念的著名产品还有：[docsify](https://github.com/docsifyjs/docsify)。当然 docsify 功能更多。相对本地执行的静态网站生成器，例如 [hugo](https://gohugo.io/)，纯前端型的工具功能更加简单（简陋），而且几乎不存在 SEO 可能。不过好处就是，用户可以更专注于内容本身，也可以在线使用。比如通过 github 直接编写文章并发布新网站。

## 特性

- 页面布局改为顶部导航，下面为正文内容的布局
  - 正文部分保持左右布局，方便组织文章；左侧是导航，右则是文章
  - 文章可以指定使用不同的侧栏
  - 增加打印机优化的样式
- markdown 增加了一个简单的 `[TOC]` 语法拓展
- 主题支持大屏小屏设备
- 打印机优化

网站主页，实际上是仓库的 README.md 文件。选择这个文档为主页的目的是与 github 这样的托管服务保持一致。在 github.io 不能访问时，可以直接访问仓库，起码内容还可以正常浏览。

> github.io 域名在我用的网络偶然会抽风，访问不了

网站除主页外，应该有一个侧栏，侧栏可以起到链接、跳转的功能。这样就可以将多个文章组织为一个整体。参考一些使用 [vuepress](https://vuepress.vuejs.org/zh/) 的文章网站，我也给文章的连接增加了 `sidebar` 参数，用于指定渲染文章时使用不同的侧栏。在概念上，就可以实现文章分类。

顶部导航因为内容比较简单，就直接使用 html 编写。

## 后续功能计划

- [ ] ~~front matter 支持~~
- [x] 完善打印样式
- [ ] ~~完善用户交互效果~~
- [ ] ~~缓存~~
- [x] pwa 支持（仅支持安装为应用）
- [x] 文档
- [x] 实现一个更好 `[TOC]` 拓展
- [x] 增加一套主题
  - ~~[ ] 支持 light/dark 切换~~
- [x] 语法高亮
- [x] 使用 sycamore 重写（新仓库：[https://github.com/yuekcc/docutil](https://github.com/yuekcc/docutil)）
  - [x] 改名 marknote => docutil

## 用户

- https://yuekcc.github.io/
- https://turn-left.github.io/
- https://yuekcc.github.io/marknote/
- https://lambdadriver.space/

---

- 2021.11.6：初稿
- 2021.11.7: 完成部分计划
