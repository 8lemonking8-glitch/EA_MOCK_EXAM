# Enterprise Architecture 知识点梳理：例子讲解版

这门课的知识点确实很碎，因为它不是在教一个单独工具，而是在讲：

> 企业太复杂，业务和 IT 容易脱节，所以需要 Enterprise Architecture 把战略、流程、系统、数据、技术和人统一起来，让企业可理解、可沟通、可治理、可改变。

你不要按 Lecture 死背。更好的方式是先把所有知识点放进 5 个桶：

1. 为什么需要 EA
2. 管理和治理工具
3. 架构框架和方法
4. 建模语言
5. 架构沟通和解释

下面每个知识点都用一个简单例子讲。

## 0. 先用一个例子理解整门课

假设你经营一家连锁奶茶店。

现在公司有这些问题：

- 门店、外卖、会员系统、库存系统各管各的。
- 老板想做会员营销，但 IT 系统里客户数据分散在不同地方。
- 门店员工觉得新系统难用，IT 部门觉得业务需求一直变。
- 法规突然要求更严格的数据保护。
- 公司想扩张，但每开一家新店都要重新配置系统。

这时候 EA 要做的事情不是“单纯画一张图”，而是：

- 看清楚公司有哪些业务流程。
- 看清楚这些流程依赖哪些应用系统。
- 看清楚应用系统依赖哪些数据和技术基础设施。
- 让老板、门店、IT、财务、运营都能看懂和讨论。
- 帮公司决定未来怎么改系统、改流程、改组织。

所以 EA 的核心不是某个工具，而是：

> 用模型和方法把复杂企业讲清楚，并让业务和 IT 对齐。

## 1. 为什么需要 EA

### 1.1 Enterprise

Enterprise 不是简单等于“一家公司”，而是：

> 有共同目标或共同 bottom line 的组织集合。

例子：

一家大学可以是一个 enterprise，因为学校、学院、图书馆、IT 部门、招生办公室都有共同目标：教学、科研、学生服务。

一家连锁奶茶品牌也可以是 enterprise，因为总部、门店、供应商、外卖平台、会员系统都围绕同一个业务目标运作。

考试理解：

如果选项说 enterprise 只是 IT department、database system、single application，通常错。enterprise 范围更大。

### 1.2 Architecture

Architecture 不是代码、不是服务器清单、不是项目计划。

它是：

> 系统在环境中的基本结构、元素、关系和原则。

例子：

你看一栋楼的建筑图，不会看到每颗螺丝的位置，但会看到：

- 楼有几层
- 房间怎么分布
- 楼梯、电梯、承重墙在哪里
- 水电系统大概怎么走

EA 也是一样。它不关心某一行代码，而关心：

- 业务流程有哪些
- 系统之间怎么连接
- 数据从哪里来、到哪里去
- 技术基础设施支撑什么业务

考试理解：

看到 elements、relationships、principles、system in its environment，就是 architecture。

### 1.3 Enterprise Architecture

EA 是：

> 用一套 coherent principles、methods、models 来设计和实现组织结构、业务流程、信息系统和基础设施。

例子：

奶茶公司要做会员积分系统。

没有 EA 的做法：

- 市场部买一个会员 SaaS。
- 门店自己用 Excel 记客户。
- IT 部门另建数据库。
- 财务系统不知道积分抵扣。
- 最后所有系统互相对不上。

有 EA 的做法：

- 先定义会员业务流程。
- 再定义会员数据由谁维护。
- 再定义会员系统和 POS、库存、财务、外卖平台如何连接。
- 最后定义技术和安全要求。

考试理解：

EA 是 business + process + information system + infrastructure 的整体视角。

### 1.4 Stakeholder 和 Concern

Stakeholder 是：

> 对系统或架构有利益、影响或关注的人/组织。

Concern 是：

> stakeholder 关心的问题。

例子：

同一个会员系统，不同人关心不同事情：

| Stakeholder | Concern |
|---|---|
| 老板 | 能不能提升复购率 |
| 财务 | 积分抵扣怎么算账 |
| 门店员工 | 操作是不是麻烦 |
| IT 部门 | 系统能不能维护 |
| 客户 | 隐私数据是否安全 |
| 监管机构 | 是否符合法规 |

所以 EA 需要不同 views。

老板看战略视图，IT 看系统集成视图，财务看数据和规则视图，门店看流程视图。

考试理解：

stakeholder 一定和 concern、view、viewpoint 相关。

### 1.5 Alignment

Alignment 就是“对齐”。

这门课里最常见的是三种：

| 类型 | 人话 | 例子 |
|---|---|---|
| Vertical alignment | 上下对齐 | 老板战略要落到门店员工操作 |
| Horizontal alignment | 内外对齐 | 内部流程要服务外部客户 |
| Business-IT alignment | 业务和 IT 对齐 | 业务想做会员营销，IT 系统要支持会员数据 |

例子：

老板说：“我们要做高端客户会员体系。”

如果 vertical alignment 做得差：

- 老板有战略，但门店员工不知道怎么执行。
- KPI 没变，培训没做，系统也没更新。

如果 horizontal alignment 做得差：

- 内部流程很复杂，客户注册会员要填一堆信息。
- 客户体验差，外部客户不买账。

如果 business-IT alignment 做得差：

- 市场部想精准营销，但 IT 系统无法识别客户消费历史。

考试理解：

- Vertical = top strategy 到 people at the bottom
- Horizontal = internal processes 到 external customers
- Business-IT = business goals 到 IT systems/infrastructure

### 1.6 Drivers

Driver 是促使企业改变的压力或原因。

| 类型 | 例子 |
|---|---|
| Internal drivers | 内部流程混乱、战略变化、系统重复、成本太高 |
| External drivers | 新法律、竞争对手、市场变化、客户需求变化 |

例子：

奶茶公司内部发现库存系统经常缺货，这是 internal driver。

政府出台新的数据隐私法规，这是 external driver。

考试理解：

看到 law、regulation、market、competition，一般是 external driver。  
看到 process inefficiency、cost、strategy execution，一般是 internal driver。

## 2. 管理和治理工具

这些工具容易混，因为它们都像是在“管理企业”。区别在于它们问的问题不同。

| 工具 | 它问的问题 | 例子 |
|---|---|---|
| BSC | 战略怎么衡量？ | 会员战略是否提升复购率 |
| BMC | 公司怎么赚钱？ | 奶茶店靠什么价值主张吸引客户 |
| EFQM | 组织整体表现好不好？ | 门店、流程、领导力、结果是否优秀 |
| COBIT | IT 应该控制什么？ | 会员数据权限、风险、控制目标 |
| ITIL | IT 服务怎么运行？ | 系统故障如何处理 |
| CMMI | 流程成熟不成熟？ | IT 项目是否有标准流程 |

### 2.1 BSC: Balanced Scorecard

BSC 是战略管理工具。

它把战略拆成可衡量目标。

例子：

奶茶公司战略：提高会员复购率。

用 BSC 可以这样拆：

| Perspective | Mission/Objectives/Measures 例子 |
|---|---|
| Financial | 提高会员销售额，measure = 会员月销售额 |
| Customer | 提高客户满意度，measure = 会员满意度评分 |
| Internal business process | 优化点单和积分流程，measure = 平均点单时间 |
| Learning and growth | 培训员工使用会员系统，measure = 培训完成率 |

考试理解：

看到 financial、customer、internal business process、learning and growth，就是 BSC。

### 2.2 BMC: Business Model Canvas

BMC 是商业模式工具。

它问：

> 公司如何创造价值、传递价值、获得收入？

例子：奶茶店 BMC

| BMC 模块 | 奶茶店例子 |
|---|---|
| Customer segments | 学生、上班族、外卖用户 |
| Value proposition | 快速、好喝、可定制、会员优惠 |
| Channels | 门店、外卖平台、小程序 |
| Customer relationships | 会员积分、优惠券、社群 |
| Revenue streams | 奶茶销售、会员套餐 |
| Key resources | 品牌、门店、供应链、系统 |
| Key activities | 制作饮品、营销、配送 |
| Key partners | 供应商、外卖平台 |
| Cost structure | 房租、人工、原料、平台抽成 |

考试理解：

Value proposition 是中心。看到 customer segments、channels、revenue streams，基本就是 BMC。

### 2.3 EFQM

EFQM 是组织卓越/绩效改进模型。

它问：

> 这个组织整体运行得好不好？怎么持续改进？

例子：

奶茶公司不是只看“系统能不能跑”，还要看：

- 领导是否清楚方向
- 员工是否被培训
- 流程是否稳定
- 客户结果是否好
- 财务结果是否好
- 是否持续学习和改进

EFQM = 9 criteria = 5 enablers + 4 results。

考试理解：

EFQM 比 ISO 9001 更宽。ISO 9001 更偏质量管理体系，EFQM 更偏整体 performance excellence。

### 2.4 COBIT

COBIT 是 IT governance / control framework。

它问：

> IT 应该治理什么、控制什么？

例子：

奶茶公司有会员数据，COBIT 会关心：

- 谁可以访问会员数据？
- 数据泄露风险怎么控制？
- IT 投资是否支持业务目标？
- 系统变更是否有审批？
- IT 绩效是否被监控？

COBIT 五个域：

| 缩写 | 全称 | 人话 |
|---|---|---|
| EDM | Evaluate, Direct and Monitor | 高层评估、指导、监督 |
| APO | Align, Plan and Organise | 对齐、计划、组织 |
| BAI | Build, Acquire and Implement | 构建、购买、实施 |
| DSS | Deliver, Service and Support | 交付、服务、支持 |
| MEA | Monitor, Evaluate and Assess | 监控、评估、评价 |

考试理解：

看到 governance、control objectives、business risks、control needs，多半是 COBIT。

### 2.5 ITIL

ITIL 是 IT service management 的最佳实践。

它问：

> IT 服务具体怎么运行？

例子：

会员系统宕机了。

ITIL 关注：

- incident 怎么记录？
- 谁负责恢复？
- 多久必须恢复？
- 是否有 service-level agreement？
- 问题是否复盘？

考试理解：

COBIT 是 what to control。  
ITIL 是 how to run IT service。

### 2.6 CMMI

CMMI 关注 process maturity。

例子：

奶茶公司的 IT 项目一开始很混乱：

- 每个项目经理自己定流程
- 文档有时写有时不写
- 测试看心情

这就是成熟度低。

如果到了 Level 3 Defined：

- 公司有统一开发流程
- 有统一文档标准
- 项目都按组织级流程做

这时 EA 特别有用，因为 EA 本身也提供组织级标准和指导。

考试理解：

看到 maturity、capability、defined、managed，就是 CMMI。

## 3. 架构框架和方法

框架/方法不是具体画图语言，而是“怎么组织架构工作”。

### 3.1 Zachman Framework

Zachman 是分类矩阵。

例子：

如果你要描述奶茶公司，可以问：

| 问题 | 奶茶公司例子 |
|---|---|
| What | 有哪些数据：会员、订单、库存 |
| How | 有哪些流程：点单、制作、配送 |
| Where | 门店、仓库、云系统在哪里 |
| Who | 员工、客户、供应商、IT |
| When | 订单什么时候触发库存更新 |
| Why | 为什么要做会员体系 |

Zachman 的作用是帮你分类，不是告诉你一步步怎么实施。

考试理解：

Zachman = matrix / classification / What-How-Where-Who-When-Why。

### 3.2 TOGAF

TOGAF 是架构开发方法。

核心是 ADM。

例子：

奶茶公司要从老系统迁移到统一会员平台。TOGAF ADM 会让你：

1. 明确架构愿景
2. 分析业务架构
3. 分析数据、应用、技术架构
4. 找差距
5. 制定迁移计划
6. 实施和治理
7. 再迭代

TOGAF 强调 iterative，因为企业情况会变，架构也要不断调整。

考试理解：

TOGAF = ADM = iterative architecture development method。

### 3.3 MDA

MDA 是 Model-Driven Architecture。

例子：

你要做会员系统。

| 层次 | 奶茶店例子 |
|---|---|
| CIM | 业务需求：客户消费后获得积分 |
| PIM | 系统逻辑：订单产生积分，积分可抵扣 |
| PSM | 具体实现：用 Java + MySQL + 某云平台实现 |

考试理解：

CIM -> PIM -> PSM。  
从业务抽象，到平台无关模型，再到平台特定实现。

## 4. 建模语言

建模语言回答：

> 用什么符号和图来描述架构？

### 4.1 IDEF

IDEF 是一族建模语言。

| 类型 | 用途 | 奶茶店例子 |
|---|---|---|
| IDEF0 | 功能建模 | 描述“制作奶茶”这个功能需要输入、控制、机制和输出 |
| IDEF3 | 流程建模 | 描述客户点单到取餐的 workflow |
| IDEF1X | 数据建模 | 描述会员、订单、商品表之间关系 |

### 4.2 IDEF0

IDEF0 五件套：

| 元素 | 奶茶店例子 |
|---|---|
| Activity | 制作奶茶 |
| Input | 订单、茶底、珍珠 |
| Output | 做好的奶茶 |
| Control | 配方、卫生标准、折扣规则 |
| Mechanism | 员工、机器、POS 系统 |

考试理解：

看到 Activity / Input / Output / Control / Mechanism，就是 IDEF0。

### 4.3 BPMN

BPMN 用来画业务流程。

例子：

客户下单 -> 系统收款 -> 门店接单 -> 员工制作 -> 客户取餐 -> 系统更新积分

BPMN 适合表达这种流程，但不适合表达：

- 服务器部署
- 数据库物理结构
- 企业整体战略

考试理解：

BPMN = business process modelling。

### 4.4 UML

UML 更偏软件系统设计。

例子：

做会员系统时，UML 可以画：

- class diagram：Member、Order、Coupon 类之间关系
- sequence diagram：客户下单时系统调用顺序
- component diagram：会员服务、订单服务、支付服务之间关系

问题是：

业务人员不一定看得懂 UML，因为它更偏 system designers。

考试理解：

UML = software/system modelling。

### 4.5 ArchiMate

ArchiMate 是更适合 EA 的建模语言，因为它能连业务、应用、技术三层。

例子：会员积分功能

| 层 | 内容 |
|---|---|
| Business layer | 客户注册会员、消费、积分抵扣 |
| Application layer | 会员系统、订单系统、支付系统 |
| Technology layer | 云服务器、数据库、网络、安全设备 |

这三层必须对齐：

- 业务要会员积分
- 应用系统要支持积分计算
- 技术层要保证系统稳定和数据安全

考试理解：

看到 Business / Application / Technology layers，就是 ArchiMate。

### 4.6 ArchiMate migration concepts

例子：

公司现在用 Excel 管会员，未来要统一会员平台。

| 概念 | 例子 |
|---|---|
| Plateau | 当前状态：Excel + POS 分散管理 |
| Plateau | 未来状态：统一会员平台 |
| Gap | 两个状态之间缺少数据迁移、系统集成、员工培训 |
| Work package | 数据迁移项目、系统集成项目、培训项目 |
| Deliverable | 迁移后的会员数据库、接口文档、培训材料 |

考试理解：

Plateau 是某个稳定状态。Gap 是两个状态之间的差距。

## 5. 架构沟通和解释

### 5.1 View 和 Viewpoint

例子：

同一个会员系统，不同人需要不同图：

| 人 | 需要的 view |
|---|---|
| 老板 | 战略和收益视图 |
| 门店员工 | 操作流程视图 |
| IT | 系统集成视图 |
| 财务 | 数据和规则视图 |
| 安全负责人 | 权限和风险视图 |

Viewpoint 是规定这种图怎么画、怎么解释的规则。

考试理解：

View = 具体视图。  
Viewpoint = 画这种视图的规则。

### 5.2 Symbolic model 和 Semantic model

例子：

你画一个图，里面有一个框叫 Member，另一个框叫 Order。

这张图本身是 symbolic model，因为它是符号结构。

但 Member 到底是什么意思？

- 是注册过小程序的人？
- 是消费过一次的人？
- 是付费会员？

如果不定义清楚，不同部门会理解不一样。

Semantic model 就是解释这些符号到底代表什么。

考试理解：

Symbolic = 符号本身。  
Semantic = 符号的含义。

### 5.3 Architecture communication

架构沟通不是把图甩给别人，而是让 stakeholder 真正理解并接受。

知识状态：

| 状态 | 例子 |
|---|---|
| Aware | 门店知道要上新会员系统 |
| Agreed | 门店同意这个系统能解决问题 |
| Committed | 门店愿意按新流程使用系统 |

沟通方式：

| 技术 | 适合场景 |
|---|---|
| Workshop | 一小组人一起讨论和改模型 |
| Elicitation interview | 从某个人那里收集知识 |
| Validation interview | 检查模型是否符合对方理解 |
| Committing review | 多个方案中选一个并承诺 |
| Presentation | 给较大群体展示模型 |
| Mailing | 大范围分发，互动较少 |

## 6. 每节 Lecture 的 Discussion 讲解

老师说 Discussion 会出题，所以这里要单独看。

### Lecture 1 Discussion: stakeholder / enterprise / why EA

原 Discussion 方向：

- What is the meaning of stakeholder? Give example.
- Why should we consider stakeholders?
- What is the meaning of enterprise?
- Why do we need Enterprise Architecture?

人话讲解：

这组 Discussion 其实在问 EA 的起点：

> 谁关心这个架构？他们关心什么？我们为什么需要 EA？

例子：

奶茶公司上会员系统：

- 老板是 stakeholder，关心利润和复购。
- 门店员工是 stakeholder，关心系统是否好用。
- IT 是 stakeholder，关心维护和安全。
- 客户也是 stakeholder，关心隐私和体验。

如果不考虑 stakeholder：

- 老板只看收益，员工觉得难用。
- IT 只看技术，客户觉得体验差。
- 最后系统上线失败。

可能考法：

- stakeholder 是什么？
- 为什么 EA 要考虑 stakeholder concerns？
- enterprise 是否只等于 IT department？
- EA 为什么能解决 complexity 和 business-IT alignment？

标准答法：

Stakeholders have concerns. EA uses architecture descriptions, views, and viewpoints to address those concerns and improve communication.

### Lecture 2 Discussion: internal and external drivers / good EA characteristics

原 Discussion 方向：

- According to your business/project, describe internal and external drivers.
- What are the characteristics of good enterprise architecture?

人话讲解：

这组 Discussion 在问：

> 企业为什么会被迫做 EA？什么样的 EA 才算好？

例子：

奶茶公司内部驱动：

- 门店系统重复建设
- 库存数据不准
- 老板战略变成“会员化经营”
- 点单流程太慢

外部驱动：

- 新的数据隐私法规
- 竞争对手推出会员体系
- 外卖平台规则改变
- 客户更习惯线上点单

Good EA 应该：

- clear：别人看得懂
- consistent：不同模型不冲突
- business-aligned：支持业务目标
- communicable：能和不同 stakeholder 沟通
- actionable：能指导实际改变

可能考法：

- 哪个是 internal driver？
- 哪个是 external driver？
- external regulatory driver 是什么？
- good EA 的特征是什么？

标准答法：

Internal drivers come from inside the organization, such as strategy execution and operational optimization. External drivers come from outside pressures, such as regulation, competition, market and technology changes.

### Lecture 3 Discussion: ISO 9001 vs EFQM / ITIL vs COBIT

原 Discussion 方向：

- What are the differences between ISO 9001 and EFQM?
- What is the impact of ISO 9001 and EFQM on organizational performance?
- What are the differences between ITIL and COBIT?

人话讲解：

这一讲 Discussion 全是“比较题”。

#### ISO 9001 vs EFQM

例子：

奶茶公司想提升质量。

ISO 9001 更像：

> 我有没有建立质量管理体系？流程是否规范？文件是否合规？

EFQM 更像：

> 我整个组织是否优秀？领导、员工、流程、客户结果、业务结果是否持续改进？

区别：

| ISO 9001 | EFQM |
|---|---|
| 质量管理体系标准 | 组织卓越模型 |
| 更偏合规和标准化 | 更偏整体绩效和持续改进 |
| 范围较窄 | 范围更广 |

#### ITIL vs COBIT

例子：

会员系统经常宕机。

COBIT 问：

- IT 风险有没有被治理？
- 有没有控制目标？
- IT 是否支持业务目标？

ITIL 问：

- incident 怎么处理？
- service desk 怎么响应？
- SLA 是多少？
- 如何恢复服务？

区别：

| COBIT | ITIL |
|---|---|
| governance / control | service management |
| what to control | how to run service |
| 高层治理框架 | 具体服务管理实践 |

可能考法：

- EFQM 为什么比 ISO 9001 更宽？
- COBIT 和 ITIL 谁是 governance framework？
- COBIT tells what，ITIL tells how。

### Lecture 4 Discussion: TOGAF vs Zachman / BPMN vs UML vs IDEF

原 Discussion 方向：

- What are the differences between TOGAF and Zachman?
- What are the differences between BPMN, UML, and IDEF?

人话讲解：

这一讲也是比较题。

#### TOGAF vs Zachman

例子：

奶茶公司要梳理整体架构。

Zachman 帮你问：

- What 数据是什么？
- How 流程怎么做？
- Where 地点在哪里？
- Who 谁参与？
- When 什么时候发生？
- Why 为什么做？

TOGAF 帮你做：

- 先定架构愿景
- 再分析业务/数据/应用/技术架构
- 再找差距
- 再制定迁移计划
- 再治理实施

区别：

| Zachman | TOGAF |
|---|---|
| 分类矩阵 | 开发方法 |
| 帮你组织架构内容 | 帮你一步步开发架构 |
| 不强调实施过程 | ADM 是核心 |

#### BPMN vs UML vs IDEF

例子：

奶茶公司点单流程：

- BPMN：画客户点单、付款、制作、取餐流程。
- UML：画会员系统里的类、组件、调用顺序。
- IDEF0：分析“制作奶茶”这个功能的 input/output/control/mechanism。
- IDEF1X：画会员、订单、商品的数据关系。

区别：

| 语言 | 主要用途 |
|---|---|
| BPMN | 业务流程 |
| UML | 软件/系统设计 |
| IDEF0 | 功能建模 |
| IDEF3 | 流程建模 |
| IDEF1X | 数据建模 |

可能考法：

- TOGAF 和 Zachman 谁是 ADM？
- Zachman 是不是 implementation method？
- BPMN 主要是不是 business process modelling？
- UML 为什么对业务人员可能不直观？
- IDEF0 五件套是什么？

### Lecture 5 Discussion: integrating EA domains / symbolic and semantic models

原 Discussion 方向：

- How can different enterprise architecture domains be integrated?
- How can symbolic models be integrated using an architectural language?
- How can semantic models be integrated?

人话讲解：

这组 Discussion 是最抽象的，但核心很简单：

> 企业架构里有很多模型，如果它们互相不连接，就没有用。

例子：

奶茶公司有：

- BPMN 流程图：客户点单流程
- UML 系统图：会员系统组件
- 数据模型：会员表、订单表
- 技术图：服务器和数据库部署

如果这些图互相没有关系：

- 业务流程变了，IT 不知道要改哪个系统。
- 系统改了，数据模型没有更新。
- 数据库迁移了，业务部门不知道影响。

Integration 的意思不是把图贴在一起，而是：

- 用共同语言
- 定义清楚不同模型之间的关系
- 让业务、应用、数据、技术之间可以追踪
- 保持 views 之间一致

Symbolic / Semantic 例子：

图里写了 Customer。

如果市场部认为 Customer 是“关注公众号的人”，财务认为 Customer 是“付过钱的人”，那模型就会出问题。

所以需要 semantic model 明确：

> Customer 到底是什么意思？

可能考法：

- 为什么 EA domains 需要 integration？
- business-IT alignment problem 是什么？
- symbolic model 和 semantic model 区别是什么？
- view 和 viewpoint 区别是什么？

标准答法：

Different domains can be integrated by using a common architectural language, shared concepts, defined relationships, and consistency between views.

### Lecture 6 Discussion: EA communication theories / BMC mapped to ArchiMate

原 Discussion 方向：

- Choose four theories related to EA practice focusing on communication and describe them.
- Describe how the Business Model Canvas can be mapped to ArchiMate.

人话讲解：

Lecture 6 主要是两个重点：

1. EA 怎么沟通
2. ArchiMate 怎么把业务模式转成架构模型

#### EA communication

例子：

奶茶公司要上新会员平台。

一开始：

- 老板知道要做，但门店不知道为什么。
- IT 知道系统结构，但业务不懂。
- 门店担心操作麻烦。

EA communication 要让大家从：

1. Aware：知道有这个变化
2. Agreed：同意这个变化有必要
3. Committed：愿意按新方式行动

沟通方式要根据场景选：

- 想收集门店实际流程：elicitation interview
- 想确认模型是否正确：validation interview
- 想让多个部门一起改流程图：workshop
- 想让高层在几个方案中选一个：committing review
- 想向很多员工宣布新架构：presentation 或 mailing

#### BMC mapped to ArchiMate

BMC 是商业模式，ArchiMate 是架构语言。

例子：

BMC 中的 value proposition：

> 奶茶店给客户提供“快速、好喝、会员优惠”的价值。

在 ArchiMate 里可以映射到：

- Business service
- Value
- Goal
- Requirement

BMC 中的 key activities：

> 制作饮品、处理订单、会员营销。

在 ArchiMate 里可以映射到：

- Business process
- Business function

BMC 中的 key resources：

> 门店、员工、会员系统、数据。

在 ArchiMate 里可以映射到：

- Resource
- Application component
- Data object

可能考法：

- 为什么 EA communication 重要？
- Aware / Agreed / Committed 是什么？
- ArchiMate 三层是什么？
- BMC 的 value proposition 可以和 ArchiMate 哪些概念相关？
- business layer、application layer、technology layer 各管什么？

标准答法：

BMC describes business-model elements, while ArchiMate can express these elements as architecture concepts across motivation, strategy, business, application, and technology layers.

## 7. 最容易混的对比表

### BSC vs BMC

| BSC | BMC |
|---|---|
| 战略管理 | 商业模式 |
| 衡量战略执行 | 描述如何创造价值和赚钱 |
| financial/customer/internal/learning | value proposition/customer/revenue/cost |

### COBIT vs ITIL

| COBIT | ITIL |
|---|---|
| IT governance | IT service management |
| what to control | how to run service |
| 控制目标 | 最佳实践流程 |

### Zachman vs TOGAF

| Zachman | TOGAF |
|---|---|
| 分类矩阵 | 架构开发方法 |
| 把内容放格子里 | 用 ADM 做架构 |
| 不强调实施流程 | 强调 iterative process |

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

## 8. 选择题关键词判断表

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

## 9. 最后怎么背

不要一上来背所有定义。按这个顺序：

1. 先背五个桶：为什么 EA、管理治理、框架方法、建模语言、沟通解释。
2. 再背每个工具“问的问题”。
3. 最后背易混对比。

最重要一句话：

> 考试不是让你成为 TOGAF、COBIT 或 ArchiMate 专家，而是让你能判断一个概念属于哪个管理/治理/建模/沟通场景。

