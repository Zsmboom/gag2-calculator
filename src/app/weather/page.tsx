import type { Metadata } from 'next';
import Link from 'next/link';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Weather Events — Complete Guide & Mutation Triggers`,
  description: `Complete ${gameName} weather events guide. Every weather type, the mutation it triggers, its multiplier, and strategy tips for Rain, Thunderstorm, Frost, and Blood Moon.`,
  alternates: { canonical: `${config.seo.baseUrl}/weather/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const WEATHER = [
  { weather: 'Rain', mutation: 'Wet', mult: '×2', notes: 'Common weather' },
  { weather: 'Thunderstorm', mutation: 'Wet → Electric', mult: '×2 → ×70', notes: 'Highest non-event mutation' },
  { weather: 'Frost', mutation: 'Chilled → Frozen', mult: '×2 → ×40', notes: 'Crop must already be Wet' },
  { weather: 'Blood Moon', mutation: 'Bloodlit', mult: '×80', notes: 'Every 4h (Lunar Glow variation)' },
  { weather: 'Lunar Glow', mutation: 'Moonlit', mult: '×2', notes: 'Every hour at night' },
  { weather: 'Sandstorm', mutation: 'Sandy', mult: '×3', notes: 'Desert event' },
  { weather: 'Tornado', mutation: 'Twisted', mult: '×5', notes: 'Wind event' },
  { weather: 'Tropical Rain', mutation: 'Drenched', mult: '×5', notes: 'Tropical variant' },
  { weather: 'Acid Rain', mutation: 'Acidic', mult: '×12', notes: 'Rare weather' },
  { weather: 'Oil Rain', mutation: 'Oil', mult: '×15', notes: 'Rare, or pet-triggered' },
];

export default function WeatherPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Weather Events</h1>
              <p className="subheading">
                Weather is the primary mutation trigger in {gameName}. Know which storm is coming,
                and you know which multiplier to farm for.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Weather Event Table</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Weather</th>
                        <th className={thClass}>Triggered Mutation</th>
                        <th className={thClass}>Multiplier</th>
                        <th className={thClass}>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {WEATHER.map((w) => (
                        <tr key={w.weather} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{w.weather}</td>
                          <td className={tdClass}>{w.mutation}</td>
                          <td className={`${tdClass} font-bold text-blue-600 dark:text-blue-400`}>{w.mult}</td>
                          <td className={tdClass}>{w.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Strategy by Weather</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-3">
                  <li><strong>Rain / Thunderstorm</strong> — Plant large batches and wait for the Electric proc (×70). Thunderstorms are the highest non-event mutation source.</li>
                  <li><strong>Frost</strong> — Ensure some crops are already Wet beforehand to trigger Frozen (×40). Pre-soak with Rain or Sprinklers.</li>
                  <li><strong>Blood Moon</strong> — Time your largest harvest for this event. It fires every 4 hours and gives the maximum ×80 Bloodlit multiplier.</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Mutations are mutually exclusive in {gameName} — only one applies per crop. See the
                  full multiplier breakdown on the{' '}
                  <Link href="/mutations/" className="text-blue-600 dark:text-blue-400 hover:underline">
                    mutations page
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
