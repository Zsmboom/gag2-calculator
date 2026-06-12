const fs = require('fs');
const path = require('path');

// 创建目录（如果不存在）
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

// 创建一个简单的SVG占位图片
function createPlaceholderImage(filePath, width, height, text, bgColor = '#3b82f6', textColor = '#ffffff') {
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) / 15}px" 
    fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

  fs.writeFileSync(filePath, svg);
  console.log(`Created placeholder: ${filePath}`);
}

// 定义要创建的占位图片
const placeholders = [
  { path: 'public/images/hero/fishing-game.svg', width: 800, height: 600, text: 'Fisch Game Screenshot', bgColor: '#1e40af' },
  { path: 'public/images/hero/fisch-hero.svg', width: 800, height: 600, text: 'Fisch Hero Image', bgColor: '#1e3a8a' },
  { path: 'public/images/screenshots/macro-interface.svg', width: 800, height: 600, text: 'Fisch Macro Interface', bgColor: '#0f766e' },
  { path: 'public/images/about/team-working.svg', width: 600, height: 400, text: 'Team Working', bgColor: '#4f46e5' },
  { path: 'public/images/about/mission.svg', width: 600, height: 400, text: 'Our Mission', bgColor: '#7e22ce' },
  { path: 'public/images/team/john-doe.svg', width: 300, height: 300, text: 'JD', bgColor: '#be185d' },
  { path: 'public/images/team/jane-smith.svg', width: 300, height: 300, text: 'JS', bgColor: '#b91c1c' },
];

// 创建所有占位图片
placeholders.forEach(({ path: imagePath, width, height, text, bgColor }) => {
  const fullPath = path.join(process.cwd(), imagePath);
  ensureDirectoryExists(path.dirname(fullPath));
  createPlaceholderImage(fullPath, width, height, text, bgColor);
});

console.log('All placeholder images have been created!'); 