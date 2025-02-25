import{e as p,h as n}from"/dist/chunk-scq2q67j.js";function l(){return n("div",{class:"markdown-body",children:n(p,{children:[n("h1",{children:"弹窗设计笔记"},void 0,!1,void 0,this),`
`,n("p",{children:["读 ",n("a",{href:"https://www.woshipm.com/pd/4182303.html",children:"B 端设计指南 04—— “弹窗”究竟应该如何设计"},void 0,!1,void 0,this)," 的笔记。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"弹窗"},void 0,!1,void 0,this),`
`,n("p",{children:"弹窗，是一种中断用户当前操作并对其进行补充、或者对当前操作进行强制反馈的交互形式。"},void 0,!1,void 0,this),`
`,n("p",{children:"弹窗分为：模态弹窗和非模态弹窗。"},void 0,!1,void 0,this),`
`,n("p",{children:"先说非模态弹窗。非 s 模态弹窗不会阻塞用户当前操作，用户可以同时操作弹窗和其他内容。这种弹窗适合提示一些非关键信息，或者辅助信息。"},void 0,!1,void 0,this),`
`,n("p",{children:"模态弹窗一般需要用户进行强交互："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"它可以告知用户关键的信息，需要用户去做决定；"},void 0,!1,void 0,this),`
`,n("li",{children:"用户必须先完成当前交互的操作后才继续正常流程。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"非模态弹窗"},void 0,!1,void 0,this),`
`,n("p",{children:"非模态弹窗更是揭示情况的展示，可以分为这几种："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"通知 notification"},void 0,!1,void 0,this),`
`,n("li",{children:"全局提示信息或警告 message"},void 0,!1,void 0,this),`
`,n("li",{children:"气泡卡片 popover/popup"},void 0,!1,void 0,this),`
`,n("li",{children:"文字揭示 tooltip"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"模态弹窗"},void 0,!1,void 0,this),`
`,n("p",{children:"模态弹窗一般分为以下几种："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"对话弹窗：一般是一种选择或确认窗口，用户需要选中其中一个按钮；"},void 0,!1,void 0,this),`
`,n("li",{children:"内嵌表单弹窗：B 端产品中经常需要配置一些内容，表单可能是一个或几个 checkbox、radio、input、drapdown，使用弹窗可快捷完成设置，这种弹窗的内容一般不复杂；"},void 0,!1,void 0,this),`
`,n("li",{children:"分步弹窗：分步弹窗是分步表单的一种衍生品，考量是选项的规模。使用弹窗的场景主要是内容比较少，但是又有先后关系的情况；"},void 0,!1,void 0,this),`
`,n("li",{children:"文件选择：选择一个或多个文件，也可以是一种数据；"},void 0,!1,void 0,this),`
`,n("li",{children:"复杂信息展示：复杂信息弹窗采用接近全屏的窗口，一般情况下复杂信息的展示应该选择切换页面，使用弹窗会更轻巧，从而提升操作效率。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"弹窗的特殊形式"},void 0,!1,void 0,this),`
`,n("p",{children:"有几种特殊的弹窗形式："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"抽屉：一般是种占大半屏又紧贴边沿的窗口；"},void 0,!1,void 0,this),`
`,n("li",{children:"新建页面：用户会进入一个新的页面。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h2",{children:"如何选择弹窗、抽屉、新建页"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"页面的内容是决定呈现形式"},void 0,!1,void 0,this),"。无论是弹窗、抽屉、新建页，究其本身就是一个内容载体，因此选择如何使用，很大程度上取决你的内容量的多少。"]},void 0,!0,void 0,this),`
`,n("p",{children:"内容量，通常包含了你页面当中文字、图片、视频、表格、以及各种复杂的交互。如果你觉得页面已经密密麻麻，在弹窗中根本无法呈现，这时候你就需要考虑弹窗是否合适。"},void 0,!1,void 0,this),`
`,n("p",{children:"从承载内容的量来看：新建页 > 抽屉 > 弹窗。弹窗只能承载较小内容、抽屉其次、新建页最优。"},void 0,!1,void 0,this),`
`,n("p",{children:"当然内容承载量不是唯一标准，还需要考虑页面的连贯性、页面切换成本等。"},void 0,!1,void 0,this),`
`,n("h3",{children:"一些例子"},void 0,!1,void 0,this),`
`,n("h4",{children:"纷享销客、销售易：抽屉形式，方便用户切换。"},void 0,!1,void 0,this),`
`,n("p",{children:"它们采取抽屉的形式，因为纷享销客与销售易都是属于 aPaas 平台，存在用户去设置不同字段以及不同展示逻辑，每个详情页又会存在快速跳转等一系列方便用户同时也会带来交互问题的“骚操作”，导致抽屉的选择是大于其他两种弹窗形式。"},void 0,!1,void 0,this),`
`,n("p",{children:"其次在内容量上，内容大多以文字记录为主，不会存在大段文字以及大图的情况，因此不会存在宽度过宽的情况。"},void 0,!1,void 0,this),`
`,n("p",{children:"只是在字段数量上会有所增多，导致字段的高度会随之增加，因此满足上面条件的交互控件只有抽屉与新建页。"},void 0,!1,void 0,this),`
`,n("p",{children:"最后在连贯性与切换成本上，明显在 CRM 产品中，用户需要经常来回切换去对比客户信息以及销售的更进状态，因此在抽屉的体验上，能够让用户进行连贯的用户体验，因此抽屉最为合适。"},void 0,!1,void 0,this),`
`,n("h4",{children:"Hubspot、Zoho：新建页形式，查看全量信息。"},void 0,!1,void 0,this),`
`,n("p",{children:"Hubspot 与 Zoho 都是国外两款非常出名的 CRM。因为 Hubspot、Zoho 是属于国外产品传入中国，因此在使用习惯上，更偏向于专注去做一件事，比如 Hubspot 上，在其客户详情页能够直接进行添加日程、拨打电话、发送邮件等几十项操作，并且一切围绕着 Marketing、Sales 展开。"},void 0,!1,void 0,this),`
`,n("p",{children:"因此使得页面需要更加专注，需要看到更加全量的信息，再次国外 Saas 用户也是对完整流程的操作更加青睐（一个操作只干一件事），而国内喜欢快捷融合（喜欢有很多快捷操作），因此造成 Hubspot 与 Zoho 都采取新建页的形式查看数据。"},void 0,!1,void 0,this),`
`,n("h4",{children:"明道云、Teambition：复杂信息弹窗。"},void 0,!1,void 0,this),`
`,n("p",{children:"它们采取大弹窗的形式，因为两者都是将信息分为左右两部分，左侧信息展示方便用户进行关键信息的阅读，满足用户的实际需求；右侧进行灵活的展示，能够通过不同业务的信息进行相应分配。"},void 0,!1,void 0,this),`
`,n("p",{children:"复杂信息弹窗都会在左上角进行快速切换，通过上下箭头满足用户快速切换的需求。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"2023 年 8 月 29 日，初稿"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
