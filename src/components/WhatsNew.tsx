'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhatsNew() {
  const updates = [
    {
      title: 'Mega Moon Update',
      description: 'Blue moon night event added Jun 27. Mega Seeds can create giant non-limited crop variants; exact value data is still TBD.',
      link: '/mega-moon/',
      date: 'Jun 27',
    },
    {
      title: 'Pet Catalog Expanded',
      description: '7 new pets added (Bunny, Robin, Monkey, Unicorn, Raccoon, Black Dragon, Ice Serpent). All prices sourced from Beebom.',
      link: '/pets/',
      date: null,
    },
    {
      title: 'Mutation Multipliers Corrected',
      description: 'Electric ×70→×25, Frozen ×40→×3, Rainbow ×30→×10, verified against Beebom data.',
      link: '/mutations/',
      date: null,
    },
    {
      title: 'Turtle Pet Added',
      description: 'Shadow dropped Jun 24. +10 backpack, -2 walk speed. 70K🪙.',
      link: '/pets/',
      date: null,
    },
    {
      title: 'Picture Frame Crate',
      description: 'Customizable banner props via Roblox decal IDs.',
      link: '/updates/',
      date: 'Jun 25',
    },
    {
      title: 'Strawberry Sniper Gear',
      description: 'New gear item, fires strawberry projectiles to knock back thieves.',
      link: '/gear/',
      date: 'Jun 22',
    },
  ];

  return (
    <section id="whats-new" className="section bg-white dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            🆕 What&apos;s New
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Latest updates and additions to the GAG2 guide.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg p-6 md:p-8"
        >
          <div className="space-y-4">
            {updates.map((update, index) => (
              <div key={index} className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
                      <Link
                        href={update.link}
                        className="hover:text-primary dark:hover:text-primary-light transition-colors"
                      >
                        {update.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {update.description}
                    </p>
                  </div>
                  {update.date && (
                    <span className="text-xs text-gray-400 dark:text-gray-400 whitespace-nowrap">
                      {update.date}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
