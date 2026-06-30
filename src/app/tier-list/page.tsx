import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Crop Tier List`,
  description: `Every ${gameName} crop ranked by rarity — Super, Mythic, Legendary, Epic, Rare, Uncommon, and Common — with 1kg values, seed costs, and harvest types.`,
  alternates: { canonical: `${config.seo.baseUrl}/tier-list/` },
};

type Tier = 'Super' | 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Uncommon' | 'Common' | 'TBD';
const TIERS: Tier[] = ['Super', 'Mythic', 'Legendary', 'Epic', 'Rare', 'Uncommon', 'Common', 'TBD'];

const TIER_STYLES: Record<Tier, string> = {
  Super: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
  Mythic: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Legendary: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Epic: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  Rare: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Uncommon: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Common: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
  TBD: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
};

const TIER_ORDER: Record<Tier, number> = {
  Super: 0, Mythic: 1, Legendary: 2, Epic: 3, Rare: 4, Uncommon: 5, Common: 6, TBD: 7,
};

type Item = {
  slug: string;
  name: string;
  tier: Tier;
  baseValue?: number | string;
  description?: string;
};

function numericValue(value: number | string | undefined): number {
  return typeof value === 'number' ? value : -1;
}

const rawItems = (((itemsData as unknown) as { items: Item[] }).items ?? [])
  .filter((it) => it && it.slug && it.tier)
  .map((it) => ({
    slug: it.slug,
    name: it.name,
    tier: it.tier as Tier,
    baseValue: it.baseValue,
    description: it.description,
  }));

// Sort within each tier by base value descending; undefined baseValue last.
const items: Item[] = [...rawItems].sort((a, b) => {
  const tierDiff = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
  if (tierDiff !== 0) return tierDiff;
  return numericValue(b.baseValue) - numericValue(a.baseValue);
});

export default function TierListPage() {
  const byTier = TIERS.reduce<Record<Tier, Item[]>>(
    (acc, tier) => {
      acc[tier] = items.filter((it) => it.tier === tier);
      return acc;
    },
    { Super: [], Mythic: [], Legendary: [], Epic: [], Rare: [], Uncommon: [], Common: [], TBD: [] }
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs segments={[{ label: 'Tier List', href: '/tier-list/' }]} />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Crop Tier List</h1>
              <p className="subheading">
                Every {gameName} crop, ranked by rarity from Super (best) down to Common. Click any
                crop for the full breakdown — value, seed cost, and how to get it.
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
                          'inline-flex items-center justify-center min-w-[5rem] h-10 px-2 rounded-md font-bold text-sm ' +
                          TIER_STYLES[tier]
                        }
                      >
                        {tier}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {byTier[tier].length} crop{byTier[tier].length === 1 ? '' : 's'}
                      </span>
                    </div>
                    {byTier[tier].length === 0 ? (
                      <p className="px-4 py-6 text-sm text-gray-500 dark:text-gray-400">
                        No crops in this tier yet.
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
                              <span className="flex items-center gap-3 ml-4">
                                {typeof it.baseValue === 'number' ? (
                                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                                    {it.baseValue.toLocaleString()} S/kg
                                  </span>
                                ) : null}
                                {it.description ? (
                                  <span className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-[40%]">
                                    {it.description}
                                  </span>
                                ) : null}
                              </span>
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
