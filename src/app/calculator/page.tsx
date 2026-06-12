import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalculatorClient from './CalculatorClient';

const gameName = config.game.name;
const calculatorType = config.calculator?.type ?? 'stat';

export const metadata: Metadata = {
  title: `${gameName} Calculator | ${config.seo.siteTitle}`,
  description: `${gameName} ${calculatorType} calculator — fast, free, and updated for the latest patch.`,
  alternates: { canonical: `${config.seo.baseUrl}/calculator/` },
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Calculator</h1>
              <p className="subheading">
                Quick, free, browser-side {calculatorType} calculator for {gameName}.
                Adjust the inputs below — the result updates instantly.
              </p>
            </div>

            <CalculatorClient
              gameName={gameName}
              calculatorType={calculatorType}
              logicDescription={config.calculator?.logicDescription ?? ''}
            />
          </div>
        </section>

        <section className="section bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <h2 className="heading text-center">{gameName} Calculator — FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Is this calculator accurate?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The {gameName} calculator uses the latest in-game formulas. Results are estimates —
                  actual values may vary by ±1–2% based on server-side rounding.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Do I need to log in?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No login required. The {gameName} calculator runs entirely in your browser.
                </p>
              </div>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: `Is this ${gameName} calculator accurate?`,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `The ${gameName} calculator uses the latest in-game formulas. Results are estimates and may vary by ±1–2%.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Do I need to log in?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'No login required. Everything runs in the browser.',
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
