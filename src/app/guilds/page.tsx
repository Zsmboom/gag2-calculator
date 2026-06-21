import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Guilds — Weekly Rewards & Leaderboard Guide`,
  description: `Complete ${gameName} guild guide. How guilds work, 99 Robux creation cost, 9 reward tiers, the Ice Serpent top reward, and strategy for weekly guild competition.`,
  alternates: { canonical: `${config.seo.baseUrl}/guilds/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const TIERS = [
  { tier: 1, reward: 'Ice Serpent (Legendary Pet)' },
  { tier: 2, reward: 'Large reward bundle' },
  { tier: 3, reward: 'Medium reward bundle' },
  { tier: 4, reward: 'Small reward bundle' },
  { tier: 5, reward: 'Consolation rewards' },
  { tier: 6, reward: 'Consolation rewards' },
  { tier: 7, reward: 'Consolation rewards' },
  { tier: 8, reward: 'Consolation rewards' },
  { tier: 9, reward: 'Consolation rewards' },
];

export default function GuildsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Guilds</h1>
              <p className="subheading">
                Team up with other players in guilds to compete for weekly leaderboard rewards.
                The top prize: the legendary Ice Serpent pet.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Creating a guild costs 99 Robux.</strong> Guilds compete on weekly
                  leaderboards — join an active guild early to maximize your reward income.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">How Guilds Work</h2>
                <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-3">
                  <li>Create a guild for <strong>99 Robux</strong> or join an existing one</li>
                  <li>Compete on the <strong>weekly leaderboard</strong> with your guildmates</li>
                  <li>Higher ranking = better weekly reward tier</li>
                  <li>Rewards reset each week with new competition</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Reward Tiers</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  There are <strong>9 reward tiers</strong>. The top-ranked guild receives the
                  Ice Serpent — one of the rarest pets in the game, unobtainable anywhere else.
                </p>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Rank</th>
                        <th className={thClass}>Reward Tier</th>
                        <th className={thClass}>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TIERS.map((t) => (
                        <tr
                          key={t.tier}
                          className="border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-50 dark:from-purple-900/10 to-transparent"
                        >
                          <td className={`${tdClass} font-bold`}>
                            {t.tier === 1 ? (
                              <span className="text-purple-600 dark:text-purple-400">🥇 1st</span>
                            ) : (
                              `#${t.tier}`
                            )}
                          </td>
                          <td className={`${tdClass} font-medium`}>{t.reward}</td>
                          <td className={tdClass}>
                            {t.tier === 1 ? (
                              <span className="text-purple-600 dark:text-purple-400">Top prize</span>
                            ) : (
                              <span className="text-gray-400">Weekly rewards</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Guild Strategy</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Join early</strong> — Weekly competition resets on a schedule; early joiners have a head start</li>
                  <li><strong>Coordinate farming during events</strong> — Blood Moon and Aurora events maximize mutation output for leaderboard points</li>
                  <li><strong>Communicate via Discord</strong> — Many top guilds organize raid times and weather alerts</li>
                  <li><strong>Ice Serpent is the goal</strong> — Only guild #1 gets it each week, making top guilds extremely competitive</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Ice Serpent — The Top Prize</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  The <strong>Ice Serpent</strong> (Legendary Pet) is awarded to the #1 ranked guild
                  weekly. It is the rarest pet obtainable in {gameName} through legitimate gameplay.
                  No other method of obtaining Ice Serpent has been confirmed.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  See the{' '}
                  <Link href="/pets/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    pet catalog
                  </Link>{' '}
                  for all other obtainable pets, or{' '}
                  <Link href="/mutations/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    mutation multipliers
                  </Link>{' '}
                  to understand how to maximize your per-harvest value for guild competition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
