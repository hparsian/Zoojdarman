import React, { useEffect } from 'react';
import { services } from '../data/services';
import { ProfessionalCredentialsSummaryCard } from './ProfessionalCredentialsSummaryCard';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  MessageSquare,
  Sparkles,
  Users,
  HeartCrack,
  Flame,
  Globe
} from 'lucide-react';

interface ServicesArchiveViewProps {
  onBack: () => void;
  onSelectService: (slug: string) => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
}

export const ServicesArchiveView: React.FC<ServicesArchiveViewProps> = ({
  onBack,
  onSelectService,
  onNavigateContact,
  onNavigateTools,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
          <span className="text-[#6D5AA8] font-bold">خدمات تخصصی</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-[#8FAF9B]/30">
            پروتکل‌های بالینی مبتنی بر شواهد
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-3">
            خدمات تخصصی زوج‌درمانی و مشاوره روابط
          </h1>
          <p className="text-xs sm:text-base text-[#6F6B78] leading-relaxed">
            رویکردهای بالینی استاندارد با جلسات حضوری در کلینیک پیوند امن (تهران) و جلسات آنلاین برای مراجعان سراسر جهان.
          </p>
        </div>

        <ProfessionalCredentialsSummaryCard />

        {/* Services List */}
        <div className="space-y-6 mb-16">
          {services.map((s, idx) => (
            <div
              key={s.slug}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E0EA] hover:border-[#6D5AA8] shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <span className="text-xs font-bold text-[#8FAF9B] mb-1 block">
                  خدمت شماره ۰{idx + 1}
                </span>
                <h2 className="text-lg sm:text-xl font-black text-[#292733] mb-2">
                  {s.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-4 text-justify">
                  {s.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-[#6D5AA8]">
                  <span>تعداد سوالات متداول پروتکل: {s.faqs.length} پاسخ</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0">
                <a
                  href={`/services/${s.slug}`}
                  onClick={(e) => { e.preventDefault(); onSelectService(s.slug); }}
                  className="px-6 py-3 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-full font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>مشاهده جزئیات کامل خدمت</span>
                  <ChevronLeft className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/989199087264?text=${encodeURIComponent(
                    `سلام، برای دریافت نوبت خدمت «${s.title}» پیام می‌دهم.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#FAF8F5] hover:bg-[#f2eff8] text-[#44386B] border border-[#E5E0EA] rounded-full font-bold text-xs transition-all text-center"
                >
                  رزرو وقت در واتساپ
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guidance Callout */}
        <div className="bg-[#F2EFF8] p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] text-center">
          <h3 className="text-base font-black text-[#44386B] mb-2">
            نمی‌دانید کدام خدمت مناسب وضعیت کنونی شماست؟
          </h3>
          <p className="text-xs text-[#6F6B78] mb-5 max-w-lg mx-auto">
            با شرکت در آزمون آنلاین رایگان ارزیابی رابطه، در ۳ دقیقه وضعیت بالینی رابطه‌تان ارزیابی شده و خدمت متناسب به شما پیشنهاد می‌شود.
          </p>
          <button
            onClick={onNavigateTools}
            className="px-6 py-3 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-full font-bold text-xs shadow-md transition-all cursor-pointer"
          >
            شروع تست آنلاین سلامت رابطه (انریچ)
          </button>
        </div>
      </div>
    </div>
  );
};
