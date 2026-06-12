import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowTo from '@/components/HowTo';
import Why from '@/components/Why';
import FAQ from '@/components/FAQ';
import ShareSection from '@/components/ShareSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowTo />
        <Why />
        <FAQ />
        <ShareSection />
      </main>
      <Footer />
    </div>
  );
}
