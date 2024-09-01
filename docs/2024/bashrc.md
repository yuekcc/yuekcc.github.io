# Bashrc

bash 有一系列的配置文件，包括 `.bashrc`, `.bash_profile`, `.bash_login`, `.profile` 等。

## .bashrc

位置：通常位于用户的主目录下（~/.bashrc）。
用途：这个文件主要用于交互式非登录 shell 会话。当你打开一个新的终端窗口或标签页时，Bash 会读取这个文件。
内容：通常包含别名、函数、环境变量设置、shell 选项等，用于定制你的交互式 shell 体验。

## .bash_profile

位置：通常位于用户的主目录下（~/.bash_profile）。
用途：这个文件用于登录 shell 会话，即当你登录到系统时（比如通过 SSH 或图形界面登录），Bash 会读取这个文件。它通常用于设置环境变量、执行某些启动时的命令。
内容：可能包含与 .bashrc 类似的内容，但更侧重于登录时的初始化设置。

## .profile

位置：通常位于用户的主目录下（~/.profile）。
用途：这个文件用于登录 shell 会话，即当你登录到系统时（比如通过 SSH 或图形界面登录），Bash 会读取这个文件。它通常用于设置环境变量、执行某些启动时的命令。
内容：可能包含与 .bashrc 类似的内容，但更侧重于登录时的初始化设置。

## 加载顺序

Bash 会按以下顺序加载配置文件：

1. 系统配置文件（/etc/bashrc）
2. 用户主目录下的 .bash_profile 文件（如果存在的话）
3. 用户主目录下的 .bash_login 文件（如果存在的话）
4. 用户主目录下的 .profile 文件（如果存在的话）
5. 如果以上文件都不存在，Bash 会尝试读取 .bashrc

当你打开一个新的交互式非登录 shell 时（比如打开一个新的终端窗口），Bash 会读取 .bashrc 文件。

## 使用建议

- 通常，你应该将那些只需要在登录时执行一次的命令放在 .bash_profile 或 .profile 中
- 将那些每次打开新 shell 时都需要执行的命令放在 .bashrc 中
- 为了避免重复，你可以在 .bash_profile 中添加一行代码来包含 .bashrc，例如：

```bash
if [ -f ~/.bashrc ]; then
    source ~/.bashrc
fi
```

这样，登录时 .bash_profile 会包含 .bashrc 的内容，而打开新终端时 .bashrc 直接被读取。

---

- 024 年 9 月 1 日
