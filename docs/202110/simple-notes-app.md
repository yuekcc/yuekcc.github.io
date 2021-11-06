# 简单笔记 app

----

简单笔记 app 已正式成为独立的项目，可以看[**这里**](/#/docs/202111/marknote-intro.md?sidebar=SIDEBAR.md)了解更多。

项目地址：https://github.com/yuekcc/marknote

----


这个网站就是使用`简单笔记 App`实现的。

## 缘起

作为一名开发，最简单的文档就是写在代码仓库中的 markdown 文档。现代的 Git 托管服务
基本可以直接渲染 markdown 文档。最常见的就是仓库的 `README.md`。

市面上也有一些静态网站的生成工具，比较 hugo，可以将 markdown 渲染为 html，并生成
相应的索引。但是这就需要使用 ci 之类工具，在编辑好笔记后，由 ci 自动更新整个网站。

但是，我只需要一个简单的工具，将 html 渲染出来，而且不需要复杂学习。事实上也的确有这样的工具。
比如：[docsify][1]、[book-cli][2]。

在简单看了一下 book-cli 之后，我决定自己实现一个。于是就有了这个[仓库][3]。

## 使用

如果书写类似于小册子这种的风格的网站，我认为我这个工具已经足够了。除 marked 没有其他依赖，
核心代码也不过 80 行。

已实现的功能：
- [x] 渲染 markdown（使用 marked 实现）
- [x] 自定义首页（实际上就是渲染 README.md，和 git 托管服务保持一致）
- [x] 侧栏为菜单，同时连接也支持 git 托管服务的 markdown 渲染效果
- [x] 大屏、小屏自适应（修改自 [typo.css][4]）

不会实现的功能：
- ie 兼容
- 静态渲染

如上面所说的，侧栏是目录，位于 [SIDEBAR.md](SIDEBAR.md)；首页是 [README.md](README.md)；
文章则统一在 `docs` 目录下，具体如何组织 docs 目录的内容全凭个人习惯了，毕竟 **文章连接是手工实现的**。

## 部署

我的这个小站当前部署到 `codeberg.org pages` 服务上。在自己账号下创建一个 `pages` 仓库，codeberg 就会自动启动 pages 服务。

访问这里：https://yuekcc.codeberg.page/

codeberg.org pages 实际上是类似于 github 的 pages 服务。因此也会支持 github pages 服务。

如果使用自己的 web server，并部署在根目录的话，应该没有需要修改的。如果在二级目录，可能需要 url rewrite。

----
2021 年 10 月 1日

[1]: https://docsify.js.org/#/zh-cn/
[2]: https://vvpvvp.github.io/book-cli/
[3]: https://codeberg.org/yuekcc/pages
[4]: https://typo.sofi.sh/