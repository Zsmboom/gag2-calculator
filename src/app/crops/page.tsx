import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Crops — Complete 36-Crop Database`,
  description: `All 36 ${gameName} crops ranked by value. Super, Mythic, Legendary, Epic, Rare, and Common tiers with 1kg sell prices, floor values, seed costs, and harvest types.`,
  alternates: { canonical: `${config.seo.baseUrl}/crops/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const CROPS = [
  // SUPER
  { name: 'Moon Bloom', tier: 'Super', value: '9,000', floor: '8,100', seedCost: '65M 🪙 / 1,349 💎', harvest: 'TBD', slug: 'moon-bloom' },
  { name: "Dragon's Breath", tier: 'Super', value: '3,400', floor: '3,100', seedCost: '90M 🪙 / 1,499 💎', harvest: 'Single', slug: 'dragons-breath' },
  // MYTHIC
  { name: 'Lotus', tier: 'Mythic', value: '6,500', floor: '5,900', seedCost: '899 🪙', harvest: 'Single', slug: 'lotus' },
  { name: 'Venus Flytrap', tier: 'Mythic', value: '3,000', floor: '2,700', seedCost: '7M 🪙 / 799 💎', harvest: 'Single', slug: 'venus-flytrap' },
  { name: 'Ghost Pepper', tier: 'Mythic', value: '2,500', floor: '2,300', seedCost: '99 💎 Pack (1%)', harvest: 'Multi', slug: 'ghost-pepper' },
  { name: 'Beanstalk', tier: 'Mythic', value: '2,000', floor: '1,800', seedCost: '1,199 💎', harvest: 'Multi', slug: 'beanstalk' },
  { name: 'Romanesco', tier: 'Mythic', value: '1,500', floor: '1,400', seedCost: '99 🪙', harvest: 'Multi', slug: 'romanesco' },
  { name: 'Pomegranate', tier: 'Mythic', value: '900', floor: '812', seedCost: '12M 🪙 / 999 💎', harvest: 'Multi', slug: 'pomegranate' },
  { name: 'Poison Apple', tier: 'Mythic', value: '900', floor: '812', seedCost: '25M 🪙 / 1,299 💎', harvest: 'Single', slug: 'poison-apple' },
  { name: 'Horned Melon', tier: 'Mythic', value: '200', floor: '180', seedCost: '99 💎 Pack (30%)', harvest: 'Multi', slug: 'horned-melon' },
  // LEGENDARY
  { name: 'Sunflower', tier: 'Legendary', value: '1,800', floor: '1,600', seedCost: '5M 🪙 / 599 💎', harvest: 'Multi', slug: 'sunflower' },
  { name: 'Poison Ivy', tier: 'Legendary', value: '1,700', floor: '1,500', seedCost: '99 💎 Pack (4%)', harvest: 'Multi', slug: 'poison-ivy' },
  { name: 'Cherry', tier: 'Legendary', value: '350', floor: '316', seedCost: '1.2M 🪙 / 479 💎', harvest: 'Multi', slug: 'cherry' },
  { name: 'Acorn', tier: 'Legendary', value: '200', floor: '180', seedCost: '700K 🪙 / 379 💎', harvest: 'Multi', slug: 'acorn' },
  { name: 'Dragon Fruit', tier: 'Legendary', value: '150', floor: '135', seedCost: '120K 🪙 / 239 💎', harvest: 'Multi', slug: 'dragon-fruit' },
  // EPIC
  { name: 'Mushroom', tier: 'Epic', value: '13,000', floor: '11,700', seedCost: '15K 🪙 / 69 💎', harvest: 'Multi', slug: 'mushroom' },
  { name: 'Glow Mushroom', tier: 'Epic', value: '700', floor: '632', seedCost: '99 💎 Pack (15%)', harvest: 'Multi', slug: 'glow-mushroom' },
  { name: 'Mango', tier: 'Epic', value: '90', floor: '81', seedCost: '300K 🪙 / 199 💎', harvest: 'Multi', slug: 'mango' },
  { name: 'Coconut', tier: 'Epic', value: '60', floor: '54', seedCost: '70K 🪙 / 149 💎', harvest: 'Multi', slug: 'coconut' },
  { name: 'Grape', tier: 'Epic', value: '45', floor: '41', seedCost: '50K 🪙 / 139 💎', harvest: 'Multi', slug: 'grape' },
  { name: 'Banana', tier: 'Epic', value: '35', floor: '32', seedCost: '30K 🪙 / 119 💎', harvest: 'Multi', slug: 'banana' },
  { name: 'Green Bean', tier: 'Epic', value: '10', floor: '9', seedCost: '20K 🪙 / 99 💎', harvest: 'Multi', slug: 'green-bean' },
  // RARE
  { name: 'Bamboo', tier: 'Rare', value: '800', floor: '722', seedCost: '700 🪙 / 17 💎', harvest: 'Single', slug: 'bamboo' },
  { name: 'Baby Cactus', tier: 'Rare', value: '70', floor: '63', seedCost: '99 💎 Pack (50%)', harvest: 'Single', slug: 'baby-cactus' },
  { name: 'Cactus', tier: 'Rare', value: '40', floor: '36', seedCost: '5K 🪙 / 79 💎', harvest: 'Single', slug: 'cactus' },
  { name: 'Corn', tier: 'Rare', value: '34', floor: '31', seedCost: '3K 🪙 / 69 💎', harvest: 'Multi', slug: 'corn' },
  { name: 'Pineapple', tier: 'Rare', value: '30', floor: '27', seedCost: '10K 🪙 / 99 💎', harvest: 'Multi', slug: 'pineapple' },
  // UNCOMMON
  { name: 'Pumpkin', tier: 'Uncommon', value: '350', floor: '316', seedCost: '~34 🪙', harvest: 'Multi', slug: 'pumpkin' },
  { name: 'Tulip', tier: 'Uncommon', value: '60', floor: '54', seedCost: '40 🪙 / 4 💎', harvest: 'Single', slug: 'tulip' },
  { name: 'Apple', tier: 'Uncommon', value: '12', floor: '11', seedCost: '400 🪙 / 29 💎', harvest: 'Multi', slug: 'apple' },
  { name: 'Tomato', tier: 'Uncommon', value: '9', floor: '8', seedCost: '200 🪙 / 15 💎', harvest: 'Multi', slug: 'tomato' },
  // COMMON
  { name: 'Carrot', tier: 'Common', value: '5', floor: '5', seedCost: '1 🪙 / 3 💎', harvest: 'Multi', slug: 'carrot' },
  { name: 'Blueberry', tier: 'Common', value: '5', floor: '5', seedCost: '25 🪙 / 12 💎', harvest: 'Multi', slug: 'blueberry' },
  { name: 'Strawberry', tier: 'Common', value: '3', floor: '3', seedCost: '10 🪙 / 7 💎', harvest: 'Multi', slug: 'strawberry' },
  // TBD
  { name: 'Thorn Rose', tier: 'TBD', value: '140', floor: '126', seedCost: '229 🪙', harvest: 'TBD', slug: 'thorn-rose' },
  { name: 'Pinetree', tier: 'TBD', value: '100', floor: '90', seedCost: '99 🪙', harvest: 'TBD', slug: 'pinetree' },
];

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
                All 36 crops with 1kg sell prices, seed costs, rarity tiers, and harvest types —
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
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
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
