import{e,h as i}from"/dist/chunk-n2t7x54v.js";function l(){return i("div",{class:"markdown-body",children:i(e,{children:[i("h1",{children:"Marknote 全文搜索的想法"},void 0,!1,void 0,this),`
`,i("p",{children:["Marknote 是纯前端渲染的 spa。要想被百度之类索引到估计不可能的。一是托管在 ",i("a",{href:"http://github.io",children:"github.io"},void 0,!1,void 0,this),"；二是没有生成 html，爬虫也不一定能获取到数据。"]},void 0,!0,void 0,this),`
`,i("p",{children:"如果需要实现文章内容搜索，只能自己实现。游客们手工 ctrl+f 当然也是可以的，但是就没有意义了。"},void 0,!1,void 0,this),`
`,i("h2",{children:"想法"},void 0,!1,void 0,this),`
`,i("p",{children:`全文搜索关键是建立一个索引。对于创建索引，应该是 elasticsearch 这种组件的内置功能。因为是中文内容，也涉及到中文的分词问题。不过我相信
elasticsearch 应该会有配合使用的组件。所以创建索引的问题就变成了另一个问题——如果向全文搜索引擎传入数据。`},void 0,!1,void 0,this),`
`,i("p",{children:`我想的是利用 webhooks 实现。github 是支持 webhooks 功能。用户向 git 仓库推送代码后，可以触发一个 http post 操作，调用特定的服务。
这样就可以搜索服务去更新索引。于是再次变成另一个问题——创建一个服务响应 webhooks，然后向搜索引擎推送更新的内容。`},void 0,!1,void 0,this),`
`,i("h2",{children:"设计"},void 0,!1,void 0,this),`
`,i("p",{children:i("img",{src:"/images/fulltext-search-for-marknote-arch.svg",alt:"架构"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,i("p",{children:"下面从三个角度去分析产品。"},void 0,!1,void 0,this),`
`,i("h3",{children:"作者"},void 0,!1,void 0,this),`
`,i("p",{children:"从作者视角审批搜索功能。作者就是 marknote 的用户。对于作者而言，搜索功能主要涉及索引创建的功能。"},void 0,!1,void 0,this),`
`,i("p",{children:"作者的工作流程："},void 0,!1,void 0,this),`
`,i("ol",{children:[`
`,i("li",{children:"作者写好文章，然后 push 到 github"},void 0,!1,void 0,this),`
`,i("li",{children:"search server 通过某种方式，得知作者更新的文章"},void 0,!1,void 0,this),`
`,i("li",{children:"下载新的文章"},void 0,!1,void 0,this),`
`,i("li",{children:"更新索引"},void 0,!1,void 0,this),`
`,i("li",{children:"结束"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,i("h3",{children:"访客"},void 0,!1,void 0,this),`
`,i("p",{children:"对于访客而言，搜索功能用于快速找到自己感兴趣的内容。流程："},void 0,!1,void 0,this),`
`,i("ol",{children:[`
`,i("li",{children:["访客访问 ",i("a",{href:"http://xxxx.github.io",children:"xxxx.github.io"},void 0,!1,void 0,this),"，打开页面后，在搜索栏输入关键字"]},void 0,!0,void 0,this),`
`,i("li",{children:"服务器发来响应，页面上展示出搜索结果。"},void 0,!1,void 0,this),`
`,i("li",{children:"搜索结果上有正文中的一小部分（包含关键字），有文章标题"},void 0,!1,void 0,this),`
`,i("li",{children:"访客点击其实一条结果，跳转到新该文章的特定位置"},void 0,!1,void 0,this),`
`,i("li",{children:"搜索结束"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,i("h3",{children:"开发"},void 0,!1,void 0,this),`
`,i("p",{children:"整个系统的关键是全文搜索引擎。首先是考虑开源产品。最为著名的可能是 elasticsearch。考虑到 marknote search 的使用场景，使用 elasticsearch 绝对是大才小用。而且维护一个 elasticsearch 系统或集群不是一件小成本能实现的事。所以在搜索引擎方面，我更倾向于 go 或 rust 实现小型引擎。我需要的只是一个支持中文英文全文搜索、性能比较好，资源消耗少的引擎。于是就是找到了 meilisearch。"},void 0,!1,void 0,this),`
`,i("p",{children:["meilisearch 官网上也对一票搜索引擎进行了对比，可以",i("a",{href:"https://docs.meilisearch.com/learn/what_is_meilisearch/comparison_to_alternatives.html",children:"看里"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,i("p",{children:"meilisearch 使用 rust 实现，通过 jieba-rs 分词实现对中文的支持。jieba 也是一个历史悠久的中文分词库了，有不同语言的实现，分词质量也是比较好的。"},void 0,!1,void 0,this),`
`,i("p",{children:["search server 并不需要特别多的接口：一个搜索接口，一个 webhook 处理。 ",i("s",{children:"目前打算使用 go 实现，追求的还是的部署简单"},void 0,!1,void 0,this)," 目前基于 nodejs 实现了 MVP 版本。"]},void 0,!0,void 0,this),`
`,i("p",{children:"用户上传新的文章后，会触发 github 的事件系统，然后触发仓库中配置的 webhook。search server 收到 webhook 接口请求后，马上响应对方服务器（其实是 github），然后启动新的线程调用 git 功能下载用户的仓库。然后分析仓库中的文章（.md 文件），重新建立或更新刷全文搜索索引。"},void 0,!1,void 0,this),`
`,i("h2",{children:"实现"},void 0,!1,void 0,this),`
`,i("p",{children:i("s",{children:"有生之年"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,i("p",{children:["有一个",i("a",{href:"mn-search",children:"MVP 实现"},void 0,!1,void 0,this),"了，目前已经实现："]},void 0,!0,void 0,this),`
`,i("ul",{className:"contains-task-list",children:[`
`,i("li",{className:"task-list-item",children:[i("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," ",i("s",{children:"响应接口"},void 0,!1,void 0,this)," webhook 回调接口，然后自动调用 git clone/pull 更新文章仓库"]},void 0,!0,void 0,this),`
`,i("li",{className:"task-list-item",children:[i("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 推送文章数据到搜索引擎"]},void 0,!0,void 0,this),`
`,i("li",{className:"task-list-item",children:[i("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," 有一个接口，用于搜索"]},void 0,!0,void 0,this),`
`,i("li",{className:"task-list-item",children:[i("input",{className:"task-list-item-checkbox",checked:!0,disabled:!0,type:"checkbox"},void 0,!1,void 0,this)," ~~有一个组件，",i("s",{children:"集成到 marknote 中"},void 0,!1,void 0,this)," 集成到 docutil"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,i("hr",{},void 0,!1,void 0,this),`
`,i("ul",{children:[`
`,i("li",{children:"2021 年 11 月 14 日，初始稿"},void 0,!1,void 0,this),`
`,i("li",{children:"2021 年 12 月 13 日，增加 mvp 实现的连接"},void 0,!1,void 0,this),`
`,i("li",{children:"2022 年 01 月 02 日，修复 MVP 实现的 URL 错误"},void 0,!1,void 0,this),`
`,i("li",{children:"2022 年 02 月 25 日，修改部分内容"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
