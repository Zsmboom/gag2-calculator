'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiShare2 } from 'react-icons/fi';
import ShareButtons from './ShareButtons';

export default function HeaderShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 min-h-[44px]"
        aria-label="Share"
        aria-expanded={isOpen}
      >
        <FiShare2 className="h-5 w-5 mr-1" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:right-0 left-auto sm:left-auto mt-2 w-72 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 p-4 max-w-[90vw]">
          <div className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Share Fisch Macro</h3>
          </div>
          <ShareButtons 
            url="https://fischmacroo.com"
            title="Fisch Macro - Automation Tool for Roblox Fisch Game"
            description="Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience."
            iconSize={40}
            className="justify-center gap-3"
          />
        </div>
      )}
    </div>
  );
} 