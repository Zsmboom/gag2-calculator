import Link from 'next/link';
import { FiMessageCircle, FiPlay, FiMail } from 'react-icons/fi';
import ShareButtons from './ShareButtons';
import { config } from '@/lib/games.config';

const gameName = config.game.name;
const baseUrl = config.seo.baseUrl;
const description = config.seo.siteDescription;

const hubPages = config.pages
  .filter((p) => p.isHub)
  .map((page) => page);
const resourcePages = config.pages.filter(
  (p) =>
    !p.isHub &&
    (p.path === '/updates' ||
      p.path === '/guide' ||
      p.path.startsWith('/systems/')) &&
    !['/privacy', '/disclaimer', '/about'].includes(p.path)
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">{gameName}</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base">
              {description}
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://discord.gg/growagarden"
                className="text-gray-400 hover:text-white p-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <FiMessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.roblox.com/games/97598239454123/Grow-a-Garden-2"
                className="text-gray-400 hover:text-white p-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Roblox game page"
              >
                <FiPlay className="h-5 w-5" />
              </a>
              <a
                href={`mailto:contact@gag2-calculator.com`}
                className="text-gray-400 hover:text-white p-2"
                aria-label="Email"
              >
                <FiMail className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Share our website:</p>
              <ShareButtons
                url={baseUrl}
                title={config.seo.siteTitle}
                description={description}
                iconSize={24}
                className="mt-2"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {hubPages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="text-gray-400 hover:text-white py-2 block"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools and Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Tools and Resources</h3>
            <ul className="space-y-2">
              {resourcePages.map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    className="text-gray-400 hover:text-white py-2 block"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white py-2 block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-gray-400 hover:text-white py-2 block"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white py-2 block"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">
            © {currentYear} {gameName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
