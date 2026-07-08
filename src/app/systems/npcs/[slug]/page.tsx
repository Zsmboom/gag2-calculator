import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import npcsData from '@/data/npcs.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

type Npc = {
  slug: string;
  name: string;
  location: string;
  role: string;
  added: string;
  description: string;
  strategy: string;
};

const npcs = (((npcsData as unknown) as { npcs: Npc[] }).npcs ?? []);

export function generateStaticParams() {
  return npcs.map((npc) => ({ slug: npc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const npc = npcs.find((item) => item.slug === slug);
  if (!npc) return { title: 'NPC not found' };

  return {
    title: npcHeading(npc),
    description: `${npc.name} in ${gameName}: ${npc.location}, ${npc.role}, gameplay function, and strategy.`,
    alternates: { canonical: `${config.seo.baseUrl}/systems/npcs/${npc.slug}` },
  };
}

function relatedNpcs(current: Npc): Npc[] {
  return npcs.filter((npc) => npc.slug !== current.slug).slice(0, 3);
}

function npcHeading(npc: Npc): string {
  const headings: Record<string, string> = {
    sam: `${gameName} Sam Seed Shop NPC Seeds Vendor`,
    george: `${gameName} George Gear Shop NPC Farming Tools`,
    charlotte: `${gameName} Charlotte Props Shop NPC Decorations`,
    steven: `${gameName} Steven Sell Stand NPC Crop Buyer`,
    gilbert: `${gameName} Gilbert Guild Stand NPC Guild Management`,
    auctioneer: `${gameName} Auctioneer Dutch Auction NPC Premium Items`,
  };

  return headings[npc.slug] ?? `${gameName} ${npc.name} NPC Guide`;
}

function keywordSummary(npc: Npc): string {
  const summaries: Record<string, string> = {
    sam:
      'Sam GAG2 is the Grow a Garden 2 Sam Seed Shop NPC, a seeds vendor for players checking rotating crop stock.',
    george:
      'George GAG2 is the Grow a Garden 2 George Gear Shop NPC, a farming tools vendor for sprinklers and garden equipment.',
    charlotte:
      'Charlotte GAG2 is the Grow a Garden 2 Charlotte Props Shop NPC, a decorations vendor for garden cosmetics.',
    steven:
      'Steven GAG2 is the Grow a Garden 2 Steven Sell Stand NPC, the crop buyer players visit to sell harvests.',
    gilbert:
      'Gilbert GAG2 is the Grow a Garden 2 Gilbert Guild Stand NPC, the guild management contact for guild creation and rewards.',
    auctioneer:
      'Auctioneer GAG2 is the Grow a Garden 2 Auctioneer Dutch auction NPC for premium items, rotating stock, and timed price drops.',
  };

  return summaries[npc.slug] ?? `${npc.name} GAG2 is a Grow a Garden 2 NPC connected to ${npc.location}.`;
}

export default async function NpcDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const npc = npcs.find((item) => item.slug === slug);
  if (!npc) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs
              segments={[
                { label: 'Systems', href: '/systems' },
                { label: 'NPCs', href: '/systems/npcs' },
                { label: npc.name, href: `/systems/npcs/${npc.slug}` },
              ]}
            />

            <article className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                {npc.location}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-1">
                {npcHeading(npc)}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-4">{keywordSummary(npc)}</p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
                <div className="rounded-md border border-gray-200 dark:border-gray-700 p-4">
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Role</dt>
                  <dd className="font-semibold text-gray-900 dark:text-white mt-1">{npc.role}</dd>
                </div>
                <div className="rounded-md border border-gray-200 dark:border-gray-700 p-4">
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Location</dt>
                  <dd className="font-semibold text-gray-900 dark:text-white mt-1">{npc.location}</dd>
                </div>
                <div className="rounded-md border border-gray-200 dark:border-gray-700 p-4">
                  <dt className="text-sm text-gray-500 dark:text-gray-400">Added</dt>
                  <dd className="font-semibold text-gray-900 dark:text-white mt-1">{npc.added}</dd>
                </div>
              </dl>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Gameplay Function</h2>
                <p className="text-gray-600 dark:text-gray-300">{npc.description}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">Strategy</h2>
                <p className="text-gray-600 dark:text-gray-300">{npc.strategy}</p>
              </section>

              {npc.slug === 'auctioneer' ? (
                <section className="mb-8 rounded-md bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4">
                  <h2 className="text-lg font-semibold mb-2">Auctioneer Pricing</h2>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    The Auctioneer sells 6 random premium items every 20 minutes. The pricing
                    mechanism is a Dutch auction: each item starts extremely high, then decreases
                    over time while stock remains available.
                  </p>
                </section>
              ) : null}

              <ObsidianArticle source={`systems/npcs/${npc.slug}.md`} className="mb-8 border-0 p-0 shadow-none dark:bg-gray-800" />

              <nav className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <Link href="/systems/npcs" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Back to Grow a Garden 2 NPCs
                </Link>
                <div className="mt-6 flex flex-wrap gap-3">
                  {relatedNpcs(npc).map((related) => (
                    <Link
                      key={related.slug}
                      href={`/systems/npcs/${related.slug}`}
                      className="rounded-md bg-blue-50 dark:bg-blue-900/30 px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50"
                    >
                      {related.name}
                    </Link>
                  ))}
                  <Link
                    href="/systems/seeds"
                    className="rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Seeds & Crops
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
