import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Picture from '@/components/Picture';

export const metadata: Metadata = {
  title: 'About Us | Fisch Macro - Automation Macro Tool for Roblox Fisch Game',
  description: 'Learn about the team behind Fisch Macro, an automation tool for Roblox Fisch game.',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">About Fisch Macro</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Picture 
                      src="/images/about/team-working.svg" 
                      alt="Our team working on Fisch Macro" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Fisch Macro was born out of a passion for gaming and a desire to enhance the Roblox Fisch game experience. Our journey began in 2022 when a group of dedicated Fisch players came together with a shared vision: to create a tool that would automate repetitive tasks and allow players to focus on the more enjoyable aspects of the game.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    What started as a small project among friends quickly grew into a widely-used tool within the Fisch gaming community. As more players discovered the benefits of our macro, we continued to refine and improve it based on user feedback and suggestions.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Today, Fisch Macro is used by thousands of players worldwide, and we remain committed to our original mission: providing a safe, reliable, and user-friendly automation tool that enhances the Fisch gaming experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    At Fisch Macro, our mission is to enhance the gaming experience by providing tools that automate repetitive tasks, allowing players to focus on the more enjoyable aspects of the game. We believe that gaming should be fun and accessible to everyone, regardless of their time constraints or physical limitations.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We are committed to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Developing safe and reliable automation tools</li>
                    <li>Continuously improving our products based on user feedback</li>
                    <li>Providing excellent support to our community</li>
                    <li>Fostering a positive and inclusive gaming environment</li>
                    <li>Respecting the terms of service of the games we support</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Picture 
                      src="/images/about/mission.svg" 
                      alt="Our mission" 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-6">Meet the Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Picture 
                      src="/images/team/john-doe.svg" 
                      alt="John Doe" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Founder & Lead Developer</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Passionate gamer and programmer with over 10 years of experience in software development.
                  </p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Picture 
                      src="/images/team/jane-smith.svg" 
                      alt="Jane Smith" 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">Community Manager</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Dedicated to building and supporting the Fisch Macro community, ensuring users have the best experience possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Educational Disclaimer */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-yellow-50 dark:bg-yellow-900/30 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                ⚠️ Note: Using scripts violates Roblox&apos;s rules. This guide is for learning only – real fun comes from playing fairly! 🎮
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 