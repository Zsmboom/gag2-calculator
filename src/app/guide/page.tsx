import type { Metadata } from 'next';
import BeginnerGuidePage from '@/app/beginner-guide/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata(
  '/guide',
  'Grow a Garden 2 Beginner Guide — Getting Started',
  'Grow a Garden 2 beginner guide covering early crops, progression, controls, strategy, night defense, and common mistakes.',
);

export default BeginnerGuidePage;
