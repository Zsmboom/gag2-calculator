import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Seeds — Complete Seed Shop Prices & Guide`,
  description: `Complete ${gameName} seed shop guide. All seed prices in Sheckles and Robux, restock odds, the Ghost Pepper Pack, and recommended purchase strategy by game phase.`,
  alternates: { canonical: `${config.seo.baseUrl}/seeds/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const PRICES = [
  { seed: 'Carrot', rarity: 'Common', sheckles: '1', robux: '3💎', harvest: 'Multi' },
  { seed: 'Strawberry', rarity: 'Common', sheckles: '10', robux: '7💎', harvest: 'Multi' },
  { seed: 'Blueberry', rarity: 'Common', sheckles: '25', robux: '12💎', harvest: 'Multi' },
  { seed: 'Pumpkin', rarity: 'Uncommon', sheckles: '~34', robux: '—', harvest: 'Multi' },
  { seed: 'Tulip', rarity: 'Uncommon', sheckles: '40', robux: '4💎', harvest: 'Single' },
  { seed: 'Tomato', rarity: 'Uncommon', sheckles: '200', robux: '15💎', harvest: 'Multi' },
  { seed: 'Thorn Rose', rarity: 'TBD', sheckles: '229', robux: '—', harvest: 'TBD' },
  { seed: 'Pinetree', rarity: 'TBD', sheckles: '99', robux: '—', harvest: 'TBD' },
  { seed: 'Horned Melon', rarity: 'Mythic', sheckles: 'Pack only', robux: '99💎', harvest: 'Multi' },
  { seed: 'Glow Mushroom', rarity: 'Epic', sheckles: 'Pack only', robux: '99💎', harvest: 'Multi' },
  { seed: 'Apple', rarity: 'Uncommon', sheckles: '400', robux: '29💎', harvest: 'Multi' },
  { seed: 'Bamboo', rarity: 'Rare', sheckles: '700', robux: '17💎', harvest: 'Single' },
  { seed: 'Corn', rarity: 'Rare', sheckles: '2,500', robux: '69💎', harvest: 'Multi' },
  { seed: 'Cactus', rarity: 'Rare', sheckles: '5,000', robux: '79💎', harvest: 'Single' },
  { seed: 'Pineapple', rarity: 'Rare', sheckles: '10,000', robux: '99💎', harvest: 'Multi' },
  { seed: 'Mushroom', rarity: 'Epic', sheckles: '15,000', robux: '69💎', harvest: 'Multi' },
  { seed: 'Green Bean', rarity: 'Epic', sheckles: '20,000', robux: '99💎', harvest: 'Multi' },
  { seed: 'Grape', rarity: 'Epic', sheckles: '50,000', robux: '139💎', harvest: 'Multi' },
  { seed: 'Coconut', rarity: 'Epic', sheckles: '70,000', robux: '149💎', harvest: 'Multi' },
  { seed: 'Banana', rarity: 'Epic', sheckles: '30,000', robux: '119💎', harvest: 'Multi' },
  { seed: 'Mango', rarity: 'Epic', sheckles: '300,000', robux: '199💎', harvest: 'Multi' },
  { seed: 'Dragon Fruit', rarity: 'Legendary', sheckles: '120,000', robux: '239💎', harvest: 'Multi' },
  { seed: 'Acorn', rarity: 'Legendary', sheckles: '700,000', robux: '379💎', harvest: 'Multi' },
  { seed: 'Cherry', rarity: 'Legendary', sheckles: '1,200,000', robux: '479💎', harvest: 'Multi' },
  { seed: 'Sunflower', rarity: 'Legendary', sheckles: '5,000,000', robux: '599💎', harvest: 'Multi' },
  { seed: 'Romanesco', rarity: 'Mythic', sheckles: '99', robux: '—', harvest: 'Multi' },
  { seed: 'Lotus', rarity: 'Mythic', sheckles: '899', robux: '—', harvest: 'Single' },
  { seed: 'Beanstalk', rarity: 'Mythic', sheckles: '—', robux: '1,199💎', harvest: 'Multi' },
  { seed: 'Venus Flytrap', rarity: 'Mythic', sheckles: '7,000,000', robux: '799💎', harvest: 'Single' },
  { seed: 'Pomegranate', rarity: 'Mythic', sheckles: '12,000,000', robux: '999💎', harvest: 'Multi' },
  { seed: 'Poison Apple', rarity: 'Mythic', sheckles: '25,000,000', robux: '1,299💎', harvest: 'Single' },
  { seed: 'Moon Bloom', rarity: 'Super', sheckles: '65,000,000', robux: '1,349💎', harvest: 'TBD' },
  { seed: "Dragon's Breath", rarity: 'Super', sheckles: '90,000,000', robux: '1,499💎', harvest: 'Single' },
];

const RESTOCK = [
  { crop: 'Carrot', rarity: 'Common', chance: '30%' },
  { crop: 'Strawberry', rarity: 'Common', chance: '25%' },
  { crop: 'Blueberry', rarity: 'Common', chance: '20%' },
  { crop: 'Tomato', rarity: 'Uncommon', chance: '20%' },
  { crop: 'Tulip', rarity: 'Uncommon', chance: '18%' },
  { crop: 'Apple', rarity: 'Uncommon', chance: '18%' },
  { crop: 'Pumpkin', rarity: 'Uncommon', chance: '15%' },
  { crop: 'Bamboo', rarity: 'Rare', chance: '12%' },
  { crop: 'Corn', rarity: 'Rare', chance: '10%' },
  { crop: 'Cactus', rarity: 'Rare', chance: '10%' },
  { crop: 'Pineapple', rarity: 'Rare', chance: '8%' },
  { crop: 'Green Bean', rarity: 'Epic', chance: '15%' },
  { crop: 'Mushroom', rarity: 'Epic', chance: '9%' },
  { crop: 'Banana', rarity: 'Epic', chance: '9%' },
  { crop: 'Grape', rarity: 'Epic', chance: '6.6%' },
  { crop: 'Coconut', rarity: 'Epic', chance: '5%' },
  { crop: 'Mango', rarity: 'Epic', chance: '5%' },
  { crop: 'Dragon Fruit', rarity: 'Legendary', chance: '4%' },
  { crop: 'Acorn', rarity: 'Legendary', chance: '2.9%' },
  { crop: 'Cherry', rarity: 'Legendary', chance: '2.2%' },
  { crop: 'Sunflower', rarity: 'Legendary', chance: '1.7%' },
  { crop: 'Venus Flytrap', rarity: 'Mythic', chance: '1.43%' },
  { crop: 'Pomegranate', rarity: 'Mythic', chance: '0.9%' },
  { crop: 'Poison Apple', rarity: 'Mythic', chance: '0.5%' },
  { crop: 'Moon Bloom', rarity: 'Super', chance: '0.35%' },
  { crop: "Dragon's Breath", rarity: 'Super', chance: '0.275%' },
];

const STRATEGY = [
  { phase: 'Early', target: 'Bamboo (700🪙)', why: 'Plant densely, wait for weather mutations' },
  { phase: 'Mid', target: 'Mushroom (15K🪙)', why: 'Highest Epic base value at 13K/1kg' },
  { phase: 'Late', target: 'Dragon Fruit (120K🪙)', why: 'High value + defense compatible' },
  { phase: 'Endgame', target: "Dragon's Breath (90M🪙)", why: 'Super rarity, extreme returns' },
];

export default function SeedsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Seed Shop &amp; Prices</h1>
              <p className="subheading">
                Every seed in Sheckles and Robux, plus restock odds. The shop restocks every 4–5
                minutes — and Romanesco (99 Sheckles) has the best ROI in the game.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Shop Info</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Restock cycle:</strong> Every ~4–5 minutes</li>
                  <li><strong>Currency:</strong> Sheckles (🪙) / Robux (💎)</li>
                  <li><strong>Categories:</strong> Farming seeds, Defense plants, Ability Mushrooms, Ghost Pepper Pack</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Certified Price List</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Seed</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>Sheckles</th>
                        <th className={thClass}>Robux</th>
                        <th className={thClass}>Harvest</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRICES.map((p) => (
                        <tr key={p.seed} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>
                            <Link href={`/tier-list/${p.seed.toLowerCase().replace(/['\s]+/g, '-').replace(/[^a-z0-9-]/g, '')}/`} className="text-blue-600 dark:text-blue-400 hover:underline">
                              {p.seed}
                            </Link>
                          </td>
                          <td className={tdClass}>{p.rarity}</td>
                          <td className={tdClass}>{p.sheckles}</td>
                          <td className={tdClass}>{p.robux}</td>
                          <td className={tdClass}>{p.harvest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Restock Odds</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Crop</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>Restock Chance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RESTOCK.map((r) => (
                        <tr key={r.crop} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{r.crop}</td>
                          <td className={tdClass}>{r.rarity}</td>
                          <td className={`${tdClass} font-bold`}>{r.chance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Ghost Pepper Pack</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    The Ghost Pepper Pack is a 99💎 roll in the Item Shop that awards one random seed from
                    the pool below. Ghost Pepper itself is <strong>not sold separately</strong> — the only
                    way to farm it is through this pack.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                    <li><strong>Baby Cactus</strong> (Rare) — 50% drop rate</li>
                    <li><strong>Horned Melon</strong> (Mythic) — 30% drop rate</li>
                    <li><strong>Glow Mushroom</strong> (Epic) — 15% drop rate</li>
                    <li><strong>Poison Ivy</strong> (Legendary) — 4% drop rate</li>
                    <li><strong>Ghost Pepper</strong> (Mythic, multi-harvest) — 1% drop rate</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Seed Investment Strategy</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Phase</th>
                        <th className={thClass}>Target</th>
                        <th className={thClass}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STRATEGY.map((s) => (
                        <tr key={s.phase} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{s.phase}</td>
                          <td className={tdClass}>{s.target}</td>
                          <td className={tdClass}>{s.why}</td>
                        </tr>
                      ))}
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
