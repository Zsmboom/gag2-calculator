import React from 'react';

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
  title = "",
  description = "",
  imageUrl = "",
  datePublished = "",
  dateModified = "",
  authorName = "",
  organizationName = "",
  organizationLogo = "",
  rating = 4.5,
  ratingCount = 100,
  price = "0",
  currency = "USD",
  availability = "InStock",
  faqs = [],
  features = [],
  downloadUrl = "",
  fileSize = "",
  operatingSystem = "",
  applicationCategory = "GameApplication"
}: GoogleSearchSchemaProps) {
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
  const safeFaqs = faqs.map(faq => ({
    question: sanitize(faq.question),
    answer: sanitize(faq.answer)
  }));

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": safeTitle,
    "description": safeDescription,
    "image": imageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": { "@type": "Organization", "name": safeAuthorName },
    "publisher": {
      "@type": "Organization",
      "name": safeOrganizationName,
      "logo": { "@type": "ImageObject", "url": safeOrganizationLogo }
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
    "featureList": safeFeatureList
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": safeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      {safeTitle && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      )}
      {safeFaqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
