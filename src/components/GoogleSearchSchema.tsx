import React from 'react';

// HTML entity encoding to prevent XSS
function sanitize(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface GoogleSearchSchemaProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  organizationName?: string;
  organizationLogo?: string;
  rating?: number;
  ratingCount?: number;
  price?: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  faqs?: Array<{question: string, answer: string}>;
  features?: Array<string>;
  downloadUrl?: string;
  fileSize?: string;
  operatingSystem?: string;
  applicationCategory?: string;
}

export default function GoogleSearchSchema({
  title = "Fisch Macro roblox[Latest], including V13, V12, Xan V3",
  description = "Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.",
  imageUrl = "https://fischmacroo.com/images/og-image.svg",
  datePublished = "2023-01-01T00:00:00Z",
  dateModified = new Date().toISOString(),
  authorName = "Fisch Macro Team",
  organizationName = "Fisch Macro",
  organizationLogo = "https://fischmacroo.com/favicon.svg",
  rating = 4.8,
  ratingCount = 10000,
  price = "0",
  currency = "USD",
  availability = "InStock",
  faqs = [
    {
      question: "Is Fisch Macro safe to use?",
      answer: "Yes, Fisch Macro is designed with safety in mind. It uses advanced simulation technology to mimic real player operations, making it safe and reliable without posing any risk to your game account."
    },
    {
      question: "How do I install Fisch Macro?",
      answer: "To install Fisch Macro, first download AutoHotkey, then download the Fisch Macro file from our website, right-click on it and select 'Open with AutoHotkey'."
    },
    {
      question: "Which operating systems does Fisch Macro support?",
      answer: "Fisch Macro currently supports Windows 10 and 11. A Mac version (codenamed 'Aurium') is coming soon."
    }
  ],
  features = [
    "Automated Fishing",
    "Scheduled Tasks",
    "Safety Features",
    "Customizable Settings",
    "Resource Optimization",
    "Regular Updates"
  ],
  downloadUrl = "https://fischmacroo.com/download",
  fileSize = "61 KB",
  operatingSystem = "Windows 10, Windows 11",
  applicationCategory = "GameApplication"
}: GoogleSearchSchemaProps) {
  
  // Sanitize ALL props to prevent XSS attacks
  const safeTitle = sanitize(title);
  const safeDescription = sanitize(description);
  const safeAuthorName = sanitize(authorName);
  const safeOrganizationName = sanitize(organizationName);
  const safeOrganizationLogo = sanitize(organizationLogo);
  const safeApplicationCategory = sanitize(applicationCategory);
  const safeOperatingSystem = sanitize(operatingSystem);
  const safeDownloadUrl = sanitize(downloadUrl);
  const safeFileSize = sanitize(fileSize);
  const safeFeatureList = sanitize(features.join(", "));

  // Sanitize FAQ data
  const safeFaqs = faqs.map(faq => ({
    question: sanitize(faq.question),
    answer: sanitize(faq.answer)
  }));

  // 软件应用结构化数据
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": safeTitle,
    "description": safeDescription,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Organization",
      "name": safeAuthorName
    },
    "publisher": {
      "@type": "Organization",
      "name": safeOrganizationName,
      "logo": {
        "@type": "ImageObject",
        "url": safeOrganizationLogo
      }
    },
    "applicationCategory": safeApplicationCategory,
    "operatingSystem": safeOperatingSystem,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": `https://schema.org/${availability}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "ratingCount": ratingCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "downloadUrl": safeDownloadUrl,
    "fileSize": safeFileSize,
    "softwareVersion": "V13",
    "featureList": safeFeatureList
  };

  // FAQ 结构化数据
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": safeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  );
} 