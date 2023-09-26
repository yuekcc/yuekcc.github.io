# tsconfig.json 配置

javascript 项目现在是全身上下都是配置文件，配置文件的代码是可能超过真正的代码本身。在某此公司，web 项目的脚手架很可能是一个大 kpi，也足见 javascript 配置的麻烦程度。我也写了一个 [init-nodejs-project](https://github.com/yuekcc/inp) 工具用于生成常见的配置。

一个 javascript 项目常见配置主要有：

- LSP 配置，对应就是 tsconfig.json
- lint 配置，一般就是 eslint 的配置
- formatter 配置，我常用的就是 prettier
- lock 文件，包管理器使用
- .gitignore，git 使用
- .editorconfig 编辑器配置
- .eslintignore lint 配置

我认为其中最麻烦的就是 typescript 的配置。即使工程本身不使用 typescript 也需要一个 tsconfig.json 或其变体 jsconfig.json 来配置 LSP。

## 常见配置

这里有一份 tsconfig.json 配置。来源：[https://www.totaltypescript.com/tsconfig-cheat-sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet)，看着也比较合理。

```json
{
  "compilerOptions": {
    /* Base Options: */
    "esModuleInterop": true,
    "skipLibCheck": true,
    "target": "es2022",
    "verbatimModuleSyntax": true,
    "allowJs": true,
    "resolveJsonModule": true,
    "moduleDetection": "force",

    /* Strictness */
    "strict": true,
    "noUncheckedIndexedAccess": true,

    /* If transpiling with TypeScript: */
    "moduleResolution": "NodeNext",
    "module": "NodeNext",
    "outDir": "dist",
    "sourceMap": true,

    /* If NOT transpiling with TypeScript: */
    "moduleResolution": "Bundler",
    "module": "ESNext",
    "noEmit": true,

    /* If your code runs in the DOM: */
    "lib": ["es2022", "dom", "dom.iterable"],

    /* If your code doesn't run in the DOM: */
    "lib": ["es2022"],

    /* If you're building for a library: */
    "declaration": true,

    /* If you're building for a library in a monorepo: */
    "composite": true,
    "declarationMap": true
  }
}
```

`If` 说明的地方需要按需修改。

## @tsconfig/recommended

自 typescript 4.5 之后，可以引用 npm 包里的配置文件。于是就出现 `@tsconfig/recommended`，可用于统一 tsconfig.json 的配置。

使用方式

```sh
npm install --save-dev @tsconfig/recommended
```

在 tsconfig.json 中增加一行：

```json
/* tsconfig.json */
"extends": "@tsconfig/recommended/tsconfig.json"
```

Vue 项目可以使用 `@vue/tsconfig` + `@tsconfig/recommended` 包：

```json
/* 需要 typescript 5.0+ */

"extends": [
  "@tsconfig/node18/tsconfig.json",
  "@vue/tsconfig/tsconfig.json"
],
"compilerOptions": {
  "types": ["node"]
}
```

---

- 2023-09-26
