import{e as n,h as e}from"/dist/chunk-0936xbxf.js";function a(){return e("div",{class:"markdown-body",children:e(n,{children:[e("h1",{children:"理解 Vue 的 Dep"},void 0,!1,void 0,this),`
`,e("p",{children:"Dep 类是 vue 中用于追踪变化的工具类。"},void 0,!1,void 0,this),`
`,e("p",{children:`当组件初始化时，vue 会为 data 选项中的每个 key 创建一个 Dep 实例，用来追踪其值的 set 或 get，从而实现数据响应。
这就是所谓的“响应式”编程。`},void 0,!1,void 0,this),`
`,e("p",{children:`对于 vue 实现响应式编程，可以简要理解为：首先通过某种方式，在创建组件实例时，观测某些数据的变化。如果这些数据的值发生了
改变，则自动触发某些回调函数，最终触发视图更新。`},void 0,!1,void 0,this),`
`,e("h2",{children:"简化版"},void 0,!1,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{children:[e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"let"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" _target;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"class"},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:" Dep"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"  constructor"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#79B8FF"},children:"    this"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"._subscribers "},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" [];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"  depend"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"    if"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" (_target "},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:"&&"},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:" !"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"._subscribers."},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:"includes"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"(_target)) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#79B8FF"},children:"      this"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"._subscribers."},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:"push"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"(_target);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"  notify"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#79B8FF"},children:"    this"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"._subscribers."},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:"forEach"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),e("span",{style:{color:"#FFAB70"},children:"sub"},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:" =>"},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:" sub"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"());"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"export"},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:" function"},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:" watchEffect"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),e("span",{style:{color:"#FFAB70"},children:"effect"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"  _target "},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" effect;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"  effect"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"  _target "},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:" null"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"Dep 类包含两个方法，一个私有属性："},void 0,!1,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:[e("code",{children:"#depend"},void 0,!1,void 0,this)," 用于在数据的 getter 中收集变化依赖"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"#notify"},void 0,!1,void 0,this)," 用于在 setter 中通知这个 dep 追踪的数据发生的改变，并执行注册在 ",e("code",{children:"subscribers"},void 0,!1,void 0,this)," 中的回调函数"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:"Dep 类是观察者模式的一个变种。与 Observable 不同的是 Dep 是利用了闭包的特性自动收集依赖。"},void 0,!1,void 0,this),`
`,e("h2",{children:"例子"},void 0,!1,void 0,this),`
`,e("p",{children:"例如有这样一个 vue 组件："},void 0,!1,void 0,this),`
`,e("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:e("code",{children:[e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"export"},void 0,!1,void 0,this),e("span",{style:{color:"#F97583"},children:" default"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"  data"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"      name: "},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:"''"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#E1E4E8"},children:"      age: "},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"    };"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  computed: {"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"    message"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"      return"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:" `${"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:"."},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"name"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:"} is ${"},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:"."},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"age"},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:"} year(s) old.`"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"    },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#B392F0"},children:"  render"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),e("span",{style:{color:"#FFAB70"},children:"h"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:[e("span",{style:{color:"#F97583"},children:"    return"},void 0,!1,void 0,this),e("span",{style:{color:"#B392F0"},children:" h"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),e("span",{style:{color:"#9ECBFF"},children:"'div'"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),e("span",{style:{color:"#79B8FF"},children:"this"},void 0,!1,void 0,this),e("span",{style:{color:"#E1E4E8"},children:".message);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"  },"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line",children:e("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,e("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,e("p",{children:"首先要明确一点，vue 组件的初始化是串行的，因为 js 本身就是单线程。"},void 0,!1,void 0,this),`
`,e("p",{children:["比如上面这个组件，有 ",e("code",{children:"data"},void 0,!1,void 0,this),"、",e("code",{children:"computed"},void 0,!1,void 0,this)," 选项。vue 会先初始化 ",e("code",{children:"data"},void 0,!1,void 0,this)," 选项，然后再执行 ",e("code",{children:"computed"},void 0,!1,void 0,this),` 中的计算。
这个在 `,e("code",{children:"created"},void 0,!1,void 0,this)," 事件后，",e("code",{children:"this.name"},void 0,!1,void 0,this),"、",e("code",{children:"this.age"},void 0,!1,void 0,this),"、",e("code",{children:"this.message"},void 0,!1,void 0,this)," 都可以直接在 ",e("code",{children:"render"},void 0,!1,void 0,this),` 函数中使用。
vue 初始化这些数据，目的是执行 `,e("code",{children:"render"},void 0,!1,void 0,this)," 函数，渲染视图。"]},void 0,!0,void 0,this),`
`,e("blockquote",{children:[`
`,e("p",{children:["无论是 ",e("code",{children:"template"},void 0,!1,void 0,this)," 选项或 sfc 组件，模板最终会通过动态或静态的方式编译为 ",e("code",{children:"render"},void 0,!1,void 0,this)," 函数。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("p",{children:["对于 ",e("code",{children:"this.message"},void 0,!1,void 0,this),"，由代码可以看出，依赖于 ",e("code",{children:"this.name"},void 0,!1,void 0,this)," 和 ",e("code",{children:"this.age"},void 0,!1,void 0,this),"。vue 初始 ",e("code",{children:"data"},void 0,!1,void 0,this),` 中的对象时，会为每个字段创建一个 dep 对象，
通过拦截 setter 和 getter 实现数据变化时响应。大概的流程：`]},void 0,!0,void 0,this),`
`,e("ul",{children:[`
`,e("li",{children:["初始化 ",e("code",{children:"name"},void 0,!1,void 0,this)," 字段，创建 ",e("code",{children:"dep"},void 0,!1,void 0,this)," 对象，设置 setter/getter"]},void 0,!0,void 0,this),`
`,e("li",{children:["初始化 ",e("code",{children:"age"},void 0,!1,void 0,this)," 字段，创建 ",e("code",{children:"dep"},void 0,!1,void 0,this)," 对象，设置 setter/getter"]},void 0,!0,void 0,this),`
`,e("li",{children:["发现有 ",e("code",{children:"computed"},void 0,!1,void 0,this)," 选项，执行 ",e("code",{children:"computed"},void 0,!1,void 0,this)," 下的函数。"]},void 0,!0,void 0,this),`
`,e("li",{children:[e("code",{children:"message()"},void 0,!1,void 0,this)," 会进行包装，比如传入到 ",e("code",{children:"watchEffect()"},void 0,!1,void 0,this)," 中执行。"]},void 0,!0,void 0,this),`
`,e("li",{children:["执行 ",e("code",{children:"watchEffect"},void 0,!1,void 0,this)," 函数，设置 ",e("code",{children:"_target"},void 0,!1,void 0,this)," 为 ",e("code",{children:"message()"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,e("li",{children:["执行 ",e("code",{children:"message()"},void 0,!1,void 0,this),"，触发 ",e("code",{children:"this.name"},void 0,!1,void 0,this)," 和 ",e("code",{children:"this.age"},void 0,!1,void 0,this)," 的 getter"]},void 0,!0,void 0,this),`
`,e("li",{children:["getter 将 ",e("code",{children:"message()"},void 0,!1,void 0,this)," 加入到各自 dep 对象的 ",e("code",{children:"subscribers"},void 0,!1,void 0,this)," 队列中"]},void 0,!0,void 0,this),`
`,e("li",{children:["执行结束，设置 ",e("code",{children:"_target"},void 0,!1,void 0,this)," 为 ",e("code",{children:"null"},void 0,!1,void 0,this),"。因为闭包的特性。",e("code",{children:"subscribers"},void 0,!1,void 0,this)," 队列中记录的数据是不会被 gc。就是说可以一直保存到 dep 实例被 gc。"]},void 0,!0,void 0,this),`
`,e("li",{children:["在初始结束后。",e("code",{children:"this.name"},void 0,!1,void 0,this)," 被重新赋值，这时就发触发 setter 中的 ",e("code",{children:"#notify"},void 0,!1,void 0,this)," 方法，从而重新执行 ",e("code",{children:"subscribers"},void 0,!1,void 0,this)," 队列中的所有函数"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,e("h2",{children:"小结"},void 0,!1,void 0,this),`
`,e("p",{children:"vue2 中的 Dep 实现当然会更复杂，毕竟有优化和 edge case 的考虑。上面的只是一个简化的版本，用来理解 vue 是如何实现响应式的。"},void 0,!1,void 0,this),`
`,e("hr",{},void 0,!1,void 0,this),`
`,e("p",{children:"2021.11.7 从本地文章中添加到当前仓库。有少量修改"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{a as default};
