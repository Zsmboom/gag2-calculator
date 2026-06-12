import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Picture from '@/components/Picture';
import { config } from '@/lib/games.config';
import type { Metadata } from 'next';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `About | ${config.seo.siteTitle}`,
  description: `Learn about ${gameName} — the ultimate fan-made guide and tools hub for Roblox ${gameName} players.`,
  alternates: { canonical: `${config.seo.baseUrl}/about/` },
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">About {gameName}</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Picture
                      src="/images/about/team-working.svg"
                      alt={`${gameName} team`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {gameName} was created by a team of passionate Roblox players who wanted to build the
                    best possible resource hub for the community. Our goal is to provide accurate,
                    up-to-date guides, tools, and information to help every player get more out of the game.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We know that Roblox games evolve fast — new updates, new codes, new metas. That&apos;s
                    why we keep everything on this site updated daily, so you never miss a beat.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Whether you&apos;re a complete beginner or a seasoned player, {gameName} has the tools
                    you need: calculators, tier lists, working codes, beginner guides, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our mission is simple: make {gameName} more enjoyable for everyone. We believe
                    that great tools and clear guides help players spend less time searching for information
                    and more time actually playing.
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Keep all guides and tools updated with the latest game patches</li>
                    <li>Provide accurate, community-verified information</li>
                    <li>Build tools that are fast, free, and work entirely in your browser</li>
                    <li>Create a welcoming resource for players of all skill levels</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Picture
                      src="/images/about/mission.svg"
                      alt="Our mission"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
