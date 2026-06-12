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
  game: { name: "Game Name", slug: "game-slug", robloxId: "" },
  seo: {
    siteTitle: "Game Name Guide & Tools",
    siteDescription: "The ultimate Game Name companion — guides, codes, tier lists, calculators. Updated daily.",
    baseUrl: "https://game-slug.gg",
    primaryKeywords: ["Game Name", "Game Name Roblox", "Game Name codes"],
    secondaryKeywords: ["Game Name calculator", "Game Name tier list", "Game Name guide"],
  },
  pages: [
    { path: "/", title: "Home", description: "Home page", priority: 1.0, isHub: true },
    { path: "/calculator", title: "Calculator", description: "Game Name Calculator", priority: 0.9, isHub: true },
    { path: "/codes", title: "Codes", description: "Game Name Codes", priority: 0.9, isHub: true },
    { path: "/tier-list", title: "Tier List", description: "Game Name Tier List", priority: 0.9, isHub: true },
    { path: "/beginner-guide", title: "Beginner Guide", description: "Game Name Guide", priority: 0.8 },
    { path: "/updates", title: "Updates", description: "Game Name Updates", priority: 0.8 },
    { path: "/about", title: "About", description: "About", priority: 0.4 },
    { path: "/privacy", title: "Privacy Policy", description: "Privacy Policy", priority: 0.3 },
    { path: "/disclaimer", title: "Disclaimer", description: "Disclaimer", priority: 0.3 },
  ],
  calculator: { type: "stat", dataFile: "calculator-stat.json", logicDescription: "" },
  features: [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" },
  ],
  faqs: [
    { question: "What is this site?", answer: "This is a fan-made guide." },
  ],
};

// 站点运行期使用的实际配置——直接复用 defaultConfig。
// 想做 A/B 实验或多语言时，可改为读取 src/data/game.config.json 之类的数据源。
export const config: GameSiteConfig = defaultConfig;
