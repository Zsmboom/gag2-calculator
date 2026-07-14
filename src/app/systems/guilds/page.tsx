import type { Metadata } from 'next';
import GuildsPage from '@/app/guilds/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/guilds', 'Grow a Garden 2 Guilds — System & Rewards', 'Grow a Garden 2 guilds guide with creation cost, weekly leaderboard rewards, and guild strategy.');

export default GuildsPage;
