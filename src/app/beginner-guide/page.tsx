import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Beginner Guide`,
  description: `New to ${gameName}? Start here — beginner-friendly walkthrough covering the basics, early-game priorities, and the most common mistakes.`,
  alternates: { canonical: `${config.seo.baseUrl}/beginner-guide/` },
};

export default function BeginnerGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Beginner Guide</h1>
              <p className="subheading">
                Just started {gameName} on Roblox? This walkthrough covers the first 30 minutes:
                what to do, what to skip, and the early-game priorities that actually matter.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">1. Learn the core loop</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The {gameName} loop is: <strong>buy seeds → plant → harvest → sell at the Market for
                  Sheckles</strong>. Crops grow even while you&apos;re offline. The twist is the day/night
                  cycle — farm peacefully by day, then at night either defend your garden or raid
                  other players&apos;. Every harvest has a chance to roll a mutation, which multiplies
                  its sell value up to ×80.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="px-3 py-2 text-left font-semibold">Phase</th>
                        <th className="px-3 py-2 text-left font-semibold">Sheckles</th>
                        <th className="px-3 py-2 text-left font-semibold">Target Crop</th>
                        <th className="px-3 py-2 text-left font-semibold">Why</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300">
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">Early</td>
                        <td className="px-3 py-2">0–10K</td>
                        <td className="px-3 py-2">Carrot → Tomato</td>
                        <td className="px-3 py-2">Fast first cash</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">Early</td>
                        <td className="px-3 py-2">10K–100K</td>
                        <td className="px-3 py-2">Bamboo</td>
                        <td className="px-3 py-2">Dense planting + weather mutations</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">Mid</td>
                        <td className="px-3 py-2">100K–1M</td>
                        <td className="px-3 py-2">Corn → Cactus</td>
                        <td className="px-3 py-2">Stable income + defense</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">Mid</td>
                        <td className="px-3 py-2">1M–10M</td>
                        <td className="px-3 py-2">Mushroom</td>
                        <td className="px-3 py-2">Highest base sell value Epic</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">Late</td>
                        <td className="px-3 py-2">10M+</td>
                        <td className="px-3 py-2">Dragon Fruit → Venus Fly Trap</td>
                        <td className="px-3 py-2">High value + thieves defense</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">Endgame</td>
                        <td className="px-3 py-2">100M+</td>
                        <td className="px-3 py-2">Dragon&apos;s Breath / Moon Bloom</td>
                        <td className="px-3 py-2">Super rarity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">2. Starter priorities</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Rush Bamboo (700🪙)</strong> — plant densely in tight clusters and wait for weather-triggered mutations (Gold ×10, Frozen ×40).</li>
                  <li><strong>Grab Romanesco (99🪙)</strong> — the best ROI in the game at 15×, and multi-harvest means one seed keeps producing.</li>
                  <li><strong>Buy Sprinklers early</strong> — they increase crop weight, which scales value exponentially. The single best gear investment.</li>
                  <li><strong>Use Friend Boost</strong> — have friends join your server for an extra sell % bonus.</li>
                  <li><strong>Redeem codes</strong> — <code>TEAMGREENBEAN</code> gives 3× Green Bean Seeds.</li>
                </ul>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">3. Common mistakes</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Leaving high-value crops unattended at night.</strong> Fix: harvest before logging off, or deploy defensive pets (Bee, Gnome) and gear.</li>
                  <li><strong>Treating mutations as stackable.</strong> Fix: mutations are mutually exclusive in GAG2 — only one applies per crop. Don&apos;t expect a Gold + Frozen combo.</li>
                  <li><strong>Skipping Sprinklers for more seeds.</strong> Fix: weight scales exponentially, so one Sprinkler can out-earn several extra seeds.</li>
                  <li><strong>Over-investing in early gear.</strong> Fix: focus on seeds and plots first, then Sprinklers, then raid tools, then defense.</li>
                  <li><strong>Assuming GAG1 progress transfers.</strong> Fix: GAG2 is a completely separate game — nothing carries over. Start fresh.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
