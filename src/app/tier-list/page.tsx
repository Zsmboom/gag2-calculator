import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Tier List | ${config.seo.siteTitle}`,
  description: `Best-in-class ${gameName} tier list — every item, ranked S / A / B / C / D.`,
  alternates: { canonical: `${config.seo.baseUrl}/tier-list/` },
};

type Tier = 'S' | 'A' | 'B' | 'C' | 'D';
const TIERS: Tier[] = ['S', 'A', 'B', 'C', 'D'];

const TIER_STYLES: Record<Tier, string> = {
  S: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  A: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  B: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  C: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  D: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
};

type Item = {
  slug: string;
  name: string;
  tier: Tier;
  description?: string;
};

const items: Item[] = ((itemsData as { items: Item[] }).items ?? [])
  .filter((it) => it && it.slug && it.tier)
  .map((it) => ({
    slug: it.slug,
    name: it.name,
    tier: it.tier,
    description: it.description,
  }));

export default function TierListPage() {
  const byTier = TIERS.reduce<Record<Tier, Item[]>>(
    (acc, tier) => {
      acc[tier] = items.filter((it) => it.tier === tier);
      return acc;
    },
    { S: [], A: [], B: [], C: [], D: [] }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Tier List</h1>
              <p className="subheading">
                Every {gameName} item, ranked from S (best) down to D (skip). Click any item
                for the full breakdown.
              </p>
            </div>

            {items.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <p className="text-gray-600 dark:text-gray-300">
                  The {gameName} tier list is empty. Add items to <code>src/data/items.json</code>
                  {' '}and they&apos;ll appear here automatically.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {TIERS.map((tier) => (
                  <div
                    key={tier}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <span
                        className={
                          'inline-flex items-center justify-center w-10 h-10 rounded-md font-bold ' +
                          TIER_STYLES[tier]
                        }
                      >
                        {tier}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {byTier[tier].length} item{byTier[tier].length === 1 ? '' : 's'}
                      </span>
                    </div>
                    {byTier[tier].length === 0 ? (
                      <p className="px-4 py-6 text-sm text-gray-500 dark:text-gray-400">
                        No items in this tier yet.
                      </p>
                    ) : (
                      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {byTier[tier].map((it) => (
                          <li key={it.slug}>
                            <Link
                              href={`/tier-list/${it.slug}/`}
                              className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                            >
                              <span className="font-medium text-gray-900 dark:text-white">
                                {it.name}
                              </span>
                              {it.description ? (
                                <span className="text-sm text-gray-500 dark:text-gray-400 truncate ml-4 max-w-[60%]">
                                  {it.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
