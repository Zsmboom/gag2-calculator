import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Picture from '@/components/Picture';
import { config } from '@/lib/games.config';
import type { Metadata } from 'next';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `About`,
  description: `Learn about ${gameName} Guides & Tools — a fan-made, community-data-driven resource hub for Roblox ${gameName} players, updated daily.`,
  alternates: { canonical: `${config.seo.baseUrl}/about` },
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">About {gameName} Guides &amp; Tools</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Picture
                      src="/images/about/team-working.svg"
                      alt={`${gameName} team`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {gameName} Guides &amp; Tools is an unofficial, fan-made resource hub built by
                    Roblox players who wanted a single place for everything GAG2 — crop values,
                    codes, mutation multipliers, seed prices, pets, gear, and the night-stealing
                    mechanics that make the sequel so different from the original.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {gameName} evolves fast — new codes drop on Discord, weather events shift the
                    meta, and crop data gets refined by the community. We keep this site updated
                    daily so you never farm off stale numbers.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every tool here runs entirely in your browser: a profit calculator using the
                    community-verified sell-price formula, a 36-crop tier list, and guides for
                    mutations, pets, gear, seeds, weather, and night stealing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our mission is simple: help {gameName} players spend less time searching for
                    information and more time farming. We pull from the community wiki, GameRant,
                    competitor calculators, and the official Roblox game page, then reconcile the
                    contradictions so you don&apos;t have to.
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Keep all guides and tools updated with the latest game patches</li>
                    <li>Provide accurate, community-verified crop values and mutation multipliers</li>
                    <li>Build tools that are fast, free, and work entirely in your browser</li>
                    <li>Document the GAG2-vs-GAG1 differences that trip up returning players</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Picture
                      src="/images/about/mission.svg"
                      alt="Our mission"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-3">Disclaimer</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                This is an unofficial fan site. {gameName} is a trademark of its respective owners
                (Strawberreh Squad / Splitting Point Studios). We are not affiliated with or endorsed
                by Roblox Corporation or the game&apos;s developers. All data is community-estimated
                and may not reflect official game values.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
