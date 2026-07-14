import type { Metadata } from 'next';
import NightStealingPage from '@/app/night-stealing/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/night-stealing', 'Grow a Garden 2 Night Stealing — Complete Guide', 'Grow a Garden 2 night stealing complete guide with the day/night cycle, raiding rules, and defense methods.');

export default NightStealingPage;
