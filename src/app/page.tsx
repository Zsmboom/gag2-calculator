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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <link rel="canonical" href={`${config.seo.baseUrl}/`} />
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
            <ObsidianArticle source="homepage/content.md" />
          </div>
        </section>
        <ShareSection />
        <GoogleSearchSchema faqs={config.faqs} />
      </main>
      <Footer />
    </div>
  );
}
