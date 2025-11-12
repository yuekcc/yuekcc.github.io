import{e as a,h as n}from"/dist/chunk-0936xbxf.js";function p(){return n("div",{class:"markdown-body",children:n(a,{children:[n("h1",{children:"关于 C 语言指针的一切你需要知道的知识"},void 0,!1,void 0,this),`
`,n("p",{children:["原文地址：",n("a",{href:"https://boredzo.org/pointers/",children:"https://boredzo.org/pointers/"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("p",{children:"版本 1.3.1"},void 0,!1,void 0,this),`
`,n("p",{children:"版权 2005–2023 Peter Hosey。本作品采用知识共享署名 2.5 许可协议授权。"},void 0,!1,void 0,this),`
`,n("hr",{},void 0,!1,void 0,this),`
`,n("h2",{children:"指针的定义"},void 0,!1,void 0,this),`
`,n("p",{children:"指针是一个内存地址。"},void 0,!1,void 0,this),`
`,n("p",{children:"（嗯，简洁的段落。）"},void 0,!1,void 0,this),`
`,n("h2",{children:"入门"},void 0,!1,void 0,this),`
`,n("p",{children:"假设你声明了一个名为 foo 的变量。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" foo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"这个变量占用一些内存。在当前主流的 Intel 处理器上，它占用四个字节的内存（因为 int 是四个字节宽）。"},void 0,!1,void 0,this),`
`,n("p",{children:"现在再声明一个变量。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"foo_ptr 被声明为指向 int 的指针。我们将其初始化为指向 foo。"},void 0,!1,void 0,this),`
`,n("p",{children:'如前所述，foo 占用一些内存。它在内存中的位置称为它的地址。&foo 就是 foo 的地址（这就是 & 被称为"取地址运算符"的原因）。'},void 0,!1,void 0,this),`
`,n("p",{children:"把每个变量想象成一个盒子。foo 是一个大小为 sizeof(int) 字节的盒子。这个盒子的位置就是它的地址。当你访问这个地址时，你实际上访问的是该盒子指向的内容。"},void 0,!1,void 0,this),`
`,n("p",{children:'这对所有变量都成立，无论类型如何。实际上，从语法角度来说，并不存在"指针变量"这种东西：所有变量都是一样的。不过，变量的类型确实不同。foo 的类型是 int。foo_ptr 的类型是 int *。（因此，"指针变量"实际上是指"具有指针类型的变量"。）'},void 0,!1,void 0,this),`
`,n("p",{children:"重点在于：指针不是变量！指向 foo 的指针是 foo_ptr 的内容。你可以在 foo_ptr 盒子中放入一个不同的指针，盒子仍然是 foo_ptr。但它就不再指向 foo 了。"},void 0,!1,void 0,this),`
`,n("p",{children:n("img",{src:"/images/pointers/boxes.png",alt:"boxes"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'顺便说一句，指针也有类型。它的类型是 int。因此它是一个"int 指针"（指向 int 的指针）。int *_* 的类型是 int _（它指向一个指向 int 的指针）。使用指向指针的指针被称为多级间接寻址。稍后会详细介绍。'},void 0,!1,void 0,this),`
`,n("h2",{children:"插曲：声明语法"},void 0,!1,void 0,this),`
`,n("p",{children:"在一行声明中声明两个指针变量的明显方式是："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ptr_a, ptr_b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"如果包含指向 int 的指针的变量类型是 int *，"},void 0,!1,void 0,this),`
`,n("li",{children:"且单行声明可以通过简单地提供逗号分隔的列表来声明多个相同类型的变量（ptr_a, ptr_b），"},void 0,!1,void 0,this),`
`,n("li",{children:"那么你应该可以通过简单地给出 int 指针类型（int *）后跟逗号分隔的变量名列表（ptr_a, ptr_b）来声明多个 int 指针变量。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"鉴于此，ptr_b 的类型是什么？int *，对吧？"},void 0,!1,void 0,this),`
`,n("p",{children:[n("strong",{children:"bzzt"},void 0,!1,void 0,this)," 错了！"]},void 0,!0,void 0,this),`
`,n("p",{children:"ptr_b 的类型是 int。它不是指针。"},void 0,!1,void 0,this),`
`,n("p",{children:"C 语言的声明语法在将类型延续到多个声明时会忽略指针星号。如果你将 ptr_a 和 ptr_b 的声明拆分成多行，你会得到："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"  ptr_b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"可以把它看作是为每个变量分配一个基本类型（int），加上一个间接层级，由星号的数量表示（ptr_b 的是零；ptr_a 的是一）。"},void 0,!1,void 0,this),`
`,n("p",{children:"可以用清晰的方式在一行内完成声明。这是最直接的改进："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a, ptr_b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"注意星号已经移动了。现在它紧挨着 ptr_a。这是一种微妙的关联暗示。"},void 0,!1,void 0,this),`
`,n("p",{children:"更清晰的写法是把非指针变量放在前面："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ptr_b, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"最清晰的方式是每个声明占一行，但这会占用大量垂直空间。请自行判断。"},void 0,!1,void 0,this),`
`,n("p",{children:"最后，我应该指出，这样做完全没问题："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"这没有任何问题。"},void 0,!1,void 0,this),`
`,n("p",{children:"顺便一提，C 允许在变量名和星号周围有零层或多层括号："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ((not_a_pointer)), ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a), ((("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_b)));"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["这没什么用，除了用来声明",n("a",{href:"#%E5%87%BD%E6%95%B0%E6%8C%87%E9%92%88",children:"函数指针"},void 0,!1,void 0,this),"（稍后描述）。"]},void 0,!0,void 0,this),`
`,n("p",{children:["延伸阅读：",n("a",{href:"https://cseweb.ucsd.edu/~ricko/rt_lt.rule.html",children:"阅读 C 声明的左右规则"},void 0,!1,void 0,this),"。"]},void 0,!0,void 0,this),`
`,n("h2",{children:"赋值与指针"},void 0,!1,void 0,this),`
`,n("p",{children:"现在，如何给这个指针赋一个 int 值？这个解决方案可能很明显："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"foo_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 42"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"但这是错的。"},void 0,!1,void 0,this),`
`,n("p",{children:'对指针变量的任何直接赋值都会改变变量中存储的地址，而不是该地址处的值。在这个例子中，foo_ptr 的新值（即该变量中的新"指针"）是 42。但我们不知道这是否指向任何东西，所以很可能没有。尝试访问这个地址很可能会导致段错误（通俗地说：崩溃）。'},void 0,!1,void 0,this),`
`,n("p",{children:'（顺便一提，当你试图将 int 赋给指针变量时，编译器通常会发出警告。gcc 会说"warning: initialization makes pointer from integer without a cast"。）'},void 0,!1,void 0,this),`
`,n("p",{children:"那么，如何访问指针指向的值呢？你必须解引用它。"},void 0,!1,void 0,this),`
`,n("h2",{children:"解引用"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" bar "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo_ptr;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'在这个声明中，解引用运算符（前缀 *，不要与乘法运算符混淆）查找存在于某个地址的值。（这被称为"加载"操作。）'},void 0,!1,void 0,this),`
`,n("p",{children:"也可以对解引用表达式进行写操作（用 C 语言的说法：解引用表达式是一个左值，意味着它可以出现在赋值语句的左侧）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 42"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 将 foo 设为 42"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'（这被称为"存储"操作。）'},void 0,!1,void 0,this),`
`,n("h2",{children:"插曲：数组"},void 0,!1,void 0,this),`
`,n("p",{children:"这是一个包含三个 int 的数组声明："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" array"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"[]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" { "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"45"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"67"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"89"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" };"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"注意我们使用 [] 符号，因为我们在声明一个数组。int *array 在这里是非法的；编译器不会接受我们将 { 45, 67, 89 } 初始化器赋给它。"},void 0,!1,void 0,this),`
`,n("p",{children:"这个变量 array 是一个超大盒子：三个 int 大小的存储空间。"},void 0,!1,void 0,this),`
`,n("p",{children:'C 语言的一个巧妙特性是，在大多数地方，当你再次使用数组名 array 时，你实际上使用的是指向其第一个元素的指针（用 C 的术语来说，&array[0]）。这被称为"退化"：数组"退化"为指针。大多数对 array 的使用等同于 array 被声明为指针的情况。'},void 0,!1,void 0,this),`
`,n("p",{children:"当然，也有不等价的情况。一个是单独对 array 名进行赋值（array = …）——那是非法的。"},void 0,!1,void 0,this),`
`,n("p",{children:"另一个是将其传递给 sizeof 运算符。结果将是数组的总大小，而不是指针的大小（例如，使用上面的数组时，sizeof(array) 在当前 Mac OS X 系统上会求值为 (sizeof(int) = 4) × 3 = 12）。这说明你实际上是在处理一个数组，而不仅仅是一个指针。"},void 0,!1,void 0,this),`
`,n("p",{children:"然而，在大多数用法中，数组表达式和指针表达式的工作方式完全相同。"},void 0,!1,void 0,this),`
`,n("p",{children:"所以，举例来说，如果你想把数组传递给 printf。你不能：当你把数组作为参数传递给函数时，你实际上传递的是指向数组第一个元素的指针，因为数组会退化为指针。你只能给 printf 提供指针，而不是整个数组。（这就是为什么 printf 无法打印数组：它需要你知道数组中内容的类型和元素数量，格式字符串和参数列表会很快变得混乱。）"},void 0,!1,void 0,this),`
`,n("p",{children:'退化是隐式的 &；array == &array == &array[0]。用英文来说，这些表达式读作"array"、"指向 array 的指针"和"指向 array 第一个元素的指针"（下标运算符 [] 的优先级高于取地址运算符）。但在 C 中，这三个表达式的含义相同。'},void 0,!1,void 0,this),`
`,n("p",{children:'（如果"array"实际上是一个指针变量，那么这三个表达式不会都相等，因为指针变量本身的地址与它内部存储的地址不同——因此，中间那个表达式 &array 不会等于另外两个表达式。只有当一个变量真正是数组时，这三个表达式才相等。）'},void 0,!1,void 0,this),`
`,n("h2",{children:"指针运算（或者说，为什么 1 == 4）"},void 0,!1,void 0,this),`
`,n("p",{children:"假设我们想打印出 array 的所有三个元素。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"array_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" array;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"printf"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'" first element: '},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"%i\\n"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(array_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"++"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"));"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"printf"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"second element: '},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"%i\\n"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(array_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"++"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"));"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"printf"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'" third element: '},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"%i\\n"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"array_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" first"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" element:"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 45"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"second"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" element:"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 67"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:" third"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:" element:"},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 89"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"以防你不熟悉 ++ 运算符：它给变量加 1，等同于 variable += 1（记住我们用的是后缀表达式 array_ptr++，而不是前缀表达式 ++array_ptr，所以表达式求值使用的是递增前的 array_ptr 值，而不是递增后的）。"},void 0,!1,void 0,this),`
`,n("p",{children:"但我们在这里做了什么？"},void 0,!1,void 0,this),`
`,n("p",{children:"好吧，指针的类型很重要。这里的指针类型是 int。当你对指针进行加法或减法操作时，你操作的数值会乘以指针类型的大小。在我们这三次递增中，每次加的 1 都乘以了 sizeof(int)。"},void 0,!1,void 0,this),`
`,n("p",{children:"顺便一提，虽然 sizeof(void) 是非法的，但 void 指针的递增或递减是按 1 字节进行的。"},void 0,!1,void 0,this),`
`,n("p",{children:"如果你在想 1 == 4 的问题：记住，我之前提到，在当前 Intel 处理器上，int 是四个字节。所以，在这样的机器上，给 int 指针加 1 或减 1 会改变四个字节。因此，1 == 4。（程序员幽默。）"},void 0,!1,void 0,this),`
`,n("h2",{children:"索引"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"printf"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"%i\\n"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"array"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"好吧……刚刚发生了什么？"},void 0,!1,void 0,this),`
`,n("p",{children:"发生了这个："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#B392F0"},children:"45"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"好吧，你可能猜到了。但这和指针有什么关系？"},void 0,!1,void 0,this),`
`,n("p",{children:"这又是 C 语言的一个秘密。下标运算符（array[0] 中的 []）和数组没有任何关系。"},void 0,!1,void 0,this),`
`,n("p",{children:"哦，当然，这是它最常见的用法。但记住，在大多数上下文中，数组会退化为指针。这是其中之一：你传递给该运算符的是一个指针，而不是数组。"},void 0,!1,void 0,this),`
`,n("p",{children:"作为证据，我提交："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" array"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"[]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" { "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"45"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"67"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"89"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" };"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"array_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"array"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"printf"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"%i\\n"},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:'"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"array_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"1"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"]);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#B392F0"},children:"89"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"这个可能会让你有点困惑。这是一个示意图："},void 0,!1,void 0,this),`
`,n("p",{children:n("img",{src:"/images/pointers/array_indexing.png",alt:"array_indexing"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"array 指向数组的第一个元素；array_ptr 被设置为 &array[1]，所以它指向数组的第二个元素。因此 array_ptr[1] 等同于 array[2]（array_ptr 从数组的第二个元素开始，所以 array_ptr 的第二个元素就是数组的第三个元素）。"},void 0,!1,void 0,this),`
`,n("p",{children:'另外，你可能注意到因为第一个元素是 sizeof(int) 字节宽（因为它是一个 int），所以第二个元素在数组起始位置向后 sizeof(int) 字节。你说得对：array[1] 等同于 *(array + 1)。（记住，加到指针或从指针减去的数会乘以指针类型的大小，所以"1"给指针值增加了 sizeof(int) 字节。）'},void 0,!1,void 0,this),`
`,n("h2",{children:"插曲：结构体和联合体"},void 0,!1,void 0,this),`
`,n("p",{children:"C 中两种更有趣的类型是结构体和联合体。你用 struct 关键字创建结构体类型，用 union 关键字创建联合体类型。"},void 0,!1,void 0,this),`
`,n("p",{children:"这些类型的精确定义超出了本文的范围。 suffice it to say that a declaration of a struct or union looks like this:"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"struct"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" foo {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tsize_t"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" size;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tchar"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" name"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"64"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tint"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" answer_to_ultimate_question;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tunsigned"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" shoe_size;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"};"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"块内的每个声明被称为一个成员。联合体也有成员，但使用方式不同。访问成员的方式如下："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"struct"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" foo my_foo;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"my_foo.size "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" sizeof"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"struct"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" foo);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"表达式 my_foo.size 访问 my_foo 的成员 size。"},void 0,!1,void 0,this),`
`,n("p",{children:"那么，如果你有指向结构体的指针怎么办？"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 一种做法"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo_ptr).size "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" new_size;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"但有一个更好的方法，专门用于此目的：指向成员的箭头运算符。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 太好了"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"foo_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"->"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"size "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" new_size;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"不幸的是，对于多级间接寻址，它看起来不那么好。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// 糟糕"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo_ptr_ptr)"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"->"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"size "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" new_size;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 一种方式"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"**"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"foo_ptr_ptr).size "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" new_size;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 或者另一种方式"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"吐槽：Pascal 在这方面做得更好。它的解引用运算符是后缀 ^："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"{ 太好了 }"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"foo_ptr_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"^^"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:".size :"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" new_size;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"（但撇开这个抱怨不谈，C 是一门更好的语言。）"},void 0,!1,void 0,this),`
`,n("h2",{children:"多级间接寻址"},void 0,!1,void 0,this),`
`,n("p",{children:"我想进一步解释一下多级间接寻址。"},void 0,!1,void 0,this),`
`,n("p",{children:"考虑以下代码："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"    a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"  3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"   *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"  **"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ***"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"d "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"c;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"这些指针的值之间的等价关系如下："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"  *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"d "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"   c;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 对 (int ***) 解引用一次得到 (int **) (3 - 1 = 2)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:" **"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"d "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"  *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"  b;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 对 (int ***) 解引用两次，或对 (int **) 解引用一次，得到 (int *) (3 - 2 = 1; 2 - 1 = 1)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"***"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"d "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" **"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"c "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"b "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" a "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"=="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 对 (int ***) 解引用三次，或对 (int **) 解引用两次，或对 (int *) 解引用一次，得到 int (3 - 3 = 0; 2 - 2 = 0; 1 - 1 = 0)"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"因此，& 运算符可以被视为添加星号（增加指针层级，我称之为 pointer level），而 *、-> 和 [] 运算符则被视为移除星号（降低指针层级）。"},void 0,!1,void 0,this),`
`,n("h2",{children:"指针与 const"},void 0,!1,void 0,this),`
`,n("p",{children:"当涉及指针时，const 关键字的用法略有不同。这两个声明是等价的："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"然而，这两个不等价："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr_a;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *const"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ptr_b;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"在第一个例子中，int（即 *ptr_a）是 const 的；你不能执行 *ptr_a = 42。在第二个例子中，指针本身是 const 的；你可以正常地更改 *ptr_b，但不能更改指针本身（使用指针运算，例如 ptr_b++）。"},void 0,!1,void 0,this),`
`,n("h2",{children:"函数指针"},void 0,!1,void 0,this),`
`,n("p",{children:"注意：这部分的语法看起来有点异国情调。确实如此。它让许多人感到困惑，即使是 C 语言高手。请耐心听我说。"},void 0,!1,void 0,this),`
`,n("p",{children:"也可以获取函数的地址。而且，与数组类似，函数名在使用时会退化为指针。所以如果你想要获取 strcpy 的地址，你可以说 strcpy 或 &strcpy。（&strcpy[0] 显然行不通。）"},void 0,!1,void 0,this),`
`,n("p",{children:"当你调用函数时，你使用的运算符称为函数调用运算符。函数调用运算符的左侧是一个函数指针。"},void 0,!1,void 0,this),`
`,n("p",{children:"在这个例子中，我们将 dst 和 src 作为内部参数传递，strcpy 作为要调用的函数（即函数指针）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"enum"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" { str_length "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 18"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"U"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" };"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 记住 NUL 终止符！"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:" src"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"[str_length] "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "This is a string."'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"dst"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"[str_length];"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#B392F0"},children:"strcpy"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(dst, src);"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 函数调用运算符在起作用（注意左侧的函数指针）。"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"声明函数指针类型变量有一种特殊的语法。"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"strcpy"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"dst"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"src"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 普通函数声明，作为参考"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr)("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"dst, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"src);"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 指向类似 strcpy 函数的指针"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"  strcpy;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 这也行"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"// strcpy_ptr = &strcpy[0]; // 但这个不行"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"注意上述声明中 strcpy*ptr 周围的括号。它们将表示返回类型（char *）的星号与表示变量指针层级的星号（*strcpy_ptr —— 一层，指向函数的指针）分隔开来。"},void 0,!1,void 0,this),`
`,n("p",{children:"另外，就像普通函数声明一样，参数名是可选的："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"    char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr_noparams)("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" strcpy_ptr;"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 参数名已移除 —— 仍然是相同的类型"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:["指向 strcpy 的指针的类型是 char ",n("em",{children:"("},void 0,!1,void 0,this),")(char _, const char _)；你可能会注意到，这就是上面的声明，只是去掉了变量名。你会在类型转换中使用它。例如："]},void 0,!0,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"dst, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"src))my_strcpy;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"正如你所预料的，指向函数指针的指针在括号内有两个星号："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"**"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr_ptr)("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" &"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"我们可以拥有函数指针数组："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"strcpies"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"3"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"])("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" { strcpy, strcpy, strcpy };"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpies"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"[]"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" { strcpy, strcpy, strcpy };"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 数组大小可选，和往常一样"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#FFAB70"},children:"strcpies"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"["},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:"0"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"](dst, src);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'这是一个来自 C99 标准的病态声明。"[此声明]声明了一个无参数返回 int 的函数 f，一个无参数规范返回指向 int 的指针的函数 fip，以及一个指向无参数规范返回 int 的函数的指针 pfi。"（6.7.5.3[16]）'},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" f"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"), "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"fip"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(), ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"pfi)();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"换句话说，上面的声明等同于以下三个声明："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" f"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"fip"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 返回 int 指针的函数"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"int"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"pfi)();"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 指向返回 int 的函数的指针"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"但如果你认为这已经让人头晕了，请做好准备……"},void 0,!1,void 0,this),`
`,n("p",{children:"函数指针甚至可以作为函数的返回值。这部分真的很烧脑，所以先活动一下大脑，以免受伤。"},void 0,!1,void 0,this),`
`,n("p",{children:"为了解释这一点，我将总结你迄今为止学到的所有声明语法。首先，声明一个指针变量："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"这个声明告诉我们指针类型（char）、指针层级（*）和变量名（ptr）。后两者可以放入括号中："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" ("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"ptr);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"如果我们在第一个声明中用名字加一组参数替换变量名，会发生什么？"},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"strcpy"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"dst"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"src"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"哈。一个函数声明。"},void 0,!1,void 0,this),`
`,n("p",{children:"但我们也移除了表示指针层级的 * —— 记住这个函数声明中的 * 是函数返回类型的一部分。所以如果我们把指针层级的星号加回来（使用括号）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr)("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"dst, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"src);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"一个函数指针变量！"},void 0,!1,void 0,this),`
`,n("p",{children:"但等一下。如果这是一个变量，而第一个声明也是一个变量，我们能否在这个声明中用名字和一组参数替换变量名？"},void 0,!1,void 0,this),`
`,n("p",{children:"可以，我们可以！结果就是声明一个返回函数指针的函数："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"get_strcpy_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"))("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"dst, "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"src);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"记住，指向无参数返回 int 的函数的指针类型是 int (*)(void)。所以这个函数返回的类型是 char _(char _，const char _)（同样，内部的 * 表示指针，外部的 * 是指向函数的返回类型的一部分）。你可能还记得，这正是 strcpy_ptr 的类型。"},void 0,!1,void 0,this),`
`,n("p",{children:"所以用这个函数，调用时无参数，返回一个指向类似 strcpy 函数的指针："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"strcpy_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" get_strcpy_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"();"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"因为函数指针语法如此烧脑，大多数开发者使用 typedef 来抽象它们："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"typedef"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"strcpy_funcptr)("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:", "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"strcpy_funcptr strcpy_ptr "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" strcpy;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#E1E4E8"},children:"strcpy_funcptr "},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:"get_strcpy_ptr"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"void"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:");"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("h2",{children:"字符串（以及为什么不存在这种东西）"},void 0,!1,void 0,this),`
`,n("p",{children:"C 语言中没有字符串类型。"},void 0,!1,void 0,this),`
`,n("p",{children:"现在你有两个问题："},void 0,!1,void 0,this),`
`,n("ol",{children:[`
`,n("li",{children:'如果没有字符串类型，为什么到处都能看到"C 字符串"的引用？'},void 0,!1,void 0,this),`
`,n("li",{children:"这和指针有什么关系？"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:'事实是，"C 字符串"这个概念是虚构的（除了字符串字面量之外）。没有字符串类型。C 字符串实际上只是字符数组：'},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"char"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" str"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"[]"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" ="},void 0,!1,void 0,this),n("span",{style:{color:"#9ECBFF"},children:' "I am the Walrus"'},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'这个数组长度为 16 字节：15 个字符给 "I am the Walrus"，加上一个 NUL（字节值为 0）终止符。换句话说，str[15]（最后一个元素）是 0。这就是"字符串"结束的信号。'},void 0,!1,void 0,this),`
`,n("p",{children:"这个惯用法就是 C 拥有字符串类型的全部。但它只是这样：一个惯用法。除字符串字面量语法外，它还得到以下支持："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"前述的字符串字面量语法"},void 0,!1,void 0,this),`
`,n("li",{children:"字符串库"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("p",{children:"string.h 中的函数用于字符串操作。但如果没有字符串类型，这怎么可能？"},void 0,!1,void 0,this),`
`,n("p",{children:"它们通过指针工作。"},void 0,!1,void 0,this),`
`,n("p",{children:"这是简单函数 strlen 的一个可能实现，它返回字符串的长度（不包括 NUL 终止符）："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"size_t"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" strlen"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"str"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this),n("span",{style:{color:"#6A737D"},children:" // 注意这里的指针语法"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tsize_t"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" len "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 0"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"U"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:";"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\twhile"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"*"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(str"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"++"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:")) "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"++"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"len;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\treturn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" len;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:'注意指针运算和解引用的使用。这是因为，尽管函数名为 strlen，但这里并没有"字符串"；这里只有一个指向至少一个字符的指针，最后一个字符是 0。'},void 0,!1,void 0,this),`
`,n("p",{children:"这是另一个可能的实现："},void 0,!1,void 0,this),`
`,n("pre",{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"},tabIndex:"0",children:n("code",{children:[n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"size_t"},void 0,!1,void 0,this),n("span",{style:{color:"#B392F0"},children:" strlen"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"("},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"const"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" char"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:" *"},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"str"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:") {"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tsize_t"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" i;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\tfor"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"(i "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"="},void 0,!1,void 0,this),n("span",{style:{color:"#79B8FF"},children:" 0"},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"U"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"; "},void 0,!1,void 0,this),n("span",{style:{color:"#FFAB70"},children:"str"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"[i]; "},void 0,!1,void 0,this),n("span",{style:{color:"#F97583"},children:"++"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:"i);"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#6A737D"},children:"\t// 循环结束时，i 就是字符串的长度"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line",children:[n("span",{style:{color:"#F97583"},children:"\treturn"},void 0,!1,void 0,this),n("span",{style:{color:"#E1E4E8"},children:" i;"},void 0,!1,void 0,this)]},void 0,!0,void 0,this),`
`,n("span",{className:"line",children:n("span",{style:{color:"#E1E4E8"},children:"}"},void 0,!1,void 0,this)},void 0,!1,void 0,this),`
`,n("span",{className:"line"},void 0,!1,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this),`
`,n("p",{children:"这个版本使用了索引。正如我们之前发现的，索引使用的是指针（不是数组，更不是字符串）。"},void 0,!1,void 0,this),`
`,n("h2",{children:"版本历史"},void 0,!1,void 0,this),`
`,n("p",{children:"1.3.1 — 2023-10-26"},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:[`
`,n("p",{children:"替换了外链知识共享图标，改为我自己重绘的高分辨率版本。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"将各种链接升级为 HTTPS，并用修正后的链接或 Wayback Machine 链接替换失效链接。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"将字符集切换为 UTF-8。"},void 0,!1,void 0,this),`
`,n("p",{children:"1.3 — 2010-01-13"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"修正了指针与 const 关系的解释。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"在多级间接寻址中增加了 -> 作为解引用运算符之一。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"将不当使用的直引号改为正确的撇号。大多数字体仍然将撇号（'）渲染为直的单引号，但这不是我的问题。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"修正了关于退化的讨论，特别是数组的讨论。数组不是指针。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了两个关于阅读 C 声明的左右规则的链接。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"修正了下标运算符的名称（我之前称为索引运算符）。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"将对 PowerPC 的引用替换为 Intel 处理器的引用。（幸运的是，无需更改事实。）"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"修正了示例代码中的几个编译错误和一些警告（除了前述的数组退化讨论）。"},void 0,!1,void 0,this),`
`,n("p",{children:"1.2.2 — 2007-01-08"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"修正了从下方 1.1 节到指针算术部分的链接。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"将版权声明中的连字符改为 en dash（参考：芝加哥手册）。"},void 0,!1,void 0,this),`
`,n("p",{children:"1.2.1 — 2006-04-05"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:'将署名从"Mac-arena the Bored Zo"改为我的真名。'},void 0,!1,void 0,this),`
`,n("p",{children:"1.2 — 2006-01-19"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了函数指针部分。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了指针与 const 部分。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了声明符中括号的说明。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了 array == &array == &array[0]（即退化是隐式的 &）到数组部分。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"使用智能引号。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"根据 Colin Barrett 的建议，重新措辞关于 ++x 与 x++ 的括号说明。"},void 0,!1,void 0,this),`
`,n("p",{children:"1.1 — 2006-01-01"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了："},void 0,!1,void 0,this),`
`,n("ul",{children:[`
`,n("li",{children:"目录"},void 0,!1,void 0,this),`
`,n("li",{children:"赋值部分（描述 foo_ptr = 42 的操作）"},void 0,!1,void 0,this),`
`,n("li",{children:"声明语法部分"},void 0,!1,void 0,this),`
`,n("li",{children:"多级间接寻址部分"},void 0,!1,void 0,this),`
`,n("li",{children:"C 字符串部分"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"根据反馈，将句首字母大写，以使阅读更清晰。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:'在"指针算术"中澄清了 1 == 4 表达式和 ++ 的使用。'},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"更闪亮的 CSS，特别是注释。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"增加了带翅膀的注释（示例）样式。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"在开始部分增加了图表。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"解释了数组声明语法（与指针声明语法相对）在数组部分。"},void 0,!1,void 0,this),`
`,n("p",{children:"1.0 — 2005-12-22"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`,n("li",{children:[`
`,n("p",{children:"首次公开发布。"},void 0,!1,void 0,this),`
`]},void 0,!0,void 0,this),`
`]},void 0,!0,void 0,this)]},void 0,!0,void 0,this)},void 0,!1,void 0,this)}export{p as default};
