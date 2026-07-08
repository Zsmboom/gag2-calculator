import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Mutations — Complete Multiplier List`,
  description: `Complete ${gameName} mutation guide. Confirmed multipliers from Bloodlit (×80) to Gold (×10), weather triggers, and the key GAG1 vs GAG2 difference: mutations are mutually exclusive.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/mutations` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const CONFIRMED = [
  { name: 'Aurora', mult: '×1.5', rarity: 'Mythic', how: 'Aurora Borealis night weather event' },
  { name: 'Bloodlit', mult: '×80 (unconfirmed)', rarity: 'Legendary', how: 'Blood Moon event (every 4h Lunar Glow variation)' },
  { name: 'Electric', mult: '×25 (Beebom 2026)', rarity: 'Legendary', how: 'Thunderstorm weather (rare)' },
  { name: 'Frozen', mult: '×3 (Beebom 2026)', rarity: 'Epic', how: 'Frost event — crop must already be Wet' },
  { name: 'Rainbow', mult: '×10 (Beebom 2026)', rarity: 'Epic', how: 'Rainbow Seed trigger / natural 0.1%' },
  { name: 'Starstruck', mult: 'TBA', rarity: 'Epic', how: 'Unknown event' },
  { name: 'Gold', mult: '×10', rarity: 'Rare', how: 'Gold Seed trigger / natural 1% / Dragonfly pet' },
];

const WEATHER = [
  { weather: 'Aurora Borealis', mutation: 'Aurora', mult: '×1.5' },
  { weather: 'Rain', mutation: 'Wet', mult: '×2' },
  { weather: 'Thunderstorm', mutation: 'Wet → Electric', mult: '×2 → ×25 (Beebom 2026)' },
  { weather: 'Frost', mutation: 'Chilled → Frozen', mult: '×2 → ×3 (Beebom 2026)' },
  { weather: 'Blood Moon', mutation: 'Bloodlit', mult: '×80' },
  { weather: 'Lunar Glow', mutation: 'Moonlit', mult: '×2' },
  { weather: 'Sandstorm', mutation: 'Sandy', mult: '×3' },
  { weather: 'Tornado', mutation: 'Twisted', mult: '×5' },
  { weather: 'Tropical Rain', mutation: 'Drenched', mult: '×5' },
  { weather: 'Acid Rain', mutation: 'Acidic', mult: '×12' },
  { weather: 'Oil Rain', mutation: 'Oil', mult: '×15' },
];

const BASE_WEATHER = [
  { weather: 'Rain / Thunderstorm / Sprinklers', mutation: 'Wet', mult: '×2' },
  { weather: 'Frost / Polar Bear Pet', mutation: 'Chilled', mult: '×2' },
  { weather: 'Lunar Glow (hourly at night)', mutation: 'Moonlit', mult: '×2' },
  { weather: 'Bee Swarm / Bee Pet', mutation: 'Pollinated', mult: '×3' },
  { weather: 'Sandstorm', mutation: 'Sandy', mult: '×3' },
  { weather: 'Blood Moon', mutation: 'Bloodlit', mult: '×4 (GAG1; GAG2 = ×80)' },
  { weather: 'Tornado', mutation: 'Twisted', mult: '×5' },
  { weather: 'Tropical Rain', mutation: 'Drenched', mult: '×5' },
  { weather: 'Acid Rain', mutation: 'Acidic', mult: '×12' },
  { weather: 'Oil Rain / Pet Trait', mutation: 'Oil', mult: '×15' },
];

const STRATEGY = [
  { phase: 'Early', target: 'Gold (×10)', method: 'Mass plant for 1% natural chance' },
  { phase: 'Mid', target: 'Frozen (×3)', method: 'Frost weather + pre-soak crops (Wet)' },
  { phase: 'Late', target: 'Electric (×25)', method: 'Wait for Thunderstorm event' },
  { phase: 'Endgame', target: 'Bloodlit (×80)', method: 'Time your harvest for Blood Moon (every 4h)' },
];

export default function MutationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Mutations Complete Multiplier List</h1>
              <p className="subheading">
                Every confirmed GAG2 mutation multiplier, what triggers it, and how to farm
                mutations efficiently. The biggest change from GAG1: mutations are mutually
                exclusive.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Critical GAG2 vs GAG1 difference:</strong> Mutations are{' '}
                  <strong>mutually exclusive</strong> — only one applies per crop at a time. You can
                  no longer stack mutations. The highest confirmed multiplier is Bloodlit at ×80.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Confirmed Multipliers</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Mutation</th>
                        <th className={thClass}>Multiplier</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>How to get</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CONFIRMED.map((m) => (
                        <tr key={m.name} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{m.name}</td>
                          <td className={`${tdClass} font-bold text-blue-600 dark:text-blue-400`}>{m.mult}</td>
                          <td className={tdClass}>{m.rarity}</td>
                          <td className={tdClass}>{m.how}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Weather-Triggered Mutations</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These weather events trigger base mutations. The high-value ones (Aurora, Electric,
                  Frozen, Bloodlit) come from chaining a base weather state with a follow-up event.
                </p>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Weather</th>
                        <th className={thClass}>Triggered Mutation</th>
                        <th className={thClass}>Multiplier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {WEATHER.map((w) => (
                        <tr key={w.weather} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{w.weather}</td>
                          <td className={tdClass}>{w.mutation}</td>
                          <td className={`${tdClass} font-bold`}>{w.mult}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Base Weather Mutations (GAG1→GAG2)</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  These base mutations exist in GAG1 and are being verified for GAG2. Some (Wet, Moonlit,
                  Sandy) are confirmed; others are community-estimated.
                </p>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Trigger</th>
                        <th className={thClass}>Mutation</th>
                        <th className={thClass}>Multiplier</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BASE_WEATHER.map((b) => (
                        <tr key={b.mutation} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{b.weather}</td>
                          <td className={tdClass}>{b.mutation}</td>
                          <td className={`${tdClass} font-bold`}>{b.mult}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Mutation Farming Strategy</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Phase</th>
                        <th className={thClass}>Target Mutation</th>
                        <th className={thClass}>Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STRATEGY.map((s) => (
                        <tr key={s.phase} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{s.phase}</td>
                          <td className={tdClass}>{s.target}</td>
                          <td className={tdClass}>{s.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Value Formula</h2>
                <code className="block text-sm bg-gray-900 text-green-400 p-4 rounded mb-3 break-words">
                  Crop Value = BaseFormula(weight) × Mutation_Mult × (1 + FriendBoost%) × Quantity
                </code>
                <p className="text-gray-600 dark:text-gray-300">
                  Try it yourself with the{' '}
                  <Link href="/calculator" className="text-blue-600 dark:text-blue-400 hover:underline">
                    profit calculator
                  </Link>
                  , and see the full weather breakdown on the{' '}
                  <Link href="/systems/weather" className="text-blue-600 dark:text-blue-400 hover:underline">
                    weather page
                  </Link>
                  .
                </p>
              </div>

              <ObsidianArticle source="systems/mutations/list.md" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
