# Enterprise Architecture 知识点梳理

这门课看起来很碎，是因为它不是按一个工具从头讲到尾，而是把 Enterprise Architecture 相关的管理工具、架构框架、建模语言和沟通概念放在一起讲。

不要按 Lecture 死背。更好的方法是把所有知识点放进几个“桶”里理解。

## 一句话主线

Enterprise Architecture 这门课其实只在讲一件事：

> 企业太复杂，业务和 IT 容易脱节，所以需要一套架构方法，把战略、流程、系统、数据、技术和人统一起来，让大家能理解、沟通、治理和改变企业。

换成人话：

EA 不是画图课，而是让复杂企业变得 **可理解、可管理、可沟通、可改变**。

## 总体框架

整门课可以分成 5 个部分：

1. 为什么需要 EA
2. 管理和治理工具
3. 架构框架和方法
4. 建模语言
5. 架构沟通和解释

考试题基本也是在考你能不能判断：一个概念到底属于哪个部分。

## 1. 为什么需要 EA

这一部分回答的问题是：

> 企业为什么需要 Enterprise Architecture？

核心原因：

- 企业系统越来越复杂
- 业务和 IT 对不齐
- 不同部门各说各话
- 一个变化会影响很多流程、系统和技术
- Stakeholders 有不同 concerns，需要不同 views 来解释架构

### 必会概念

| 概念 | 人话理解 |
|---|---|
| Enterprise | 有共同目标或共同 bottom line 的组织集合，不只是 IT 部门 |
| Architecture | 系统的核心结构、元素、关系和原则 |
| Enterprise Architecture | 用原则、方法和模型统一组织、流程、信息系统和基础设施 |
| Stakeholder | 对系统或企业架构有利益/关注的人或组织 |
| Concern | stakeholder 关心的问题 |
| Alignment | 对齐，一致性 |
| Driver | 促使企业改变的事件、条件或压力 |

### Alignment 要重点背

| 类型 | 含义 |
|---|---|
| Vertical alignment | 高层战略和基层人员/执行之间的对齐 |
| Horizontal alignment | 内部流程和外部客户之间的对齐 |
| Business-IT alignment | 业务目标和 IT 系统/基础设施之间的对齐 |

记忆：

- Vertical = 上下对齐 = strategy 到 people
- Horizontal = 横向对齐 = process 到 customers

### Drivers

| 类型 | 例子 |
|---|---|
| Internal drivers | 战略变化、流程低效、系统重复、成本压力 |
| External drivers | 法律监管、市场变化、竞争压力、客户需求变化 |

考试看到 law / regulation / market / competition，一般是 external driver。

## 2. 管理和治理工具

这些工具看起来很像，因为它们都在“管理企业”，但关注点不同。

| 工具 | 它管什么 | 记忆方式 |
|---|---|---|
| BSC | 战略怎么落地和衡量 | strategy -> measures |
| BMC | 企业怎么创造价值和赚钱 | value proposition 在中心 |
| EFQM | 组织整体绩效卓越 | excellence / improvement |
| COBIT | IT 治理和控制 | what to control |
| ITIL | IT 服务管理最佳实践 | how to run IT service |
| CMMI | 流程成熟度和能力 | maturity / capability |

### BSC: Balanced Scorecard

BSC 是战略管理工具。

它回答的问题是：

> 企业战略怎么变成可衡量的目标？

四个视角：

| 英文 | 中文 |
|---|---|
| Financial | 财务 |
| Customer | 客户 |
| Internal business process | 内部业务流程 |
| Learning and growth | 学习与成长 |

每个视角下面常用三层：

1. Mission
2. Objectives
3. Measures

记忆：

> BSC = 财客内学 + mission/objectives/measures

### BMC: Business Model Canvas

BMC 是商业模式工具。

它回答的问题是：

> 企业如何创造价值、传递价值、获得收入？

核心是：

> Value proposition

常见组成：

- Customer segments
- Value propositions
- Channels
- Customer relationships
- Revenue streams
- Key resources
- Key activities
- Key partners
- Cost structure

记忆：

> BMC 中心永远先想 Value Proposition。

### EFQM

EFQM 是组织绩效卓越模型。

它回答的问题是：

> 企业整体表现如何？如何持续改进？

关键结构：

> 9 criteria = 5 enablers + 4 results

和 ISO 9001 的区别：

| ISO 9001 | EFQM |
|---|---|
| 更偏质量管理体系标准 | 更偏整体绩效卓越和持续改进 |
| 范围较窄 | 范围更广 |

### COBIT

COBIT 是 IT governance / control framework。

它回答的问题是：

> IT 应该治理什么、控制什么？

核心关键词：

- IT governance
- control objectives
- business risks
- control needs
- technical issues

COBIT 五个 process domains：

| 缩写 | 全称 |
|---|---|
| EDM | Evaluate, Direct and Monitor |
| APO | Align, Plan and Organise |
| BAI | Build, Acquire and Implement |
| DSS | Deliver, Service and Support |
| MEA | Monitor, Evaluate and Assess |

### ITIL

ITIL 是 IT service management 的 best practices。

它回答的问题是：

> IT 服务具体应该怎么运行？

常见关键词：

- Service Delivery
- Service Support
- Incident management
- Availability management
- Service-level management

### COBIT vs ITIL

这是高频易混点。

| COBIT | ITIL |
|---|---|
| IT governance | IT service management |
| what to control | how to run IT services |
| 控制目标 | 最佳实践流程 |

记忆：

> COBIT 告诉你 what to do / what to control。  
> ITIL 告诉你 how to do it。

### CMMI

CMMI 关注 process maturity and capability。

它回答的问题是：

> 一个组织的软件/工程过程成熟不成熟？

常见等级：

| Level | 含义 |
|---|---|
| Level 1 Initial | 初始、混乱 |
| Level 2 Managed | 已管理，项目层面可控 |
| Level 3 Defined | 组织级标准流程 |
| Level 4 Quantitatively Managed | 定量管理 |
| Level 5 Optimizing | 持续优化 |

EA 和 CMMI 的关系：

> 到 Level 3 Defined 及以上，组织开始需要统一标准和指南，所以 EA 更有用。

## 3. 架构框架和方法

这些东西不是“具体画图语言”，而是组织架构工作的框架或方法。

| 框架/方法 | 本质 | 考试关键词 |
|---|---|---|
| Zachman | 分类矩阵 | What / How / Where / Who / When / Why |
| TOGAF | 架构开发方法 | ADM / iterative |
| MDA | 模型驱动开发 | CIM / PIM / PSM |

### Zachman Framework

Zachman 是分类框架。

它回答的问题是：

> 企业架构内容应该如何分类和组织？

核心：

- 不是实施步骤
- 不是开发流程
- 是一个 matrix / logical structure

常见问题维度：

- What
- How
- Where
- Who
- When
- Why

优点：

- 易理解
- 覆盖企业整体
- 独立于工具和方法

缺点：

- cells 很多
- cells 之间关系不够清楚
- 实际应用可能复杂

记忆：

> Zachman = 把架构内容放进格子里。

### TOGAF

TOGAF 是架构框架加方法。

它回答的问题是：

> 企业架构应该如何一步步开发？

核心：

> ADM = Architecture Development Method

ADM 特点：

- iterative
- cyclic
- 每轮都可能重新考虑 scope、detail、time horizon 和 architecture assets

TOGAF Content Framework 四类架构：

1. Business Architecture
2. Data Architecture
3. Application Architecture
4. Technology Architecture

记忆：

> TOGAF = 有 ADM 的架构开发方法。

### MDA

MDA = Model-Driven Architecture。

它回答的问题是：

> 如何从抽象模型逐步走向具体平台实现？

三个层次：

| 缩写 | 全称 | 含义 |
|---|---|---|
| CIM | Computation-Independent Model | 计算无关，偏业务/需求 |
| PIM | Platform-Independent Model | 平台无关，描述系统但不绑定技术平台 |
| PSM | Platform-Specific Model | 平台特定，加入具体平台细节 |

记忆：

> CIM -> PIM -> PSM  
> 从业务需求，到平台无关模型，再到平台特定实现。

## 4. 建模语言

建模语言回答的问题是：

> 用什么语言/符号描述架构？

| 语言 | 主要用途 |
|---|---|
| IDEF0 | 功能建模 |
| IDEF3 | 流程建模 |
| IDEF1X | 数据建模 |
| BPMN | 业务流程建模 |
| UML | 软件/系统建模 |
| ArchiMate | 企业架构跨层建模 |

### IDEF

IDEF 是一族 enterprise modelling and analysis languages。

| 类型 | 用途 |
|---|---|
| IDEF0 | Functional modelling |
| IDEF3 | Process modelling |
| IDEF1X | Data modelling |

### IDEF0

IDEF0 五件套：

1. Activity
2. Input
3. Output
4. Control
5. Mechanism

记忆：

> Activity 在中间，Input 进来，Output 出去，Control 约束，Mechanism 执行。

### BPMN

BPMN = Business Process Modelling Notation。

它回答的问题是：

> 如何用统一符号描述业务流程？

重点：

- 强项是 business process modelling
- 不主要描述 application
- 不主要描述 technology infrastructure

### UML

UML 更偏 software/system design。

它回答的问题是：

> 软件系统的结构和行为如何建模？

常见分类：

- Structure
- Behaviour
- Implementation

注意：

UML 对系统设计人员较清楚，但业务 stakeholder 未必容易理解。

### Description languages 的共同弱点

IDEF、BPMN、UML 都有用，但都不完美。

共同问题：

- 各自只覆盖一部分领域
- 跨领域关系定义较弱
- 缺少整体 architecture vision
- 语义有时不够明确

这就是为什么后面要讲 ArchiMate。

### ArchiMate

ArchiMate 是企业架构建模语言。

它回答的问题是：

> 如何用统一语言连接业务、应用和技术？

三大核心层：

| 层 | 关注什么 |
|---|---|
| Business layer | 业务角色、业务流程、业务服务 |
| Application layer | 应用组件、应用服务、数据对象 |
| Technology layer | 节点、设备、系统软件、技术服务 |

常见概念：

| 概念 | 所属 |
|---|---|
| Business actor | Business layer |
| Business process | Business layer |
| Application component | Application layer |
| Data object | Application layer |
| Node | Technology layer |
| Device | Technology layer |

Migration concepts：

| 概念 | 含义 |
|---|---|
| Plateau | 某一阶段相对稳定的架构状态 |
| Gap | 两个 plateau 之间的差异 |
| Work package | 为实现变更而做的一组工作 |
| Deliverable | 工作包产生的具体成果 |

记忆：

> ArchiMate = Business / Application / Technology 三层对齐。

## 5. 架构沟通和解释

这是最抽象的一块，但本质很简单：

> 不同 stakeholder 看不懂同一张复杂图，所以架构需要用不同 view 回答不同 concern。

### View 和 Viewpoint

| 概念 | 人话 |
|---|---|
| View | 具体给人看的视图 |
| Viewpoint | 规定这种视图怎么画、怎么解释的规则 |

记忆：

> View 是图。  
> Viewpoint 是画图和读图的规则。

### Model

| 概念 | 人话 |
|---|---|
| Model | 对现实某一部分的抽象 |
| Symbolic model | 符号/图形/语法结构 |
| Semantic model | 符号背后的含义解释 |

记忆：

> Symbolic = 符号本身。  
> Semantic = 符号是什么意思。

### Architecture communication

架构沟通不是单纯展示图，而是让 stakeholder 形成正确理解。

知识状态可能经历：

1. Aware
2. Agreed
3. Committed

记忆：

> Aware = 知道  
> Agreed = 同意  
> Committed = 愿意按它行动

常见沟通方式：

| 技术 | 用途 |
|---|---|
| Workshop / joint modelling | 小组一起互动建模 |
| Elicitation interview | 从 informant 那里收集知识 |
| Validation interview | 检查模型是否符合对方理解 |
| Committing review | 多个方案中做选择并承诺 |
| Presentation | 向较大群体展示模型/视图 |
| Mailing | 大范围分发模型/视图，互动较少 |

## 最容易混的知识点

### BSC vs BMC

| BSC | BMC |
|---|---|
| 战略管理 | 商业模式 |
| 如何衡量战略执行 | 如何创造和获取价值 |
| Financial / Customer / Internal / Learning | Value proposition / Customer segments / Revenue streams |

### COBIT vs ITIL

| COBIT | ITIL |
|---|---|
| IT governance | IT service management |
| what to control | how to do service |
| 控制目标 | 最佳实践 |

### Zachman vs TOGAF

| Zachman | TOGAF |
|---|---|
| 分类矩阵 | 开发方法 |
| 把内容放格子里 | 用 ADM 一步步做架构 |
| 不强调实施步骤 | 强调 iterative process |

### BPMN vs UML vs ArchiMate

| BPMN | UML | ArchiMate |
|---|---|---|
| 业务流程 | 软件/系统设计 | 企业架构跨层建模 |
| process flow | software artifacts | Business/Application/Technology |

### IDEF0 vs IDEF3 vs IDEF1X

| IDEF0 | IDEF3 | IDEF1X |
|---|---|---|
| 功能建模 | 流程建模 | 数据建模 |
| Activity/Input/Output/Control/Mechanism | workflow | logical/physical data model |

## 选择题快速判断法

考试遇到题目，先看关键词属于哪个桶。

| 关键词 | 大概率答案 |
|---|---|
| financial / customer / internal process / learning | BSC |
| value proposition / revenue streams / customer segments | BMC |
| excellence / enablers / results | EFQM |
| governance / control objectives | COBIT |
| service delivery / service support / incident management | ITIL |
| maturity / capability / defined / managed | CMMI |
| What / How / Where / Who / When / Why / matrix | Zachman |
| ADM / iterative / architecture development | TOGAF |
| CIM / PIM / PSM | MDA |
| Activity / Input / Output / Control / Mechanism | IDEF0 |
| workflow / process flow | IDEF3 或 BPMN |
| data modelling / logical data model | IDEF1X |
| business process notation | BPMN |
| software system / structure / behaviour | UML |
| Business/Application/Technology layers | ArchiMate |
| stakeholder / concern / view / viewpoint | Architecture description / communication |

## 最后总结

这门课不是让你精通每一个工具，而是让你会判断：

> 这个概念属于战略管理、IT 治理、架构框架、建模语言，还是架构沟通？

只要能先分清类别，选择题就不会那么抽象。

