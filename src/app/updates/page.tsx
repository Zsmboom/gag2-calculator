import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Updates & Patch Notes`,
  description: `Latest ${gameName} patch notes, new content, codes, and event timelines — updated whenever the game updates.`,
  alternates: { canonical: `${config.seo.baseUrl}/updates/` },
};

export default function UpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Updates</h1>
              <p className="subheading">
                {gameName} patch notes, new content drops, and event timelines — all in one place.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 font-semibold">
                    Latest
                  </span>
                  <time dateTime="2026-06-12">
                    2026-06-12
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">{gameName} — Official Launch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {gameName} launched on 2026-06-12, developed by Strawberreh Squad / Splitting
                  Point Studios. It&apos;s a completely separate game from the original — nothing
                  carries over. The sequel overhauls the farming loop with these headline features:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Day/Night Cycle</strong> — Farm by day, steal crops from other gardens during the 2-minute night phase.</li>
                  <li><strong>Guild System</strong> — Team up with other players for weekly leaderboard rewards.</li>
                  <li><strong>Weather System</strong> — 10 weather events affect crop growth and trigger mutations.</li>
                  <li><strong>Mutations (mutually exclusive)</strong> — Value multipliers from Gold (×10) up to Bloodlit (×80), but only one applies per crop.</li>
                  <li><strong>Offline Growth</strong> — Crops continue growing while you&apos;re offline.</li>
                  <li><strong>Map Pets</strong> — Pets spawn randomly on the map with unique abilities; Legendary spawns trigger a server-wide alert.</li>
                  <li><strong>Fresh Economy</strong> — 36 crops, new seed shop, and a brand-new Sheckles economy.</li>
                </ul>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 font-semibold">
                    Code
                  </span>
                  <time dateTime="2026-06-12">2026-06-12</time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Launch code: TEAMGREENBEAN</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  The first working code dropped at launch. Redeem <code>TEAMGREENBEAN</code> through
                  the Discord bot for 3× Green Bean Seeds. New codes are expected during major
                  updates, seasonal events, and milestone celebrations — see the{' '}
                  <a href="/codes/" className="text-blue-600 dark:text-blue-400 hover:underline">codes page</a>.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
