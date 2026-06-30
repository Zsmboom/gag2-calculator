import type { Metadata } from 'next';
import BargainSystemPage from '@/app/bargain-system/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Bargain System — Sell Bonus Guide`,
  description: `How the ${config.game.name} Bargain mechanic works, including the community-estimated sell bonus and current unknowns.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/bargain-system/` },
};

export default BargainSystemPage;
