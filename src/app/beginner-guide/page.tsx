import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Beginner Guide | ${config.seo.siteTitle}`,
  description: `New to ${gameName}? Start here — beginner-friendly walkthrough covering the basics, early-game priorities, and the most common mistakes.`,
  alternates: { canonical: `${config.seo.baseUrl}/beginner-guide/` },
};

export default function BeginnerGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
                <p className="text-gray-600 dark:text-gray-300">
                  Before chasing rare drops, learn the basic {gameName} loop. Codex: replace
                  this paragraph with a 2–3 sentence summary of the game&apos;s core gameplay.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">2. Starter priorities</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Unlock the first upgrade path early.</li>
                  <li>Save premium currency for the next banner / event.</li>
                  <li>Don&apos;t spend resources on D-tier items — see the tier list.</li>
                </ul>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3">3. Common mistakes</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Codex: list 3–5 mistakes new {gameName} players make, with a one-line fix each.
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
