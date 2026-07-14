import type { Metadata } from 'next';
import { config } from '@/lib/games.config';

const DEFAULT_DESCRIPTION =
  'Complete Grow a Garden 2 Roblox guide with verified gameplay facts, prices, systems, and update information.';

export function pageMetadata(
  route: string,
  title: string,
  description = DEFAULT_DESCRIPTION,
): Metadata {
  const normalizedRoute = route === '/' ? '/' : route.replace(/\/+$/, '');
  const url = `${config.seo.baseUrl.replace(/\/$/, '')}${normalizedRoute}`;

  return {
    title,
    description,
    alternates: normalizedRoute === '/' ? undefined : { canonical: url },
    openGraph: {
      type: 'website',
      ...(normalizedRoute === '/' ? {} : { url }),
      title,
      description,
      siteName: config.game.name,
      images: [
        {
          url: `${config.seo.baseUrl}/images/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${config.game.name} guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${config.seo.baseUrl}/images/og-image.svg`],
    },
  };
}
