# 关于 C 语言指针，你需要知道的一切

- 原文地址：[https://boredzo.org/pointers/](https://boredzo.org/pointers/)
- 翻译：[简体中文](./pointers.zh.md)

版本 1.3.1。

版权所有 2005–2023 Peter Hosey。
本作品采用知识共享署名 2.5 许可协议授权。

## 指针的定义

指针就是一个内存地址。

（嗯，短小精悍的段落。）

## 入门

假设你声明了一个名为 foo 的变量。

```c
int foo;
```

这个变量占用了一些内存。在当今主流的 Intel 处理器上，它占用四个字节的内存（因为 `int` 就是四字节宽）。

现在再声明另一个变量。

```C
int *foo_ptr = &foo;
```

foo_ptr 被声明为指向 int 的指针。我们把它初始化为指向 foo。

如前所述，foo 占用了一些内存。它在内存中的位置就叫做它的地址。&foo 就是 foo 的地址（这也是 & 被称为“取地址运算符”的原因）。

把每个变量都想象成一个盒子。foo 是一个大小为 `sizeof(int)` 字节的盒子。这个盒子的位置就是它的地址。当你访问这个地址时，你实际访问的是它所指向的盒子里的内容。

这一点对所有变量都成立，无论它是什么类型。事实上，从语法上讲，根本不存在“指针变量”这种东西：所有变量都是一样的。只不过，变量的类型各不相同。foo 的类型是 int，foo_ptr 的类型是 `int *`。（因此，“指针变量”真正的意思是“指针类型的变量”。）

这里的要点是：指针并不是变量！指向 foo 的指针，是 foo_ptr 的内容。你完全可以在 foo_ptr 这个盒子里换上一个别的指针，盒子依然是 foo_ptr，但它不再指向 foo 了。

![boxes](/images/pointers/boxes.png)

顺带一提，指针自己也是有类型的。它的类型是 int，所以它是一个“int 指针”（指向 int 的指针）。`int **` 的类型是 `int *`（它指向的是一个指向 int 的指针）。这种“指向指针的指针”的用法叫做多级间接寻址（multiple indirection）。稍后我们会详细说。

## 插曲：声明语法

在一行里声明两个指针变量，最显而易见的写法是：

```C
int* ptr_a, ptr_b;
```

- 如果“存放指向 int 的指针”的变量，其类型是 `int *`，
- 而一条声明只要给出逗号分隔的列表（ptr_a, ptr_b），就能声明多个同类型的变量，
- 那么你只要写 int 指针类型（`int *`），后面跟一串逗号分隔的变量名（ptr_a, ptr_b），就能声明多个 int 指针变量了。

既然如此，ptr_b 是什么类型？`int *`，对吧？

*嘟——* 错了！

ptr_b 的类型是 int，它不是指针。

C 的声明语法在把类型套用到多个声明上时，会忽略掉指针的星号。如果你把 ptr_a 和 ptr_b 的声明拆成两条：

```C
int *ptr_a;
int  ptr_b;
```

可以将它理解为：给每个变量一个基本类型（int），再加上一个由星号数量表示的间接层级（ptr_b 是零级，ptr_a 是一级）。

单行声明也可以写得很清楚。最直接的改进是这样：

```C
int *ptr_a, ptr_b;
```

注意星号的位置挪动了，它现在紧挨着 ptr_a，带着一种微妙的“归属”暗示。

把非指针变量写在前面，会更容易看清：

```C
int ptr_b, *ptr_a;
```

最清楚的当然还是每条声明单独占一行，不过那会很占纵向空间。自己看着办就好。

最后还要指出，这样写也完全没问题：

```C
int *ptr_a, *ptr_b;
```

没有任何毛病。

顺便说一句，C 允许在变量名和星号外面套上零层或多层括号：

```C
int ((not_a_pointer)), (*ptr_a), (((*ptr_b)));
```

这东西除了用来声明[函数指针](https://boredzo.org/pointers/#function_pointers)（后文会讲）之外，没什么实际用处。

延伸阅读：[阅读 C 声明的左右法则](https://cseweb.ucsd.edu/~ricko/rt_lt.rule.html)。

## 赋值与指针

那么，怎样把一个 int 赋给这个指针呢？答案似乎显而易见：

```C
foo_ptr = 42;
```

但它同样是错的。

任何对指针变量的直接赋值，改变的都是变量里存的地址，而不是该地址上的值。在这个例子里，foo_ptr 的新值（也就是变量里那个新的“指针”）是 42。但我们并不知道它指向什么，所以它多半什么也不指向。试图访问这个地址，多半会导致段错误（说白了就是崩溃）。

（顺带一提，当你试图把 int 赋给指针变量时，编译器通常会发出警告。gcc 会提示 “warning: initialization makes pointer from integer without a cast”。）

那么，怎么访问指针所指向的值呢？你必须解引用它。

## 解引用

```C
int bar = *foo_ptr;
```

在这条声明里，解引用运算符（前缀 `*`，可别和乘法运算符搞混了）会查出某个地址上存在的值。（这叫做“加载”（load）操作。）

也可以对解引用表达式做写入（用 C 的行话来说：解引用表达式是一个左值，也就是说它可以出现在赋值号的左边）：

```C
*foo_ptr = 42; // Sets foo to 42
```

（这叫做“存储”（store）操作。）

## 插曲：数组

下面是一个存放三个 int 的数组的声明：

```C
int array[] = { 45, 67, 89 };
```

注意这里用的是 `[]` 记法，因为我们声明的是数组。这里写 `int *array` 是非法的；编译器不会允许我们把 `{ 45, 67, 89 }` 这个初始化器赋给它。

变量 array 是一个特别大的盒子：能装下三个 int 的存储空间。

C 有一个很妙的特性：在大多数场合，当你再次使用 array 这个名字时，你实际用到的是指向其首元素的指针（用 C 的话说，就是 &array[0]）。这叫做“退化”（decaying）：数组“退化”成了指针。大多数用到 array 的地方，都等价于 array 当初被声明成一个指针。

当然，也有不等价的情况。其一是直接给 array 这个名字赋值（`array = …`）——那是非法的。

其二是把它传给 sizeof 运算符。结果会是整个数组的大小，而不是一个指针的大小（例如，对上面那个数组求 `sizeof(array)`，在当前的 Mac OS X 系统上结果是 (sizeof(int) = 4) × 3 = 12）。这说明你手里处理的确实是数组，而不只是一个指针。

不过，在大多数用法里，数组表达式和指针表达式的行为完全一样。

举例来说，假设你想把一个数组传给 printf。这是做不到的：当你把数组作为参数传给函数时，你实际传出去的是指向数组首元素的指针，因为数组退化成了指针。你只能把指针交给 printf，而没法给它整个数组。（这就是 printf 没办法打印数组的原因：它需要你告诉它数组里元素的类型和元素个数，而格式字符串和参数列表很快就会变得一团糟。）

退化是一种隐式的 &；`array == &array == &array[0]`。按字面读，这三个表达式分别是“array”、“pointer to array”和“pointer to the first element of array”（下标运算符 `[]` 的优先级高于取地址运算符）。但在 C 里，这三个表达式含义完全相同。

（如果“array”其实是一个指针变量，三者就不全相等了，因为指针变量的地址和它内部存放的地址并不相同——于是中间的 `&array` 就不会等于另外两个表达式。只有当 array 真的是数组时，这三个表达式才全部相等。）

## 指针算术（或者说：为什么 1 == 4）

假设我们想打印出 array 的全部三个元素。

```C
int *array_ptr = array;
printf(" first element: %i\n", *(array_ptr++));
printf("second element: %i\n", *(array_ptr++));
printf(" third element: %i\n", *array_ptr);
```

```sh
 first element: 45
second element: 67
 third element: 89
```

如果你不熟悉 ++ 运算符：它给变量加 1，等同于 `variable += 1`（记住，这里用的是后缀表达式 `array_ptr++` 而不是前缀表达式 `++array_ptr`，所以表达式的值取自增之前的 array_ptr，而不是自增之后的）。

但我们在这里究竟对它做了什么呢？

关键在于，指针的类型很重要。这里指针的类型是 int。当你对指针做加法或减法时，加减的数量会乘以指针所指类型的大小。在我们这三次自增里，每次加上的 1 都被乘上了 `sizeof(int)`。

另外，虽然 `sizeof(void)` 是非法的，但 void 指针在做自增、自减时是按 1 个字节移动的。

如果你好奇 1 == 4 是什么意思：前面提过，在当前 Intel 处理器上 int 是四个字节。所以在这类机器上，对一个 int 指针加 1 或减 1，它会移动四个字节。于是 1 == 4。（程序员式的幽默。）

## 索引

```c
printf("%i\n", array[0]);
```

好了……刚才发生了什么？

结果是：

```sh
45
```

嗯，这你大概猜得到。可这跟指针有什么关系？

这又是 C 的一个秘密。下标运算符（`array[0]` 里的 `[]`）跟数组没有一点关系。

哦当然，那是它最常见的用法。但别忘了，在大多数上下文里，数组会退化成为指针。这里就是其中之一：你传给那个运算符的是指针，不是数组。

证据如下：

```c
int array[] = { 45, 67, 89 };
int *array_ptr = &array[1];
printf("%i\n", array_ptr[1]);
```

```sh
89
```

这个例子可能有点绕脑。看图：

![array_indexing](/images/pointers/array_indexing.png)

array 指向数组的第一个元素；array_ptr 被设为 &array[1]，所以它指向数组的第二个元素。因此 `array_ptr[1]` 等价于 `array[2]`（array_ptr 从数组的第二个元素开始，所以 array_ptr 的第二个元素就是数组的第三个元素）。

另外你可能会注意到，由于第一个元素宽 `sizeof(int)` 字节（因为它是一个 int），第二个元素就在数组起点往前 `sizeof(int)` 字节处。你没错：`array[1]` 等价于 `*(array + 1)`。（记住，对指针加减的数会乘以指针类型的大小，所以那个“1”给指针值加上了 `sizeof(int)` 字节。）

## 插曲：结构体与联合体

C 里比较有意思的类型中，有两种是结构体和联合体。你用 struct 关键字创建结构体类型，用 union 关键字创建联合体类型。

这些类型的精确定义超出了本文的范围。简单说，结构体或联合体的声明长这样：

```c
struct foo {
	size_t size;
	char name[64];
	int answer_to_ultimate_question;
	unsigned shoe_size;
};
```

块里的每一条声明叫做一个成员（member）。联合体也有成员，但用法不同。访问成员看起来是这样：

```c
struct foo my_foo;
my_foo.size = sizeof(struct foo);
```

表达式 `my_foo.size` 访问的是 my_foo 的成员 size。

那么，如果你有一个指向结构体的指针，该怎么办？

```c
// One way to do it
(*foo_ptr).size = new_size;
```

但有一个更好的办法，正是为此而生的：指向成员的指针运算符。

```c
// Yummy
foo_ptr->size = new_size;
```

不幸的是，遇到多级间接寻址时，它就没那么好看了。

```c
// Icky
(*foo_ptr_ptr)->size = new_size; // One way
(**foo_ptr_ptr).size = new_size; // or another
```

吐槽：Pascal 在这一点上做得好得多。它的解引用运算符是后缀 `^`：

```c
{ Yummy }
foo_ptr_ptr^^.size := new_size;
```

（不过撇开这点抱怨，C 是一门好得多的语言。）

## 多级间接寻址

我想再稍微展开讲讲多级间接寻址。

考虑下面的代码：

```c
int    a =  3;
int   *b = &a;
int  **c = &b;
int ***d = &c;
```

这些指针的值之间是这样相互对应的：

```c
  *d ==   c; // Dereferencing an (int ***) once gets you an (int **) (3 - 1 = 2)

 **d ==  *c ==  b; // Dereferencing an (int ***) twice, or an (int **) once, gets you an (int *) (3 - 2 = 1; 2 - 1 = 1)

***d == **c == *b == a == 3; // Dereferencing an (int ***) thrice, or an (int **) twice, or an (int *) once, gets you an int (3 - 3 = 0; 2 - 2 = 0; 1 - 1 = 0)
```

因此，& 运算符可以看作是在增加星号（也就是我所说的提高指针层级），而 `*`、`->` 和 `[]` 运算符则是在减少星号（降低指针层级）。

## 指针与 const

涉及指针时，const 关键字的用法会稍有不同。下面这两条声明是等价的：

```c
const int *ptr_a;
int const *ptr_a;
```

然而，下面这两条并不等价：

```c
int const *ptr_a;
int *const ptr_b;
```

在第一个例子里，int（也就是 `*ptr_a`）是 const 的；你不能做 `*ptr_a = 42`。在第二个例子里，指针本身是 const 的；你可以随意修改 `*ptr_b`，但（用指针算术，比如 `ptr_b++`）不能修改指针本身。

## 函数指针

注意：这一节的语法看起来有点古怪。它确实古怪，连 C 老手都会被绕晕。请耐心一点。

函数也是可以取地址的。而且和数组类似，函数名被使用时也会退化成指针。所以如果你想要比如 strcpy 的地址，写 strcpy 或者 &strcpy 都可以。（`&strcpy[0]` 因为显而易见的原因行不通。）

调用函数时，你用的运算符叫做函数调用运算符。函数调用运算符的左侧接收一个函数指针。

在这个例子里，我们把 dst 和 src 作为内部的两个实参，把 strcpy 作为要调用的函数（也就是函数指针）传进去：

```c
enum { str_length = 18U }; // Remember the NUL terminator!
char src[str_length] = "This is a string.", dst[str_length];

strcpy(dst, src); // The function call operator in action (notice the function pointer on the left side).
```

声明“类型为函数指针”的变量有一套特殊的语法。

```c
char *strcpy(char *dst, const char *src); // An ordinary function declaration, for reference
char *(*strcpy_ptr)(char *dst, const char *src); // Pointer to strcpy-like function

strcpy_ptr =  strcpy;
strcpy_ptr = &strcpy; // This works too
// strcpy_ptr = &strcpy[0]; // But not this
```

注意上面声明里 strcpy_ptr 外面的那对括号。它们把表示返回类型的星号（`char *`）与表示变量指针层级的星号（`*strcpy_ptr`——一层，指向函数的指针）区分开来。

另外，和普通函数声明一样，参数名是可选的：

```c
    char *(*strcpy_ptr_noparams)(char *, const char *) = strcpy_ptr; // Parameter names removed — still the same type
```

指向 strcpy 的指针，其类型是 `char *(*)(char *, const char *)`；你可能注意到，这就是上面的声明去掉变量名。你会把它用在强制类型转换里。例如：

```c
strcpy_ptr = (char *(*)(char *dst, const char *src))my_strcpy;
```

如你所料，指向“函数指针”的指针，括号里会有两个星号：

```c
char *(**strcpy_ptr_ptr)(char *, const char *) = &strcpy_ptr;
```

我们还可以拥有函数指针的数组：

```c
char *(*strcpies[3])(char *, const char *) = { strcpy, strcpy, strcpy };
char *(*strcpies[])(char *, const char *) = { strcpy, strcpy, strcpy }; // Array size is optional, same as ever

strcpies[0](dst, src);
```

下面是摘自 C99 标准的一个病态声明。“[这条声明]声明了一个没有参数、返回 int 的函数 f，一个没有参数规格说明、返回 int 指针的函数 fip，以及一个指向没有参数规格说明、返回 int 的函数的指针 pfi。”（6.7.5.3[16]）

```c
int f(void), *fip(), (*pfi)();
```

换句话说，上面等价于下面三条声明：

```c
int f(void);
int *fip(); // Function returning int pointer
int (*pfi)(); // Pointer to function returning int
```

但如果你觉得这已经够烧脑了，那就做好准备……

函数指针甚至可以是一个函数的返回值。这部分真的非常烧脑，先把脑子抻一抻，免得受伤。

为了解释它，我要把到目前为止你学到的声明语法总结一遍。首先，声明一个指针变量：

```c
char *ptr;
```

这条声明告诉了我们指针类型（char）、指针层级（`*`）和变量名（ptr）。后两者可以放进括号里：

```c
char (*ptr);
```

如果我们在第一条声明里，把变量名换成一个名字加一组参数，会发生什么？

```c
char *strcpy(char *dst, const char *src);
```

嗯，一条函数声明。

但我们也去掉了表示指针层级的 `*`——记住，这条函数声明里的 `*` 是函数返回类型的一部分。那么，如果我们把表示指针层级的星号加回去（借助括号）：

```c
char *(*strcpy_ptr)(char *dst, const char *src);
```

一个函数指针变量！

但等等。如果这是一个变量，而第一条声明也是一个变量，那我们能不能把这条声明里的变量名，换成一个名字加一组参数呢？

当然可以！结果就是声明了一个返回函数指针的函数：

```c
char *(*get_strcpy_ptr(void))(char *dst, const char *src);
```

记住，指向“不接受参数、返回 int 的函数”的指针，其类型是 `int (*)(void)`。所以这个函数返回的类型是 `char *(*)(char *, const char *)`（同样，里面的 `*` 表示指针，外面的 `*` 则是指向的那个函数的返回类型的一部分）。你可能记得，那也是 strcpy_ptr 的类型。

所以这个函数不带参数调用时，返回的是一个指向 strcpy 式函数的指针：

```c
strcpy_ptr = get_strcpy_ptr();
```

因为函数指针的语法实在太烧脑，大多数开发者会用 typedef 把它抽象掉：

```c
typedef char *(*strcpy_funcptr)(char *, const char *);

strcpy_funcptr strcpy_ptr = strcpy;
strcpy_funcptr get_strcpy_ptr(void);
```

## 字符串（以及为什么其实没有这种东西）

C 里没有字符串类型。

于是你有两个问题：

1. 既然没有字符串类型，为什么我到处都能看到对“C 字符串”的引用？
2. 这跟指针有什么关系？

真相是，“C 字符串”这个概念是虚构的（字符串字面量除外）。并不存在字符串类型。C 字符串实际上就是字符数组：

```c
char str[] = "I am the Walrus";
```

这个数组长度是 16 字节：`"I am the Walrus"` 的 15 个字符，加上一个 NUL（字节值 0）结束符。换句话说，str[15]（最后一个元素）是 0。这就是“字符串”结束的信号。

C 对字符串类型的支持，也就到这个约定俗成的写法为止。但它也仅此而已：一个约定俗成的写法。只不过它得到了以下支持：

- 前面提到的字符串字面量语法
- 字符串库

string.h 里的函数用于字符串操作。可如果没有字符串类型，这怎么可能？

因为，它们操作的是指针。

下面是简单函数 strlen 的一种可能实现，它返回字符串的长度（不包括 NUL 结束符）：

```c
size_t strlen(const char *str) { // Note the pointer syntax here
	size_t len = 0U;
	while(*(str++)) ++len;
	return len;
}
```

注意这里用到了指针算术和解引用。因为尽管函数名叫 strlen，这里并没有什么“字符串”；只有一个指向至少一个字符的指针，而最后一个字符是 0。

还有一种可能的实现：

```c
size_t strlen(const char *str) {
	size_t i;
	for(i = 0U; str[i]; ++i);
	// When the loop exits, i is the length of the string
	return i;
}
```

这个用的是索引。而正如我们前面发现的，索引用的是指针（不是数组，更绝对不是字符串）。

## 版本历史

1.3.1 — 2023-10-26

- 把热链接的 Creative Commons 小虫图，换成了我自己重绘的高分辨率版本。
- 把若干链接升级为 HTTPS，并将失效链接替换为修正后的链接或 Wayback Machine 存档链接。
- 字符集切换为 UTF-8。

  1.3 — 2010-01-13

- 修正了“指针与 const”之间关系的解释。
- 在“多级间接寻址”一节中，把 `->` 补充为解引用运算符之一。
- 改正了把 ‘’’ 误用作撇号的问题，改用正确的撇号。大多数字体仍会把撇号（‘'’）渲染成直单引号，但那是字体的问题，不是我的问题。
- 修正了关于退化的讨论，尤其是数组部分。数组不是指针。
- 增加了两个关于“阅读 C 声明的左右法则”的链接。
- 更正了下标运算符的名称（此前我称之为索引运算符）。
- 把对 PowerPC 的引用换成了对 Intel 处理器的引用。（幸运的是，不需要做任何事实性改动。）
- 修复了示例代码中的几个编译错误和若干警告（此外还有前面提到的数组退化讨论）。

  1.2.2 — 2007-01-08

- 修复了从下面 1.1 节指向“指针算术”一节的链接。
- 把版权声明中年份区间里的连字符改成了短破折号（参考：《芝加哥手册》）。

  1.2.1 — 2006-04-05

- 署名从 “Mac-arena the Bored Zo” 改为我的真名。

  1.2 — 2006-01-19

- 增加了“函数指针”一节。
- 增加了“指针与 const”一节。
- 在“声明语法”中补充了声明符里括号的说明。
- 在“数组”中补充了 `array == &array == &array[0]`（即退化是一种隐式的 &）。
- 改用弯引号。
- 在 Colin Barrett 的建议下，改写了关于 `++x` 与 `x++` 的括注。

  1.1 — 2006-01-01

- 增加：
  - 目录
  - “赋值”一节（说明 `foo_ptr = 42` 的行为）
  - “声明语法”一节
  - “多级间接寻址”一节
  - “C 字符串”一节
- 根据“这样读起来更清楚”的反馈，把句子改为以大写字母开头。
- 在“指针算术”中，澄清了标题里的 1 == 4 表达式以及 ++ 的用法。
- 更炫的 CSS，尤其是注释部分。
- 增加了“带翅膀的注释”（winged-comments）样式（示例）。
- 在“入门”中增加了示意图。
- 在“数组”中解释了数组声明语法（相对于指针声明语法）。

  1.0 — 2005-12-22

- 首次公开发布。
