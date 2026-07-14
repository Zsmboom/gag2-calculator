import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowTo from '@/components/HowTo';
import WhatsNew from '@/components/WhatsNew';
import Why from '@/components/Why';
import FAQ from '@/components/FAQ';
import ShareSection from '@/components/ShareSection';
import Footer from '@/components/Footer';
import GoogleSearchSchema from '@/components/GoogleSearchSchema';
import ObsidianArticle from '@/components/ObsidianArticle';
import { config } from '@/lib/games.config';
import { pageMetadata } from '@/lib/page-seo';
import Link from 'next/link';

export const metadata = pageMetadata(
  '/',
  'Grow a Garden 2 (GAG2) — Guides, Codes & Calculator',
  'Grow a Garden 2 guide with a free calculator, active codes, crop prices, pets, mutations, systems, and current Roblox updates.',
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <link rel="canonical" href={`${config.seo.baseUrl}/`} />
      <meta property="og:url" content={`${config.seo.baseUrl}/`} />
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <HowTo />
        <WhatsNew />
        <Why />
        <FAQ />
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <p
              data-source-block="homepage-content-md-roblox-grow-a-garden-2-index-979fa8528b"
              className="mx-auto mb-4 max-w-4xl text-sm text-gray-500 dark:text-gray-400"
            >
              Roblox › Grow a Garden 2
            </p>
            <ObsidianArticle source="homepage/content.md" />
            <div className="mx-auto mt-6 max-w-4xl rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Explore Every Game System</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Browse the complete seeds, pets, mutations, gear, weather, NPC, guild, stealing, bargain, and offline-growth guides.
              </p>
              <Link href="/systems" className="mt-4 inline-flex rounded-md bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
                Open the Grow a Garden 2 systems hub
              </Link>
            </div>
            <figure className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/homepage/yt-codezzy-july4-update-page.png"
                alt="Codezzy YouTube video — July 4 Update Review"
                width={1521}
                height={2952}
                loading="lazy"
                className="h-auto w-full rounded-md"
              />
              <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                July 4 update review reference showing the Fire Fern and Rocket Pop release coverage.
              </figcaption>
            </figure>
          </div>
        </section>
        <ShareSection />
        <GoogleSearchSchema faqs={config.faqs} />
      </main>
      <Footer />
    </div>
  );
}
