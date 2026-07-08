import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@/lib/games.config';
import type { Metadata } from 'next';

const gameName = config.game.name;

export const metadata: Metadata = {
  title: `Disclaimer`,
  description: `Legal disclaimer for ${gameName} — a fan-made guide and tools hub for Roblox ${gameName}.`,
  alternates: { canonical: `${config.seo.baseUrl}/disclaimer` },
};

export default function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>

          <div className="prose prose-lg max-w-none">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Website Disclaimer</h2>
            <p>
              The information provided by {gameName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on this website (the &quot;Site&quot;) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">External Links Disclaimer</h2>
            <p>
              The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Fair Use Disclaimer</h2>
            <p>
              This Site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to provide information and tools to enhance the gaming experience. We believe this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the US Copyright Law.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Errors and Omissions Disclaimer</h2>
            <p>
              The information given by the Site is for general guidance on matters of interest only. Even if the Site takes every precaution to ensure that the content is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">No Responsibility Disclaimer</h2>
            <p>
              In no event shall the Site be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, please contact us at the email address listed on our site.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
