import{e as n,h as e}from"/dist/chunk-0936xbxf.js";function a(){return e("div",{class:"markdown-body",children:e(n,{children:[e("p",{children:['根据 openCode 的实现，当你提问"请给我的项目写一个 ',e("a",{href:"http://README.md",children:"README.md"},void 0,!1,void 0,this),'"时，系统会使用以下全部 prompt：']},void 0,!0,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("h2",{children:"完整 Prompt 列表"},void 0,!1,void 0,this),`
`,e("h3",{children:["1. ",e("strong",{children:"系统级基础 Prompt"},void 0,!1,void 0,this)," (",e("code",{children:"system.ts"},void 0,!1,void 0,this),")"]},void 0,!0,void 0,this),`
`,e("h4",{children:"Provider 特定提示词（根据模型选择）："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/anthropic.txt",children:"anthropic.txt"},void 0,!1,void 0,this)," - Claude 模型的基础提示词"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/beast.txt",children:"beast.txt"},void 0,!1,void 0,this)," - GPT 系列模型的基础提示词"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/gemini.txt",children:"gemini.txt"},void 0,!1,void 0,this)," - Gemini 模型的基础提示词"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/codex.txt",children:"codex.txt"},void 0,!1,void 0,this)," - Codex 专用提示词"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/qwen.txt",children:"qwen.txt"},void 0,!1,void 0,this)," - Qwen 模型提示词"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h4",{children:"Anthropic 专用头部："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/anthropic_spoof.txt",children:"anthropic_spoof.txt"},void 0,!1,void 0,this),' - 欺骗性头部（如果 providerID 包含 "anthropic"）']},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h4",{children:"Codex 指令："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/codex_header.txt",children:"codex_header.txt"},void 0,!1,void 0,this)," - Codex 额外指令"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h3",{children:["2. ",e("strong",{children:"环境信息 Prompt"},void 0,!1,void 0,this)," (动态生成)"]},void 0,!0,void 0,this),`
`,e("p",{children:["在 ",e("a",{href:"packages/opencode/src/session/system.ts#L38-L61",children:"system.ts#L38-L61"},void 0,!1,void 0,this)," 中生成："]},void 0,!0,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{children:[e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"Here is some useful information about the environment you are running in:"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<env>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"  Working directory: ${"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"Instance.directory"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"  Is directory a git repo: ${"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"project.vcs"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" === "},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:'"git"'},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" ? "},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:'"yes"'},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" : "},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:'"no"'},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"  Platform: ${"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"process.platform"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  Today's date: ${new Date().toDateString()}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"</env>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<files>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"  ${"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"Ripgrep.tree"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"(...)}  // 项目文件树"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"</files>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,e("h3",{children:["3. ",e("strong",{children:"自定义规则 Prompt"},void 0,!1,void 0,this)," (",e("code",{children:"custom()"},void 0,!1,void 0,this),")"]},void 0,!0,void 0,this),`
`,e("p",{children:["在 ",e("a",{href:"packages/opencode/src/session/system.ts#L63-L139",children:"system.ts#L63-L139"},void 0,!1,void 0,this)," 中加载："]},void 0,!0,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:["项目根目录的 ",e("code",{children:"AGENTS.md"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["项目根目录的 ",e("code",{children:"CLAUDE.md"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["全局配置目录的 ",e("code",{children:"AGENTS.md"},void 0,!1,void 0,this)," (",e("code",{children:"~/.config/opencode/AGENTS.md"},void 0,!1,void 0,this),")"]},void 0,!0,void 0,this),`
`,e("li",{children:["Claude Code 配置 ",e("code",{children:"~/.claude/CLAUDE.md"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["配置文件中 ",e("code",{children:"instructions"},void 0,!1,void 0,this)," 字段指定的 URL 或文件"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h3",{children:["4. ",e("strong",{children:"Agent 特定 Prompt"},void 0,!1,void 0,this)," (可选)"]},void 0,!0,void 0,this),`
`,e("p",{children:["如果使用的 Agent 有自定义 prompt（在 ",e("a",{href:"packages/opencode/src/session/prompt.ts#L63-L64",children:"prompt.ts#L63-L64"},void 0,!1,void 0,this),"）："]},void 0,!0,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("a",{href:"packages/opencode/src/agent/generate.txt",children:"generate.txt"},void 0,!1,void 0,this)," - 生成任务专用提示"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/agent/prompt/explore.txt",children:"explore.txt"},void 0,!1,void 0,this)," - 探索任务专用提示"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h3",{children:["5. ",e("strong",{children:"会话控制 Prompt"},void 0,!1,void 0,this)," (条件插入)"]},void 0,!0,void 0,this),`
`,e("p",{children:["在 ",e("a",{href:"packages/opencode/src/session/prompt.ts#L600-L614",children:"prompt.ts#L600-L614"},void 0,!1,void 0,this)," 中，根据情况插入："]},void 0,!0,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/plan.txt",children:"plan.txt"},void 0,!1,void 0,this)," - 如果是第一步，插入计划提示"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/build-switch.txt",children:"build-switch.txt"},void 0,!1,void 0,this)," - 构建/计划模式切换提示"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/session/prompt/max-steps.txt",children:"max-steps.txt"},void 0,!1,void 0,this)," - 如果达到最大步骤数（例如 ",e("code",{children:"maxSteps: 5"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h3",{children:["6. ",e("strong",{children:"用户消息包装 Prompt"},void 0,!1,void 0,this)," (loop 中)"]},void 0,!0,void 0,this),`
`,e("p",{children:["在 ",e("a",{href:"packages/opencode/src/session/prompt.ts#L529-L542",children:"prompt.ts#L529-L542"},void 0,!1,void 0,this)," 中："]},void 0,!0,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{children:[e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"<system-reminder>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"The user sent the following message:"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"请给我的项目写一个 "},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"README.md"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"Please address this message and continue with your tasks."},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"</system-reminder>"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,e("h3",{children:["7. ",e("strong",{children:"工具描述 Prompt"},void 0,!1,void 0,this)," (工具注册时)"]},void 0,!0,void 0,this),`
`,e("p",{children:["每个可用工具都有自己的描述，在执行时作为工具定义的一部分（",e("a",{href:"packages/opencode/src/session/prompt.ts#L600-L700",children:"prompt.ts#L600-L700"},void 0,!1,void 0,this),"）："]},void 0,!0,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("a",{href:"packages/opencode/src/tool/write.txt",children:"write.txt"},void 0,!1,void 0,this)," - 写文件工具"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/tool/read.txt",children:"read.txt"},void 0,!1,void 0,this)," - 读文件工具"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/tool/bash.txt",children:"bash.txt"},void 0,!1,void 0,this)," - 命令执行工具"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("a",{href:"packages/opencode/src/tool/edit.txt",children:"edit.txt"},void 0,!1,void 0,this)," - 编辑工具"]},void 0,!0,void 0,this),`
`,e("li",{children:"等等..."},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("h2",{children:"Prompt 组装顺序"},void 0,!1,void 0,this),`
`,e("p",{children:["完整的 prompt 组装流程（",e("a",{href:"packages/opencode/src/session/llm.ts#L60-L86",children:"llm.ts#L60-L86"},void 0,!1,void 0,this),"）："]},void 0,!0,void 0,this),`
`,e("ol",{children:[`
`,e("li",{children:"Header（anthropic_spoof，如果适用）"},void 0,!1,void 0,this),`
`,e("li",{children:"Provider 提示词 + Agent 提示词（二选一）"},void 0,!1,void 0,this),`
`,e("li",{children:"环境信息"},void 0,!1,void 0,this),`
`,e("li",{children:"自定义规则"},void 0,!1,void 0,this),`
`,e("li",{children:"用户消息包装"},void 0,!1,void 0,this),`
`,e("li",{children:"条件性插入的控制提示（plan、max-steps 等）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:['这样，当你说"请给我的项目写一个 ',e("a",{href:"http://README.md",children:"README.md"},void 0,!1,void 0,this),'"时，模型会看到：基础的 Agent 角色 + 项目上下文 + 工具能力 + 任务约束。']},void 0,!0,void 0,this),`
`,e("p",{children:["想深入了解 Agent 系统？看看 ",e("a",{href:"10-agent-types-and-modes-primary-agents-subagents-and-hidden-agents",children:"Agent 类型和模式"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{a as default};
