import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import itemsData from '@/data/items.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Picture from '@/components/Picture';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

type SeedItem = {
  slug: string;
  name: string;
  tier: string;
  baseValue?: number | string;
  description?: string;
  stats?: Record<string, string | number>;
  howToGet?: string;
  patchNotes?: string;
};

const seeds: SeedItem[] = (((itemsData as unknown) as { items: SeedItem[] }).items ?? []).filter(
  (it) => it && it.slug && it.slug !== 'mega-seed'
);

export function generateStaticParams() {
  return seeds.map((seed) => ({ slug: seed.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const seed = seeds.find((it) => it.slug === slug);
  if (!seed) return { title: 'Seed not found' };

  return {
    title: `${gameName} ${seed.name} Stats & Price`,
    description:
      seed.description ??
      `${seed.name} rarity, 1kg value, seed cost, harvest type, and how to get it in ${gameName}.`,
    alternates: { canonical: `${config.seo.baseUrl}/systems/seeds/${seed.slug}` },
  };
}

function relatedSeeds(seed: SeedItem): SeedItem[] {
  const sameTier = seeds.filter((it) => it.slug !== seed.slug && it.tier === seed.tier).slice(0, 3);
  if (sameTier.length >= 3) return sameTier;
  return [...sameTier, ...seeds.filter((it) => it.slug !== seed.slug && it.tier !== seed.tier)].slice(0, 3);
}

export default async function SeedDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seed = seeds.find((it) => it.slug === slug);
  if (!seed) notFound();

  const imageSrc = `/images/crops/${seed.slug}.webp`;
  const hasCropImage = fs.existsSync(path.join(process.cwd(), 'public', imageSrc));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs
              segments={[
                { label: 'Systems', href: '/systems' },
                { label: 'Seeds', href: '/systems/seeds' },
                { label: seed.name, href: `/systems/seeds/${seed.slug}` },
              ]}
            />

            <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                  {hasCropImage ? (
                    <Picture
                      src={imageSrc}
                      alt={`${seed.name} crop in Grow a Garden 2`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 text-center px-2">
                      No image
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {seed.tier} seed
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-1">
                    {`${gameName} ${seed.name} Stats & Price`}
                  </h1>
                  {seed.description ? (
                    <p className="text-gray-600 dark:text-gray-300 mt-4">{seed.description}</p>
                  ) : null}
                </div>
              </div>

              {seed.stats ? (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Structured Stats</h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {Object.entries(seed.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="rounded-md border border-gray-200 dark:border-gray-700 p-4"
                      >
                        <dt className="text-sm text-gray-500 dark:text-gray-400">{key}</dt>
                        <dd className="font-semibold text-gray-900 dark:text-white mt-1">
                          {String(value)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              ) : null}

              {seed.howToGet ? (
                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-3">How to Get</h2>
                  <p className="text-gray-600 dark:text-gray-300">{seed.howToGet}</p>
                </section>
              ) : null}

              {seed.patchNotes ? (
                <section className="mb-8 rounded-md bg-gray-50 dark:bg-gray-900/50 p-4">
                  <h2 className="text-lg font-semibold mb-2">Update Notes</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{seed.patchNotes}</p>
                </section>
              ) : null}

              <ObsidianArticle source={`systems/seeds/${seed.slug}.md`} className="mb-8 border-0 p-0 shadow-none dark:bg-gray-800" />

              <nav className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <Link href="/systems/seeds" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Back to Grow a Garden 2 Seeds
                </Link>
                <h2 className="text-lg font-semibold mt-6 mb-3">Related Seeds</h2>
                <div className="flex flex-wrap gap-3">
                  {relatedSeeds(seed).map((related) => (
                    <Link
                      key={related.slug}
                      href={`/systems/seeds/${related.slug}`}
                      className="rounded-md bg-blue-50 dark:bg-blue-900/30 px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                      {related.name}
                    </Link>
                  ))}
                  <Link
                    href="/calculator"
                    className="rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Check Calculator
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
