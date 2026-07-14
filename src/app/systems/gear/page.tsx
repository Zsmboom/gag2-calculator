import type { Metadata } from 'next';
import GearPage from '@/app/gear/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/gear', 'Grow a Garden 2 Gear — Complete List', 'Grow a Garden 2 gear complete list with sprinklers, defense equipment, raid tools, and investment priorities.');

export default GearPage;
