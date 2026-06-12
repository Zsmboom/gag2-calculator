const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// 设置质量参数
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 65;

// 递归获取所有图片文件
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.flat();
}

// 过滤出JPG和PNG文件
function filterImageFiles(files) {
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
  });
}

// 转换单个文件
async function convertFile(file) {
  console.log(`处理文件: ${file}`);
  const fileDir = path.dirname(file);
  const fileName = path.basename(file, path.extname(file));
  
  try {
    // 加载图片
    const image = sharp(file);
    const metadata = await image.metadata();
    
    // 转换为WebP
    const webpPath = path.join(fileDir, `${fileName}.webp`);
    await image
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);
    console.log(`✅ 已创建WebP: ${webpPath}`);
    
    // 转换为AVIF (可能会比较慢)
    const avifPath = path.join(fileDir, `${fileName}.avif`);
    await sharp(file)
      .avif({ quality: AVIF_QUALITY })
      .toFile(avifPath);
    console.log(`✅ 已创建AVIF: ${avifPath}`);
    
    // 创建尺寸信息文件，用于后续引用
    const sizeInfo = {
      original: {
        format: metadata.format,
        width: metadata.width,
        height: metadata.height,
        size: fs.statSync(file).size
      },
      webp: {
        path: webpPath,
        size: fs.statSync(webpPath).size
      },
      avif: {
        path: avifPath,
        size: fs.statSync(avifPath).size
      }
    };
    
    // 计算节省的空间
    const originalSize = sizeInfo.original.size;
    const webpSize = sizeInfo.webp.size;
    const avifSize = sizeInfo.avif.size;
    
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
    const avifSavings = ((originalSize - avifSize) / originalSize * 100).toFixed(2);
    
    console.log(`📊 WebP节省: ${webpSavings}%, AVIF节省: ${avifSavings}%`);
    
    return {
      file,
      webpPath,
      avifPath,
      webpSavings,
      avifSavings
    };
  } catch (error) {
    console.error(`❌ 处理文件失败: ${file}`, error);
    return {
      file,
      error: error.message
    };
  }
}

// 主函数
async function main() {
  try {
    console.log('开始转换图片...');
    const imagesDir = path.join(__dirname, '..', 'public', 'images');
    
    // 获取所有图片文件
    const allFiles = await getFiles(imagesDir);
    const imageFiles = filterImageFiles(allFiles);
    
    console.log(`找到 ${imageFiles.length} 张图片需要转换`);
    
    // 转换所有文件
    const results = [];
    for (const file of imageFiles) {
      const result = await convertFile(file);
      results.push(result);
    }
    
    // 生成报告
    const successCount = results.filter(r => !r.error).length;
    const failCount = results.filter(r => r.error).length;
    
    console.log('\n转换完成!');
    console.log(`✅ 成功: ${successCount}`);
    console.log(`❌ 失败: ${failCount}`);
    
    if (successCount > 0) {
      const totalWebpSavings = results
        .filter(r => r.webpSavings)
        .reduce((sum, r) => sum + parseFloat(r.webpSavings), 0) / successCount;
      
      const totalAvifSavings = results
        .filter(r => r.avifSavings)
        .reduce((sum, r) => sum + parseFloat(r.avifSavings), 0) / successCount;
      
      console.log(`\n平均节省空间:`);
      console.log(`WebP: ${totalWebpSavings.toFixed(2)}%`);
      console.log(`AVIF: ${totalAvifSavings.toFixed(2)}%`);
    }
    
    // 生成HTML引用示例
    console.log('\n在HTML中使用这些图片的示例:');
    console.log(`
<picture>
  <source srcset="path/to/image.avif" type="image/avif">
  <source srcset="path/to/image.webp" type="image/webp">
  <img src="path/to/image.jpg" alt="描述">
</picture>
    `);
    
    // 生成Next.js Image组件示例
    console.log('\n在Next.js中使用这些图片的示例:');
    console.log(`
// 在next.config.js中已配置formats: ['image/webp', 'image/avif']
// 所以Next.js的Image组件会自动选择最佳格式
import Image from 'next/image';

<Image 
  src="/images/example.jpg" 
  alt="描述"
  width={width}
  height={height}
/>
    `);
    
  } catch (error) {
    console.error('转换过程中出现错误:', error);
  }
}

main();
