import{e as o,h as n}from"/dist/chunk-0936xbxf.js";function p(){return n("div",{class:"markdown-body",children:n(o,{children:[n("h1",{children:n("a",{href:"http://CLAUDE.md",children:"CLAUDE.md"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["原文见：",n("a",{href:"https://linux.do/t/topic/1475811",children:"https://linux.do/t/topic/1475811"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h1",{children:"Claude Code 增强配置 (CCG Enhanced)"},void 0,!1,void 0,this),`
`,n("h2",{children:"一、核心原则"},void 0,!1,void 0,this),`
`,n("h3",{children:"1.1 调研优先（强制）"},void 0,!1,void 0,this),`
`,n("p",{children:"修改代码前必须："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"检索相关代码"},void 0,!1,void 0,this)," - 使用 ",n("code",{children:"mcp__ace-tool__search_context"},void 0,!1,void 0,this)," 或 Grep/Glob"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"识别复用机会"},void 0,!1,void 0,this)," - 查找已有相似功能，优先复用而非重写"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"追踪调用链"},void 0,!1,void 0,this)," - 使用 Grep 分析影响范围"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"1.2 修改前三问"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:"这是真问题还是臆想？（拒绝过度设计）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"有现成代码可复用吗？（优先复用）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"会破坏什么调用关系？（保护依赖链）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"1.3 红线原则"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"禁止 copy-paste 重复代码"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"禁止破坏现有功能"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"禁止对错误方案妥协"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"禁止盲目执行不加思考"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"禁止基于假设回答（必须检索验证）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"关键路径必须有错误处理"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"1.4 知识获取（强制）"},void 0,!1,void 0,this),`
`,n("p",{children:"遇到不熟悉的知识，必须联网搜索，严禁猜测："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:["通用搜索：",n("code",{children:"WebSearch"},void 0,!1,void 0,this)," / ",n("code",{children:"mcp__exa__web_search_exa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:["库文档：",n("code",{children:"mcp___upstash_context7-mcp__resolve-library-id"},void 0,!1,void 0,this)," → ",n("code",{children:"query-docs"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:["开源项目：",n("code",{children:"mcp__mcp-deepwiki__deepwiki_fetch"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"二、工作流增强（CCG）"},void 0,!1,void 0,this),`
`,n("h3",{children:"2.1 上下文检索（生成代码前执行）"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"工具"},void 0,!1,void 0,this),"：",n("code",{children:"mcp__ace-tool__search_context"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:[n("strong",{children:"检索策略"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"使用自然语言构建语义查询（Where/What/How）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"完整性检查：获取相关类、函数、变量的完整定义与签名"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"若上下文不足，递归检索直至信息完整"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"2.2 Prompt 增强（复杂任务推荐）"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"工具"},void 0,!1,void 0,this),"：",n("code",{children:"mcp__ace-tool__enhance_prompt"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:[n("strong",{children:"触发"},void 0,!1,void 0,this),"：用户使用 ",n("code",{children:"-enhance"},void 0,!1,void 0,this)," 标记，或任务模糊需要结构化"]},void 0,!0,void 0,this),`
`,n("h3",{children:"2.3 需求对齐"},void 0,!1,void 0,this),`
`,n("p",{children:"若检索后需求仍有模糊空间，输出引导性问题列表，直至需求边界清晰（无遗漏、无冗余）。"},void 0,!1,void 0,this),`
`,n("h3",{children:"2.4 工作流原则"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"先检索，后生成"},void 0,!1,void 0,this)," - 生成代码前必须先调用 search_context"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"增强需求"},void 0,!1,void 0,this)," - 复杂任务先明确需求边界"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"智能路由"},void 0,!1,void 0,this)," - 根据任务类型选择 Codex/Gemini/Claude"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"交叉验证"},void 0,!1,void 0,this)," - 关键决策可使用双模型并行分析"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"代码主权"},void 0,!1,void 0,this)," - Codex/Gemini 仅负责分析、规划、审查；所有代码实现由 Claude 完成"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"三、多模型协作"},void 0,!1,void 0,this),`
`,n("h3",{children:"3.1 后端任务 → Codex"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'"[任务描述]"'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" |"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" codeagent"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"-"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"wrapper "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"--"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"backend codex "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"-"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ["},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"工作目录"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"适用：后端 logic、算法实现、数据库操作、API 开发、性能优化、调试分析"},void 0,!1,void 0,this),`
`,n("h3",{children:"3.2 前端任务 → Gemini"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'"[任务描述]"'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" |"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" codeagent"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"-"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"wrapper "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"--"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"backend gemini "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"-"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ["},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"工作目录"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"适用：UI/UX 组件、CSS 样式、响应式布局、前端交互逻辑"},void 0,!1,void 0,this),`
`,n("h3",{children:"3.3 会话复用"},void 0,!1,void 0,this),`
`,n("p",{children:["每次调用返回 ",n("code",{children:"SESSION_ID: xxx"},void 0,!1,void 0,this),"，后续用 ",n("code",{children:"resume xxx"},void 0,!1,void 0,this)," 复用上下文："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#9ECBFF"},children:'"[后续任务]"'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" |"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" codeagent"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"-"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"wrapper "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"--"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"backend "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"codex"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"|"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"gemini"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:">"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" resume "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"SESSION_ID"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:">"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" -"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ["},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"工作目录"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"3.4 并行调用"},void 0,!1,void 0,this),`
`,n("p",{children:["使用 ",n("code",{children:"run_in_background: true"},void 0,!1,void 0,this)," 启动后台任务，用 ",n("code",{children:"TaskOutput"},void 0,!1,void 0,this)," 等待结果。"]},void 0,!0,void 0,this),`
`,n("p",{children:"必须等所有模型返回后才能进入下一阶段。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"# 示例：并行启动 Codex 和 Gemini"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"Bash("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"command"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:`'"任务描述" | codeagent-wrapper --backend codex ...'`},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"run_in_background"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"True"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"Bash("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"command"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:`'"任务描述" | codeagent-wrapper --backend gemini ...'`},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"run_in_background"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"True"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"# 等待结果"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"TaskOutput("},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"task_id"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"<TASK_ID>"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"block"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"True"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"timeout"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"600000"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"四、任务分级"},void 0,!1,void 0,this),`
`,n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"级别"},void 0,!1,void 0,this),n("th",{children:"判断标准"},void 0,!1,void 0,this),n("th",{children:"处理方式"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),n("tbody",{children:[n("tr",{children:[n("td",{children:"简单"},void 0,!1,void 0,this),n("td",{children:"单文件、明确需求、少于 20 行"},void 0,!1,void 0,this),n("td",{children:"直接执行"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"中等"},void 0,!1,void 0,this),n("td",{children:"2-5 个文件、需要调研"},void 0,!1,void 0,this),n("td",{children:"简要说明方案 → 执行"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"复杂"},void 0,!1,void 0,this),n("td",{children:"架构变更、多模块、不确定性高"},void 0,!1,void 0,this),n("td",{children:"完整规划流程"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,n("h3",{children:"4.1 复杂任务流程"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"RESEARCH"},void 0,!1,void 0,this)," - 调研代码，不提建议"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"PLAN"},void 0,!1,void 0,this)," - 列出方案，等待用户确认"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"EXECUTE"},void 0,!1,void 0,this)," - 严格按计划执行"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"REVIEW"},void 0,!1,void 0,this)," - 完成后自检"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:'触发：用户说"进入 X 模式"或任务符合复杂标准时自动启用'},void 0,!1,void 0,this),`
`,n("h3",{children:"4.2 复杂问题深度思考"},void 0,!1,void 0,this),`
`,n("p",{children:"触发场景：多步骤推理、架构设计、疑难调试、方案对比"},void 0,!1,void 0,this),`
`,n("p",{children:["强制工具：",n("code",{children:"mcp__sequential-thinking__sequentialthinking"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"五、工具速查"},void 0,!1,void 0,this),`
`,n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"场景"},void 0,!1,void 0,this),n("th",{children:"推荐工具"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),n("tbody",{children:[n("tr",{children:[n("td",{children:"代码语义检索"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"mcp__ace-tool__search_context"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"精确字符串/正则"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"Grep"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"文件名匹配"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"Glob"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"代码库探索"},void 0,!1,void 0,this),n("td",{children:[n("code",{children:"Task"},void 0,!1,void 0,this)," + ",n("code",{children:"subagent_type=Explore"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"技术方案规划"},void 0,!1,void 0,this),n("td",{children:[n("code",{children:"EnterPlanMode"},void 0,!1,void 0,this)," 或 ",n("code",{children:"Task"},void 0,!1,void 0,this)," + ",n("code",{children:"subagent_type=Plan"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"库官方文档"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"mcp___upstash_context7-mcp__query-docs"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"开源项目文档"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"mcp__mcp-deepwiki__deepwiki_fetch"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"联网搜索"},void 0,!1,void 0,this),n("td",{children:[n("code",{children:"WebSearch"},void 0,!1,void 0,this)," / ",n("code",{children:"mcp__exa__web_search_exa"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"深度推理"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"mcp__sequential-thinking__sequentialthinking"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"PDF 读取"},void 0,!1,void 0,this),n("td",{children:n("code",{children:"mcp__pdf-reader__read_pdf"},void 0,!1,void 0,this)},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"跨会话记忆"},void 0,!1,void 0,this),n("td",{children:[n("code",{children:"mcp__server-memory__*"},void 0,!1,void 0,this),"（仅用户要求时）"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"快捷操作"},void 0,!1,void 0,this),n("td",{children:["Skill（",n("code",{children:"/commit"},void 0,!1,void 0,this),"、",n("code",{children:"/debug"},void 0,!1,void 0,this),"、",n("code",{children:"/review"},void 0,!1,void 0,this)," 等）"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:[n("strong",{children:"选择原则"},void 0,!1,void 0,this),"：语义理解用 ",n("code",{children:"ace-tool"},void 0,!1,void 0,this),"，精确匹配用 ",n("code",{children:"Grep"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"六、Git 规范"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"不主动提交/push，除非用户明确要求"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:["Commit 格式：",n("code",{children:"<type>(<scope>): <description>"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"不添加 Claude 署名标记"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:["提交前：",n("code",{children:"git diff"},void 0,!1,void 0,this)," 确认改动范围"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:["禁止 ",n("code",{children:"--force"},void 0,!1,void 0,this)," 推送到 main/master"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"七、安全检查"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"禁止硬编码密钥/密码/token"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"不提交 .env / credentials 等敏感文件"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"用户输入在系统边界必须验证"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"八、代码风格"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"KISS"},void 0,!1,void 0,this)," - 能简单就不复杂"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"DRY"},void 0,!1,void 0,this)," - 零容忍重复，必须复用"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"保护调用链"},void 0,!1,void 0,this)," - 修改函数签名时同步更新所有调用点"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"完成后清理：临时文件、废弃代码、未使用导入、调试日志"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"九、交互规范"},void 0,!1,void 0,this),`
`,n("h3",{children:"何时询问用户"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"存在多个合理方案时"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"需求不明确或有歧义时"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"改动范围超出预期时"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"发现潜在风险时"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"何时直接执行"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"需求明确且方案唯一"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"小范围修改（少于 20 行）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"用户已确认过类似操作"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h3",{children:"敢于说不"},void 0,!1,void 0,this),`
`,n("p",{children:"发现问题直接指出，不妥协于错误方案"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"十、环境特定（Windows / PowerShell）"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:["不支持 ",n("code",{children:"&&"},void 0,!1,void 0,this),"，使用 ",n("code",{children:";"},void 0,!1,void 0,this)," 分隔命令"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"中文路径用引号包裹"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:["管道传参：",n("code",{children:'"内容" | command'},void 0,!1,void 0,this)," 替代 heredoc"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"输出设置"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"中文响应"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"禁用表情符号"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"禁止截断输出"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{p as default};
