# C3 语言快速入门指南

> C 的演进版：更安全、更好用，但依然是系统语言。

---

## 1. C3 是什么

C3 是一种**系统编程语言**，在语法和语义上都基于 C，目标是：

- 让 C 程序员几乎“无痛迁移”
- 保留 C 的性能和低级控制能力
- 增加现代语言常见的“质量提升”特性：
  - 更安全的类型系统与错误处理
  - 模块系统（替代 `#include`）
  - 切片（slices）、Optionals、defer 等
  - 更易用的宏与泛型模块

你可以把它理解为：

> “如果今天重新设计一门尽量兼容 C 的语言，它大概会长成 C3 这个样子。”

---

## 2. 安装与第一个程序

### 2.1 安装 C3 编译器

在 C3 官网可以下载适用于 macOS / Linux / Windows 的预编译二进制包。[1]

下载安装后，确保 `c3c` 在 PATH 中：

```bash
c3c --version
```

能看到版本号就说明安装成功。

### 2.2 Hello World

创建文件 `hello_world.c3`：

```c
import std::io;

fn void main() {
    io::printn("Hello, World!");
}
```

说明一下：

- `import std::io;`：导入标准库中的 `io` 模块，里面有打印函数
- `fn void main()`：C3 程序的入口，`fn` 声明函数，返回类型在 `fn` 后面
- `io::printn(...)`：打印一行字符串（自动换行）

编译并运行：

```bash
c3c compile hello_world.c3

./hello_world      # Unix 系
hello_world.exe    # Windows
```

文档中也会演示带命令行参数版本：

```c
fn void main(String[] args) {
    // args 是字符串切片，包含命令行参数
}
```

---

## 3. 基础语法：从 C 进化而来

如果你写过 C，这一节主要是对差异和增强的梳理。

### 3.1 模块与 import（不用再写 .h）

C3 不再用 `#include`，而是用**模块**和 `import`：

```c
// math_utils.c3
module math_utils;

fn int add(int a, int b) {
    return a + b;
}
```

```c
// main.c3
import std::io;
import math_utils;

fn void main() {
    int r = math_utils::add(2, 3);
    io::printfn("2 + 3 = {}", r);
}
```

要点：

- 源文件可以用 `module xxx;` 指定模块名，不写时默认用文件名
- `import` 引入模块，**是递归的**——不用担心 include 顺序问题
- 用户自定义类型（struct / enum / union 的名字）使用时**不用再写 `struct` 前缀**

---

### 3.2 函数：`fn` 在前，返回类型紧跟

C：

```c
int foo(Foo *b, int x, void *z) { ... }
```

C3：

```c
fn int foo(Foo* b, int x, void* z) {
    return x + (int)(uptr)z;
}
```

规则：

- 用 `fn` 开头
- 返回类型放在 `fn` 后：`fn void ...` / `fn int ...`
- 参数写法基本与 C 一致

还有两个 C3 独有的功能：

- 默认参数
- 命名参数

```c
fn void log(String msg, int level=1, bool verbose=false) {
    // ...
}

log("Init");                            // level=1, verbose=false
log("IO error", level=2);               // 指定部分参数
log(msg="Done", verbose=true, level=3); // 全部用命名
```

---

### 3.3 变量与初始化

C3 的一个重要理念：**默认更安全**。

- 局部变量默认**零初始化**
- 不允许 `int a, b = 4;` 这种混合写法

```c
int a;            // 自动初始化为 0
int b @noinit;    // 显式声明为“不初始化”（更像 C）

int c = 10;       // OK
int d; int e = 4; // OK
int f, g = 7;     // ❌ 不允许
```

---

### 3.4 基本类型和别名

C3 统一了一部分整数类型命名，例如：

- `short` 16 位
- `int` 32 位
- `long` / `ulong` 64 位
- 平台相关类型：`usz`（类似 `size_t`）、`isz`（类似 `ssize_t`）、`uptr` 等[2]

你可以用 `alias` 定义别名，替代 C 的 `typedef` 和一些 `#define` 用法：

```c
alias FooPtr = Foo*;

alias println = io::printn;

char* my_string = "Party on";
alias my_excellent_string = my_string;

println(my_excellent_string);
```

注意：C3 语义中的 `typedef`（在 primer 中）会创建“真正的新类型”，不能随意互转，这使得类型更安全。

---

## 4. 数组、切片和 foreach

### 4.1 固定长度数组：维度写在类型后

C：

```c
int x[2] = {1, 2};
int *y = x;
```

C3：

```c
int[2] x = {1, 2};
int* y = &x;      // 数组不会自动退化为指针
```

推断长度：

```c
int[*] x = {1, 2, 3};  // x 是 int[3]
```

数组之间可以直接赋值（是拷贝）：

```c
int[3] a = {1, 2, 3};
int[3] b = a;   // 逐元素拷贝
```

---

### 4.2 切片（slice）：带长度的视图

C3 有一等公民的切片类型，用于安全、灵活地处理数组片段。

```c
int[10] data = {0,1,2,3,4,5,6,7,8,9};

int[] all = data[0..];     // 整个数组的切片
int[] mid = data[2..7];    // [2, 7]，范围是“包含 2，包含 7”还是“半开区间”
                            // 以文档示例为准，一般习惯为“包含起点，包含终点”或“len 计算清晰”
```

切片常作为函数参数：

```c
fn void sort_ints(int[] s) {
    // 排序
}

int[100] a;
int[30] b;
int[] c = data[1..10];

sort_ints(&a);      // int[100]* -> int[]
sort_ints(&b);      // int[30]*  -> int[]
sort_ints(c);       // 已是切片
```

---

### 4.3 foreach：不用再写指针算术的遍历

```c
int[5] a = {1,2,3,4,5};

for (int x : a) {
    io::printfn("x = {}", x);
}

// 需要原地修改时可以用引用
for (ref int x : a) {
    x = x * 2;
}
```

---

## 5. 控制流：if / for / switch 的进化

### 5.1 if / for

基本与 C 相同，这里不赘述。

### 5.2 switch：默认 break，显式 nextcase

C3 的 `switch` 修正了 C 一个常见 bug 源头：**每个 case 默认，会自动 break**。

需要穿透时要用 `nextcase`：

```c
switch (x) {
    case 1:
        io::printn("One");
        nextcase;                // 显式“继续到下一个 case”

    case 2,3:
        io::printn("Two or Three");

    default:
        io::printn("Other");
}
```

**空 case** 会隐式地穿透下一个 case：

```c
switch (x) {
    case 1:          // 空体，隐式 nextcase
    case 2:
        io::printn("One or Two");
}
```

`goto` 在 C3 中被移除，典型用途可以用：

- `defer` 做资源释放
- 带标签的 `break` / `continue`
- 更清晰的结构化控制流

来替代。[2]

---

## 6. 错误处理：Optionals 与更安全的返回

C3 提供了 Optionals（可选类型）来作为错误或“无值”情况的表示，语法上类似在返回类型前加 `?`。

下面是概念性的例子（风格参照官方教程与 FAQ 中对 Optionals 的描述组合而成）：

```c
// 返回值可能不存在
fn ?int divide(int a, int b) {
    if (b == 0) {
        return ?;         // 表示“没有值”（错误）
    }
    return a / b;
}

fn void main() {
    if let (int result = divide(10, 2)) {
        io::printfn("10 / 2 = {}", result);
    } else {
        io::printn("Division by zero!");
    }
}
```

要点：

- `?T` 表示“要么是 T，要么是无”
- `return ?;` 表示返回“无”
- `if let` 用于拆解 Optional 的“成功”分支

比起传统的“返回负值/NULL + errno”方式，Optionals 提供了更安全、可组合的错误处理能力，同时保证为零开销抽象。

官方教程中还有更系统的 **Error Handling 1–5** 章节，可逐步深入。[3]

---

## 7. 资源管理：defer

`defer` 是 C3 中最常用、也最有价值的特性之一，用于在当前函数结束时自动执行清理逻辑，无论函数是从哪里返回。

示意写法：

```c
fn void work_with_file() {
    File f = open("log.txt");
    defer f.close();        // 函数结束前必定执行

    if (!f.is_open()) {
        io::printn("failed to open file");
        return;             // 仍然会调用 f.close()
    }

    f.write("Hello");
    // 正常结束时，也会执行 f.close()
}
```

常见用途：

- 释放资源（文件、锁、内存池等）
- 回滚部分状态
- 打印日志、度量性能

它是将 C 中各种 `goto cleanup;` 模式抽象成语言级功能的一个代表。

---

## 8. 与 C 的互操作：直接用 C 库

C3 的设计目标之一就是 **与 C 完全 ABI 兼容**。[1][2]

### 8.1 调用 C 函数

```c
extern fn int puts(char*);

fn void main() {
    puts("Hello from C3!");
}
```

如果需要给 C 函数起一个不同的 C3 名字，可以用 `@cname`：

```c
extern fn int c3_puts(char* msg) @cname("puts");

fn void main() {
    c3_puts("Hello again");
}
```

注意：

- 默认只会自动链接 C 标准库，其他库要像在 C 中一样手动链接
- 结构体布局与 C 保持兼容，可与 C 的头文件协同使用（通过合适的绑定生成）

### 8.2 让 C 调用 C3

因为 ABI 兼容，你也可以把 C3 代码编译成库，给 C 直接调用。做法在 C 侧和普通的 `.o`/`.a` 链接没有本质差异，关键是函数使用 C ABI（C3 默认就是）。

---

## 9. 模块系统与命名规范

### 9.1 模块再次梳理

一个稍微复杂一点的例子：

```c
// otherlib/foo.c3
module otherlib::foo;

fn void test() { /* ... */ }

struct FooStruct {
    int x;
}
```

```c
// mylib/bar.c3
module mylib::bar;
import otherlib;

fn void myCheck() {
    foo::test();                  // 由于 import otherlib，会导入 otherlib::foo
    mylib::foo::test();           // 完整路径也可以

    FooStruct x;                  // 用户定义类型不需要加模块前缀
    otherlib::foo::FooStruct y;   // 当然也可以写全限定名
}
```

### 9.2 命名约定

C3 建议的命名风格（在 primer 中有说明）：[2]

- 开头大写且后面有小写：**自定义类型**（struct/enum 等）
  - `Foo`, `MyStruct`
- 开头小写：变量、函数、字段
  - `foo`, `count`, `fooBar`
- 全大写：常量或枚举值
  - `MAX_SIZE`, `STATE_A`

这不是强制语法规则，但配合工具可以做更多静态检查。

---

## 10. 更多语言特性一览（只做“预告”）

这些是官方介绍和 primer 中多次提到、但本指南不细讲的内容。[1][2][3]

- **方法（methods）**  
  给类型定义方法，注意不是 OOP，而是对 C 风格结构体的增强
- **Optionals（上面提到的错误处理）**
- **语义宏（semantic macros）**  
  不再是纯文本替换，而是理解类型信息的宏
- **泛型模块（generic modules）**
- **Contracts（契约）**  
  写在特殊注释里的前置条件、后置条件，编译器可检查
- **编译期求值 & 反射**
- **运算符重载**
- **静态初始化 / 终结函数**
- **动态接口（dynamic interfaces）**

这些特性让 C3 在保持“接近 C 的简单心智模型”的同时，拥有与现代语言相当的表达力。

---

## 11. 实战：一个稍完整的小例子

综合前面提到的点，写一个读参数、简单计算、错误处理的小程序（伪示例，意在风格）：

```c
module app;
import std::io;
import std::conv;    // 假设有字符串转数字的模块

fn ?int parse_int(String s) {
    // 假设 conv::parse_int 返回 ?int
    return conv::parse_int(s);
}

fn ?int safe_div(int a, int b) {
    if (b == 0) {
        return ?;
    }
    return a / b;
}

fn void main(String[] args) {
    if (args.len < 3) {
        io::printn("Usage: app <a> <b>");
        return;
    }

    // parse 参数
    if let (int a = parse_int(args[1])) {
        if let (int b = parse_int(args[2])) {
            if let (int r = safe_div(a, b)) {
                io::printfn("{} / {} = {}", a, b, r);
            } else {
                io::printn("Division by zero");
            }
        } else {
            io::printn("Invalid integer: second argument");
        }
    } else {
        io::printn("Invalid integer: first argument");
    }
}
```

可以看到：

- 完全系统级：没有 GC，没有隐藏的分配
- 错误处理通过 Optionals 组合完成
- 模块和标准库让代码比纯 C 更简洁

---

## 12. 建议的学习路线

1. **跑通 Hello World**  
   熟悉 `c3c compile` / `c3c run`，掌握编译和运行流程。
2. **看一遍 Learn C3 “Basics” 章节**[3]
   - Modules
   - Imports
   - Functions
   - For、Foreach、If、Switch、Nextcase
   - Pointers、Structs & Unions、Arrays、Slices
3. **参考 “C3 For C Programmers” Primer**[2]  
   从“C 的差异点”角度快速熟悉 C3 语法与语义。
4. **写一个小工具**  
   例如：小型文本处理、简单 HTTP 客户端、命令行计算器。
5. **逐个尝试进阶特性**
   - Defer 管理资源
   - Optionals 做错误处理
   - alias / typedef 创建更安全的“领域类型”
   - 尝试与 C 库互操作

做到这一步，你已经可以把不少 C 项目平滑迁移到 C3，再慢慢引入新特性来提高安全性和可维护性。

---

## 13. 总结

- C3 是对 C 的**增量改进**，而不是彻底替代
- 核心理念是：**保持低级控制力，同时默认更安全、更易用**
- 对 C 程序员来说：
  - 入门难度很低：语法极其相似
  - 但可以立即获得：
    - 模块系统
    - 更好的数组和切片
    - 结构化的错误处理
    - 语言级的资源管理（defer）
    - 更现代的宏和泛型能力

如果你喜欢 C 的“贴近硬件”风格，又希望能少踩一点老的坑（UB、内存泄漏、goto 混乱等），那么 C3 值得你认真试用。

---

### References

[1] GETTING STARTED / WHAT IS C3? <https://c3-lang.org/getting-started/>  
[2] C3 FOR C PROGRAMMERS (PRIMER). <https://c3-lang.org/language-overview/primer/>  
[3] C3 TUTORIAL (LEARN-C3). <https://learn-c3.org/>

---

- 2026-01-31, by [MiroThinker](https://dr.miromind.ai/share/a94e6d1d-e3fb-459d-a448-1f075231f711)
