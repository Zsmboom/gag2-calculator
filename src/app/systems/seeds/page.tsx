import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Seeds — 38 Crop Database & Seed Packs`,
  description: `Complete ${gameName} seeds guide with all 38 crops, seed costs, rarity, harvest type, Venom Spitter, Hypno Bloom, Ghost Pepper Pack, and Rare Seed Pack drops.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/seeds/` },
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
  (it) => it && it.slug && it.name
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
                { label: 'Systems', href: '/systems/' },
                { label: 'Seeds', href: '/systems/seeds/' },
              ]}
            />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Seeds &amp; Crops</h1>
              <p className="subheading">
                Complete database of all 38 crops, including Venom Spitter, Hypno Bloom, Mega Seed,
                seed costs, harvest type, and seed pack drop references.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-10">
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
                            href={`/systems/seeds/${seed.slug}/`}
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
