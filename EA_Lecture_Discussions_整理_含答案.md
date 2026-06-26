# EA Lecture Discussions 整理（中文讲解版，关键名词保留 English）

说明：

- 本文档整理 `Lecture1-Azadeh.pdf` 到 `Lecture6-Azadeh.pdf` 中所有 `Discussion`。
- 已核对：每个 Lecture 2 个 Discussion，共 **12 个**。
- `L1 p10` 这类信息只作为复习定位，不要当成正式考试题干背。
- 全文以中文解释为主，但关键名词和概念保留 English，方便你考试时识别英文题目。

---

## 目录

| 编号 | 对应位置 | Discussion 主题 |
|---|---|---|
| 1 | L1 p10 | Stakeholder / Enterprise |
| 2 | L1 p16 | Why Enterprise Architecture |
| 3 | L2 p13 | Internal / External Drivers |
| 4 | L2 p28 | Good Enterprise Architecture |
| 5 | L3 p10 | ISO 9001 vs EFQM |
| 6 | L3 p18 | ITIL vs COBIT |
| 7 | L4 p6 | TOGAF vs Zachman |
| 8 | L4 p20 | BPMN vs UML vs IDEF |
| 9 | L5 p11 | Integrating EA Domains |
| 10 | L5 p21 | Symbolic / Semantic Integration |
| 11 | L6 p14 | Communication-focused EA Theories |
| 12 | L6 p54 | Business Model Canvas to ArchiMate |

---

## 1. Stakeholder / Enterprise

**对应位置：L1 p10**

### 原始 Discussion

What is the meaning of stakeholder? (with example)  
Why should we consider it?  
What is the meaning of enterprise?

### 题目意思

问你三个概念：

- 什么是 `stakeholder`？请举例。
- 为什么做 EA 时要考虑 `stakeholder`？
- 什么是 `enterprise`？

### 答案

`Stakeholder` 是指对某个 system、project、architecture 或 enterprise change 有利益、影响、责任或关注的人/组织。

例子：

| Stakeholder | 典型 concern |
|---|---|
| CEO / senior management | architecture 是否支持 business strategy，是否降低 cost |
| Business department | business process 是否更高效 |
| IT department | system 是否 maintainable、secure、easy to integrate |
| Employees | new system 是否好用，是否影响日常工作 |
| Customers | service 是否方便，data 是否安全 |
| Regulators | 是否 comply with laws and regulations |

我们需要考虑 `stakeholder`，因为 EA 不是只给 IT 人看的。不同 `stakeholder` 有不同的 `concerns`，所以 architecture description 需要提供不同的 `views` 和 `viewpoints`。如果忽略 stakeholder，architecture 可能技术上正确，但业务上无法接受，也很难落地。

`Enterprise` 是有共同目标或共同 `bottom line` 的组织整体。它可以是一家公司、一个部门、一个 university、一个 government agency，或者多个合作组织组成的整体。`Enterprise` 不等于单个 software system，也不等于 IT department，它包括 people、business process、information、technology 和 operations。

### 考试版简答

`Stakeholder` is anyone who has an interest in or is affected by the architecture. We should consider stakeholders because they have different `concerns`, which should be addressed by suitable `views`. An `enterprise` is an organizational whole with shared goals, including people, business, information, technology, and operations.

### 速记

- `stakeholder` = 被 architecture 影响、能影响 architecture、或关心 architecture 结果的人/组织。
- `concern` = stakeholder 关心的问题。
- `enterprise` = 有共同目标的组织整体，不只是 IT system。

---

## 2. Why Enterprise Architecture

**对应位置：L1 p16**

### 原始 Discussion

According the below papers describe why do we need Enterprise Architecture?

- Shanks et al. (2018), *Achieving benefits with enterprise architecture*.
- van de Wetering et al. (2021), *The role of enterprise architecture for digital transformations*.
- Ross (2006), *Enterprise architecture: Driving business benefits from IT*.

### 题目意思

问：为什么企业需要 `Enterprise Architecture (EA)`？

### 答案

我们需要 `Enterprise Architecture (EA)`，主要因为现代 organization 太复杂，而且 business 和 IT 容易脱节。EA 用 principles、methods、models 和 views，把 enterprise 的 strategy、business processes、information systems、data 和 technology infrastructure 组织成一个 `coherent whole`。

主要原因：

1. **Managing complexity**  
   大型 organization 有很多 processes、applications、databases、technologies 和 stakeholders。EA 帮助企业看清楚这些元素以及它们之间的 relationships。

2. **Improving business-IT alignment**  
   EA 帮助 IT systems、data 和 infrastructure 支持 business strategy，而不是各部门各建各的系统。

3. **Improving communication**  
   EA 提供共同的 models、concepts 和 views，让 management、business units、IT teams 和 external partners 能围绕同一套 enterprise structure 沟通。

4. **Supporting digital transformation**  
   Digital transformation 不是单纯买新系统，而是 business model、process、data、application 和 technology 的整体变化。EA 可以帮助规划和控制这种变化。

5. **Increasing business value from IT**  
   EA 可以减少 duplicated systems，帮助做更好的 IT investment decisions，提高 flexibility，并让 technology 产生更明确的 business value。

6. **Supporting governance and compliance**  
   EA 让 organization 更清楚自己的 structure、systems 和 data flows，有助于 regulation、auditing、risk management 和 decision-making。

### 考试版简答

We need `Enterprise Architecture` because organizations are complex and business and IT are often poorly aligned. EA provides principles, methods, models and views to describe the enterprise as a `coherent whole`, improve stakeholder communication, align IT with business strategy, support digital transformation, reduce duplication, and guide controlled enterprise change.

### 速记

EA 主要解决：

- `system complexity`
- `poor business-IT alignment`
- `stakeholder communication`
- `controlled enterprise change`

---

## 3. Internal / External Drivers

**对应位置：L2 p13**

### 原始 Discussion

According to your business (project) describe what are the internal and external drivers?

### 题目意思

根据你的 business / project，说明有哪些 `internal drivers` 和 `external drivers`。

### 答案

`Driver` 是推动 enterprise 改变 goals、objectives、business activities 或 technical solutions 的事件、条件或压力。

`Internal drivers` 来自 organization 内部，通常和 strategy execution、cost、process、organization、data 或 system efficiency 有关。

常见 `internal drivers`：

- business process inefficient，流程效率低。
- IT cost 太高。
- duplicated systems 或 duplicated data。
- poor data quality。
- new business strategy。
- 需要 standardization。
- high staff turnover。

`External drivers` 来自 organization 外部，通常和 laws、regulations、market change、competition、customers 或 technology trends 有关。

常见 `external drivers`：

- new law 或 regulatory requirement。
- competitive pressure。
- changing customer expectations。
- market / economic changes。
- new technology opportunities。
- compliance 或 audit requirements。

项目例子：如果项目是 campus food ordering system：

`Internal drivers`：

- 高峰期 ordering process 慢。
- order、inventory、payment data 分散。
- management 想提高 operational efficiency。

`External drivers`：

- students 期待 mobile ordering 和 online payment。
- competing food services 提供更好的 digital experience。
- payment 和 personal data 需要符合 privacy / security requirements。

### 考试版简答

`Internal drivers` are pressures from inside the organization, such as inefficient processes, high cost, duplicated systems, poor data quality, or strategy changes. `External drivers` are pressures from outside the organization, such as new laws, regulations, market changes, competition, customer expectations, or technology trends.

### 速记

- `internal driver` = 企业内部问题或战略需要。
- `external driver` = law、regulation、market、competition、customer、technology。
- 看到 `law / act / regulation / compliance`，基本就是 `external regulatory driver`。

---

## 4. Good Enterprise Architecture

**对应位置：L2 p28**

### 原始 Discussion

According the below paper describe what are the characteristics of good enterprise architecture?

- Khayami (2011), *Qualitative characteristics of enterprise architecture*.

### 题目意思

问：好的 `Enterprise Architecture` 应该具备哪些特征？

### 答案

好的 `Enterprise Architecture` 不只是画图，而是能够帮助 organization 理解、沟通、分析、治理和改变 enterprise。

重要 characteristics：

1. **Alignment**  
   EA 应该让 business strategy、business processes、information systems、data 和 technology infrastructure 对齐。

2. **Completeness**  
   EA 应覆盖关键的 business、application、data 和 technology elements，而不是只描述某一个孤立 system。

3. **Consistency**  
   不同 models 和 views 之间不能互相矛盾。例如 business process 中用到的 data object，应该能和相关 application 或 database 对应起来。

4. **Clarity / Understandability**  
   architecture description 应该让目标 stakeholder 看得懂。management 和 IT specialists 需要的 detail level 不一样。

5. **Traceability**  
   EA 应该能追踪从 strategic goals 到 business processes、applications、data、technology implementation 的关系。

6. **Flexibility / Adaptability**  
   EA 应支持未来 strategy、market、technology 和 organization needs 的变化。

7. **Reusability**  
   EA 应促进 principles、services、components、standards 和 models 的复用。

8. **Maintainability**  
   EA 应持续更新，反映 current state 和 target state。

9. **Governance support**  
   EA 应支持 decision-making、risk control、impact analysis 和 migration planning。

### 考试版简答

A good `Enterprise Architecture` should be aligned with business strategy, complete enough to cover key domains, consistent across views, understandable for stakeholders, traceable from goals to implementation, flexible for change, reusable, maintainable, and useful for governance and decision-making.

### 速记

Good EA = `aligned + complete + consistent + understandable + traceable + adaptable`。

---

## 5. ISO 9001 vs EFQM

**对应位置：L3 p10**

### 原始 Discussion

According to the below paper describe:

1. What are the differences between ISO 9001 standard and the EFQM model?
2. What is the impact of the ISO 9001 standard and the EFQM model on the organisations' performance?

### 题目意思

问两件事：

- `ISO 9001` 和 `EFQM` 有什么区别？
- 它们对 organization performance 有什么影响？

### 答案

### 5.1 ISO 9001 和 EFQM 的区别

| 对比点 | ISO 9001 | EFQM |
|---|---|---|
| 类型 | quality management system standard | organizational excellence model |
| 范围 | 更关注 quality management processes | 更宽，关注 overall organizational performance |
| 主要用途 | certification 和 quality assurance | self-assessment、benchmarking、improvement、excellence |
| 重点 | standardized processes 和 customer requirements | leadership、strategy、people、partnerships、processes、results |
| 课程关键词 | quality management standard | 5 enablers + 4 results |

`ISO 9001` 是可以 certification 的 quality management standard，重点是 organization 是否建立并执行了 quality management system。

`EFQM` 比 ISO 9001 更宽，是用于评估和改进 organization overall performance 的 excellence model。它有 9 个 criteria：5 个 `enablers` 描述 organization 做了什么，4 个 `results` 描述 organization 实现了什么。

### 5.2 对 performance 的影响

`ISO 9001` 可以：

- standardize processes；
- improve quality management；
- improve documentation and process control；
- increase customer and partner confidence；
- 如果认真执行，可以支持 continuous improvement。

`EFQM` 可以：

- 支持 organization-wide performance assessment；
- 推动 continuous improvement、learning 和 innovation；
- 改善 leadership、strategy、people、partnerships 和 process management；
- 支持 benchmarking 和 performance excellence。

两者都可以提升 performance，但真实效果取决于 organization 怎么用。如果只是为了 certification 或 image，效果有限；如果用于真正的 internal improvement，效果会更明显。

### 考试版简答

`ISO 9001` is a certifiable quality management standard mainly focused on standardized processes and quality assurance. `EFQM` is broader and works as an excellence model for assessing and improving overall organizational performance. Both can improve performance, but the impact is stronger when they are used for genuine internal improvement rather than only for external certification or image.

### 速记

- `ISO 9001` = quality management standard / certification。
- `EFQM` = excellence model / 5 enablers + 4 results / continuous improvement。

---

## 6. ITIL vs COBIT

**对应位置：L3 p18**

### 原始 Discussion

According to the below paper (link) describe what are the differences between ITIL and COBIT?

### 题目意思

问：`ITIL` 和 `COBIT` 有什么区别？

### 答案

| 对比点 | COBIT | ITIL |
|---|---|---|
| 主要关注 | IT governance and control | IT service management |
| 核心问题 | IT 应该 govern 和 control 什么？ | IT services 应该如何 deliver 和 support？ |
| 视角 | 更 top-down，更 management-oriented | 更 operational，更 service-oriented |
| 关键词 | governance、control objectives、risk、alignment | service delivery、service support、incident、change、service desk |
| 课程说法 | COBIT tells what to control | ITIL explains how to run IT services |

`COBIT` 关注 IT governance。它帮助 organization 让 IT 和 business objectives 对齐，管理 IT risks，定义 control objectives，并 monitor IT performance。

`ITIL` 关注 IT service management。它提供 IT services 的 delivery 和 support 最佳实践，例如 incident management、problem management、change management、service desk、availability management 和 capacity management。

二者是 complementary。`COBIT` 给出高层 governance 和 control objectives，`ITIL` 提供实际 service management processes 来实现其中一部分目标。

### 考试版简答

`COBIT` is an IT governance and control framework. It defines what should be governed and controlled to align IT with business objectives and manage risks. `ITIL` is a set of best practices for IT service management. It explains how IT services should be delivered and supported. COBIT is more top-down and governance-oriented, while ITIL is more service-management-oriented.

### 速记

- `COBIT` = what to control。
- `ITIL` = how to run IT services。

---

## 7. TOGAF vs Zachman

**对应位置：L4 p6**

### 原始 Discussion

According to the below papers (links) describe what are the differences between TOGAF and Zachman?

### 题目意思

问：`TOGAF` 和 `Zachman Framework` 有什么区别？

### 答案

| 对比点 | Zachman Framework | TOGAF |
|---|---|---|
| 核心定位 | classification framework / taxonomy | architecture development framework and method |
| 主要回答 | What should be described? | How should architecture be developed and governed? |
| 结构 | questions + perspectives 的 matrix | ADM cycle、guidelines、governance、artifacts |
| 强项 | organizing architecture descriptions | guiding architecture development work |
| 是否是 step-by-step method | No | Yes，核心是 ADM |
| 典型用途 | 检查 architecture descriptions 是否完整 | 执行 EA projects 和 architecture governance |

`Zachman Framework` 更像一个 classification matrix。它用不同 perspectives 和 questions（What、How、Where、Who、When、Why）组织 architecture descriptions，帮助检查 enterprise 的重要方面是否都被描述了。

`TOGAF` 更偏 method。它的核心是 `ADM (Architecture Development Method)`，是一个 iterative method，用来 develop 和 manage enterprise architecture。TOGAF 覆盖 architecture vision、business architecture、information systems architecture、technology architecture、migration planning、implementation governance 和 architecture change management。

二者可以 complementary：`Zachman` 帮你看“要描述什么”，`TOGAF` 帮你做“怎么开发和治理 architecture”。

### 考试版简答

`Zachman` is a classification framework for organizing architecture descriptions across different perspectives and questions. `TOGAF` is a method-oriented enterprise architecture framework whose core is the `ADM` cycle. Zachman focuses on what to describe; TOGAF focuses on how to develop and govern enterprise architecture.

### 速记

- `Zachman` = classification matrix。
- `TOGAF` = ADM method。

---

## 8. BPMN vs UML vs IDEF

**对应位置：L4 p20**

### 原始 Discussion

According to the below paper describe what are the differences between BPMN, UML, and IDEF?

### 题目意思

问：`BPMN`、`UML` 和 `IDEF` 有什么区别？

### 答案

| Language / Method | 主要用途 | 典型概念 | 课程关键词 |
|---|---|---|---|
| BPMN | business process modelling | activities、events、gateways、pools、lanes、message flows | business process flow |
| UML | software system modelling | class、use case、sequence、state、activity、component、deployment diagrams | software system structure / behavior |
| IDEF | enterprise modelling methods family | IDEF0、IDEF3、IDEF1X | function / process / data |

`BPMN` 主要用于 business process modelling。它适合描述 process flow、activities、events、decision points、roles 和 participants 之间的 message exchanges。

`UML` 主要用于 software system modelling。它包括 structural diagrams、behavioral diagrams 和 implementation diagrams，适合描述 classes、objects、interactions、states、components 和 deployment。

`IDEF` 是一组 modelling methods：

- `IDEF0`：functional modelling。用 activity、input、output、control、mechanism 描述功能。
- `IDEF3`：process description。描述 workflow、process flow、unit of behavior 和 object state transition。
- `IDEF1X`：data modelling。描述 data entities 和 relationships。

这三者都有用，但没有一个能单独完整覆盖所有 EA domains。它们在 cross-domain relations、formal semantics，以及 business / application / technology integration 方面都有局限。

### 考试版简答

`BPMN` is mainly for modelling business process flows. `UML` is mainly for modelling software systems, including their structure, behavior and implementation. `IDEF` is a family of enterprise modelling methods: `IDEF0` for functions, `IDEF3` for process descriptions, and `IDEF1X` for data models. They are useful in their own areas, but none of them fully covers all enterprise architecture domains and cross-domain relations.

### 速记

- `BPMN` = business process。
- `UML` = software system。
- `IDEF0` = function。
- `IDEF3` = process。
- `IDEF1X` = data。

---

## 9. Integrating EA Domains

**对应位置：L5 p11**

### 原始 Discussion

According to the below paper describe how different enterprise architecture domains can be integrated?

### 题目意思

问：不同 `EA domains` 应该如何 integration？

### 答案

不同 `EA domains`，例如 business domain、application domain、data domain、technology domain，往往使用不同的 models、languages 和 concepts。这会带来 integration problem：一个 domain 里的概念和另一个 domain 里的概念怎么关联，并不总是清楚。

一种方法是使用 `ontology` 来整合多个 enterprise architecture domains。

主要思路：

1. **Create a shared semantic basis**  
   `Ontology` 用形式化方式定义 concepts、relationships 和 rules，让不同 domains 有共同的 meaning structure。

2. **Use domain-independent and domain-specific ontologies**  
   `Domain-independent ontology` 描述通用 architecture concepts。`Domain-specific ontologies` 描述特定 domain 的概念，例如 business processes、applications、technology 或 sensors。

3. **Define mappings between concepts**  
   把不同 domains 的 concepts 联系起来。例如 business process 被 application service 支持，application service 由 application component 实现，application component 运行在 technology node 上。

4. **Support traceability**  
   Ontology-based mappings 可以追踪从 business goals 到 processes、applications、data 和 technology 的关系。

5. **Support consistency checking**  
   因为 ontology 有 formal semantics，可以用 reasoning 检查 contradictions、missing relationships 或 inconsistent models。

6. **Support cross-domain analysis**  
   可以回答跨 domain 问题，例如：如果一个 application 被移除，会影响哪些 business processes？如果一个 technology node failure，会影响哪些 services？

### 考试版简答

Different EA domains can be integrated by using `ontologies` as a shared formal semantic basis. A domain-independent ontology can define general architecture concepts, while domain-specific ontologies describe particular domains. Mappings between these ontologies make concepts traceable across business, application and technology domains, enabling consistency checking, reasoning and cross-domain impact analysis.

### 速记

`Ontology integration` = shared semantics + mappings + traceability + consistency checking。

---

## 10. Symbolic / Semantic Integration

**对应位置：L5 p21**

### 原始 Discussion

According to the below paper describe how symbolic models can be integrated using an architectural language, how integrated models can be updated using the distinction between symbolic models and their visualization, and how semantic models can be integrated?

### 题目意思

这题问三件事：

- 如何用 architectural language 集成 `symbolic models`？
- 如何通过区分 `symbolic model` 和 `visualization` 来更新 integrated models？
- 如何集成 `semantic models`？

### 答案

先区分三个概念：

| 概念 | 含义 |
|---|---|
| Symbolic model | 用 symbols、concepts 和 relations 表达 architecture properties 的模型 |
| Visualization | symbolic model 的图形或文本展示 |
| Semantic model | 对 symbolic model 里 symbols 的 meaning / interpretation |

### 10.1 Integrating symbolic models

`Symbolic models` 可以通过 common architectural language 集成。这个 language 需要提供：

- shared concepts，例如 actor、role、process、service、application component、data object、node；
- shared relations，例如 serving、realization、assignment、composition、association；
- cross-domain links，例如 business process 被 application service 支持，application component 部署在 technology node 上。

这样，不同 diagrams 或 models 就不再是 isolated pictures，而是 integrated architecture model 的不同 views。

### 10.2 Updating integrated models

diagram 不是 model 本身，diagram 只是底层 `symbolic model` 的 `visualization`。同一个 symbolic model 可以有多个 visualizations，面向不同 stakeholders。

所以更新 architecture 时，应该更新底层 model，而不是只改某一张图。如果底层 symbolic model 被更新，相关 visualizations 就可以被检查和同步。

例子：

- 从底层 model 删除一个 application component。
- 所有包含这个 component 的 business view、application view、technology view 都应该被检查。
- 如果只手动改一张 picture，其他 views 可能就不一致了。

### 10.3 Integrating semantic models

`Semantic models` 关注 symbols 的 meaning。要集成 semantic models，就必须清楚定义并对齐 concepts 的含义。

需要：

- clear definitions of symbols；
- mappings between similar or related concepts；
- constraints and logical rules；
- 检查不同 models 中同一个 term 是否含义一致。

例如，一个部门用 `customer` 指付款人，另一个部门用 `customer` 指最终用户。Semantic integration 要明确这两个概念是 identical、different，还是 related。

### 考试版简答

`Symbolic models` can be integrated by using a common architectural language with shared concepts and relations across domains. Integrated models should be updated at the model level, not merely by editing visual diagrams, because one symbolic model may have multiple visualizations. `Semantic models` are integrated by defining and aligning the meanings of symbols, using mappings, constraints and shared interpretations to avoid ambiguity and inconsistency.

### 速记

- `symbolic` = 符号表达。
- `visualization` = 模型怎么显示成图。
- `semantic` = 符号的意义。
- 不要只改图，要改 underlying model。

---

## 11. Communication-focused EA Theories

**对应位置：L6 p14**

### 原始 Discussion

According to the below paper choose four identified theories related to the key elements of an EA practice which more focus on communication and try to describe them.

### 题目意思

问：选择四个和 EA practice 有关、并且更关注 communication 的 theories，并描述它们。

### 答案

可以选择这四个 communication-focused theories：

- `Boundary Objects Theory`
- `Cognitive Fit Theory`
- `Knowledge Management Theory`
- `Media Richness Theory`

### 11.1 Boundary Objects Theory

`Boundary objects` 是不同群体都可以使用的 artifacts，虽然每个群体理解它们的角度可能不同。

在 EA 中，architecture diagrams、roadmaps、principles、capability maps、application portfolios 都可以作为 boundary objects。Business stakeholders、IT specialists 和 managers 可以围绕同一个 artifact 沟通，虽然他们关注的 concerns 不同。

EA 作用：EA artifacts 帮助 bridge the communication gap between business and IT。

### 11.2 Cognitive Fit Theory

`Cognitive fit theory` 认为 information representation 应该适合 user 的 task 和 cognitive needs。

在 EA 中，不同 stakeholders 需要不同 views：

- senior managers 需要 strategic roadmaps 和 capability views；
- business users 需要 process views；
- IT specialists 需要 application、data、interface 和 technology views。

EA 作用：architecture views 应该根据 stakeholder concerns 和 tasks 来设计。

### 11.3 Knowledge Management Theory

`Knowledge management theory` 解释 organization 如何 create、store、share 和 use knowledge。

EA artifacts 保存重要 organizational knowledge，例如 current architecture、target architecture、principles、system relationships 和 decision rationales。

EA 作用：EA 把分散在人员和部门中的 knowledge 变成 shared organizational knowledge。

### 11.4 Media Richness Theory

`Media richness theory` 说明不同 communication media 适合不同复杂度和不确定性的问题。

在 EA 中：

- 简单通知可以用 email；
- 复杂 architecture decisions 往往需要 workshops；
- knowledge elicitation 可能需要 interviews；
- formal commitment 可能需要 committing reviews 或 decision meetings。

EA 作用：communication techniques 应该匹配 knowledge goal 和 situation complexity。

### 考试版简答

Four communication-focused theories are `Boundary Objects Theory`, `Cognitive Fit Theory`, `Knowledge Management Theory` and `Media Richness Theory`. Boundary objects explain how EA artifacts help different stakeholders communicate. Cognitive fit theory explains why different stakeholders need different views. Knowledge management theory explains EA artifacts as shared organizational knowledge. Media richness theory explains why different communication situations require different media such as workshops, interviews, presentations or reviews.

### 速记

- `Boundary object` = 一个 artifact，不同 stakeholder groups 都能围绕它沟通。
- `Cognitive fit` = 不同 stakeholder 需要不同 view。
- `Knowledge management` = EA artifacts 保存 shared organizational knowledge。
- `Media richness` = 复杂问题需要 richer communication methods。

---

## 12. Business Model Canvas to ArchiMate

**对应位置：L6 p54**

### 原始 Discussion

According to the below paper describe how the Business Model Canvas can mapped to ArchiMate?

### 题目意思

问：`Business Model Canvas (BMC)` 如何 mapping 到 `ArchiMate`？

### 答案

`Business Model Canvas (BMC)` 描述 organization 如何 create、deliver 和 capture value。`ArchiMate` 描述 business layer、application layer 和 technology layer 中的 enterprise architecture。把 BMC mapping 到 ArchiMate，是为了把 business model design 和 enterprise architecture modelling 联系起来。

### 12.1 Mapping idea

`BMC` 是 high-level business model tool，`ArchiMate` 是 enterprise architecture modelling language。Mapping 时通常把 BMC elements 转换成 ArchiMate 的 motivation concepts 和 business layer concepts，再进一步连接到 application layer 和 technology layer。

### 12.2 常见 mapping

| BMC Element | Possible ArchiMate Concept | 解释 |
|---|---|---|
| Value Proposition | Value, Product, Business Service | 给 customers 的价值可表示为 value、product 或 service |
| Customer Segments | Business Actor, Business Role | customer groups 可表示为 actors 或 roles |
| Channels | Business Interface, Application Interface, Business Service | channels 是接触 customers 的 access points |
| Customer Relationships | Business Interaction, Business Collaboration, Contract | relationships 可表示为 interaction、collaboration 或 agreements |
| Revenue Streams | Value, Outcome, financial assessment concepts | revenue 和 captured value / business outcomes 有关 |
| Key Activities | Business Process, Business Function | key activities 对应 processes 或 functions |
| Key Resources | Resource, Capability, Business Object, Application Component | resources 可以是 capabilities、assets、information 或 application components |
| Key Partners | Business Actor, Business Role, Business Collaboration | partners 可建模为 external actors 或 collaborations |
| Cost Structure | Resource usage, Value, assessment-related concepts | costs 和 resources / activities 有关 |

### 12.3 例子

如果 BMC 的 value proposition 是 “fast and personalized online food ordering”，在 ArchiMate 中可以表示为：

- `Product`: Online Food Ordering Product
- `Business Service`: Order Placement Service
- `Value`: Convenience, Speed, Personalization
- `Customer Segment`: Students / Staff
- `Channel`: Mobile App Interface
- `Key Activity`: Prepare Order / Deliver Order
- `Application Component`: Ordering App
- `Technology Node`: Cloud Server

这样就可以从 business value 追踪到 business processes、applications 和 technology infrastructure。

### 考试版简答

The `Business Model Canvas` can be mapped to `ArchiMate` by translating BMC elements into ArchiMate motivation and business concepts. Value propositions can be represented as value, products or business services; customer segments as business actors or roles; channels as business or application interfaces; key activities as business processes or functions; key resources as resources, capabilities, business objects or application components; and partners as business actors or collaborations. This mapping connects business model design with enterprise architecture and enables traceability from business value to processes, applications and technology.

### 速记

- `BMC` = business model。
- `ArchiMate` = architecture model。
- mapping goal = 从 `value proposition` 追踪到 process / application / technology。

---

# 12 个 Discussion 核对表

| 状态 | 对应位置 | 主题 |
|---|---|---|
| 已整理 | L1 p10 | Stakeholder / Enterprise |
| 已整理 | L1 p16 | Why Enterprise Architecture |
| 已整理 | L2 p13 | Internal / External Drivers |
| 已整理 | L2 p28 | Good Enterprise Architecture |
| 已整理 | L3 p10 | ISO 9001 vs EFQM |
| 已整理 | L3 p18 | ITIL vs COBIT |
| 已整理 | L4 p6 | TOGAF vs Zachman |
| 已整理 | L4 p20 | BPMN vs UML vs IDEF |
| 已整理 | L5 p11 | Integrating EA Domains |
| 已整理 | L5 p21 | Symbolic / Semantic Integration |
| 已整理 | L6 p14 | Communication-focused EA Theories |
| 已整理 | L6 p54 | Business Model Canvas to ArchiMate |

---

# 最后总速记

| 主题 | 最短记法 |
|---|---|
| Stakeholder | 有 interest、influence 或 concern 的人/组织 |
| Enterprise | 有 shared goals 的组织整体，不只是 IT |
| Why EA | 解决 complexity 和 business-IT alignment |
| Drivers | Internal = 内部问题；External = law、market、competition、customers |
| Good EA | aligned、complete、consistent、understandable、traceable、adaptable |
| ISO vs EFQM | ISO = quality standard；EFQM = excellence model |
| COBIT vs ITIL | COBIT = what to control；ITIL = how to run IT services |
| Zachman vs TOGAF | Zachman = classification；TOGAF = ADM method |
| BPMN / UML / IDEF | BPMN process；UML software；IDEF0 function；IDEF3 process；IDEF1X data |
| Ontology integration | shared semantics、mappings、traceability、consistency checking |
| Symbolic / Semantic | symbolic = expression；semantic = meaning |
| EA communication theories | artifacts、views、knowledge sharing、media choice |
| BMC to ArchiMate | business model 映射到 business / application / technology architecture |

---

# 参考依据

本整理主要依据本地课件：

- `Lecture1-Azadeh.pdf`
- `Lecture2-Azadeh.pdf`
- `Lecture3-Azadeh.pdf`
- `Lecture4-Azadeh.pdf`
- `Lecture5-Azadeh.pdf`
- `Lecture6-Azadeh.pdf`

辅助核对来源：

- Shanks et al. (2018), *Achieving benefits with enterprise architecture*.
- van de Wetering et al. (2021), *The Role of Enterprise Architecture for Digital Transformations*: https://www.mdpi.com/2071-1050/13/4/2237
- Khayami (2011), *Qualitative characteristics of enterprise architecture*.
- Heras-Saizarbitoria et al. (2011), *The impact of ISO 9001 standard and the EFQM model*: https://www.tandfonline.com/doi/abs/10.1080/14783363.2010.532330
- Simplilearn, *COBIT vs ITIL*: https://www.simplilearn.com/cobit-vs-itil-article
- BCS, *A comparison of the top four enterprise architecture frameworks*: https://www.bcs.org/articles-opinion-and-research/a-comparison-of-the-top-four-enterprise-architecture-frameworks/
- Entringer et al. (2021), *Comparative analysis of the main business process modeling methods*: https://www.gestaoeproducao.com/article/doi/10.1590/1806-9649-2020v28e5211
- Antunes et al. (2013), *Using Ontologies to Integrate Multiple Enterprise Architecture Domains*: https://link.springer.com/chapter/10.1007/978-3-642-41687-3_8
- Arbab et al. (2007), *Integrating Architectural Models*: https://www.emisa-journal.org/emisa/article/view/36
- Kotusev & Kurnia (2021), *The theoretical basis of enterprise architecture*: https://journals.sagepub.com/doi/10.1177/0268396220977873
- Meertens et al. (2012), *Mapping the business model canvas to ArchiMate*: https://ris.utwente.nl/ws/files/5363569/Meertens12mapping.pdf
