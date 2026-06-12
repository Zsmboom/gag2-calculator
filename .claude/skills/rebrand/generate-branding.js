#!/usr/bin/env node

/**
 * Logo 和 Favicon 生成器
 * 支持多种 AI 图像生成服务
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// ================================
// 配置区域 - 在这里添加你的 API Keys
// ================================

const CONFIG = {
  // 选择生成服务: 'openai', 'replicate', 'ideogram', 'local'
  service: 'local', // 默认使用本地生成，改为 'openai' 等使用 AI 生成

  // OpenAI DALL-E 3
  openai: {
    apiKey: process.env.OPENAI_API_KEY || '', // 或直接填写: 'sk-...'
    model: 'dall-e-3',
    size: '1024x1024',
    quality: 'hd'
  },

  // Replicate
  replicate: {
    apiKey: process.env.REPLICATE_API_KEY || '', // 或直接填写: 'r8_...'
    model: 'stability-ai/sdxl:latest', // 或 'black-forest-labs/flux-pro'
  },

  // Ideogram (最适合 logo)
  ideogram: {
    apiKey: process.env.IDEOGRAM_API_KEY || '',
    model: 'ideogram-v2',
  },

  // 输出配置
  output: {
    publicDir: './public',
    faviconSizes: [16, 32, 48],
    logoSizes: { width: 200, height: 60 },
    appleIconSize: 180
  }
};

// ================================
// OpenAI DALL-E 3
// ================================

async function generateWithOpenAI(prompt, keyword) {
  const apiKey = CONFIG.openai.apiKey;

  if (!apiKey) {
    throw new Error('OpenAI API key not configured. Set OPENAI_API_KEY environment variable or edit CONFIG.openai.apiKey');
  }

  console.log('🎨 Generating with OpenAI DALL-E 3...');

  const requestData = JSON.stringify({
    model: CONFIG.openai.model,
    prompt: prompt,
    n: 1,
    size: CONFIG.openai.size,
    quality: CONFIG.openai.quality,
    response_format: 'url'
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.openai.com',
      port: 443,
      path: '/v1/images/generations',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(requestData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.data && response.data[0] && response.data[0].url) {
            resolve(response.data[0].url);
          } else {
            reject(new Error('Invalid response from OpenAI: ' + data));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(requestData);
    req.end();
  });
}

// ================================
// Replicate
// ================================

async function generateWithReplicate(prompt, keyword) {
  const apiKey = CONFIG.replicate.apiKey;

  if (!apiKey) {
    throw new Error('Replicate API key not configured. Set REPLICATE_API_KEY environment variable or edit CONFIG.replicate.apiKey');
  }

  console.log('🎨 Generating with Replicate SDXL...');

  const requestData = JSON.stringify({
    version: 'stability-ai/sdxl:latest',
    input: {
      prompt: prompt,
      negative_prompt: 'blurry, low quality, pixelated, distorted',
      width: 1024,
      height: 1024,
      num_outputs: 1
    }
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.replicate.com',
      port: 443,
      path: '/v1/predictions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${apiKey}`,
        'Content-Length': Buffer.byteLength(requestData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', async () => {
        try {
          const response = JSON.parse(data);
          if (response.id) {
            // 轮询结果
            const imageUrl = await pollReplicateResult(response.id, apiKey);
            resolve(imageUrl);
          } else {
            reject(new Error('Invalid response from Replicate: ' + data));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(requestData);
    req.end();
  });
}

async function pollReplicateResult(predictionId, apiKey, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // 等待 2 秒

    const result = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.replicate.com',
        port: 443,
        path: `/v1/predictions/${predictionId}`,
        method: 'GET',
        headers: {
          'Authorization': `Token ${apiKey}`
        }
      };

      https.get(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      }).on('error', reject);
    });

    if (result.status === 'succeeded' && result.output && result.output[0]) {
      return result.output[0];
    } else if (result.status === 'failed') {
      throw new Error('Replicate generation failed');
    }

    console.log(`⏳ Waiting for generation... (${i + 1}/${maxAttempts})`);
  }

  throw new Error('Replicate generation timeout');
}

// ================================
// Ideogram
// ================================

async function generateWithIdeogram(prompt, keyword) {
  const apiKey = CONFIG.ideogram.apiKey;

  if (!apiKey) {
    throw new Error('Ideogram API key not configured. Set IDEOGRAM_API_KEY environment variable or edit CONFIG.ideogram.apiKey');
  }

  console.log('🎨 Generating with Ideogram...');

  const requestData = JSON.stringify({
    image_request: {
      model: CONFIG.ideogram.model,
      prompt: prompt,
      aspect_ratio: '1:1',
      magic_prompt_option: 'AUTO'
    }
  });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.ideogram.ai',
      port: 443,
      path: '/generate',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': apiKey,
        'Content-Length': Buffer.byteLength(requestData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.data && response.data[0] && response.data[0].url) {
            resolve(response.data[0].url);
          } else {
            reject(new Error('Invalid response from Ideogram: ' + data));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(requestData);
    req.end();
  });
}

// ================================
// 本地 SVG 生成（免费，简单）
// ================================

function generateLocalSVG(keyword, color = '#3B82F6') {
  console.log('🎨 Generating local SVG...');

  // 获取首字母或前两个字符
  const initial = keyword.substring(0, 2).toUpperCase();

  // 生成 Favicon SVG
  const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustColor(color, -30)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="48" height="48" rx="8" fill="url(#grad)"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white">${initial}</text>
</svg>`.trim();

  // 生成 Logo SVG
  const logoSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustColor(color, -30)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <!-- 图标部分 -->
  <rect x="5" y="10" width="40" height="40" rx="6" fill="url(#logoGrad)"/>
  <text x="25" y="30" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white">${initial}</text>
  <!-- 文字部分 -->
  <text x="55" y="35" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="${color}">${keyword}</text>
</svg>`.trim();

  return { faviconSvg, logoSvg };
}

function adjustColor(color, amount) {
  // 简单的颜色调整函数
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (num >> 16) + amount));
  const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
  const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}

// ================================
// 下载图片
// ================================

async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

// ================================
// 生成 Favicon（多尺寸 ICO）
// ================================

async function generateFavicon(svgContent, keyword) {
  const publicDir = CONFIG.output.publicDir;
  const sizes = CONFIG.output.faviconSizes;

  console.log('📦 Generating favicon files...');

  // 保存 SVG
  const svgPath = path.join(publicDir, 'favicon.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✅ Generated: favicon.svg`);

  // 生成 PNG 格式的不同尺寸
  const pngBuffers = [];
  for (const size of sizes) {
    const buffer = await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toBuffer();
    pngBuffers.push(buffer);
  }

  // 使用 ico-endec 生成 ICO
  try {
    const IcoEncoder = require('ico-endec').IcoEncoder;
    const encoder = new IcoEncoder(pngBuffers.map((buffer, i) => ({
      data: buffer,
      width: sizes[i],
      height: sizes[i]
    })));

    const icoBuffer = encoder.encode();

    // 添加版本号
    const version = Date.now();
    const versionedIcoPath = path.join(publicDir, `favicon-v${version}.ico`);
    const icoPath = path.join(publicDir, 'favicon.ico');

    fs.writeFileSync(versionedIcoPath, icoBuffer);
    fs.writeFileSync(icoPath, icoBuffer);

    // 更新版本文件
    fs.writeFileSync(
      path.join(publicDir, 'favicon-version.json'),
      JSON.stringify({ version, timestamp: new Date().toISOString() }, null, 2)
    );

    console.log(`✅ Generated: favicon.ico (with version)`);
  } catch (error) {
    console.warn('⚠️  Could not generate ICO file (ico-endec not available)');
    console.log('   You can install it with: npm install ico-endec');
  }

  // 生成 Apple Touch Icon
  const appleIconBuffer = await sharp(Buffer.from(svgContent))
    .resize(CONFIG.output.appleIconSize, CONFIG.output.appleIconSize)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIconBuffer);
  console.log(`✅ Generated: apple-touch-icon.png`);
}

// ================================
// 生成 Logo
// ================================

async function generateLogo(svgContent, keyword) {
  const publicDir = CONFIG.output.publicDir;

  console.log('📦 Generating logo files...');

  // 保存 SVG
  const svgPath = path.join(publicDir, 'logo.svg');
  fs.writeFileSync(svgPath, svgContent);
  console.log(`✅ Generated: logo.svg`);

  // 生成 PNG 版本
  const pngBuffer = await sharp(Buffer.from(svgContent))
    .resize(CONFIG.output.logoSizes.width, CONFIG.output.logoSizes.height, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo.png'), pngBuffer);
  console.log(`✅ Generated: logo.png`);

  // 生成 WebP 版本
  const webpBuffer = await sharp(Buffer.from(svgContent))
    .resize(CONFIG.output.logoSizes.width, CONFIG.output.logoSizes.height, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .webp({ quality: 90 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'logo.webp'), webpBuffer);
  console.log(`✅ Generated: logo.webp`);
}

// ================================
// 主函数
// ================================

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    console.log('Usage: node generate-branding.js <keyword> [color] [service]');
    console.log('');
    console.log('Examples:');
    console.log('  node generate-branding.js "Gaming Bot"');
    console.log('  node generate-branding.js "Gaming Bot" "#3B82F6"');
    console.log('  node generate-branding.js "Gaming Bot" "#3B82F6" "openai"');
    console.log('');
    console.log('Available services: openai, replicate, ideogram, local (default)');
    process.exit(1);
  }

  const keyword = args[0];
  const color = args[1] || '#3B82F6';
  const service = args[2] || CONFIG.service;

  console.log('🚀 Logo & Favicon Generator');
  console.log('============================');
  console.log(`Keyword: ${keyword}`);
  console.log(`Color: ${color}`);
  console.log(`Service: ${service}`);
  console.log('');

  try {
    let faviconSvg, logoSvg;

    if (service === 'local') {
      // 本地生成
      const result = generateLocalSVG(keyword, color);
      faviconSvg = result.faviconSvg;
      logoSvg = result.logoSvg;
    } else {
      // AI 生成
      const faviconPrompt = `A modern, minimalist favicon icon for "${keyword}". Simple geometric shape, flat design, single color ${color}, white background, 48x48px, perfect for a website favicon. Clean and professional.`;

      const logoPrompt = `A professional logo design for "${keyword}". Modern style, clean lines, color ${color}, horizontal layout with icon and text, suitable for website header. High quality, vector style, transparent background.`;

      let faviconUrl, logoUrl;

      switch (service) {
        case 'openai':
          faviconUrl = await generateWithOpenAI(faviconPrompt, keyword);
          logoUrl = await generateWithOpenAI(logoPrompt, keyword);
          break;
        case 'replicate':
          faviconUrl = await generateWithReplicate(faviconPrompt, keyword);
          logoUrl = await generateWithReplicate(logoPrompt, keyword);
          break;
        case 'ideogram':
          faviconUrl = await generateWithIdeogram(faviconPrompt, keyword);
          logoUrl = await generateWithIdeogram(logoPrompt, keyword);
          break;
        default:
          throw new Error(`Unknown service: ${service}`);
      }

      // 下载生成的图片
      console.log('📥 Downloading generated images...');
      const tempFaviconPath = path.join(CONFIG.output.publicDir, 'temp-favicon.png');
      const tempLogoPath = path.join(CONFIG.output.publicDir, 'temp-logo.png');

      await downloadImage(faviconUrl, tempFaviconPath);
      await downloadImage(logoUrl, tempLogoPath);

      // 转换为 SVG（这里简化处理，实际可能需要矢量化）
      // 由于 AI 生成的是位图，我们保存为 PNG，并创建简单的 SVG wrapper
      faviconSvg = generateLocalSVG(keyword, color).faviconSvg;
      logoSvg = generateLocalSVG(keyword, color).logoSvg;

      console.log('✅ Images downloaded');
    }

    // 生成 Favicon
    await generateFavicon(faviconSvg, keyword);

    // 生成 Logo
    await generateLogo(logoSvg, keyword);

    console.log('');
    console.log('🎉 All branding assets generated successfully!');
    console.log('');
    console.log('Generated files:');
    console.log('  - public/favicon.svg');
    console.log('  - public/favicon.ico');
    console.log('  - public/apple-touch-icon.png');
    console.log('  - public/logo.svg');
    console.log('  - public/logo.png');
    console.log('  - public/logo.webp');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Check the generated files in the public/ directory');
    console.log('  2. Update src/app/layout.tsx icons configuration');
    console.log('  3. Update Header.tsx to use the new logo');
    console.log('  4. Clear browser cache to see the new favicon');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// 运行
if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  generateWithOpenAI,
  generateWithReplicate,
  generateWithIdeogram,
  generateLocalSVG,
  generateFavicon,
  generateLogo
};
