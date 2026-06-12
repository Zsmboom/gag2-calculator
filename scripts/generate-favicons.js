const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 检查是否安装了 sharp 和 ico-endec
try {
  require.resolve('sharp');
  require.resolve('ico-endec');
} catch (e) {
  console.log('Installing required packages...');
  exec('npm install sharp ico-endec --save-dev', (error) => {
    if (error) {
      console.error(`Error installing packages: ${error}`);
      return;
    }
    console.log('Packages installed successfully. Rerun this script.');
    process.exit(0);
  });
  return;
}

const sharp = require('sharp');
const ICO = require('ico-endec');

async function generateFavicons() {
  const publicDir = path.join(__dirname, '../public');
  
  // 确保 public 目录存在
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // 添加版本号，使用当前时间戳
  const version = Date.now();
  
  // 读取 SVG 文件
  const faviconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
  const appleTouchIconSvg = fs.readFileSync(path.join(publicDir, 'apple-touch-icon.svg'));
  
  // 生成不同尺寸的 favicon
  const sizes = [16, 32, 48, 64, 128, 256];
  
  // 生成 favicon.ico (包含多个尺寸)
  const faviconBuffers = await Promise.all(
    sizes.map(size => 
      sharp(faviconSvg)
        .resize(size, size)
        .png()
        .toBuffer()
    )
  );
  
  // 创建一个真正的多尺寸ICO文件
  // 我们将使用16x16, 32x32和48x48的尺寸，这是最常用的
  const pngBuffers = [
    await sharp(faviconSvg).resize(16, 16).png().toBuffer(),
    await sharp(faviconSvg).resize(32, 32).png().toBuffer(),
    await sharp(faviconSvg).resize(48, 48).png().toBuffer()
  ];
  
  // 使用ico-endec创建真正的多尺寸ICO文件
  const icoBuffer = ICO.encode(pngBuffers);
  fs.writeFileSync(path.join(publicDir, `favicon-v${version}.ico`), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  
  // 同时生成各种尺寸的PNG图标，以便在不同场景下使用
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    await sharp(faviconSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}-v${version}.png`));
    // 保留原始文件名的版本，以保持兼容性
    await sharp(faviconSvg)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
  }
  
  // 生成 apple-touch-icon.png (180x180)
  await sharp(appleTouchIconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, `apple-touch-icon-v${version}.png`));
  // 保留原始文件名的版本，以保持兼容性
  await sharp(appleTouchIconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  
  // 将版本号写入一个JSON文件，以便布局文件可以读取
  fs.writeFileSync(
    path.join(publicDir, 'favicon-version.json'), 
    JSON.stringify({ version })
  );
  
  console.log(`Favicons generated successfully with version: ${version}!`);
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
}); 