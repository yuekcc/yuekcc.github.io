import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>Junit、Mockito DT 实战</h1><p>编写高质量的 Java 代码，单元测试是不可或缺的一环。<strong>JUnit 5</strong> 是 Java 测试的标准框架，而 <strong>Mockito</strong> 则是最流行的 Mock 框架，两者结合可以轻松实现对业务逻辑的隔离测试。</p><p>这篇指南将通过一个经典的“转账服务”案例，带你快速上手。</p><hr /><h2>1. 核心概念：为什么需要 Mockito？</h2><p>在复杂的系统中，一个类（Service）通常依赖于其他类（Repository 或外部 API）。</p><ul><li><strong>JUnit 5</strong>：负责运行测试、断言结果（判断对错）。</li><li><strong>Mockito</strong>：负责模拟（Mock）那些复杂的依赖项，让你只关注当前被测试类的逻辑。</li></ul><hr /><h2>2. 环境准备 (Maven)</h2><p>在 <code>pom.xml</code> 中引入必要的依赖。JUnit 5 建议使用 <code>junit-jupiter</code>。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">dependencies</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">>org.junit.jupiter&#x3C;/</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">>junit-jupiter-engine&#x3C;/</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">version</span><span style="color:#E1E4E8">>5.10.0&#x3C;/</span><span style="color:#85E89D">version</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">scope</span><span style="color:#E1E4E8">>test&#x3C;/</span><span style="color:#85E89D">scope</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;/</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">>org.mockito&#x3C;/</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">>mockito-junit-jupiter&#x3C;/</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">version</span><span style="color:#E1E4E8">>5.5.0&#x3C;/</span><span style="color:#85E89D">version</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#85E89D">scope</span><span style="color:#E1E4E8">>test&#x3C;/</span><span style="color:#85E89D">scope</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;/</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">dependencies</span><span style="color:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre><hr /><h2>3. 实战案例：用户服务测试</h2><p>假设我们有一个 <code>UserService</code>，它依赖 <code>UserRepository</code> 来获取用户信息。我们要测试 <code>getDisplayName</code> 方法，该方法会根据 ID 查找用户并返回“姓名 (角色)”。</p><h3>被测代码 (Service &amp; Repository)</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// 用户实体</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> record</span><span style="color:#B392F0"> User</span><span style="color:#E1E4E8">(Long id, String name, String role) {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 数据访问接口</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> UserRepository</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    User </span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(Long </span><span style="color:#FFAB70">id</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 业务逻辑类 (我们要测试的对象)</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> UserService</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> UserRepository userRepository;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#B392F0"> UserService</span><span style="color:#E1E4E8">(UserRepository </span><span style="color:#FFAB70">userRepository</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#79B8FF">        this</span><span style="color:#E1E4E8">.userRepository </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> userRepository;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> String </span><span style="color:#B392F0">getDisplayName</span><span style="color:#E1E4E8">(Long </span><span style="color:#FFAB70">id</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        User user </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> userRepository.</span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(id);</span></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (user </span><span style="color:#F97583">==</span><span style="color:#79B8FF"> null</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">return</span><span style="color:#9ECBFF"> "Unknown User"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> user.</span><span style="color:#B392F0">name</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">+</span><span style="color:#9ECBFF"> " ("</span><span style="color:#F97583"> +</span><span style="color:#E1E4E8"> user.</span><span style="color:#B392F0">role</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">+</span><span style="color:#9ECBFF"> ")"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><h3>编写测试用例</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> org.junit.jupiter.api.Test;</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> org.junit.jupiter.api.extension.ExtendWith;</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> org.mockito.InjectMocks;</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> org.mockito.Mock;</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> org.mockito.junit.jupiter.MockitoExtension;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> static</span><span style="color:#E1E4E8"> org.junit.jupiter.api.Assertions.assertEquals;</span></span>
<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> static</span><span style="color:#E1E4E8"> org.mockito.Mockito.</span><span style="color:#79B8FF">*</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">ExtendWith</span><span style="color:#E1E4E8">(MockitoExtension.class) </span><span style="color:#6A737D">// 启用 Mockito 扩展</span></span>
<span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> UserServiceTest</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Mock</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> UserRepository userRepository; </span><span style="color:#6A737D">// 模拟一个数据库仓库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">InjectMocks</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> UserService userService; </span><span style="color:#6A737D">// 自动将上面的 Mock 注入到这个 Service 中</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Test</span></span>
<span class="line"><span style="color:#F97583">    void</span><span style="color:#B392F0"> shouldReturnFormattedDisplayName</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#6A737D">        // 1. 准备数据 (Given)</span></span>
<span class="line"><span style="color:#E1E4E8">        User mockUser </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> User</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1L</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">"Alice"</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">"Admin"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 2. 设定 Mock 行为 (When)</span></span>
<span class="line"><span style="color:#6A737D">        // 当调用 userRepository.findById(1) 时，返回 mockUser</span></span>
<span class="line"><span style="color:#B392F0">        when</span><span style="color:#E1E4E8">(userRepository.</span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1L</span><span style="color:#E1E4E8">)).</span><span style="color:#B392F0">thenReturn</span><span style="color:#E1E4E8">(mockUser);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 3. 执行测试方法 (Act)</span></span>
<span class="line"><span style="color:#E1E4E8">        String displayName </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> userService.</span><span style="color:#B392F0">getDisplayName</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1L</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 4. 断言结果 (Assert)</span></span>
<span class="line"><span style="color:#B392F0">        assertEquals</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Alice (Admin)"</span><span style="color:#E1E4E8">, displayName);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 5. 验证行为 (Verify) - 确保 findById 真的被调用了一次</span></span>
<span class="line"><span style="color:#B392F0">        verify</span><span style="color:#E1E4E8">(userRepository, </span><span style="color:#B392F0">times</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">)).</span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1L</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Test</span></span>
<span class="line"><span style="color:#F97583">    void</span><span style="color:#B392F0"> shouldReturnUnknownWhenUserNotFound</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#6A737D">        // 设定当找不到用户时返回 null</span></span>
<span class="line"><span style="color:#B392F0">        when</span><span style="color:#E1E4E8">(userRepository.</span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">99L</span><span style="color:#E1E4E8">)).</span><span style="color:#B392F0">thenReturn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        String displayName </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> userService.</span><span style="color:#B392F0">getDisplayName</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">99L</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0">        assertEquals</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Unknown User"</span><span style="color:#E1E4E8">, displayName);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><hr /><h2>4. 常用注解与技巧速查</h2><p>为了方便你后续开发，这里总结了最常用的功能：</p><table><thead><tr><th>注解 / 方法</th><th>作用</th></tr></thead><tbody><tr><td><strong><code>@ExtendWith(MockitoExtension.class)</code></strong></td><td>在 JUnit 5 中初始化 Mockito 环境。</td></tr><tr><td><strong><code>@Mock</code></strong></td><td>创建一个虚假的模拟对象。</td></tr><tr><td><strong><code>@InjectMocks</code></strong></td><td>创建一个实例，并将标记了 <code>@Mock</code> 的对象注入其中。</td></tr><tr><td><strong><code>when(...).thenReturn(...)</code></strong></td><td>设定桩模块（Stubbing），规定 Mock 对象的行为。</td></tr><tr><td><strong><code>assertThrows(...)</code></strong></td><td>JUnit 5 断言，用于检查代码是否按预期抛出异常。</td></tr><tr><td><strong><code>verify(...)</code></strong></td><td>检查某个 Mock 方法是否被调用，调用了多少次。</td></tr></tbody></table><hr /><h2>5. 编写测试的黄金守则 (AAA 原则)</h2><p>一个优秀的单元测试通常遵循 <strong>AAA 结构</strong>，这让代码非常易读：</p><ol><li><strong>Arrange (准备)</strong>: 初始化对象、Mock 行为和输入参数。</li><li><strong>Act (执行)</strong>: 调用你需要测试的那个方法。</li><li><strong>Assert (断言)</strong>: 检查输出结果或对象状态是否符合预期。</li></ol><blockquote><p><strong>小贴士</strong>：单元测试应该运行飞快，且不应该连接真实的数据库或网络。如果你发现测试很慢，检查一下是不是忘记 Mock 掉外部调用了。</p></blockquote><hr /><p><strong>你想尝试为一个包含复杂逻辑（比如带 <code>if-else</code> 或循环）的方法编写测试吗？我可以帮你针对具体的代码逻辑设计测试方案。</strong></p><hr /><ul><li>2026-01-08 by Gemini 3</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
