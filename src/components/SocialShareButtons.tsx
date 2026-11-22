import React, { useState, useEffect } from 'react';
import {
  Share2,
  Copy,
  Check,
  Send,
  MessageCircle,
  Globe,
} from 'lucide-react';
import {
  updateSocialShareMeta,
  generateShareLinks,
  SocialShareMeta,
} from '../utils/socialShareSeo';

export interface SocialShareButtonsProps {
  meta: SocialShareMeta;
  className?: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ meta, className = '' }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    updateSocialShareMeta(meta);
  }, [meta]);

  const links = generateShareLinks(meta.url, meta.title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(links.copyLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-4 sm:p-5 rounded-xl bg-[#F4F1EC] border border-[#E5E0D8] ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#344A42]">
          <Share2 className="w-4 h-4 text-[#3D5E4E]" />
          <span>اشتراک‌گذاری این راهنما:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FCFBF8] hover:bg-[#EDF2EE] text-[#344A42] border border-[#E5E0D8] text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>واتساپ</span>
          </a>

          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FCFBF8] hover:bg-[#EDF2EE] text-[#344A42] border border-[#E5E0D8] text-xs font-semibold transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>تلگرام</span>
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FCFBF8] hover:bg-[#EDF2EE] text-[#344A42] border border-[#E5E0D8] text-xs font-semibold transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>لینکدین</span>
          </a>

          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FCFBF8] hover:bg-[#EDF2EE] text-[#344A42] border border-[#CFC7BA] text-xs font-semibold transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#3D5E4E]" />
                <span>کپی شد</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>کپی لینک</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
