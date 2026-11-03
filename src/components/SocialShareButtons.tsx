import React, { useState, useEffect } from 'react';
import {
  Share2,
  Copy,
  Check,
  Send,
  MessageCircle,
  Globe
} from 'lucide-react';
import {
  updateSocialShareMeta,
  generateShareLinks,
  SocialShareMeta
} from '../utils/socialShareSeo';

export interface SocialShareButtonsProps {
  meta: SocialShareMeta;
  className?: string;
}

export const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ meta, className = '' }) => {
  const [copied, setCopied] = useState(false);

  // Dynamically update Open Graph & Twitter Card tags when component mounts or meta changes
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
    <div className={`p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E0EA] ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-black text-[#44386B]">
          <Share2 className="w-4 h-4 text-[#6D5AA8]" />
          <span>اشتراک‌گذاری و ارسال این مطلب در شبکه‌های اجتماعی:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* WhatsApp */}
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="اشتراک در واتساپ"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-xs font-bold transition-all border border-[#25D366]/30"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
            <span>واتساپ</span>
          </a>

          {/* Telegram */}
          <a
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            title="اشتراک در تلگرام"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] text-xs font-bold transition-all border border-[#0088cc]/30"
          >
            <Send className="w-3.5 h-3.5" />
            <span>تلگرام</span>
          </a>

          {/* Twitter / X */}
          <a
            href={links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="اشتراک در توییتر / X"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] text-xs font-bold transition-all border border-[#1DA1F2]/30"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X / توییتر</span>
          </a>

          {/* LinkedIn */}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="اشتراک در لینکدین"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] text-xs font-bold transition-all border border-[#0A66C2]/30"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>لینکدین</span>
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#f2eff8] text-[#44386B] border border-[#E5E0EA] text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-600">کپی شد</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#6D5AA8]" />
                <span>کپی لینک</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
