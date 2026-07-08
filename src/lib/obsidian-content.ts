import fs from 'fs';
import path from 'path';

const OBSIDIAN_ROOT = path.join(process.cwd(), 'src/content/obsidian');

const FRONTMATTER_RE = /^---\s*\n[\s\S]*?\n---\s*\n?/;
const MD_IMAGE_RE = /!\[([^\]]*)\]\(([^)]+)\)/g;
const MD_LINK_RE = /(\[[^\]]+\]\()([^)]+)(\))/g;
const WIKI_IMAGE_RE = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

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
    '/guide': '/beginner-guide',
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

  const raw = fs.readFileSync(fullPath, 'utf8');
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
