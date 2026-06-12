import React from 'react';
import { FiStar } from 'react-icons/fi';
import { config } from '@/lib/games.config';

const gameName = config.game.name;
const features = config.features;

function renderIcon(idx: number) {
  return <FiStar className="h-8 w-8 text-blue-500" />;
}

export default function Features() {
  return (
    <section id="features" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">
            {gameName} Features
          </h2>
          <p className="subheading">
            Everything this site does to help you get more out of {gameName} — guides, tools,
            and live data, all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{renderIcon(index)}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
