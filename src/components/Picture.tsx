'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface PictureProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

/** Render the supplied stable asset path without advertising nonexistent variants. */
export default function Picture({ src, alt, ...props }: PictureProps) {
  return <Image src={src} alt={alt} {...props} />;
}
