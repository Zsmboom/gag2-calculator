import type { Metadata } from 'next';
import { config } from '@/lib/games.config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ObsidianArticle from '@/components/ObsidianArticle';

const gameName = config.game.name;

const sourceCoverageNotes = [
  'v1.7 — Summer Harvest Event（2026 06 30 预告，即将上线）☀️',
  '泄露内容： 3种新作物 ：Watermelon（西瓜）、Citrus Fruit（柑橘）、Kiwi（猕猴桃）— 疑似高价值限量种子 Big Rainbow T Rex 🌈🦖 — 全新活动奖励宠物 玩法：向 Farmer NPC 交付夏季水果获得公会积分（Guild Points）',
  '作物 积分 : : : Strawberry 1 Apple 3 Coconut 5 Mango 10 Sunflower 20 Pineapple 35',
  '数据源：GAG2 Wiki Updates (growagarden2wiki.net) — 2026 06 30 发布',
  'v1.6 — Hypno Bloom & Auctioneer Update（2026 06 28）',
  '新增内容： Hypno Bloom（催眠花） — Super 稀有度，多收获作物 价格：90M 🪙 / 1,599💎 每粒种子，0.275% 商店刷新率 每株产 2 果，base value 9,500🪙/kg',
  '数据源：[Beebom Patch Notes](https://beebom.com/grow a garden 2 update patch notes/)（Updated: June 28, 2026）',
];

export const metadata: Metadata = {
  title: `${gameName} Updates & Patch Notes`,
  description: `Latest ${gameName} patch notes, new content, codes, and event timelines — updated whenever the game updates.`,
  alternates: { canonical: `${config.seo.baseUrl}/updates` },
};

export default function UpdatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <section className="section bg-white dark:bg-gray-900">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading">{gameName} Updates</h1>
              <p className="subheading">
                {gameName} patch notes, new content drops, and event timelines — all in one place.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 font-semibold">
                    Preview
                  </span>
                  <time dateTime="2026-06-30">
                    2026-06-30
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Summer Harvest Event Preview</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Summer Harvest Event has been announced but is not live yet. Current source
                  notes point to limited summer crops, a guild delivery loop, and a new event pet.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Leaked crops</strong> — Watermelon, Citrus Fruit, and Kiwi</li>
                  <li><strong>Reward pet</strong> — Big Rainbow T-Rex</li>
                  <li><strong>Delivery scoring</strong> — turn in summer fruit to Farmer NPC for Guild Points</li>
                  <li><strong>Golden crops</strong> — Golden mutation deliveries are expected to score double points</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  The delivery table currently lists Strawberry for 1 point, Apple for 3, Coconut
                  for 5, Mango for 10, Sunflower for 20, and Pineapple for 35.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 font-semibold">
                    Update
                  </span>
                  <time dateTime="2026-06-28">
                    2026-06-28
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Hypno Bloom &amp; Auctioneer Update</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This update added the Super-rarity Hypno Bloom crop, the Auctioneer NPC, and a
                  broader seed pack data pass.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Hypno Bloom</strong> — 90M Sheckles / 1,599 Robux, 9kg average weight, 23m 20s growth</li>
                  <li><strong>Crop output</strong> — 2 fruits per plant with a 9,500 Sheckles/kg base value</li>
                  <li><strong>Auctioneer NPC</strong> — Dutch auction format with 6 high-tier items and 20-minute restocks</li>
                  <li><strong>Pet Eggs</strong> — community data indicates pet eggs can appear in Auctioneer stock</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  See the{' '}
                  <a href="/systems/npcs/auctioneer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Auctioneer guide
                  </a>
                  {' '}and{' '}
                  <a href="/systems/seeds/hypnobloom" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Hypno Bloom crop page
                  </a>
                  {' '}for the current details.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 font-semibold">
                    Update
                  </span>
                  <time dateTime="2026-06-27">
                    2026-06-27
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Mega Moon Update — Mega Seeds</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The first monthly update added the Mega Moon event: a blue moon can appear at
                  night and greatly increase the chance of getting Mega Seeds.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Mega Moon</strong> — night event with a blue moon visual cue</li>
                  <li><strong>Mega Seed</strong> — new seed variant for giant versions of non-limited crops</li>
                  <li><strong>Data status</strong> — exact drop rate, size multiplier, and sell-value behavior are still being verified</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  See the{' '}
                  <a href="/updates" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Mega Moon guide
                  </a>
                  {' '}for the current confirmed details.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 font-semibold">
                    Update
                  </span>
                  <time dateTime="2026-06-25">
                    2026-06-25
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Picture Frame Crate Update</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Picture Frame Crate added. Allows players to use picture banners as decorative props, customizable via Roblox decal IDs.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 px-2 py-0.5 font-semibold">
                    Update
                  </span>
                  <time dateTime="2026-06-24">
                    2026-06-24
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Turtle Update — New Pet</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Turtle added. A slow Rare pet that helps store fruits for safekeeping.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 px-2 py-0.5 font-semibold">
                    Update
                  </span>
                  <time dateTime="2026-06-22">
                    2026-06-22
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Strawberry Sniper — New Gear</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Strawberry Sniper gear added. Fires strawberry projectiles to knock other players backward.
                </p>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 font-semibold">
                    Latest
                  </span>
                  <time dateTime="2026-06-20">
                    2026-06-20
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Aurora Event — Mythic Plants, Pets &amp; New Gear</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The Aurora Event brought several major additions to {gameName}:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Venom Spitter</strong> — Mythic defensive plant (seed ~30M Sheckles)</li>
                  <li><strong>Bear</strong> — Mythic defensive pet, attacks thieves aggressively (Aurora Event pet)</li>
                  <li><strong>Aurora mutation</strong> — ×1.5 multiplier, triggered by Aurora Borealis night weather event</li>
                  <li><strong>Megaphone</strong> — new defense gear (8K Sheckles)</li>
                  <li><strong>Player Magnet</strong> — new defense gear (7M Sheckles)</li>
                  <li><strong>Pet Teleporters</strong> — Robux-only teleporters for pets</li>
                  <li><strong>Double or Nothing</strong> — harvest minigame with risk/reward mechanic</li>
                  <li><strong>Anti-cheat enabled</strong> — server-side anti-cheat now active on all servers</li>
                </ul>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 px-2 py-0.5 font-semibold">
                    Update
                  </span>
                  <time dateTime="2026-06-19">
                    2026-06-19
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Update 1 / Secret Update — QoL &amp; Systems</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Update 1 quietly introduced several quality-of-life and systems additions:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>gag.gg integration</strong> — official {gameName} website linked in-game</li>
                  <li><strong>Golden Carrots currency</strong> — new currency system for premium rewards</li>
                  <li><strong>Lucky Swiper</strong> — free daily reward system</li>
                  <li><strong>Voting system</strong> — vote for server features and events</li>
                  <li><strong>Inventory tracker</strong> — improved inventory management UI</li>
                </ul>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2 py-0.5 font-semibold">
                    Latest
                  </span>
                  <time dateTime="2026-06-12">
                    2026-06-12
                  </time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">{gameName} — Official Launch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {gameName} launched on 2026-06-12, developed by Strawberreh Squad / Splitting
                  Point Studios. It&apos;s a completely separate game from the original — nothing
                  carries over. The sequel overhauls the farming loop with these headline features:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li><strong>Day/Night Cycle</strong> — Farm by day, steal crops from other gardens during the 2-minute night phase.</li>
                  <li><strong>Guild System</strong> — Team up with other players for weekly leaderboard rewards.</li>
                  <li><strong>Weather System</strong> — 10 weather events affect crop growth and trigger mutations.</li>
                  <li><strong>Mutations (mutually exclusive)</strong> — Value multipliers from Gold (×10) up to Bloodlit (×80), but only one applies per crop.</li>
                  <li><strong>Offline Growth</strong> — Crops continue growing while you&apos;re offline.</li>
                  <li><strong>Map Pets</strong> — Pets spawn randomly on the map with unique abilities; Legendary spawns trigger a server-wide alert.</li>
                  <li><strong>Fresh Economy</strong> — 43 crop entries, new seed shop, and a brand-new Sheckles economy.</li>
                </ul>
              </article>

              <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 font-semibold">
                    Code
                  </span>
                  <time dateTime="2026-06-12">2026-06-12</time>
                </div>
                <h2 className="text-2xl font-semibold mb-3">Launch code: TEAMGREENBEAN</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  The first working code dropped at launch. Redeem <code>TEAMGREENBEAN</code> through
                  the Discord bot for 3× Green Bean Seeds. New codes are expected during major
                  updates, seasonal events, and milestone celebrations — see the{' '}
                  <a href="/codes" className="text-blue-600 dark:text-blue-400 hover:underline">codes page</a>.
                </p>
              </article>

              <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-3">Obsidian Source Coverage</h2>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {sourceCoverageNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              </section>

              <ObsidianArticle source="updates/content.md" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
