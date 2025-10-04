import{e as l,h as e}from"/dist/chunk-n2t7x54v.js";function i(){return e("div",{class:"markdown-body",children:e(l,{children:[e("h1",{children:"GIT 优秀实践"},void 0,!1,void 0,this),`
`,e("p",{children:e("a",{href:"https://dev.to/basementdevs/be-a-better-developer-with-these-git-good-practices-2dim",children:"原文"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("h2",{children:"分支名"},void 0,!1,void 0,this),`
`,e("p",{children:"基于原则："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"使用小写字母"},void 0,!1,void 0,this),`
`,e("li",{children:"kebab-case 风格"},void 0,!1,void 0,this),`
`,e("li",{children:"只使用 a-z、0-9，不使用其他字符"},void 0,!1,void 0,this),`
`,e("li",{children:["不要使用 ",e("code",{children:"--"},void 0,!1,void 0,this),"。如果有分支类型（前缀）可以使用 ",e("code",{children:"/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:"使用有有意义的分支名"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"错误示例："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:e("code",{children:"fixSidebar"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"feature-new-sidebar-"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"FeatureNewSidebar"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"feat_add_sidebar"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"优秀示例："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:e("code",{children:"feature/new-sidebar"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"add-new-sidebar"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"hotfix/interval-query-param-on-get-historical-data"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h2",{children:"分支名前缀"},void 0,!1,void 0,this),`
`,e("p",{children:"分支名前缀可以用来分类。下面是几种常见的前缀："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("code",{children:"feature"},void 0,!1,void 0,this)," 特性开发"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"release"},void 0,!1,void 0,this)," 发布"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"bugfix"},void 0,!1,void 0,this)," bug 修复"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"hotfix"},void 0,!1,void 0,this)," 补丁"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"docs"},void 0,!1,void 0,this)," 文档"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"如果使用类似 Jiro、Trello 之类的工单系统，分支名中可以带上工单号："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:e("code",{children:"feature/T-531-add-sidebar"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"docs/T-789-update-readme"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("li",{children:e("code",{children:"hotfix/T-142-security-path"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h2",{children:"Commit Message"},void 0,!1,void 0,this),`
`,e("p",{children:"Commit message 应该包括主题、描述两部分。主题是说明这次 commit 的主要内容，说明则用提供更详细的信息。"},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"主题使用命令式语气"},void 0,!1,void 0,this),`
`,e("li",{children:"主题应该按标题的语法写。比如不需要结尾的句号，首字母大写等"},void 0,!1,void 0,this),`
`,e("li",{children:"主题和描述之间应该有一个空行"},void 0,!1,void 0,this),`
`,e("li",{children:"长度限制。主题最多 50 字，说明最多 72 字"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"也可以使用结构化的 commit message 格式："},void 0,!1,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{className:"language-log",children:[e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<type>[optional scope]: <description>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"[optional body]"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"[optional footer(s)]"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"类型可以是："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("code",{children:"feat"},void 0,!1,void 0,this)," 引入新功能"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"fix"},void 0,!1,void 0,this)," 修 bug"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"refactor"},void 0,!1,void 0,this)," 重构代码"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"chore"},void 0,!1,void 0,this)," 其他内容，主要是指那些和产品代码无关的内容"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"docs"},void 0,!1,void 0,this)," 文档"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"perf"},void 0,!1,void 0,this)," 性能优化"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"style"},void 0,!1,void 0,this)," 格式化代码"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"test"},void 0,!1,void 0,this)," 测试相关"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"build"},void 0,!1,void 0,this)," 构建系统或脚本相关的变更"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"ci"},void 0,!1,void 0,this)," CI 系统配置相关的变更"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"env"},void 0,!1,void 0,this)," 环境变更，比如 CI 系统相关的环境变量变化、容器配置变更"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"scope 可以是主要模块。"},void 0,!1,void 0,this),`
`,e("p",{children:"body 则是上面说的说明。"},void 0,!1,void 0,this),`
`,e("p",{children:"footer commit 签名相关的内容。"},void 0,!1,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:"2024 年 4 月 27 日"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{i as default};
