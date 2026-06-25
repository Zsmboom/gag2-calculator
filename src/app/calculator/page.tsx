import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import CalculatorClient from './CalculatorClient';

const gameName = config.game.name;
const calculatorType = config.calculator?.type ?? 'stat';

export const metadata: Metadata = {
  title: `Grow a Garden 2 Calculator \u2014 Free GAG2 Profit Calculator`,
  description: `Free Grow a Garden 2 profit calculator. Estimate sell prices with the community-verified formula: weight, mutations, and friend boost. Instant browser-side results.`,
  alternates: { canonical: `${config.seo.baseUrl}/calculator/` },
};

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs segments={[{ label: 'Calculator', href: '/calculator/' }]} />
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
                <h3 className="font-semibold text-lg mb-2">How accurate is this calculator?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  It uses the community-verified {gameName} formula: Base Value × Weight² × Mutation
                  × Friend Boost × Quantity. Values are community-estimated and actual results may
                  vary slightly due to server-side rounding and per-crop curve differences (exponent
                  2.0–3.4).
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Can I stack mutations?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No. Unlike the original Grow a Garden, mutations in {gameName} are mutually
                  exclusive — only one mutation applies per crop. The calculator reflects this: pick
                  the single mutation on your harvest.
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
                      name: `How accurate is the ${gameName} calculator?`,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: `It uses the community-verified formula: Base Value × Weight² × Mutation × Friend Boost × Quantity. Values are estimates and may vary slightly due to per-crop curve differences.`,
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Can I stack mutations in Grow a Garden 2?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'No. Mutations in GAG2 are mutually exclusive — only one mutation applies per crop at a time.',
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        <section className="section bg-white dark:bg-gray-900">
          <div className="container max-w-3xl">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              View the full{' '}
              <Link href="/mutations/" className="text-blue-600 dark:text-blue-400 hover:underline">
                mutation multiplier list
              </Link>{' '}
              and{' '}
              <Link href="/crops/" className="text-blue-600 dark:text-blue-400 hover:underline">
                crop database
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
