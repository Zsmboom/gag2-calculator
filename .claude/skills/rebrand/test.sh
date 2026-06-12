#!/bin/bash

# 快速测试脚本 - 生成示例品牌资源
# 这个脚本会使用本地生成（免费）创建示例 logo 和 favicon

echo "🚀 Rebrand Skill - Quick Test"
echo "=============================="
echo ""
echo "这个脚本会生成示例品牌资源用于测试"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed"
    echo "   Please install Node.js from https://nodejs.org/"
    exit 1
fi

# 检查 sharp
if ! node -e "require('sharp')" 2>/dev/null; then
    echo "⚠️  Warning: sharp package not found"
    echo "   Installing sharp..."
    npm install sharp
fi

# 默认参数
KEYWORD="${1:-Test Brand}"
COLOR="${2:-#3B82F6}"

echo "📝 Configuration:"
echo "   Keyword: $KEYWORD"
echo "   Color: $COLOR"
echo "   Service: local (free)"
echo ""

# 生成品牌资源
echo "🎨 Generating branding assets..."
node .claude/skills/rebrand/generate-branding.js "$KEYWORD" "$COLOR" "local"

# 检查结果
if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Test completed successfully!"
    echo ""
    echo "📁 Generated files in public/ directory:"
    ls -lh public/favicon.* public/logo.* public/apple-touch-icon.* 2>/dev/null
    echo ""
    echo "🎉 Next steps:"
    echo "   1. Check the generated files in public/ directory"
    echo "   2. If satisfied, you can use AI services for better quality:"
    echo "      - OpenAI DALL-E 3 (best quality)"
    echo "      - Ideogram (best for logos with text)"
    echo "      - Replicate SDXL (cheapest)"
    echo ""
    echo "   3. See BRANDING-GUIDE.md for API setup instructions"
else
    echo ""
    echo "❌ Test failed. Please check the error messages above."
    exit 1
fi
