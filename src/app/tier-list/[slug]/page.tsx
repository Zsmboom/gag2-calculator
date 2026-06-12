import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

type Item = {
  slug: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'C' | 'D';
  description?: string;
  stats?: Record<string, string | number>;
  howToGet?: string;
  patchNotes?: string;
};

const items: Item[] = ((itemsData as { items: Item[] }).items ?? []).filter(
  (it) => it && it.slug
);

export function generateStaticParams() {
  return items.map((it) => ({ slug: it.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((it) => it.slug === slug);
  if (!item) {
    return { title: `Not found | ${config.seo.siteTitle}` };
  }
  return {
    title: `${item.name} — ${gameName} Tier ${item.tier} | ${config.seo.siteTitle}`,
    description: item.description ?? `${item.name} stats, how to get it, and where it ranks in the ${gameName} tier list.`,
    alternates: { canonical: `${config.seo.baseUrl}/tier-list/${item.slug}/` },
  };
}

export default async function TierListDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = items.find((it) => it.slug === slug);
  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Link
              href="/tier-list/"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Back to {gameName} tier list
            </Link>

            <div className="mt-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-md font-bold text-lg bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  {item.tier}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {item.name}
                </h1>
              </div>

              {item.description ? (
                <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 mb-6 italic">
                  No description yet. Edit <code>src/data/items.json</code> to add one.
                </p>
              )}

              {item.stats ? (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Stats</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(item.stats).map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between border-b border-gray-200 dark:border-gray-700 py-1"
                      >
                        <dt className="text-sm text-gray-500 dark:text-gray-400">{k}</dt>
                        <dd className="text-sm font-medium text-gray-900 dark:text-white">
                          {String(v)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}

              {item.howToGet ? (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">How to get it</h2>
                  <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {item.howToGet}
                  </p>
                </div>
              ) : null}

              {item.patchNotes ? (
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2">Patch notes</h2>
                  <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {item.patchNotes}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
