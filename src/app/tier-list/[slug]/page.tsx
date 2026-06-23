import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Picture from '@/components/Picture';
import Breadcrumbs from '@/components/Breadcrumbs';

const gameName = config.game.name;

type Tier = 'Super' | 'Mythic' | 'Legendary' | 'Epic' | 'Rare' | 'Uncommon' | 'Common' | 'TBD';

const TIER_STYLES: Record<Tier, string> = {
  Super: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300',
  Mythic: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Legendary: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Epic: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  Rare: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  Uncommon: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  Common: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
  TBD: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
};

type Item = {
  slug: string;
  name: string;
  tier: Tier;
  baseValue?: number;
  description?: string;
  stats?: Record<string, string | number>;
  howToGet?: string;
  patchNotes?: string;
};

const items: Item[] = (((itemsData as unknown) as { items: Item[] }).items ?? []).filter(
  (it) => it && it.slug
);

export function generateStaticParams() {
  return items.map((it) => ({ slug: it.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = items.find((it) => it.slug === slug);
  if (!item) {
    return { title: `Not found` };
  }
  return {
    title: `${item.name} — ${gameName} ${item.tier} Crop`,
    description: item.description ?? `${item.name} value, seed cost, harvest type, and how to get it in the ${gameName} crop tier list.`,
    alternates: { canonical: `${config.seo.baseUrl}/tier-list/${item.slug}/` },
  };
}

export default async function TierListDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = items.find((it) => it.slug === slug);
  if (!item) {
    notFound();
  }

  const tierStyle = TIER_STYLES[item.tier] ?? TIER_STYLES.Common;
  const hasCropImage = typeof item.slug === 'string';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs
              segments={[
                { label: 'Tier List', href: '/tier-list/' },
                { label: item.name, href: `/tier-list/${item.slug}/` },
              ]}
            />
            <div className="mt-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                {hasCropImage ? (
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                    <Picture
                      src={`/images/crops/${item.slug}.webp`}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : null}
                <div>
                  <span
                    className={
                      'inline-flex items-center justify-center min-w-[5rem] h-8 px-2 rounded-md font-bold text-sm mb-1 ' +
                      tierStyle
                    }
                  >
                    {item.tier}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {item.name}
                  </h1>
                </div>
              </div>

              {typeof item.baseValue === 'number' ? (
                <div className="mb-6 rounded-md bg-blue-50 dark:bg-blue-900/30 p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Base sell value (1kg)</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {item.baseValue.toLocaleString()} Sheckles
                  </p>
                </div>
              ) : null}

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
