import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Mega Moon Update — Mega Seed Guide`,
  description: `Mega Moon event guide for ${gameName}. Learn what the blue moon event does, how Mega Seeds work, and which Mega Seed values are still being verified.`,
  alternates: { canonical: `${config.seo.baseUrl}/mega-moon/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const MEGA_MOON_FACTS = [
  { label: 'Update date', value: '2026-06-27' },
  { label: 'Event window', value: 'Night phase' },
  { label: 'Visual cue', value: 'Blue moon' },
  { label: 'Main effect', value: 'Greatly increases the chance of getting Mega Seeds' },
  { label: 'Seed behavior', value: 'Creates giant versions of non-limited crops' },
];

const UNKNOWN_DATA = [
  'Exact Mega Seed drop rate',
  'Exact source flow, such as shop refresh, event reward, or another event container',
  'Confirmed size multiplier for giant crops',
  'Confirmed sell-value multiplier, if any',
  'Whether Mega Moon can overlap with Aurora Borealis in the same night cycle',
];

export default function MegaMoonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <Breadcrumbs segments={[{ label: 'Mega Moon', href: '/mega-moon/' }]} />
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Mega Moon Update</h1>
              <p className="subheading">
                Mega Moon is the June 27 update that adds a blue moon night event and Mega Seeds,
                a new seed variant for giant non-limited crops.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Mega Moon Event</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Property</th>
                        <th className={thClass}>Current Data</th>
                      </tr>
                    </thead>
                    <tbody>
                      {MEGA_MOON_FACTS.map((fact) => (
                        <tr key={fact.label} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{fact.label}</td>
                          <td className={tdClass}>{fact.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Mega Seed</h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Mega Seed is tracked as a special crop/seed entry because it affects crop
                    outcomes, but it does not have a confirmed sell value yet. For that reason it is
                    excluded from the profit calculator until reliable numeric data exists.
                  </p>
                  <Link href="/tier-list/mega-seed/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    View the Mega Seed database entry
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Still Being Verified</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  {UNKNOWN_DATA.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 rounded">
                <p className="text-sm text-gray-700 dark:text-gray-200">
                  <strong>Source note:</strong> The baseline Mega Moon and Mega Seed information
                  comes from Beebom patch notes updated on June 27, 2026, plus community reports
                  gathered in the local source folder. Unknown numbers stay marked as TBD.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Mega Moon is an event mechanic, not a normal mutation. For regular mutation
                  multipliers, use the{' '}
                  <Link href="/systems/mutations/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    mutation guide
                  </Link>
                  , and for weather-triggered effects, check the{' '}
                  <Link href="/systems/weather/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    weather page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
