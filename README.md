# 月背来信

一个以 Markdown 保存内容、由 Astro 构建、面向 GitHub Pages 发布的中文静态博客。

## 本地运行

```powershell
npm install
npm run dev
```

生产验证：

```powershell
npm run check
npm run build
npm run preview
```

## 新增文章

在 `src/content/posts/` 新建 Markdown 文件：

```yaml
---
title: 文章标题
description: 一句话摘要
published: 2026-08-21
tags:
  - 标签
draft: false
---
```

文章、图片与主题相互独立。普通图片放入 `public/images/`，并在 Markdown 中使用带站点基础路径的绝对地址，或放在文章附近并通过 Astro 资产能力引用。

## GitHub Pages

`.github/workflows/deploy.yml` 使用 Astro 官方 Action 构建并发布。当前配置对应仓库 `FSOTM/moonlit-blog`：

- 站点：`https://fsotm.github.io`
- 基础路径：`/moonlit-blog`

创建远端仓库并首次推送后，在仓库设置的 Pages 页面选择 **GitHub Actions** 作为发布源。

绑定自定义域名时，需要更新 `astro.config.mjs` 的 `site`，删除 `base`，并添加 `public/CNAME`。
