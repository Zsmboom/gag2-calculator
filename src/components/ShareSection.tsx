'use client';

import React from 'react';
import ShareButtons from './ShareButtons';

export default function ShareSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Share with Friends</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            If you find Fisch Macro helpful, please share it with your friends and other Roblox Fisch game players!
          </p>
        </div>
        
        <div className="flex justify-center">
          <ShareButtons 
            url="https://fischmacroo.com" 
            title="Fisch Macro - Automation Tool for Roblox Fisch Game" 
            description="Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience."
            className="justify-center"
            iconSize={40}
          />
        </div>
      </div>
    </section>
  );
} 