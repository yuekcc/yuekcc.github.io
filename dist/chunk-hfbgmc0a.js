import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>tsconfig.json 配置</h1><p>javascript 项目现在是全身上下都是配置文件，配置文件的代码是可能超过真正的代码本身。在某此公司，web 项目的脚手架很可能是一个大 kpi，也足见 javascript 配置的麻烦程度。我也写了一个 <a href="https://github.com/yuekcc/inp">init-nodejs-project</a> 工具用于生成常见的配置。</p><p>一个 javascript 项目常见配置主要有：</p><ul><li>LSP 配置，对应就是 tsconfig.json</li><li>lint 配置，一般就是 eslint 的配置</li><li>formatter 配置，我常用的就是 prettier</li><li>lock 文件，包管理器使用</li><li>.gitignore，git 使用</li><li>.editorconfig 编辑器配置</li><li>.eslintignore lint 配置</li></ul><p>我认为其中最麻烦的就是 typescript 的配置。即使工程本身不使用 typescript 也需要一个 tsconfig.json 或其变体 jsconfig.json 来配置 LSP。</p><h2>常见配置</h2><p>这里有一份 tsconfig.json 配置。来源：<a href="https://www.totaltypescript.com/tsconfig-cheat-sheet">https://www.totaltypescript.com/tsconfig-cheat-sheet</a>，看着也比较合理。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#79B8FF">  "compilerOptions"</span><span style="color:#E1E4E8">: {</span></span>
<span class="line"><span style="color:#6A737D">    /* Base Options: */</span></span>
<span class="line"><span style="color:#79B8FF">    "esModuleInterop"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "skipLibCheck"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "target"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"es2022"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "verbatimModuleSyntax"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "allowJs"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "resolveJsonModule"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "moduleDetection"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"force"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* Strictness */</span></span>
<span class="line"><span style="color:#79B8FF">    "strict"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "noUncheckedIndexedAccess"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* If transpiling with TypeScript: */</span></span>
<span class="line"><span style="color:#79B8FF">    "moduleResolution"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"NodeNext"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "module"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"NodeNext"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "outDir"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"dist"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "sourceMap"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* If NOT transpiling with TypeScript: */</span></span>
<span class="line"><span style="color:#79B8FF">    "moduleResolution"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"Bundler"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "module"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"ESNext"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "noEmit"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* If your code runs in the DOM: */</span></span>
<span class="line"><span style="color:#79B8FF">    "lib"</span><span style="color:#E1E4E8">: [</span><span style="color:#9ECBFF">"es2022"</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">"dom"</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">"dom.iterable"</span><span style="color:#E1E4E8">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* If your code doesn't run in the DOM: */</span></span>
<span class="line"><span style="color:#79B8FF">    "lib"</span><span style="color:#E1E4E8">: [</span><span style="color:#9ECBFF">"es2022"</span><span style="color:#E1E4E8">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* If you're building for a library: */</span></span>
<span class="line"><span style="color:#79B8FF">    "declaration"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    /* If you're building for a library in a monorepo: */</span></span>
<span class="line"><span style="color:#79B8FF">    "composite"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    "declarationMap"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p><code>If</code> 说明的地方需要按需修改。</p><h2>@tsconfig/recommended</h2><p>自 typescript 4.5 之后，可以引用 npm 包里的配置文件。于是就出现 <code>@tsconfig/recommended</code>，可用于统一 tsconfig.json 的配置。</p><p>使用方式</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">npm</span><span style="color:#9ECBFF"> install</span><span style="color:#79B8FF"> --save-dev</span><span style="color:#9ECBFF"> @tsconfig/recommended</span></span>
<span class="line"></span></code></pre><p>在 tsconfig.json 中增加一行：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">/* tsconfig.json */</span></span>
<span class="line"><span style="color:#9ECBFF">"extends"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"@tsconfig/recommended/tsconfig.json"</span></span>
<span class="line"></span></code></pre><p>Vue 项目可以使用 <code>@vue/tsconfig</code> + <code>@tsconfig/recommended</code> 包：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">/* 需要 typescript 5.0+ */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF">"extends"</span><span style="color:#E1E4E8">: [</span></span>
<span class="line"><span style="color:#9ECBFF">  "@tsconfig/node18/tsconfig.json"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">  "@vue/tsconfig/tsconfig.json"</span></span>
<span class="line"><span style="color:#E1E4E8">],</span></span>
<span class="line"><span style="color:#9ECBFF">"compilerOptions"</span><span style="color:#E1E4E8">: {</span></span>
<span class="line"><span style="color:#79B8FF">  "types"</span><span style="color:#E1E4E8">: [</span><span style="color:#9ECBFF">"node"</span><span style="color:#E1E4E8">]</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><hr /><ul><li>2023-09-26</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
