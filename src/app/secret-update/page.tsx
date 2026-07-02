import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} gag.gg — Official Website Features & Golden Carrots`,
  description: `Complete guide to ${gameName}'s official website gag.gg. Day/night timer, seed stock tracker, inventory notifications, leaderboards, Lucky Swiper, and the Golden Carrots currency system.`,
  alternates: { canonical: `${config.seo.baseUrl}/secret-update/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const CARROTS = [
  { method: 'Verify email', reward: 'One-time bonus' },
  { method: 'Link Discord account', reward: 'One-time bonus' },
  { method: 'Share invite link', reward: 'Per referral' },
  { method: 'Community voting', reward: 'Per vote cast' },
];

export default function SecretUpdatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Official Website — gag.gg Features</h1>
              <p className="subheading">
                The official {gameName} website (gag.gg) received a major feature update around
                June 18, 2026. Here&apos;s everything now available on the site.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Update 1 / Secret Update</strong> introduced these features alongside the
                  Aurora Event. gag.gg is linked in-game and serves as the official companion site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🌐 Official Site — gag.gg</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The official {gameName} website at{' '}
                  <a
                    href="https://gag.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    gag.gg
                  </a>{' '}
                  now integrates directly with the game. The in-game Settings menu links directly
                  to gag.gg features.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">⏰ Day/Night Cycle Timer</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Real-time display of the current in-game day/night phase. Helps you plan:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>When to plant and harvest before night falls</li>
                  <li>When to go raiding other gardens (night only)</li>
                  <li>When Blood Moon and other timed events are approaching</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🌾 Seed Stock Tracker</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  See which seeds are currently in-stock at the Seed Shop, current quantities, and
                  last-seen timestamps. Track rare seed restocks without being in-game.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Shows availability for all 38 crops</li>
                  <li>Timestamps last appearance in the shop</li>
                  <li>Ideal for tracking Moon Bloom, Dragon&apos;s Breath, and other Super/Mythic seeds</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🔔 Stock Notifications</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Browser push notifications when rare seeds (Moon Bloom, Dragon&apos;s Breath, etc.)
                  appear in the shop. No need to constantly refresh — get alerted the moment a
                  high-value seed restocks.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🏆 Leaderboards</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Top gardeners ranked by income and rarest item holdings. Shows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Highest total harvest value</li>
                  <li>Most rare items in inventory</li>
                  <li>Weekly guild rankings (see also the{' '}
                    <Link href="/systems/guilds/" className="text-blue-600 dark:text-blue-400 hover:underline">
                      guild page
                    </Link>
                    )</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🐾 Rarest Pets Showcase</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Community showcase of the rarest obtainable pets:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Mega Owl',
                    'Mega Fox',
                    'Rainbow Bee',
                    'Big Unicorn',
                    'Mega Raccoon',
                    'Ice Serpent',
                  ].map((pet) => (
                    <div
                      key={pet}
                      className="bg-gray-50 dark:bg-gray-800 rounded-lg px-4 py-3 text-center font-medium text-gray-700 dark:text-gray-200"
                    >
                      {pet}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  Ice Serpent is only obtainable through Guild competition (#1 weekly reward).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🥕 Golden Carrots — New Currency</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A new site currency for premium rewards on gag.gg. Earned through community
                  participation rather than in-game play.
                </p>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Earning Method</th>
                        <th className={thClass}>Reward</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CARROTS.map((c) => (
                        <tr key={c.method} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{c.method}</td>
                          <td className={tdClass}>{c.reward}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">👍👎 Community Voting</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Vote on new content ideas across weather, pets, gear, and more. Your votes
                  directly influence the development roadmap. Swipe left/right on proposals:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Weather event proposals</li>
                  <li>New pet concepts</li>
                  <li>Gear and tool ideas</li>
                  <li>Game mode suggestions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">🎰 Lucky Swiper</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  After casting votes in the community voting system, you may trigger the Lucky
                  Swiper — a chance at a free reward. Refreshes hourly. This is separate from
                  in-game {gameName} rewards and is exclusive to the gag.gg website.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  For in-game mechanics, see{' '}
                  <Link href="/systems/weather/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    weather events
                  </Link>
                  ,{' '}
                  <Link href="/systems/pets/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    pet catalog
                  </Link>
                  , and{' '}
                  <Link href="/systems/guilds/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    guild system
                  </Link>
                  .
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