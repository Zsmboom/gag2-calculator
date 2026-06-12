# Rebrand Skill - 网站定制自动化工具

## 📖 简介

这个 skill 可以根据新的关键词和品牌信息，全自动定制你的 Next.js 网站，包括：

- ✅ TDK 优化（Title, Description, Keywords）
- ✅ 页面内容替换（首页、关于、联系、法律页面等）
- ✅ SEO 全面优化
- ✅ 图片 Alt 属性添加
- ✅ 图片格式转换为 WebP
- ✅ Favicon 和 Logo 生成与替换
- ✅ 网站风格定制（颜色、字体、组件样式）

## 🚀 快速开始

### 方法 1: 使用配置文件（推荐）

1. **复制配置模板：**
```bash
cp .claude/skills/rebrand/config-template.json my-rebrand-config.json
```

2. **编辑配置文件：**
```json
{
  "keyword": "My Gaming Tool",
  "title": "My Gaming Tool - Best Automation Software",
  "description": "The ultimate gaming automation tool...",
  "domain": "https://mygamingtool.com",
  ...
}
```

3. **运行 skill：**
```
/rebrand my-rebrand-config.json
```

### 方法 2: 直接输入

```
/rebrand "Gaming Bot" "A powerful automation tool for gamers..."
```

## 📋 配置文件说明

### 必填字段

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `keyword` | string | 主关键词 | "Gaming Bot" |
| `title` | string | 网站标题 | "Gaming Bot - Ultimate Tool" |
| `description` | string | 网站描述（150-160字符） | "Enhance your gaming..." |
| `domain` | string | 网站域名 | "https://gamingbot.com" |

### 可选字段

#### 品牌信息
```json
{
  "siteName": "Gaming Bot",
  "author": "Gaming Bot Team",
  "publisher": "Gaming Bot Inc.",
  "twitter": "@gamingbot"
}
```

#### 颜色方案
```json
{
  "colors": {
    "primary": {
      "main": "#3B82F6",
      "light": "#60A5FA",
      "dark": "#2563EB"
    },
    "secondary": {
      "main": "#8B5CF6"
    }
  }
}
```

#### 功能特性
```json
{
  "features": [
    "Auto-farming: Collect resources automatically",
    "24/7 Operation: Run continuously",
    "Multi-game support: Works with 50+ games"
  ]
}
```

#### 页面内容
```json
{
  "pages": {
    "home": {
      "hero": {
        "title": "Welcome to Gaming Bot",
        "subtitle": "Automate your gaming experience",
        "cta": "Download Now"
      }
    },
    "about": {
      "title": "About Us",
      "content": "We are a team of..."
    }
  }
}
```

## 🛠️ 辅助工具

### 1. Logo & Favicon 生成工具 ⭐ NEW

自动生成专业的 Logo 和 Favicon，支持多种 AI 服务！

**快速开始：**
```bash
# 方法 1: 本地生成（免费，简单）
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6"

# 方法 2: 使用 OpenAI DALL-E 3（高质量）
export OPENAI_API_KEY="sk-proj-your-key"
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "openai"

# 方法 3: 使用 Ideogram（最适合 Logo）
export IDEOGRAM_API_KEY="your-key"
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "ideogram"
```

**支持的服务：**
- 🆓 **本地生成**：免费，即时，简单 SVG
- 🤖 **OpenAI DALL-E 3**：最高质量（$0.04-0.08/图）
- 🎨 **Replicate SDXL**：开源，便宜（$0.0065/图）
- ✨ **Ideogram**：专业 Logo，擅长文字（$8/月）

**生成文件：**
- `favicon.svg` / `favicon.ico`
- `apple-touch-icon.png`
- `logo.svg` / `logo.png` / `logo.webp`

**详细配置：** 查看 [BRANDING-GUIDE.md](./BRANDING-GUIDE.md)

---

### 2. SEO 检查工具

运行全面的 SEO 检查：

```bash
./.claude/skills/rebrand/seo-check.sh
```

**检查项目：**
- ✅ Meta 标签完整性
- ✅ Title 和 Description 长度
- ✅ 图片 Alt 属性
- ✅ H1 标签（每页一个）
- ✅ WebP 图片使用情况
- ✅ robots.txt 和 sitemap
- ✅ 结构化数据
- ✅ Canonical URL
- ✅ 外部链接 rel 属性

### 3. 图片转换工具

将所有 JPG/PNG 图片转换为 WebP：

```bash
node .claude/skills/rebrand/convert-images.js
```

**特性：**
- 递归扫描 `public/images/` 目录
- 自动跳过已转换的图片
- 显示文件大小节省百分比
- 生成转换报告

**配置选项（在脚本中修改）：**
```javascript
const CONFIG = {
  inputDir: './public/images',
  quality: 85,              // WebP 质量 (0-100)
  supportedFormats: ['.jpg', '.jpeg', '.png'],
  skipExisting: true        // 跳过已存在的 WebP 文件
};
```

## 📝 使用步骤

### 步骤 1: 准备工作

1. **确保代码已提交：**
```bash
git status
git add .
git commit -m "Backup before rebrand"
```

2. **准备配置文件或关键词描述**

### 步骤 2: 运行 Skill

```
/rebrand my-config.json
```

或

```
/rebrand "Your Keyword" "Your description here..."
```

### 步骤 3: 回答问题

Skill 会询问一些必要信息（如果配置文件中没有提供）：
- 品牌颜色方案
- 社交媒体账号
- 特定页面内容
- 风格偏好

### 步骤 4: 审查和确认

Skill 会显示将要进行的更改，请仔细审查后确认。

### 步骤 5: 执行转换

Skill 将按以下顺序执行：
1. 更新 TDK（所有页面）
2. 替换页面内容
3. 优化 SEO
4. 处理图片（Alt + WebP 转换）
5. 生成 Favicon 和 Logo
6. 更新网站风格

### 步骤 6: 测试验证

```bash
# 运行 SEO 检查
./.claude/skills/rebrand/seo-check.sh

# 构建测试
npm run build

# 启动开发服务器
npm run dev
```

### 步骤 7: 部署

```bash
# 提交更改
git add .
git commit -m "Rebrand to [Your Keyword]"
git push

# 部署到生产环境
npm run build
npm run start
```

## 🎯 最佳实践

### 1. 关键词选择
- ✅ 选择具体、有搜索量的关键词
- ✅ 避免过于宽泛的词（如"游戏"、"工具"）
- ✅ 考虑长尾关键词（如"Roblox自动化工具"）

### 2. 内容编写
- ✅ Description 长度：150-160 字符
- ✅ Title 长度：50-60 字符
- ✅ 自然融入关键词，避免堆砌
- ✅ 每个页面的内容要独特

### 3. 图片优化
- ✅ 使用描述性的 Alt 文本
- ✅ Alt 文本包含相关关键词
- ✅ WebP 质量设置为 80-90
- ✅ 装饰性图片使用 `alt=""`

### 4. SEO 优化
- ✅ 每页只有一个 H1 标签
- ✅ 使用层级标题（H1 → H2 → H3）
- ✅ 内部链接使用描述性锚文本
- ✅ 外部链接添加 `rel="noopener noreferrer"`

### 5. 性能优化
- ✅ 图片懒加载
- ✅ 代码分割
- ✅ 压缩资源
- ✅ 使用 CDN

## 🔧 故障排除

### 问题 1: Skill 找不到某些文件

**解决方案：**
- 检查文件路径是否正确
- 确保你在项目根目录运行 skill
- 某些页面可能不存在，跳过即可

### 问题 2: 图片转换失败

**解决方案：**
```bash
# 确保 sharp 已安装
npm install sharp

# 检查图片文件权限
chmod 644 public/images/*

# 手动运行转换
node .claude/skills/rebrand/convert-images.js
```

### 问题 3: 构建失败

**解决方案：**
```bash
# 清理缓存
rm -rf .next
rm -rf node_modules
npm install

# 重新构建
npm run build
```

### 问题 4: SEO 检查报告问题

**解决方案：**
- 运行 SEO 检查查看具体问题
- 根据报告逐项修复
- 可以手动调整某些项目

## 📊 检查清单

使用此清单确保所有步骤都已完成：

### 准备阶段
- [ ] 代码已提交到 Git
- [ ] 配置文件已准备好
- [ ] 了解当前网站结构

### 执行阶段
- [ ] 运行 `/rebrand` skill
- [ ] 回答所有必要问题
- [ ] 审查并确认更改

### TDK 更新
- [ ] 主布局 metadata 已更新
- [ ] 所有页面 metadata 已更新
- [ ] Title 长度符合 SEO 标准（50-60字符）
- [ ] Description 长度符合标准（150-160字符）
- [ ] Keywords 相关且不重复

### 内容更新
- [ ] 首页内容已更新
- [ ] About 页面已更新
- [ ] Contact 页面已更新
- [ ] Privacy Policy 已更新
- [ ] Disclaimer 已更新
- [ ] 所有内容与关键词一致

### SEO 优化
- [ ] 结构化数据已更新
- [ ] robots.txt 已检查
- [ ] sitemap 已更新
- [ ] Canonical URL 已设置
- [ ] 每页有且仅有一个 H1

### 图片优化
- [ ] 所有图片有 Alt 属性
- [ ] 图片已转换为 WebP
- [ ] 旧格式图片已处理
- [ ] OG 图片已更新

### 品牌资源
- [ ] Favicon 已生成/更新
- [ ] Logo 已生成/更新
- [ ] Apple Touch Icon 已更新
- [ ] PWA manifest 已更新

### 样式更新
- [ ] 颜色方案已更新
- [ ] 主题色已应用
- [ ] 组件样式已调整
- [ ] 深色模式已测试

### 测试验证
- [ ] SEO 检查通过
- [ ] 构建成功（`npm run build`）
- [ ] 本地测试正常（`npm run dev`）
- [ ] 所有页面可访问
- [ ] 图片正常显示
- [ ] 链接正常工作

### 部署上线
- [ ] 代码已提交
- [ ] 已推送到远程仓库
- [ ] 已部署到生产环境
- [ ] 生产环境测试通过
- [ ] 清除 CDN 缓存（如果有）

## 🎓 示例

### 示例 1: 从 Fisch Macro 改为 Gaming Bot

**配置文件：**
```json
{
  "keyword": "Gaming Bot",
  "title": "Gaming Bot - Ultimate Game Automation Tool",
  "description": "Automate your gaming experience with Gaming Bot. Support for 50+ games, 24/7 operation, and advanced features.",
  "domain": "https://gamingbot.com",
  "colors": {
    "primary": { "main": "#3B82F6" },
    "secondary": { "main": "#10B981" }
  },
  "features": [
    "Auto-farming for 50+ games",
    "24/7 unattended operation",
    "Advanced AI-powered strategies",
    "100% safe and undetectable"
  ]
}
```

**运行：**
```
/rebrand gaming-bot-config.json
```

### 示例 2: 简化使用

```
/rebrand "Minecraft Bot" "The best automation tool for Minecraft. Auto-mine, auto-build, and auto-farm with ease."
```

## 📞 需要帮助？

如果遇到问题：

1. **查看 SEO 报告：**
   ```bash
   ./.claude/skills/rebrand/seo-check.sh
   ```

2. **检查构建日志：**
   ```bash
   npm run build 2>&1 | tee build.log
   ```

3. **查看错误：**
   - 检查浏览器控制台
   - 检查 Next.js 开发服务器输出

4. **回滚更改：**
   ```bash
   git reset --hard HEAD~1
   ```

## 📄 许可证

此 skill 作为项目工具提供，遵循项目许可证。

---

**享受你的全新品牌网站！** 🎉
