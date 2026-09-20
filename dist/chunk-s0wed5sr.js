import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>理解 Vue 的 Dep</h1><p>Dep 类是 vue 中用于追踪变化的工具类。</p><p>当组件初始化时，vue 会为 data 选项中的每个 key 创建一个 Dep 实例，用来追踪其值的 set 或 get，从而实现数据响应。
这就是所谓的“响应式”编程。</p><p>对于 vue 实现响应式编程，可以简要理解为：首先通过某种方式，在创建组件实例时，观测某些数据的变化。如果这些数据的值发生了
改变，则自动触发某些回调函数，最终触发视图更新。</p><h2>简化版</h2><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> _target;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> Dep</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">  constructor</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#79B8FF">    this</span><span style="color:#E1E4E8">._subscribers </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> [];</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#B392F0">  depend</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (_target </span><span style="color:#F97583">&#x26;&#x26;</span><span style="color:#F97583"> !</span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">._subscribers.</span><span style="color:#B392F0">includes</span><span style="color:#E1E4E8">(_target)) {</span></span>
<span class="line"><span style="color:#79B8FF">      this</span><span style="color:#E1E4E8">._subscribers.</span><span style="color:#B392F0">push</span><span style="color:#E1E4E8">(_target);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">  notify</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#79B8FF">    this</span><span style="color:#E1E4E8">._subscribers.</span><span style="color:#B392F0">forEach</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">sub</span><span style="color:#F97583"> =></span><span style="color:#B392F0"> sub</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> function</span><span style="color:#B392F0"> watchEffect</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">effect</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">  _target </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> effect;</span></span>
<span class="line"><span style="color:#B392F0">  effect</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">  _target </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> null</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>Dep 类包含两个方法，一个私有属性：</p><ul><li><code>#depend</code> 用于在数据的 getter 中收集变化依赖</li><li><code>#notify</code> 用于在 setter 中通知这个 dep 追踪的数据发生的改变，并执行注册在 <code>subscribers</code> 中的回调函数</li></ul><p>Dep 类是观察者模式的一个变种。与 Observable 不同的是 Dep 是利用了闭包的特性自动收集依赖。</p><h2>例子</h2><p>例如有这样一个 vue 组件：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">  data</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">      name: </span><span style="color:#9ECBFF">''</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">      age: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    };</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">  computed: {</span></span>
<span class="line"><span style="color:#B392F0">    message</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">      return</span><span style="color:#9ECBFF"> \`\${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">name</span><span style="color:#9ECBFF">} is \${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">age</span><span style="color:#9ECBFF">} year(s) old.\`</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">    },</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#B392F0">  render</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">h</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#B392F0"> h</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'div'</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">.message);</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span></code></pre><p>首先要明确一点，vue 组件的初始化是串行的，因为 js 本身就是单线程。</p><p>比如上面这个组件，有 <code>data</code>、<code>computed</code> 选项。vue 会先初始化 <code>data</code> 选项，然后再执行 <code>computed</code> 中的计算。
这个在 <code>created</code> 事件后，<code>this.name</code>、<code>this.age</code>、<code>this.message</code> 都可以直接在 <code>render</code> 函数中使用。
vue 初始化这些数据，目的是执行 <code>render</code> 函数，渲染视图。</p><blockquote><p>无论是 <code>template</code> 选项或 sfc 组件，模板最终会通过动态或静态的方式编译为 <code>render</code> 函数。</p></blockquote><p>对于 <code>this.message</code>，由代码可以看出，依赖于 <code>this.name</code> 和 <code>this.age</code>。vue 初始 <code>data</code> 中的对象时，会为每个字段创建一个 dep 对象，
通过拦截 setter 和 getter 实现数据变化时响应。大概的流程：</p><ul><li>初始化 <code>name</code> 字段，创建 <code>dep</code> 对象，设置 setter/getter</li><li>初始化 <code>age</code> 字段，创建 <code>dep</code> 对象，设置 setter/getter</li><li>发现有 <code>computed</code> 选项，执行 <code>computed</code> 下的函数。</li><li><code>message()</code> 会进行包装，比如传入到 <code>watchEffect()</code> 中执行。</li><li>执行 <code>watchEffect</code> 函数，设置 <code>_target</code> 为 <code>message()</code></li><li>执行 <code>message()</code>，触发 <code>this.name</code> 和 <code>this.age</code> 的 getter</li><li>getter 将 <code>message()</code> 加入到各自 dep 对象的 <code>subscribers</code> 队列中</li><li>执行结束，设置 <code>_target</code> 为 <code>null</code>。因为闭包的特性。<code>subscribers</code> 队列中记录的数据是不会被 gc。就是说可以一直保存到 dep 实例被 gc。</li><li>在初始结束后。<code>this.name</code> 被重新赋值，这时就发触发 setter 中的 <code>#notify</code> 方法，从而重新执行 <code>subscribers</code> 队列中的所有函数</li></ul><h2>小结</h2><p>vue2 中的 Dep 实现当然会更复杂，毕竟有优化和 edge case 的考虑。上面的只是一个简化的版本，用来理解 vue 是如何实现响应式的。</p><hr /><p>2021.11.7 从本地文章中添加到当前仓库。有少量修改</p>`}},void 0,!1,void 0,this)}export{n as default};
