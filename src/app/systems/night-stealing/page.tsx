import type { Metadata } from 'next';
import NightStealingPage from '@/app/night-stealing/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Night Stealing — Guide & Defense`,
  description: `Complete ${config.game.name} night stealing guide with the day/night cycle, raiding rules, and defense methods.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/night-stealing` },
};

export default NightStealingPage;
