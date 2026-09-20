import{s}from"/dist/chunk-sp0bb9w4.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>JAVA DDD 示例</h1><p>以下是一个基于 Spring Boot 2.7、JPA 和 JDK 8 的 DDD 示例实现，包含核心领域模型、分层架构和代码实现：</p><hr /><h3><strong>1. 项目结构（分层架构）</strong></h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">src</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">├── main</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   ├── java</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │   └── com</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       └── example</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           ├── application</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">      # 应用层（应用服务）</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   └── OrderAppService.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           ├── domain</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">           # 领域层</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   ├── model</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">        # 领域模型</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   │   ├── Order.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   │   ├── OrderItem.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   │   └── Address.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   └── service</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">      # 领域服务</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │       └── OrderService.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           ├── infrastructure</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">  # 基础设施层</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   ├── repository</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   │   └── OrderRepositoryImpl.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │   └── event</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           │       └── OrderCreatedEventPublisher.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   │           └── interfaces</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">       # 用户接口层</span></span>
<span class="line"><span style="color:#E1E4E8">│   │               └── web</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │                   └── OrderController.java</span></span>
<span class="line"><span style="color:#E1E4E8">│   └── resources</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│       └── application.yml</span></span>
<span class="line"></span></code></pre><hr /><h3><strong>2. 核心领域模型实现</strong></h3><h4><strong>2.1 实体（Entity）与聚合根</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Order.java（聚合根）</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Table</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "orders"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> Order</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Embedded</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Address address;  </span><span style="color:#6A737D">// 值对象</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">OneToMany</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">cascade</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> CascadeType.ALL, </span><span style="color:#79B8FF">orphanRemoval</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "order_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> List&#x3C;</span><span style="color:#F97583">OrderItem</span><span style="color:#E1E4E8">> items </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#E1E4E8"> ArrayList&#x3C;>();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 业务方法：添加订单项</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> addItem</span><span style="color:#E1E4E8">(String </span><span style="color:#FFAB70">productId</span><span style="color:#E1E4E8">, BigDecimal </span><span style="color:#FFAB70">price</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">int</span><span style="color:#FFAB70"> quantity</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        items.</span><span style="color:#B392F0">add</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">new</span><span style="color:#B392F0"> OrderItem</span><span style="color:#E1E4E8">(productId, price, quantity));</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 计算总金额</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> BigDecimal </span><span style="color:#B392F0">calculateTotal</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> items.</span><span style="color:#B392F0">stream</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">            .</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">(OrderItem</span><span style="color:#F97583">::</span><span style="color:#E1E4E8">getSubtotal)</span></span>
<span class="line"><span style="color:#E1E4E8">            .</span><span style="color:#B392F0">reduce</span><span style="color:#E1E4E8">(BigDecimal.ZERO, BigDecimal</span><span style="color:#F97583">::</span><span style="color:#E1E4E8">add);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// OrderItem.java（实体）</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Table</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "order_items"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> OrderItem</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String productId;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> BigDecimal price;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> int</span><span style="color:#E1E4E8"> quantity;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">    // 计算单项金额</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> BigDecimal </span><span style="color:#B392F0">getSubtotal</span><span style="color:#E1E4E8">() {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> price.</span><span style="color:#B392F0">multiply</span><span style="color:#E1E4E8">(BigDecimal.</span><span style="color:#B392F0">valueOf</span><span style="color:#E1E4E8">(quantity));</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// Address.java（值对象）</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Embeddable</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> Address</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String province;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String city;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String street;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h4><strong>2.2 领域服务</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// OrderService.java</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Service</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> OrderService</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> validateOrder</span><span style="color:#E1E4E8">(Order </span><span style="color:#FFAB70">order</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (order.</span><span style="color:#B392F0">getItems</span><span style="color:#E1E4E8">().</span><span style="color:#B392F0">isEmpty</span><span style="color:#E1E4E8">()) {</span></span>
<span class="line"><span style="color:#F97583">            throw</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> IllegalArgumentException</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"订单必须包含至少一个商品"</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><hr /><h3><strong>3. 基础设施层实现</strong></h3><h4><strong>3.1 仓储接口与实现</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// 仓储接口（领域层定义）</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> OrderRepository</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    Order </span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(Order </span><span style="color:#FFAB70">order</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">    Optional&#x3C;</span><span style="color:#F97583">Order</span><span style="color:#E1E4E8">> </span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(Long </span><span style="color:#FFAB70">id</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">// 仓储实现（基础设施层）</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Repository</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> OrderRepositoryImpl</span><span style="color:#F97583"> implements</span><span style="color:#B392F0"> OrderRepository</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">PersistenceContext</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> EntityManager entityManager;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Override</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Transactional</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> Order </span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(Order </span><span style="color:#FFAB70">order</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        entityManager.</span><span style="color:#B392F0">persist</span><span style="color:#E1E4E8">(order);</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> order;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Override</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> Optional&#x3C;</span><span style="color:#F97583">Order</span><span style="color:#E1E4E8">> </span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(Long </span><span style="color:#FFAB70">id</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> Optional.</span><span style="color:#B392F0">ofNullable</span><span style="color:#E1E4E8">(entityManager.</span><span style="color:#B392F0">find</span><span style="color:#E1E4E8">(Order.class, id));</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h4><strong>3.2 领域事件发布</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// OrderCreatedEventPublisher.java</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Component</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> OrderCreatedEventPublisher</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Autowired</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> ApplicationEventPublisher eventPublisher;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> publish</span><span style="color:#E1E4E8">(Order </span><span style="color:#FFAB70">order</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        eventPublisher.</span><span style="color:#B392F0">publishEvent</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">new</span><span style="color:#B392F0"> OrderCreatedEvent</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">, order.</span><span style="color:#B392F0">getId</span><span style="color:#E1E4E8">()));</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><hr /><h3><strong>4. 应用层与用户接口层</strong></h3><h4><strong>4.1 应用服务</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// OrderAppService.java</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Service</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequiredArgsConstructor</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> OrderAppService</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> OrderRepository orderRepository;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> OrderService orderService;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> OrderCreatedEventPublisher eventPublisher;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Transactional</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> createOrder</span><span style="color:#E1E4E8">(Address </span><span style="color:#FFAB70">address</span><span style="color:#E1E4E8">, List&#x3C;</span><span style="color:#F97583">OrderItemRequest</span><span style="color:#E1E4E8">> </span><span style="color:#FFAB70">items</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        Order order </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Order</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">        order.</span><span style="color:#B392F0">setAddress</span><span style="color:#E1E4E8">(address);</span></span>
<span class="line"><span style="color:#E1E4E8">        items.</span><span style="color:#B392F0">forEach</span><span style="color:#E1E4E8">(item </span><span style="color:#F97583">-></span></span>
<span class="line"><span style="color:#E1E4E8">            order.</span><span style="color:#B392F0">addItem</span><span style="color:#E1E4E8">(item.</span><span style="color:#B392F0">getProductId</span><span style="color:#E1E4E8">(), item.</span><span style="color:#B392F0">getPrice</span><span style="color:#E1E4E8">(), item.</span><span style="color:#B392F0">getQuantity</span><span style="color:#E1E4E8">())</span></span>
<span class="line"><span style="color:#E1E4E8">        );</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        orderService.</span><span style="color:#B392F0">validateOrder</span><span style="color:#E1E4E8">(order);</span></span>
<span class="line"><span style="color:#E1E4E8">        orderRepository.</span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(order);</span></span>
<span class="line"><span style="color:#E1E4E8">        eventPublisher.</span><span style="color:#B392F0">publish</span><span style="color:#E1E4E8">(order);  </span><span style="color:#6A737D">// 发布领域事件</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h4><strong>4.2 REST API</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#6A737D">// OrderController.java</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RestController</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequestMapping</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"/orders"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequiredArgsConstructor</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> OrderController</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> OrderAppService appService;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">PostMapping</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> ResponseEntity&#x3C;</span><span style="color:#F97583">?</span><span style="color:#E1E4E8">> </span><span style="color:#B392F0">createOrder</span><span style="color:#E1E4E8">(@</span><span style="color:#F97583">RequestBody</span><span style="color:#E1E4E8"> OrderRequest </span><span style="color:#FFAB70">request</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        appService.</span><span style="color:#B392F0">createOrder</span><span style="color:#E1E4E8">(request.</span><span style="color:#B392F0">getAddress</span><span style="color:#E1E4E8">(), request.</span><span style="color:#B392F0">getItems</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> ResponseEntity.</span><span style="color:#B392F0">ok</span><span style="color:#E1E4E8">().</span><span style="color:#B392F0">build</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><hr /><h3><strong>5. 配置与依赖</strong></h3><h4><strong>5.1 application.yml</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#85E89D">spring</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">  datasource</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">    url</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">jdbc:mysql://localhost:3306/ddd_demo</span></span>
<span class="line"><span style="color:#85E89D">    username</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">root</span></span>
<span class="line"><span style="color:#85E89D">    password</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">root</span></span>
<span class="line"><span style="color:#85E89D">    driver-class-name</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#85E89D">  jpa</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">    hibernate</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">      ddl-auto</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">update</span></span>
<span class="line"><span style="color:#85E89D">    show-sql</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span></span>
<span class="line"><span style="color:#85E89D">    properties</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">      hibernate</span><span style="color:#E1E4E8">:</span></span>
<span class="line"><span style="color:#85E89D">        dialect</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">org.hibernate.dialect.MySQL8Dialect</span></span>
<span class="line"></span></code></pre><h4><strong>5.2 Maven 依赖</strong></h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">>org.springframework.boot&#x3C;/</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">>spring-boot-starter-data-jpa&#x3C;/</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">>mysql&#x3C;/</span><span style="color:#85E89D">groupId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">>mysql-connector-java&#x3C;/</span><span style="color:#85E89D">artifactId</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#85E89D">scope</span><span style="color:#E1E4E8">>runtime&#x3C;/</span><span style="color:#85E89D">scope</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">dependency</span><span style="color:#E1E4E8">></span></span>
<span class="line"></span></code></pre><hr /><h3><strong>6. 关键设计说明</strong></h3><ol><li><p><strong>聚合根设计</strong>
• <code>Order</code>作为聚合根管理<code>OrderItem</code>的生命周期，通过<code>CascadeType.ALL</code>实现级联操作。
• 值对象<code>Address</code>使用<code>@Embeddable</code>映射到数据库表。</p></li><li><p><strong>领域事件</strong>
• 使用 Spring 的<code>ApplicationEventPublisher</code>实现事件驱动架构。</p></li><li><p><strong>事务管理</strong>
• 应用层通过<code>@Transactional</code>控制事务边界，确保业务一致性。</p></li><li><p><strong>分层解耦</strong>
• 基础设施层通过实现领域层定义的仓储接口，实现依赖倒置。</p></li></ol><hr /><h3><strong>7. 扩展建议</strong></h3><p>• <strong>CQRS 优化查询</strong>：对复杂查询可分离命令与查询模型。
• <strong>限界上下文拆分</strong>：将订单、库存拆分为独立微服务。
• <strong>集成测试</strong>：使用<code>@DataJpaTest</code>验证仓储实现。</p><p>完整代码可参考[Spring Data JPA 配置示例]。</p><hr /><ul><li>2025-04-12 by DeepSeek R1</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
