import type { Metadata } from 'next';
import BargainSystemPage from '@/app/bargain-system/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/bargain-system', 'Grow a Garden 2 Bargain System — Sell Bonus Guide', 'Grow a Garden 2 bargain system guide covering the estimated sell bonus and current unknowns.');

export default BargainSystemPage;
