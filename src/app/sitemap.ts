import type { MetadataRoute } from 'next';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';

export const dynamic = 'force-static';

type ItemEntry = { slug?: string };

function normalizePath(path: string): string {
  // Strip trailing slash so sitemap URLs match the actual serving URLs
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.seo.baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const pageEntries: MetadataRoute.Sitemap = config.pages.map((page) => ({
    url: `${baseUrl}${normalizePath(page.path)}`,
    lastModified: today,
    changeFrequency: page.priority >= 0.9 ? 'weekly' : page.priority >= 0.6 ? 'monthly' : 'yearly',
    priority: page.priority,
  }));

  const items = (((itemsData as unknown) as { items: ItemEntry[] }).items ?? []);
  const itemEntries: MetadataRoute.Sitemap = items
    .filter((it) => !!it.slug)
    .map((it) => ({
      url: `${baseUrl}/tier-list/${it.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  return [...pageEntries, ...itemEntries];
}
