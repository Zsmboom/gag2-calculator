'use client';

import { useState } from 'react';
import Link from 'next/link';
import Picture from './Picture';
import { FiMenu, FiX } from 'react-icons/fi';
import { config } from '@/lib/games.config';

const gameName = config.game.name;
const navPages = config.pages.filter((p) => p.isHub && p.path !== '/');

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Picture
                src="/images/logo/logo.svg"
                alt={gameName}
                width={150}
                height={40}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </Link>
            {navPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {page.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/guide" className="btn btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-gray-800 shadow-lg z-50">
          <div className="px-2 pt-2 pb-3 space-y-0 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md min-h-[50px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            {navPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md min-h-[50px] flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {page.title}
              </Link>
            ))}
            <Link
              href="/guide"
              className="block px-3 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 min-h-[50px] flex items-center mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
