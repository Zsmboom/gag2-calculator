import type { Metadata } from 'next';
import GearPage from '@/app/gear/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Gear — Sprinklers, Defense & Tools`,
  description: `Complete ${config.game.name} gear guide for sprinklers, defense equipment, raid tools, and investment priority.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/gear` },
};

export default GearPage;
