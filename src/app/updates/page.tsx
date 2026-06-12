import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Updates & Patch Notes | ${config.seo.siteTitle}`,
  description: `Latest ${gameName} patch notes, new content, codes, and event timelines — updated whenever the game updates.`,
  alternates: { canonical: `${config.seo.baseUrl}/updates/` },
};

export default function UpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
                  <time dateTime={config.game.lastUpdated ?? ''}>
                    {config.game.lastUpdated ?? 'TBD'}
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Latest {gameName} patch</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Codex: replace this section with a real changelog. Use one{' '}
                  <code>&lt;article&gt;</code> block per patch — date, version, and a bullet list of
                  changes work best.
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
