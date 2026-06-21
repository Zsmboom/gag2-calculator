import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `${gameName} Gear — Sprinklers, Defense & Tools Guide`,
  description: `Complete ${gameName} gear guide. Sprinklers, defense equipment (Vine Wrapper, Freeze Ray), raid tools, and the investment priority order to maximize your Sheckles.`,
  alternates: { canonical: `${config.seo.baseUrl}/gear/` },
};

const thClass = 'px-4 py-3 text-left text-sm font-semibold';
const tdClass = 'px-4 py-3 text-sm';

const SPRINKLERS = [
  { name: 'Basic Sprinkler', effect: 'Increases nearby crop weight (higher harvest value)', price: 'Low' },
  { name: 'Advanced Sprinkler', effect: 'Stronger growth boost', price: 'Medium' },
  { name: 'Super Sprinkler', effect: 'Maximum growth boost', price: 'High' },
];

const DEFENSE = [
  { item: 'Megaphone', effect: 'Defends against thieves (8K Sheckles)' },
  { item: 'Player Magnet', effect: 'Attracts items and deters thieves (7M Sheckles)' },
  { item: 'Vine Wrapper', effect: 'Tangles thieves, slowing them down' },
  { item: 'Freeze Ray', effect: 'Freezes thieves in place' },
  { item: 'Power Hose', effect: 'Blasts thieves away from your garden' },
  { item: 'Defensive Pets', effect: 'Bee (attacks), Gnome (scares)' },
];

const PRIORITY = [
  { order: '1st', item: 'Sprinklers', why: 'Increases crop weight → exponential value gain' },
  { order: '2nd', item: 'Raid tools', why: 'Needed for night stealing' },
  { order: '3rd', item: 'Defense gear', why: 'Protects high-value crops at night' },
];

export default function GearPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Gear &amp; Tools</h1>
              <p className="subheading">
                Sprinklers are the most important equipment in {gameName} — weight scales
                exponentially with value. Then raid tools, then defense.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Sprinklers (Most Important)</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Name</th>
                        <th className={thClass}>Effect</th>
                        <th className={thClass}>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SPRINKLERS.map((s) => (
                        <tr key={s.name} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{s.name}</td>
                          <td className={tdClass}>{s.effect}</td>
                          <td className={tdClass}>{s.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Sprinklers increase crop <strong>weight</strong> — weight scales exponentially with
                  value (power law: weight<sup>exp</sup>). This is the most important investment after
                  seeds.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Defense Gear</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Item</th>
                        <th className={thClass}>Effect</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEFENSE.map((d) => (
                        <tr key={d.item} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-medium`}>{d.item}</td>
                          <td className={tdClass}>{d.effect}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Raid Tools</h2>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Night-only tools are required for stealing from other gardens</li>
                  <li>Various Gear Shop items provide utility for farming and raiding</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Priority Investment Order</h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <table className="w-full">
                    <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                        <th className={thClass}>Order</th>
                        <th className={thClass}>Item</th>
                        <th className={thClass}>Why</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRIORITY.map((p) => (
                        <tr key={p.order} className="border-t border-gray-200 dark:border-gray-700">
                          <td className={`${tdClass} font-bold`}>{p.order}</td>
                          <td className={`${tdClass} font-medium`}>{p.item}</td>
                          <td className={tdClass}>{p.why}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
