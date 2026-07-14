import type { Metadata } from 'next';
import OfflineGrowthPage from '@/app/offline-growth/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/offline-growth', 'Grow a Garden 2 Offline Growth — Complete Guide', 'Grow a Garden 2 offline growth complete guide with theft risks, defenses, and overnight farming tips.');

export default OfflineGrowthPage;
