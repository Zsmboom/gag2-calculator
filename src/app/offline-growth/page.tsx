import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Offline Growth — Crops Keep Growing While You're Away`,
  description: `How ${gameName} offline growth works. Crops continue growing while you're offline, plus best practices to minimize theft risk and maximize overnight profits.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/offline-growth` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const PRACTICES = [
  { action: 'Harvest high-value crops before logging off', why: 'Prevents all theft loss', priority: 'critical' },
  { action: 'Deploy defensive pets (Bee, Gnome) before closing', why: 'Partial protection while offline', priority: 'high' },
  { action: 'Use Private Server if available', why: '100% offline safety — no other players', priority: 'high' },
  { action: 'Plant in dense clusters for mutation weather events', why: 'Mutations trigger regardless of online status', priority: 'medium' },
  { action: 'Leave low-value crops (Carrot, Strawberry) unguarded', why: 'Minimal loss even if stolen', priority: 'low' },
  { action: 'Leave garden unlocked at night', why: 'HIGH theft risk — not recommended', priority: 'never' },
];

export default function OfflineGrowthPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Offline Growth</h1>
              <p className="subheading">
                {gameName}&apos;s crops keep growing while you&apos;re away. Maximize overnight profits
                and minimize theft with the right offline strategy.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">How Offline Growth Works</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {gameName}&apos;s crops <strong>continue growing while you&apos;re offline</strong>.
                  This means:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>No need to stay online waiting for crops to mature</li>
                  <li>Every login brings a new harvest ready to collect</li>
                  <li>Crops can <strong>still be stolen</strong> while you&apos;re offline during night phases</li>
                  <li>Weather events and mutations trigger regardless of player presence</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Offline Best Practices</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Action</th>
                        <th className={thClass}>Why</th>
                        <th className={thClass}>Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRACTICES.map((p) => (
                        <tr
                          key={p.action}
                          className={`border-t border-gray-200 dark:border-gray-700 ${
                            p.priority === 'never'
                              ? 'bg-red-50 dark:bg-red-900/10'
                              : p.priority === 'critical'
                              ? 'bg-green-50 dark:bg-green-900/10'
                              : ''
                          }`}
                        >
                          <td className={`${tdClass} font-medium ${p.priority === 'never' ? 'text-red-600 dark:text-red-400' : ''}`}>
                            {p.action}
                          </td>
                          <td className={tdClass}>{p.why}</td>
                          <td className={tdClass}>
                            <span
                              className={`px-2 py-0.5 rounded text-xs font-semibold ${
                                p.priority === 'critical'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                                  : p.priority === 'high'
                                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                                  : p.priority === 'medium'
                                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
                                  : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                              }`}
                            >
                              {p.priority === 'never' ? 'Never' : p.priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Time Zone Considerations</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  During Chinese night hours (Asia/Shanghai, GMT+8), fewer local players are active —
                  but {gameName} is global. Roblox servers run continuously across all time zones, so
                  theft is always possible even during traditionally low-activity hours. Always deploy
                  defenses before going offline for extended periods.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Private Server — The Only 100% Safe Option</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  If you have a Private Server (Robux purchase), your garden is isolated from all other
                  players. No theft is possible regardless of night phase timing. This is the only
                  foolproof offline protection.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  For night stealing mechanics, see the{' '}
                  <Link href="/systems/night-stealing" className="text-blue-600 dark:text-blue-400 hover:underline">
                    night stealing guide
                  </Link>
                  . For defensive pets and gear, see the{' '}
                  <Link href="/systems/pets" className="text-blue-600 dark:text-blue-400 hover:underline">
                    pet catalog
                  </Link>{' '}
                  and{' '}
                  <Link href="/systems/gear" className="text-blue-600 dark:text-blue-400 hover:underline">
                    gear page
                  </Link>
                  .
                </p>
              </div>

              <ObsidianArticle source="systems/offline-growth/list.md" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
