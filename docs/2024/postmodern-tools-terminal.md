# 后现代工具系列：WezTerm

WezTerm 是一个 Rust 实现的支持 GPU 硬件加速的跨平台终端。WezTerm 支持 Windows、macOS、Linux、FreeBSD。

关于 WezTerm 更多的内容可以查看其[项目主页](https://wezfurlong.org/wezterm/index.html)。

## 基本配置

WezTerm 使 lua 为配置语言，本身也提供了相当多的功能。WezTerm 属于那种各方面都可以定制的工具。WezTerm 默认配置下，只使用当前系统的 shell。在 Windows 上是 cmd.exe。

下面是我的基本配置：

```sh
$ cat ~/.wezterm.lua
```

```lua
-- ~/.wezterm.lua
local wezterm = require 'wezterm'
local config = wezterm.config_builder()

-- intel i7 12650h 的 opengl 驱动似乎有 bug，总有闪烁点出现。改用 WebGpu 后端后正常
config.front_end = 'WebGpu'
config.window_decorations = 'INTEGRATED_BUTTONS | RESIZE'

config.initial_cols = 120
config.initial_rows = 24
config.color_scheme = 'Dracula'

config.default_prog = {'C:\\Program Files\\Git\\bin\\bash.exe', '-l'}

config.launch_menu = {
  {
    label = 'Bash',
    args = { 'C:\\Program Files\\Git\\bin\\bash.exe', '-l' },
  },
  {
    label = 'WSL',
    args = { 'wsl' },
  },
  {
    label = 'PowerShell',
    args = { 'powershell.exe', '-NoLogo' },
  },
}

config.window_close_confirmation = 'NeverPrompt'

return config
```

## 其他

1. 为什么没有用 Windows Terminal 或 Alacritty?

Windows Terminal 不是跨平台的。我想一款跨平台的终端。主要是后面我打算迁移到 Linux 作为日常工作系统。不用 Alacritty 是因为其一些奇怪的 bug，另外就是 WezTerm 的字体渲染更好看一些。
