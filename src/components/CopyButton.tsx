'use client';

import { useState } from 'react';

interface CopyButtonProps {
  value: string;
  className?: string;
  label?: string;
}

export default function CopyButton({ value, className = '', label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : `Copy ${value}`}
      className={
        'inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 ' +
        'px-3 py-1.5 text-sm font-medium transition-colors ' +
        'bg-white text-gray-700 hover:bg-gray-50 ' +
        'dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 ' +
        className
      }
    >
      <span aria-live="polite">{copied ? 'Copied!' : label}</span>
    </button>
  );
}
