# Marknote 介绍

<img src="docs/202111/images/marknote-screenshot.jpg" style="border: 2px solid #ccc">

## 想法

marknote 的想法是山寨一个 [boot-cli]([https://github.com/vvpvvp/book-cli)。

book-cli 是一个非常简单的静态网站应用。我称之为“应用”，是因为这个软件本身是一个纯前端实现的网站项目。

虽然是纯前端实现的项目，但是也是具备一些动态的功能。比如，文章的内容是 markdown 动态渲染的。book-cli 甚至
支持“上一篇”/“下一篇”这样的功能。

作为一名开发，学习最好的办法就是造轮子，于是就有了“简单笔记 App”。名字也是随便起的，有一个称呼而已。

早期代码和文章是一个项目里的，这个[仓库](https://github.com/yuekcc/yuekcc.github.io)。毕竟当时用记只有自己。
但是已经实现了核心的功能：

- 支持 markdown
- 网站侧栏中的链接也是使用的 markdown 渲染

## 新的实现

后来有朋友也需要 github pages 页面。于是想借用我的这个实现。我也逐渐给这个“简单笔记 App” 加上新功能。为方便用户更新，也
将这个 App 改为独立的项目，于是就是有 [marknote](https://github.com/yuekcc/marknote)。

网站主页，实际上是仓库的 README.md 文件。选择这个文档为主页的目的是与 github 这样的托管服务保持一致。在 github.io 不
能访问时，可以直接访问仓库，这样网站本身起码还能看。

网站除主页外，应该有一个侧栏，侧栏可以起到链接、跳转的功能。这样就可以将多个文章组织为一个整体。参考 vuepress 的多 layout 支持，
我也给文章的连接增加了 `sidebar` 参数，用于指定渲染文章时使用不同的侧栏。在概念上，就可以实现文章分类。

## 后续功能计划

- [ ] 实现一个更好 [TOC] 拓展
- [ ] 完善用户交互效果
- [ ] 增加一套主题

## 用户

- https://yuekcc.github.io
- https://turn-left.github.io

----

2021.11.6


