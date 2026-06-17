'use client';

import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  WeiboShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
  WeiboIcon
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  description: string;
  className?: string;
  iconSize?: number;
  round?: boolean;
}

export default function ShareButtons({
  url = '',
  title = '',
  description = '',
  className = '',
  iconSize = 32,
  round = true
}: ShareButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <FacebookShareButton url={url} className="p-1" aria-label="Share on Facebook">
        <FacebookIcon size={iconSize} round={round} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} className="p-1" aria-label="Share on X (Twitter)">
        <TwitterIcon size={iconSize} round={round} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} summary={description} className="p-1" aria-label="Share on LinkedIn">
        <LinkedinIcon size={iconSize} round={round} />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title} className="p-1" aria-label="Share on WhatsApp">
        <WhatsappIcon size={iconSize} round={round} />
      </WhatsappShareButton>

      <RedditShareButton url={url} title={title} className="p-1" aria-label="Share on Reddit">
        <RedditIcon size={iconSize} round={round} />
      </RedditShareButton>

      <TelegramShareButton url={url} title={title} className="p-1" aria-label="Share on Telegram">
        <TelegramIcon size={iconSize} round={round} />
      </TelegramShareButton>

      <WeiboShareButton url={url} title={title} className="p-1" aria-label="Share on Weibo">
        <WeiboIcon size={iconSize} round={round} />
      </WeiboShareButton>
    </div>
  );
}
