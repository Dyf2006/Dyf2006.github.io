# Dennis_Ding 的个人主页

Astro + Markdown 的内容站，三个栏目：文学感悟、音乐学习、科研心得。
线上地址：<https://dyf2006.github.io>（由 `.github/workflows/deploy.yml` 自动构建部署）

## 加一篇文章

在 GitHub 网页上：**Add file → Create new file**，放到对应栏目目录，直接提交到 `main` 即自动上线。

| 栏目 | 目录 | 文章地址 |
| :-- | :-- | :-- |
| 文学 | `src/content/writing/` | `/writing/文件名/` |
| 音乐 | `src/content/music/` | `/music/文件名/` |
| 科研 | `src/content/research/` | `/research/文件名/` |

文件名用小写英文加短横线，它会变成 URL 的一部分。

```markdown
---
title: '文章标题'
description: '一句话摘要，出现在列表页和 RSS 里'
date: 2026-11-15
tags: ['随笔']
source: '可选，作品名或出处'
---

正文用 Markdown 写。
```

音乐栏目把 `source` 换成 `piece`（曲目）和 `stage`（入门 / 在练 / 完成）；科研用 `topic`。
`draft: true` 的文章不进列表、不进 RSS。图片放 `public/images/`，正文里用 `/images/xxx.jpg` 引用。

## 改站点信息

- 站名、一句话介绍、栏目文案、页脚链接：`src/data/site.ts`
- 关于页正文：`src/pages/about.astro`
- 配色与正文字号：`src/styles/global.css` 顶部的 CSS 变量

## 本地跑

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物在 dist/
```

## 换仓库名或绑自有域名时

改 `astro.config.mjs` 的 `site`。它决定 RSS 与 canonical 里的链接前缀，线上地址变了必须同步。
若不用 `Dyf2006.github.io` 这个仓库名，而是放在 `Dyf2006/别的名字` 下，需要额外加 `base: '/别的名字'`，否则样式和链接会 404。
