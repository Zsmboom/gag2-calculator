#!/bin/bash

# SEO 检查脚本
# 用于检查网站的 SEO 优化情况

echo "🔍 Starting SEO Check..."
echo "================================"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 计数器
PASS=0
WARN=0
FAIL=0

# 检查函数
check_pass() {
  echo -e "${GREEN}✅ PASS:${NC} $1"
  ((PASS++))
}

check_warn() {
  echo -e "${YELLOW}⚠️  WARN:${NC} $1"
  ((WARN++))
}

check_fail() {
  echo -e "${RED}❌ FAIL:${NC} $1"
  ((FAIL++))
}

echo -e "\n${BLUE}📋 Checking Meta Tags...${NC}"
echo "--------------------------------"

# 检查所有页面是否有 metadata export
PAGE_COUNT=$(find src/app -name "page.tsx" | wc -l | tr -d ' ')
METADATA_COUNT=$(grep -r "export const metadata" src/app --include="*.tsx" | wc -l | tr -d ' ')

if [ "$METADATA_COUNT" -eq "$PAGE_COUNT" ]; then
  check_pass "All pages have metadata defined ($METADATA_COUNT/$PAGE_COUNT)"
else
  check_warn "Some pages missing metadata ($METADATA_COUNT/$PAGE_COUNT)"
fi

# 检查 title 长度
echo -e "\n${BLUE}📏 Checking Title Lengths...${NC}"
echo "--------------------------------"
grep -r "title:" src/app/layout.tsx src/app/*/page.tsx 2>/dev/null | while read -r line; do
  title=$(echo "$line" | sed -n 's/.*title: *"\([^"]*\)".*/\1/p')
  if [ -n "$title" ]; then
    length=${#title}
    if [ $length -ge 50 ] && [ $length -le 60 ]; then
      check_pass "Title length optimal: $length chars - '$title'"
    elif [ $length -lt 50 ]; then
      check_warn "Title too short: $length chars - '$title'"
    else
      check_warn "Title too long: $length chars - '$title'"
    fi
  fi
done

# 检查 description 长度
echo -e "\n${BLUE}📝 Checking Description Lengths...${NC}"
echo "--------------------------------"
grep -r "description:" src/app/layout.tsx src/app/*/page.tsx 2>/dev/null | while read -r line; do
  desc=$(echo "$line" | sed -n 's/.*description: *"\([^"]*\)".*/\1/p')
  if [ -n "$desc" ]; then
    length=${#desc}
    if [ $length -ge 150 ] && [ $length -le 160 ]; then
      check_pass "Description length optimal: $length chars"
    elif [ $length -lt 150 ]; then
      check_warn "Description too short: $length chars"
    else
      check_warn "Description too long: $length chars"
    fi
  fi
done

# 检查图片 alt 属性
echo -e "\n${BLUE}🖼️  Checking Image Alt Attributes...${NC}"
echo "--------------------------------"
IMAGES_WITHOUT_ALT=$(grep -r "<Image\|<img" src/ --include="*.tsx" --include="*.jsx" | grep -v "alt=" | grep -v "alt:{" | wc -l | tr -d ' ')

if [ "$IMAGES_WITHOUT_ALT" -eq 0 ]; then
  check_pass "All images have alt attributes"
else
  check_fail "Found $IMAGES_WITHOUT_ALT images without alt attributes"
  echo "Run this to find them: grep -r '<Image\\|<img' src/ --include='*.tsx' | grep -v 'alt='"
fi

# 检查 h1 标签
echo -e "\n${BLUE}📌 Checking H1 Tags...${NC}"
echo "--------------------------------"
find src/app -name "page.tsx" | while read -r file; do
  h1_count=$(grep -o "<h1" "$file" | wc -l | tr -d ' ')
  if [ "$h1_count" -eq 1 ]; then
    check_pass "$(basename $(dirname $file)): Has exactly 1 h1 tag"
  elif [ "$h1_count" -eq 0 ]; then
    check_warn "$(basename $(dirname $file)): No h1 tag found"
  else
    check_fail "$(basename $(dirname $file)): Has $h1_count h1 tags (should be 1)"
  fi
done

# 检查 WebP 图片使用
echo -e "\n${BLUE}🎨 Checking WebP Image Usage...${NC}"
echo "--------------------------------"
WEBP_COUNT=$(find public/images -name "*.webp" 2>/dev/null | wc -l | tr -d ' ')
OLD_FORMAT_COUNT=$(find public/images -name "*.jpg" -o -name "*.png" -o -name "*.jpeg" 2>/dev/null | wc -l | tr -d ' ')

if [ "$WEBP_COUNT" -gt 0 ]; then
  check_pass "Found $WEBP_COUNT WebP images"
else
  check_warn "No WebP images found"
fi

if [ "$OLD_FORMAT_COUNT" -gt 0 ]; then
  check_warn "Found $OLD_FORMAT_COUNT images in old formats (JPG/PNG)"
  echo "   Run: node .claude/skills/rebrand/convert-images.js"
else
  check_pass "All images are in modern formats"
fi

# 检查 robots.txt
echo -e "\n${BLUE}🤖 Checking robots.txt...${NC}"
echo "--------------------------------"
if [ -f "public/robots.txt" ]; then
  check_pass "robots.txt exists"
  if grep -q "Sitemap:" public/robots.txt; then
    check_pass "robots.txt contains sitemap reference"
  else
    check_warn "robots.txt missing sitemap reference"
  fi
else
  check_fail "robots.txt not found"
fi

# 检查 sitemap
echo -e "\n${BLUE}🗺️  Checking Sitemap...${NC}"
echo "--------------------------------"
if [ -f "public/sitemap.xml" ] || [ -f "src/app/sitemap.ts" ]; then
  check_pass "Sitemap configuration found"
else
  check_warn "No sitemap found"
fi

# 检查结构化数据
echo -e "\n${BLUE}📊 Checking Structured Data...${NC}"
echo "--------------------------------"
if grep -q "application/ld+json" src/app/layout.tsx; then
  check_pass "Structured data (JSON-LD) found in layout"
else
  check_warn "No structured data found"
fi

# 检查 canonical 标签
echo -e "\n${BLUE}🔗 Checking Canonical URLs...${NC}"
echo "--------------------------------"
if grep -q "canonical" src/app/layout.tsx; then
  check_pass "Canonical URL configured"
else
  check_warn "No canonical URL found"
fi

# 检查外部链接
echo -e "\n${BLUE}🌐 Checking External Links...${NC}"
echo "--------------------------------"
EXTERNAL_LINKS_WITHOUT_REL=$(grep -r "href=\"http" src/ --include="*.tsx" | grep -v "rel=" | wc -l | tr -d ' ')

if [ "$EXTERNAL_LINKS_WITHOUT_REL" -eq 0 ]; then
  check_pass "All external links have rel attribute"
else
  check_warn "Found $EXTERNAL_LINKS_WITHOUT_REL external links without rel attribute"
fi

# 总结
echo -e "\n${BLUE}================================${NC}"
echo -e "${BLUE}📊 SEO Check Summary${NC}"
echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}✅ Passed: $PASS${NC}"
echo -e "${YELLOW}⚠️  Warnings: $WARN${NC}"
echo -e "${RED}❌ Failed: $FAIL${NC}"
echo -e "${BLUE}================================${NC}\n"

# 返回状态码
if [ "$FAIL" -gt 0 ]; then
  exit 1
else
  exit 0
fi
