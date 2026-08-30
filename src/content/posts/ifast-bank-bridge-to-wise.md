---
title: iFAST 银行承接层：从地址证明到 Wise 首次入金
description: Kraken 的 GBP/FPS 和 Neverless 的 EUR/SEPA 在 iFAST 汇合；这个银行节点要完成开户、法币入账、必要换汇，再把 20 GBP 或等值货币送进 Wise。
published: 2025-07-26
tags:
  - 银行
  - iFAST
  - Wise
  - FPS
  - SEPA
draft: false
---

## 为什么 iFAST 是两条路线的汇合节点

iFAST Global Bank 在整条链路里不是一个简单的中转账户。它计划承接两条上游输入、完成必要的币种转换，再统一向 Wise 输出。

这个银行节点需要验证四项能力：

1. 通过 FPS 接收 Kraken 的 GBP。
2. 通过 SEPA 接收 Neverless 的 EUR。
3. 在备用路线中把 EUR 换成 GBP。
4. 通过 GBP FPS 向 Wise 完成首次入金。

如果其中某项能力在实际 iFAST 账户中不存在，对应路线就会在银行这一层断开。

```text
Kraken                          Neverless
USDT → GBP                     稳定币 → EUR
    │ GBP / FPS                   │ EUR / SEPA
    └────────────┐     ┌──────────┘
                 ▼     ▼
              iFAST Global Bank
              ├─ 主路线：直接持有 GBP
              └─ 备用路线：EUR → GBP
                         │
                         ▼
                     GBP / FPS
                         │
                         ▼
                 Wise 首次 20 GBP
                    或等值货币入金
```

两条输入，一条输出。iFAST 是 Crypto-to-Fiat 平台与 Wise 之间的银行承接层。

## 地址证明与 iFAST 开户

### 当前要准备的地址证明

iFAST 开户需要地址证明。这次准备的目标文件要同时显示：

- 姓名。
- 完整居住地址。
- 日期。

我手里实际检查过的是建设银行普通借记卡账单，它没有显示完整居住地址，因此不能直接解决这次材料问题。

### 为什么又开了一个汇丰 II 类账户

为了解决地址证明，我通过汇丰中国官网易存页面的二维码，用微信绑定已有 I 类银行卡，在线开了汇丰易存 II 类账户，全程不需要去线下网点。

具体入口和过程已经记录在[《在国内准备地址证明：汇丰易存 II 类账户的线上开户入口》](/moonlit-blog/posts/china-proof-of-address-hsbc-yicun/)里。

但汇丰账户开好，不等于 iFAST 地址证明已经准备完成。这里至少有六个不同状态：

| 状态 | 当前情况 |
| --- | --- |
| 汇丰易存 II 类账户开通 | 已完成 |
| 汇丰生成电子账单 | 待获取 |
| 账单显示姓名、完整地址和日期 | 待验证 |
| iFAST 接受该文件 | 待提交后确认 |
| iFAST KYC 通过 | 尚未完成 |
| iFAST 账户正式开通 | 尚未完成 |

当前真正的阻塞点仍然是电子账单：字段是否齐全、iFAST 是否接受，都没有结果。

iFAST 的注册页面、其他证件要求和审核时长目前没有完整操作记录。这篇不会凭空补写按钮、材料和处理时间。

## 开户后要确认哪些账户能力

假设 iFAST 最终开通，能够登录仍然不等于这个银行节点可用。还要在账户页面逐项确认四件事：

| 能力 | 用途 | 对应路线 |
| --- | --- | --- |
| GBP 本地 / FPS 收款信息 | 接收 Kraken 提出的 GBP | 主路线 |
| EUR / SEPA 收款信息 | 接收 Neverless 提出的 EUR | 备用路线 |
| EUR → GBP 换汇入口 | 把备用路线的 EUR 处理成 GBP | 备用路线 |
| GBP / FPS 转出能力 | 向 Wise 完成首次入金 | 两条路线共同输出 |

GBP/FPS 与 EUR/SEPA 使用的银行字段通常不同。开户后要分别读取账户页面，而不是假定一套银行信息可以同时覆盖两种币种和通道。

每种收款能力至少要记录：

- 账户持有人姓名。
- 币种。
- 银行通道。
- 页面提供的收款字段。
- 是否需要填写 reference。

完整账号、IBAN 和其他敏感银行信息不进入公开文章。

当前 iFAST 尚未开户，上述四项能力全部待验证。

## 接收 Kraken 的 GBP/FPS

这一环的前置条件是 iFAST 已开通，并且实际提供 GBP/FPS 收款信息。

操作关系是：

1. 从 iFAST 读取 GBP/FPS 收款详情。
2. 在 Kraken 添加 iFAST 的同名 GBP 收款账户。
3. 按 Kraken 页面要求填写 iFAST 提供的银行字段。
4. 如果 iFAST 要求 reference，按实际信息填写。
5. 在 Kraken 发起 GBP 提现。
6. 回到 iFAST 检查实际入账。

Kraken 端的完整过程在[《Kraken 主路线：从英国区注册到 GBP/FPS 出金》](/moonlit-blog/posts/kraken-gbp-fps-offramp/)中记录。

这笔转账同样存在多个状态：

```text
Kraken 提现已提交
→ Kraken 处理中
→ Kraken 已发送
→ FPS 传递
→ iFAST 检测到入账
→ iFAST 显示可用 GBP
```

完成标准是 iFAST 实际出现可用 GBP，而不是 Kraken 显示“已发送”。最低金额、手续费、reference 和处理时间都要从当次页面读取，不能写成固定数字。

当前状态：未验证。iFAST 尚未开户，Kraken 还没有可添加的 iFAST 收款信息。

## 接收 Neverless 的 EUR/SEPA

备用路线的前置条件，是 iFAST 开通后实际提供 EUR/SEPA 收款信息。

操作关系与 GBP 路线类似，但币种和银行通道不同：

1. 从 iFAST 读取 EUR/SEPA 收款详情。
2. 在 Neverless 添加 iFAST 的同名 EUR 收款账户。
3. 按页面要求填写收款人、IBAN、BIC 或其他字段。
4. 根据页面要求处理 reference。
5. 在 Neverless 发起 EUR 提现。
6. 回到 iFAST 检查实际 EUR 入账。

Neverless 端的完整过程在[《Neverless 备用路线：从中国地区注册到 EUR/SEPA 出金》](/moonlit-blog/posts/neverless-eur-sepa-offramp/)中记录。

```text
Neverless 提现已提交
→ Neverless 处理中
→ Neverless 已发送
→ SEPA 银行间传递
→ iFAST 检测到入账
→ iFAST 显示可用 EUR
```

完成标准是 iFAST 账户实际出现可用 EUR。Neverless 的“已发送”状态不能代替银行查账。

当前状态：未验证。iFAST 尚未开户，Neverless 也没有可添加的 iFAST 收款信息。

## 备用路线还要处理 EUR 到 GBP

主路线从 Kraken 收到的本来就是 GBP，可以直接准备下一段 FPS。备用路线从 Neverless 收到的是 EUR，还要在 iFAST 或实际允许的位置完成一次 EUR 到 GBP。

开户后需要确认：

- iFAST 是否提供 EUR 到 GBP 的换汇入口。
- 页面怎样显示报价。
- 实际汇率与价差。
- 是否存在换汇费用。
- 预计和实际得到多少 GBP。
- 换汇后的 GBP 何时成为可用余额。

不能在 iFAST 账户尚未开通时，先假定它提供某一种换汇界面或固定费率。

换汇完成标准是 iFAST 账户中实际出现可用 GBP。备用路线至少要记录换汇前 EUR、实际执行汇率、费用和换汇后 GBP，才能把这一层计入总损耗。

## 从 iFAST 向 Wise 做首次入金

### Wise 目前完成了什么

Wise 已经注册并完成 KYC，但完整账户功能还没有激活。当前条件是：首次入金需要 20 GBP 或等值价值的其他货币。

计划使用同名 iFAST 银行账户，通过 GBP FPS 完成这笔首次入金。

### 先从 Wise 读取当次要求

在 iFAST 发起转账前，需要从 Wise 当时的首次入金页面读取：

- GBP 收款信息。
- 本次要求的首次入金金额。
- 是否需要特定 reference。
- 页面显示的账户名和其他收款字段。

不能根据旧截图填写 Wise 收款信息，也不能默认 `20 GBP` 之外的字段永远不变。

### 再从 iFAST 发起 GBP FPS

1. 在 iFAST 添加 Wise 为 GBP 收款人。
2. 填入 Wise 页面本次提供的收款字段。
3. 填入 Wise 要求的 reference，如页面有此要求。
4. 输入满足首次入金要求的金额。
5. 核对收款人、银行信息、金额、reference 和 iFAST 页面显示的转账费用。
6. 提交 GBP FPS 转账。

这一步也不能把“发送”当成“完成”：

```text
iFAST 转账已提交
→ iFAST 处理中
→ iFAST 已发送
→ FPS 传递
→ Wise 检测到入账
→ Wise 将资金关联到首次入金
→ Wise 显示首次入金完成
→ Wise 完整功能激活
```

完成标准是 Wise 实际收到满足要求的金额，并在页面中显示首次入金完成和功能激活。iFAST 显示“已发送”，不能证明 Wise 已收到；Wise 显示到账，也要继续确认激活状态。

当前状态：未完成。iFAST 尚未开户，因此还不能向 Wise 发起这笔转账。

## 两条输入在 iFAST 有什么不同

| 对比项 | Kraken 主路线 | Neverless 备用路线 |
| --- | --- | --- |
| 到达 iFAST 的币种 | GBP | EUR |
| 银行通道 | FPS | SEPA |
| iFAST 需要的收款能力 | GBP/FPS | EUR/SEPA |
| 入账后是否还要处理 EUR/GBP | 不需要 | 需要 |
| 最终输出 | GBP/FPS 到 Wise | 换成 GBP 后再 FPS 到 Wise |
| 当前状态 | 未验证 | 未验证 |

哪条路线综合成本更低、速度更快，要等两条都实际跑通后才能比较。现在只能确认备用路线在 iFAST 内多出 EUR 到 GBP 这一层。

## 整个 iFAST 节点怎样互相依赖

```text
汇丰易存 II 类账户已开
→ 汇丰电子账单字段齐全
→ iFAST 接受地址证明
→ iFAST KYC 与开户完成
→ GBP/FPS、EUR/SEPA 和转账能力实际可见
→ Kraken GBP 或 Neverless EUR 实际入账
→ 必要时完成 EUR 到 GBP
→ iFAST 出现可用 GBP
→ iFAST 通过 FPS 转入 Wise 20 GBP 或等值货币
→ Wise 实际入账并激活
```

当前卡在第二步：汇丰易存账户已经开好，但电子账单的字段以及 iFAST 是否接受仍待验证。后面的银行能力、上游入账、换汇和 Wise 首次入金都被这一前置条件挡住。

## 当前走到哪里

| 环节 | 当前状态 |
| --- | --- |
| 汇丰易存 II 类账户 | 已开通 |
| 汇丰电子账单 | 字段待验证 |
| iFAST 地址证明 | 尚未提交验证 |
| iFAST KYC 与开户 | 尚未完成 |
| GBP/FPS 收款能力 | 待实际账户确认 |
| EUR/SEPA 收款能力 | 待实际账户确认 |
| Kraken GBP 入账 | 未验证 |
| Neverless EUR 入账 | 未验证 |
| EUR 到 GBP | 未实测 |
| Wise 注册与 KYC | 已完成 |
| Wise 首次入金与激活 | 尚未完成 |
| iFAST 完整节点 | 尚未跑通 |

## 实际操作时应该记录什么

| 阶段 | 记录字段 |
| --- | --- |
| 地址证明 | 账单字段、生成时间、iFAST 接受或拒绝结果 |
| iFAST 开户 | 申请状态、KYC 状态、账户开通时间 |
| 账户能力 | GBP/FPS、EUR/SEPA、EUR/GBP、GBP FPS 转出是否存在 |
| 上游入账 | 上游平台、币种、通道、reference、上游状态、iFAST 入账时间和金额 |
| EUR/GBP | 换汇前 EUR、报价、实际汇率、费用、最终 GBP |
| Wise 首次入金 | Wise 收款字段、reference、iFAST 费用与状态、Wise 入账和激活时间 |

这些数据用于计算真实损耗和定位卡点。公开写文章时，不需要暴露完整银行账号、IBAN、居住地址或身份材料。

## 现在真正卡住的地方

这篇已经把 iFAST 从地址证明写到 Wise 首次入金的完成标准。当前节点尚未跑通，不是文章停在开户，而是实际流程仍卡在地址证明：电子账单能否满足要求、iFAST 是否接受，还没有答案。

只有 iFAST 开户完成并出现实际可用的银行能力，才有条件验证两条上游法币入账、备用路线换汇和最后的 Wise 首次入金。iFAST 节点最终是否完成，要以 Wise 实际收到资金并显示激活为准。
