import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Bargain System — Sell Bonus Explained`,
  description: `How the ${gameName} Bargain mechanic works. The ×1.08 sell bonus, when it triggers, and how it compares to the base value formula.`,
  alternates: { canonical: `${config.seo.baseUrl}/bargain-system/` },
};

export default function BargainSystemPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Bargain System</h1>
              <p className="subheading">
                A sell bonus that multiplies your harvest value — exclusive to GAG2.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  <strong>Note:</strong> Bargain mechanics are in early discovery. Data may change as
                  more players test the system in-game.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">What Is the Bargain System?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  GAG2 introduces a <strong>Bargain</strong> mechanic that provides a bonus to sell
                  value when harvesting crops. This system did not exist in the original Grow a
                  Garden and is unique to the sequel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Current Data</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Variable</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Value</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Source</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-300">
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3 text-sm font-medium">Bonus multiplier</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400">×1.08</td>
                        <td className="px-4 py-3 text-sm text-gray-500">gag2calculator.com</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3 text-sm font-medium">Trigger condition</td>
                        <td className="px-4 py-3 text-sm">Unknown</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Being researched</td>
                      </tr>
                      <tr className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-4 py-3 text-sm font-medium">Active timing</td>
                        <td className="px-4 py-3 text-sm">Believed to be sell-stage</td>
                        <td className="px-4 py-3 text-sm text-gray-500">Community testing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">How It Affects the Value Formula</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If Bargain activates at the sell stage, the full {gameName} value formula becomes:
                </p>
                <code className="block text-sm bg-gray-900 text-green-400 p-4 rounded mb-4 break-words">
                  Crop Value = BaseFormula(weight) × Mutation_Mult × (1 + FriendBoost%) × Quantity × Bargain
                </code>
                <p className="text-gray-600 dark:text-gray-300">
                  Where <code className="text-sm bg-gray-100 dark:bg-gray-700 px-1 rounded">Bargain</code>{' '}
                  = 1.08 when active, 1.0 otherwise. This means{' '}
                  <strong>+8%</strong> on your final sell price when the bonus triggers.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Community Research Needed</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  The exact trigger condition for Bargain is still unknown. Community members are
                  testing whether it is time-based, action-based (e.g., selling at a specific NPC),
                  or random. Contribute findings on the official Discord.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  For the full value formula without Bargain, see the{' '}
                  <Link href="/mutations/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    mutations page
                  </Link>
                  . Use the{' '}
                  <Link href="/calculator/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    profit calculator
                  </Link>{' '}
                  to estimate harvest values.
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
