import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import npcsData from '@/data/npcs.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} NPCs — All Non-Player Characters`,
  description: `All ${gameName} NPCs: Sam, George, Charlotte, Steven, Gilbert, and Auctioneer, including locations, roles, and gameplay strategy.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems/npcs` },
};

type Npc = {
  slug: string;
  name: string;
  location: string;
  role: string;
  added: string;
  description: string;
  strategy: string;
};

const npcs = ((npcsData as unknown) as { npcs: Npc[] }).npcs ?? [];

export default function NpcsPage() {
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
              ]}
            />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} NPCs</h1>
              <p className="subheading">
                All six in-game NPCs: Sam, George, Charlotte, Steven, Gilbert, and the Auctioneer.
                Learn where each NPC is, what they do, and when to use them.
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">NPC</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Location</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Role</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Added</th>
                  </tr>
                </thead>
                <tbody>
                  {npcs.map((npc) => (
                    <tr key={npc.slug} className="border-t border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-3 text-sm font-medium">
                        <Link
                          href={`/systems/npcs/${npc.slug}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {npc.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-sm">{npc.location}</td>
                      <td className="px-4 py-3 text-sm">{npc.role}</td>
                      <td className="px-4 py-3 text-sm">{npc.added}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {npcs.map((npc) => (
                <Link
                  key={npc.slug}
                  href={`/systems/npcs/${npc.slug}`}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{npc.name}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {npc.location} — {npc.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">{npc.description}</p>
                </Link>
              ))}
            </div>

            <ObsidianArticle source="systems/npcs/list.md" className="mt-10" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
