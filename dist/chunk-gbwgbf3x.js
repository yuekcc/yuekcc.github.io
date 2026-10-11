import{s}from"/dist/chunk-6k8ey1xy.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>C3 语言入门教程</h1><p>By <a href="https://chat.deepseek.com/share/ibkdkn0veay6xmehc1">D 老师</a></p><p>另有 <a href="./c3/SKILL.md">C3 SKILL.md</a></p><h2>1. 引言</h2><p>C3 是一种系统编程语言，它是 C 语言的进化版，旨在保持 C 的简洁性和性能的同时，引入更现代的编程特性。C3 的设计目标包括：</p><ul><li><strong>保持接近 C</strong>：C 程序员可以快速上手。</li><li><strong>C ABI 兼容</strong>：与 C 代码无缝互操作。</li><li><strong>零成本抽象</strong>：错误处理、泛型、编译时执行等特性不会引入运行时开销。</li><li><strong>实用性</strong>：提供模块、契约、宏、类型推断等现代特性，同时保持语言简单。</li></ul><p>C3 不是 C++ 的替代品，也不是 Rust 那样的激进语言，它更像是一个打磨过的 C，适合系统编程、嵌入式、游戏开发等场景。</p><h2>2. 安装 C3 编译器</h2><p>C3 的官方编译器是 <code>c3c</code>，支持 Windows、macOS、Linux 等平台。你可以从 <a href="https://c3-lang.org">c3-lang.org</a> 下载预编译的二进制文件，也可以从源码构建。</p><h3>快速安装（以 Linux/macOS 为例）</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D"># 下载最新版二进制（以 0.7.10 为例）</span></span>
<span class="line"><span style="color:#B392F0">wget</span><span style="color:#9ECBFF"> https://github.com/c3lang/c3c/releases/download/0.7.10/c3c-linux-x64.tar.gz</span></span>
<span class="line"><span style="color:#B392F0">tar</span><span style="color:#79B8FF"> -xzf</span><span style="color:#9ECBFF"> c3c-linux-x64.tar.gz</span></span>
<span class="line"><span style="color:#B392F0">sudo</span><span style="color:#9ECBFF"> mv</span><span style="color:#9ECBFF"> c3c</span><span style="color:#9ECBFF"> /usr/local/bin/</span></span>
<span class="line"></span></code></pre><p>或者使用包管理器（如果可用）：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D"># 在 macOS 上使用 Homebrew</span></span>
<span class="line"><span style="color:#B392F0">brew</span><span style="color:#9ECBFF"> install</span><span style="color:#9ECBFF"> c3c</span></span>
<span class="line"></span></code></pre><h3>验证安装</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">c3c</span><span style="color:#79B8FF"> --version</span></span>
<span class="line"></span></code></pre><p>如果看到版本号，说明安装成功。</p><h2>3. 第一个程序：Hello World</h2><p>创建一个文件 <code>hello.c3</code>：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">import std::io;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Hello, World!"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>编译并运行：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">c3c</span><span style="color:#9ECBFF"> compile-run</span><span style="color:#9ECBFF"> hello.c3</span></span>
<span class="line"></span></code></pre><p>输出：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">Hello, World</span><span style="color:#F97583">!</span></span>
<span class="line"></span></code></pre><h3>代码解析</h3><ul><li><code>import std::io;</code> 导入标准库的 <code>io</code> 模块，这样我们就可以使用 <code>io::printn</code> 函数。</li><li><code>fn void main()</code> 定义程序入口函数，<code>fn</code> 是函数关键字，<code>void</code> 表示无返回值。</li><li><code>io::printn</code> 是 <code>std::io</code> 模块中的一个函数，<code>n</code> 后缀表示打印后换行。</li><li>字符串字面量用双引号包围，支持常见的转义序列如 <code>\\n</code>。</li></ul><h2>4. 基础语法</h2><h3>4.1 变量与类型</h3><p>C3 提供了明确的整数和浮点类型，没有 C 中的 <code>int</code> 大小不明确的问题。所有变量默认零初始化，但可以使用 <code>@noinit</code> 跳过初始化。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 10</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 32 位有符号整数</span></span>
<span class="line"><span style="color:#F97583">    uint</span><span style="color:#E1E4E8"> b </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 20</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 32 位无符号整数</span></span>
<span class="line"><span style="color:#F97583">    long</span><span style="color:#E1E4E8"> c </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 30</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 64 位有符号整数</span></span>
<span class="line"><span style="color:#F97583">    float</span><span style="color:#E1E4E8"> d </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 3.14</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">       // 32 位浮点数</span></span>
<span class="line"><span style="color:#F97583">    double</span><span style="color:#E1E4E8"> e </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 2.718</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">     // 64 位浮点数</span></span>
<span class="line"><span style="color:#F97583">    bool</span><span style="color:#E1E4E8"> f </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">        // 布尔值</span></span>
<span class="line"><span style="color:#F97583">    char</span><span style="color:#E1E4E8"> g </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'A'</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">         // 8 位无符号字符</span></span>
<span class="line"><span style="color:#E1E4E8">    ichar h </span><span style="color:#F97583">=</span><span style="color:#F97583"> -</span><span style="color:#79B8FF">128</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">       // 8 位有符号字符</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 类型推断（仅限局部变量）</span></span>
<span class="line"><span style="color:#E1E4E8">    var x </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 42</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">           // x 类型为 int</span></span>
<span class="line"><span style="color:#E1E4E8">    var y </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 3.14</span><span style="color:#F97583">f</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">        // y 类型为 float</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 零初始化</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> z;</span><span style="color:#6A737D">                // z = 0</span></span>
<span class="line"><span style="color:#6A737D">    // 跳过初始化（需谨慎使用）</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> w @noinit;</span><span style="color:#6A737D">        // w 未初始化，必须在使用前赋值</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p><strong>常量</strong>使用 <code>const</code> 声明，命名必须全大写：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> MAX_SIZE </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 1024</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> PI: </span><span style="color:#F97583">double</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> 3.1415926535</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span></code></pre><h3>4.2 控制流</h3><p><strong>if 语句</strong>：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">if</span><span style="color:#E1E4E8"> (x </span><span style="color:#F97583">></span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"positive"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"><span style="color:#F97583">else</span><span style="color:#F97583"> if</span><span style="color:#E1E4E8"> (x </span><span style="color:#F97583">==</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"zero"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"><span style="color:#F97583">else</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"negative"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p><strong>循环</strong>：<code>while</code>、<code>for</code>、<code>do</code> 与 C 类似，但 <code>for</code> 支持多个初始化声明（需指定类型）：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">; i </span><span style="color:#F97583">&#x3C;</span><span style="color:#79B8FF"> 10</span><span style="color:#E1E4E8">; i</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, i);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 多个声明</span></span>
<span class="line"><span style="color:#F97583">for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> j </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 10</span><span style="color:#E1E4E8">; i </span><span style="color:#F97583">&#x3C;</span><span style="color:#E1E4E8"> j; i</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">, j</span><span style="color:#F97583">--</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#6A737D">    // ...</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p><strong>switch</strong>：与 C 不同，case 默认有隐式 <code>break</code>，需要使用 <code>nextcase</code> 来贯穿：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">switch</span><span style="color:#E1E4E8"> (x)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    case</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"one"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">    case</span><span style="color:#79B8FF"> 2</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"two"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">        nextcase;</span><span style="color:#6A737D">          // 贯穿到下一个 case</span></span>
<span class="line"><span style="color:#F97583">    case</span><span style="color:#79B8FF"> 3</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"three"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#6A737D">        // 自动 break</span></span>
<span class="line"><span style="color:#F97583">    default</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"other"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>也可以使用范围：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">switch</span><span style="color:#E1E4E8"> (x)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    case</span><span style="color:#FDAEB7;font-style:italic"> 1..5</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"between 1 and 5"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">    case</span><span style="color:#FDAEB7;font-style:italic"> 6..10</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"between 6 and 10"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#F97583">    default</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"other"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>4.3 数组与切片</h3><p><strong>固定大小数组</strong>：类型为 <code>T[N]</code>，作为值类型，赋值会复制整个数组。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">int</span><span style="color:#E1E4E8">[</span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8">] a </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8"> };</span></span>
<span class="line"><span style="color:#F97583">int</span><span style="color:#E1E4E8">[</span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8">] b </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> a;</span><span style="color:#6A737D">              // 复制</span></span>
<span class="line"><span style="color:#FFAB70">a</span><span style="color:#E1E4E8">[</span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">] </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 100</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">io::</span><span style="color:#B392F0">printn</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">b</span><span style="color:#E1E4E8">[</span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">]);</span><span style="color:#6A737D">          // 输出 1</span></span>
<span class="line"></span></code></pre><p><strong>切片</strong>：类型为 <code>T[]</code>，是一个视图（指针+长度），可以指向数组、其他切片或动态分配的内存。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">int</span><span style="color:#E1E4E8">[</span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8">] arr </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8"> };</span></span>
<span class="line"><span style="color:#F97583">int[]</span><span style="color:#E1E4E8"> slice </span><span style="color:#F97583">=</span><span style="color:#F97583"> &#x26;</span><span style="color:#E1E4E8">arr;</span><span style="color:#6A737D">        // 转换为切片</span></span>
<span class="line"><span style="color:#E1E4E8">io::</span><span style="color:#B392F0">printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, slice.len);</span><span style="color:#6A737D">  // 4</span></span>
<span class="line"><span style="color:#E1E4E8">slice </span><span style="color:#F97583">=</span><span style="color:#FFAB70"> arr</span><span style="color:#E1E4E8">[</span><span style="color:#FDAEB7;font-style:italic">1..3</span><span style="color:#E1E4E8">];</span><span style="color:#6A737D">         // 子切片，包含索引 1 和 2</span></span>
<span class="line"></span></code></pre><p>可以使用 <code>..</code> 语法创建子切片：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">int[]</span><span style="color:#E1E4E8"> s1 </span><span style="color:#F97583">=</span><span style="color:#FFAB70"> arr</span><span style="color:#E1E4E8">[</span><span style="color:#FDAEB7;font-style:italic">1..</span><span style="color:#E1E4E8">];</span><span style="color:#6A737D">       // 从索引 1 到末尾</span></span>
<span class="line"><span style="color:#F97583">int[]</span><span style="color:#E1E4E8"> s2 </span><span style="color:#F97583">=</span><span style="color:#FFAB70"> arr</span><span style="color:#E1E4E8">[.</span><span style="color:#79B8FF">.2</span><span style="color:#E1E4E8">];</span><span style="color:#6A737D">       // 从开头到索引 2（包含）</span></span>
<span class="line"><span style="color:#F97583">int[]</span><span style="color:#E1E4E8"> s3 </span><span style="color:#F97583">=</span><span style="color:#FFAB70"> arr</span><span style="color:#E1E4E8">[</span><span style="color:#FDAEB7;font-style:italic">1..</span><span style="color:#F97583">^</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">];</span><span style="color:#6A737D">     // 从索引 1 到倒数第二个</span></span>
<span class="line"></span></code></pre><p><strong>数组初始化推断</strong>：使用 <code>[*]</code> 让编译器自动推断长度：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">int</span><span style="color:#E1E4E8">[</span><span style="color:#F97583">*</span><span style="color:#E1E4E8">] c </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8"> };</span><span style="color:#6A737D">    // c 的类型为 int[3]</span></span>
<span class="line"></span></code></pre><h3>4.4 字符串</h3><p>C3 有内置的 <code>String</code> 类型，实际上是 <code>char[]</code> 的别名，可以方便地操作。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">import std::io;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    String s </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> "Hello"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">    s </span><span style="color:#F97583">+=</span><span style="color:#9ECBFF"> " World"</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 拼接（需要分配内存，见内存管理部分）</span></span>
<span class="line"><span style="color:#B392F0">    io::printn</span><span style="color:#E1E4E8">(s);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p><code>String</code> 支持许多方法：<code>.len</code>、<code>.contains</code>、<code>.split</code> 等。</p><p>C 兼容的以 <code>\\0</code> 结尾的字符串类型是 <code>ZString</code>（<code>char*</code> 的别名），用于与 C 代码交互。</p><h2>5. 函数</h2><p>函数定义以 <code>fn</code> 开头，返回类型在参数列表之前。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">int</span><span style="color:#B392F0"> add</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#FFAB70"> a</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#FFAB70"> b</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">+</span><span style="color:#E1E4E8"> b;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 短函数语法（单表达式）</span></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">int</span><span style="color:#B392F0"> mul</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#FFAB70"> a</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#FFAB70"> b</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> b;</span></span>
<span class="line"></span></code></pre><h3>5.1 默认参数与命名参数</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">int</span><span style="color:#B392F0"> power</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#FFAB70"> base</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> exp </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 2</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> result </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">    for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">; i </span><span style="color:#F97583">&#x3C;</span><span style="color:#E1E4E8"> exp; i</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    {</span></span>
<span class="line"><span style="color:#E1E4E8">        result </span><span style="color:#F97583">*=</span><span style="color:#E1E4E8"> base;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> result;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, </span><span style="color:#B392F0">power</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">));</span><span style="color:#6A737D">      // 9 (3^2)</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, </span><span style="color:#B392F0">power</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8">));</span><span style="color:#6A737D">   // 81</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, </span><span style="color:#B392F0">power</span><span style="color:#E1E4E8">(exp: </span><span style="color:#79B8FF">5</span><span style="color:#E1E4E8">, base: </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">));</span><span style="color:#6A737D"> // 32，命名参数可乱序</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>5.2 方法</h3><p>可以为任何类型定义方法，通过点号调用：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">struct</span><span style="color:#E1E4E8"> Point</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> x;</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> y;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#E1E4E8"> Point.</span><span style="color:#B392F0">move</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">&#x26;</span><span style="color:#FFAB70">self</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#FFAB70"> dx</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#FFAB70"> dy</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    self.x </span><span style="color:#F97583">+=</span><span style="color:#E1E4E8"> dx;</span></span>
<span class="line"><span style="color:#E1E4E8">    self.y </span><span style="color:#F97583">+=</span><span style="color:#E1E4E8"> dy;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    Point p </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8"> };</span></span>
<span class="line"><span style="color:#E1E4E8">    p.</span><span style="color:#B392F0">move</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">, </span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, p.x, p.y);</span><span style="color:#6A737D"> // 4, 6</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>第一个参数如果是 <code>&amp;self</code>，表示指针接收者（可修改）；如果是 <code>self</code>，表示值接收者（不可修改，复制）。</p><h3>5.3 函数指针</h3><p>函数指针必须通过 <code>alias</code> 定义：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">alias IntBinOp </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> fn </span><span style="color:#F97583">int</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">int</span><span style="color:#B392F0"> add</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#FFAB70"> a</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#FFAB70"> b</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">+</span><span style="color:#E1E4E8"> b;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    IntBinOp op </span><span style="color:#F97583">=</span><span style="color:#F97583"> &#x26;</span><span style="color:#E1E4E8">add;</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, </span><span style="color:#B392F0">op</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">5</span><span style="color:#E1E4E8">));</span><span style="color:#6A737D"> // 8</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h2>6. 模块与导入</h2><p>C3 使用模块组织代码。每个文件开头需声明所属模块：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">module mylib::math;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">int</span><span style="color:#B392F0"> square</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#FFAB70"> x</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> x </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> x;</span></span>
<span class="line"></span></code></pre><p>另一个文件可以使用 <code>import</code> 导入：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">module main;</span></span>
<span class="line"><span style="color:#E1E4E8">import mylib::math;</span><span style="color:#6A737D">   // 导入模块</span></span>
<span class="line"><span style="color:#E1E4E8">import std::io;</span><span style="color:#6A737D">        // 标准库</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, </span><span style="color:#B392F0">square</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">5</span><span style="color:#E1E4E8">));</span><span style="color:#6A737D"> // 25</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>6.1 导入规则</h3><ul><li>导入模块后，可以直接使用其子模块的<strong>类型</strong>（无需前缀），但<strong>函数、常量、变量</strong>需要带子模块名（如 <code>math::square</code>）。</li><li>如果两个模块有同名类型，可以用全限定名消除歧义。</li></ul><h3>6.2 可见性</h3><p>默认所有顶层声明都是 <code>@public</code>（对外可见）。可以使用 <code>@private</code> 使声明仅在当前模块内可见，<code>@local</code> 仅限当前文件。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">module mylib;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> internal</span><span style="color:#E1E4E8">() @private { ... }</span><span style="color:#6A737D">  // 本模块内可见</span></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> hidden</span><span style="color:#E1E4E8">() @local { ... }</span><span style="color:#6A737D">      // 仅本文件可见</span></span>
<span class="line"></span></code></pre><h2>7. 错误处理</h2><p>C3 使用 <strong>Optional 类型</strong>处理可能失败的操作，语法是类型后加 <code>?</code>。函数返回 <code>T?</code> 表示要么返回一个 <code>T</code> 值，要么返回一个 <code>fault</code>（错误原因）。</p><h3>7.1 定义故障（fault）</h3><p>使用 <code>faultdef</code> 定义可能的错误：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">faultdef DIVISION_BY_ZERO, INVALID_INPUT;</span></span>
<span class="line"></span></code></pre><h3>7.2 返回 Optional</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">double?</span><span style="color:#B392F0"> divide</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> a, </span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> b)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (b </span><span style="color:#F97583">==</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">return</span><span style="color:#E1E4E8"> DIVISION_BY_ZERO</span><span style="color:#F97583">~</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">  // 使用 ~ 将 fault 转为 Optional</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">double</span><span style="color:#E1E4E8">)a </span><span style="color:#F97583">/</span><span style="color:#E1E4E8"> b;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>7.3 处理 Optional</h3><ul><li><strong><code>if (catch err = expr)</code></strong>：如果 Optional 为空（即包含 fault），则执行 then 分支，并将 fault 赋值给 <code>err</code>。</li><li><strong><code>if (try val = expr)</code></strong>：如果 Optional 有值，则执行 then 分支，并将值赋值给 <code>val</code>，之后 <code>val</code> 在分支内是非 Optional 类型。</li><li><strong><code>??</code></strong>：提供默认值。</li><li><strong><code>!</code></strong>：如果 Optional 为空，则立即从当前函数返回该 fault（隐式传播错误）。</li><li><strong><code>!!</code></strong>：如果 Optional 为空，则触发 panic（程序终止）。</li></ul><p>示例：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void?</span><span style="color:#B392F0"> test</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    double?</span><span style="color:#E1E4E8"> result </span><span style="color:#F97583">=</span><span style="color:#B392F0"> divide</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (catch err </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> result)</span></span>
<span class="line"><span style="color:#E1E4E8">    {</span></span>
<span class="line"><span style="color:#B392F0">        io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Error: </span><span style="color:#79B8FF">%s</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, err);</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> err</span><span style="color:#F97583">~</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">   // 重新抛出错误</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 此时 result 已自动展开为普通 double</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Result: </span><span style="color:#79B8FF">%f</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, result);</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#F97583"> void</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">       // 正常返回</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    test</span><span style="color:#E1E4E8">()</span><span style="color:#F97583">!!</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 如果 test 返回 fault，则 panic</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>使用 <code>??</code> 提供默认值：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">double</span><span style="color:#E1E4E8"> x </span><span style="color:#F97583">=</span><span style="color:#B392F0"> divide</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">??</span><span style="color:#79B8FF"> 0.0</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">   // 如果错误，x = 0.0</span></span>
<span class="line"></span></code></pre><h2>8. 内存管理</h2><p>C3 采用手动内存管理，但提供了临时分配器（<code>tmem</code>）简化短期内存的清理。</p><h3>8.1 堆分配</h3><p>标准库提供 <code>mem</code> 模块中的 <code>new</code>、<code>alloc</code>、<code>new_array</code> 等函数进行堆分配。使用 <code>mem</code> 分配的内存需要显式释放。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">import std::core::mem;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> test</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int*</span><span style="color:#E1E4E8"> p </span><span style="color:#F97583">=</span><span style="color:#B392F0"> mem::new</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">);</span><span style="color:#6A737D">       // 分配并零初始化一个 int</span></span>
<span class="line"><span style="color:#F97583">    *</span><span style="color:#E1E4E8">p </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 42</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">    // 使用 ...</span></span>
<span class="line"><span style="color:#B392F0">    mem::free</span><span style="color:#E1E4E8">(p);</span><span style="color:#6A737D">                  // 释放</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    int[]</span><span style="color:#E1E4E8"> arr </span><span style="color:#F97583">=</span><span style="color:#B392F0"> mem::new_array</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">);</span><span style="color:#6A737D"> // 分配 int[10]</span></span>
<span class="line"><span style="color:#6A737D">    // 使用 ...</span></span>
<span class="line"><span style="color:#B392F0">    mem::free</span><span style="color:#E1E4E8">(arr);</span><span style="color:#6A737D">                 // 释放切片（即释放底层数组）</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>8.2 临时分配（tmem）</h3><p>临时分配器（<code>tmem</code>）自动释放内存，当退出 <code>@pool</code> 作用域时，所有通过 <code>tmem</code> 分配的内存都会被回收。适合函数内部的临时数据。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">import std::core::mem;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> process</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#B392F0">pool</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">    {</span></span>
<span class="line"><span style="color:#F97583">        int*</span><span style="color:#E1E4E8"> p </span><span style="color:#F97583">=</span><span style="color:#B392F0"> mem::tnew</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">);</span><span style="color:#6A737D">    // 使用临时分配器</span></span>
<span class="line"><span style="color:#F97583">        *</span><span style="color:#E1E4E8">p </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 123</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#6A737D">        // 使用 p ...</span></span>
<span class="line"><span style="color:#E1E4E8">    };</span><span style="color:#6A737D"> // p 在此释放</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>许多标准库函数提供 <code>t</code> 前缀的版本（如 <code>string::tformat</code>）来使用临时分配器。</p><h3>8.3 容器与默认分配器</h3><p>容器（如 <code>List</code>、<code>HashMap</code>）如果不显式初始化，默认使用临时分配器。如果希望它们使用堆分配，需要显式初始化：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">import std::collections::list;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> test</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    List{</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">} list;</span><span style="color:#6A737D">                // 未初始化，将隐式使用临时分配器</span></span>
<span class="line"><span style="color:#E1E4E8">    list.</span><span style="color:#B392F0">push</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">);</span><span style="color:#6A737D">                   // 在临时作用域内分配</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#B392F0">pool</span><span style="color:#E1E4E8">()</span><span style="color:#6A737D">                        // 确保临时内存被释放</span></span>
<span class="line"><span style="color:#E1E4E8">    {</span></span>
<span class="line"><span style="color:#6A737D">        // ...</span></span>
<span class="line"><span style="color:#E1E4E8">    };</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>要在全局或长期使用容器，应使用堆分配器初始化：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">List{</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">} list </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> list::ONHEAP{</span><span style="color:#F97583">int</span><span style="color:#E1E4E8">};</span><span style="color:#6A737D"> // 使用堆分配器</span></span>
<span class="line"><span style="color:#E1E4E8">list.</span><span style="color:#B392F0">init</span><span style="color:#E1E4E8">(mem);</span><span style="color:#6A737D">                     // 或者显式初始化</span></span>
<span class="line"></span></code></pre><h2>9. 自定义类型</h2><h3>9.1 结构体</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">struct</span><span style="color:#E1E4E8"> Person</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    String name;</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> age;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    Person p </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#9ECBFF">"Alice"</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">30</span><span style="color:#E1E4E8"> };</span><span style="color:#6A737D">          // 初始化</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%s</span><span style="color:#9ECBFF"> is </span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, p.name, p.age);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    Person</span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> ptr </span><span style="color:#F97583">=</span><span style="color:#F97583"> &#x26;</span><span style="color:#E1E4E8">p;</span></span>
<span class="line"><span style="color:#E1E4E8">    ptr.age </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 31</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">                         // 箭头操作符 -> 被替换为点号（自动解引用）</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>支持匿名结构体嵌套和子类型（<code>inline</code>）。</p><h3>9.2 枚举</h3><p>C3 的枚举是强类型的，其值从 0 开始连续递增。枚举可以关联静态数据。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">enum</span><span style="color:#E1E4E8"> Color : </span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> (String name)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    RED { </span><span style="color:#9ECBFF">"red"</span><span style="color:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#E1E4E8">    GREEN { </span><span style="color:#9ECBFF">"green"</span><span style="color:#E1E4E8"> },</span></span>
<span class="line"><span style="color:#E1E4E8">    BLUE { </span><span style="color:#9ECBFF">"blue"</span><span style="color:#E1E4E8"> }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    Color c </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Color.GREEN;</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%s</span><span style="color:#9ECBFF">: </span><span style="color:#79B8FF">%s</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, c.name, c.ordinal);</span><span style="color:#6A737D"> // green: 1</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>如果希望枚举值任意指定（像 C 中的常量组），可以使用 <code>constdef</code>。</p><h3>9.3 联合体</h3><p>与 C 类似：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">union</span><span style="color:#E1E4E8"> Value</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> i;</span></span>
<span class="line"><span style="color:#F97583">    double</span><span style="color:#E1E4E8"> d;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    Value v;</span></span>
<span class="line"><span style="color:#E1E4E8">    v.i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 42</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">    double</span><span style="color:#E1E4E8"> d </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> v.d;</span><span style="color:#6A737D">   // 未定义行为（因为当前存储的是 int）</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>9.4 Bitstruct</h3><p>用于精确控制位布局，替代 C 的位域：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">bitstruct Flags : </span><span style="color:#F97583">char</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    bool</span><span style="color:#E1E4E8"> flag1 : </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">    bool</span><span style="color:#E1E4E8"> flag2 : </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#F97583">    bool</span><span style="color:#E1E4E8"> flag3 : </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    Flags f </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { .flag1, .flag3 };</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%x</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, (</span><span style="color:#F97583">char</span><span style="color:#E1E4E8">)f);</span><span style="color:#6A737D"> // 输出 5 (二进制 101)</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>9.5 Typedef 与 Alias</h3><ul><li><code>alias</code>：创建类型别名，与原有类型等价。</li><li><code>typedef</code>：创建新类型，与底层类型不兼容（需显式转换），适合用于增强类型安全。</li></ul><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">alias IntPtr </span><span style="color:#F97583">=</span><span style="color:#F97583"> int*</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 别名</span></span>
<span class="line"><span style="color:#F97583">typedef</span><span style="color:#E1E4E8"> UserId </span><span style="color:#F97583">=</span><span style="color:#F97583"> int</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">         // 新类型</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> test</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    IntPtr p </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> null;</span><span style="color:#6A737D">          // 等价于 int*</span></span>
<span class="line"><span style="color:#E1E4E8">    UserId id </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 123</span><span style="color:#E1E4E8">;</span><span style="color:#6A737D">          // 隐式转换允许（字面量）</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> x </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> id;</span><span style="color:#6A737D">               // 错误：不能隐式转换</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h2>10. 编译时特性</h2><p>C3 提供了丰富的编译时编程能力，允许在编译期执行代码、反射类型信息。</p><h3>10.1 编译时条件与循环</h3><p>使用 <code>$if</code>、<code>$for</code>、<code>$foreach</code> 在编译时生成代码。</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">int</span><span style="color:#B392F0"> square</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#FFAB70"> x</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> x </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> x;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> test</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    $</span><span style="color:#F97583">if</span><span style="color:#E1E4E8"> $</span><span style="color:#B392F0">defined</span><span style="color:#E1E4E8">(square):</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"square is defined"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">    $</span><span style="color:#F97583">else</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"square is not defined"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">    $endif</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>编译时循环：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">macro </span><span style="color:#F97583">void</span><span style="color:#B392F0"> print_numbers</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> $n)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    $</span><span style="color:#F97583">for</span><span style="color:#E1E4E8"> var $i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">; $i </span><span style="color:#F97583">&#x3C;</span><span style="color:#E1E4E8"> $n; $i</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#B392F0">        io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"</span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, $i);</span></span>
<span class="line"><span style="color:#E1E4E8">    $endfor</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>10.2 编译时反射</h3><p>可以通过类型属性获取类型信息：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">import std::io;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">struct</span><span style="color:#E1E4E8"> Point</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> x;</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> y;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"size: </span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, Point.sizeof);</span><span style="color:#6A737D">          // 8 (假设 int 4 字节)</span></span>
<span class="line"><span style="color:#B392F0">    io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"align: </span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, Point.alignof);</span><span style="color:#6A737D">        // 4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 遍历成员</span></span>
<span class="line"><span style="color:#E1E4E8">    $foreach m : Point.membersof:</span></span>
<span class="line"><span style="color:#B392F0">        io::printfn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"field </span><span style="color:#79B8FF">%s</span><span style="color:#9ECBFF"> at offset </span><span style="color:#79B8FF">%d</span><span style="color:#9ECBFF">"</span><span style="color:#E1E4E8">, m.nameof, m.offsetof);</span></span>
<span class="line"><span style="color:#E1E4E8">    $endforeach</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>10.3 宏</h3><p>C3 的宏是一种强大的代码生成工具。简单宏：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">macro </span><span style="color:#B392F0">square</span><span style="color:#E1E4E8">(x)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> x </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> x;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    int</span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">=</span><span style="color:#B392F0"> square</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">5</span><span style="color:#E1E4E8">);</span><span style="color:#6A737D">   // 展开为 5 * 5</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>带延迟求值的宏（使用 <code>#</code> 参数）和代码块宏（使用 <code>@body</code>）可以实现类似控制结构的效果：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">macro </span><span style="color:#F97583">void</span><span style="color:#E1E4E8"> @</span><span style="color:#B392F0">repeat</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> times; @body)</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#F97583">    for</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">int</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">; i </span><span style="color:#F97583">&#x3C;</span><span style="color:#E1E4E8"> times; i</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    {</span></span>
<span class="line"><span style="color:#E1E4E8">        @</span><span style="color:#B392F0">body</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">fn </span><span style="color:#F97583">void</span><span style="color:#B392F0"> main</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#B392F0">repeat</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    {</span></span>
<span class="line"><span style="color:#B392F0">        io::printn</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Hello"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">    };</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h2>11. 构建系统</h2><p>C3 自带构建系统，通过 <code>project.json</code> 配置项目。初始化项目：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">c3c</span><span style="color:#9ECBFF"> init</span><span style="color:#9ECBFF"> my_project</span></span>
<span class="line"><span style="color:#79B8FF">cd</span><span style="color:#9ECBFF"> my_project</span></span>
<span class="line"></span></code></pre><p>典型的 <code>project.json</code>：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">{</span></span>
<span class="line"><span style="color:#79B8FF">  "langrev"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"1"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">  "authors"</span><span style="color:#E1E4E8">: [</span><span style="color:#9ECBFF">"Your Name"</span><span style="color:#E1E4E8">],</span></span>
<span class="line"><span style="color:#79B8FF">  "version"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"0.1.0"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#79B8FF">  "sources"</span><span style="color:#E1E4E8">: [</span><span style="color:#9ECBFF">"src/**"</span><span style="color:#E1E4E8">],</span></span>
<span class="line"><span style="color:#79B8FF">  "targets"</span><span style="color:#E1E4E8">: {</span></span>
<span class="line"><span style="color:#79B8FF">    "my_app"</span><span style="color:#E1E4E8">: {</span></span>
<span class="line"><span style="color:#79B8FF">      "type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"executable"</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">  }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><p>编译：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">c3c</span><span style="color:#9ECBFF"> build</span></span>
<span class="line"><span style="color:#B392F0">c3c</span><span style="color:#9ECBFF"> run</span><span style="color:#9ECBFF"> my_app</span></span>
<span class="line"></span></code></pre><p>运行测试：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">c3c</span><span style="color:#9ECBFF"> test</span></span>
<span class="line"></span></code></pre><h2>12. 下一步</h2><ul><li><strong>标准库文档</strong>：查看 <a href="https://c3-lang.org/stdlib">c3-lang.org/stdlib</a> 获取更多模块信息。</li><li><strong>社区</strong>：加入 <a href="https://discord.gg/qN76R87">C3 Discord</a> 与其他开发者交流。</li><li><strong>示例</strong>：阅读官方仓库中的示例代码。</li><li><strong>进阶主题</strong>：学习泛型、契约、接口、内联汇编等高级特性。</li></ul><p>C3 是一门仍在积极发展的语言，但已经足够稳定用于实际项目。祝你学习愉快！</p><hr /><ul><li>2026-03-08 by DeepSeek</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
