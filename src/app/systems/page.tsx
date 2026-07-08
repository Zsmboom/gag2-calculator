import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Systems — Game Mechanics & Guides`,
  description: `Browse every ${gameName} system: seeds, pets, mutations, gear, weather, night stealing, guilds, NPCs, bargain bonuses, and offline growth.`,
  alternates: { canonical: `${config.seo.baseUrl}/systems` },
};

const groups = [
  {
    title: 'Farming & Economy',
    items: [
      ['Seeds & Crops', '/systems/seeds', 'Complete database of all 43 crop entries, rarity, sell value, growth time, harvest type, and seed shop prices.'],
      ['Pets', '/systems/pets', '18 confirmed pets with abilities, spawn notes, prices, and defensive value.'],
      ['Mutations', '/systems/mutations', '12+ mutation types with value multipliers, triggers, and stacking rules.'],
      ['Gear', '/systems/gear', 'Tools, sprinklers, watering cans, and defense gear that affect growth and raids.'],
      ['Bargain System', '/systems/bargain-system', 'Sell price bonus mechanics at the final sell stage.'],
    ],
  },
  {
    title: 'Environment & Events',
    items: [
      ['Weather', '/systems/weather', 'Blood Moon, Aurora Borealis, rain, frost, and other weather effects.'],
      ['Night Stealing', '/systems/night-stealing', 'Farm by day, defend or raid gardens at night.'],
      ['Offline Growth', '/systems/offline-growth', 'How crops keep growing while you are offline.'],
    ],
  },
  {
    title: 'Social & Progression',
    items: [
      ['Guilds', '/systems/guilds', 'Create or join a guild, compete on leaderboards, and chase weekly rewards.'],
      ['NPCs', '/systems/npcs', 'Sam, George, Charlotte, Steven, Gilbert, and the Auctioneer.'],
    ],
  },
];

export default function SystemsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs segments={[{ label: 'Systems', href: '/systems' }]} />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Game Systems</h1>
              <p className="subheading">
                Grow a Garden 2 introduces interconnected farming, economy, PvP, guild, NPC, and
                event systems. Start with the hub below, then jump into the system guide you need.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-8">
              {groups.map((group) => (
                <section key={group.title}>
                  <h2 className="text-2xl font-semibold mb-4">{group.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {group.items.map(([title, href, description]) => (
                      <Link
                        key={href}
                        href={href}
                        className="block rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <ObsidianArticle source="systems/content.md" className="mt-10" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
