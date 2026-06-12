'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { config } from '@/lib/games.config';

const gameName = config.game.name;

const reasons = [
  `Up-to-date guides and tools for ${gameName}`,
  'Accurate information verified by the community',
  'All tools run in your browser — no downloads needed',
  'Updated regularly to match the latest game patches',
  'Beginner-friendly content that helps you get started fast',
  'Comprehensive tier lists and calculators to optimize your gameplay',
];

export default function Why() {
  return (
    <section id="why" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Why Choose {gameName}</h2>
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Alex R.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Roblox Player</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                &quot;This site has everything I need — codes, tier lists, and guides all in one place.
                The calculator is especially useful.&quot;
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sam K.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gaming Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                &quot;I come back every week for the updated codes. The tier list helped me figure out
                which items are worth my time.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
