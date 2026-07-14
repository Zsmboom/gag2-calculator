import type { Metadata } from 'next';
import WeatherPage from '@/app/weather/page';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';

export const metadata: Metadata = pageMetadata('/systems/weather', 'Grow a Garden 2 Weather — Events & Effects', 'Grow a Garden 2 weather events and effects guide with mutation triggers and farming strategy.');

export default WeatherPage;
