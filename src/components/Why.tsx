"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const reasons = [
  'Optimized specifically for Fisch game, providing the best gaming experience',
  'Safe and reliable, using advanced simulation technology',
  'Regular updates to ensure compatibility with game versions',
  'Rich customization options to meet different needs',
  'User-friendly interface, simple and easy to use',
  'Professional technical support to solve your problems',
  'Active user community to share experiences and tips',
  'Efficient resource collection to accelerate game progress'
];

export default function Why() {
  return (
    <section id="why" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading">Why Choose Our Fisch Macro</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our Fisch Macro is the most professional, safest, and most efficient Fisch game assistance tool currently on the market, providing you with an excellent gaming experience.
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

          {/* Testimonials/Reviews */}
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
                  <span className="text-blue-600 dark:text-blue-400 font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">John D.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experienced Fisch Player</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                &quot;After using Fisch Macro, my game efficiency increased by 200%! No longer need to spend a lot of time on repetitive tasks, can focus on other interesting parts of the game.&quot;
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Mike S.</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Roblox Gaming Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                &quot;This is the best Fisch Macro I&apos;ve used, with a friendly interface, powerful features, and most importantly, very safe. I&apos;ve been using it for over a year without any issues.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 