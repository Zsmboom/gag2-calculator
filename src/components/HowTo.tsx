'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';
import { config } from '@/lib/games.config';

const gameName = config.game.name;

/**
 * HowTo 使用指南组件
 *
 * 注意：此文件是占位模板，包含通用分段结构。
 * 新建游戏站时，将各步骤的内容替换为该游戏真实的使用/玩法指南。
 */
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
            How to Use {gameName}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Follow this step-by-step guide to get started with {gameName}.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8 mb-10"
        >
          <div className="flex items-start bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg mb-8">
            <FiAlertCircle className="text-amber-500 h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
            <p className="text-gray-700 dark:text-gray-200 text-sm">
              This guide provides general instructions. Replace this notice with game-specific setup information.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            Step-by-Step Guide
          </h3>

          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Step 1: Getting Started</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Replace this section with the first step of your game guide. Include clear, actionable instructions
                that help players get started quickly.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Step 2: Core Mechanics</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Replace this section with the core mechanics or key features players need to understand.
                Explain how the main gameplay loop works.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Step 3: Tips & Tricks</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Replace this section with useful tips, shortcuts, or strategies that help players
                progress faster and avoid common mistakes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
