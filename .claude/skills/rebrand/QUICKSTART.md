# 🎯 Rebrand Skill - 快速开始指南

## ⚡ 5 分钟快速上手

### 步骤 1: 测试工具（30秒）

运行快速测试，确保一切正常：

```bash
cd /Users/shiminzhang/Desktop/game/gamemuban
./.claude/skills/rebrand/test.sh "My Brand" "#FF5733"
```

这会在 `public/` 目录生成示例文件。

---

### 步骤 2: 选择品牌生成方案（1分钟）

#### 🆓 方案 A: 本地生成（免费但简单）

适合：快速测试、简单设计

```bash
node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6"
```

#### 🤖 方案 B: AI 生成（专业质量）

**最推荐：OpenAI DALL-E 3**

1. 获取 API Key: https://platform.openai.com/api-keys
2. 设置环境变量：
   ```bash
   export OPENAI_API_KEY="sk-proj-your-key-here"
   ```
3. 生成：
   ```bash
   node .claude/skills/rebrand/generate-branding.js "Gaming Bot" "#3B82F6" "openai"
   ```

详细配置见：[BRANDING-GUIDE.md](./BRANDING-GUIDE.md)

---

### 步骤 3: 准备配置文件（2分钟）

```bash
# 复制模板
cp .claude/skills/rebrand/config-template.json my-brand-config.json

# 编辑配置（用你喜欢的编辑器）
nano my-brand-config.json  # 或 vim, code, 等
```

**最小配置示例：**
```json
{
  "keyword": "Gaming Bot",
  "title": "Gaming Bot - Ultimate Automation Tool",
  "description": "Automate your gaming with advanced AI-powered features. Support 50+ games.",
  "domain": "https://gamingbot.com",
  "colors": {
    "primary": { "main": "#3B82F6" }
  }
}
```

---

### 步骤 4: 运行完整 Rebrand（1分钟）

在 Claude Code 中运行：

```
/rebrand my-brand-config.json
```

Skill 会：
1. ✅ 询问缺失信息
2. ✅ 显示将要更改的内容
3. ✅ 等待你确认
4. ✅ 执行所有更改
5. ✅ 生成详细报告

---

### 步骤 5: 验证和部署（1分钟）

```bash
# 运行 SEO 检查
./.claude/skills/rebrand/seo-check.sh

# 转换图片为 WebP
node .claude/skills/rebrand/convert-images.js

# 测试构建
npm run build
npm run dev
```

---

## 📋 完整 Checklist

### 准备阶段
- [ ] 运行测试脚本确保工具正常
- [ ] 准备品牌信息（关键词、颜色、描述）
- [ ] 代码已提交到 Git

### 品牌资源生成
- [ ] 决定使用本地生成还是 AI 生成
- [ ] 如果用 AI，配置好 API Key
- [ ] 运行生成脚本
- [ ] 检查生成的 logo 和 favicon

### 配置准备
- [ ] 复制配置模板
- [ ] 填写所有必要信息
- [ ] 检查配置文件语法正确

### 执行 Rebrand
- [ ] 运行 `/rebrand` skill
- [ ] 回答所有问题
- [ ] 审查并确认更改
- [ ] 等待执行完成

### 验证
- [ ] 运行 SEO 检查
- [ ] 测试构建成功
- [ ] 检查所有页面
- [ ] 验证图片和链接

### 部署
- [ ] 提交更改到 Git
- [ ] 推送到远程仓库
- [ ] 部署到生产环境
- [ ] 清除 CDN 缓存

---

## 🎯 常见场景

### 场景 1: 第一次使用（完整品牌更换）

```bash
# 1. 测试工具
./.claude/skills/rebrand/test.sh

# 2. 生成品牌资源（选择一个）
node .claude/skills/rebrand/generate-branding.js "New Brand" "#FF5733"  # 本地
# 或
export OPENAI_API_KEY="sk-..."
node .claude/skills/rebrand/generate-branding.js "New Brand" "#FF5733" "openai"  # AI

# 3. 准备配置
cp .claude/skills/rebrand/config-template.json my-config.json
# 编辑 my-config.json

# 4. 运行 rebrand
/rebrand my-config.json

# 5. 验证
./.claude/skills/rebrand/seo-check.sh
npm run build
```

### 场景 2: 只更新 Logo 和 Favicon

```bash
# 直接生成新的品牌资源
node .claude/skills/rebrand/generate-branding.js "My Brand" "#3B82F6" "openai"

# 手动更新 layout.tsx 中的 icons 配置
# 清除浏览器缓存测试
```

### 场景 3: 只优化 SEO

```bash
# 1. 运行 SEO 检查看问题
./.claude/skills/rebrand/seo-check.sh

# 2. 转换图片
node .claude/skills/rebrand/convert-images.js

# 3. 手动修复报告的问题
# 或者运行完整 rebrand 让 AI 自动修复
```

### 场景 4: 测试不同品牌方案

```bash
# 快速生成多个版本对比
node .claude/skills/rebrand/generate-branding.js "Brand A" "#3B82F6"
mv public/logo.svg public/logo-a.svg

node .claude/skills/rebrand/generate-branding.js "Brand B" "#10B981"
mv public/logo.svg public/logo-b.svg

# 对比选择最好的
```

---

## 🔧 工具命令速查表

| 命令 | 用途 | 耗时 |
|------|------|------|
| `./.claude/skills/rebrand/test.sh` | 快速测试 | 10秒 |
| `node generate-branding.js "..." "..." "local"` | 本地生成品牌 | 5秒 |
| `node generate-branding.js "..." "..." "openai"` | AI 生成品牌 | 30秒 |
| `./.claude/skills/rebrand/seo-check.sh` | SEO 检查 | 5秒 |
| `node convert-images.js` | 转换图片 | 10-60秒 |
| `/rebrand config.json` | 完整网站更换 | 2-5分钟 |

---

## ⚠️ 重要提醒

### 在运行 Rebrand 之前

1. **备份代码**
   ```bash
   git add .
   git commit -m "Backup before rebrand"
   ```

2. **测试环境**
   ```bash
   npm run build  # 确保当前代码可以构建
   ```

3. **准备回滚**
   ```bash
   git branch backup-$(date +%Y%m%d)  # 创建备份分支
   ```

### API Keys 安全

- ✅ 使用环境变量，不要硬编码
- ✅ 不要提交 API keys 到 Git
- ✅ 使用 `.env` 文件（已在 .gitignore）
- ✅ 定期轮换 API keys

### 成本控制

- 本地生成：$0
- 测试阶段：使用本地生成
- 最终版本：使用 AI 生成 1-2 次
- 预估成本：$0.08-0.16（OpenAI）

---

## 📞 获取帮助

### 文档资源
- 📖 [完整 README](./README.md) - 详细使用说明
- 🎨 [品牌生成指南](./BRANDING-GUIDE.md) - API 配置和使用
- 🔧 [SKILL.md](./SKILL.md) - Skill 技术文档

### 命令帮助
```bash
# 查看生成器帮助
node .claude/skills/rebrand/generate-branding.js

# 查看 SEO 检查结果
./.claude/skills/rebrand/seo-check.sh

# 查看转换器输出
node .claude/skills/rebrand/convert-images.js
```

### 常见问题
- API key 不工作？检查环境变量
- 生成失败？运行测试脚本
- SEO 问题？查看检查报告
- 构建失败？检查语法错误

---

## 🎉 完成！

现在你已经准备好完整的品牌更换流程了！

**推荐流程：**
1. ⚡ 先运行测试（30秒）
2. 🎨 生成品牌资源（1分钟）
3. 📝 准备配置文件（2分钟）
4. 🚀 运行 `/rebrand` skill（2-5分钟）
5. ✅ 验证和部署（1分钟）

**总耗时：约 10 分钟完成完整品牌更换！**

祝你使用愉快！🎊
