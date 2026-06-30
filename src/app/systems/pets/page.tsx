import type { Metadata } from 'next';
import PetsPage from '@/app/pets/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Pets — Full Pet Catalog & Guide`,
  description: `Discover all ${config.game.name} pets, spawn mechanics, buy prices, and abilities.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/pets/` },
};

export default PetsPage;
