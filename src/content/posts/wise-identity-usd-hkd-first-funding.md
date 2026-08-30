---
title: Wise 最后一环：证件选择、USD 居留核验与首次入金
description: Wise 注册成功并不等于所有币种功能都能用；中国身份证与护照会影响 HKD 收款资料，USD 可能触发居留权证明，首套账户资料还要完成 20 GBP 或等值入金。
published: 2025-10-06
tags:
  - Wise
  - KYC
  - USD
  - HKD
  - 银行
draft: false
---

## 为什么最后一步反而要从注册证件写起

在整个 Crypto → Kraken/Neverless → iFAST → Wise 路线里，Wise 是最终的日常持币、换汇和收付款层。按照直觉，走到这一步应该只剩“注册、入金、使用”。实际并不是。

Wise 的可用功能取决于至少四个条件的组合：

- 注册地址所在国家或地区。
- KYC 使用的证件类型。
- 准备开通的币种。
- 首套账户资料（account details）的开通状态。

证件类型会影响 HKD 收款资料资格；USD 可能触发与账户注册国家有关的居留权核验；首次入金没有完成，首套账户资料也可能停在未开通状态。

```text
选择符合功能目标的 KYC 证件
→ 确认 HKD account details 资格
→ 不启动自己无法完成的 USD 居留核验
→ 按 Wise 页面创建首次入金指引
→ iFAST 同名 GBP FPS 付款
→ Wise 识别首次入金
→ 首套账户资料与所需功能实际可用
```

## Wise 里有多少种“开通”

Wise 里的“能用了”至少包含以下不同状态：

| 状态 | 能说明什么 | 还不能说明什么 |
| --- | --- | --- |
| 注册完成 | Wise 账户已经创建 | 不能说明 KYC 已通过 |
| 基础 KYC 通过 | Wise 接受了本次身份验证 | 不能说明所有币种功能都有资格使用 |
| 添加某个币种 | 账户里出现该币种的余额入口 | 不等于取得该币种本地收款资料 |
| 持有该币种余额 | 账户里实际有该币种资金 | 不等于可以从外部银行按本地方式收款 |
| 取得 account details | 获得该币种的银行收款资料 | 不等于其他币种资料自动开通 |
| 完成首次入金 | Wise 已识别首笔资金 | 仍要检查账户资料与功能状态 |
| 所需功能实际可用 | 目标币种资料和收付款入口已经出现 | 才能按实际场景继续使用 |

最关键的区分是：**添加币种余额不等于取得该币种的 account details。** 可以持有某种货币，与拥有一套可以从外部银行接收转账的本地收款资料，是两件事。

## 身份证与护照：HKD 收款资料的坑

### 我在账户中看到的现象

我观察到，使用中国护照完成验证后，看不到自己需要的港币功能。如果目标包括 HKD 收款资料，第一次验证时不能只把身份证和护照当成两个等价选项。

### Wise 官方怎样写

Wise 的[《How do I receive money with my HKD account details?》](https://wise.com/help/articles/12CQfcpIVOHULnFNNzBgmE/how-do-i-receive-money-with-my-hkd-account-details)明确把 Wise Personal 的资格与验证证件关联起来：

- Chinese National ID（中国居民身份证）：eligible。
- Chinese Passport（中国护照）：not eligible。

这里官方证明的是 **HKD account details，也就是港币收款资料**。它没有证明护照用户绝对不能持有、兑换或发送任何 HKD，因此不能把“收款资料没有资格”扩大成“所有港币功能都不存在”。

中国护照仍可能用于 Wise 的基础身份验证；问题在于验证之后，HKD account details 是否符合资格。

### 证件要在第一次 KYC 前想清楚

如果使用目标包含 HKD account details，第一次 KYC 前就应查看 Wise 当时的证件资格。当前公开规则明确支持中国居民身份证，而不支持中国护照取得这套 HKD 收款资料。

这篇不提供重新开户、重复账户或事后更换身份的办法。能够确定的操作结论只有一个：先确定自己需要哪些币种功能，再选择符合官方资格的真实证件。

## USD 是另一种完全不同的坑

### 我的账户只有 USD 立即触发额外材料

在我的账户里，添加其他币种时没有立即触发额外核验；点击添加 USD 后，界面立刻进入额外材料要求流程。

当时没有保存弹窗，所以现在无法准确还原 Wise 要求的具体文件名称。能够确认的是：账户没有准备好对应的身份或居留材料时，USD 这个操作会直接把问题暴露出来。

这只是个人账户中的实际表现，不代表 Wise 承诺其他币种绝对不会触发核验。不同币种、注册地址和账户状态可能有不同要求。

### 中国地址不能取得 USD account details

Wise 的[《Can I get USD account details?》](https://wise.com/help/articles/2810318/can-i-get-usd-account-details)写明：USD account details 只有注册地址位于支持地区时才能取得，中国明确列在不支持的地址地区中。

因此，如果 Wise 注册地址本身在中国，USD account details 就不在可用范围内。

### 证件国家与注册地址国家不同，会引出居留权证明

另一个情况是：Wise 注册地址在其他国家，但 KYC 使用中国签发的身份证件。

Wise 的[《How do I verify my country of residence?》](https://wise.com/help/articles/3xConsbhr7buWkQuqDEQ5V/how-do-i-verify-my-country-of-residence)说明，如果身份验证证件的签发国与 Wise 账户注册国家不同，平台可能要求证明用户有权居住在账户注册国家。

官方列出的文件类别包括：

- 账户注册国家签发的护照。
- 账户注册国家签发的 National ID。
- 实体居留许可。
- 有效期超过 90 天的长期签证。
- 页面接受的其他政府签发居留文件。

这与普通地址证明不是一回事。水电账单、银行账单和租约可以证明住址，但不能替代居留权文件。

我当时遇到的 USD 额外材料，大概率属于这类 right-to-reside verification。但因为没有保留弹窗原文，不能百分之百确认 Wise 当时具体要求的是居留许可、长期签证还是其中另一类文件。

### 没有真实居留文件，就不要随手开 USD account details

这里的判断很直接：

1. 注册地址在中国，官方不提供 USD account details。
2. 注册地址在其他国家、证件由中国签发，可能需要该注册国家签发的真实居留权文件。

如果没有账户注册国家的合法居留材料，就不要随手启动 USD account details 的开通过程。一旦进入自己无法完成的核验，添加币种、转账等其他功能也可能一起受限。

## 首套账户资料为什么要 20 GBP

### 这是当时真实存在的条件

Wise 官方帮助页在 [2025-08-10 的 Web Archive 快照](https://web.archive.org/web/20250810112514/https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money)中明确写着，取得首套 account details 需要：

> Add 20 GBP to your account (or equivalent in your currency), and verify your identity.

这与我在账户页面看到的条件一致：存入 20 GBP 或等值货币，同时完成身份验证。

当前 Wise 的[《How do I open account details to receive money?》](https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money)已经把公开说明改成按账户页面完成 requirements；个人首次账户资料还需要证件照片和单独自拍验证，不再统一展示 `20 GBP` 这个数字。

所以 `20 GBP` 是当时 Wise 官方规则和这个账户实际显示的条件，不是可以永久套用到所有用户的固定金额。真正操作时仍要读取自己账户当时的要求。

### 首次入金不能凭旧收款资料打款

首套 account details 还没有开通时，不能假定自己已经拥有一套普通 GBP 本地收款资料。

正确起点是 Wise 账户内的 **Get account details / Add money** 流程。它会给出本次需要的：

- 付款方式。
- 收款信息。
- 金额。
- Reference，如本次付款要求填写。

这些信息应从当次页面读取，不能用旧截图，也不能复制其他人的 Wise 收款详情。

## 使用同名 iFAST 完成首次入金

计划中的付款路径是：用同名 iFAST 银行账户，通过 GBP FPS 按 Wise 当次入金指引付款。

```text
Wise 创建首次入金指引
→ 显示收款信息、金额与 reference
→ iFAST 按指引提交 GBP FPS
→ iFAST 处理并发送
→ Wise 检测到付款
→ Wise 余额出现资金
→ Wise 将资金关联到首次入金
→ 首套 account details 与功能状态更新
```

提交前需要核对：

- iFAST 与 Wise 的账户姓名是否一致。
- Wise 当次给出的 GBP 收款信息。
- 本次要求的金额。
- Reference 是否存在并且填写正确。
- iFAST 页面显示的转账费用和实际转出金额。

完成标准不能停在 iFAST 显示“已发送”。至少要继续确认 Wise 已识别入账，并且首套 account details 或目标功能已经在 Wise 页面中实际可用。

当前 iFAST 尚未开户，因此这笔同名首次入金现在还无法执行。

## 多币种并不代表每种功能完全相同

Wise 可以显示和持有多种货币，但每个币种的可用功能并不完全一致：

| 层级 | 含义 | 可能出现的额外条件 |
| --- | --- | --- |
| 添加币种 | 在账户中建立该币种余额入口 | 受注册地址和账户状态影响 |
| 持有余额 | 通过换汇或入金拥有该币种资金 | 受整体账户功能影响 |
| 取得 account details | 获得该币种本地或国际收款资料 | 可能有地区、证件与额外核验要求 |

HKD account details 有证件资格差异；USD account details 有注册地址限制和可能的居留核验。其他币种也可能有自己的条件，所以不能把“多币种账户”理解为所有币种无条件提供相同功能。

## 当前走到哪里

| 项目 | 当前状态 |
| --- | --- |
| Wise 注册 | 已完成 |
| 基础 KYC | 已通过 |
| 首次 20 GBP 或等值入金 | 尚未完成 |
| 首套 account details | 尚未完成开通 |
| USD | 曾触发额外材料流程；未保存弹窗，官方材料指向居留权证明类别 |
| HKD account details | 证件资格规则已由官方确认；实际账户功能仍需检查 |
| iFAST 开户 | 尚未完成，无法执行同名 FPS 入金 |
| Wise 最终节点 | 尚未跑通 |

## 这次最应该记录什么

实际继续操作时，需要保留：

- Wise 注册国家和地址。
- KYC 使用的证件类型。
- KYC 状态。
- 每个币种的余额功能状态。
- 每个币种的 account details 资格与开通状态。
- 额外验证弹窗的完整截图和原文。
- Wise 要求的文件类别。
- 首次入金页面提供的收款信息、金额和 reference。
- iFAST 付款状态。
- Wise 检测、入账和首套账户资料开通时间。

尤其是额外验证弹窗。USD 那次没有保存，结果现在只能根据官方文档判断文件类别，无法还原当时的精确要求。

## 官方资料

1. [Can I get USD account details?](https://wise.com/help/articles/2810318/can-i-get-usd-account-details)：中国地址不能取得 USD account details。
2. [How do I verify my country of residence?](https://wise.com/help/articles/3xConsbhr7buWkQuqDEQ5V/how-do-i-verify-my-country-of-residence)：证件签发国与注册地址国不同时的居留权证明，以及可用文件类别。
3. [How do I receive money with my HKD account details?](https://wise.com/help/articles/12CQfcpIVOHULnFNNzBgmE/how-do-i-receive-money-with-my-hkd-account-details)：中国居民身份证与中国护照在 HKD account details 资格上的差异。
4. [How do I open account details to receive money?](https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money)：当前首套账户资料要求按账户页面完成，并进行身份验证。
5. [上述页面的 2025-08-10 存档](https://web.archive.org/web/20250810112514/https://wise.com/help/articles/2978028/how-do-i-open-account-details-to-receive-money)：当时明确存在 `20 GBP or equivalent` 与身份验证条件，不能当作当前所有账户的永久规则。

## 相关文章

- [总览：从买币到 Wise 的完整出金链路](/moonlit-blog/posts/crypto-to-wise-route-in-progress/)。
- [iFAST 银行承接层：从地址证明到 Wise 首次入金](/moonlit-blog/posts/ifast-bank-bridge-to-wise/)。
- [在国内准备地址证明：汇丰易存 II 类账户的线上开户入口](/moonlit-blog/posts/china-proof-of-address-hsbc-yicun/)。

## Wise 节点的完成标准

Wise 节点真正完成，不是注册成功，不是基础 KYC 通过，也不是 iFAST 显示“已发送”。至少要同时满足：

1. 身份与目标币种没有未解决的额外核验。
2. 同名首次入金被 Wise 正确识别并计入余额。
3. 首套 account details 和实际需要的功能已经在 Wise 页面中可用。

当前这三个条件还没有全部成立，因此 Wise 最后一环仍未跑通。
