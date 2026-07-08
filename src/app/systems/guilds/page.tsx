import type { Metadata } from 'next';
import GuildsPage from '@/app/guilds/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Guilds — Rewards & Leaderboards`,
  description: `Complete ${config.game.name} guild guide with creation cost, weekly leaderboard rewards, and guild strategy.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/guilds` },
};

export default GuildsPage;
