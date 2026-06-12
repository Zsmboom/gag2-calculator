# Claude Code 构建指令：从 Obsidian → 游戏网站

---

## ⚠️ 重要前置说明

### 这个目录是模板（Template），不是直接改的文件

- `gamemuban/` **是模板源码目录**，不要直接在这里面改
- 每次新建一个游戏站，操作流程是：
  1. **复制** 整个 `gamemuban/` 目录到新的项目文件夹（如 `fisch-site/`、`blox-fruits-site/`）
  2. 在 **新目录** 中执行 `npm install`
  3. 在新目录中按本文档步骤修改代码

### 模板自带 Fisch Macro 内容，每个新站都必须清理

这个模板之前用于 "Fisch Macro" 网站，所以源码中所有 `Fisch Macro`、`fischmacroo.com`、`Fisch` 等字眼都是**模板自带的残留**，不是你应该保留的内容。每个新建的游戏站都必须：

- 把所有 `Fisch Macro` → 替换为当前游戏名
- 把所有 `fischmacroo.com` → 替换为当前域名
- 把所有 Fisch 特定的图片/截图 → 删除或替换

本文档第六步有完整的清理清单。

---

## 工作流程概览

1. 用户提供 Obsidian 文件夹路径（包含该游戏的所有资讯）
2. 你读取该文件夹中的所有 `.md` 文件，提取游戏信息
3. 按照本文档的规则，逐项修改新目录中的模板代码
4. 运行 `npm run build` 验证零错误通过

---

## 第一步：从 Obsidian 提取游戏基本信息

从 Obsidian 内容中提取以下字段，写入 `src/lib/games.config.ts` 的 `defaultConfig`：

| 配置字段 | Obsidian 中寻找 | 说明 |
|---------|----------------|------|
| `game.name` | 游戏正式名称 | Roblox 游戏名 |
| `game.slug` | 名称的 URL 友好形式 | 全小写 + 连字符，如 `fisch` |
| `game.robloxId` | 如果 Obsidian 有提供 | Roblox 游戏 ID |
| `game.developer` | 如果有开发者信息 | 可选 |
| `game.genre` | 游戏类型 | 如 Fishing, RPG, Simulator |
| `game.lastUpdated` | 最近更新日期 | YYYY-MM-DD 格式 |
| `seo.siteTitle` | 合成 | 格式：`"{gameName} Guides & Tools"` |
| `seo.siteDescription` | 从 Obsidian 摘要或描述提炼 | 1-2 句话，包含游戏名和核心玩法 |
| `seo.baseUrl` | 从用户获取 | 如 `https://fisch.gg` |
| `seo.primaryKeywords` | 游戏名 + "Roblox" + "codes" 等 | 3-5 个核心词 |
| `seo.secondaryKeywords` | 具体工具词 | 如 calculator, tier list, guide |

### 命名规范

- `slug`：全小写英文字母 + 连字符，禁止中文、空格、特殊字符
- 所有 SEO 文本用英文，不要中文
- 标题格式：`"{Game Name} Guides & Tools"` 或 `"{Game Name} {Page Title}"`

---

## 第二步：读取 Obsidian 内容，逐页映射

对 Obsidian 文件夹中的每个 `.md` 文件，你需要判断它对应模板的哪个页面，并按以下规则处理。

### 页面映射规则

#### 1. 首页 `/` — `src/app/page.tsx`

**不需要修改此文件本身**。首页的组件内容是固定的（Header → Hero → Features → HowTo → Why → FAQ → ShareSection → Footer），所有文本都从 config 和 data 读取。

需要确保以下内容已从 Obsidian 中提取：
- `config.game.name` — 游戏名
- `config.seo.siteDescription` — 首页描述
- `config.features` — 功能点列表，从 Obsidian 抽取 4-8 个
- `config.faqs` — FAQ，从 Obsidian 抽取 3-6 个

#### 2. 兑换码 `/codes/` — `src/app/codes/page.tsx`

确认 Obsidian 中是否有 codes 列表。如果有，填入 `src/data/codes.json`：

```json
{
  "codes": [
    { "code": "XXXXX", "reward": "奖励描述", "status": "active", "addedAt": "2026-06-01" },
    { "code": "YYYYY", "reward": "奖励描述", "status": "expired" }
  ]
}
```

- `status` 可选值：`active` / `expired` / `new`
- 如果没有 codes，保持空数组 `"codes": []`，页面会自动显示空状态

#### 3. 排行走廊 `/tier-list/` — `src/app/tier-list/page.tsx`

确认 Obsidian 中是否有游戏物品/角色排名信息。如果有，填入 `src/data/items.json`：

```json
{
  "items": [
    {
      "slug": "item-id",
      "name": "显示名称",
      "tier": "S",
      "description": "简短描述",
      "stats": { "攻击": 100, "速度": 50 },
      "howToGet": "获取方式说明",
      "patchNotes": "版本变更说明"
    }
  ]
}
```

- `tier` 仅允许：`S | A | B | C | D`
- `slug` 必须唯一，用作 URL 路径
- `stats` 是可选对象，key 和 value 都不固定，按游戏实际属性来
- `howToGet` 和 `patchNotes` 是可选字符串
- 如果没有排名数据，留空数组 `"items": []`

#### 4. 排行走廊详情 `/tier-list/[slug]/` — 自动处理

不需要修改此文件。使用了 `generateStaticParams()` 自动从 `items.json` 生成所有详情页。

#### 5. 计算器 `/calculator/` — `src/app/calculator/page.tsx`

确认 Obsidian 中是否有计算器需求。

在 `config.calculator` 中配置类型：

| `calculator.type` | 适用场景 |
|------------------|---------|
| `stat` | 属性/数值计算（如伤害 = 等级 × 倍率） |
| `loot` | 掉落计算 |
| `damage` | 伤害公式 |
| `progression` | 升级进度 |
| `drop` | 概率计算 |
| `profit` | 收益计算 |

然后编辑 `src/app/calculator/CalculatorClient.tsx`：
- 替换 `result` 的计算逻辑为真实公式
- 添加/删除输入字段

如果游戏没有计算器需求，将 `config.calculator` 设为 `undefined`，**并删除** `src/app/calculator/` 目录。

#### 6. 新手攻略 `/beginner-guide/` — `src/app/beginner-guide/page.tsx`

从 Obsidian 中提取新手攻略内容，替换页面中的占位文案。保持页面结构（核心玩法 → 新手优先级 → 常见错误三段式），但把 `Codex: replace this` 标记的文字替换为真实内容。

#### 7. 更新日志 `/updates/` — `src/app/updates/page.tsx`

从 Obsidian 提取更新记录，替换占位文案。每期更新用一个 `<article>`，包含日期和版本号。

**如果没有更新日志数据，删除此页面目录**。

#### 8. 关于我们 `/about/` — `src/app/about/page.tsx`

**完全重写**。当前文件硬编码了 "Fisch Macro" 内容。用 Obsidian 中的团队/故事信息替换：

- 标题改为游戏名
- 故事、使命、团队成员信息来自 Obsidian
- 如果有团队照片，替换 `public/images/team/*` 图片

**注意**：`export const metadata` 中的硬编码 title/description 也要替换！

#### 9. 隐私政策 `/privacy/` — `src/app/privacy/page.tsx`

**必须重写** title 和 metadata 中的 "Fisch Macro" 为当前游戏名。正文内容（隐私条款模板）可以保留，只需替换：
- 页面标题
- `<title>` metadata
- 游戏名称出现处
- 联系邮箱（根据实际情况调整）

#### 10. 免责声明 `/disclaimer/` — `src/app/disclaimer/page.tsx`

同上，**必须重写** title 和 metadata，替换游戏名和邮箱。正文模板可保留。

#### 11. 404 页面 `not-found.tsx`

**需要修改**：
- 中文文案改为英文（全站统一英文）
- `href="/downloads"` 链接如果无效，改为 `href="/"`
- 去掉与当前游戏无关的文字

#### 12. 错误边界 `error.tsx`

不需要修改，保持通用。

---

## 第三步：新增页面

如果 Obsidian 内容中有模板没有的页面类型，按以下规则新增：

### 新增规则

- 在 `src/app/` 下按 Next.js App Router 规范创建目录
- 在 `config.pages` 数组中添加新页面的路由配置（`isHub: false`，适当 `priority`）
- 页面模板使用 `Header` + `main` + `Footer` 三段式布局（参考 `beginner-guide/page.tsx`）
- 每页必须导出 `metadata` 对象，格式为：

```ts
export const metadata: Metadata = {
  title: `具体页面标题 | ${config.seo.siteTitle}`,
  description: "SEO 描述，包含关键词",
  alternates: { canonical: `${config.seo.baseUrl}/page-path/` },
};
```

- 内容型页面用 Server Component（不加 `'use client'`）
- 只有需要交互（按钮点击、表单输入、动画）才加 `'use client'`

---

## 第四步：SEO 规则

### 每个页面的 SEO 关键词策略

| 页面 | 标题模板 | 关键词重点 |
|------|---------|-----------|
| 首页 | `{Game} Guides & Tools` | 游戏名 + Roblox + 攻略 |
| Codes | `{Game} Codes (Working)` | 兑换码 + 激活码 + 奖励 |
| Tier List | `{Game} Tier List` | 排名 + 排行 + 最强 |
| Tier Detail | `{Item} — {Game} Tier {X}` | 物品名 + 评价 |
| Calculator | `{Game} {Type} Calculator` | 计算器 + 公式 |
| Beginner Guide | `{Game} Beginner Guide` | 新手 + 攻略 + 入门 |
| Updates | `{Game} Updates & Patch Notes` | 更新 + 补丁 + 版本 |

### JSON-LD 结构化数据

- **首页**：在 `layout.tsx` 已有全局配置（SiteNavigationElement）
- **Codes/Calculator 页面**：已有内联 FAQPage Schema，确认 QA 内容已替换为真实数据
- **所有页面**：在 `GoogleSearchSchema.tsx` 中修改默认值中的 "Fisch Macro" 为当前游戏名

---

## 第五步：图片和资源替换

| 文件 | 操作 |
|------|------|
| `public/images/logo/logo.svg` | 替换为游戏 Logo（从 Obsidian 获取或用户提供） |
| `public/images/hero-main.svg` | 替换为主页 Hero 图 |
| `public/favicon.svg` | 替换 Favicon |
| `public/favicon.ico` | 替换 Favicon |
| `public/apple-touch-icon.svg` | 如需要 |
| `public/images/og-image.svg` | 替换 OG 社交分享图 |
| `public/images/hero/fisch-hero.*` | **删除这些 Fisch 特定图片** |
| `public/images/screenshots/Fisch-Macro.*` | **删除这些 Fisch 特定截图** |
| `public/images/team/*.svg` / `*.jpg` | 替换为真实团队照片（如有） |
| `public/images/about/*.svg` | 替换或保留通用图片 |

### 图片格式策略

- 源文件可以是 `.jpg` 或 `.png`
- 运行 `node scripts/convert-images.js` 自动生成 `.avif` 和 `.webp` 版本
- `Picture` 组件会自动选最优格式

---

## 第六步：清理 Fisch 硬编码残留

以下文件必须逐项检查并替换：

| 文件 | 需要替换的内容 |
|------|--------------|
| `src/components/HowTo.tsx` | **全部重写**。当前是 Fisch Macro 安装步骤，替换为当前游戏的使用指南/攻略内容 |
| `src/components/Why.tsx` | 替换测试评价内容，将 "Fisch Macro" 改为当前工具/网站名称 |
| `src/components/GoogleSearchSchema.tsx` | 修改所有默认参数中的 "Fisch Macro" 为当前游戏名 |
| `src/components/GoogleSearchPreview.tsx` | 同上，修改默认值 |
| `src/components/ShareSection.tsx` | 修改 "Fisch Macro" 为当前游戏名 |
| `src/components/HeaderShareButton.tsx` | 修改 "Fisch Macro" 为当前游戏名 |
| `src/components/ShareButtons.tsx` | 修改默认值中的 "Fisch Macro" |
| `src/components/Footer.tsx` | 检查社交链接（github/twitter/email）是否指向真实地址 |
| `src/app/robots.ts` | 修改 `host` 和 `sitemap` URL 为当前站点 |
| `src/app/about/page.tsx` | **完全重写**（见上文） |
| `src/app/privacy/page.tsx` | 替换游戏名和邮箱 |
| `src/app/disclaimer/page.tsx` | 替换游戏名和邮箱 |
| `src/app/not-found.tsx` | 中文改为英文，修复链接 |

### 搜索替换确认清单

全项目搜索以下关键词，确认已全部替换：
- `Fisch Macro` / `Fisch`
- `fischmacroo.com`
- `fisch-macro`
- `privacy@fischmacroo.com`
- `legal@fischmacroo.com`

---

## 第七步：Sitemap 和 Robots

### `sitemap.ts` — 不需要修改

已从 `config.pages` 和 `items.json` 自动生成。

### `robots.ts`

修改两个 URL：
```ts
host: 'https://你的域名.com',
sitemap: 'https://你的域名.com/sitemap.xml',
```

---

## 第八步：构建验证

```bash
npm run build    # 必须 0 error
npm run dev      # 启动后手动检查每个页面
```

### 验证清单

- [ ] `npm run build` 通过，无 TypeScript 错误
- [ ] 首页能正常打开，游戏名正确显示
- [ ] Header 导航链接有效
- [ ] Codes 页面显示正确（或空状态）
- [ ] Tier List 页面显示正确（或空状态）
- [ ] 每个详情页（tier-list/[slug]）能打开
- [ ] Calculator 页面显示正确（或已删除）
- [ ] Beginner Guide 内容是真实攻略
- [ ] About 页面不是 Fisch Macro
- [ ] Footer 链接有效（社交链接、法律页面）
- [ ] 暗色模式切换正常
- [ ] 移动端菜单正常
- [ ] 404 页面显示正确，链接有效
- [ ] `robot.ts` 的 host/sitemap 已更新
- [ ] 全项目无 "Fisch Macro" 残留

---

## 第九步：不需要改动的文件

以下文件是通用基础设施，**不要修改**：

- `src/components/Picture.tsx` — 图片格式选择组件
- `src/app/globals.css` — 全局样式
- `src/app/layout.tsx` — 根布局（已从 config 读取，无需改）
- `src/app/error.tsx` — 通用错误边界
- `src/app/sitemap.ts` — 自动生成
- `src/app/robots.ts` — 只需改 URL
- `tailwind.config.cjs` — 主题配置
- `next.config.mjs` — 构建配置
- `vite.config.ts` — 保留不动
- `scripts/` 目录下的构建脚本
- `src/data/game.config.json` — 只读参考，实际改 `games.config.ts`

---

## 关键原则

1. **配置驱动**：能放 config 的数据不要硬编码
2. **Server Component 优先**：只在需要交互时用 `'use client'`
3. **英文统一**：全站使用英文，不要混入中文
4. **SEO 每页必配**：每个页面都需要 `export const metadata`
5. **先读后写**：修改前先读文件，理解现有结构再改
6. **构建验证**：改完一定要 `npm run build`
7. **空数据兜底**：codes.json / items.json 没有数据也要保持空数组，页面有空的 UI 状态
