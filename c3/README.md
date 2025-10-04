# C3 笔记

## 源码结构

文件后缀使用 `.c3`，还有配合包管理使用的 `.c3l`、`.c3i`。

### Hello World

一个典型的 c3 代码如下：

```c3
// hello.c3
import std::io;

fn void main()
{
    io::printn("Hello, World!");
}
```

代码文件应该统一使用 UTF-8 编码。使用下面的命令进行编译：

```sh
c3c compile hello.c3
```

### 程序入口

c3 程序的入口总是 `main` 函数。main 函数可以使用下面两种形式：

```c3
fn void main() {}
```

```c3
fn void main(String[] args)
```

> c3 似乎也支持使用 C 语言形式的 main 函数，可以试一下。

### 模块

c3 通过 `module mymodule;` 语句声明一个模块。c3 的代码实际是由模块组成，一个代码文件可以包含多个模块，一个模块也可以分散在多个文件中。模块支持嵌套，模块的范围由声明语句开始直到遇到下一个模块声明语句。

通过 `import mymodule` 将模块的函数、常量等对象导入到当前的模块中。比如上面的 `import std::io;` 语句表示入符号到当前的模块中，使用时需要加上模块的名称作为前缀。

模块中的符号默认是所有模块可见（公开），也可以按需要设置其可见性。

详见：[https://c3-lang.org/language-fundamentals/modules/](https://c3-lang.org/language-fundamentals/modules/)

> 有点像 java 的 package。

## 基本类型

c3 提供了和 c 语言几乎一致类型系统。但是有一点不同，c3 中声明的变量会进行零值初始化。

当然也可以显式初始化 undefined：

```c3
int x;               // x = 0
int y @noinit;       // y is explicitly undefined and must be assigned before use.

AStruct foo;         // foo is implicitly zeroed
AStruct bar = {};    // bar is explicitly zeroed
AStruct baz @noinit; // baz is explicitly undefined
```

### 整数家族

有符号整数类型：`ichar`、`short`、`int`、`long`、`int128`、`iptr`、`isz`
无符号整数类型：`char`、`ushort`、`uint`、 `ulong`、`uint128`、`uptr`、`usz`

数字字面量支持这些写法：

```
a = -2_000;
b = 0o770;
c = 0x7f7f7f;
```

### 布尔类型

`bool` 表示布尔类型，值只能是 `true` 或 `false` 其中一个。

### 浮点

浮点类型有：`float`（32 位）、`double`（64 位）。

### 数组

数组类型使用 `Type[size]` 这种形式表示。如：

```c3
int[3] abc = { 1, 2, 3 }; // 显式声明 int[3]
int[*] bcd = { 1, 2, 3 }; // 自动计算长度方式声明 int[3]
```

### 向量

c3 中可以通过 `int[<*>] a = { 1, 2 };` 声明一个向量。向量是一种并行的数据结构，基于硬件 SIMD 向量。

### 切片

c3 支持切片类型，使用 `Type[]` 形式表示。切片不保管数据，实际上是组数或向量的视图。切片类型包含 `.ptr` 和 `.len` 两个类型。

### 字符字面量

用 `''` （单引号）表示字符字面量。c3 的字符字面量支持单字符、双字符、四字符、八字符字面量。

### 字符串

c3 内置三种字符串类型：`String`、`ZString`、`WString`，都是通过 typedef inline 声明的类型。

`String` 是 `char[]`。`ZString` 则是 `char*`，`ZString` 兼容 C 语言，使用 `null` 表示字符串结束。WString 是 `ushort*`，表示 UTF-16 编码的字符串。String、ZString、WString 在需要时可以显式转换为底层的类型。

### 指针

使用 `Type*` 表指针类型。

#### void\*

`void*` 是一个特殊的指针类型，可以强制转换为其他类型指针，是一种万能指针。

## 注释

c3 支持 4 种注释：

1. `//` 单行注释
2. `/* ... */` C 语言风格的多行注释，但支持嵌套
3. `<* ... *>` 文档注释。C3 编译器也会处理文档注释，并实现一种文档化协议
4. `#!` shebang 注释。shebang 注释只能在第一行中使用

### 文档化协议

TBD

## 表达式

c3 的表达式和 c 语言一致，但增加了一些新内容：

1. `&&` 操作符，用于获取一个函数范围内的指针；
2. 计算顺序优化：

    - Binary expressions are evaluated from left to right.
    - Assignment occurs right to left, so a = a++ would result in a being unchanged.
    - Call arguments are evaluated in parameter order.

3. 复合字面量（Compound literals），支持 struct、数组、切片等对象的快速初始化；
4. 编译期常量：c3 通过实现编译期计算，可以将很多表达式在编译期进行计算：

    - `null` 字面量
    - 布尔类型、浮点、整数字面量
    - 常量间计算
    - 编译期变量（`$`前缀的变量）
    - 使用常量初始化的全局变量
    - 非代码生成而且只使用常量的宏
    - 强制类型转换到布尔、浮点、整数类型
    - 字符串字面量
    - 使用常量初始化的数组等

    下面三种情况，都**不是**编译期常量：

    1. 非 null 指针对象，即使是使用了常量进行初始化的指针也不是常量
    2. 强制转换到非数值的类型
    3. 复合字面量

5. 导入二进制数据。使用 `$embed(...)` 可以将二进制数据嵌入到代码。

    实际上会生成这样的表达式：`char[*] my_image = $embed("my_image.png");`，类型也可以是其他数组或切片类型：`char*`, `void*`, `char[]`, `char[*]` 或者 `String`。

## 语句

c3 的语句和 c 语言一致，但增加了一些新内容：

1. Labelled break and continue

1. Do-without-while

1. Nextcase and labelled nextcase

1. Switch cases with runtime evaluation

1. Jumptable switches with `@jump`

