'use client';

import Link from 'next/link';

type BreadcrumbSegment = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  segments: BreadcrumbSegment[];
};

export default function Breadcrumbs({ segments }: BreadcrumbsProps) {
  return (
    <>
      <nav aria-label="Breadcrumbs" className="mb-4 text-sm text-gray-500 dark:text-gray-400">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
          </li>
          {segments.map((segment, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {index === segments.length - 1 ? (
                <span className="text-gray-900 dark:text-white">{segment.label}</span>
              ) : (
                <Link href={segment.href} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {segment.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: '/',
              },
              ...segments.map((segment, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: segment.label,
                item: segment.href,
              })),
            ],
          }),
        }}
      />
    </>
  );
}
