import type { Metadata } from 'next';
import WeatherPage from '@/app/weather/page';
import { config } from '@/lib/games.config';

export const metadata: Metadata = {
  title: `${config.game.name} Weather Events — Mutation Triggers`,
  description: `Complete ${config.game.name} weather event guide with mutation triggers and farming strategy.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/weather/` },
};

export default WeatherPage;
