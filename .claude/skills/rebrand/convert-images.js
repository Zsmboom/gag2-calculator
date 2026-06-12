#!/usr/bin/env node

/**
 * 图片转换脚本
 * 将 public/images 目录下的所有 JPG/PNG 图片转换为 WebP 格式
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 配置
const CONFIG = {
  inputDir: './public/images',
  quality: 85,
  supportedFormats: ['.jpg', '.jpeg', '.png'],
  skipExisting: true
};

// 颜色代码
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: CONFIG.quality })
      .toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error.message);
    return false;
  }
}

async function processDirectory(dirPath) {
  const stats = {
    total: 0,
    converted: 0,
    skipped: 0,
    failed: 0
  };

  try {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      // 递归处理子目录
      if (stat.isDirectory()) {
        const subStats = await processDirectory(filePath);
        stats.total += subStats.total;
        stats.converted += subStats.converted;
        stats.skipped += subStats.skipped;
        stats.failed += subStats.failed;
        continue;
      }

      // 检查文件扩展名
      const ext = path.extname(file).toLowerCase();
      if (!CONFIG.supportedFormats.includes(ext)) {
        continue;
      }

      stats.total++;

      // 生成输出文件路径
      const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      // 检查是否已存在
      if (CONFIG.skipExisting && fs.existsSync(outputPath)) {
        log(`⏭️  Skipped (already exists): ${file}`, 'yellow');
        stats.skipped++;
        continue;
      }

      // 转换图片
      log(`🔄 Converting: ${file}`, 'blue');
      const success = await convertImage(filePath, outputPath);

      if (success) {
        const inputSize = stat.size;
        const outputSize = fs.statSync(outputPath).size;
        const savedPercent = ((1 - outputSize / inputSize) * 100).toFixed(1);

        log(
          `✅ Converted: ${file} → ${path.basename(outputPath)} (saved ${savedPercent}%)`,
          'green'
        );
        stats.converted++;
      } else {
        stats.failed++;
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }

  return stats;
}

async function main() {
  log('🚀 Starting image conversion to WebP format\n', 'blue');
  log(`Input directory: ${CONFIG.inputDir}`, 'blue');
  log(`Quality: ${CONFIG.quality}%`, 'blue');
  log(`Supported formats: ${CONFIG.supportedFormats.join(', ')}\n`, 'blue');

  if (!fs.existsSync(CONFIG.inputDir)) {
    log(`❌ Error: Directory ${CONFIG.inputDir} does not exist`, 'red');
    process.exit(1);
  }

  const startTime = Date.now();
  const stats = await processDirectory(CONFIG.inputDir);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  log('\n' + '='.repeat(50), 'blue');
  log('📊 Conversion Summary:', 'blue');
  log('='.repeat(50), 'blue');
  log(`Total images found: ${stats.total}`);
  log(`✅ Successfully converted: ${stats.converted}`, 'green');
  log(`⏭️  Skipped: ${stats.skipped}`, 'yellow');
  log(`❌ Failed: ${stats.failed}`, 'red');
  log(`⏱️  Time taken: ${duration}s`, 'blue');
  log('='.repeat(50) + '\n', 'blue');

  if (stats.converted > 0) {
    log('💡 Next steps:', 'yellow');
    log('1. Update image references in your code to use .webp extension');
    log('2. Test the website to ensure all images load correctly');
    log('3. Consider removing old image files after verification\n');
  }
}

// 运行脚本
main().catch(console.error);
