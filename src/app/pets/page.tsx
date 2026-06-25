import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Pets — Full Pet Catalog & Guide`,
  description: `Discover all ${gameName} pets. Learn spawn mechanics, buy prices, and abilities from Deer (growth boost) to Golden Dragonfly (doubles Gold). Legendary spawns trigger a server-wide alert.`,
  alternates: { canonical: `${config.seo.baseUrl}/pets/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const SUPPORT = [
  { pet: 'Deer', rarity: 'Common', cost: '50K', ability: '+10% plant growth speed' },
  { pet: 'Frog', rarity: 'Common', cost: '~10K', ability: 'Increases mutation chance' },
  { pet: 'Owl', rarity: 'Uncommon', cost: '25K', ability: 'Night vision + rare spawn alerts' },
  { pet: 'Golden Dragonfly', rarity: 'Legendary', cost: '~3M', ability: 'Doubles the chance for plants and fruit to turn Gold (×10 value). Spawn chance 0.6%. Costs 9M🪙 in the shop. Endgame investment — pair with Gold mutation strategy.' },
];

const DEFENSIVE = [
  { pet: 'Bear', rarity: 'Mythic', ability: 'Tackles intruders, pins them down, then throws them away. One of the best defensive Mythic pets. Buy for 5M🪙 when it spawns on the map.' },
  { pet: 'Bee', rarity: 'Rare', ability: 'Attacks thieves, triggers Pollinated mutation' },
  { pet: 'Gnome', rarity: 'Rare', ability: 'Scares away thieves' },
  { pet: 'Turtle 🐢', rarity: 'Rare', ability: '+10 backpack space, slows walk speed by 2 (stacks). Spawns on map (~5%), buy for 70K🪙.' },
  { pet: 'Venus Dragonfly', rarity: 'Rare', ability: 'Aggressive defensive pet' },
];

const LEGENDARY = [
  { pet: 'Space Dragon', rarity: 'Legendary', broadcast: 'Yes', use: 'Highest value' },
  { pet: 'Moon Tiger', rarity: 'Legendary', broadcast: 'Yes', use: 'Strong ability' },
];

const UTILITY = [
  { item: 'Pet Teleporters', rarity: '—', cost: 'Robux only', ability: 'Instantly teleport to any Legendary, Mythic, or Super pet location on the map' },
];

const STRATEGY = [
  { phase: 'Early', pet: 'Deer (10K)', use: 'Speed up early growth' },
  { phase: 'Mid', pet: 'Bee', use: 'Garden defense' },
  { phase: 'Late', pet: 'Owl', use: 'Rare spawn tracking' },
  { phase: 'Endgame', pet: 'Golden Dragonfly', use: 'Maximize Gold mutation output' },
];

export default function PetsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Pets</h1>
              <p className="subheading">
                Every pet, its rarity, cost, and ability. Unlike GAG1, pets spawn randomly on the
                map rather than in a dedicated shop — and Legendary+ spawns trigger a server-wide
                alert.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Support / Buff Pets</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Pet</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>Cost</th>
                        <th className={thClass}>Ability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SUPPORT.map((p) => (
                        <tr key={p.pet} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{p.pet}</td>
                          <td className={tdClass}>{p.rarity}</td>
                          <td className={tdClass}>{p.cost}</td>
                          <td className={tdClass}>{p.ability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Defensive Pets</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Pet</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>Ability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEFENSIVE.map((p) => (
                        <tr key={p.pet} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{p.pet}</td>
                          <td className={tdClass}>{p.rarity}</td>
                          <td className={tdClass}>{p.ability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Legendary Pets (Server Alert on Spawn)</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Pet</th>
                        <th className={thClass}>Rarity</th>
                        <th className={thClass}>Server Broadcast</th>
                        <th className={thClass}>Speculated Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {LEGENDARY.map((p) => (
                        <tr key={p.pet} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{p.pet}</td>
                          <td className={tdClass}>{p.rarity}</td>
                          <td className={tdClass}>{p.broadcast}</td>
                          <td className={tdClass}>{p.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Pet Teleporters</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Item</th>
                        <th className={thClass}>Cost</th>
                        <th className={thClass}>Ability</th>
                      </tr>
                    </thead>
                    <tbody>
                      {UTILITY.map((u) => (
                        <tr key={u.item} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{u.item}</td>
                          <td className={tdClass}>{u.cost}</td>
                          <td className={tdClass}>{u.ability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Spawn Mechanics</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Pets spawn randomly across the game map</li>
                  <li>Higher rarity = rarer but more powerful</li>
                  <li><strong>Big version</strong> pets cost double with enhanced abilities</li>
                  <li>Legendary+ spawns broadcast with a server-wide message</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Pet Investment Strategy</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Phase</th>
                        <th className={thClass}>Recommended Pet</th>
                        <th className={thClass}>Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      {STRATEGY.map((s) => (
                        <tr key={s.phase} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{s.phase}</td>
                          <td className={tdClass}>{s.pet}</td>
                          <td className={tdClass}>{s.use}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Pet Population Statistics</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Type</th>
                        <th className={thClass}>Estimated Players</th>
                        <th className={thClass}>Rarity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className={`${tdClass} font-medium`}>Big Pet</td>
                        <td className={tdClass}>~112,000</td>
                        <td className={tdClass}>Uncommon</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className={`${tdClass} font-medium`}>Mega Pet</td>
                        <td className={tdClass}>~750</td>
                        <td className={tdClass}>Legendary</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold mb-4">Related Pages</h2>
                <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-300">
                  <p>
                    See how pets affect your farming strategy on the{' '}
                    <Link href="/beginner-guide/" className="text-blue-600 dark:text-blue-400 hover:underline">
                      beginner guide
                    </Link>
                    .
                  </p>
                  <p>
                    Check the{' '}
                    <Link href="/gear/" className="text-blue-600 dark:text-blue-400 hover:underline">
                      gear page
                    </Link>{' '}
                    for defensive equipment that works with your pets.
                  </p>
                  <p>
                    Visit the{' '}
                    <Link href="/mutations/" className="text-blue-600 dark:text-blue-400 hover:underline">
                      mutations page
                    </Link>{' '}
                    to understand how pet abilities interact with mutations.
                  </p>
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
