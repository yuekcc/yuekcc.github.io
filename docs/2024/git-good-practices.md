# GIT 优秀实践

[原文](https://dev.to/basementdevs/be-a-better-developer-with-these-git-good-practices-2dim)

## 分支名

基于原则：

- 使用小写字母
- kebab-case 风格
- 只使用 a-z、0-9，不使用其他字符
- 不要使用 `--`。如果有分支类型（前缀）可以使用 `/`
- 使用有有意义的分支名

错误示例：

- `fixSidebar`
- `feature-new-sidebar-`
- `FeatureNewSidebar`
- `feat_add_sidebar`

优秀示例：

- `feature/new-sidebar`
- `add-new-sidebar`
- `hotfix/interval-query-param-on-get-historical-data`

## 分支名前缀

分支名前缀可以用来分类。下面是几种常见的前缀：

- `feature` 特性开发
- `release` 发布
- `bugfix` bug 修复
- `hotfix` 补丁
- `docs` 文档

如果使用类似 Jiro、Trello 之类的工单系统，分支名中可以带上工单号：

- `feature/T-531-add-sidebar`
- `docs/T-789-update-readme`
- `hotfix/T-142-security-path`

## Commit Message

Commit message 应该包括主题、描述两部分。主题是说明这次 commit 的主要内容，说明则用提供更详细的信息。

- 主题使用命令式语气
- 主题应该按标题的语法写。比如不需要结尾的句号，首字母大写等
- 主题和描述之间应该有一个空行
- 长度限制。主题最多 50 字，说明最多 72 字

也可以使用结构化的 commit message 格式：

```txt
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

类型可以是：

- `feat` 引入新功能
- `fix` 修 bug
- `refactor` 重构代码
- `chore` 其他内容，主要是指那些和产品代码无关的内容
- `docs` 文档
- `perf` 性能优化
- `style` 格式化代码
- `test` 测试相关
- `build` 构建系统或脚本相关的变更
- `ci` CI 系统配置相关的变更
- `env` 环境变更，比如 CI 系统相关的环境变量变化、容器配置变更

scope 可以是主要模块。

body 则是上面说的说明。

footer commit 签名相关的内容。

---

- 2024 年 4 月 27 日
