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
  url = 'https://fischmacroo.com',
  title = 'Fisch Macro - Automation Tool for Roblox Fisch Game',
  description = 'Fisch Macro is an automation tool designed specifically for the Fisch game on the Roblox platform, helping players improve game efficiency and experience.',
  className = '',
  iconSize = 32,
  round = true
}: ShareButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <FacebookShareButton url={url} hashtag="#FischMacro" className="p-1">
        <FacebookIcon size={iconSize} round={round} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} className="p-1">
        <TwitterIcon size={iconSize} round={round} />
      </TwitterShareButton>

      <LinkedinShareButton url={url} title={title} summary={description} className="p-1">
        <LinkedinIcon size={iconSize} round={round} />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title} className="p-1">
        <WhatsappIcon size={iconSize} round={round} />
      </WhatsappShareButton>

      <RedditShareButton url={url} title={title} className="p-1">
        <RedditIcon size={iconSize} round={round} />
      </RedditShareButton>

      <TelegramShareButton url={url} title={title} className="p-1">
        <TelegramIcon size={iconSize} round={round} />
      </TelegramShareButton>

      <WeiboShareButton url={url} title={title} className="p-1">
        <WeiboIcon size={iconSize} round={round} />
      </WeiboShareButton>
    </div>
  );
} 