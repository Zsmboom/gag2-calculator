const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// 递归获取所有组件文件
async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.flat();
}

// 过滤出React组件文件
function filterComponentFiles(files) {
  return files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.tsx' || ext === '.jsx';
  });
}

// 检查文件是否包含Next.js Image组件
async function containsNextImage(file) {
  const content = await readFile(file, 'utf8');
  return content.includes('next/image') || content.includes('<Image');
}

// 更新组件中的Image引用
async function updateImageRefs(file) {
  console.log(`处理文件: ${file}`);
  let content = await readFile(file, 'utf8');
  let modified = false;
  
  // 确保导入了Next.js Image组件
  if (content.includes('next/image')) {
    // 检查是否有直接使用jpg/png的Image组件
    const imageRegex = /<Image\s+[^>]*src=["']([^"']+\.(jpg|jpeg|png))["'][^>]*>/g;
    let match;
    
    // 收集所有匹配项
    const matches = [];
    while ((match = imageRegex.exec(content)) !== null) {
      matches.push(match);
    }
    
    // 从后向前替换，避免位置偏移问题
    for (let i = matches.length - 1; i >= 0; i--) {
      const match = matches[i];
      const fullMatch = match[0];
      const imagePath = match[1];
      
      // 只处理项目内的图片路径
      if (imagePath.startsWith('/') || imagePath.startsWith('./')) {
        // 保留原始的属性
        const attributes = fullMatch.match(/<Image\s+([^>]*)>/)[1];
        
        // 创建新的Image组件，保留原始属性
        const newImageComponent = `<Image ${attributes}>`;
        
        // 替换原始Image组件
        content = content.substring(0, match.index) + newImageComponent + content.substring(match.index + fullMatch.length);
        modified = true;
        
        console.log(`✅ 已更新图片引用: ${imagePath}`);
      }
    }
  }
  
  if (modified) {
    await writeFile(file, content, 'utf8');
    console.log(`✅ 已保存更改: ${file}`);
    return true;
  } else {
    console.log(`⏭️ 无需修改: ${file}`);
    return false;
  }
}

// 主函数
async function main() {
  try {
    console.log('开始更新图片引用...');
    const componentsDir = path.join(__dirname, '..', 'src', 'components');
    const pagesDir = path.join(__dirname, '..', 'src', 'app');
    
    // 获取所有组件文件
    const allComponentFiles = await getFiles(componentsDir);
    const allPageFiles = await getFiles(pagesDir);
    const componentFiles = filterComponentFiles([...allComponentFiles, ...allPageFiles]);
    
    console.log(`找到 ${componentFiles.length} 个组件文件需要检查`);
    
    // 筛选包含Image组件的文件
    const imageFiles = [];
    for (const file of componentFiles) {
      if (await containsNextImage(file)) {
        imageFiles.push(file);
      }
    }
    
    console.log(`找到 ${imageFiles.length} 个文件包含Image组件`);
    
    // 更新所有文件
    let updatedCount = 0;
    for (const file of imageFiles) {
      const updated = await updateImageRefs(file);
      if (updated) {
        updatedCount++;
      }
    }
    
    console.log('\n更新完成!');
    console.log(`✅ 已更新: ${updatedCount}`);
    console.log(`⏭️ 无需修改: ${imageFiles.length - updatedCount}`);
    
    console.log('\n提示: Next.js配置已经设置为优先使用WebP和AVIF格式，无需手动修改组件代码。');
    console.log('在next.config.js中的配置:');
    console.log(`
images: {
  formats: ['image/webp', 'image/avif'],
  // 其他配置...
}
    `);
    
  } catch (error) {
    console.error('更新过程中出现错误:', error);
  }
}

main();
