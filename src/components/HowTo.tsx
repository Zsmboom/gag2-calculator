'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { config } from '@/lib/games.config';

const gameName = config.game.name;

export default function HowTo() {
  return (
    <section id="how-to" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            How to Play {gameName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Three things every new {gameName} farmer needs to know — planting, mutations, and
            surviving the night.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 mb-10"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Step-by-Step Guide
          </h3>

          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Step 1: Plant your first crops</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Start with <strong>Carrot</strong> (1 Sheckle) for fast first cash, then rush{' '}
                <strong>Bamboo</strong> (700 Sheckles) — it can be planted densely and pairs
                perfectly with weather-triggered mutations. <strong>Romanesco</strong> (99 Sheckles)
                has the best ROI in the game at 15×. The Seed Shop restocks every 4–5 minutes.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Step 2: Master mutations &amp; weather</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Mutations are <strong>mutually exclusive</strong> in {gameName} — only one applies
                per crop. Wait for a <strong>Thunderstorm</strong> to proc Electric (×70), or time
                your harvest for a <strong>Blood Moon</strong> for Bloodlit (×80). Frost on pre-soaked
                crops gives Frozen (×40). Sprinklers increase crop weight, which scales value
                exponentially.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Step 3: Defend at night &amp; join a guild</h4>
              <p className="text-gray-600 dark:text-gray-300">
                The 10-minute day/night cycle includes a 2-minute night phase where other players can
                loot your unattended garden. Harvest high-value crops before logging off, deploy
                defensive pets (Bee, Gnome) and gear (Vine Wrapper, Freeze Ray), or use a private
                server for 100% safety. Join a guild for weekly leaderboard rewards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
