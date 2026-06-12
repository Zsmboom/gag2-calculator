'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface PictureProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/**
 * Picture组件 - 自动使用WebP和AVIF格式的图片
 * 
 * 使用方法：
 * <Picture 
 *   src="/images/example.jpg" 
 *   alt="描述" 
 *   width={400} 
 *   height={300} 
 * />
 * 
 * 组件会自动查找对应的.webp和.avif文件，并根据浏览器支持选择最佳格式
 */
export default function Picture({ src, alt, ...props }: PictureProps) {
  // 获取不带扩展名的路径和原始扩展名
  const lastDotIndex = src.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // 如果没有扩展名，直接使用原始路径
    return <Image src={src} alt={alt} {...props} />;
  }

  const pathWithoutExt = src.substring(0, lastDotIndex);
  const originalExt = src.substring(lastDotIndex).toLowerCase();
  
  // 对于SVG文件，直接使用原始文件，不需要WebP或AVIF转换
  if (originalExt === '.svg') {
    return <Image src={src} alt={alt} {...props} />;
  }
  
  // 构建WebP和AVIF路径
  const avifSrc = `${pathWithoutExt}.avif`;
  const webpSrc = `${pathWithoutExt}.webp`;
  const originalSrc = src;
  
  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <Image 
        src={originalSrc} 
        alt={alt}
        {...props}
      />
    </picture>
  );
}

