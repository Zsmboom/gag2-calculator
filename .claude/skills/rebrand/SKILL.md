---
name: rebrand
description: 根据关键词和描述内容定制整个网站，包括TDK、内容、SEO、图片、favicon、logo和样式
argument-hint: "[keyword] [description]"
---

# Website Rebrand Skill

这个 skill 用于根据新的关键词和描述内容完全定制当前网站。

## 输入格式

用户将提供：
- **关键词**：网站的核心关键词（如 "Fisch Macro"、"Game Bot"等）
- **描述内容**：包含关键词、详细描述、图片相对地址等信息

## 执行步骤

### 步骤 1: 收集和确认信息

1. 从用户输入中提取关键词和描述内容
2. 确认以下信息：
   - 主关键词（Primary Keyword）
   - 网站标题（Site Title）
   - 网站描述（Site Description）
   - 目标受众（Target Audience）
   - 主要功能点（Key Features）
   - 社交媒体信息（Twitter handle等）
   - 域名（Domain）
   - 品牌颜色方案（Color Scheme）- 使用 AskUserQuestion 工具确认缺失的关键信息

### 步骤 2: TDK 优化（Title, Description, Keywords）

**需要更新的文件：**

1. **主布局文件** - `src/app/layout.tsx`
   - 更新 `metadata.title`
   - 更新 `metadata.description`
   - 更新 `metadata.keywords`
   - 更新 `metadata.authors`
   - 更新 `metadata.creator`
   - 更新 `metadata.publisher`
   - 更新 `openGraph` 配置
   - 更新 `twitter` 配置
   - 更新结构化数据（Schema.org）

2. **所有页面的 metadata**：
   - `src/app/page.tsx`（首页）
   - `src/app/about/page.tsx`（关于我们）
   - `src/app/contact/page.tsx`（联系我们）
   - `src/app/privacy/page.tsx`（隐私政策）
   - `src/app/disclaimer/page.tsx`（免责声明）
   - 所有游戏相关页面

**TDK 优化要求：**
- Title: 50-60 字符，包含主关键词
- Description: 150-160 字符，自然包含关键词
- Keywords: 相关关键词列表（8-12个）
- 每个页面的 TDK 都应该独特且相关

### 步骤 3: 页面内容替换

**需要替换内容的页面：**

#### 3.1 首页 (`src/app/page.tsx`)
- 使用组件化结构，更新以下组件的 props：
  - Hero - 主标题、副标题、CTA按钮文案
  - Features - 功能特性列表
  - WhatIs - "什么是..." 说明部分
  - HowTo - 使用教程
  - Why - 为什么选择我们
  - FAQ - 常见问题
  - Download - 下载说明

#### 3.2 关于我们 (`src/app/about/page.tsx`)
- 公司/产品介绍
- 团队信息
- 使命愿景
- 联系方式

#### 3.3 Legal Information 页面
- **Privacy Policy** (`src/app/privacy/page.tsx`)
  - 隐私政策内容
  - 数据收集说明
  - Cookie 政策

- **Disclaimer** (`src/app/disclaimer/page.tsx`)
  - 免责声明
  - 使用条款
  - 风险提示

#### 3.4 Contact Us (`src/app/contact/page.tsx`)
- 联系表单
- 联系方式
- 社交媒体链接

**内容替换原则：**
- 保持原有的组件结构和样式类名
- 根据关键词调整语言风格
- 确保内容与关键词高度相关
- 保持专业性和可读性

### 步骤 4: SEO 优化

#### 4.1 技术 SEO
- 确保所有页面有 canonical 标签
- 检查 robots.txt 配置
- 更新 sitemap.xml
- 检查结构化数据（JSON-LD）
- 确保移动端友好性

#### 4.2 内容 SEO
- 关键词密度控制在 2-3%
- 使用语义化 HTML 标签（h1, h2, h3等）
- 内部链接优化
- 外部链接添加 rel="noopener noreferrer"

#### 4.3 SEO 检查清单
使用 Bash 工具执行以下检查：
```bash
# 检查 title 标签
grep -r "title" src/app/*/page.tsx

# 检查 meta description
grep -r "description" src/app/

# 检查图片 alt 属性
grep -r "<img" src/ | grep -v "alt="

# 检查 h1 标签（每页只应有一个）
grep -r "<h1" src/
```

### 步骤 5: 图片优化

#### 5.1 添加 Alt 属性
扫描所有图片标签和 Next.js Image 组件：
- 确保所有 `<img>` 和 `<Image>` 标签都有 `alt` 属性
- Alt 文本应该描述图片内容并包含相关关键词
- 装饰性图片使用 `alt=""`

**需要检查的组件：**
- `src/components/Hero.tsx`
- `src/components/Features.tsx`
- `src/components/Picture.tsx`
- 所有其他包含图片的组件

#### 5.2 WebP 格式转换
使用 Sharp 库（已在 package.json 中）转换图片：

```javascript
// 使用 Bash 工具执行转换脚本
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 转换逻辑：
// 1. 扫描 public/images/ 目录
// 2. 找出所有非 .webp 格式的图片（jpg, png, jpeg）
// 3. 使用 sharp 转换为 webp
// 4. 保持原文件名，只改变扩展名
// 5. 更新代码中的图片引用
```

**转换命令示例：**
```bash
# 创建转换脚本
node -e "
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const imagesDir = './public/images';

fs.readdirSync(imagesDir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    const input = path.join(imagesDir, file);
    const output = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    sharp(input).webp({ quality: 85 }).toFile(output);
  }
});
"
```

#### 5.3 更新图片引用
在所有文件中将图片扩展名更新为 .webp：
- 使用 Grep 工具查找所有图片引用
- 使用 Edit 工具批量替换

### 步骤 6: Favicon 和 Logo 生成与替换

#### 6.1 生成 Favicon

**方法 1: 使用 AI 生成（推荐）**
- 询问用户是否需要生成新的 favicon 图标
- 基于关键词和品牌颜色生成 SVG favicon
- 使用 ico-endec 库（已在 devDependencies 中）将 SVG 转换为 ICO

**方法 2: 用户提供**
- 如果用户提供了 favicon 图片，直接使用

**生成步骤：**
1. 创建 SVG favicon（16x16, 32x32, 48x48）
2. 转换为 ICO 格式
3. 生成 Apple Touch Icon（180x180）
4. 添加版本号避免缓存问题

**需要更新的文件：**
- `public/favicon.ico`
- `public/favicon.svg`
- `public/apple-touch-icon.svg`
- `public/favicon-version.json`
- `src/app/layout.tsx` 中的 icons 配置

#### 6.2 生成 Logo

**Logo 生成要求：**
- 创建 SVG 格式的 logo
- 包含品牌名称和图标
- 适配深色和浅色主题
- 响应式尺寸（桌面版、移动版）

**Logo 放置位置：**
- `public/logo.svg` - 主 logo
- `public/logo-light.svg` - 浅色主题 logo
- `public/logo-dark.svg` - 深色主题 logo

**需要更新的组件：**
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- OG 图片（`public/images/og-image.svg`）

### 步骤 7: 网站风格定制

#### 7.1 颜色方案更新

基于关键词和品牌定位，更新 Tailwind CSS 配置：

**需要更新的文件：**
- `tailwind.config.js` 或 `tailwind.config.ts`

**颜色系统：**
- 主色（Primary）：品牌主色
- 次色（Secondary）：辅助色
- 强调色（Accent）：CTA 按钮、链接
- 中性色（Neutral）：文本、背景
- 语义色：成功、警告、错误、信息

**示例配置：**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#...',
          100: '#...',
          // ... 其他色阶
          900: '#...',
        },
        // 其他颜色定义
      }
    }
  }
}
```

#### 7.2 组件样式更新

根据新的品牌风格更新以下组件：

**核心组件：**
- `src/components/Header.tsx` - 导航栏
- `src/components/Hero.tsx` - 首屏英雄区
- `src/components/Features.tsx` - 特性展示
- `src/components/Footer.tsx` - 页脚
- `src/components/Download.tsx` - 下载按钮
- `src/app/globals.css` - 全局样式

**样式更新原则：**
- 保持响应式设计
- 使用 Tailwind CSS 类
- 确保深色模式兼容
- 保持可访问性（对比度、字体大小）

#### 7.3 字体更新

如果需要更换字体：
- 更新 `src/app/layout.tsx` 中的 Google Fonts 导入
- 选择与品牌风格匹配的字体家族

### 步骤 8: 配置文件更新

#### 8.1 网站配置
如果存在配置文件（如 `src/config/site.ts`），更新：
- 网站名称
- 网站描述
- 社交媒体链接
- 联系信息
- 导航菜单

#### 8.2 其他配置文件
- `package.json` - name 字段
- `public/manifest.json` - PWA 配置
- `public/robots.txt` - 爬虫配置
- `README.md` - 项目说明（如果需要）

### 步骤 9: 验证和测试

#### 9.1 功能测试
```bash
# 构建测试
npm run build

# 启动开发服务器
npm run dev
```

#### 9.2 SEO 检查
- Google Search Console 验证
- 结构化数据测试（schema.org）
- 移动友好性测试
- 页面速度测试

#### 9.3 图片检查
```bash
# 检查所有图片是否有 alt 属性
grep -r "Image\|img" src/components/ | grep -v "alt"

# 检查 webp 格式使用情况
find public/images -type f -name "*.webp"
```

#### 9.4 链接检查
- 检查内部链接是否正确
- 检查外部链接是否有效
- 确保没有 404 页面

### 步骤 10: 生成报告

完成所有步骤后，生成一份详细报告：

**报告内容：**
1. **已完成的更改：**
   - TDK 更新列表（按页面）
   - 内容更新列表
   - 图片优化情况
   - Favicon/Logo 更新
   - 样式更新摘要

2. **SEO 优化清单：**
   - ✅ Meta 标签完整性
   - ✅ 图片 Alt 属性
   - ✅ 结构化数据
   - ✅ Sitemap 更新
   - ✅ Robots.txt 配置

3. **待办事项（如果有）：**
   - 需要手动调整的内容
   - 需要用户确认的决策
   - 建议的额外优化

4. **构建和部署建议：**
   - 缓存清除步骤
   - 验证检查列表
   - 监控指标

## 工具使用指南

### 使用的工具
- **Read**: 读取现有文件内容
- **Edit**: 编辑文件内容
- **Write**: 创建新文件
- **Glob**: 查找文件
- **Grep**: 搜索内容
- **Bash**: 执行命令（图片转换、构建测试等）
- **AskUserQuestion**: 询问用户缺失的信息

### 执行顺序
1. 收集信息 → AskUserQuestion
2. 读取现有文件 → Read
3. 批量查找文件 → Glob/Grep
4. 更新内容 → Edit
5. 创建新文件 → Write
6. 执行转换 → Bash
7. 验证测试 → Bash

## 注意事项

1. **备份提醒**：开始前提醒用户确认已有 Git 提交或备份
2. **渐进式执行**：不要一次性修改所有文件，按步骤执行
3. **用户确认**：关键决策（颜色、风格）需要用户确认
4. **保持一致性**：确保所有更新在风格和语气上一致
5. **测试优先**：每完成一个大步骤，运行构建测试
6. **SEO 最佳实践**：遵循 Google SEO 指南
7. **可访问性**：确保 WCAG 2.1 AA 级别合规
8. **性能优化**：图片压缩、懒加载、代码分割

## 使用示例

### 示例 1: 基本使用
```
/rebrand "Gaming Bot" "A powerful automation tool for gamers. Features include auto-farming, resource collection, and 24/7 operation. Supports multiple games."
```

### 示例 2: 详细使用
用户提供一个 Markdown 文件或 JSON 配置：
```
/rebrand config.json
```

config.json 内容：
```json
{
  "keyword": "Gaming Bot",
  "title": "Gaming Bot - Ultimate Game Automation Tool",
  "description": "Enhance your gaming experience with automated operations.",
  "domain": "https://gamingbot.com",
  "colors": {
    "primary": "#3B82F6",
    "secondary": "#8B5CF6"
  },
  "features": [
    "Auto-farming",
    "Resource collection",
    "24/7 operation"
  ],
  "images": {
    "hero": "/images/hero-gaming.webp",
    "features": "/images/features-gaming.webp"
  }
}
```

## 错误处理

- 如果找不到必要的文件，提示用户并跳过该步骤
- 如果图片转换失败，记录错误并继续
- 如果构建失败，回滚更改并报告问题
- 始终保持友好的错误提示

## 最终确认

完成所有步骤后：
1. 显示更改摘要
2. 询问用户是否需要调整
3. 提供下一步建议（部署、测试等）
4. 创建 Git 提交（如果用户同意）

---

**执行此 skill 时，请严格按照上述步骤顺序执行，确保每个步骤完成后再进行下一步。**
