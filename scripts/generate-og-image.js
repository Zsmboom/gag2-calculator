const fs = require('fs');
const path = require('path');

// 创建目录（如果不存在）
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

// 创建Open Graph图片
function createOGImage() {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1e40af"/>
  <rect x="50" y="50" width="1100" height="530" rx="15" fill="#2563eb"/>
  
  <text x="600" y="200" font-family="Arial, sans-serif" font-size="80px" font-weight="bold" fill="#ffffff" text-anchor="middle">
    Fisch Macro
  </text>
  
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="40px" fill="#e0f2fe" text-anchor="middle">
    Automation Tool for Roblox Fisch Game
  </text>
  
  <text x="600" y="400" font-family="Arial, sans-serif" font-size="30px" fill="#bfdbfe" text-anchor="middle">
    Enhance your gaming experience with automated fishing
  </text>
  
  <text x="600" y="550" font-family="Arial, sans-serif" font-size="24px" fill="#93c5fd" text-anchor="middle">
    www.fischmacroo.com
  </text>
</svg>`;

  const outputPath = path.join(process.cwd(), 'public/images/og-image.svg');
  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, svg);
  console.log(`Created OG image: ${outputPath}`);
}

createOGImage(); 