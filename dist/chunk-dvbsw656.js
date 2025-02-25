import{e as n,h as l}from"/dist/chunk-scq2q67j.js";function i(){return l("div",{class:"markdown-body",children:l(n,{children:[l("h1",{children:"10 年开发/js/java/rust/zig"},void 0,!1,void 0,this),`
`,l("p",{children:"关键字：本科、电子信息工程、js、nodejs、golang、前端、工程化"},void 0,!1,void 0,this),`
`,l("p",{children:"从前端到后端，我都有所涉猎。JavaScript、Java 和 Python 是我最自信的技能。Rust、Go 和 Zig，我也有深入的了解。我还在 Vue、Svelte、Express、Spring Boot、SQLite、MySQL 等方面积累了丰富的经验。"},void 0,!1,void 0,this),`
`,l("p",{children:"在前端领域，我设计并开发了多个 CI/CD 系统页面，包括流水线页面、产品发布流程页面等；还开发了基于 esbuild 的前端构建工具，增加 Vue、Vue Template 支持，性能甚至比 Webpack 更强大。我在多个项目中应用了此个工具，效果显著。"},void 0,!1,void 0,this),`
`,l("p",{children:"在后端方面，我熟悉数据库、docker 容器化、HTTP 协议、Node.js 等技术。我曾使用 Rust 开发爬虫 DSL 工具，以实现网页测试自动化系统；也曾基于 Express 开发前端 BFF。"},void 0,!1,void 0,this),`
`,l("p",{children:"此外，我也探索了一些比较前沿的技术，比如 Zig、WASM、低代码开发。我曾基于公司的低代码平台开发完整的应用，对低码开发有更深入的理解。我曾用 Python 实现了构建 DSL，大大提升了脚本的维护性。"},void 0,!1,void 0,this),`
`,l("p",{children:"总的来说，我的技术能力不局限于前端或后端。我喜欢尝试新技术，愿意探索更广阔的技术领域。我相信我的热情和自我驱动精神可以使我在未来的工作中不断进步。"},void 0,!1,void 0,this),`
`,l("h2",{children:"近三年项目经历"},void 0,!1,void 0,this),`
`,l("h3",{children:"DevOps 系统流水线模块前端"},void 0,!1,void 0,this),`
`,l("p",{children:"流水线属于外售版本的 DevOps 系统中的一个核心模块，承载开发人员日常工作，包括 daily build、source code merge build 等。"},void 0,!1,void 0,this),`
`,l("p",{children:"流水线前端早期版本基于 es5 + jquery + vuejs 的“混沌”开发模式，中期成功引入 rollup 为核心的工程化工具，现在已经演进化为基于 esbuild 的工程化项目。"},void 0,!1,void 0,this),`
`,l("p",{children:"主要贡献："},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:"担任前端小组开发骨干角色"},void 0,!1,void 0,this),`
`,l("li",{children:[`基于 rollup/esbuild 实现的前端工程化，提升开发效率
`,l("ul",{children:[`
`,l("li",{children:"增加 babel/postcss/ 工具"},void 0,!1,void 0,this),`
`,l("li",{children:"基于 expressjs 实现的 dev-server"},void 0,!1,void 0,this),`
`,l("li",{children:"自研基于 vue-template-compiler 实现 *.template.html 的 vue 模板支持持（实现模板、样式、js 代码分离）"},void 0,!1,void 0,this),`
`,l("li",{children:"最近基于 esbuild 及一系列插件实现新的构建工具，项目构建时间缩短到原来的 10%，开发体验也更接近 vue-cli 工程"},void 0,!1,void 0,this),`
`,l("li",{children:"基于 expressjs + http-proxy-middle 实现的开发服务器，不再需要配置 nginx"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("li",{children:"输出项目基础代码、工具库（后续也复用到流水线模块相关的多个项目中）"},void 0,!1,void 0,this),`
`,l("li",{children:"带领前端小组重构项目"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("blockquote",{children:[`
`,l("p",{children:"题外：为什么不直接引入 vue-cli？"},void 0,!1,void 0,this),`
`,l("p",{children:`项目早期并没有使用构建工具，而是人工编写 es5 代码来保证 ie 的兼容性。代码更是大段大段的内置到 js 文件的 template（html）。
在权衡投入的结果下，引入 rollup 来实现工程化。从 rollup 升级到 vue-cli 也需要大量代码修改。最近版本也放弃支持 ie 系统浏览器。
将脚本工具升级为 esbuild 为的核心的工具，可以在保证代码在几乎不修改的情况下顺利构建。esbuild 的插件体系也更为简洁，而且性能也更好。
新的构建工具，性能可以用“光速”来形容，10k 代码量，平均用时为 2s，并且也支持 vue SFC、scss。`},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("h3",{children:"部门级 DevOps 系统（公司内部工具）"},void 0,!1,void 0,this),`
`,l("p",{children:["与上面的出口版本不同，这个 DevOps 系统是基于公司级 devops 系统的二次开发。目标是",l("strong",{children:"更好更快地完成最后一公里"},void 0,!1,void 0,this),"，服务于公司内部，日 pv 2000+。"]},void 0,!0,void 0,this),`
`,l("p",{children:`早期版本的核心使用 Angular + Spring boot 实现的依赖软件溯源工具，主要功能是实现项目的依赖设计、使用申请审批，
后续加上需求管理、流水线、构建系统、门禁、数据面板、测试、配置中心等近 20 个模块。技术栈也迁移为 vue + spring boot 的后台服务架构。`},void 0,!1,void 0,this),`
`,l("p",{children:"主要贡献："},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:[`使用 Vue 重写原来的基于 Angular 的前端：
`,l("ul",{children:[`
`,l("li",{children:"基于 Element UI 二次封装常用的业务组件：全声明式的表格、树型选择、折叠侧栏、弹窗 Service 等 10+ 个业务组件"},void 0,!1,void 0,this),`
`,l("li",{children:"开发出一个适用于 Vue 的 DI 库，配置基于 Rxjs 封装的 HttpClient 和 Composition API 平滑移植 Angular 中的 Service，减少重写项目的工作量。"},void 0,!1,void 0,this),`
`,l("li",{children:"提供范式代码方便新手同事上手项目"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("li",{children:"支撑 Angular 版本、Vue 版本同时开发"},void 0,!1,void 0,this),`
`,l("li",{children:"支撑前端性能优化"},void 0,!1,void 0,this),`
`,l("li",{children:[`微前端改造
`,l("ul",{children:[`
`,l("li",{children:"按项目情况待制定了四种方案：插件方案，iframe 方案，基于 web component 方案"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("li",{children:"与后端开发制定接口数据结构"},void 0,!1,void 0,this),`
`,l("li",{children:"独立完成基于构建结果分析的依赖溯源模块前端"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("h3",{children:"工作流系统"},void 0,!1,void 0,this),`
`,l("p",{children:"全栈项目。前端是使用 vue 实现的分步表单，后端是 nodejs 实现的 api 服务，数据库使用 mysql。"},void 0,!1,void 0,this),`
`,l("p",{children:"主要贡献："},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:"实现分步表单，让不同角色用户参与流程中"},void 0,!1,void 0,this),`
`,l("li",{children:[`维护 nodejs 的接口服务
`,l("ul",{children:[`
`,l("li",{children:"项目本身直接基于 nodejs 的 http 包自研了基础框架"},void 0,!1,void 0,this),`
`,l("li",{children:"数据库连接部分直接使用 mysql 库"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("h2",{children:"三年前项目经历"},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:"保险代理公司门店系统"},void 0,!1,void 0,this),`
`,l("li",{children:"代理人财务结算系统"},void 0,!1,void 0,this),`
`,l("li",{children:"网站（公司门户、手机端网站） * N"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("p",{children:"使用的技术栈包括："},void 0,!1,void 0,this),`
`,l("ul",{children:[`
`,l("li",{children:"vb6"},void 0,!1,void 0,this),`
`,l("li",{children:"f#"},void 0,!1,void 0,this),`
`,l("li",{children:"golang"},void 0,!1,void 0,this),`
`,l("li",{children:"kotlin"},void 0,!1,void 0,this),`
`,l("li",{children:"php"},void 0,!1,void 0,this),`
`,l("li",{children:"python"},void 0,!1,void 0,this),`
`,l("li",{children:"vue"},void 0,!1,void 0,this),`
`,l("li",{children:"uniapp"},void 0,!1,void 0,this),`
`,l("li",{children:"react"},void 0,!1,void 0,this),`
`,l("li",{children:"mysql"},void 0,!1,void 0,this),`
`,l("li",{children:"sqlserver"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,l("p",{children:"承担的角色包括：IT 部门负责人、后台开发、前端开发、桌面端开发、运维、产品经理"},void 0,!1,void 0,this),`
`,l("h2",{children:"非生产性质作品"},void 0,!1,void 0,this),`
`,l("p",{children:["见 ",l("a",{href:"https://github.com/yuekcc",children:"https://github.com/yuekcc"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,l("h2",{children:"工作经历"},void 0,!1,void 0,this),`
`,l("table",{children:[l("thead",{children:l("tr",{children:[l("th",{children:"时间"},void 0,!1,void 0,this),l("th",{children:"公司"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),l("tbody",{children:[l("tr",{children:[l("td",{children:"20 年中 - 至今"},void 0,!1,void 0,this),l("td",{children:"HW-OD"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),l("tr",{children:[l("td",{children:"19 年中 - 20 年中"},void 0,!1,void 0,this),l("td",{children:"EPRO"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),l("tr",{children:[l("td",{children:"15 年中 - 19 年中"},void 0,!1,void 0,this),l("td",{children:"东莞 XLN"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),l("tr",{children:[l("td",{children:"10 年底 - 15 年中"},void 0,!1,void 0,this),l("td",{children:"南京 JYT"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),l("tr",{children:[l("td",{children:"09 年 - 10 年底"},void 0,!1,void 0,this),l("td",{children:"东莞 KZ"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,l("hr",{},void 0,!1,void 0,this),`
`,l("p",{children:"2021.11.11"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{i as default};
