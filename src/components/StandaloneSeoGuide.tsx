import React, { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getStandaloneSeo } from '../data/standaloneSeoContent';
import { registerFaqSchema } from '../seo';

interface StandaloneSeoGuideProps {
  routeKey: string;
  skipFaqSchema?: boolean;
  maxWidthClass?: string;
}

export const StandaloneSeoGuide: React.FC<StandaloneSeoGuideProps> = ({
  routeKey,
  skipFaqSchema = false,
  maxWidthClass = 'max-w-4xl',
}) => {
  const entry = getStandaloneSeo(routeKey);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!entry || skipFaqSchema || !entry.faqs || entry.faqs.length === 0) return;
    return registerFaqSchema(entry.faqs);
  }, [routeKey, skipFaqSchema, entry]);

  if (!entry) return null;

  return (
    <section
      aria-label="راهنمای تخصصی و سوالات متداول"
      className={`container-custom ${maxWidthClass} py-12 space-y-8`}
    >
      <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8]">
        <span className="text-xs font-semibold text-[#3D5E4E] block mb-2">
          راهنمای جامع بالینی کلینیک پیوند امن · پروانه نظام ۱۴۱۴۰۸۳
        </span>

        <h2 className="balance-text text-xl sm:text-2xl font-extrabold text-[#292D2A] mb-6 leading-snug">
          {entry.heading}
        </h2>

        <div
          className="article-rendered-content text-sm sm:text-base text-[#292D2A] leading-[2.05] space-y-5"
          dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}
        />
      </div>

      {!skipFaqSchema && entry.faqs && entry.faqs.length > 0 && (
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8]">
          <h2 className="text-lg sm:text-xl font-extrabold text-[#292D2A] mb-5 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#344A42]" />
            <span>پرسش‌های متداول تکمیلی</span>
          </h2>

          <div className="space-y-3">
            {entry.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-colors ${
                    isOpen
                      ? 'bg-[#F4F1EC] border-[#8FAE9B]'
                      : 'bg-[#FCFBF8] border-[#E5E0D8] hover:border-[#8FAE9B]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#292D2A] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#344A42] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#555650] leading-[1.9] border-t border-[#E5E0D8] text-justify"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
