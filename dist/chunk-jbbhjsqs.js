import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>后现代工具系列：WezTerm</h1><p>WezTerm 是一个 Rust 实现的支持 GPU 硬件加速的跨平台终端。WezTerm 支持 Windows、macOS、Linux、FreeBSD。</p><p>关于 WezTerm 更多的内容可以查看其<a href="https://wezfurlong.org/wezterm/index.html">项目主页</a>。</p><h2>基本配置</h2><p>WezTerm 使 lua 为配置语言，本身也提供了相当多的功能。WezTerm 属于那种各方面都可以定制的工具。WezTerm 默认配置下，只使用当前系统的 shell。在 Windows 上是 cmd.exe。</p><p>下面是我的基本配置：</p><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#B392F0">$</span><span style="color:#9ECBFF"> cat</span><span style="color:#9ECBFF"> ~/.wezterm.lua</span></span>
<span class="line"></span></code></pre><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">-- ~/.wezterm.lua</span></span>
<span class="line"><span style="color:#F97583">local</span><span style="color:#E1E4E8"> wezterm </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> require</span><span style="color:#9ECBFF"> 'wezterm'</span></span>
<span class="line"><span style="color:#F97583">local</span><span style="color:#E1E4E8"> config </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> wezterm.</span><span style="color:#79B8FF">config_builder</span><span style="color:#E1E4E8">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">-- intel i7 12650h 的 opengl 驱动似乎有 bug，总有闪烁点出现。改用 WebGpu 后端后正常</span></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">front_end</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> 'WebGpu'</span></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">window_decorations</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> 'INTEGRATED_BUTTONS | RESIZE'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">initial_cols</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> 120</span></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">initial_rows</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> 24</span></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">color_scheme</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> 'Dracula'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">default_prog</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span><span style="color:#9ECBFF">'C:</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">Program Files</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">Git</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">bin</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">bash.exe'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'-l'</span><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">launch_menu</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#E1E4E8">    label </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'Bash'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    args </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#9ECBFF">'C:</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">Program Files</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">Git</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">bin</span><span style="color:#79B8FF">\\\\</span><span style="color:#9ECBFF">bash.exe'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'-l' </span><span style="color:#E1E4E8">},</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#E1E4E8">    label </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'WSL'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    args </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#9ECBFF">'wsl' </span><span style="color:#E1E4E8">},</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">  {</span></span>
<span class="line"><span style="color:#E1E4E8">    label </span><span style="color:#F97583">=</span><span style="color:#9ECBFF"> 'PowerShell'</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">    args </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { </span><span style="color:#9ECBFF">'powershell.exe'</span><span style="color:#E1E4E8">, </span><span style="color:#9ECBFF">'-NoLogo' </span><span style="color:#E1E4E8">},</span></span>
<span class="line"><span style="color:#E1E4E8">  },</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">config.</span><span style="color:#B392F0">window_close_confirmation</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> 'NeverPrompt'</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">return</span><span style="color:#E1E4E8"> config</span></span>
<span class="line"></span></code></pre><h2>其他</h2><ol><li>为什么没有用 Windows Terminal 或 Alacritty?</li></ol><p>Windows Terminal 不是跨平台的。我想一款跨平台的终端。主要是后面我打算迁移到 Linux 作为日常工作系统。不用 Alacritty 是因为其一些奇怪的 bug，另外就是 WezTerm 的字体渲染更好看一些。</p>`}},void 0,!1,void 0,this)}export{n as default};
