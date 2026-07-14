import Link from 'next/link';
import Picture from './Picture';
import { config } from '@/lib/games.config';

const gameName = config.game.name;
const description = config.seo.siteDescription;

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600 dark:text-blue-400 [overflow-wrap:anywhere]">
                grow-a-garden-2 calculator[2026.07]
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center md:justify-start">
              <Link
                href="/guide"
                className="btn btn-primary text-center py-3 sm:py-2 min-h-[50px] sm:min-h-[44px] flex items-center justify-center"
              >
                Get Started
              </Link>
              <Link
                href="/systems/seeds"
                className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 text-center py-3 sm:py-2 min-h-[50px] sm:min-h-[44px] flex items-center justify-center"
              >
                View Seeds
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 md:h-auto">
            <Picture
              src="/images/hero-main.svg"
              alt={`${gameName} — ${config.seo.siteTitle}`}
              width={800}
              height={600}
              priority
              className="rounded-lg"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Stats / Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
          <div className="p-2 sm:p-4">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              1.214B+
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Visits</p>
          </div>
          <div className="p-2 sm:p-4">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              607.8K+
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Favorites</p>
          </div>
          <div className="p-2 sm:p-4">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">
              334K
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Current Players</p>
          </div>
          <div className="p-2 sm:p-4">
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">46</p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Crops</p>
          </div>
        </div>
      </div>
    </section>
  );
}
