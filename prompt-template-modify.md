# 模板改造任务：gamemuban → Roblox 游戏工具站通用模板

工作目录：/Users/shiminzhang/Desktop/gamemuban
当前状态：这是一个 Vercel 部署的产品展示站（含 Fisch Macro 硬编码内容），需要改造成 Cloudflare Pages 静态导出 + Roblox 游戏工具站通用模板。

## 核心改动

### 1. next.config.mjs
替换为 Cloudflare Pages 静态导出配置：
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
```
删除原有的 image optimization（静态导出不支持）、headers、compress 等配置。

### 2. 删除 Vercel 相关文件
- 删除 `vercel.json`
- 删除 `.vercelignore`
- 删除 `src/middleware.ts`（Vercel Edge 中间件）

### 3. 删除 contact API
- 删除 `src/app/api/` 整个目录（nodemailer contact form，静态导出不支持）

### 4. src/lib/games.config.ts 扩展
替换为完整配置类型，新增 routes 和 sections 支持：
```typescript
// 游戏站点配置
export type GameSiteConfig = {
  game: {
    name: string;
    slug: string;
    robloxId?: string;
    developer?: string;
    genre?: string;
    lastUpdated?: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
  };
  pages: {
    path: string;
    title: string;
    description: string;
    priority: number;
    isHub?: boolean;
  }[];
  calculator?: {
    type: 'stat' | 'loot' | 'damage' | 'progression' | 'drop' | 'profit';
    dataFile: string;
    logicDescription: string;
  };
  features: {
    title: string;
    description: string;
    icon?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

// 默认配置模板——Codex 新建游戏站时替换此文件内容即可
export const defaultConfig: GameSiteConfig = {
  game: { name: "Game Name", slug: "game-slug", robloxId: "" },
  seo: {
    siteTitle: "Game Name Guide & Tools",
    siteDescription: "The ultimate Game Name companion — guides, codes, tier lists, calculators. Updated daily.",
    baseUrl: "https://game-slug.gg",
    primaryKeywords: ["Game Name", "Game Name Roblox", "Game Name codes"],
    secondaryKeywords: ["Game Name calculator", "Game Name tier list", "Game Name guide"],
  },
  pages: [
    { path: "/", title: "Home", description: "Home page", priority: 1.0, isHub: true },
    { path: "/calculator", title: "Calculator", description: "Game Name Calculator", priority: 0.9, isHub: true },
    { path: "/codes", title: "Codes", description: "Game Name Codes", priority: 0.9, isHub: true },
    { path: "/tier-list", title: "Tier List", description: "Game Name Tier List", priority: 0.9, isHub: true },
    { path: "/beginner-guide", title: "Beginner Guide", description: "Game Name Guide", priority: 0.8 },
    { path: "/updates", title: "Updates", description: "Game Name Updates", priority: 0.8 },
    { path: "/about", title: "About", description: "About", priority: 0.4 },
    { path: "/privacy", title: "Privacy Policy", description: "Privacy Policy", priority: 0.3 },
    { path: "/disclaimer", title: "Disclaimer", description: "Disclaimer", priority: 0.3 },
  ],
  calculator: { type: "stat", dataFile: "calculator-stat.json", logicDescription: "" },
  features: [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" },
  ],
  faqs: [
    { question: "What is this site?", answer: "This is a fan-made guide." },
  ],
};
```
删除原有的 GameConfig 类型和 TOP_NAV_LIMIT 常量。

### 5. 新增页面目录
创建以下页面的模板文件（每个页面从 games.config.ts 读取对应配置，保持通用）：

**src/app/calculator/page.tsx** — 计算器 Hub 页面模板
- 从 config 读取 game.name
- 写一个基础的 'use client' 计算器骨架（输入→输出模式）
- 包含 FAQ Schema

**src/app/codes/page.tsx** — 兑换码页面模板  
- 从 config 读取 game.name
- 静态代码表格模板（数据部分留空，Codex 填）
- FAQ Schema
- 包含 "Copy" 按钮组件（用独立的 'use client' 组件，在 src/components/CopyButton.tsx 创建）

**src/app/tier-list/page.tsx** — 排行页面模板
- 基础 S/A/B/C/D 分级展示骨架
- 从 src/data/items.json 读取数据

**src/app/tier-list/[slug]/page.tsx** — 动态详情页模板
- generateStaticParams 从 items.json 读取
- 基础详情页骨架

**src/app/beginner-guide/page.tsx** — 新手攻略模板
- 基础文字内容页

**src/app/updates/page.tsx** — 更新日志模板
- 基础文字内容页

**src/app/sitemap.ts** — 动态站点地图
- 从 games.config.ts 的 pages 数组+items.json 生成

### 6. 清理 Fisch Macro 硬编码内容
- **src/components/FAQ.tsx** — 把 faqs 数组改为从 `@/lib/games.config` 的 config.faqs 读取
- **src/components/Hero.tsx** — 去掉 Fisch 特定内容，改为从 config.game.name 读取
- **src/components/Features.tsx** — 改为从 config.features 读取
- **src/components/Footer.tsx** — 去掉 Fisch 特定内容，公司名/描述从 config 读取
- **src/components/Header.tsx** — 导航从 config.pages 动态生成（只显示 isHub 的页面）
- **src/app/page.tsx** — 首页组件保持顺序：Header → Hero → Features → HowTo → Why → FAQ → ShareSection → Footer

### 7. layout.tsx 更新
- metadata 中的 title、description、keywords、openGraph 改为从 config.seo 读取动态值
- 使用 `generateMetadata` 或直接从 config 导入
- 注意：layout.tsx 是 Server Component，可以直接 import 静态 JSON

### 8. src/app/sitemap.xml → 替换为 sitemap.ts
删除静态 `sitemap.xml`，创建 `sitemap.ts`（动态生成，从 config.pages 读取）

### 9. 数据文件骨架
创建 src/data/ 目录，放空的数据文件供 Codex 填充：
- src/data/items.json — `{"items": []}`
- src/data/codes.json — `{"codes": []}`
- src/data/game.config.json — 复制 games.config.ts 的默认值

### 10. public/ 清理
- robots.txt 保留（内容改为通用）
- 删除旧的 favicon 变体，只保留 favicon.svg 和 favicon.ico
- 删除旧的 og-image.svg，创建通用的

## 不要改的文件
- src/components/Picture.tsx
- src/components/ShareButtons.tsx  
- src/components/ShareSection.tsx
- src/components/HeaderShareButton.tsx
- src/components/GoogleSearchPreview.tsx
- src/components/GoogleSearchSchema.tsx
- src/components/WhatIs.tsx
- src/components/Why.tsx
- src/components/HowTo.tsx
- src/components/error.tsx
- src/components/not-found.tsx
- src/app/globals.css
- src/app/robots.ts
- scripts/ 目录下的任何文件
- public/images/ 目录下的图片文件

## 构建验证
改完后运行 `npm run build`，必须 0 error 通过。
