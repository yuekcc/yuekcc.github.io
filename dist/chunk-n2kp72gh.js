import{s}from"/dist/chunk-6k8ey1xy.js";function n(){return s("div",{class:"markdown-body",dangerouslySetInnerHTML:{__html:`<h1>Java 的简单工作流引擎实现</h1><h2>User</h2><p>我想用 java8 实现一个工作流引擎。</p><p>要求</p><ol><li>不依赖三方组件</li><li>这个是专用的工作流引擎，不需要有太多抽象</li><li>需要实现持久化。使用 mysql 为数据库</li><li>我的项目主要依赖有 spring boot 2.7、jpa</li></ol><h2>Assistant</h2><p>根据您的需求，我为您设计一个基于 Spring Boot 2.7 的轻量级工作流引擎实现方案：</p><h3>1. 数据库设计（JPA Entity 实现）</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> WorkflowDefinition</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String name;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String version;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">OneToMany</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">cascade</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> CascadeType.ALL, </span><span style="color:#79B8FF">mappedBy</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "workflowDefinition"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> List&#x3C;</span><span style="color:#F97583">Node</span><span style="color:#E1E4E8">> nodes;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> Node</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String nodeName;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> NodeType nodeType; </span><span style="color:#6A737D">// START/END/TASK</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">ManyToOne</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "definition_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> WorkflowDefinition workflowDefinition;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">OneToMany</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">cascade</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> CascadeType.ALL, </span><span style="color:#79B8FF">mappedBy</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "sourceNode"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> List&#x3C;</span><span style="color:#F97583">Transition</span><span style="color:#E1E4E8">> transitions;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> Transition</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">ManyToOne</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "source_node_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Node sourceNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">ManyToOne</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "target_node_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Node targetNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String conditionExpression;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> WorkflowInstance</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">ManyToOne</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "definition_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> WorkflowDefinition workflowDefinition;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">ManyToOne</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "current_node_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Node currentNode;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String businessKey;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> InstanceStatus status;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Entity</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> Task</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Id</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">GeneratedValue</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">strategy</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Long id;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">ManyToOne</span></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">JoinColumn</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">name</span><span style="color:#F97583"> =</span><span style="color:#9ECBFF"> "instance_id"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> WorkflowInstance instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> String taskName;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> TaskStatus status;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> LocalDateTime createTime;</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> LocalDateTime completeTime;</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>2. Repository 接口</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> WorkflowDefinitionRepository</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> JpaRepository</span><span style="color:#E1E4E8">&#x3C;</span><span style="color:#F97583">WorkflowDefinition</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Long</span><span style="color:#E1E4E8">> {</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> WorkflowInstanceRepository</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> JpaRepository</span><span style="color:#E1E4E8">&#x3C;</span><span style="color:#F97583">WorkflowInstance</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Long</span><span style="color:#E1E4E8">> {</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> TaskRepository</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> JpaRepository</span><span style="color:#E1E4E8">&#x3C;</span><span style="color:#F97583">Task</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Long</span><span style="color:#E1E4E8">> {</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>3. 核心服务实现</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Service</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">Transactional</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> WorkflowEngineService</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Autowired</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> WorkflowDefinitionRepository definitionRepository;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Autowired</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> WorkflowInstanceRepository instanceRepository;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Autowired</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> TaskRepository taskRepository;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> WorkflowInstance </span><span style="color:#B392F0">startWorkflow</span><span style="color:#E1E4E8">(Long </span><span style="color:#FFAB70">definitionId</span><span style="color:#E1E4E8">, String </span><span style="color:#FFAB70">businessKey</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        WorkflowDefinition definition </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> definitionRepository.</span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(definitionId)</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">orElseThrow</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">-></span><span style="color:#F97583"> new</span><span style="color:#B392F0"> RuntimeException</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Workflow definition not found"</span><span style="color:#E1E4E8">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        Node startNode </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> definition.</span><span style="color:#B392F0">getNodes</span><span style="color:#E1E4E8">().</span><span style="color:#B392F0">stream</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">filter</span><span style="color:#E1E4E8">(n </span><span style="color:#F97583">-></span><span style="color:#E1E4E8"> n.</span><span style="color:#B392F0">getNodeType</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">==</span><span style="color:#E1E4E8"> NodeType.START)</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">findFirst</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">orElseThrow</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">-></span><span style="color:#F97583"> new</span><span style="color:#B392F0"> RuntimeException</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Start node not found"</span><span style="color:#E1E4E8">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        WorkflowInstance instance </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> WorkflowInstance</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">        instance.</span><span style="color:#B392F0">setWorkflowDefinition</span><span style="color:#E1E4E8">(definition);</span></span>
<span class="line"><span style="color:#E1E4E8">        instance.</span><span style="color:#B392F0">setCurrentNode</span><span style="color:#E1E4E8">(startNode);</span></span>
<span class="line"><span style="color:#E1E4E8">        instance.</span><span style="color:#B392F0">setStatus</span><span style="color:#E1E4E8">(InstanceStatus.RUNNING);</span></span>
<span class="line"><span style="color:#E1E4E8">        instance.</span><span style="color:#B392F0">setBusinessKey</span><span style="color:#E1E4E8">(businessKey);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        instanceRepository.</span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(instance);</span></span>
<span class="line"><span style="color:#B392F0">        createTaskForNode</span><span style="color:#E1E4E8">(instance, startNode);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> instance;</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> completeTask</span><span style="color:#E1E4E8">(Long </span><span style="color:#FFAB70">taskId</span><span style="color:#E1E4E8">, Map&#x3C;</span><span style="color:#F97583">String</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Object</span><span style="color:#E1E4E8">> </span><span style="color:#FFAB70">variables</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        Task task </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> taskRepository.</span><span style="color:#B392F0">findById</span><span style="color:#E1E4E8">(taskId)</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">orElseThrow</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">-></span><span style="color:#F97583"> new</span><span style="color:#B392F0"> RuntimeException</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"Task not found"</span><span style="color:#E1E4E8">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        WorkflowInstance instance </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> task.</span><span style="color:#B392F0">getInstance</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">        Node currentNode </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> instance.</span><span style="color:#B392F0">getCurrentNode</span><span style="color:#E1E4E8">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 查找符合条件的转移路线</span></span>
<span class="line"><span style="color:#E1E4E8">        Transition transition </span><span style="color:#F97583">=</span><span style="color:#B392F0"> findValidTransition</span><span style="color:#E1E4E8">(currentNode, variables);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 移动到下一个节点</span></span>
<span class="line"><span style="color:#B392F0">        moveToNextNode</span><span style="color:#E1E4E8">(instance, transition.</span><span style="color:#B392F0">getTargetNode</span><span style="color:#E1E4E8">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D">        // 更新任务状态</span></span>
<span class="line"><span style="color:#E1E4E8">        task.</span><span style="color:#B392F0">setStatus</span><span style="color:#E1E4E8">(TaskStatus.COMPLETED);</span></span>
<span class="line"><span style="color:#E1E4E8">        task.</span><span style="color:#B392F0">setCompleteTime</span><span style="color:#E1E4E8">(LocalDateTime.</span><span style="color:#B392F0">now</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#E1E4E8">        taskRepository.</span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(task);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> moveToNextNode</span><span style="color:#E1E4E8">(WorkflowInstance </span><span style="color:#FFAB70">instance</span><span style="color:#E1E4E8">, Node </span><span style="color:#FFAB70">nextNode</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        instance.</span><span style="color:#B392F0">setCurrentNode</span><span style="color:#E1E4E8">(nextNode);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (nextNode.</span><span style="color:#B392F0">getNodeType</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">==</span><span style="color:#E1E4E8"> NodeType.END) {</span></span>
<span class="line"><span style="color:#E1E4E8">            instance.</span><span style="color:#B392F0">setStatus</span><span style="color:#E1E4E8">(InstanceStatus.COMPLETED);</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">        instanceRepository.</span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(instance);</span></span>
<span class="line"><span style="color:#B392F0">        createTaskForNode</span><span style="color:#E1E4E8">(instance, nextNode);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> createTaskForNode</span><span style="color:#E1E4E8">(WorkflowInstance </span><span style="color:#FFAB70">instance</span><span style="color:#E1E4E8">, Node </span><span style="color:#FFAB70">node</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (node.</span><span style="color:#B392F0">getNodeType</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">==</span><span style="color:#E1E4E8"> NodeType.TASK) {</span></span>
<span class="line"><span style="color:#E1E4E8">            Task task </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Task</span><span style="color:#E1E4E8">();</span></span>
<span class="line"><span style="color:#E1E4E8">            task.</span><span style="color:#B392F0">setInstance</span><span style="color:#E1E4E8">(instance);</span></span>
<span class="line"><span style="color:#E1E4E8">            task.</span><span style="color:#B392F0">setTaskName</span><span style="color:#E1E4E8">(node.</span><span style="color:#B392F0">getNodeName</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#E1E4E8">            task.</span><span style="color:#B392F0">setStatus</span><span style="color:#E1E4E8">(TaskStatus.PENDING);</span></span>
<span class="line"><span style="color:#E1E4E8">            task.</span><span style="color:#B392F0">setCreateTime</span><span style="color:#E1E4E8">(LocalDateTime.</span><span style="color:#B392F0">now</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#E1E4E8">            taskRepository.</span><span style="color:#B392F0">save</span><span style="color:#E1E4E8">(task);</span></span>
<span class="line"><span style="color:#E1E4E8">        }</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> Transition </span><span style="color:#B392F0">findValidTransition</span><span style="color:#E1E4E8">(Node </span><span style="color:#FFAB70">currentNode</span><span style="color:#E1E4E8">, Map&#x3C;</span><span style="color:#F97583">String</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Object</span><span style="color:#E1E4E8">> </span><span style="color:#FFAB70">variables</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6A737D">        // 这里实现简单的条件判断逻辑</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> currentNode.</span><span style="color:#B392F0">getTransitions</span><span style="color:#E1E4E8">().</span><span style="color:#B392F0">stream</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">filter</span><span style="color:#E1E4E8">(t </span><span style="color:#F97583">-></span><span style="color:#B392F0"> evaluateCondition</span><span style="color:#E1E4E8">(t.</span><span style="color:#B392F0">getConditionExpression</span><span style="color:#E1E4E8">(), variables))</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">findFirst</span><span style="color:#E1E4E8">()</span></span>
<span class="line"><span style="color:#E1E4E8">                .</span><span style="color:#B392F0">orElseThrow</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">-></span><span style="color:#F97583"> new</span><span style="color:#B392F0"> RuntimeException</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"No valid transition found"</span><span style="color:#E1E4E8">));</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#F97583"> boolean</span><span style="color:#B392F0"> evaluateCondition</span><span style="color:#E1E4E8">(String </span><span style="color:#FFAB70">expression</span><span style="color:#E1E4E8">, Map&#x3C;</span><span style="color:#F97583">String</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">Object</span><span style="color:#E1E4E8">> </span><span style="color:#FFAB70">variables</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#6A737D">        // 这里实现简单的条件表达式解析</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#79B8FF"> true</span><span style="color:#E1E4E8">; </span><span style="color:#6A737D">// 示例实现</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>4. 配置示例（application.properties）</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#F97583">spring.datasource.url</span><span style="color:#E1E4E8">=jdbc:mysql://localhost:3306/workflow</span></span>
<span class="line"><span style="color:#F97583">spring.datasource.username</span><span style="color:#E1E4E8">=root</span></span>
<span class="line"><span style="color:#F97583">spring.datasource.password</span><span style="color:#E1E4E8">=123456</span></span>
<span class="line"><span style="color:#F97583">spring.jpa.hibernate.ddl-auto</span><span style="color:#E1E4E8">=update</span></span>
<span class="line"><span style="color:#F97583">spring.jpa.show-sql</span><span style="color:#E1E4E8">=true</span></span>
<span class="line"></span></code></pre><h3>5. 使用示例</h3><pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RestController</span></span>
<span class="line"><span style="color:#E1E4E8">@</span><span style="color:#F97583">RequestMapping</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"/workflow"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">public</span><span style="color:#F97583"> class</span><span style="color:#B392F0"> WorkflowController</span><span style="color:#E1E4E8"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">Autowired</span></span>
<span class="line"><span style="color:#F97583">    private</span><span style="color:#E1E4E8"> WorkflowEngineService workflowService;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">PostMapping</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"/start"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#E1E4E8"> WorkflowInstance </span><span style="color:#B392F0">start</span><span style="color:#E1E4E8">(@</span><span style="color:#F97583">RequestParam</span><span style="color:#E1E4E8"> Long </span><span style="color:#FFAB70">definitionId</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">                                 @</span><span style="color:#F97583">RequestParam</span><span style="color:#E1E4E8"> String </span><span style="color:#FFAB70">businessKey</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> workflowService.</span><span style="color:#B392F0">startWorkflow</span><span style="color:#E1E4E8">(definitionId, businessKey);</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">    @</span><span style="color:#F97583">PostMapping</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"/complete"</span><span style="color:#E1E4E8">)</span></span>
<span class="line"><span style="color:#F97583">    public</span><span style="color:#F97583"> void</span><span style="color:#B392F0"> completeTask</span><span style="color:#E1E4E8">(@</span><span style="color:#F97583">RequestParam</span><span style="color:#E1E4E8"> Long </span><span style="color:#FFAB70">taskId</span><span style="color:#E1E4E8">) {</span></span>
<span class="line"><span style="color:#E1E4E8">        workflowService.</span><span style="color:#B392F0">completeTask</span><span style="color:#E1E4E8">(taskId, Collections.</span><span style="color:#B392F0">emptyMap</span><span style="color:#E1E4E8">());</span></span>
<span class="line"><span style="color:#E1E4E8">    }</span></span>
<span class="line"><span style="color:#E1E4E8">}</span></span>
<span class="line"></span></code></pre><h3>设计说明：</h3><ol><li><p><strong>状态管理</strong>：</p><ul><li>使用 NodeType 区分节点类型（开始/结束/任务节点）</li><li>通过 Transition 实现节点流转逻辑</li><li>实例状态由当前节点位置决定</li></ul></li><li><p><strong>持久化设计</strong>：</p><ul><li>使用 JPA 关联关系管理流程定义</li><li>每个工作流实例独立存储</li><li>任务与实例关联存储</li></ul></li><li><p><strong>扩展性考虑</strong>：</p><ul><li>条件表达式可扩展为 Groovy 脚本解析</li><li>可增加历史记录表跟踪流程流转</li><li>可增加审批人字段实现任务分配</li></ul></li><li><p><strong>事务管理</strong>：</p><ul><li>使用 Spring 的@Transactional 注解保证操作原子性</li><li>关键操作包含在单一事务中</li></ul></li><li><p><strong>异常处理</strong>：</p><ul><li>需要自定义 WorkflowException</li><li>建议使用全局异常处理器</li></ul></li></ol><p>这个实现方案保持了简单性，同时提供了基本的工作流引擎功能。后续可以根据具体业务需求扩展以下功能：</p><ol><li>增加任务分配机制</li><li>实现更复杂的条件表达式解析</li><li>添加流程版本控制</li><li>增加审批意见记录</li><li>实现会签/或签等高级功能</li></ol><hr /><ul><li>2025-04-12 by DeepSeek R1</li></ul>`}},void 0,!1,void 0,this)}export{n as default};
