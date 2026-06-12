import type { MetadataRoute } from 'next';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';

type ItemEntry = { slug?: string };

function withTrailingSlash(path: string): string {
  if (path === '/' || path.endsWith('/')) return path;
  return `${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.seo.baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const pageEntries: MetadataRoute.Sitemap = config.pages.map((page) => ({
    url: `${baseUrl}${withTrailingSlash(page.path)}`,
    lastModified: today,
    changeFrequency: page.priority >= 0.9 ? 'weekly' : page.priority >= 0.6 ? 'monthly' : 'yearly',
    priority: page.priority,
  }));

  const items = (itemsData as { items: ItemEntry[] }).items ?? [];
  const itemEntries: MetadataRoute.Sitemap = items
    .filter((it) => !!it.slug)
    .map((it) => ({
      url: `${baseUrl}/tier-list/${it.slug}/`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  return [...pageEntries, ...itemEntries];
}
