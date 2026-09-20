import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>Web 前端开发入门</h1><p>被问过一个问题——如何快速学习前端开发。</p><p>第一次遇到这个问题，我试着回忆了一下自己是如何学习 web 开发的。似乎没有特别快速的学习方法。不过，web 应用
开发是一种有快速反馈的学习过程，比较容易有成就感而且是一个慢慢深入的过程。</p><p>前端技术栈中有三种技术最为基础：html、css、js。这三种技术也分别对应一个应用的三层：布局、样式、交互。</p><h2>html、css</h2><p>html 使用了 xml 的语法来表示一个网页。web 1.0 时代，html 仅提供了基本的富文本展示功能。html 通过嵌套标签
表示一个网页的布局。css 负责控制各个标签的展示效果，也就是样式。</p><p>html 现在已经发展到 html5，而 css 也到 css3.0。html、css 的标准由 w3c 制定，实现则是浏览器实现的，
各种浏览器对于这些标准支持程序甚至进度也是不一致的。因此不同的浏览器之间会存在兼容性问题。浏览器发展的现在已经形成
了三个集团：基于 blink 内核的 chromiun 家族，水果厂的 safari、web 自由爱好者 mozilla 的 firefox。这些浏览器的
最新版本也称为 every green 浏览器。</p><h3>html</h3><p>对于 html 基本上就是 xml。比如下面的一段 html：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">div</span><span style="color:#B392F0"> class</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"container"</span><span style="color:#B392F0"> style</span><span style="color:#E1E4E8">=</span><span style="color:#9ECBFF">"padding: 10px; margin: 10px"</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#6A737D">    &#x3C;!-- 我是注释  --></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>
<span class="line"></span></code></pre><p>html 标准中包含许多标签。这些标签有部分被称为语义化标签。不过在日常开发中，只需要记住下面几个标签，基本上可以一招走天下：</p><ul><li><code>div</code> 容器</li><li><code>span</code> 行内文本</li><li>表单<ul><li><code>input</code> 文本框</li><li><code>textarea</code> 多行文本框</li><li><code>select</code> 下拉选择</li><li><code>button</code> 按钮</li></ul></li></ul><blockquote><p>现在的 spa 应用很少会直接使用上面的表单标签，基本上会先将原始的标签进行包装以实现更好的交互效果。</p></blockquote><h3>css</h3><p>css 可以实现很多效果。但是对于前端开发而言掌握一部分基础的样式就算上手了。css 语法带有强烈的 c 风格，
属性使用 key-value 表示。比如：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">/* 注释只支持这种语法 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/* 这里的 div 称为选择器。选择器有多个种类，最常见有标签选择器和类选择器 */</span></span>
<span class="line"><span style="color:#85E89D">div</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">  display</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">block</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">.container</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#79B8FF">  padding</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">/* 设置属性 */</span></span>
<span class="line"><span style="color:#79B8FF">  margin</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>常用的属性：</p><ul><li><code>padding</code> 内边距</li><li><code>margin</code> 外边距</li><li><code>display</code> 显示类型<ul><li><code>flex</code></li><li><code>inline-flex</code></li><li><code>block</code></li><li><code>inline-block</code></li></ul></li><li><code>border</code> 边框</li><li><code>position</code> 位置</li><li><code>backgroud</code> 背景</li><li><code>color</code> 文本颜色</li></ul><p>css 中一个非常重要的概念就是：盒子模型。</p><p><img src="/images/Pasted%20image%2020220527211902.png" alt="盒子模型" /></p><p>盒子模型会影响一个标签的展示。上图中表示的一个 div 标签。盒子模型还有不少细节，具体的细节可以问问 google。
现在流行的盒子模型是 <code>borderbox</code>。</p><h2>JS</h2><p>js，更正式地应该叫 JavaScript、ECMAScript。js 在 web 技术栈中主要是负责交互部分，包括人机交互、机机交互。</p><p>js 由 tc39 进行标准化、版本迭代，目前的迭代节奏是一年一个版本。最新版本是 ES2022。关于 js 的历史可以找找其他资料看看，又是充满传奇的故事。</p><h3>语法</h3><p>js 也属于 c 语法的一支。大概是就是 c 语法 + scheme 功能 + oo 的组合。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// 数组字面量</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> arr</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">];</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> emptyArr</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 字符串</span></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> aStr </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'hello, '</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 使用 let 关键字声明的变量，可以重新赋值</span></span>
<span class="line"><span style="color:#E1E4E8">aStr </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> aStr </span><span style="color:#F97583">+</span><span style="color:#9ECBFF"> 'world'</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// => "hello, world"</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 对象字面量</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> people</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">  name: </span><span style="color:#9ECBFF">'Tom'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 动态添加属性</span></span>
<span class="line"><span style="color:#E1E4E8">people.age </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 18</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// console.log 用于在控制台打印消息</span></span>
<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(people); </span><span style="color:#6A737D">// => {name: "Tom", age: 18}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 声明一个函数</span></span>
<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> add</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">a</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">b</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">  return</span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">+</span><span style="color:#E1E4E8"> b;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 声明一个函数，这个函数也返回了一个函数</span></span>
<span class="line"><span style="color:#6A737D">// 一般称为高阶函数</span></span>
<span class="line"><span style="color:#6A737D">// 返回也的这个函数也可以称为闭包</span></span>
<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> makeAddX</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">base</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">  return</span><span style="color:#FFAB70"> a</span><span style="color:#F97583"> =></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6A737D">    // 这里返回的是一个新的函数，这种语法表示的函数，又称为箭头函数</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#B392F0"> add</span><span style="color:#E1E4E8">(a, base);</span></span>
<span class="line"><span style="color:#E1E4E8">  };</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 获取一个 +100 的函数</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> add100</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> makeAddX</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">100</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> result</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> add100</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">); </span><span style="color:#6A737D">// => 101</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 声明一个布尔类型的字面量</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> canPrintResult</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// if 语句</span></span>
<span class="line"><span style="color:#F97583">if</span><span style="color:#E1E4E8"> (canPrintResult) {</span></span>
<span class="line"><span style="color:#6A737D">  // for 语句</span></span>
<span class="line"><span style="color:#F97583">  for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">let</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">; i </span><span style="color:#F97583">&#x3C;</span><span style="color:#79B8FF"> 10</span><span style="color:#E1E4E8">; i</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">    console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(result);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (i </span><span style="color:#F97583">===</span><span style="color:#79B8FF"> 5</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">      break</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// 从 for 循环中 break 出来</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 声明一个类</span></span>
<span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> Image</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6A737D">  // js 类中的构建函数都叫 constructor</span></span>
<span class="line"><span style="color:#F97583">  constructor</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">width</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">height</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#79B8FF">    this</span><span style="color:#E1E4E8">._width </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> width;</span></span>
<span class="line"><span style="color:#79B8FF">    this</span><span style="color:#E1E4E8">._height </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> height;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  printWidth</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#E1E4E8">    console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">._width);</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  printSize</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#E1E4E8">    console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">._width </span><span style="color:#F97583">+</span><span style="color:#9ECBFF"> ' x '</span><span style="color:#F97583"> +</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">._height);</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 声明一个类，并继承</span></span>
<span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> PngImage</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> Image</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">  constructor</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">width</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">height</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6A737D">    // 先调用父类的构建函数</span></span>
<span class="line"><span style="color:#79B8FF">    super</span><span style="color:#E1E4E8">(width, height);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF">    this</span><span style="color:#E1E4E8">._type </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'png'</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  printType</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#E1E4E8">    console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">._type);</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> aPng</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> PngImage</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">100</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">200</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">aPng.</span><span style="color:#B392F0">printType</span><span style="color:#E1E4E8">(); </span><span style="color:#6A737D">// => png</span></span>
<span class="line"><span style="color:#E1E4E8">aPng.</span><span style="color:#B392F0">printSize</span><span style="color:#E1E4E8">(); </span><span style="color:#6A737D">// => 100 x 200</span></span>
<span class="line"></span></code></pre><p>总结 js 的语法：语法并不复杂可细节不少，有 c 风格语言背景的同学还是很容易上手。至于 js 的一些细节，无非熟能生巧。</p><p><img src="/images/Pasted%20image%2020220527221228.png" alt="" /></p><h3>内置库</h3><p><strong>标准对象</strong></p><p>js 的语言标准中包含一组标准对象，用于提供基本的功能，比如 Math、Array、Object、Map、Set、String、Number、Boolean、Symbol、RegExp、Promise 等。</p><p>具体可以看 MDN 上的 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">文档</a>。</p><p><strong>宿主 API</strong></p><p>除上面介绍的标准对象外，js 的引擎也会为编程方便提供一些 API。这些 API 也是通过全局对象的形式进入到 js 的执行环境中。</p><p>比如在浏览器中，可以使用 Docment、fetch、console 等 API，这些都是由浏览器提供。在 node.js、deno 这类面向后台服务的执行环境，
它们都会提供不同的 API 以实现各种编程任务。</p><blockquote><p>js 的执行环境除常见的浏览器外，还有 node.js/deno 这些面向后台服务的环境，还有像 quickjs 这种面向嵌入脚本需求的执行环境。
这些环境对于 js 标准的支持程度、内置的 API 都有区别。具体只能查看相应的产品文档。但是 js 的语法基本上是一致的。</p></blockquote><h3>现代 js 开发流程</h3><p>现在的前端应用，特别是一些重交互应用、控制台类应用都是基于 SPA 架构实现。js 在其中会控制整个页面的生成、人机交互、机机交互。因此 js 代码的复杂度也几何级别上升。node.js 出现后，js 的开发体验也变得越来越工程化。</p><p>node.js 是一种面向后台服务的 js 执行环境。node.js 有异步 io、高性能、高并发支持的特点。在开发体验，node.js 带来 npm 包管理器。通过 node.js，js 程序员可以使用 js 实现相关的工具。工具的开发难度大幅度降低。npm 的出现侧让 js 程序员更方便地分享代码，带来的结果就是 js 生态大爆炸。</p><p>现代 js 开发基本上就是这样一个流程：</p><ol><li>使用 npm 初始化一个项目</li><li>安装依赖</li><li>配置项目，比如 eslint、webpack 等</li><li>开发应用组件</li><li>构建</li><li>测试</li><li>部署</li></ol><p>基本上与其他语言的开发体验一致。而且也可以通过 ci/cd 自动化集成到系统中。</p><p>编辑器/IDE 可以使用 vscode 或 webstorm。vscode 免费，功能也足够使用；webstorm 则有更好的 js 静态分析支持，git ui、代码重构功能也特别好用。</p><blockquote><p>广告：初始化 node.js 可以使用我家的 <a href="https://github.com/yuekcc/init-nodejs-project">init-nodejs-project</a>，已经内置了 eslint、prettier 工具的配置。</p></blockquote><h2>VUE</h2><p>vuejs 是目前流行的前端三大框架之一（另两个是 angular、react）。据我所知，vue 在小厂中非常流行，原因是上手真的简单，而且原创也是华人，也有足够多的中文资料。</p><p>无论 vue、angular，还是 react 都是基于 mvvm 或类似概念开发的框架。追求的是通过组件化的带来更好的开发体验。</p><p>所谓组件化是将一个大的功能模块细分为多个小组件。采用类似于积木的方式组合出更大更复杂的应用。</p><p>我认为组件也可以分为多种类型：</p><ul><li>基础组件。比如按钮、菜单等一般由组件库提供，而且比较通用。甚至跨端使用。这些基础组件一般是直接使用开源产品。比如 vue 生态中的 element ui、react 生态中有 ant design。</li><li>通用业务组件。比如各个系统菜单。这种组件的特点是基于基础组进行了一定程序的包装。在项目中有一定的通用性。</li><li>具体业务组件。这些组件都是按照业务流程定制开发的组件，几乎没有通用性。如果业务流程发生了变更，这些组件通常都需要大面积的重写。</li></ul><p>如果一个项目由多个开发小组共同进行开发。那么基础组件可能是由专门的人员进行维护；通用业务组件可能由特定域的人员进行开发；具体的业务组件则可能是某个人员进行维护。</p><h3>Options API</h3><p>vue 提供了一种 Options API 用于声明一个组件。组件使用 js 对象语法描述：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> AComponent</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">  data</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">      name: </span><span style="color:#9ECBFF">'Tom'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    };</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">  methods: {</span></span>
<span class="line"><span style="color:#B392F0">    getName</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">      return</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">.name;</span></span>
<span class="line"><span style="color:#E1E4E8">    },</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">  template: </span><span style="color:#9ECBFF">\`&#x3C;div>{{getName()}}&#x3C;/div>\`</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span></code></pre><p>vue 组件使用模板来声明组件的 html，模板会通过内置的编译器编译为 render 函数执行。模板的好处是比较直观，也更接近传统的网页开发方式。这点也是 vue 比较容易上手的特性。</p><p>如果将一个网页分为三个部分——样式、模板、脚本。然后组合在一个文件中，这样的就可以得一 Single File Component（SFC）的组件开发方式。</p><p>SFC 也是现在主流的 vue 组件开发方式。使用 SFC 需要编译工具支持。vue 官方现在推荐使用 vite。</p><h3>vite</h3><p>vue 生态中为工程化提供了两套解决方案：vue-cli、vite。vue-cli 目前已经进入维护期，主要面对 vue2 构建；vite 则是一款更现代的工程化工具，主要面向 vue3。</p><blockquote><p>vue2、vue3 大部分场景下是兼容的。但不代表代码可以直接复用！开始项目的话，推荐 vue3。</p></blockquote><p>工程化可以带来不少好处，比如：</p><ul><li>更好地组织代码</li><li>通过编译工具的使用，可以使用更新、更方便的语法特性</li><li>对接前端的生态环境</li></ul><p>vite 的文档可以在 <a href="https://vitejs.dev/">https://vitejs.dev/</a> 找到。</p><h3>live coding</h3><p>TBD</p><hr /><ul><li>2022 年 05 月 27 日，初稿</li><li>2022 年 06 月 05 日，修订</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
