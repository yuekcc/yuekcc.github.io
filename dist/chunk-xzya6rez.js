import{s}from"/dist/chunk-6k8ey1xy.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>Vue 组件状态管理笔记</h1><p>这里记录一下对状态管理的想法。</p><p>UI 组件通常是有状态的。所谓状态就是组件可以保存用户此时此刻的一些操作。比如，常见的开关组件。开关的状态至少有
【开】、【关】、【禁用】三种状态。这些状态的产生可能是基于数据生成，也可能是因为用户点击触发而发生改变。无论是何种原因
初始化或改变了原来状态，程序也需要记录相应的状态。</p><p>组件也有无状态的类型。【无状态】本身已经是一种状态，只是无需进行管理。无状态组件可以认为是纯粹的数据驱动。</p><p>但是 UI 本身总是有状态的。因为 UI 需要响应用户的操作，让组件维持在某些状态下。随着组件的规模增加，这就需要引入状态管理。</p><h2>基于 vuex 的状态管理</h2><p>Vuex 是 vue 官方出品的状态管理工具。Vuex 可以理解为一个中心仓库，各个组件可以读取中心仓库的内容。Vuex 基于单向
数据流的设计思想，将数据的获取、更新统一交由 Vuex 去管理。通过 Vuex 提供的 modules 功能可以将状态管制在某个领域内。</p><p><img src="/images/vuex-core-concepts.png" alt="Vuex 核心概念" /></p><p>但是在实际的项目中，我认为 Vuex 的这种设计会带来不少问题。首先是 Vuex 的概念是基于约定编写的。就是 Vuex 中 <code>getter</code>、
<code>Mutations</code>、<code>Actions</code> 更多是开发人员之间互相约定。但是这种约定很容易会因为被项目的进度打破。由于 JavaScript 的协变特性，
在 Vuex 的 state 中定义的内容，很容易被直接更改。</p><p>当然在启动 Vuex 的严格模式后，理应可以解决这些问题。只是开发人员在项目进度、加班、优秀代码之间往往会选择项目进步，而进行
【飞线】操作。比如从某个 module 中获取状态：<code>this.$store.module1.domain.someSubject.someField.someKey</code>。
按 Vuex 的思想，应该使用 <code>getter</code> 来解决这样的问题。但是往往会选择直接获取，因为这样写更好理解。</p><p>对于新接手项目的开发人员，Vuex 的代码也是雾里看花，不知所云。因为 Vuex 的模板代码太多了。而且 Vuex 在使用 JavaScript 的
动态特性实现注入组件中，更添神秘色彩。即使有 TypeScript 这样的工具，依然没有办法解决 Vuex，基于 Vue 的一些类型提示问题。</p><p>在书写【高水平代码】与【好理解代码】之间，我更倾向后者。而这样的选择也导致我在项目中不会主动去引入 Vuex 来解决所谓的多级
组件间的状态同步问题。尽量减少三方库的依赖也是我的追求。</p><h2>基于 createContext 实现的多领域状态管理</h2><p>Vue 是没有提供 useContext 这样的 API，只能自己实现。npm 有可以用的库。createContext 源自 React。Vue 版本的 createContext 可以使用 provide/inject API 和 renderless 方式实现。</p><p>所谓 renderless 的组件是会直接渲染子功能，作为父组件，只用于实现部分逻辑功能。如：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">  render</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">h</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">.$scopedSlots.</span><span style="color:#B392F0">default</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">};</span></span>
<span class="line"></span></code></pre><p>这样就可以得到一个 renderless 组件。然后通过 provide API 可以向其子组件中注入部分状态，以实现逻辑、状态共享。</p><p>一个复杂的例子：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// token.js</span></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> const</span><span style="color:#79B8FF"> CONTEXT_TOKEN</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> Symbol</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'SOME_DOMAIN'</span><span style="color:#E1E4E8">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// context.js</span></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">    data</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">            name: </span><span style="color:#9ECBFF">'tom'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">            age: </span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">    }，</span></span>
<span class="line"><span style="color:#B392F0">    provide</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">        const</span><span style="color:#79B8FF"> vm</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">            [</span><span style="color:#79B8FF">CONTEXT_TOKEN</span><span style="color:#E1E4E8">]: {</span></span>
<span class="line"><span style="color:#6A737D">                // 使用 get，保护数据不会被随意修改</span></span>
<span class="line"><span style="color:#F97583">                get</span><span style="color:#B392F0"> name</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">                    return</span><span style="color:#E1E4E8"> vm.name;</span></span>
<span class="line"><span style="color:#E1E4E8">                },</span></span>
<span class="line"><span style="color:#F97583">                get</span><span style="color:#B392F0"> age</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">                    return</span><span style="color:#E1E4E8"> vm.age;</span></span>
<span class="line"><span style="color:#E1E4E8">                }</span></span>
<span class="line"><span style="color:#E1E4E8">            }</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">    },</span></span>
<span class="line"><span style="color:#B392F0">    render</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">h</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">.$scopedSlots.</span><span style="color:#B392F0">default</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// app.js</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> {CONTEXT_TOKEN} </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> './token'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#6A737D">    // 需要使用 context 时，需要注入 CONTEXT_TOKEN</span></span>
<span class="line"><span style="color:#E1E4E8">    inject: {</span></span>
<span class="line"><span style="color:#E1E4E8">        context: </span><span style="color:#79B8FF">CONTEXT_TOKEN</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#B392F0">    render</span><span style="color:#E1E4E8">(h) {</span></span>
<span class="line"><span style="color:#E1E4E8">        return </span><span style="color:#B392F0">h</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'div'</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">null</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">\`\${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">context</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">name</span><span style="color:#9ECBFF">} is \${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">context</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">age</span><span style="color:#9ECBFF">} year(s) old\`</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// some-domain-entry.js</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Context </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> './context'</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> App </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> './app'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    components: {Context},</span></span>
<span class="line"><span style="color:#B392F0">    render</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">h</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#B392F0"> h</span><span style="color:#E1E4E8">(Context, </span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">, App)</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><p>与中心化的 Vuex 不同，createContext 风格的状态管理需要自行实现不少代码，也需要考虑如何保持数据不被子组件直接修改。比起
Vuex 的几个概念，Context Provider 也只是一个普通的 Vue 组件，并没有修改太多新的东西。</p><p>在实践上，我更认中这种分不同 domain 的状态管理风格。一是状态不会扩散到全局中，二是状态的影响范围更加好控制。</p><h2>基于 Composition API 的状态管理</h2><p>上面是使用 Vue2 实现的 domain 范围内的状态管理。事实上使用 Vue3 提供的 composition api 可以写出更优秀的 api。vue2 可以引入 composition api 插件实现类似的 api。</p><p>composition api 的优势是一是更好的类型推导，二是保持响应特性的同时可以减少无谓的干扰代码。如上面的 provide 实现。在 vue3 的 setup 函数中可以简化为：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// context.js</span></span>
<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> createContext</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">token</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">    const</span><span style="color:#B392F0"> provideContext</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">initValue</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">        const</span><span style="color:#79B8FF"> context</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> reactive</span><span style="color:#E1E4E8">(initValue)</span></span>
<span class="line"><span style="color:#B392F0">        provide</span><span style="color:#E1E4E8">(token, context)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> context</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    const</span><span style="color:#B392F0"> useContext</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#B392F0"> inject</span><span style="color:#E1E4E8">(token)</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">        provideContext,</span></span>
<span class="line"><span style="color:#E1E4E8">        useContext,</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> {</span><span style="color:#79B8FF">provideContext</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">useContext</span><span style="color:#E1E4E8">} </span><span style="color:#F97583">=</span><span style="color:#B392F0"> createContext</span><span style="color:#E1E4E8">(</span><span style="color:#B392F0">Symbol</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">'SOME_DOMAIN'</span><span style="color:#E1E4E8">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// parent.js</span></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#B392F0">    setup</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">props</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        const</span><span style="color:#79B8FF"> context</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> provideContext</span><span style="color:#E1E4E8">({</span></span>
<span class="line"><span style="color:#E1E4E8">            name: </span><span style="color:#9ECBFF">'tom'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">            age: </span><span style="color:#79B8FF">11</span></span>
<span class="line"><span style="color:#E1E4E8">        })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> context.slots.default</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#6A737D">    // ...</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// app.js</span></span>
<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    component: {Parent}</span></span>
<span class="line"><span style="color:#B392F0">    setup</span><span style="color:#E1E4E8">(props, context) {</span></span>
<span class="line"><span style="color:#E1E4E8">        const state </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useContext</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">        return {</span></span>
<span class="line"><span style="color:#E1E4E8">            state</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><hr /><p>2021 年 9 月 6 日</p>`}},void 0,!1,void 0,this)}export{n as default};
