import React, { useEffect, useState } from 'react';
import { ChevronDown, HelpCircle, BookOpenCheck } from 'lucide-react';
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
      className={`container-custom ${maxWidthClass} mt-12 mb-8 space-y-8`}
    >
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs">
        <div className="inline-flex items-center gap-2 bg-[#FAF5EB] text-[#A67C2E] border border-[#C5A059]/30 px-3.5 py-1 rounded-full text-xs font-black mb-4">
          <BookOpenCheck className="w-4 h-4 text-[#C5A059]" />
          <span>راهنمای تخصصی و علمی کلینیک پیوند امن (نظام ۱۴۱۴۰۸۳)</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-[#241A35] mb-6 leading-snug">
          {entry.heading}
        </h2>

        <div
          className="article-rendered-content text-sm sm:text-base text-[#292733] leading-[2.05] space-y-5"
          dangerouslySetInnerHTML={{ __html: entry.bodyHtml }}
        />
      </div>

      {!skipFaqSchema && entry.faqs && entry.faqs.length > 0 && (
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs">
          <h2 className="text-lg sm:text-xl font-black text-[#241A35] mb-5 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#6D5AA8]" />
            <span>پرسش‌های متداول تکمیلی</span>
          </h2>

          <div className="space-y-3">
            {entry.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen
                      ? 'bg-[#FCFAF8] border-[#6D5AA8] shadow-xs'
                      : 'bg-white border-[#E5E0EA] hover:border-[#6D5AA8]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-black text-[#292733] leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen
                          ? 'rotate-180 bg-[#6D5AA8] text-white'
                          : 'bg-[#FAF8F5] text-[#6D5AA8]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#5E5868] leading-relaxed border-t border-[#E5E0EA]/60 text-justify"
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
