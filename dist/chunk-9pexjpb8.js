import{e as t,h as n}from"/dist/chunk-0936xbxf.js";function i(){return n("div",{class:"markdown-body",children:n(t,{children:[n("h1",{children:"[AI 助学] Agent 是什么？"},void 0,!1,void 0,this),`
`,n("p",{children:["下面给出一个针对“现在 AI 领域中常说的『智能体』（AI Agent）」的",n("strong",{children:"清晰、严格、又贴近实际工程的定义"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"一句话定义"},void 0,!1,void 0,this),`
`,n("p",{children:"在当前（约 2026 年）的语境下："},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:n("strong",{children:"AI 智能体 = 以大模型等 AI 算法为“决策大脑”，能感知环境、理解目标、自主规划并调用工具/系统执行行动，从而在较少人工干预下完成任务的软件实体。"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"拆解这个定义的关键要素"},void 0,!1,void 0,this),`
`,n("h3",{children:"1. 不是“会聊天的模型”，而是“能自己干活的系统”"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("strong",{children:"大语言模型（LLM）只是大脑"},void 0,!1,void 0,this),"：负责理解指令、推理与决策"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"智能体是一个完整系统"},void 0,!1,void 0,this),"：在大脑之外，还包含记忆、工具调用、环境接口、任务规划等模块[1][2]"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"可以粗略理解为："},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:["聊天机器人 = 会回答问题",n("br",{},void 0,!1,void 0,this),`
智能体 = 会自己想步骤、查资料、点接口、改文件、发邮件，把一件事“从头做到尾”。`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"2. 四个核心能力（判断一个东西是不是“智能体”的实用标准）"},void 0,!1,void 0,this),`
`,n("p",{children:["只要一个 AI 系统",n("strong",{children:"同时满足下面大部分特征"},void 0,!1,void 0,this),"，基本可以叫“智能体”："]},void 0,!0,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"感知（Perception）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"能从环境中获取信息：文本、数据库、API 返回值、文件、甚至传感器数据"},void 0,!1,void 0,this),`
`,n("li",{children:"在 LLM 时代，最常见的是“读取上下文 + 调用外部 API 获取最新状态”"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"理解与决策（Reasoning/Decision-making）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`不只是匹配规则，而是通过模型进行推理：
`,n("ul",{children:[`
`,n("li",{children:"分析当前状况"},void 0,!1,void 0,this),`
`,n("li",{children:"选择下一步动作"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:"比如：决定“先查库存，再给客户报价”，而不是死板按固定脚本走"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"行动（Action / Tool Use）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["能",n("strong",{children:"实际操作"},void 0,!1,void 0,this),`外部世界，而不仅仅“输出文字”：
`,n("ul",{children:[`
`,n("li",{children:"调用 HTTP API"},void 0,!1,void 0,this),`
`,n("li",{children:"读写数据库"},void 0,!1,void 0,this),`
`,n("li",{children:"操作文件、脚本"},void 0,!1,void 0,this),`
`,n("li",{children:"控制机器人、RPA 等"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:"也就是：不仅“说要做什么”，而且“真的去做了”"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"目标导向与一定程度的自主性（Goal-driven & Autonomy）"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["你给的是一个",n("strong",{children:"目标"},void 0,!1,void 0,this),"（例如：“每周帮我整理流水并生成报表发邮件给我”）"]},void 0,!0,void 0,this),`
`,n("li",{children:[`智能体会：
`,n("ul",{children:[`
`,n("li",{children:"自己拆分步骤（规划）"},void 0,!1,void 0,this),`
`,n("li",{children:"自己处理过程中出现的大部分小问题"},void 0,!1,void 0,this),`
`,n("li",{children:"只在必要时再来询问你"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:"而不是：每一步都要你手把手告诉它做什么"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"3. 典型架构（帮助理解“智能体”由什么组成）"},void 0,!1,void 0,this),`
`,n("p",{children:"绝大多数现代智能体系统，大致包含下列模块[2][3]："},void 0,!1,void 0,this),`
`,n("table",{children:[n("thead",{children:n("tr",{children:[n("th",{children:"模块"},void 0,!1,void 0,this),n("th",{children:"作用"},void 0,!1,void 0,this),n("th",{children:"常见实现方式"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),n("tbody",{children:[n("tr",{children:[n("td",{children:"决策大脑"},void 0,!1,void 0,this),n("td",{children:"理解任务、推理与决策"},void 0,!1,void 0,this),n("td",{children:"大语言模型（如 GPT 系列、Gemini 等）"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"记忆/状态"},void 0,!1,void 0,this),n("td",{children:"记住历史、长期偏好"},void 0,!1,void 0,this),n("td",{children:"向量数据库、外部 KV 存储"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"规划器"},void 0,!1,void 0,this),n("td",{children:"把大目标拆成多步任务"},void 0,!1,void 0,this),n("td",{children:"LLM + Prompt 设计 / 专门 Planner"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"工具/动作接口"},void 0,!1,void 0,this),n("td",{children:"真正“干活”的手和脚"},void 0,!1,void 0,this),n("td",{children:"函数调用、API 集成、RPA、脚本"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),n("tr",{children:[n("td",{children:"环境接口"},void 0,!1,void 0,this),n("td",{children:"感知环境变化"},void 0,!1,void 0,this),n("td",{children:"数据库查询、日志、传感器、多模态输入"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:[n("strong",{children:"因此："},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
“一个接了点接口的 GPT” ≠ 智能体`,n("br",{},void 0,!1,void 0,this),`
“一个围绕特定目标，把大模型 + 记忆 + 工具 + 规划组合起来的系统” ⇒ 才是真正的智能体。`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"4. 与传统聊天机器人 / 自动化的区别（便于界定边界）"},void 0,!1,void 0,this),`
`,n("h4",{children:"和聊天机器人（Chatbot）的区别"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("strong",{children:"聊天机器人"},void 0,!1,void 0,this),`：
`,n("ul",{children:[`
`,n("li",{children:"主要能力是“对话问答”"},void 0,!1,void 0,this),`
`,n("li",{children:"一般不自己规划任务"},void 0,!1,void 0,this),`
`,n("li",{children:"很多时候不直接操作业务系统"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"智能体"},void 0,!1,void 0,this),`：
`,n("ul",{children:[`
`,n("li",{children:"对话只是入口形式"},void 0,!1,void 0,this),`
`,n("li",{children:"重点是“接到意图后能自己完成任务闭环”，包括调用系统、处理异常、更新状态等[4][5]"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"一句话概括："},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:"聊天机器人在“回答”，智能体在“办事”。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("h4",{children:"和传统自动化（脚本/RPA/工作流）的区别"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`传统自动化：
`,n("ul",{children:[`
`,n("li",{children:"固定流程、规则写死"},void 0,!1,void 0,this),`
`,n("li",{children:"环境稍有变化就容易崩"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`智能体：
`,n("ul",{children:[`
`,n("li",{children:"通过模型理解上下文"},void 0,!1,void 0,this),`
`,n("li",{children:["在流程中做",n("strong",{children:"即时决策"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:"能在一定范围内“灵活变通”[6]"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"可以用一个比喻："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"传统自动化 = 自动贩卖机：投币 → 固定出货"},void 0,!1,void 0,this),`
`,n("li",{children:"智能体 = 会思考的实习生：看场景、看人、看历史记录，临场决定怎么做更合适"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"5. 用一个工程化的“判定标准”来收尾"},void 0,!1,void 0,this),`
`,n("p",{children:"如果你在实际工作中要判断“这个东西算不算智能体？”，可以看它是否满足："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:["是否接受的是",n("strong",{children:"高层次目标"},void 0,!1,void 0,this),"而不是一步步命令？"]},void 0,!0,void 0,this),`
`,n("li",{children:["是否使用了",n("strong",{children:"模型（通常是 LLM）做决策和推理"},void 0,!1,void 0,this),"，而不仅是 if-else？"]},void 0,!0,void 0,this),`
`,n("li",{children:["是否能",n("strong",{children:"主动调用多个工具/系统"},void 0,!1,void 0,this),"，完成真实业务操作？"]},void 0,!0,void 0,this),`
`,n("li",{children:["是否能在多轮交互/多次任务中",n("strong",{children:"记住上下文或用户偏好"},void 0,!1,void 0,this),"？"]},void 0,!0,void 0,this),`
`,n("li",{children:["在面对异常或不确定输入时，是否会",n("strong",{children:"自行调整策略"},void 0,!1,void 0,this),"或向人类寻求澄清？"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"能满足 3 条以上，基本可以认为符合当下 AI 领域对“智能体”的主流理解。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"最简可复用定义（给你一个可以直接用在文档/论文里的版本）"},void 0,!1,void 0,this),`
`,n("blockquote",{children:[`
`,n("p",{children:["在当前 AI 领域中，“智能体”（AI Agent）指的是一种以大语言模型等算法为核心、能够感知环境状态，围绕给定目标进行推理和规划，并通过调用外部工具或系统执行行动，从而在较少人工干预下完成复杂任务的自主软件系统。其本质特征包括：",n("strong",{children:"环境感知、目标导向、自主决策、工具使用与持续反馈闭环"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"如果你需要，我可以在这个定义的基础上，再帮你写一个适合论文/报告使用的更学术版本，或者一个适合科普/演讲里的更口语化版本。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("p",{children:["References",n("br",{},void 0,!1,void 0,this),`
[1] What Are AI Agents? | IBM. `,n("a",{href:"https://www.ibm.com/think/topics/ai-agents",children:"https://www.ibm.com/think/topics/ai-agents"},void 0,!1,void 0,this),".",n("br",{},void 0,!1,void 0,this),`
[2] What are AI Agents? | NVIDIA Glossary. `,n("a",{href:"https://www.nvidia.com/en-us/glossary/ai-agents/",children:"https://www.nvidia.com/en-us/glossary/ai-agents/"},void 0,!1,void 0,this),".",n("br",{},void 0,!1,void 0,this),`
[3] A Complete Guide to AI Agent Architecture in 2026. `,n("a",{href:"https://www.lindy.ai/blog/ai-agent-architecture",children:"https://www.lindy.ai/blog/ai-agent-architecture"},void 0,!1,void 0,this),".",n("br",{},void 0,!1,void 0,this),`
[4] AI Agents vs AI Chatbots: Understanding the Difference. `,n("a",{href:"https://cloudsecurityalliance.org/blog/2025/06/16/ai-agents-vs-ai-chatbots-understanding-the-difference",children:"https://cloudsecurityalliance.org/blog/2025/06/16/ai-agents-vs-ai-chatbots-understanding-the-difference"},void 0,!1,void 0,this),".",n("br",{},void 0,!1,void 0,this),`
[5] AI Agent vs Chatbot: What's the Difference in 2026? `,n("a",{href:"https://aisera.com/blog/ai-agent-vs-chatbot-differences/",children:"https://aisera.com/blog/ai-agent-vs-chatbot-differences/"},void 0,!1,void 0,this),".",n("br",{},void 0,!1,void 0,this),`
[6] Agentic AI vs Traditional Automation — 2026. `,n("a",{href:"https://www.agiliway.com/ai-agents-vs-traditional-automation-whats-really-changing-in-2026/",children:"https://www.agiliway.com/ai-agents-vs-traditional-automation-whats-really-changing-in-2026/"},void 0,!1,void 0,this),"."]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["2026-01-21 by ",n("a",{href:"https://dr.miromind.ai/share/2a2221d2-1fad-47e5-b9e9-7480d00a02de",children:"MiroThinker"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{i as default};
