import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { readObsidianMarkdown } from '@/lib/obsidian-content';

type ObsidianArticleProps = {
  source: string;
  className?: string;
};

const headingClass = 'font-semibold text-gray-900 dark:text-white';
const textClass = 'text-gray-700 dark:text-gray-300 leading-relaxed';

export default function ObsidianArticle({ source, className = '' }: ObsidianArticleProps) {
  const markdown = readObsidianMarkdown(source);

  if (!markdown) return null;

  return (
    <section className={`max-w-4xl mx-auto rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-8 ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <h2 className={`${headingClass} mt-0 mb-4 text-3xl`}>{children}</h2>,
          h2: ({ children }) => <h2 className={`${headingClass} mt-8 mb-4 text-2xl`}>{children}</h2>,
          h3: ({ children }) => <h3 className={`${headingClass} mt-6 mb-3 text-xl`}>{children}</h3>,
          p: ({ children }) => <p className={`${textClass} mb-4`}>{children}</p>,
          ul: ({ children }) => <ul className={`${textClass} mb-4 list-disc space-y-2 pl-6`}>{children}</ul>,
          ol: ({ children }) => <ol className={`${textClass} mb-4 list-decimal space-y-2 pl-6`}>{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="mb-4 border-l-4 border-blue-300 bg-blue-50 px-4 py-3 text-gray-700 dark:border-blue-700 dark:bg-blue-950/30 dark:text-gray-300">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm text-gray-900 dark:bg-gray-900 dark:text-gray-100">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="mb-4 overflow-x-auto rounded-md bg-gray-950 p-4 text-sm text-gray-100">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 hover:underline dark:text-blue-400">
              {children}
              {href ? <span className="sr-only"> {href}</span> : null}
            </a>
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src ?? ''}
              alt={alt ?? ''}
              loading="lazy"
              className="mb-4 h-auto max-w-full rounded-md border border-gray-200 dark:border-gray-700"
            />
          ),
          table: ({ children }) => (
            <div className="mb-4 overflow-x-auto rounded-md border border-gray-200 dark:border-gray-700">
              <table className="w-full text-left text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-gray-100 dark:bg-gray-700">{children}</thead>,
          th: ({ children }) => <th className="px-4 py-3 font-semibold">{children}</th>,
          td: ({ children }) => <td className="border-t border-gray-200 px-4 py-3 dark:border-gray-700">{children}</td>,
        }}
      >
        {markdown}
      </ReactMarkdown>
    </section>
  );
}
