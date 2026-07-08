import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import codesData from '@/data/codes.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';
import CopyButton from '@/components/CopyButton';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Codes (Working)`,
  description: `All working ${gameName} codes — updated daily. Redeem for free rewards.`,
  alternates: { canonical: `${config.seo.baseUrl}/codes` },
};

type CodeEntry = {
  code: string;
  reward: string;
  status?: 'active' | 'expired' | 'new';
  addedAt?: string;
};

const codes: CodeEntry[] = (codesData.codes ?? []) as CodeEntry[];

export default function CodesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs segments={[{ label: 'Codes', href: '/codes' }]} />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Codes</h1>
              <p className="subheading">
                All working {gameName} codes, updated daily. Tap <strong>Copy</strong>,
                paste into the game, and claim your free rewards.
              </p>
            </div>

            {codes.length === 0 ? (
              <div className="max-w-2xl mx-auto text-center bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <p className="text-gray-600 dark:text-gray-300">
                  No codes have been published yet. Check back soon — we add new {gameName} codes
                  the moment they go live.
                </p>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full text-left bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-sm font-semibold">Code</th>
                      <th className="px-4 py-3 text-sm font-semibold">Reward</th>
                      <th className="px-4 py-3 text-sm font-semibold">Status</th>
                      <th className="px-4 py-3 text-sm font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {codes.map((entry) => (
                      <tr
                        key={entry.code}
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <td className="px-4 py-3 font-mono text-sm break-all">{entry.code}</td>
                        <td className="px-4 py-3 text-sm">{entry.reward}</td>
                        <td className="px-4 py-3 text-sm">
                          <span
                            className={
                              'inline-block rounded-full px-2 py-0.5 text-xs font-semibold ' +
                              (entry.status === 'expired'
                                ? 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
                                : entry.status === 'new'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
                                : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300')
                            }
                          >
                            {entry.status ?? 'active'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <CopyButton value={entry.code} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <h2 className="heading text-center">{gameName} Codes — FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I redeem {gameName} codes?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Launch {gameName} on Roblox, open the codes menu (usually a Twitter icon
                  on the side of the screen), paste a code, and hit <strong>Redeem</strong>.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Why isn&apos;t my code working?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Codes are case-sensitive. Copy the code with the button above instead of
                  typing it by hand, then paste it into the redemption box.
                </p>
              </div>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: `How do I redeem ${gameName} codes?`,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `Open ${gameName} on Roblox, open the codes menu, paste a code, and hit Redeem.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: "Why isn't my code working?",
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Codes are case-sensitive. Copy the code with the Copy button and paste it into the redemption box.',
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <ObsidianArticle source="codes/content.md" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
