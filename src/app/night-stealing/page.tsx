import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Night Stealing — Guide & Defense Strategies`,
  description: `Complete ${gameName} night stealing guide. Day/night cycle, how stealing works, and every defense method ranked by effectiveness — from staying in your garden to private servers.`,
  alternates: { canonical: `${config.seo.baseUrl}/night-stealing/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const CYCLE = [
  { phase: 'Day', duration: '7 min 30 sec' },
  { phase: 'Dusk', duration: '30 sec' },
  { phase: 'Night', duration: '2 min' },
  { phase: 'Total', duration: '10 min cycle' },
];

const DEFENSE = [
  { method: 'Stay inside your garden', cost: 'Free', effectiveness: 'Best — garden locks at night' },
  { method: 'Harvest before logging off', cost: 'Free', effectiveness: 'Safe' },
  { method: 'Private server', cost: '💎 Paid', effectiveness: '100% safe' },
  { method: 'Defensive pets (Bee, Gnome)', cost: 'Mid', effectiveness: 'Good' },
  { method: 'Defense plants (Cactus, Venus Fly Trap, Dragon’s Breath)', cost: 'Varies', effectiveness: 'Good' },
  { method: 'Defense gear (Vine Wrapper, Freeze Ray, Power Hose)', cost: 'High', effectiveness: 'Good' },
];

export default function NightStealingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Night Stealing</h1>
              <p className="subheading">
                {gameName} runs a 10-minute day/night cycle. During the 2-minute night, other players
                can loot your unattended garden — so plan your defenses.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Day/Night Cycle</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Phase</th>
                        <th className={thClass}>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CYCLE.map((c) => (
                        <tr key={c.phase} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{c.phase}</td>
                          <td className={tdClass}>{c.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">How Stealing Works</h2>
                <ol className="list-decimal pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>At night, walk up to another player&apos;s unattended garden</li>
                  <li>Press <strong>E</strong> to loot crops</li>
                  <li>Stolen items cannot be teleported — you must walk back to your base</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">How to Defend</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Method</th>
                        <th className={thClass}>Cost</th>
                        <th className={thClass}>Effectiveness</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEFENSE.map((d) => (
                        <tr key={d.method} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{d.method}</td>
                          <td className={tdClass}>{d.cost}</td>
                          <td className={tdClass}>{d.effectiveness}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Offline Safety</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Crops keep growing while you&apos;re offline. Best practices: harvest high-value
                  crops before logging off, deploy defensive pets, or use a private server for 100%
                  safety.
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
