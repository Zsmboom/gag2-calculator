import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';
import { pageMetadata } from '@/lib/page-seo';

const gameName = config.game.name;

export const metadata: Metadata = pageMetadata(
  '/systems/pets/firefly',
  'Grow a Garden 2 Firefly Pet — Stats & Price',
  'Firefly Grow a Garden 2 Mythic pet guide with wild spawn source, farming role, and plant-growth ability.',
);

export default function FireflyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs
              segments={[
                { label: 'Systems', href: '/systems' },
                { label: 'Pets', href: '/systems/pets' },
                { label: 'Firefly', href: '/systems/pets/firefly' },
              ]}
            />

            <article className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-md dark:bg-gray-800 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Mythic farming pet
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Firefly Grow a Garden 2 Pet
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Firefly is a wild-spawn Mythic pet from the July 13 Merging Update. Its farming
                ability promotes plant growth, making it useful for crop-focused garden builds.
              </p>

              <dl className="my-8 grid gap-3 sm:grid-cols-3">
                {[
                  ['Rarity', 'Mythic'],
                  ['Source', 'Wild map spawn'],
                  ['Role', 'Plant growth'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-gray-200 p-4 dark:border-gray-700">
                    <dt className="text-sm text-gray-500 dark:text-gray-400">{label}</dt>
                    <dd className="mt-1 font-semibold text-gray-900 dark:text-white">{value}</dd>
                  </div>
                ))}
              </dl>

              <ObsidianArticle
                source="systems/pets/firefly.md"
                className="mb-8 border-0 p-0 shadow-none dark:bg-gray-800"
              />

              <nav className="border-t border-gray-200 pt-6 dark:border-gray-700">
                <Link href="/systems/pets" className="text-blue-600 hover:underline dark:text-blue-400">
                  Back to the Grow a Garden 2 pet catalog
                </Link>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/systems/seeds" className="rounded-md bg-gray-100 px-3 py-2 text-sm dark:bg-gray-700">
                    Compare crop growth investments
                  </Link>
                  <Link href="/guide" className="rounded-md bg-gray-100 px-3 py-2 text-sm dark:bg-gray-700">
                    Read the beginner guide
                  </Link>
                </div>
              </nav>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
