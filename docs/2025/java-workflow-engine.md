# Java 的简单工作流引擎实现

## User

我想用java8实现一个工作流引擎。

要求
1. 不依赖三方组件的情况下
2. 这个是专用的工作流引擎，不需要有太多抽象
3. 需要实现持久化。使用 mysql 为数据库
4. 我的项目主要依赖有 spring boot 2.7、jpa

## Assistant

根据您的需求，我为您设计一个基于Spring Boot 2.7的轻量级工作流引擎实现方案：

### 1. 数据库设计（JPA Entity实现）

```java
@Entity
public class WorkflowDefinition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String version;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "workflowDefinition")
    private List<Node> nodes;
}

@Entity
public class Node {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nodeName;
    private NodeType nodeType; // START/END/TASK

    @ManyToOne
    @JoinColumn(name = "definition_id")
    private WorkflowDefinition workflowDefinition;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "sourceNode")
    private List<Transition> transitions;
}

@Entity
public class Transition {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "source_node_id")
    private Node sourceNode;

    @ManyToOne
    @JoinColumn(name = "target_node_id")
    private Node targetNode;

    private String conditionExpression;
}

@Entity
public class WorkflowInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "definition_id")
    private WorkflowDefinition workflowDefinition;

    @ManyToOne
    @JoinColumn(name = "current_node_id")
    private Node currentNode;

    private String businessKey;
    private InstanceStatus status;
}

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "instance_id")
    private WorkflowInstance instance;

    private String taskName;
    private TaskStatus status;
    private LocalDateTime createTime;
    private LocalDateTime completeTime;
}
```

### 2. Repository接口

```java
public interface WorkflowDefinitionRepository extends JpaRepository<WorkflowDefinition, Long> {
}

public interface WorkflowInstanceRepository extends JpaRepository<WorkflowInstance, Long> {
}

public interface TaskRepository extends JpaRepository<Task, Long> {
}
```

### 3. 核心服务实现

```java
@Service
@Transactional
public class WorkflowEngineService {

    @Autowired
    private WorkflowDefinitionRepository definitionRepository;

    @Autowired
    private WorkflowInstanceRepository instanceRepository;

    @Autowired
    private TaskRepository taskRepository;

    public WorkflowInstance startWorkflow(Long definitionId, String businessKey) {
        WorkflowDefinition definition = definitionRepository.findById(definitionId)
                .orElseThrow(() -> new RuntimeException("Workflow definition not found"));

        Node startNode = definition.getNodes().stream()
                .filter(n -> n.getNodeType() == NodeType.START)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Start node not found"));

        WorkflowInstance instance = new WorkflowInstance();
        instance.setWorkflowDefinition(definition);
        instance.setCurrentNode(startNode);
        instance.setStatus(InstanceStatus.RUNNING);
        instance.setBusinessKey(businessKey);

        instanceRepository.save(instance);
        createTaskForNode(instance, startNode);

        return instance;
    }

    public void completeTask(Long taskId, Map<String, Object> variables) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        WorkflowInstance instance = task.getInstance();
        Node currentNode = instance.getCurrentNode();

        // 查找符合条件的转移路线
        Transition transition = findValidTransition(currentNode, variables);

        // 移动到下一个节点
        moveToNextNode(instance, transition.getTargetNode());

        // 更新任务状态
        task.setStatus(TaskStatus.COMPLETED);
        task.setCompleteTime(LocalDateTime.now());
        taskRepository.save(task);
    }

    private void moveToNextNode(WorkflowInstance instance, Node nextNode) {
        instance.setCurrentNode(nextNode);

        if (nextNode.getNodeType() == NodeType.END) {
            instance.setStatus(InstanceStatus.COMPLETED);
        }

        instanceRepository.save(instance);
        createTaskForNode(instance, nextNode);
    }

    private void createTaskForNode(WorkflowInstance instance, Node node) {
        if (node.getNodeType() == NodeType.TASK) {
            Task task = new Task();
            task.setInstance(instance);
            task.setTaskName(node.getNodeName());
            task.setStatus(TaskStatus.PENDING);
            task.setCreateTime(LocalDateTime.now());
            taskRepository.save(task);
        }
    }

    private Transition findValidTransition(Node currentNode, Map<String, Object> variables) {
        // 这里实现简单的条件判断逻辑
        return currentNode.getTransitions().stream()
                .filter(t -> evaluateCondition(t.getConditionExpression(), variables))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("No valid transition found"));
    }

    private boolean evaluateCondition(String expression, Map<String, Object> variables) {
        // 这里实现简单的条件表达式解析
        return true; // 示例实现
    }
}
```

### 4. 配置示例（application.properties）

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/workflow
spring.datasource.username=root
spring.datasource.password=123456
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 5. 使用示例

```java
@RestController
@RequestMapping("/workflow")
public class WorkflowController {

    @Autowired
    private WorkflowEngineService workflowService;

    @PostMapping("/start")
    public WorkflowInstance start(@RequestParam Long definitionId,
                                 @RequestParam String businessKey) {
        return workflowService.startWorkflow(definitionId, businessKey);
    }

    @PostMapping("/complete")
    public void completeTask(@RequestParam Long taskId) {
        workflowService.completeTask(taskId, Collections.emptyMap());
    }
}
```

### 设计说明：

1. **状态管理**：
   - 使用NodeType区分节点类型（开始/结束/任务节点）
   - 通过Transition实现节点流转逻辑
   - 实例状态由当前节点位置决定

2. **持久化设计**：
   - 使用JPA关联关系管理流程定义
   - 每个工作流实例独立存储
   - 任务与实例关联存储

3. **扩展性考虑**：
   - 条件表达式可扩展为Groovy脚本解析
   - 可增加历史记录表跟踪流程流转
   - 可增加审批人字段实现任务分配

4. **事务管理**：
   - 使用Spring的@Transactional注解保证操作原子性
   - 关键操作包含在单一事务中

5. **异常处理**：
   - 需要自定义WorkflowException
   - 建议使用全局异常处理器

这个实现方案保持了简单性，同时提供了基本的工作流引擎功能。后续可以根据具体业务需求扩展以下功能：

1. 增加任务分配机制
2. 实现更复杂的条件表达式解析
3. 添加流程版本控制
4. 增加审批意见记录
5. 实现会签/或签等高级功能

----

- 2025-04-12 by DeepSeek R1
