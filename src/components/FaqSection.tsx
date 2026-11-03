import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FaqItem } from '../types';
import { registerFaqSchema } from '../seo';
import { mainFaqsList } from '../data/faqsData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = mainFaqsList.map((f) => ({ q: f.q, a: f.a }));

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // داده‌های ساختاریافته پرسش‌وپاسخ صفحه اصلی (JSON-LD FAQPage)
  useEffect(() => registerFaqSchema(faqs), []);

  return (
    <section className="relative py-24 bg-[#FAF8F5] overflow-hidden" id="faq">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A67C2E] uppercase mb-3">
            <span className="w-6 h-px bg-[#C5A059]" />
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>پاسخ به ابهامات مراجعان</span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-4 leading-tight">
            سوالات متداول درباره فرآیند و جلسات زوج درمان
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            پاسخ به پرتکرارترین پرسش‌های مراجعان مرکز زوج درمان درباره نحوه برگزاری جلسات حضوری و آنلاین، اثربخشی و شرایط نوبت‌دهی.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C5A059]/60 shadow-lg ring-1 ring-[#C5A059]/20'
                    : 'border-[#E8DFD5] hover:border-[#C5A059]/40 shadow-xs'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className={`text-sm sm:text-base font-black leading-snug transition-colors ${
                    isOpen ? 'text-[#2A1E35]' : 'text-[#3E3846]'
                  }`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? 'bg-[#2A1E35] text-[#C5A059] rotate-180'
                        : 'bg-[#FAF8F5] text-[#7A7382] border border-[#E8DFD5]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A5265] leading-[2] border-t border-[#F0EAE1] text-justify">
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
