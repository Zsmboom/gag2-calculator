import type { Metadata } from 'next';
import BeginnerGuidePage from '@/app/beginner-guide/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Beginner Guide — Getting Started`,
  description: `New to ${config.game.name}? Start here with the first crops, early progression, controls, strategy tips, and common mistakes.`,
  alternates: { canonical: `${config.seo.baseUrl}/guide/` },
};

export default BeginnerGuidePage;
