import type { Metadata } from 'next';
import OfflineGrowthPage from '@/app/offline-growth/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Offline Growth — Away Farming Guide`,
  description: `How ${config.game.name} offline growth works, with theft risk, defenses, and overnight farming tips.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/offline-growth/` },
};

export default OfflineGrowthPage;
