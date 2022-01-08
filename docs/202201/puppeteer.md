# puppeteer

Puppeteer（大概）是 Google 家出品的用于 Chrome/Chromium 的自动动化控制库。

## 可以做什么

按我目前的理解，通过 puppeteer 可以模拟所有人工操作，调用浏览器的所有功能，甚至获取浏览器的内部数据。最典型的一些用途：

- UI 自动化测试
- 爬虫
  - 因为 puppeteer 本身是控制浏览器，因此可以处理前端动态生成的 DOM 和静态 DOM
- 打印为 PDF
- 网页截图

## puppeteer vs selenium

selenium 也是另一个控制浏览器的工具（库）。selenium 大概是 Java 生态、python 生态中比较常见的浏览器控制库。selenium 通过 webdriver 接口来控制浏览器。webdriver 是 W3C 组织的一个推荐标准。

主要区别：

- 连接方式
  - selenium 通过 Restful 接口连接 webdriver，webdriver 再通过 devtools 协议连接浏览器
  - puppeteer 则直接通过 devtools 协议连接浏览器

- 开发语言支持
  - selenium 最大的优势是官方维护了 java/python/javascript/c# 几种语言的绑定
  - puppeteer 本身只是一个 node.js 模块。社区里有其他开发语言实现的基于 devtools 协议的浏览器控制库
    - golang 有 https://github.com/go-rod/rod
    - rust 有 https://crates.io/crates/chromiumoxide

另外 selenium 也提供了 Grid 这种大规模执行机支持的功能实现，也支持控制远程的 webdriver。

## puppeteer 概念

![puppeteer 概念](docs/202201/images/puppeteer_概念.svg)

## 小玩具 fetchweb

https://github.com/yuekcc/fetchweb

fetchweb 最初的版本使用 selenium 实现 chrome 浏览器控制。现在改为 puppeteer 控制 chromium 浏览器。这个 Demo 里，我用的是 electron。

electron 本身也是是基于 chromium 开发的桌面端框架。通过 electron 可以使用 web 技术栈开发桌面软件。因为 electron 本身也是基于 chromium，也带有 devtools 工具。所以 puppeteer 也应该支持控制 electron。这里通过 [puppeteer-in-electron](https://www.npmjs.com/package/puppeteer-in-electron) 进行了桥接。

生产项目中应该使用 puppeteer + chromium 的组合。

fetchweb 功能非常简单：基于 yaml 定义了一个 DSL，通过 executor 解释并执行用户定义的 DSL 脚本。目前已经实现了基本的点击、获取文本、iframe 处理。

具体可以看看代码，核心代码在 https://github.com/yuekcc/fetchweb/blob/main/fetchweb.js

---

2022年01月08日
