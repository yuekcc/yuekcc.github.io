import{s}from"/dist/chunk-6k8ey1xy.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>Debounce 和 Throttle</h1><p>Debounce 一般翻译为防抖；Throttle 一般翻译为节流。</p><h2>Debounce</h2><p>Debounce 防抖，在一段时间内连续触发事件，只会在时间间隔的右侧执行回调。</p><p><img src="/images/debounce.svg" alt="debounce" /></p><h2>Throttle</h2><p>Throttle 节流，在一段时间内连接触发事件，只会在时间间隔的左侧执行回调。</p><p><img src="/images/throttle.svg" alt="Throttle" /></p><h2>实现</h2><p>这里的实现是 Debounce 和 Throttle 的基础版本：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> debounce</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">fn</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">wait</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">  let</span><span style="color:#E1E4E8"> timerId;</span></span>
<span class="line"><span style="color:#F97583">  return</span><span style="color:#F97583"> function</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">...</span><span style="color:#FFAB70">args</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> ctx</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (timerId) {</span></span>
<span class="line"><span style="color:#B392F0">      clearTimeout</span><span style="color:#E1E4E8">(timerId);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    timerId </span><span style="color:#F97583">=</span><span style="color:#B392F0"> setTimeout</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">      fn.</span><span style="color:#B392F0">apply</span><span style="color:#E1E4E8">(ctx, args);</span></span>
<span class="line"><span style="color:#E1E4E8">    }, wait);</span></span>
<span class="line"><span style="color:#E1E4E8">  };</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> throttle</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">fn</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">wait</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">  let</span><span style="color:#E1E4E8"> lastInvoke </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">  return</span><span style="color:#F97583"> function</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">...</span><span style="color:#FFAB70">args</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> ctx</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> now</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> Date.</span><span style="color:#B392F0">now</span><span style="color:#E1E4E8">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (lastInvoke </span><span style="color:#F97583">===</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">      fn.</span><span style="color:#B392F0">apply</span><span style="color:#E1E4E8">(ctx, args);</span></span>
<span class="line"><span style="color:#E1E4E8">      lastInvoke </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> now;</span></span>
<span class="line"><span style="color:#F97583">      return</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (now </span><span style="color:#F97583">-</span><span style="color:#E1E4E8"> lastInvoke </span><span style="color:#F97583">></span><span style="color:#E1E4E8"> wait) {</span></span>
<span class="line"><span style="color:#E1E4E8">      fn.</span><span style="color:#B392F0">apply</span><span style="color:#E1E4E8">(ctx, args);</span></span>
<span class="line"><span style="color:#E1E4E8">      lastInvoke </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> now;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">  };</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>更优秀的实现可以参考 lodash 的 <code>_.debounce</code> 和 <code>_.throttle</code>。</p><hr /><ul><li>2023 年 01 月 08 日</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
