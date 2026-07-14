'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { config } from '@/lib/games.config';

const gameName = config.game.name;

const reasons = [
  `All 43 ${gameName} crop entries with 1kg values, floor values, and seed costs`,
  'Working codes updated the moment they drop on Discord',
  'Complete mutation multiplier table — Bloodlit (×80) down to Chained (×4)',
  'Profit calculator using the community-verified sell-price formula',
  'Weather event guide mapping every storm to its mutation trigger',
  'Night-stealing defense strategies and a full pet & gear catalog',
];

const useCases = [
  {
    label: 'Farmers',
    heading: 'Plan your crop investments',
    body: 'Compare ROI across the full crop database, see restock odds, and pick the best seed for your current Sheckle count and game phase.',
  },
  {
    label: 'Mutation hunters',
    heading: 'Time your harvests',
    body: 'Know exactly which weather event triggers which mutation, and how much each multiplier is worth on your highest-value crops.',
  },
];

const obsidianCoverage = [
  '💰 Economy & Values 🎁 Active Codes 💎 Crop Value Table (46 crop pages)',
  '🌾 Database 🌽 All Crops (43 entries) 🌰 Seed Shop & Prices 💫 Mutation System & Multipliers 🐾 Pet Catalog',
];

export default function Why() {
  return (
    <section id="why" className="section overflow-x-clip bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Why Use This {gameName} Guide</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {config.seo.siteDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  className="flex items-start space-x-2"
                >
                  <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{reason}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {obsidianCoverage.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {useCases.map((uc) => (
              <div key={uc.label} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <span className="inline-block text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                  {uc.label}
                </span>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{uc.heading}</h4>
                <p className="text-gray-600 dark:text-gray-300">{uc.body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
