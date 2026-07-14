import type { Metadata } from 'next';
import MutationsPage from '@/app/mutations/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/mutations', 'Grow a Garden 2 Mutations — Complete Multiplier List', 'Grow a Garden 2 mutations complete multiplier list with weather triggers and mutually exclusive mutation rules.');

export default MutationsPage;
