"use client";

import React from 'react';
import { FiStar, FiDownload, FiUsers, FiClock, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface GoogleSearchPreviewProps {
  title?: string;
  description?: string;
  url?: string;
  rating?: number;
  ratingCount?: number;
  downloadCount?: string;
  efficiency?: string;
  support?: string;
  features?: Array<string>;
}

export default function GoogleSearchPreview({
  title = "Site Title",
  description = "Site description goes here.",
  url = "https://example.com",
  rating = 4.5,
  ratingCount = 1000,
  downloadCount = "1,000+",
  efficiency = "High",
  support = "Regular Updates",
  features = [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4",
    "Feature 5",
    "Feature 6"
  ]
}: GoogleSearchPreviewProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FiStar key={i} className="text-yellow-400 fill-current" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FiStar key={i} className="text-yellow-400 fill-current opacity-50" />);
      } else {
        stars.push(<FiStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Google Search Preview</h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <div className="mb-2">
            <h3 className="text-xl font-medium text-blue-600 dark:text-blue-400">{title}</h3>
            <p className="text-green-700 dark:text-green-500 text-sm">{url}</p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center">
              <div className="flex mr-1">{renderStars(rating)}</div>
              <span className="text-gray-600 dark:text-gray-400 text-sm">{rating} ({ratingCount} reviews)</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <FiDownload className="mr-1" />
              <span>{downloadCount} downloads</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <FiClock className="mr-1" />
              <span>{efficiency} efficiency</span>
            </div>

            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <FiUsers className="mr-1" />
              <span>{support}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                <FiCheck className="text-green-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
