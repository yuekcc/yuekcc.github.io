# 静态网站构建流程设计

## 概述

这是一个基于 Bun 的静态网站构建系统，主要将 Markdown 文件转换为可动态加载的 JavaScript 模块，实现静态内容的动态加载。

## 构建流程分析

### 主要构建步骤 (build.js)

#### STEP1: 创建 docs.js

1. **目的**: 生成文档模块映射文件
2. **过程**:
   - 扫描 `docs/` 目录下的所有 `.md` 文件
   - 为每个 Markdown 文件生成动态导入语句
   - 创建 `docs.js` 文件，包含所有文档的路径映射
3. **输出**: `docs.js` - 包含文档路径到动态导入函数的映射

#### STEP2: 打包 Web 应用

1. **目的**: 将整个应用打包为浏览器可用的静态资源
2. **配置**:
   - 目标: 浏览器环境
   - 入口: `./src/index.html`
   - 输出目录: `out/dist`
   - 启用代码分割、压缩
   - 使用自定义 Markdown 插件
3. **输出**: 打包后的静态资源到 `out/dist` 目录

#### STEP3: 安装部署

1. **目的**: 将构建产物移动到正确位置
2. **过程**:
   - 删除旧的 `dist` 和 `index.html`
   - 将 `out/` 目录内容移动到根目录
   - 将 `dist/index.html` 移动到根目录
3. **输出**: 可直接部署的静态网站文件

### 核心插件: bun-plugin-md.js

#### 功能

将 Markdown 文件转换为 React 组件

#### 转换流程

1. **解析 Markdown**: 使用 `parseMarkdown` 将 Markdown 转换为 HTML
2. **HTML 转 AST**: 使用 `hast-util-from-html` 将 HTML 转换为 AST
3. **AST 转 ESTree**: 使用 `hast-util-to-estree` 转换为 ESTree
4. **生成 JSX**: 使用 `estree-util-to-js` 生成可执行的 JSX 代码
5. **输出**: 导出一个渲染函数，返回包含 Markdown 内容的 React 组件

### 辅助模块

#### doc-list.js

- **功能**: 扫描指定目录下的所有 Markdown 文件
- **实现**: 使用 Bun 的 Glob 类进行文件匹配

#### CodePrinter.js

- **功能**: 代码生成辅助工具
- **实现**: 提供链式 API 来构建代码字符串并写入文件

## 技术栈

- **构建工具**: Bun
- **Markdown 处理**: 自定义插件 (bun-plugin-md)
- **HTML/AST 处理**: hast-util-from-html, hast-util-to-estree, estree-util-to-js
- **模块格式**: ES Modules
- **框架**: React (通过 JSX 实现)

## 特点

1. **动态加载**: 使用动态 `import()` 实现 Markdown 内容的按需加载
2. **组件化**: 每个 Markdown 文件都被转换为一个独立的 React 组件
3. **代码分割**: 启用 Bun 的代码分割功能，优化加载性能
4. **自动化**: 完整的构建流程，从文档扫描到最终部署
