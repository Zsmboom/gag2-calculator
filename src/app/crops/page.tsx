import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Crops — Complete Crop Database`,
  description: `All ${gameName} crops ranked by value. Super, Mythic, Legendary, Epic, Rare, and Common tiers with 1kg sell prices, floor values, seed costs, and harvest types.`,
  alternates: { canonical: `${config.seo.baseUrl}/crops/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const TIER_ORDER = ['Super', 'Mythic', 'Legendary', 'Epic', 'Rare', 'Uncommon', 'Common', 'TBD'];

const TIER_COLORS: Record<string, string> = {
  Super: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Mythic: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Legendary: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  Epic: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Rare: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Uncommon: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  Common: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
  TBD: 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400',
};

type CropItem = {
  slug: string;
  name: string;
  tier: string;
  baseValue?: number;
  stats?: Record<string, string | number>;
};

const CROPS = (((itemsData as unknown) as { items: CropItem[] }).items ?? [])
  .filter((item) => item.slug && item.name && item.tier)
  .map((item) => ({
    slug: item.slug,
    name: item.name,
    tier: item.tier,
    value: typeof item.baseValue === 'number'
      ? item.baseValue.toLocaleString()
      : String(item.stats?.['1kg Value'] ?? 'TBD'),
    floor: String(item.stats?.Floor ?? 'TBD'),
    seedCost: String(item.stats?.['Seed Cost'] ?? 'TBD'),
    harvest: String(item.stats?.Harvest ?? 'TBD'),
    sortValue: typeof item.baseValue === 'number' ? item.baseValue : -1,
  }))
  .sort((a, b) => b.sortValue - a.sortValue);

export default function CropsPage() {
  const grouped = TIER_ORDER.map((tier) => ({
    tier,
    crops: CROPS.filter((c) => c.tier === tier),
  })).filter((g) => g.crops.length > 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Crop Database</h1>
              <p className="subheading">
                All {CROPS.length} crops with 1kg sell prices, seed costs, rarity tiers, and harvest types —
                the most complete reference for {gameName} farming.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {grouped.map(({ tier, crops }) => (
                <div key={tier}>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${TIER_COLORS[tier]}`}>
                      {tier}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-base font-normal">
                      {crops.length} crop{crops.length > 1 ? 's' : ''}
                    </span>
                  </h2>
                  <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th className={thClass}>Crop</th>
                          <th className={thClass}>1kg Value</th>
                          <th className={thClass}>Floor</th>
                          <th className={thClass}>Seed Cost</th>
                          <th className={thClass}>Harvest</th>
                        </tr>
                      </thead>
                      <tbody>
                        {crops.map((crop) => (
                          <tr
                            key={crop.slug}
                            className="border-t border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                          >
                            <td className={`${tdClass} font-medium`}>
                              <Link
                                href={`/tier-list/${crop.slug}/`}
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                {crop.name}
                              </Link>
                            </td>
                            <td className={`${tdClass} font-bold text-green-600 dark:text-green-400`}>
                              {crop.value}
                            </td>
                            <td className={`${tdClass} text-gray-500 dark:text-gray-400`}>{crop.floor}</td>
                            <td className={tdClass}>{crop.seedCost}</td>
                            <td className={tdClass}>
                              <span
                                className={
                                  crop.harvest === 'Multi'
                                    ? 'text-green-600 dark:text-green-400'
                                    : crop.harvest === 'Single'
                                    ? 'text-amber-600 dark:text-amber-400'
                                    : 'text-gray-400'
                                }
                              >
                                {crop.harvest}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <strong>Data source:</strong> Community-tested estimates from{' '}
                  <a
                    href="https://growagarden2wiki.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    growagarden2wiki.net
                  </a>
                  . Seed costs show Sheckles (🪙) and/or Robux (💎). Multi-harvest crops regrow after
                  each pick; Single-harvest crops die after one harvest.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Best ROI by Tier</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Crop</th>
                        <th className={thClass}>1kg Value</th>
                        <th className={thClass}>Seed Cost</th>
                        <th className={thClass}>ROI Ratio</th>
                        <th className={thClass}>Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300">
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className={`${tdClass} font-medium`}>Romanesco</td>
                        <td className={tdClass}>1,500</td>
                        <td className={tdClass}>99 🪙</td>
                        <td className={`${tdClass} font-bold text-green-600 dark:text-green-400`}>15.15×</td>
                        <td className={tdClass}>Best ROI in the game</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className={`${tdClass} font-medium`}>Carrot</td>
                        <td className={tdClass}>5</td>
                        <td className={tdClass}>1 🪙</td>
                        <td className={`${tdClass} font-bold`}>5.00×</td>
                        <td className={tdClass}>Best starter ROI</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className={`${tdClass} font-medium`}>Bamboo</td>
                        <td className={tdClass}>800</td>
                        <td className={tdClass}>700 🪙</td>
                        <td className={`${tdClass} font-bold`}>1.14×</td>
                        <td className={tdClass}>Best mid-game, dense plantable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
