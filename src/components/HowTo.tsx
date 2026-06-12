"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiSettings, FiPlay, FiSmartphone, FiAlertCircle } from 'react-icons/fi';
import { FaApple, FaWindows } from 'react-icons/fa';

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
            How to Use Fisch Macro
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="subheading"
          >
            Fisch Macro gives you an advantage in-game through automatic actions. Follow our Fisch Macro guide for a complete Fisch Macro setup.
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
            <FiAlertCircle className="text-amber-500 h-6 w-6 mr-3" />
            <p className="text-gray-700 dark:text-gray-200 italic">
              While Fisch Macro provides automation advantages, we encourage Fisch Macro users to also develop their skills by playing the game manually for the best overall experience with Fisch Macro.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Step-by-Step Fisch Macro Installation Guide</h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <FiDownload className="mr-2 text-blue-600 dark:text-blue-400" /> 
                Step 1: Install AutoHotkey for Fisch Macro
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Double-click on the AutoHotkey installer file to prepare for Fisch Macro</li>
                <li>When prompted, allow file permissions by selecting &quot;yes&quot; for Fisch Macro installation</li>
                <li>Choose &quot;Express Installation&quot; to complete the Fisch Macro setup</li>
                <li>Wait for the installation to complete before using Fisch Macro</li>
              </ol>
              <div className="mt-4">
                <img 
                  src="/images/step1.svg" 
                  alt="Install AutoHotkey for Fisch Macro" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <FiSettings className="mr-2 text-blue-600 dark:text-blue-400" /> 
                Step 2: Configure Roblox Settings for Fisch Macro
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Open your Roblox account and launch the Fisch game for Fisch Macro</li>
                <li>Navigate to game settings within Roblox to optimize for Fisch Macro</li>
                <li>Make sure &quot;UI Navigation Tool&quot; is enabled for Fisch Macro to work properly</li>
                <li><strong>Important:</strong> Fisch Macro will not function properly if this setting is disabled</li>
              </ol>
              <div className="mt-4">
                <img 
                  src="/images/step2.svg" 
                  alt="Configure Roblox Settings for Fisch Macro" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <FiPlay className="mr-2 text-blue-600 dark:text-blue-400" /> 
                Step 3: Run the Fisch Macro
              </h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Right-click on the downloaded Fisch Macro file</li>
                <li>Select &quot;Open with AutoHotkey&quot; from the context menu to launch Fisch Macro</li>
                <li>The Fisch Macro interface will appear on your screen</li>
                <li>You are now ready to start automating your fishing activities with Fisch Macro!</li>
              </ol>
              <div className="mt-4">
                <img 
                  src="/images/step3.svg" 
                  alt="Run the Fisch Macro" 
                  className="rounded-lg shadow-md w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile and Mac Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Mobile Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FiSmartphone className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fisch Macro Mobile Version Status</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I know many of you are waiting for Fisch Macro mobile version and especially for Fisch Macro Android & iOS versions but unfortunately, Fisch Macro for Android and iOS is not officially available right now.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              However, we've created a comprehensive guide on how to use Auto Clicker to achieve similar functionality on Android devices. This alternative method can help Android users automate fishing in the Fisch game.
            </p>
            <div className="mt-6">
              <a 
                href="/How-To-Use-Fisch-Macro-For-Android" 
                className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
              >
                <FiSmartphone className="mr-2" /> 
                Android Guide
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Be cautious of unofficial Fisch Macro tutorials and articles available over the internet that are completely baseless. Following these Fisch Macro tutorials may disrupt your gaming experience.
            </p>
          </motion.div>

          {/* Mac Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <FaApple className="h-6 w-6 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fisch Macro Mac Version Coming Soon</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Good news for Fisch Macro players: Fisch Macro for Mac may be launched by the first week of March. Developers named it Aurium but this Fisch Macro version is not free.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Fisch Macro Mac version may come with a new GUI. Stay tuned to our website for the official Fisch Macro release announcement and Fisch Macro download instructions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-10"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Fisch Macro System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <FaWindows className="h-5 w-5 mr-3 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Fisch Macro Windows Compatibility</p>
                <p className="text-gray-600 dark:text-gray-300">Windows 10 or 11 recommended for Fisch Macro</p>
              </div>
            </div>
            <div className="flex items-start">
              <FiSettings className="h-5 w-5 mr-3 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Required Software for Fisch Macro</p>
                <p className="text-gray-600 dark:text-gray-300">AutoHotkey must be installed for Fisch Macro</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a 
            href="#download" 
            className="btn btn-primary inline-block"
          >
            Download Fisch Macro Now
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
