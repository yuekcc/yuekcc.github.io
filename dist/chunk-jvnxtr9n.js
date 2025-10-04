import{e as p,h as n}from"/dist/chunk-n2t7x54v.js";function a(){return n("div",{class:"markdown-body",children:n(p,{children:[n("h1",{children:"Puppeteer 实现 UI 自动化测试"},void 0,!1,void 0,this),`
`,n("p",{children:["Puppeteer 是 ",n("s",{children:"Google 官方（可能）出品的"},void 0,!1,void 0,this)," 用于 Chrome/Chromium 的自动动化控制库。"]},void 0,!0,void 0,this),`
`,n("p",{children:["GitHub: ",n("a",{href:"https://github.com/puppeteer/puppeteer",children:"https://github.com/puppeteer/puppeteer"},void 0,!1,void 0,this),`
官网：`,n("a",{href:"https://pptr.dev/",children:"https://pptr.dev/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("h2",{children:"可以做什么"},void 0,!1,void 0,this),`
`,n("p",{children:"按我目前的理解，通过 puppeteer 可以模拟所有人工操作，调用浏览器的所有功能，甚至获取浏览器的内部数据。最典型的一些用途："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"UI 自动化测试"},void 0,!1,void 0,this),`
`,n("li",{children:[`爬虫（获取数据部分）
`,n("ul",{children:[`
`,n("li",{children:"因为 puppeteer 本身是控制浏览器，因此可以处理 js 动态生成的 DOM 和静态 DOM"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:"打印为 PDF（浏览器自带功能）"},void 0,!1,void 0,this),`
`,n("li",{children:"网页截图（浏览器自带功能）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"puppeteer vs selenium"},void 0,!1,void 0,this),`
`,n("p",{children:"selenium 也是另一个控制浏览器的工具（库）。selenium 大概是 Java 生态、python 生态中最常见的浏览器控制库。selenium 通过 webdriver 接口来控制浏览器。webdriver 是 W3C 组织的一个推荐标准。"},void 0,!1,void 0,this),`
`,n("p",{children:"主要区别："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"连接方式"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"selenium 通过 Restful 接口连接 webdriver，webdriver 再通过 devtools 协议连接浏览器"},void 0,!1,void 0,this),`
`,n("li",{children:"puppeteer 则直接通过 devtools 协议连接浏览器"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"开发语言支持"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"selenium 最大的优势是官方维护了 java/python/javascript/c# 几种语言的绑定"},void 0,!1,void 0,this),`
`,n("li",{children:[`puppeteer 本身只是一个 node.js 模块。社区里有其他开发语言实现的基于 devtools 协议的浏览器控制库
`,n("ul",{children:[`
`,n("li",{children:["golang 有 ",n("a",{href:"https://github.com/go-rod/rod",children:"https://github.com/go-rod/rod"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["rust 有 ",n("a",{href:"https://crates.io/crates/chromiumoxide",children:"https://crates.io/crates/chromiumoxide"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"另外 selenium 也提供了 Grid 这种大规模执行机支持的功能实现，也支持控制远程的 webdriver。"},void 0,!1,void 0,this),`
`,n("h2",{children:"puppeteer 概念"},void 0,!1,void 0,this),`
`,n("p",{children:n("img",{src:"/images/puppeteer_%E6%A6%82%E5%BF%B5.svg",alt:"puppeteer 概念"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"简单的 UI 自动化测试实现 fetchweb"},void 0,!1,void 0,this),`
`,n("p",{children:"UI 自动化测试主要是通过浏览化的操作自动化来减少人工测试 UI 功能的投入。用 UI 自动化完全取代人工，就目前的技术情况来看，还是不现实。一是 UI 本身是强业务绑定，每个 UI 自动化的测试用例基本上是独立开发的，复用的可能性比较低；二是，对于业务还不稳定的系统，由于一的原因，必然会导致用例不断修改，这部分也是人工投入。所以 UI 自动化测试应该是一个辅助工具，代替一部分重复的劳动。"},void 0,!1,void 0,this),`
`,n("p",{children:"UI 自动化测试的关键是如何快速开发测试用例。最理想的工具是通过宏录制工具，录制一部分操作过程，转换为代码，最后人工再完善一下，然后成为测试用例。另一个思路则是通过用例编写用的 DSL 语言，人工编辑测试用例。fetchweb 是对第二种思路的一个尝试。（因为比较容易实现 \uD83E\uDD23）"},void 0,!1,void 0,this),`
`,n("p",{children:"fetchweb 最初的版本使用 selenium 实现 chrome 浏览器控制。现在改为 puppeteer，不过这个版本里，我选用了 electron。"},void 0,!1,void 0,this),`
`,n("p",{children:["electron 是基于 chromium、nodejs 开发的桌面端框架。通过 electron 可以使用 web 技术栈开发跨平台的桌面软件。puppeteer 也持控制 electron。这里通过 ",n("a",{href:"https://www.npmjs.com/package/puppeteer-in-electron",children:"puppeteer-in-electron"},void 0,!1,void 0,this)," 进行桥接。"]},void 0,!0,void 0,this),`
`,n("p",{children:[n("strong",{children:"生产项目应该使用 puppeteer + chromium 的组合"},void 0,!1,void 0,this),"。毕竟 electron 带有 nodejs，可能会产生不少安全问题。另外 electron 在 linux 环境中需要 Xvfb 支持，因为 electron 并不支持 chromium 的 headless 模式，这也会带来测试执行环境体积膨胀。"]},void 0,!0,void 0,this),`
`,n("p",{children:"fetchweb 基于 yaml 定义了一个 DSL。用户使用 DSL 来描述操作过程，从而实现现 UI 的自动化操作。目前已经实现了基本的点击、获取文本、iframe 处理。DSL 是基于 YAML 进行描述，相当只有声明语法，所以没有逻辑功能。这就不利于编写复杂脚本。如果需要编写复杂脚本，直接使用 js 可能更好。"},void 0,!1,void 0,this),`
`,n("p",{children:["核心代码在 ",n("a",{href:"https://github.com/yuekcc/fetchweb/blob/main/fetchweb.js",children:"https://github.com/yuekcc/fetchweb/blob/main/fetchweb.js"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"脚本示例："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{className:"language-yaml",children:[n("span",{className:"line",children:n("span",{style:{color:"#B392F0"},children:"---"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"name"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"fetch-demo-site"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"steps"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # 表示开始"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"start"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # 进入 URL"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"openUrl"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    url"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"http://localhost:10086/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # 点击某个元素"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"click"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    selector"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"# selector 总是从根窗口开始"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"window"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"          src"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"http://localhost:10086/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"xpath"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/html/body/a"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # 在打印某个元素文本数据（到日志）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"print"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    selector"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"window"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"          src"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"http://localhost:10086/iframe-1.html"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"xpath"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/html/body/iframe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"xpath"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/html/body/div"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # 断言"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"assert"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    method"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"eq"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" # 比较方法，目前只支持字符串相等（==）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    expect"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"'iframe-inner-1'"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"    selector"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"window"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:":"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#85E89D"},children:"          src"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"http://localhost:10086/iframe-1.html"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"xpath"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/html/body/iframe"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"      - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"xpath"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"/html/body/div"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"  # 表示结束"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"  - "},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"type"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:": "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:"end"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("p",{children:"2022 年 01 月 08 日"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{a as default};
