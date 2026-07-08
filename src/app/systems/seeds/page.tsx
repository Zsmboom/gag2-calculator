import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Seeds — 43 Crop Database & Seed Packs`,
  description: `Complete ${gameName} seeds guide with 43 crop entries, seed costs, rarity, harvest type, Fire Fern, Rocket Pop, Hypno Bloom, seed packs, and unreleased crop notes.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/seeds` },
};

type SeedItem = {
  slug: string;
  name: string;
  tier: string;
  baseValue?: number | string;
  description?: string;
  stats?: Record<string, string | number>;
};

const seeds: SeedItem[] = (((itemsData as unknown) as { items: SeedItem[] }).items ?? []).filter(
  (it) => it && it.slug && it.name && it.slug !== 'mega-seed'
);

const tierOrder: Record<string, number> = {
  Super: 0,
  Mythic: 1,
  Legendary: 2,
  Epic: 3,
  Rare: 4,
  Uncommon: 5,
  Common: 6,
  TBD: 7,
};

function numericValue(value: number | string | undefined): number {
  return typeof value === 'number' ? value : -1;
}

const sortedSeeds = [...seeds].sort((a, b) => {
  const tierDiff = (tierOrder[a.tier] ?? 99) - (tierOrder[b.tier] ?? 99);
  if (tierDiff !== 0) return tierDiff;
  return numericValue(b.baseValue) - numericValue(a.baseValue);
});

const cropCount = seeds.length;
const latestSeeds = ['fire-fern', 'rocket-pop', 'bone-blossom', 'briar-rose']
  .map((slug) => seeds.find((seed) => seed.slug === slug))
  .filter((seed): seed is SeedItem => Boolean(seed));

const ghostPepperPack = [
  ['Baby Cactus', 'Rare', '50%', '1 in 2'],
  ['Horned Melon', 'Rare', '30%', '1 in 3'],
  ['Glow Mushroom', 'Epic', '15%', '1 in 7'],
  ['Poison Ivy', 'Legendary', '4%', '1 in 25'],
  ['Ghost Pepper', 'Mythic', '1%', '1 in 100'],
];

const rareSeedPack = [
  ['Banana', '10.3%'],
  ['Cactus', '10.03%'],
  ['Corn', '9.9%'],
  ['Grape', '9.15%'],
  ['Pineapple', '8.91%'],
  ['Coconut', '7.81%'],
  ['Apple', '7.51%'],
  ['Mango', '6.25%'],
  ['Hypno Bloom', '0.00086%'],
];

const otherPacks = [
  'Super Seed Pack — 24 drops (Source TBA)',
  'Secret Seed Pack — 22 drops (Source TBA)',
  'Mythic Seed Pack — 27 drops (Source TBA)',
  'Legendary Seed Pack — 27 drops (Source TBA)',
  'Premium Seed Pack — Unobtainable, 99 R$',
  'Starter Pack — Limited Bundle, 149 R$',
  'Common Seed Pack — Tutorial Reward, 129 R$',
  'Common Seed Pack (Exclusive) — One-time Purchase, 129 R$',
];

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

export default function SystemsSeedsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs
              segments={[
                { label: 'Systems', href: '/systems' },
                { label: 'Seeds', href: '/systems/seeds' },
              ]}
            />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Seeds &amp; Crops</h1>
              <p className="subheading">
                Complete database of all {cropCount} crop entries, including Fire Fern, Rocket Pop,
                Bone Blossom, Briar Rose, Hypno Bloom, seed costs, harvest type, and seed pack drop
                references.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-10">
              {latestSeeds.length > 0 ? (
                <section className="rounded-lg border border-orange-200 bg-orange-50 p-5 dark:border-orange-900/60 dark:bg-orange-950/30">
                  <h2 className="text-2xl font-semibold mb-3">Update 1.13.0 Seeds</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    The July 2026 data refresh adds two shop-listed Legendary crops and two
                    unreleased/testing crops. Fire Fern is the standout multi-harvest crop at 6M
                    Sheckles, while Rocket Pop is a lower-cost single-harvest Legendary.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {latestSeeds.map((seed) => (
                      <Link
                        key={seed.slug}
                        href={`/systems/seeds/${seed.slug}`}
                        className="rounded-md bg-white p-4 shadow-sm ring-1 ring-orange-100 hover:ring-orange-300 dark:bg-gray-900 dark:ring-orange-900"
                      >
                        <p className="font-semibold text-gray-900 dark:text-white">{seed.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {seed.tier} · {seed.stats?.Harvest ?? 'TBD'} ·{' '}
                          {seed.stats?.['Seed Cost'] ?? 'TBA'}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}

              <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <table className="w-full">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className={thClass}>Seed</th>
                      <th className={thClass}>Rarity</th>
                      <th className={thClass}>1kg Value</th>
                      <th className={thClass}>Seed Cost</th>
                      <th className={thClass}>Harvest</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedSeeds.map((seed) => (
                      <tr key={seed.slug} className="border-t border-gray-200 dark:border-gray-700">
                        <td className={`${tdClass} font-medium`}>
                          <Link
                            href={`/systems/seeds/${seed.slug}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {seed.name}
                          </Link>
                        </td>
                        <td className={tdClass}>{seed.tier}</td>
                        <td className={tdClass}>{seed.stats?.['1kg Value'] ?? seed.baseValue ?? 'TBD'}</td>
                        <td className={tdClass}>{seed.stats?.['Seed Cost'] ?? 'TBD'}</td>
                        <td className={tdClass}>{seed.stats?.Harvest ?? 'TBD'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Ghost Pepper Pack</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Ghost Pepper Pack is a Robux gacha seed pack from the Seeds Shop: 99 Robux per
                  roll, or 799 Robux for the 10-roll bundle.
                </p>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Crop</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>Drop Chance</th>
                        <th className={thClass}>Odds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ghostPepperPack.map(([crop, rarity, chance, odds]) => (
                        <tr key={crop} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{crop}</td>
                          <td className={tdClass}>{rarity}</td>
                          <td className={tdClass}>{chance}</td>
                          <td className={tdClass}>{odds}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Rare Seed Pack</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Rare Seed Pack drops are community-sourced from the free gag.gg vote reward and
                  remain unverified. The full source lists 27 drops; the rarest listed drop is Hypno
                  Bloom at 0.00086%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {rareSeedPack.map(([crop, chance]) => (
                    <div
                      key={crop}
                      className="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4"
                    >
                      <p className="font-semibold text-gray-900 dark:text-white">{crop}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{chance} drop chance</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Other Packs Being Verified</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  {otherPacks.map((pack) => (
                    <li key={pack}>{pack}</li>
                  ))}
                </ul>
              </section>

              <ObsidianArticle source="systems/seeds/list.md" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
