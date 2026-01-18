根据 openCode 的实现，当你提问"请给我的项目写一个 README.md"时，系统会使用以下全部 prompt：

---

## 完整 Prompt 列表

### 1. **系统级基础 Prompt** (`system.ts`)

#### Provider 特定提示词（根据模型选择）：
- [anthropic.txt](packages/opencode/src/session/prompt/anthropic.txt) - Claude 模型的基础提示词
- [beast.txt](packages/opencode/src/session/prompt/beast.txt) - GPT 系列模型的基础提示词  
- [gemini.txt](packages/opencode/src/session/prompt/gemini.txt) - Gemini 模型的基础提示词
- [codex.txt](packages/opencode/src/session/prompt/codex.txt) - Codex 专用提示词
- [qwen.txt](packages/opencode/src/session/prompt/qwen.txt) - Qwen 模型提示词

#### Anthropic 专用头部：
- [anthropic_spoof.txt](packages/opencode/src/session/prompt/anthropic_spoof.txt) - 欺骗性头部（如果 providerID 包含 "anthropic"）

#### Codex 指令：
- [codex_header.txt](packages/opencode/src/session/prompt/codex_header.txt) - Codex 额外指令

### 2. **环境信息 Prompt** (动态生成)

在 [system.ts#L38-L61](packages/opencode/src/session/system.ts#L38-L61) 中生成：
```
Here is some useful information about the environment you are running in:
<env>
  Working directory: ${Instance.directory}
  Is directory a git repo: ${project.vcs === "git" ? "yes" : "no"}
  Platform: ${process.platform}
  Today's date: ${new Date().toDateString()}
</env>
<files>
  ${Ripgrep.tree(...)}  // 项目文件树
</files>
```

### 3. **自定义规则 Prompt** (`custom()`)

在 [system.ts#L63-L139](packages/opencode/src/session/system.ts#L63-L139) 中加载：
- 项目根目录的 `AGENTS.md`
- 项目根目录的 `CLAUDE.md`
- 全局配置目录的 `AGENTS.md` (`~/.config/opencode/AGENTS.md`)
- Claude Code 配置 `~/.claude/CLAUDE.md`
- 配置文件中 `instructions` 字段指定的 URL 或文件

### 4. **Agent 特定 Prompt** (可选)

如果使用的 Agent 有自定义 prompt（在 [prompt.ts#L63-L64](packages/opencode/src/session/prompt.ts#L63-L64)）：
- [generate.txt](packages/opencode/src/agent/generate.txt) - 生成任务专用提示
- [explore.txt](packages/opencode/src/agent/prompt/explore.txt) - 探索任务专用提示

### 5. **会话控制 Prompt** (条件插入)

在 [prompt.ts#L600-L614](packages/opencode/src/session/prompt.ts#L600-L614) 中，根据情况插入：

- [plan.txt](packages/opencode/src/session/prompt/plan.txt) - 如果是第一步，插入计划提示
- [build-switch.txt](packages/opencode/src/session/prompt/build-switch.txt) - 构建/计划模式切换提示
- [max-steps.txt](packages/opencode/src/session/prompt/max-steps.txt) - 如果达到最大步骤数（例如 `maxSteps: 5`）

### 6. **用户消息包装 Prompt** (loop 中)

在 [prompt.ts#L529-L542](packages/opencode/src/session/prompt.ts#L529-L542) 中：
```
<system-reminder>
The user sent the following message:
请给我的项目写一个 README.md
Please address this message and continue with your tasks.
</system-reminder>
```

### 7. **工具描述 Prompt** (工具注册时)

每个可用工具都有自己的描述，在执行时作为工具定义的一部分（[prompt.ts#L600-L700](packages/opencode/src/session/prompt.ts#L600-L700)）：
- [write.txt](packages/opencode/src/tool/write.txt) - 写文件工具
- [read.txt](packages/opencode/src/tool/read.txt) - 读文件工具
- [bash.txt](packages/opencode/src/tool/bash.txt) - 命令执行工具
- [edit.txt](packages/opencode/src/tool/edit.txt) - 编辑工具
- 等等...

---

## Prompt 组装顺序

完整的 prompt 组装流程（[llm.ts#L60-L86](packages/opencode/src/session/llm.ts#L60-L86)）：

1. Header（anthropic_spoof，如果适用）
2. Provider 提示词 + Agent 提示词（二选一）
3. 环境信息
4. 自定义规则
5. 用户消息包装
6. 条件性插入的控制提示（plan、max-steps 等）

这样，当你说"请给我的项目写一个 README.md"时，模型会看到：基础的 Agent 角色 + 项目上下文 + 工具能力 + 任务约束。

想深入了解 Agent 系统？看看 [Agent 类型和模式](10-agent-types-and-modes-primary-agents-subagents-and-hidden-agents)。