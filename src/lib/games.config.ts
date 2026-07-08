// 游戏站点配置
// 通用 Roblox 游戏工具站配置。
// Codex 新建游戏站时，替换 defaultConfig 内的字段即可，无需改任何组件。

export type GamePageConfig = {
  path: string;
  title: string;
  description: string;
  priority: number;
  isHub?: boolean;
};

export type GameFeature = {
  title: string;
  description: string;
  icon?: string;
  path?: string;
};

export type GameFaq = {
  question: string;
  answer: string;
};

export type GameSiteConfig = {
  game: {
    name: string;
    slug: string;
    robloxId?: string;
    developer?: string;
    genre?: string;
    lastUpdated?: string;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
  };
  pages: GamePageConfig[];
  calculator?: {
    type: 'stat' | 'loot' | 'damage' | 'progression' | 'drop' | 'profit';
    dataFile: string;
    logicDescription: string;
  };
  features: GameFeature[];
  faqs: GameFaq[];
};

// 默认配置模板——Codex 新建游戏站时替换此文件内容即可
export const defaultConfig: GameSiteConfig = {
  game: {
    name: "Grow a Garden 2",
    slug: "grow-a-garden-2",
    robloxId: "97598239454123",
    developer: "Strawberreh Squad / Splitting Point Studios",
    genre: "Farming Simulator / PvP Raiding",
    lastUpdated: "2026-07-07",
  },
  seo: {
    siteTitle:
      "grow-a-garden-2 calculator[2026.07]",
    siteDescription:
      "Free Grow a Garden 2 calculator, active GAG2 codes, 43-crop seed database, NPC guides, mutation multipliers, and complete Roblox GAG2 wiki for 2026.07.",
    baseUrl: "https://gag2-calculator.com",
    primaryKeywords: [
      "Grow a Garden 2",
      "Grow a Garden 2 calculator",
      "GAG2",
      "Grow a Garden 2 Roblox",
      "Grow a Garden 2 codes",
      "Grow a Garden 2 guide",
    ],
    secondaryKeywords: [
      "Grow a Garden 2 calculator",
      "Grow a Garden 2 tier list",
      "GAG2 crop values",
      "Grow a Garden 2 mutations",
      "GAG2 seeds",
    ],
  },
  pages: [
    { path: "/", title: "grow-a-garden-2 calculator[2026.07]", description: "Free Grow a Garden 2 calculator, active GAG2 codes, 43-crop seed database, NPC guides, mutation multipliers, and complete Roblox GAG2 wiki for 2026.07.", priority: 1.0, isHub: true },
    { path: "/calculator", title: "Calculator", description: "Free Grow a Garden 2 profit calculator. Estimate sell prices with the community-verified formula: weight, mutations, and friend boost. Instant browser-side results.", priority: 0.9, isHub: true },
    { path: "/codes", title: "Codes", description: "Grow a Garden 2 Codes", priority: 0.9, isHub: true },
    { path: "/beginner-guide", title: "Guide", description: "Grow a Garden 2 Beginner Guide", priority: 0.8, isHub: true },
    { path: "/systems", title: "Systems", description: "Grow a Garden 2 Game Systems", priority: 0.85, isHub: true },
    { path: "/systems/seeds", title: "Seeds", description: "Grow a Garden 2 43-Crop Seed Database", priority: 0.8, isHub: true },
    { path: "/systems/npcs", title: "NPCs", description: "Grow a Garden 2 NPC Guide", priority: 0.7 },
    { path: "/systems/mutations", title: "Mutations", description: "Grow a Garden 2 Mutation Multipliers", priority: 0.7 },
    { path: "/systems/pets", title: "Pets", description: "Grow a Garden 2 Pet Catalog", priority: 0.7 },
    { path: "/systems/gear", title: "Gear", description: "Grow a Garden 2 Gear & Tools", priority: 0.7 },
    { path: "/systems/weather", title: "Weather", description: "Grow a Garden 2 Weather Events", priority: 0.7 },
    { path: "/systems/night-stealing", title: "Night Stealing", description: "Grow a Garden 2 Night Stealing Guide", priority: 0.7 },
    { path: "/systems/guilds", title: "Guilds", description: "Grow a Garden 2 Guild System & Rewards", priority: 0.6 },
    { path: "/systems/bargain-system", title: "Bargain System", description: "Grow a Garden 2 Sell Bonus Mechanic", priority: 0.5 },
    { path: "/systems/offline-growth", title: "Offline Growth", description: "Grow a Garden 2 Offline Farming", priority: 0.5 },
    { path: "/beginner-guide", title: "Beginner Guide", description: "Compatibility route for Grow a Garden 2 Beginner Guide", priority: 0.2 },
    { path: "/tier-list", title: "Tier List", description: "Grow a Garden 2 Crop Tier List", priority: 0.5 },
    { path: "/crops", title: "Crops", description: "Grow a Garden 2 Crop Database", priority: 0.4 },
    { path: "/seeds", title: "Seeds Legacy", description: "Compatibility route for Grow a Garden 2 Seed Shop Prices", priority: 0.4 },
    { path: "/mutations", title: "Mutations Legacy", description: "Compatibility route for Grow a Garden 2 Mutation Multipliers", priority: 0.4 },
    { path: "/pets", title: "Pets Legacy", description: "Compatibility route for Grow a Garden 2 Pet Catalog", priority: 0.4 },
    { path: "/gear", title: "Gear Legacy", description: "Compatibility route for Grow a Garden 2 Gear & Tools", priority: 0.4 },
    { path: "/weather", title: "Weather Legacy", description: "Compatibility route for Grow a Garden 2 Weather Events", priority: 0.4 },
    { path: "/night-stealing", title: "Night Stealing Legacy", description: "Compatibility route for Grow a Garden 2 Night Stealing Guide", priority: 0.4 },
    { path: "/guilds", title: "Guilds Legacy", description: "Compatibility route for Grow a Garden 2 Guild System", priority: 0.4 },
    { path: "/bargain-system", title: "Bargain System Legacy", description: "Compatibility route for Grow a Garden 2 Bargain System", priority: 0.3 },
    { path: "/offline-growth", title: "Offline Growth Legacy", description: "Compatibility route for Grow a Garden 2 Offline Farming", priority: 0.3 },
    { path: "/mega-moon", title: "Mega Moon", description: "Grow a Garden 2 Mega Moon Event & Mega Seed Guide", priority: 0.6 },
    { path: "/secret-update", title: "gag.gg Features", description: "Official gag.gg Website Features Guide", priority: 0.4 },
    { path: "/updates", title: "Updates", description: "Grow a Garden 2 Updates", priority: 0.8 },
    { path: "/about", title: "About", description: "About", priority: 0.4 },
    { path: "/privacy", title: "Privacy Policy", description: "Privacy Policy", priority: 0.3 },
    { path: "/disclaimer", title: "Disclaimer", description: "Disclaimer", priority: 0.3 },
  ],
  calculator: {
    type: "profit",
    dataFile: "items.json",
    logicDescription:
      "Sell Value = BaseFormula(weight) × Mutation Multiplier × (1 + Friend Boost%) × Quantity. Mutations are mutually exclusive in GAG2 — only one applies per crop. Some sources claim a ×1.08 Bargain bonus at final sell stage, still being verified.",
  },
  features: [
    {
      title: "Active Codes",
      description: "Working Grow a Garden 2 codes like TEAMGREENBEAN, updated the moment they drop on Discord or events.",
      icon: "FiGift",
      path: "/codes",
    },
    {
      title: "43-Crop Seed Database",
      description: "Every crop ranked by rarity — Super to Common — with Update 1.13.0 seeds, 1kg values, floor values, and harvest types.",
      icon: "FiList",
      path: "/systems/seeds",
    },
    {
      title: "Profit Calculator",
      description: "Estimate exact sell prices with the community-verified formula: weight, mutations, and friend boost.",
      icon: "FiCalculator",
      path: "/calculator",
    },
    {
      title: "Mutation Multipliers",
      description: "All confirmed and community-estimated GAG2 mutations from Aurora to Bloodlit, plus weather triggers.",
      icon: "FiZap",
      path: "/systems/mutations",
    },
    {
      title: "Pet Catalog",
      description: "Spawn mechanics, abilities, and costs for every confirmed pet, including Butterfly, Bald Eagle, Big Bee, and Capybara.",
      icon: "FiHeart",
      path: "/systems/pets",
    },
    {
      title: "Seed Shop Prices",
      description: "Full seed price list in Sheckles and Robux, restock odds, and investment strategy by game phase.",
      icon: "FiDroplet",
      path: "/systems/seeds",
    },
    {
      title: "NPC Guide",
      description: "Sam, George, Charlotte, Steven, Gilbert, and Auctioneer with locations, roles, and strategy.",
      icon: "FiUsers",
      path: "/systems/npcs",
    },
    {
      title: "Mega Moon Event",
      description: "Track the blue moon night event, Mega Seed behavior, and which values are still being verified.",
      icon: "FiZap",
      path: "/updates",
    },
  ],
  faqs: [
    {
      question: "What is Grow a Garden 2?",
      answer:
        "Grow a Garden 2 (GAG2) is the sequel to the popular Roblox farming game, developed by Strawberreh Squad / Splitting Point Studios. It adds a day/night cycle, guilds, weather, mutations, and offline growth — and nothing carries over from GAG1.",
    },
    {
      question: "Are mutations stackable in Grow a Garden 2?",
      answer:
        "No. Unlike GAG1, mutations in GAG2 are mutually exclusive — only one mutation applies per crop at a time. The highest confirmed multiplier is Bloodlit at ×80 during a Blood Moon.",
    },
    {
      question: "How do I redeem codes in Grow a Garden 2?",
      answer:
        "Codes are redeemed through the Discord bot, not in-game. The current working code is TEAMGREENBEAN, which grants 3× Green Bean Seeds. Join the official Discord for new codes.",
    },
    {
      question: "Can my crops be stolen?",
      answer:
        "Yes. During the 2-minute night phase of the 10-minute day/night cycle, other players can loot your unattended garden. Harvest high-value crops before logging off or deploy defensive pets and gear.",
    },
    {
      question: "What is the best crop to start with?",
      answer:
        "Start with Carrot (1 Sheckle) for fast first cash, then rush Bamboo (700 Sheckles) — it can be planted densely and pairs perfectly with weather-triggered mutations. Romanesco (99 Sheckles) has the best ROI in the game at 15×.",
    },
  ],
};

// 站点运行期使用的实际配置——直接复用 defaultConfig。
// 想做 A/B 实验或多语言时，可改为读取 src/data/game.config.json 之类的数据源。
export const config: GameSiteConfig = defaultConfig;
