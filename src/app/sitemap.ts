import type { MetadataRoute } from 'next';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import npcsData from '@/data/npcs.json';

export const dynamic = 'force-static';

type ItemEntry = { slug?: string };
type NpcEntry = { slug?: string };

function cleanPath(path: string): string {
  if (path === '/') return path;
  return path.replace(/\/+$/, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.seo.baseUrl.replace(/\/$/, '');
  const today = new Date().toISOString().split('T')[0];

  const pageEntries: MetadataRoute.Sitemap = config.pages.map((page) => ({
    url: `${baseUrl}${cleanPath(page.path)}`,
    lastModified: today,
    changeFrequency: page.priority >= 0.9 ? 'weekly' : page.priority >= 0.6 ? 'monthly' : 'yearly',
    priority: page.priority,
  }));

  const items = (((itemsData as unknown) as { items: ItemEntry[] }).items ?? []);
  const itemEntries: MetadataRoute.Sitemap = items
    .filter((it) => !!it.slug)
    .map((it) => ({
      url: `${baseUrl}/systems/seeds/${it.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  const npcs = (((npcsData as unknown) as { npcs: NpcEntry[] }).npcs ?? []);
  const npcEntries: MetadataRoute.Sitemap = npcs
    .filter((npc) => !!npc.slug)
    .map((npc) => ({
      url: `${baseUrl}/systems/npcs/${npc.slug}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    }));

  const petEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/systems/pets/firefly`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  const contractEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guide`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const entries = [...pageEntries, ...contractEntries, ...itemEntries, ...npcEntries, ...petEntries];
  return entries.filter((entry, index) => entries.findIndex((item) => item.url === entry.url) === index);
}
