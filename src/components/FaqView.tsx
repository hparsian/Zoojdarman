import React, { useState, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { registerFaqSchema } from '../seo';
import { mainFaqsList, ExtendedFaqItem } from '../data/faqsData';
import { InnerPageTopBar } from './InnerPageTopBar';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface FaqViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
}

export const FaqView: React.FC<FaqViewProps> = ({
  onBack,
  onNavigateContact,
  onNavigateTools,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: ExtendedFaqItem[] = mainFaqsList;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return registerFaqSchema(faqs.map((f) => ({ q: f.q, a: f.a })));
  }, [faqs]);

  const categories = [
    { id: 'all', label: 'همه سوالات' },
    { id: 'sessions', label: 'تعداد جلسات و هزینه' },
    { id: 'infidelity', label: 'خیانت و بازسازی اعتماد' },
    { id: 'online', label: 'مشاوره آنلاین' },
    { id: 'divorce', label: 'طلاق و جدایی' },
    { id: 'general', label: 'عمومی و پیش از ازدواج' },
  ];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCat = activeCategory === 'all' || f.category === activeCategory;
    const matchesSearch =
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-4xl"
      />

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-[#6B6D67] mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#344A42] cursor-pointer"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">سوالات متداول</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            پاسخ‌های شفاف به دغدغه‌های مراجعان
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-4">
            پرسش‌های متداول درباره زوج‌درمانی
          </h1>
          <p className="text-xs sm:text-base text-[#555650] leading-relaxed">
            پاسخ به پرتکرارترین پرسش‌ها پیرامون شیوه برگزاری جلسات، طول درمان، خیانت و مشاوره آنلاین توسط مهناز خوینی.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="relative mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو در سوالات متداول..."
              aria-label="جستجو در سوالات متداول"
              className="w-full px-5 py-3.5 pr-12 bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl text-xs sm:text-sm font-medium text-[#292D2A] focus:border-[#344A42] focus:outline-none"
            />
            <Search className="w-5 h-5 text-[#6B6D67] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer border ${
                  activeCategory === c.id
                    ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                    : 'bg-[#FCFBF8] text-[#555650] hover:bg-[#ECE7DF] border-[#E5E0D8]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? 'bg-[#FCFBF8] border-[#344A42]'
                    : 'bg-[#FCFBF8] border-[#E5E0D8] hover:border-[#8FAE9B]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-xs sm:text-base font-bold text-[#292D2A] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#344A42] text-[#FCFBF8]' : 'bg-[#F4F1EC] text-[#344A42]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-3 text-xs sm:text-sm text-[#555650] leading-[1.9] border-t border-[#E5E0D8] text-justify">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Support Callout */}
        <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8] text-center">
          <h2 className="text-base font-extrabold text-[#292D2A] mb-2">
            سوال دیگری دارید که در اینجا پاسخ داده نشده؟
          </h2>
          <p className="text-xs text-[#555650] mb-5">
            بخش پذیرش کلینیک پاسخگوی کلیه پرسش‌های شما درباره نوبت‌دهی و شرایط جلسات است.
          </p>
          <button
            type="button"
            onClick={onNavigateContact}
            className="px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs transition-colors cursor-pointer"
          >
            تماس با بخش پذیرش کلینیک
          </button>
        </div>

        <StandaloneSeoGuide routeKey="faq" skipFaqSchema />
      </div>
    </div>
  );
};
