---
title: 从买币到 Wise：一条尚未跑通的完整出金链路
description: 从买入稳定币到 Wise 激活，真正麻烦的不是转账箭头，而是 Kraken 地区、iFAST 地址证明和首次入金这些前置条件怎样一环扣住下一环。
published: 2025-03-09
tags:
  - Crypto
  - Wise
  - 银行
  - 资金路径
draft: false
---

## 不是一根箭头，而是一条依赖链

把稳定币变成 Wise 余额，画成流程图只有几个箭头。但真正卡住进度的不是“钱往哪儿转”，而是每一站的进入条件：我的 Kraken 主路线要走英国区，iFAST 开户要地址证明，Wise 则要完成首次入金才能激活完整功能。

任何一个前置条件没有满足，后面的资金通道即使存在也走不通。这篇总览要记录的不是几个平台的并列名单，而是每一环需要什么、给下一环提供什么，以及它失败后会卡住哪里。

## 主路线总览

```text
币安 / 欧易等平台
→ 买入或持有 USDT / USDC
→ 通过双方共同支持的资产与链提币
→ Kraken（英国区账户 / 身份证 KYC）
→ 换成 GBP
→ GBP FPS
→ iFAST Global Bank（先用地址证明完成开户）
→ 同名 iFAST 账户持有 GBP
→ GBP FPS 转入 20 GBP 或等值货币
→ Wise 完成首次入金并激活
```

括号里的不是补充说明，而是这条链能否继续往下走的条件。比如 Kraken 已经换出 GBP 也不够：如果 iFAST 还没有开好，就没有银行账户承接 FPS；iFAST 没有资金，Wise 的首次入金也无从开始。

## 真正的依赖顺序

并不是所有准备工作都必须串行。买入稳定币、注册平台和准备地址证明材料可以同时推进。但实际验证资金通道时，顺序是硬性的：

```text
可并行准备
├─ 买入或持有 USDT / USDC
├─ 准备 Kraken 英国区账户和 KYC
├─ 注册 Wise 并完成 KYC
└─ 准备 iFAST 所需的地址证明

资金通道必须按顺序验证
地址证明可用
→ iFAST 开户完成
→ Kraken 的 GBP 通过 FPS 到达 iFAST
→ iFAST 同名账户向 Wise 转入 20 GBP 或等值货币
→ Wise 激活完成
```

这里最容易误判的是 Wise。Wise 注册和 KYC 已经完成，但这不等于账户已经完整激活。它还需要一笔 20 GBP 或等值货币的首次入金，而我计划用同名 iFAST 账户来完成这一步。因此，iFAST 的开户问题会一直传导到 Wise。

## 第一环：买入稳定币

起点是在币安、欧易等平台买入或持有 USDT、USDC。这一层要解决的是平台账户、KYC、买入方式和实际价差，最后给下一层提供一笔可以提走的稳定币余额。

这篇不展开具体买币过程。它可以单独成篇，也不能和后面的链上提币混成一个步骤：在平台里有余额，不代表已经确认 Kraken 或 Neverless 支持同一种资产和网络。

## 第二环：链上转移

稳定币需要从买入平台提到 Kraken 或 Neverless。发送方和接收方必须同时支持同一种资产和同一条链，充值地址、网络、最小数量和手续费都要在提币前核对。

这一层给下一环提供的是目标平台账户里的稳定币余额。具体选择哪条链、提币费是多少、需要多久确认，目前都没有在这条路线里完成实测，之后再单独记录。

## 第三环：Kraken 与 Neverless 的分叉

主路线选择 Kraken，把稳定币换成 GBP，再通过 FPS 出金。对我现在设计的这条 GBP/FPS 路线，Kraken 账户要按英国区注册，身份验证可以使用身份证。这里先记录地区和身份验证这个前置条件，具体注册过程另写。

备用路线选择 Neverless。它与 Kraken 的一个直接区别是，注册时涉及的国家和地区信息可以全部选择中国。之后把稳定币换成 EUR，通过 SEPA 转到 iFAST，再处理 GBP。

```text
主路线：Kraken（英国区）→ GBP → FPS → iFAST

备用路线：Neverless（国家/地区可选中国）→ EUR → SEPA → iFAST
```

两条路线目前都没有完成到 iFAST 的实测，所以不能据此判断哪条更便宜、更快或更稳定。Neverless 的作用是保留另一套地区选择和法币通道，而不是提前宣布备用路线更好。

## 第四环：iFAST 不是现成的中转站

iFAST Global Bank 是计划中的银行承接层：接收 Kraken 的 GBP FPS，或者接收 Neverless 的 EUR SEPA，再从同名银行账户向 Wise 转账。

问题在于，iFAST 不是注册后立刻就能拿来收款。开户需要地址证明，文件上要有姓名、完整居住地址和日期。我手里的建设银行普通借记卡账单没有完整居住地址，不能直接用于这次申请。

为了解决这个问题，我通过汇丰中国官网二维码入口，绑定已有 I 类银行卡，在线开了一个汇丰易存 II 类账户。具体入口和过程已经单独写在[《在国内准备地址证明：汇丰易存 II 类账户的线上开户入口》](/moonlit-blog/posts/china-proof-of-address-hsbc-yicun/)里。

但开出汇丰账户不等于地址证明已经解决。现在还要等电子账单，确认它是否显示姓名、完整地址和日期，再确认 iFAST 是否接受。这个结果出来以前，iFAST 开户仍然被卡住。

## 第五环：Wise 还差首次入金

Wise 已经注册并完成 KYC，但还没有完成首次入金，因此完整账户功能尚未激活。激活需要转入 20 GBP 或等值价值的其他货币。

我的计划是等 iFAST 开好并有 GBP 余额后，用同名 iFAST 银行账户通过 FPS 转入 Wise。这样，iFAST 同时承担两个作用：先接住 Kraken 或 Neverless 出来的法币，再提供 Wise 首次入金所需的同名银行来源。

因此，Wise 看起来位于链路末端，但它不是一个可以提前独立完成的节点。KYC 完成以后，仍然要等待 iFAST 开户、交易所法币到账，才能验证最后的 20 GBP 或等值入金。

## 目前的实际进度

| 环节 | 当前状态 | 对下一环的影响 |
| --- | --- | --- |
| 稳定币 | 已经持有 | 可以继续设计链上提币 |
| 链上提币到 Kraken / Neverless | 路线待实测 | 尚未验证目标平台充值 |
| Kraken | 英国区注册与 KYC 是主路线条件 | 完成后才能验证 GBP/FPS |
| Neverless | 国家/地区信息可以选择中国 | 备用的 EUR/SEPA 路线待验证 |
| 汇丰易存 II 类账户 | 已开好，电子账单待验证 | 账单不确定，继续阻塞 iFAST |
| iFAST Global Bank | 尚未开户 | 暂时无法承接 FPS/SEPA，也无法向 Wise 入金 |
| Wise | 注册和 KYC 已完成 | 仍缺 20 GBP 或等值货币首次入金 |
| 端到端链路 | 尚未跑通 | 费用、时间和实际损耗都没有结论 |

## 分篇记录

总链路下面已经拆出这些独立文章：

- [币安 C2C 买入、选链和 USDT 提币](/moonlit-blog/posts/binance-buy-usdt-basics/)。
- [Kraken 英国区注册、USDT 充值、换 GBP 与 FPS 出金](/moonlit-blog/posts/kraken-gbp-fps-offramp/)。
- [Neverless 中国地区资料注册、稳定币换 EUR 与 SEPA 出金](/moonlit-blog/posts/neverless-eur-sepa-offramp/)。
- [国内地址证明与汇丰易存电子账单](/moonlit-blog/posts/china-proof-of-address-hsbc-yicun/)。
- [iFAST 开户、两路法币承接、必要换汇和 Wise 首次入金](/moonlit-blog/posts/ifast-bank-bridge-to-wise/)。
- [Wise 证件选择、USD 居留核验、HKD 收款资料和首次入金](/moonlit-blog/posts/wise-identity-usd-hkd-first-funding/)。

Wise 激活后的长期使用，以及全链路小额实测中的手续费、到账时间和汇率损耗，要等对应环节真正完成后再补。

这些细节不需要全部挤在总览里，但总览必须把它们为什么存在写清楚。每个分篇解决一个条件，最后才能把整条链真正接起来。

## 现在究竟卡在哪里

最近的阻塞点是地址证明。

汇丰易存账户已经开好，但电子账单能不能显示所需字段、iFAST 认不认，还没有验证。这个问题不解决，iFAST 就开不了户；iFAST 没开好，Kraken 或 Neverless 的法币没有银行承接点；银行账户里没有资金，Wise 的 20 GBP 或等值首次入金也做不了。

一个地址证明问题，向后卡住了银行承接、交易所法币出金和 Wise 激活。这才是整条链路目前真正的结构，而不是一排看起来已经连通的转账箭头。
