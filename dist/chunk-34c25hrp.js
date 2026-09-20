import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>vhtml 源码阅读理解</h1><p><a href="https://www.npmjs.com/package/vhtml">vhtml</a> 是 <a href="https://github.com/developit">Jason Miller</a> 很多年前（有近 10 年）实现的一个 jsx 渲染库。Jason Miller 是 <a href="https://preactjs.com/">preact</a> 的核心开发之一。</p><p>jsx 一般配合 vdom 使用。jsx 本质只是函数调用，可以通过自定义的 <code>h</code> 函数将 jsx 调用渲染为 HTML。vhtml 的功能是将 jsx 渲染为 HTML 字符串。</p><h2>jsx</h2><p>jsx 是一种 javascript 的语法拓展。在编写 jsx 时表现为 js 代码中的 xml。比如 vhtml 的 README.md 中的这个例子：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// import the library:</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> h </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> 'vhtml'</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// tell babel to transpile JSX to h() calls:</span></span>
<span class="line"><span style="color:#6A737D">/** </span><span style="color:#F97583">@jsx</span><span style="color:#6A737D"> h */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// now render JSX to an HTML string!</span></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> items </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> [</span><span style="color:#9ECBFF">'one'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'two'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'three'</span><span style="color:#E1E4E8">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">document.body.</span><span style="color:#B392F0">innerHTML</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> (</span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;</span><span style="color:#85E89D">div</span><span style="color:#B392F0"> class</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"foo"</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">>Hi!&#x3C;/</span><span style="color:#85E89D">h1</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">>Here is a list of {items.</span><span style="color:#79B8FF">length</span><span style="color:#E1E4E8">} items:&#x3C;/</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">ul</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">      {items.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">item</span><span style="color:#F97583"> =></span><span style="color:#E1E4E8"> (</span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">li</span><span style="color:#E1E4E8">>{item}&#x3C;/</span><span style="color:#85E89D">li</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">      ))}</span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;/</span><span style="color:#85E89D">ul</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">  &#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">);</span></span>
<span class="line"></span></code></pre><p>javascript 引擎原生不支持 jsx。jsx 需要通过 bundler 或 babel 转换成一般 javascript 代码。上面的代码通过 babel 转换，可以得到这样的 javascript 代码：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// 格式化后</span></span>
<span class="line"><span style="color:#E1E4E8">document.body.innerHTML </span><span style="color:#F97583">=</span><span style="color:#6A737D"> /*#__PURE__*/</span><span style="color:#E1E4E8"> React.</span><span style="color:#B392F0">createElement</span><span style="color:#E1E4E8">(</span></span>
<span class="line"><span style="color:#9ECBFF">  'div'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#E1E4E8">    class: </span><span style="color:#9ECBFF">'foo'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#6A737D">  /*#__PURE__*/</span><span style="color:#E1E4E8"> React.</span><span style="color:#B392F0">createElement</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'h1'</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'Hi!'</span><span style="color:#E1E4E8">),</span></span>
<span class="line"><span style="color:#6A737D">  /*#__PURE__*/</span><span style="color:#E1E4E8"> React.</span><span style="color:#B392F0">createElement</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'p'</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'Here is a list of '</span><span style="color:#E1E4E8">, items.</span><span style="color:#79B8FF">length</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">' items:'</span><span style="color:#E1E4E8">),</span></span>
<span class="line"><span style="color:#6A737D">  /*#__PURE__*/</span><span style="color:#E1E4E8"> React.</span><span style="color:#B392F0">createElement</span><span style="color:#E1E4E8">(</span></span>
<span class="line"><span style="color:#9ECBFF">    'ul'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">    null</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    items.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">item</span><span style="color:#F97583"> =></span><span style="color:#6A737D"> /*#__PURE__*/</span><span style="color:#E1E4E8"> React.</span><span style="color:#B392F0">createElement</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'li'</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">, item)),</span></span>
<span class="line"><span style="color:#E1E4E8">  ),</span></span>
<span class="line"><span style="color:#E1E4E8">);</span></span>
<span class="line"></span></code></pre><p>可以看出，jsx 转换后就是 <code>React.createElement</code> 的函数调用。通过 babel 的配置或 <code>@jsx</code> 转译注解，可以将 <code>React.createElement</code> 替换为自定义的 <code>h</code> 函数。而 vhtml 就提供 <code>h</code> 函数的实现。</p><h2>vhtml 代码</h2><p>vhtml 的核心代码在 <a href="https://github.com/developit/vhtml/blob/master/src/vhtml.js">https://github.com/developit/vhtml/blob/master/src/vhtml.js</a>：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> emptyTags </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> './empty-tags'</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// empty-tags 中声明非闭合的元素，比如 input、hr 等</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 转义处理</span></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#B392F0"> esc</span><span style="color:#F97583"> =</span><span style="color:#FFAB70"> str</span><span style="color:#F97583"> =></span><span style="color:#B392F0"> String</span><span style="color:#E1E4E8">(str).</span><span style="color:#B392F0">replace</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">/</span><span style="color:#79B8FF">[&#x26;&#x3C;>"']</span><span style="color:#9ECBFF">/</span><span style="color:#F97583">g</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">s</span><span style="color:#F97583"> =></span><span style="color:#9ECBFF"> \`&#x26;\${</span><span style="color:#E1E4E8">map</span><span style="color:#9ECBFF">[</span><span style="color:#E1E4E8">s</span><span style="color:#9ECBFF">]</span><span style="color:#9ECBFF">};\`</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> map </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#9ECBFF">'&#x26;'</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">'amp'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'&#x3C;'</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">'lt'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'>'</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">'gt'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'"'</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">'quot'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">"'"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">'apos'</span><span style="color:#E1E4E8"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 如果设置了 dangerouslySetInnerHTML 字段，表示直接保存内容、不进行转义。对于 web 程序，可能会有 XSS 风险</span></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> setInnerHTMLAttr </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'dangerouslySetInnerHTML'</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// jsx 属性和 html 属性之类转换。class、for 是 javascript 的关键字</span></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> DOMAttributeNames </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">  className: </span><span style="color:#9ECBFF">'class'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">  htmlFor: </span><span style="color:#9ECBFF">'for'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> sanitized </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> {}; </span><span style="color:#6A737D">// 用于标记是否已经进行转义</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">/** Hyperscript reviver that constructs a sanitized HTML string. */</span></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#F97583"> function</span><span style="color:#B392F0"> h</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">name</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">attrs</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6A737D">  // stack 用于保存第三个参数之后的参数列表</span></span>
<span class="line"><span style="color:#6A737D">  // h 函数一般是这样调用：h('p', {}, 'text1', 'text2')</span></span>
<span class="line"><span style="color:#6A737D">  // 第一个参数可能是一个函数或标签名称；第二个参数是属性；余下的标签之间的内容，可能是空也可能是多个</span></span>
<span class="line"><span style="color:#F97583">  let</span><span style="color:#E1E4E8"> stack </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> [],</span></span>
<span class="line"><span style="color:#E1E4E8">    s </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> ''</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// 结果</span></span>
<span class="line"><span style="color:#E1E4E8">  attrs </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> attrs </span><span style="color:#F97583">||</span><span style="color:#E1E4E8"> {}; </span><span style="color:#6A737D">// 保存元素的属性</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  // 倒序存入 stack，后续可以和 .pop() 弹出最后一个存入的数据</span></span>
<span class="line"><span style="color:#F97583">  for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">let</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> arguments</span><span style="color:#E1E4E8">.</span><span style="color:#79B8FF">length</span><span style="color:#E1E4E8">; i</span><span style="color:#F97583">--</span><span style="color:#F97583"> ></span><span style="color:#79B8FF"> 2</span><span style="color:#E1E4E8">; ) {</span></span>
<span class="line"><span style="color:#E1E4E8">    stack.</span><span style="color:#B392F0">push</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">arguments</span><span style="color:#E1E4E8">[i]);</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  // 如果第一参数是函数，说明是一个组件，将 stack 反向排序后，保存到第二个参数 attrs 的 children 字段中，然后调用 name 函数。</span></span>
<span class="line"><span style="color:#6A737D">  // attrs.children 表示标签的内容</span></span>
<span class="line"><span style="color:#6A737D">  // Sortof component support!</span></span>
<span class="line"><span style="color:#F97583">  if</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">typeof</span><span style="color:#E1E4E8"> name </span><span style="color:#F97583">===</span><span style="color:#9ECBFF"> 'function'</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">    attrs.children </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> stack.</span><span style="color:#B392F0">reverse</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#B392F0"> name</span><span style="color:#E1E4E8">(attrs);</span></span>
<span class="line"><span style="color:#6A737D">    // return name(attrs, stack.reverse());</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  // 如果 name = 'div'</span></span>
<span class="line"><span style="color:#F97583">  if</span><span style="color:#E1E4E8"> (name) {</span></span>
<span class="line"><span style="color:#E1E4E8">    s </span><span style="color:#F97583">+=</span><span style="color:#9ECBFF"> '&#x3C;'</span><span style="color:#F97583"> +</span><span style="color:#E1E4E8"> name; </span><span style="color:#6A737D">// s = '&#x3C;div'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 如果有 attrs</span></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (attrs)</span></span>
<span class="line"><span style="color:#6A737D">      // 迭代 attrs 的每个字段</span></span>
<span class="line"><span style="color:#F97583">      for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">let</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">in</span><span style="color:#E1E4E8"> attrs) {</span></span>
<span class="line"><span style="color:#6A737D">        // 将非空的字段转换为 key="value" 对</span></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (attrs[i] </span><span style="color:#F97583">!==</span><span style="color:#79B8FF"> false</span><span style="color:#F97583"> &#x26;&#x26;</span><span style="color:#E1E4E8"> attrs[i] </span><span style="color:#F97583">!=</span><span style="color:#79B8FF"> null</span><span style="color:#F97583"> &#x26;&#x26;</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">!==</span><span style="color:#E1E4E8"> setInnerHTMLAttr) {</span></span>
<span class="line"><span style="color:#6A737D">          // className 和 htmlFor 特殊处理一下</span></span>
<span class="line"><span style="color:#6A737D">          // key、value 都进行一次转义，预防 XSS</span></span>
<span class="line"><span style="color:#E1E4E8">          s </span><span style="color:#F97583">+=</span><span style="color:#9ECBFF"> \` \${</span><span style="color:#E1E4E8">DOMAttributeNames</span><span style="color:#9ECBFF">[</span><span style="color:#E1E4E8">i</span><span style="color:#9ECBFF">] </span><span style="color:#F97583">?</span><span style="color:#E1E4E8"> DOMAttributeNames</span><span style="color:#9ECBFF">[</span><span style="color:#E1E4E8">i</span><span style="color:#9ECBFF">] </span><span style="color:#F97583">:</span><span style="color:#B392F0"> esc</span><span style="color:#9ECBFF">(</span><span style="color:#E1E4E8">i</span><span style="color:#9ECBFF">)</span><span style="color:#9ECBFF">}="\${</span><span style="color:#B392F0">esc</span><span style="color:#9ECBFF">(</span><span style="color:#E1E4E8">attrs</span><span style="color:#9ECBFF">[</span><span style="color:#E1E4E8">i</span><span style="color:#9ECBFF">])</span><span style="color:#9ECBFF">}"\`</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">      }</span></span>
<span class="line"><span style="color:#E1E4E8">    s </span><span style="color:#F97583">+=</span><span style="color:#9ECBFF"> '>'</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// s = '&#x3C;div class="xxx">'</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">  // 如果是单边闭合的标签，忽略这些处理</span></span>
<span class="line"><span style="color:#F97583">  if</span><span style="color:#E1E4E8"> (emptyTags.</span><span style="color:#B392F0">indexOf</span><span style="color:#E1E4E8">(name) </span><span style="color:#F97583">===</span><span style="color:#F97583"> -</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6A737D">    // 如果需要直接输出 html</span></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (attrs[setInnerHTMLAttr]) {</span></span>
<span class="line"><span style="color:#E1E4E8">      s </span><span style="color:#F97583">+=</span><span style="color:#E1E4E8"> attrs[setInnerHTMLAttr].__html; </span><span style="color:#6A737D">// 传入 html 内容</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#6A737D">    // 处理标签内容</span></span>
<span class="line"><span style="color:#F97583">    else</span></span>
<span class="line"><span style="color:#F97583">      while</span><span style="color:#E1E4E8"> (stack.</span><span style="color:#79B8FF">length</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6A737D">        // 取出第三个参数</span></span>
<span class="line"><span style="color:#F97583">        let</span><span style="color:#E1E4E8"> child </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> stack.</span><span style="color:#B392F0">pop</span><span style="color:#E1E4E8">(); </span><span style="color:#6A737D">// 前面存入的时候已经是倒序入库，所以 .pop() 可以拿出第三个参数</span></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (child) {</span></span>
<span class="line"><span style="color:#6A737D">          // 如果 child 非空，且有 .pop 方法，表示 child 是一个数组</span></span>
<span class="line"><span style="color:#F97583">          if</span><span style="color:#E1E4E8"> (child.pop) {</span></span>
<span class="line"><span style="color:#6A737D">            // 将 child 的每个元素倒序存入 stack</span></span>
<span class="line"><span style="color:#F97583">            for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">let</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> child.</span><span style="color:#79B8FF">length</span><span style="color:#E1E4E8">; i</span><span style="color:#F97583">--</span><span style="color:#E1E4E8">; ) {</span></span>
<span class="line"><span style="color:#E1E4E8">              stack.</span><span style="color:#B392F0">push</span><span style="color:#E1E4E8">(child[i]);</span></span>
<span class="line"><span style="color:#E1E4E8">            }</span></span>
<span class="line"><span style="color:#E1E4E8">          } </span><span style="color:#F97583">else</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6A737D">            // 拼接</span></span>
<span class="line"><span style="color:#E1E4E8">            s </span><span style="color:#F97583">+=</span><span style="color:#E1E4E8"> sanitized[child] </span><span style="color:#F97583">===</span><span style="color:#79B8FF"> true</span><span style="color:#F97583"> ?</span><span style="color:#E1E4E8"> child </span><span style="color:#F97583">:</span><span style="color:#B392F0"> esc</span><span style="color:#E1E4E8">(child);</span></span>
<span class="line"><span style="color:#E1E4E8">          }</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    s </span><span style="color:#F97583">+=</span><span style="color:#E1E4E8"> name </span><span style="color:#F97583">?</span><span style="color:#9ECBFF"> \`&#x3C;/\${</span><span style="color:#E1E4E8">name</span><span style="color:#9ECBFF">}>\`</span><span style="color:#F97583"> :</span><span style="color:#9ECBFF"> ''</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">  sanitized[s] </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">  return</span><span style="color:#E1E4E8"> s;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h2>体会</h2><p>大佬的代码总是很简洁实用。首先安全性，XSS 预防；其次 stack 的处理也让人印象深刻。再就是 Array 对象的 <code>.pop</code>、<code>.push</code>、<code>.revert</code> 方法的使用；vhtml 的核心代码很短，仓库中也配置了单元测试，是一个很完整的项目。</p><hr /><ul><li>2023-06-07 初稿</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
