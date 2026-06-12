# 🎨 Logo & Favicon 生成配置指南

## 📋 支持的 AI 服务

### 1. **OpenAI DALL-E 3**（推荐 - 质量最高）

**优点：**
- ✅ 图像质量最高
- ✅ API 简单稳定
- ✅ 理解自然语言最好
- ✅ 擅长生成 logo 和图标

**价格：**
- Standard: $0.040 / image (1024×1024)
- HD: $0.080 / image (1024×1024)

**如何获取 API Key：**
1. 访问 https://platform.openai.com/api-keys
2. 登录或注册 OpenAI 账号
3. 点击 "Create new secret key"
4. 复制 key（格式：`sk-proj-...`）

**配置方法：**

方法 A - 环境变量（推荐）：
```bash
export OPENAI_API_KEY="sk-proj-your-key-here"
```

方法 B - 直接编辑脚本：
```javascript
// 在 generate-branding.js 第 15 行附近
openai: {
  apiKey: 'sk-proj-your-key-here',  // 替换这里
  model: 'dall-e-3',
  size: '1024x1024',
  quality: 'hd'
}
```

**使用：**
```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "openai"
```

---

### 2. **Replicate (SDXL / Flux)**

**优点：**
- ✅ 多种模型可选
- ✅ 价格便宜
- ✅ 质量很好
- ✅ 开源模型

**价格：**
- SDXL: $0.00325 / image
- Flux Pro: $0.055 / image

**如何获取 API Key：**
1. 访问 https://replicate.com/
2. 注册账号
3. 前往 https://replicate.com/account/api-tokens
4. 创建 API token（格式：`r8_...`）

**配置方法：**

方法 A - 环境变量：
```bash
export REPLICATE_API_KEY="r8_your-key-here"
```

方法 B - 直接编辑脚本：
```javascript
// 在 generate-branding.js 第 22 行附近
replicate: {
  apiKey: 'r8_your-key-here',  // 替换这里
  model: 'stability-ai/sdxl:latest',
}
```

**使用：**
```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "replicate"
```

---

### 3. **Ideogram**（最适合带文字的 Logo）

**优点：**
- ✅ **专门优化文字渲染**
- ✅ 擅长 logo 设计
- ✅ 支持品牌设计
- ✅ Magic Prompt 自动优化

**价格：**
- Free: 25 images/day
- Basic: $8/month (unlimited)
- Plus: $20/month (fast generation)

**如何获取 API Key：**
1. 访问 https://ideogram.ai/
2. 注册账号
3. 前往设置页面获取 API key
4. 复制 API key

**配置方法：**

方法 A - 环境变量：
```bash
export IDEOGRAM_API_KEY="your-key-here"
```

方法 B - 直接编辑脚本：
```javascript
// 在 generate-branding.js 第 28 行附近
ideogram: {
  apiKey: 'your-key-here',  // 替换这里
  model: 'ideogram-v2',
}
```

**使用：**
```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "ideogram"
```

---

### 4. **本地生成**（免费 - 简单 SVG）

**优点：**
- ✅ 完全免费
- ✅ 即时生成（无需等待）
- ✅ 无需 API key
- ✅ 适合简单设计

**缺点：**
- ⚠️ 只能生成简单图标（首字母 + 颜色）
- ⚠️ 无法生成复杂图形
- ⚠️ 适合 favicon，不适合复杂 logo

**使用：**
```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "local"

# 或者不指定服务（默认使用 local）
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6"
```

---

## 🚀 快速开始

### 选项 1: 使用本地生成（最简单）

```bash
# 生成基于首字母的 logo 和 favicon
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6"
```

### 选项 2: 使用 OpenAI（推荐质量）

1. **设置 API key：**
```bash
# macOS/Linux
export OPENAI_API_KEY="sk-proj-your-key-here"

# Windows (CMD)
set OPENAI_API_KEY=sk-proj-your-key-here

# Windows (PowerShell)
$env:OPENAI_API_KEY="sk-proj-your-key-here"
```

2. **生成：**
```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "openai"
```

### 选项 3: 使用 Ideogram（最适合 Logo）

1. **设置 API key：**
```bash
export IDEOGRAM_API_KEY="your-key-here"
```

2. **生成：**
```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "ideogram"
```

---

## 📦 生成的文件

运行脚本后，会在 `public/` 目录生成：

```
public/
├── favicon.svg              # SVG 格式 favicon
├── favicon.ico              # 多尺寸 ICO（16/32/48px）
├── favicon-v[timestamp].ico # 带版本号的 ICO
├── favicon-version.json     # 版本信息
├── apple-touch-icon.png     # Apple 设备图标（180×180）
├── logo.svg                 # SVG 格式 logo
├── logo.png                 # PNG 格式 logo
└── logo.webp                # WebP 格式 logo
```

---

## ⚙️ 高级配置

### 自定义输出设置

编辑 `generate-branding.js` 中的配置：

```javascript
output: {
  publicDir: './public',          // 输出目录
  faviconSizes: [16, 32, 48],    // Favicon 尺寸
  logoSizes: {                    // Logo 尺寸
    width: 200,
    height: 60
  },
  appleIconSize: 180              // Apple Touch Icon 尺寸
}
```

### 自定义 AI Prompt

对于 AI 生成，你可以编辑脚本中的 prompt 模板：

```javascript
// 在 main() 函数中，约第 450 行
const faviconPrompt = `A modern, minimalist favicon icon for "${keyword}".
  Simple geometric shape, flat design, single color ${color},
  white background, 48x48px, perfect for a website favicon.
  Clean and professional.`;

const logoPrompt = `A professional logo design for "${keyword}".
  Modern style, clean lines, color ${color},
  horizontal layout with icon and text,
  suitable for website header. High quality, vector style,
  transparent background.`;
```

**Prompt 技巧：**
- 描述清晰、具体
- 包含风格关键词（modern, minimalist, professional 等）
- 指定颜色和尺寸
- 说明用途（favicon, logo, website header 等）

---

## 🔧 故障排除

### 问题 1: "API key not configured"

**解决方案：**
```bash
# 检查环境变量是否设置
echo $OPENAI_API_KEY

# 如果为空，设置环境变量
export OPENAI_API_KEY="sk-proj-your-key-here"

# 或直接在脚本中配置（见上文"配置方法 B"）
```

### 问题 2: "ico-endec not available"

**解决方案：**
```bash
# 安装 ico-endec 包
npm install ico-endec

# 如果问题依然存在，检查 devDependencies
npm install ico-endec --save-dev
```

### 问题 3: "sharp not found"

**解决方案：**
```bash
# 重新安装 sharp
npm install sharp

# 如果在 Apple Silicon Mac 上遇到问题
npm install --platform=darwin --arch=arm64 sharp
```

### 问题 4: AI 生成的图片不满意

**解决方案：**
- 修改 prompt 描述（更具体、更详细）
- 尝试不同的 AI 服务
- 调整颜色方案
- 多生成几次选择最好的

### 问题 5: 生成的 logo 包含不需要的元素

**解决方案：**
- 在 prompt 中添加 negative prompt（仅 Replicate）
- 使用更简洁的描述
- 尝试 Ideogram（更擅长遵循指令）

---

## 💡 最佳实践

### 1. Favicon 设计
- ✅ 简单明了，在小尺寸下清晰可见
- ✅ 使用 1-2 种颜色
- ✅ 避免细节过多
- ✅ 确保在浅色和深色背景下都清晰

### 2. Logo 设计
- ✅ 水平布局更适合网站 header
- ✅ 确保在不同尺寸下都清晰
- ✅ 使用品牌颜色
- ✅ 考虑深色模式版本

### 3. 颜色选择
- ✅ 使用品牌主色
- ✅ 确保足够的对比度（WCAG AA 标准）
- ✅ 考虑色盲友好

### 4. 生成策略
- 建议先用本地生成测试布局
- 确定满意后再用 AI 生成最终版本
- 可以多生成几个版本进行对比
- 保存所有版本以备后用

---

## 📊 成本估算

### 单次完整品牌生成（favicon + logo）

| 服务 | 单次成本 | 100次成本 | 备注 |
|------|---------|----------|------|
| 本地生成 | $0.00 | $0.00 | 免费但简单 |
| OpenAI DALL-E 3 (Standard) | $0.08 | $8.00 | 2张图片 |
| OpenAI DALL-E 3 (HD) | $0.16 | $16.00 | 最高质量 |
| Replicate SDXL | $0.0065 | $0.65 | 最便宜的 AI 选项 |
| Ideogram Free | $0.00 | $0.00 | 每天25次限制 |
| Ideogram Basic | $8/月 | 无限制 | 月费订阅 |

**建议：**
- 开发测试：使用本地生成
- 最终版本：使用 OpenAI 或 Ideogram
- 预算有限：使用 Replicate 或 Ideogram Free

---

## 🔗 相关资源

### API 文档
- OpenAI DALL-E: https://platform.openai.com/docs/guides/images
- Replicate: https://replicate.com/docs
- Ideogram: https://api-docs.ideogram.ai/

### 设计灵感
- Logo Design: https://www.logodesign.net/
- Favicon Gallery: https://www.favicon.cc/
- Color Palette: https://coolors.co/

### 工具
- SVG Optimizer: https://jakearchibald.github.io/svgomg/
- Favicon Checker: https://realfavicongenerator.net/
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/

---

## 📞 需要帮助？

如果遇到问题：

1. **检查环境变量：**
   ```bash
   echo $OPENAI_API_KEY
   echo $REPLICATE_API_KEY
   echo $IDEOGRAM_API_KEY
   ```

2. **测试 API 连接：**
   ```bash
   # OpenAI
   curl https://api.openai.com/v1/models \
     -H "Authorization: Bearer $OPENAI_API_KEY"
   ```

3. **查看脚本输出：**
   脚本会打印详细的执行过程和错误信息

4. **手动测试：**
   先用本地生成确保基本功能正常

---

**现在你可以开始生成专业的品牌资源了！** 🎨✨
