import type { Metadata } from 'next';
import MutationsPage from '@/app/mutations/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Mutations — Multipliers & Weather Triggers`,
  description: `Complete ${config.game.name} mutation guide with multipliers, weather triggers, and GAG2 mutually exclusive mutation rules.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/mutations` },
};

export default MutationsPage;
