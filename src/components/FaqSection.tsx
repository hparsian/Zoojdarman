import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ArrowLeft } from 'lucide-react';
import { FaqItem } from '../types';
import { registerFaqSchema } from '../seo';
import { mainFaqsList } from '../data/faqsData';

interface FaqSectionProps {
  onNavigateFaq?: () => void;
  limit?: number;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onNavigateFaq, limit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const allFaqs: FaqItem[] = mainFaqsList.map((f) => ({ q: f.q, a: f.a }));
  const displayFaqs = limit ? allFaqs.slice(0, limit) : allFaqs;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useEffect(() => registerFaqSchema(displayFaqs), [limit]);

  return (
    <section className="py-16 lg:py-24 bg-[#F8F5EE] border-b border-[#E8E2D8]" id="faq">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Editorial Header Column */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              پاسخ به پرسش‌های متداول مراجعان
            </span>
            <h2 className="balance-text text-2xl sm:text-3xl font-black text-[#241A35] mb-4 leading-tight">
              سوالات پرتکرار درباره جلسات حضوری و آنلاین زوج‌درمانی
            </h2>
            <p className="text-sm text-[#5E5868] leading-[1.9] mb-6">
              تمامی جزئیات مربوط به تعداد جلسات، نحوه حضور هر دو یا یک نفر از زوجین، محرمانگی اطلاعات و تعرفه مصوب نظام روان‌شناسی در این بخش پاسخ داده شده است.
            </p>

            {limit && onNavigateFaq && (
              <a
                href="/faq"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateFaq();
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF5EB] text-[#241A35] font-black text-xs px-5 py-3 rounded-xl border border-[#E8E2D8] hover:border-[#C5A059] transition-colors cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#9E7D36]" />
                <span className="tabular-nums">مشاهده تمام سوالات متداول ({allFaqs.length})</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
              </a>
            )}
          </div>

          {/* Clean Accordion Column */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {displayFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-xl border transition-colors overflow-hidden ${
                    isOpen ? 'border-[#C5A059]' : 'border-[#E8E2D8] hover:border-[#C5A059]/60'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-[#241A35] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9E7D36] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#4E4858] leading-[1.95] border-t border-[#F0EBE2] text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
