import React, { useState } from 'react';
import { mainFaqsList } from '../data/faqsData';
import { ChevronDown, ArrowLeft } from 'lucide-react';

interface FaqSectionProps {
  onNavigateFaq?: () => void;
  limit?: number;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onNavigateFaq,
  limit = 5,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqsToShow = mainFaqsList.slice(0, limit);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F4F1EC] border-b border-[#E5E0D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              پاسخ شفاف به دغدغه‌های متداول
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug">
              پرسش‌های متداول پیش از شروع جلسات
            </h2>
          </div>

          {onNavigateFaq && (
            <button
              type="button"
              onClick={onNavigateFaq}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start sm:self-auto cursor-pointer whitespace-nowrap"
            >
              <span>مشاهده همه پرسش‌ها</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="space-y-3">
          {faqsToShow.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#292D2A] leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#344A42] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#555650] leading-[1.9] border-t border-[#E5E0D8]/70">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
