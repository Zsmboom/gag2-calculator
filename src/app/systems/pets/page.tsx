import type { Metadata } from 'next';
import PetsPage from '@/app/pets/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata(
  '/systems/pets',
  'Grow a Garden 2 Pets — Complete List',
  'Grow a Garden 2 pets complete list with rarity, spawn mechanics, prices, roles, and abilities.',
);

export default PetsPage;
