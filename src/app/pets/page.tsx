import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Pets — Full Pet Catalog & Guide`,
  description: `Discover all 19 confirmed ${gameName} pets, including the Mythic Firefly, Butterfly, Bald Eagle, Big Bee, Capybara, spawn mechanics, prices, and abilities.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/pets` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const SUPPORT = [
  { pet: 'Frog', rarity: 'Common', cost: '10K', ability: '+5 jump height' },
  { pet: 'Bunny', rarity: 'Common', cost: '20K', ability: '+5 walk speed' },
  { pet: 'Owl', rarity: 'Uncommon', cost: '25K', ability: 'Extends night view by 12.5%, hoots when rare pet spawns' },
  { pet: 'Deer', rarity: 'Rare', cost: '50K', ability: '+10% plant growth speed' },
  { pet: 'Butterfly', rarity: 'Legendary', cost: 'TBA', ability: 'Farming pet that pollinates crops' },
  { pet: 'Firefly', rarity: 'Mythic', cost: 'Wild spawn', ability: 'Promotes plant growth', href: '/systems/pets/firefly' },
];

const DEFENSIVE = [
  { pet: 'Bee', rarity: 'Legendary', ability: 'Patrols garden and swarms intruders to defend fruit' },
  { pet: 'Turtle 🐢', rarity: 'Rare', ability: '+10 backpack space, slows walk speed by 2 (stacks). Buy for 70K🪙' },
  { pet: 'Bear', rarity: 'Mythic', ability: 'Tackles intruders, pins them down, then throws them away. Buy for 5M🪙' },
  { pet: 'Gnome', rarity: 'Rare', ability: 'Scares away thieves' },
  { pet: 'Venus Dragonfly', rarity: 'Rare', ability: 'Aggressive defensive pet' },
  { pet: 'Bald Eagle', rarity: 'Mythic', ability: 'Defender pet that attacks thieves' },
];

const UTILITY = [
  { pet: 'Robin', rarity: 'Legendary', cost: '75K', ability: 'Flies around eating ripe fruit, sometimes drops seeds' },
  { pet: 'Monkey', rarity: 'Mythic', cost: '3M', ability: 'Brings ripe fruit straight to you' },
  { pet: 'Raccoon', rarity: 'Super', cost: '15M', ability: 'Sneaks out at night to steal from empty gardens, +25 steal limit' },
  { pet: 'Big Bee', rarity: 'TBA', cost: 'TBA', ability: 'Egg-source pet with role still being verified' },
  { pet: 'Capybara', rarity: 'TBA', cost: 'TBA', ability: 'Newly listed pet with source and role still being verified' },
];

const MUTATION_ENHANCING = [
  { pet: 'Golden Dragonfly', rarity: 'Mythic', cost: '9M', ability: 'Doubles chance for plants/fruit to turn Gold (×10)' },
  { pet: 'Unicorn', rarity: 'Mythic', cost: '12M', ability: 'Doubles chance for plants/fruit to turn Rainbow' },
];

const GUILD_REWARD = [
  { pet: 'Black Dragon', rarity: 'Super', ability: 'Flies around garden breathing fire on thieves' },
  { pet: 'Ice Serpent', rarity: 'Super', ability: 'Flies around garden breathing frost on thieves' },
];

const TELEPORTERS = [
  { item: 'Pet Teleporters', rarity: '—', cost: 'Robux only', ability: 'Instantly teleport to any Legendary, Mythic, or Super pet location on the map' },
];

const STRATEGY = [
  { phase: 'Early', pet: 'Deer (50K)', use: 'Speed up early growth' },
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
                Every confirmed pet, its rarity, cost, and ability. The July 2026 refresh expands
                the catalog to 19 confirmed pets, including the Mythic Firefly, Butterfly, Bald
                Eagle, Big Bee, and Capybara.
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
                          <td className={`${tdClass} font-medium`}>
                            {'href' in p && p.href ? (
                              <Link href={p.href} className="text-blue-600 dark:text-blue-400 hover:underline">
                                {p.pet}
                              </Link>
                            ) : p.pet}
                          </td>
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
                <h2 className="text-2xl font-semibold mb-4">Utility / Loot Pets</h2>
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
                      {UTILITY.map((p) => (
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
                <h2 className="text-2xl font-semibold mb-4">Mutation-Enhancing Pets</h2>
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
                      {MUTATION_ENHANCING.map((p) => (
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
                <h2 className="text-2xl font-semibold mb-4">Guild Reward Pets</h2>
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
                      {GUILD_REWARD.map((p) => (
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
                      {TELEPORTERS.map((u) => (
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
                    <Link href="/guide" className="text-blue-600 dark:text-blue-400 hover:underline">
                      beginner guide
                    </Link>
                    .
                  </p>
                  <p>
                    Check the{' '}
                    <Link href="/systems/gear" className="text-blue-600 dark:text-blue-400 hover:underline">
                      gear page
                    </Link>{' '}
                    for defensive equipment that works with your pets.
                  </p>
                  <p>
                    Visit the{' '}
                    <Link href="/systems/mutations" className="text-blue-600 dark:text-blue-400 hover:underline">
                      mutations page
                    </Link>{' '}
                    to understand how pet abilities interact with mutations.
                  </p>
                </div>
              </div>

              <ObsidianArticle source="systems/pets/list.md" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
