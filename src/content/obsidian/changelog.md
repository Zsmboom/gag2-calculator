---
## v1.9 — 2026-06-30

**Type**: Structure fix — added missing systems hub page
**Summary**: Created systems/content.md for /systems/ URL, fixed stale seed counts in site-architecture

### Files Added
- **systems/content.md** — Systems hub/landing page (English, internal links to all 10 system modules)

### Files Modified
- **site-architecture.md** — Page count 60→61, seeds folder: 38→39 pages, 37→38 details, added systems/ row

---

## v1.8 — 2026-06-30

**Type**: Bug fix — missing seed detail page
**Summary**: Found and fixed missing venom-spitter.md — referenced in site-architecture and items.json but had no corresponding file on disk

### Files Added
- **systems/seeds/venom-spitter.md** — New Venom Spitter detail page (Mythic defensive crop, Aurora Event)

### Files Modified
- **systems/seeds/list.md** — Added Venom Spitter row to seed table (Mythic, ~30M Sheckles, Multi)
- **site-architecture.md** — Page count 59→60, v1.8 entry added

### Known Gaps
- Venom Spitter exact 1kg value — TBD (data not yet available)
- All existing gaps from v1.7 remain

---

## v1.7 — 2026-06-30

**Type**: Data update — Hypno Bloom & Auctioneer Update (Jun 28)
**Summary**: Added NPC system (6 NPCs total), Seed Pack reference, enriched Hypno Bloom detail, updated homepage stats

### Files Added
- **systems/npcs/list.md** — New NPC system list (Sam, George, Charlotte, Steven, Gilbert, Auctioneer)
- **systems/npcs/auctioneer.md** — New Auctioneer detail page
- **systems/npcs/sam.md** — New Sam detail page (Seed Shop)
- **systems/npcs/george.md** — New George detail page (Gear Shop)
- **systems/npcs/charlotte.md** — New Charlotte detail page (Props Shop)
- **systems/npcs/steven.md** — New Steven detail page (Sell Stand)
- **systems/npcs/gilbert.md** — New Gilbert detail page (Guild Stand)
- **reference-data/seed-packs.md** — Seed Pack drop reference (Ghost Pepper Pack + Rare Seed Pack tables)

### Files Modified
- **homepage/content.md** — Stats updated (visits 174M→843M, added favorites, 36→37 crops)
- **systems/seeds/hypnobloom.md** — Enriched with sell value example (494K at 41kg)
- **site-architecture.md** — Page map updated (51→59 pages, NPCs system expanded to 7 pages)
- **sources.md** — Added GAG2 Wiki updates + NPCs + Seed Packs
- **changelog.md** — v1.7 entry expanded

### New Data
- NPCs: 6 total (Sam/George/Charlotte/Steven/Gilbert/Auctioneer) — 5 new detail pages created
- Seed Packs: Ghost Pepper Pack (5 drops, 1-50%), Rare Seed Pack (27 drops, free vote reward)
- Homepage: Visits 843M+, Favorites 550K+
- Hypno Bloom: 41kg = ~494K Sheckles value example

### Known Gaps
- Hypno Bloom ability exact range/duration — not documented on wiki either (community gap)
- High-tier Seed Pack (Super/Secret/Mythic/Legendary) drop % — Source TBA (not obtainable in-game yet)

---

## v1.6 — 2026-06-29

**Type**: Data update — Update 1.06.0 (Hypno Bloom)
**Summary**: Added Hypno Bloom (Super-rarity crop) discovered during routine update check. Data sourced from growagarden2wiki.net + Fandom Wiki.

### Files Added
- **systems/seeds/hypnobloom.md** — New detail page for Hypno Bloom

### Files Modified
- **reference-data/items.json** — Added Hypno Bloom entry (36 → 37 crops)

### New Data
- Items/Pets: 1 added (Hypno Bloom)
- New source: growagarden2wiki.net (added to sources.md)

### Known Gaps
- Hypno Bloom exact ability duration/range not yet documented
- Secret Auction Update (mentioned in YouTube, Jun 28) — no media coverage yet, pending further investigation



## v1.5 — 2026-07-01

**Type**: Delta update — Mega Moon Update
**Summary**: Added Mega Moon event mechanics, Mega Seed variants. Updated items.json and pages/updates.md.

**Files Modified**:
- data/items.json — Added Mega Seed entries
- systems/mutations/list.md — Updated mutation multipliers
- updates/content.md — Added Mega Moon event patch note

---

## v1.4 — 2026-06-25

**Type**: Data quality audit
**Summary**: Marked mutation multipliers as multi-source conflict. Added 5 new data sources.

**Files Modified**:
- systems/mutations/list.md — Added conflict markers
- sources.md — Added 5 new sources

---

## v1.3 — 2026-06-25

**Type**: Delta update — Strawberry Sniper / Turtle / Picture Frame
**Summary**: Added 3 new update records.

**Files Modified**:
- updates/content.md — Added 3 patch notes

---

## v1.2 — 2026-06-22

**Type**: Delta update — Aurora Event details
**Summary**: Filled in Aurora Event mechanics. Updated weather, guilds, and secret update content.

**Files Modified**:
- data/items.json — Updated
- updates/content.md — Updated
- systems/weather/list.md — Added Aurora mechanics
- systems/guilds/content.md — Added guild event info

---

## v1.1 — 2026-06-21

**Type**: Merge from SMB shared folder
**Summary**: Merged 88 files from SMB shared folder into standard Obsidian structure.

---

## v1.0 — 2026-06-21

**Type**: Initial collection
**Summary**: First data collection for Grow a Garden 2. Collected Roblox store page stats, YouTube video references, gaming media articles, and system-level content overview.

**Collected items**:
- Codes: 2 entries
- Items/Pets: 36 crops
- Video references: 3 YouTube videos
- Media articles: 8 articles

**Known gaps**: See sources.md for details
