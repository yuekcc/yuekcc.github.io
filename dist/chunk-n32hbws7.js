import{s}from"/dist/chunk-6k8ey1xy.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h3>Java 分层架构概念解析（以登录为例）</h3><h4>1. 核心概念说明</h4><table><thead><tr><th>类型</th><th>职责</th><th>示例内容</th></tr></thead><tbody><tr><td>Entity</td><td>与数据库表结构一一对应</td><td>User (id,username,hashed_password)</td></tr><tr><td>DAO</td><td>数据库操作接口</td><td>UserDao.findByUsername()</td></tr><tr><td>DTO</td><td>服务层与控制器层之间的数据传输对象</td><td>LoginDTO(username,rawPassword)</td></tr><tr><td>VO</td><td>返回给前端的展示数据（可能脱敏/格式化）</td><td>LoginVO(username,email,token)</td></tr></tbody></table><h4>2. 时序图</h4><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">sequenceDiagram</span></span>
<span class="line"><span style="color:#E1E4E8">    participant Frontend as 前端</span></span>
<span class="line"><span style="color:#E1E4E8">    participant Controller as LoginController</span></span>
<span class="line"><span style="color:#E1E4E8">    participant Service as UserService</span></span>
<span class="line"><span style="color:#E1E4E8">    participant DAO as UserRepository</span></span>
<span class="line"><span style="color:#E1E4E8">    participant Mapper as UserMapper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    Frontend</span><span style="color:#F97583">->></span><span style="color:#E1E4E8">Controller: POST </span><span style="color:#F97583">/</span><span style="color:#B392F0">login</span><span style="color:#E1E4E8"> (username</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">password)</span></span>
<span class="line"><span style="color:#E1E4E8">    Controller</span><span style="color:#F97583">->></span><span style="color:#E1E4E8">Service: </span><span style="color:#B392F0">login</span><span style="color:#E1E4E8">(loginDTO)</span></span>
<span class="line"><span style="color:#E1E4E8">    Service</span><span style="color:#F97583">->></span><span style="color:#E1E4E8">DAO: </span><span style="color:#B392F0">findByUsername</span><span style="color:#E1E4E8">(dto.</span><span style="color:#B392F0">username</span><span style="color:#E1E4E8">())</span></span>
<span class="line"><span style="color:#E1E4E8">    DAO</span><span style="color:#F97583">-->></span><span style="color:#E1E4E8">Service: Optional</span><span style="color:#F97583">&#x3C;</span><span style="color:#E1E4E8">UserEntity</span><span style="color:#F97583">></span></span>
<span class="line"><span style="color:#E1E4E8">    Service</span><span style="color:#F97583">->></span><span style="color:#E1E4E8">Service: 验证密码哈希</span></span>
<span class="line"><span style="color:#E1E4E8">    Service</span><span style="color:#F97583">->></span><span style="color:#E1E4E8">Service: 生成访问令牌</span></span>
<span class="line"><span style="color:#E1E4E8">    Service</span><span style="color:#F97583">->></span><span style="color:#E1E4E8">Mapper: </span><span style="color:#B392F0">toVO</span><span style="color:#E1E4E8">(entity)</span></span>
<span class="line"><span style="color:#E1E4E8">    Mapper</span><span style="color:#F97583">-->></span><span style="color:#E1E4E8">Service: UserVO</span></span>
<span class="line"><span style="color:#E1E4E8">    Service</span><span style="color:#F97583">-->></span><span style="color:#E1E4E8">Controller: UserVO</span></span>
<span class="line"><span style="color:#E1E4E8">    Controller</span><span style="color:#F97583">-->></span><span style="color:#E1E4E8">Frontend: </span><span style="color:#79B8FF">200</span><span style="color:#B392F0"> OK</span><span style="color:#E1E4E8"> (UserVO)</span></span>
<span class="line"></span></code></pre><h4>3. 代码实现（基于 Spring Boot 3.2+）</h4><h5>项目结构</h5><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">src</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">├── main</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   ├── java</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │   └── com</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">example</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       ├── controller</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       ├── dto</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       ├── entity</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       ├── repository</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       ├── service</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       ├── vo</span><span style="color:#F97583">/</span></span>
<span class="line"><span style="color:#E1E4E8">│   │       └── mapper</span><span style="color:#F97583">/</span></span>
<span class="line"></span></code></pre><h5>具体代码文件</h5><ol><li><strong>Entity（持久化层）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Data</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Table</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "users"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> UserEntity</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Column</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">unique</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">nullable</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> false</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String username;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Column</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">nullable</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> false</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String hashedPassword;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String email;</span></span>
<span class="line"><span style="color:#6A737D">    // 其他字段...</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><ol><li><strong>DAO（数据访问层）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> UserRepository</span></span>
<span class="line"><span style="color:#F97583">    extends</span><span style="color:#B392F0"> JpaRepository</span><span style="color:#E1E4E8">&#x3C;</span><span style="color:#F97583">UserEntity</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Long</span><span style="color:#E1E4E8">> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    Optional&#x3C;</span><span style="color:#F97583">UserEntity</span><span style="color:#E1E4E8">> </span><span style="color:#B392F0">findByUsername</span><span style="color:#E1E4E8">(String </span><span style="color:#FFAB70">username</span><span style="color:#E1E4E8">);</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><ol><li><strong>DTO（数据传输对象）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> record</span><span style="color:#B392F0"> LoginDTO</span><span style="color:#E1E4E8">(</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">NotBlank</span><span style="color:#E1E4E8"> String username,</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">NotBlank</span><span style="color:#E1E4E8"> @</span><span style="color:#F97583">Size</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">min</span><span style="color:#F97583">=</span><span style="color:#79B8FF">8</span><span style="color:#E1E4E8">) String rawPassword</span></span>
<span class="line"><span style="color:#E1E4E8">) {}</span></span>
<span class="line"></span></code></pre><ol><li><strong>VO（视图对象）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> record</span><span style="color:#B392F0"> LoginVO</span><span style="color:#E1E4E8">(</span></span>
<span class="line"><span style="color:#E1E4E8">    String username,</span></span>
<span class="line"><span style="color:#E1E4E8">    String email,</span></span>
<span class="line"><span style="color:#E1E4E8">    String accessToken</span></span>
<span class="line"><span style="color:#E1E4E8">) {}</span></span>
<span class="line"></span></code></pre><ol><li><strong>Mapper（转换层）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Mapper</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">componentModel</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "spring"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> UserMapper</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Mapping</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">target</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "accessToken"</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">ignore</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">    LoginVO </span><span style="color:#B392F0">toVO</span><span style="color:#E1E4E8">(UserEntity </span><span style="color:#FFAB70">entity</span><span style="color:#E1E4E8">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    default</span><span style="color:#E1E4E8"> LoginVO </span><span style="color:#B392F0">toVOWithToken</span><span style="color:#E1E4E8">(UserEntity </span><span style="color:#FFAB70">entity</span><span style="color:#E1E4E8">, String </span><span style="color:#FFAB70">token</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        LoginVO vo </span><span style="color:#F97583">=</span><span style="color:#B392F0"> toVO</span><span style="color:#E1E4E8">(entity);</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> LoginVO</span><span style="color:#E1E4E8">(</span></span>
<span class="line"><span style="color:#E1E4E8">            vo.</span><span style="color:#B392F0">username</span><span style="color:#E1E4E8">(),</span></span>
<span class="line"><span style="color:#E1E4E8">            vo.</span><span style="color:#B392F0">email</span><span style="color:#E1E4E8">(),</span></span>
<span class="line"><span style="color:#E1E4E8">            token</span></span>
<span class="line"><span style="color:#E1E4E8">        );</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><ol><li><strong>Service（业务逻辑层）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Service</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequiredArgsConstructor</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> AuthService</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> UserRepository userRepository;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> PasswordEncoder passwordEncoder;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> UserMapper userMapper;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> JwtTokenGenerator tokenGenerator;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> LoginVO </span><span style="color:#B392F0">login</span><span style="color:#E1E4E8">(LoginDTO </span><span style="color:#FFAB70">dto</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        UserEntity user </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> userRepository.</span><span style="color:#B392F0">findByUsername</span><span style="color:#E1E4E8">(dto.</span><span style="color:#B392F0">username</span><span style="color:#E1E4E8">())</span></span>
<span class="line"><span style="color:#E1E4E8">            .</span><span style="color:#B392F0">orElseThrow</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">-></span><span style="color:#F97583"> new</span><span style="color:#B392F0"> UserNotFoundException</span><span style="color:#E1E4E8">(dto.</span><span style="color:#B392F0">username</span><span style="color:#E1E4E8">()));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">!</span><span style="color:#E1E4E8">passwordEncoder.</span><span style="color:#B392F0">matches</span><span style="color:#E1E4E8">(dto.</span><span style="color:#B392F0">rawPassword</span><span style="color:#E1E4E8">(), user.</span><span style="color:#B392F0">getHashedPassword</span><span style="color:#E1E4E8">())) {</span></span>
<span class="line"><span style="color:#F97583">            throw</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> InvalidPasswordException</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        String token </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> tokenGenerator.</span><span style="color:#B392F0">generateToken</span><span style="color:#E1E4E8">(user.</span><span style="color:#B392F0">getUsername</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> userMapper.</span><span style="color:#B392F0">toVOWithToken</span><span style="color:#E1E4E8">(user, token);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><ol><li><strong>Controller（控制层）</strong></li></ol><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RestController</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequestMapping</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"/api/auth"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequiredArgsConstructor</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> AuthController</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> final</span><span style="color:#E1E4E8"> AuthService authService;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">PostMapping</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"/login"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> ResponseEntity&#x3C;</span><span style="color:#F97583">LoginVO</span><span style="color:#E1E4E8">> </span><span style="color:#B392F0">login</span><span style="color:#E1E4E8">(@</span><span style="color:#F97583">Valid</span><span style="color:#E1E4E8"> @</span><span style="color:#F97583">RequestBody</span><span style="color:#E1E4E8"> LoginDTO </span><span style="color:#FFAB70">dto</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> ResponseEntity.</span><span style="color:#B392F0">ok</span><span style="color:#E1E4E8">(authService.</span><span style="color:#B392F0">login</span><span style="color:#E1E4E8">(dto));</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h4>4. 关键实现说明</h4><ol><li><p><strong>密码安全处理</strong>：
• 使用 BCryptPasswordEncoder 进行密码哈希验证
• 原始密码不会存储和传输到服务层之外</p></li><li><p><strong>DTO 验证</strong>：
• 使用 Jakarta Validation 注解进行输入校验
• 自动触发 MethodArgumentNotValidException</p></li><li><p><strong>映射策略</strong>：
• MapStruct 在编译时生成映射实现类
• 使用<code>toVOWithToken</code>实现带令牌的 VO 转换</p></li><li><p><strong>JWT 集成</strong>：
• TokenGenerator 可自行实现或使用 Spring Security 的 JWT 库</p></li></ol><h4>5. 推荐扩展方向</h4><ol><li>在 Entity 与 DTO 之间增加一层领域对象（Domain Model）</li><li>添加 DTO 到 Entity 的逆向映射</li><li>使用 Spring Security 进行更完整的认证授权管理</li><li>在 VO 中添加 Swagger 注解完善 API 文档</li><li>实现 DTO 分组校验（如创建/更新使用不同校验规则）</li></ol><hr /><ul><li>2025-04-16 by DeepSeek R1</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
