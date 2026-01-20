import{e as a,h as n}from"/dist/chunk-0936xbxf.js";function l(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"[AI 助学] Google的Java 库 Guice 怎么使用？可以实现什么功能？"},void 0,!1,void 0,this),`
`,n("p",{children:"下面是基于已收集资料，对你问题的直接、可操作回答。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"1. Guice 是什么？大概能做什么？"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"Google Guice"},void 0,!1,void 0,this)," 是 Google 推出的一个",n("strong",{children:"轻量级 Java 依赖注入（Dependency Injection, DI）框架"},void 0,!1,void 0,this),"，专门用来："]},void 0,!0,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["自动创建和注入对象实例（替代到处 ",n("code",{children:"new"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:"管理接口与实现类的绑定关系"},void 0,!1,void 0,this),`
`,n("li",{children:"管理对象生命周期（单例、多例、请求作用域等）"},void 0,!1,void 0,this),`
`,n("li",{children:"支持简单的 AOP（方法拦截，例如日志、事务）"},void 0,!1,void 0,this),`
`,n("li",{children:["让代码更加",n("strong",{children:"松耦合、易测试、易替换实现"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:["它只专注 DI，本身不是像 Spring 那样的大型“全家桶”框架，更适合想要一个",n("strong",{children:"干净、简单的 DI 容器"},void 0,!1,void 0,this),"的场景。[1][2]"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"2. Guice 能实现哪些功能（核心能力概览）"},void 0,!1,void 0,this),`
`,n("p",{children:["用一句话概括：",n("strong",{children:"“用注解 + 模块配置，自动帮你 new 出所有需要的对象，并把它们按你的设计关系拼好。”"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"主要功能："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"依赖注入"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"构造器注入、setter 注入、字段注入"},void 0,!1,void 0,this),`
`,n("li",{children:"可以对接口注入具体实现（便于替换实现或写单元测试）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"绑定（Binding）管理"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"把接口和实现的对应关系注册到 Guice 容器中"},void 0,!1,void 0,this),`
`,n("li",{children:["普通绑定、命名绑定（",n("code",{children:"@Named"},void 0,!1,void 0,this),"）、",n("code",{children:"@Provides"},void 0,!1,void 0,this)," 方法、Provider、构造器绑定等多种方式 [3]"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"作用域（Scope）管理"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["单例（",n("code",{children:"@Singleton"},void 0,!1,void 0,this)," 或 ",n("code",{children:"Scopes.SINGLETON"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:["延迟/立即单例（",n("code",{children:"asEagerSingleton()"},void 0,!1,void 0,this),"）"]},void 0,!0,void 0,this),`
`,n("li",{children:"可扩展到请求/会话等作用域（与 Web 框架集成时）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"JSR‑330 标准注解支持"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["支持 ",n("code",{children:"javax.inject.Inject"},void 0,!1,void 0,this),"、",n("code",{children:"javax.inject.Singleton"},void 0,!1,void 0,this),"、",n("code",{children:"javax.inject.Named"},void 0,!1,void 0,this)," 等标准注解 [1][2]"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"AOP（切面）/方法拦截"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"基于 AOP Alliance 的方法拦截机制"},void 0,!1,void 0,this),`
`,n("li",{children:"可以实现日志、权限校验、性能统计、事务边界等横切逻辑 [2]"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"测试友好"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"为测试场景创建专门的 Module，把真实实现替换成 Mock 实现 [1]"},void 0,!1,void 0,this),`
`,n("li",{children:"极大简化测试 setup"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"JPA/Hibernate 等持久层集成"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"通过官方/三方扩展集成 JPA/Hibernate，利用 AOP 管理事务、EntityManager 等 [4]"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"3. Guice 基本使用方法（从 0 到能跑的示例）"},void 0,!1,void 0,this),`
`,n("p",{children:"下面是一个最典型的“接口 + 多个实现 + 业务类 + Module + main”的完整最小示例，足以入门。"},void 0,!1,void 0,this),`
`,n("h3",{children:"3.1 添加 Maven 依赖"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"<"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"dependency"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    <"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"groupId"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">com.google.inject</"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"groupId"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    <"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"artifactId"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">guice</"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"artifactId"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    <"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"version"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">5.1.0</"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"version"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"> "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"<!-- 写当前稳定版本即可 -->"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"</"},void 0,!1,void 0,this),n("span",{style:{color:"#85E89D"},children:"dependency"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:">"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"3.2 定义接口和实现类"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 接口"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" interface"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MessageService"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    boolean"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sendMessage"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"msg"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"recipient"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 实现 1：Email"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 可选：@Singleton 表示只要一个实例"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" javax.inject.Singleton;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Singleton"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" EmailService"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" implements"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MessageService"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Override"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" boolean"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sendMessage"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"msg"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"recipient"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        System.out."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Email sent to "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" recipient "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' " with message="'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" msg);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" true"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 实现 2：Facebook"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Singleton"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" FacebookService"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" implements"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MessageService"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Override"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" boolean"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" sendMessage"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"msg"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"recipient"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        System.out."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Facebook msg to "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" recipient "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"+"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' " with message="'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" msg);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" true"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"3.3 编写“消费方”业务类：依赖注入进来用"},void 0,!1,void 0,this),`
`,n("p",{children:["推荐用",n("strong",{children:"构造器注入"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" javax.inject.Inject;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MyApplication"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" final"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" MessageService service;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Inject"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MyApplication"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MessageService "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"service"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"        this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:".service "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" service;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" boolean"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" send"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"msg"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", String "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"recipient"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" service."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"sendMessage"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(msg, recipient);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["你不再 ",n("code",{children:"new EmailService()"},void 0,!1,void 0,this),"，而是只声明“我需要一个 ",n("code",{children:"MessageService"},void 0,!1,void 0,this),"”。"]},void 0,!0,void 0,this),`
`,n("h3",{children:"3.4 写 Guice Module：配置“接口 → 实现”的映射"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.google.inject.AbstractModule;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.google.inject.Scopes;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" AppModule"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" extends"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" AbstractModule"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Override"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    protected"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" configure"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // 把 MessageService 绑定到具体实现 FacebookService"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        bind"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MessageService.class)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"            ."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"to"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(FacebookService.class)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"            ."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"in"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(Scopes.SINGLETON);  "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 可选：显式指定单例"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // 想改用邮件，只需要改这一行："},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // bind(MessageService.class).to(EmailService.class).in(Scopes.SINGLETON);"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"3.5 在 main 中创建 Injector 并获取业务对象"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.google.inject.Guice;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.google.inject.Injector;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" Main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" static"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" main"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"String"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"[] "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"args"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // 1. 创建 Injector，把 Module 传进去"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        Injector injector "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Guice."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"createInjector"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" AppModule"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"());"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // 2. 向 Guice 要一个 MyApplication 实例"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        MyApplication app "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" injector."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"getInstance"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MyApplication.class);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // 3. 使用它"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        app."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"send"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Hi Guice"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"user@example.com"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["输出会根据你在 Module 中绑定的是 ",n("code",{children:"EmailService"},void 0,!1,void 0,this)," 还是 ",n("code",{children:"FacebookService"},void 0,!1,void 0,this)," 而变化。这就是“",n("strong",{children:"通过配置切换实现，而不是改业务代码"},void 0,!1,void 0,this),"”。"]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"4. 再深入一点：常用特性怎么用？"},void 0,!1,void 0,this),`
`,n("h3",{children:"4.1 不同注入方式"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[n("strong",{children:"构造器注入（推荐）"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Inject"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MyApplication"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MessageService service) { ... }"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"2",children:[`
`,n("li",{children:[n("strong",{children:"Setter/方法注入"},void 0,!1,void 0,this),"："]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" MessageService service;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Inject"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" setService"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MessageService service) {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"    this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:".service "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" service;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"3",children:[`
`,n("li",{children:[n("strong",{children:"字段注入"},void 0,!1,void 0,this),"（不推荐滥用，但有时方便）："]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Inject"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"private"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" MessageService service;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"4.2 命名绑定（多实现时区分）"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// Module 配置"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" static"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.google.inject.name.Names.named;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Override"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"protected"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" configure"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    bind"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MessageService.class)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"annotatedWith"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"named"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"email"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"))"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"to"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(EmailService.class);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    bind"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MessageService.class)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"annotatedWith"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"named"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"facebook"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"))"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"to"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(FacebookService.class);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 使用方"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MyApplication"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" final"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" MessageService emailService;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    private"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" final"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" MessageService facebookService;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Inject"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MyApplication"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Named"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"email"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") MessageService "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"emailService"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:","},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Named"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"facebook"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") MessageService "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"facebookService"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    ) {"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"        this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:".emailService "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" emailService;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#79B8FF"},children:"        this"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:".facebookService "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" facebookService;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:["4.3 ",n("code",{children:"@Provides"},void 0,!1,void 0,this)," 方法（复杂构造逻辑）"]},void 0,!0,void 0,this),`
`,n("p",{children:["当创建某些对象需要复杂逻辑、配置文件、连接池等时，用 ",n("code",{children:"@Provides"},void 0,!1,void 0,this)," 很方便："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" DbModule"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" extends"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" AbstractModule"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Provides"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Singleton"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" DataSource "},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"provideDataSource"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"        // 读取配置、初始化连接池等"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        HikariDataSource ds "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" HikariDataSource"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        ds."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"setJdbcUrl"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"jdbc:mysql://..."'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ds;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h3",{children:"4.4 AOP / 方法拦截简单示例"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:"定义自定义注解："},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Retention"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(RetentionPolicy.RUNTIME)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Target"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(ElementType.METHOD)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"interface"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" Loggable"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {}"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"2",children:[`
`,n("li",{children:"定义拦截器："},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" org.aopalliance.intercept.MethodInterceptor;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" org.aopalliance.intercept.MethodInvocation;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" LoggingInterceptor"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" implements"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MethodInterceptor"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Override"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Object "},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"invoke"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(MethodInvocation "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"invocation"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"throws"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" Throwable {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        System.out."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"Before "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" invocation."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"getMethod"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"getName"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"());"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        Object result "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" invocation."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"proceed"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"        System.out."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"println"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"After "'},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" +"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" invocation."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"getMethod"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()."},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"getName"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"());"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        return"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" result;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"3",children:[`
`,n("li",{children:"在 Module 里绑定拦截器："},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"import"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" static"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" com.google.inject.matcher.Matchers."},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"@"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Override"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"protected"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" configure"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"    bindInterceptor"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        any"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(),                      "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 匹配任意类"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"        annotatedWith"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(Loggable.class), "},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:"// 匹配带 @Loggable 的方法"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"        new"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" LoggingInterceptor"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"()"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"    );"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ol",{start:"4",children:[`
`,n("li",{children:"使用："},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" class"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" MyService"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"    @"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"Loggable"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    public"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" void"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" doWork"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"() { ... }"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"5. 典型应用场景"},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"Web / REST 服务"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"与 Javalin、Dropwizard 等轻量框架结合，用 Guice 管理 Service、DAO 等对象"},void 0,!1,void 0,this),`
`,n("li",{children:["JPA/Hibernate + ",n("code",{children:"guice-persist"},void 0,!1,void 0,this)," 实现事务、EntityManager 注入 [4]"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"后台服务 / 微服务"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"明确模块边界，一个模块负责一组绑定（某个业务子系统）"},void 0,!1,void 0,this),`
`,n("li",{children:"不依赖庞大的 Spring 生态，更轻量"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"大型项目模块化"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"每个功能域一个 Module"},void 0,!1,void 0,this),`
`,n("li",{children:"使用接口+实现 + 绑定 的方式解耦"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:n("strong",{children:"单元测试 / 集成测试"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"使用测试专用 Module，把接口绑定为 Mock/Fake 实现 [1]"},void 0,!1,void 0,this),`
`,n("li",{children:"避免在测试中手动 new 大量对象，测试 setup 更干净"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"6. 写 Guice 时的实用最佳实践（精简版）"},void 0,!1,void 0,this),`
`,n("p",{children:"综合官方和社区建议：[5]"},void 0,!1,void 0,this),`
`,n("p",{children:n("strong",{children:"推荐这样做："},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[n("strong",{children:"优先使用构造器注入"},void 0,!1,void 0,this),"，并将依赖字段声明为 ",n("code",{children:"final"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("li",{children:["只注入",n("strong",{children:"真正的直接依赖"},void 0,!1,void 0,this),"（不要把整个 Injector 或一堆半相关对象塞进来）"]},void 0,!0,void 0,this),`
`,n("li",{children:[n("strong",{children:"减少可变状态"},void 0,!1,void 0,this),"，能不变就不变"]},void 0,!0,void 0,this),`
`,n("li",{children:"模块按“功能域”而不是“技术层”（controller/service/dao）来划分"},void 0,!1,void 0,this),`
`,n("li",{children:"Module 内逻辑保持简单、确定，不要写复杂条件或 IO"},void 0,!1,void 0,this),`
`,n("li",{children:"避免循环依赖设计"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:n("strong",{children:"避免这样做："},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["频繁在业务代码里使用 ",n("code",{children:"Injector.getInstance()"},void 0,!1,void 0,this),"（推荐只在应用启动处使用一次）"]},void 0,!0,void 0,this),`
`,n("li",{children:"使用大量静态单例代替作用域管理"},void 0,!1,void 0,this),`
`,n("li",{children:["在 ",n("code",{children:"@Provides"},void 0,!1,void 0,this)," 方法或构造器里做重 IO/复杂逻辑"]},void 0,!0,void 0,this),`
`,n("li",{children:"在 Module 里写 if/else 决定绑定（可用不同的 Module 组合解决）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"7. 总结：一句话回答你"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"Guice 怎么用？"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
定义接口和实现 → 用注解 `,n("code",{children:"@Inject"},void 0,!1,void 0,this)," 声明依赖 → 写一个或多个 ",n("code",{children:"Module"},void 0,!1,void 0,this)," 用 ",n("code",{children:"bind()"},void 0,!1,void 0,this)," 配置“接口 → 实现” → 在 ",n("code",{children:"main"},void 0,!1,void 0,this)," 或入口处调用 ",n("code",{children:"Guice.createInjector(...)"},void 0,!1,void 0,this)," 得到 ",n("code",{children:"Injector"},void 0,!1,void 0,this)," → 用 ",n("code",{children:"injector.getInstance()"},void 0,!1,void 0,this)," 拿业务对象开始用即可。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:[n("strong",{children:"Guice 能实现什么功能？"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
核心是`,n("strong",{children:"依赖注入 + 作用域管理 + 简单 AOP"},void 0,!1,void 0,this),"，让你写的 Java 应用从到处 ",n("code",{children:"new"},void 0,!1,void 0,this)," 和紧耦合中解放出来，代码更模块化、更易测试、更容易替换实现和重构。"]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"如果你愿意，我可以帮你根据当前项目结构，设计一个最小改造方案，把一两个核心 service 先迁到 Guice 上，逐步体验一下它带来的好处。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h3",{children:"References"},void 0,!1,void 0,this),`
`,n("p",{children:["[1] Google Guice Dependency Injection Example Tutorial. ",n("a",{href:"https://www.digitalocean.com/community/tutorials/google-guice-dependency-injection-example-tutorial",children:"https://www.digitalocean.com/community/tutorials/google-guice-dependency-injection-example-tutorial"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
[2] Guide to Google Guice. `,n("a",{href:"https://www.baeldung.com/guice",children:"https://www.baeldung.com/guice"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
[3] Bindings · google/guice Wiki. `,n("a",{href:"https://github.com/google/guice/wiki/Bindings",children:"https://github.com/google/guice/wiki/Bindings"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
[4] JPA · google/guice Wiki. `,n("a",{href:"https://github.com/google/guice/wiki/JPA",children:"https://github.com/google/guice/wiki/JPA"},void 0,!1,void 0,this),n("br",{},void 0,!1,void 0,this),`
[5] BestPractices · google/guice Wiki. `,n("a",{href:"https://github.com/google/guice/wiki/BestPractices",children:"https://github.com/google/guice/wiki/BestPractices"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:["2026-01-20：by ",n("a",{href:"https://dr.miromind.ai/share/dae84108-324c-414d-be80-418417854c7b",children:"MiroThinker"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{l as default};
