import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { registerFaqSchema } from '../seo';
import { mainFaqsList, ExtendedFaqItem } from '../data/faqsData';

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
    // داده‌های ساختاریافته پرسش‌وپاسخ صفحه (JSON-LD FAQPage)
    registerFaqSchema(faqs.map((f) => ({ q: f.q, a: f.a })));
  }, []);

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
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </a>

          <div className="flex items-center text-lg font-black text-[#44386B]" dir="ltr">
            <span>Z</span>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <span>jdarman.ir</span>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">سوالات متداول</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-[#f2eff8] text-[#6D5AA8] text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-[#6D5AA8]/20">
            پاسخ‌های شفاف به دغدغه‌های مراجعان
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-4">
            پرسش‌های متداول درباره زوج‌درمانی
          </h1>
          <p className="text-xs sm:text-base text-[#6F6B78] leading-relaxed">
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
              className="w-full px-5 py-3.5 pr-12 bg-white border border-[#E5E0EA] rounded-2xl text-xs sm:text-sm font-medium text-[#292733] focus:border-[#6D5AA8] focus:outline-none shadow-xs"
            />
            <Search className="w-5 h-5 text-[#8e8a96] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#6D5AA8] text-white'
                    : 'bg-white text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
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
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-[#6D5AA8] shadow-sm ring-1 ring-[#6D5AA8]/20'
                    : 'bg-white/80 border-[#E5E0EA] hover:border-[#6D5AA8]/40'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-xs sm:text-base font-black text-[#292733] leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] flex items-center justify-center text-[#6D5AA8] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#6D5AA8] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#6F6B78] leading-relaxed border-t border-[#E5E0EA]/50 text-justify">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Support Callout */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] text-center shadow-xs">
          <h3 className="text-base font-black text-[#44386B] mb-2">
            سوال دیگری دارید که در اینجا پاسخ داده نشده؟
          </h3>
          <p className="text-xs text-[#6F6B78] mb-5">
            همکاران بخش پذیرش در پیام‌رسان واتساپ پاسخگوی کلیه ابهامات شما درباره نوبت‌دهی و شرایط جلسات هستند.
          </p>
          <button
            onClick={onNavigateContact}
            className="px-6 py-3 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-full font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            تماس با بخش پذیرش کلینیک
          </button>
        </div>
      </div>
    </div>
  );
};
