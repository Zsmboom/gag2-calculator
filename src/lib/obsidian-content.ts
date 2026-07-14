import fs from 'fs';
import path from 'path';

const OBSIDIAN_ROOT = path.join(process.cwd(), 'src/content/obsidian');

const FRONTMATTER_RE = /^---\s*\n[\s\S]*?\n---\s*\n?/;
const MD_IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;
const MD_LINK_RE = /(\[[^\]]+\]\()([^)]+)(\))/g;
const WIKI_IMAGE_RE = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const PUBLIC_SOURCE_HEADING_RE = /^(#{1,6})\s+(?:data\s+sources?|sources?|source\s+data|references?|related\s+links|采集来源|数据来源|已知信息汇总|相关链接)\s*:?[\s#]*$/i;
const PUBLIC_SOURCE_LINE_RE = /^\s*(?:[-*]\s+)?(?:📚\s*)?(?:data\s+sources?|source\s+data|sources?|采集来源|数据来源|数据源|来源)(?:\s*&\s*update\s+guide)?\s*[:：]?.*$/i;
const PUBLIC_SOURCE_QUOTE_RE = /^\s*>\s*(?:\*{0,2}(?:data\s+source|source|sources|last\s+updated|total\s+entries)\*{0,2}|来源)\s*:.*$/i;
const PUBLIC_ATTRIBUTION_NOTE_RE = /^\s*>.*(?:between\s+sources|data\s+from|beebom|bloxxer|sportskeeda|pro\s+game\s+guides|gag2\s+wiki|fandom\s+wiki)/i;
const INTERNAL_DATA_PATH_RE = /^\s*>?.*(?:src\/data\/|reference-data\/|\.md(?:\s|、|,|$))/i;

function removeSourceTableColumns(markdown: string): string {
  const lines = markdown.split('\n');
  for (let index = 0; index < lines.length - 1; index += 1) {
    if (!lines[index].trim().startsWith('|') || !/^\s*\|?[\s:|-]+\|\s*$/.test(lines[index + 1])) continue;
    const headers = lines[index].split('|').map((cell) => cell.trim());
    const sourceIndex = headers.findIndex((cell) => /^(?:(?:data|information)\s+)?source(?:s)?$|^信息来源$/i.test(cell));
    if (sourceIndex < 0) continue;

    for (let row = index; row < lines.length && lines[row].trim().startsWith('|'); row += 1) {
      const cells = lines[row].split('|');
      if (sourceIndex < cells.length) cells.splice(sourceIndex, 1);
      lines[row] = cells.join('|');
    }
  }
  return lines.join('\n');
}

function stripPublicSourceNotes(markdown: string): string {
  const lines = markdown.split('\n');
  const kept: string[] = [];
  let skippedHeadingLevel: number | null = null;

  for (const line of lines) {
    const heading = line.match(/^(#{1,6})\s+/);
    if (skippedHeadingLevel !== null) {
      if (!heading || heading[1].length > skippedHeadingLevel) continue;
      skippedHeadingLevel = null;
    }

    const sourceHeading = line.match(PUBLIC_SOURCE_HEADING_RE);
    if (sourceHeading) {
      skippedHeadingLevel = sourceHeading[1].length;
      continue;
    }
    if (
      PUBLIC_SOURCE_LINE_RE.test(line) ||
      PUBLIC_SOURCE_QUOTE_RE.test(line) ||
      PUBLIC_ATTRIBUTION_NOTE_RE.test(line) ||
      INTERNAL_DATA_PATH_RE.test(line)
    ) continue;
    kept.push(line);
  }

  return removeSourceTableColumns(kept.join('\n')).replace(/\n{3,}/g, '\n\n');
}

function normalizeInternalUrl(url: string): string {
  const [base, hash = ''] = url.split('#');
  if (base === 'index' || base === './index' || base === 'index.md') {
    return hash ? `/#${hash}` : '/';
  }
  if (!base.startsWith('/') || base === '/') {
    return url;
  }

  const clean = base.replace(/\/+$/, '');
  const canonicalRoutes: Record<string, string> = {
    '/guide': '/guide',
    '/crops': '/systems/seeds',
    '/seeds': '/systems/seeds',
    '/gear': '/systems/gear',
    '/mutations': '/systems/mutations',
    '/pets': '/systems/pets',
    '/weather': '/systems/weather',
    '/night-stealing': '/systems/night-stealing',
    '/guilds': '/systems/guilds',
    '/bargain-system': '/systems/bargain-system',
    '/offline-growth': '/systems/offline-growth',
    '/mega-moon': '/updates',
    '/secret-update': '/updates',
  };
  const route = canonicalRoutes[clean] ?? clean;
  return hash ? `${route}#${hash}` : route;
}

function normalizeExternalUrl(url: string): string {
  if (!/^https?:\/\//i.test(url)) {
    return url;
  }
  try {
    const parsed = new URL(url);
    if (parsed.pathname !== '/') {
      parsed.pathname = parsed.pathname.replace(/\/+$/, '');
    }
    return parsed.toString();
  } catch {
    return url.replace(/\/+$/, '');
  }
}

function publicAssetPath(sourceFile: string, assetRef: string): string {
  const decoded = assetRef.replace(/^<|>$/g, '').trim();
  if (/^https?:\/\//i.test(decoded) || decoded.startsWith('/')) {
    return decoded;
  }

  const sourceDir = path.dirname(sourceFile);
  const rel = path.normalize(path.join(sourceDir, decoded)).replace(/\\/g, '/');
  const filename = path.basename(rel);

  if (rel.startsWith('homepage/images/')) {
    return `/images/homepage/${filename}`;
  }
  if (rel.startsWith('systems/seeds/images/')) {
    return `/images/crops/${filename}`;
  }

  return decoded;
}

export function readObsidianMarkdown(sourceFile: string): string {
  const fullPath = path.join(OBSIDIAN_ROOT, sourceFile);
  if (!fullPath.startsWith(OBSIDIAN_ROOT) || !fs.existsSync(fullPath)) {
    return '';
  }

  const raw = stripPublicSourceNotes(fs.readFileSync(fullPath, 'utf8'));
  return raw
    .replace(FRONTMATTER_RE, '')
    .replace(/\r\n/g, '\n')
    .replace(/^.*(?:\/Users\/|\/Desktop\/).*$/gm, '')
    .replace(/^(\s*)(\d+)\.\s+/gm, '$1- $2. ')
    .replace(MD_IMAGE_RE, (_match, alt: string, ref: string) => {
      return `![${alt}](${publicAssetPath(sourceFile, ref)})`;
    })
    .replace(WIKI_IMAGE_RE, (_match, ref: string, alt?: string) => {
      return `![${alt ?? path.parse(ref).name}](${publicAssetPath(sourceFile, ref)})`;
    })
    .replace(MD_LINK_RE, (_match, open: string, href: string, close: string) => {
      const cleanHref = href.trim();
      if (/^https?:\/\//i.test(cleanHref) || cleanHref.startsWith('mailto:') || cleanHref.startsWith('tel:')) {
        return `${open}${normalizeExternalUrl(cleanHref)}${close}`;
      }
      return `${open}${normalizeInternalUrl(cleanHref)}${close}`;
    })
    .trim();
}
