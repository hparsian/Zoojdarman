import React from 'react';
import { MessageSquare, Compass, ShieldCheck, Lock, Award } from 'lucide-react';

interface HeroProps {
  onScrollToAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToAssessment }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#FAF8F5]">
      {/* Background glow decoration */}
      <div className="absolute -top-32 -left-28 w-[500px] h-[500px] bg-radial from-[#6D5AA8]/10 to-transparent rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-radial from-[#8FAF9B]/15 to-transparent rounded-full pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 bg-white px-4 py-1.5 rounded-full border border-[#E5E0EA] text-xs font-extrabold text-[#44386B] mb-6 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FAF9B] pulse-dot ring-2 ring-[#8FAF9B]/30" />
              <span>پذیرش مراجع جدید (حضوری تهران / آنلاین سراسر جهان)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-black leading-[1.32] text-[#44386B] mb-6 tracking-tight">
              زوج‌درمانی و مشاوره تخصصی{' '}
              <span className="text-[#6D5AA8] block sm:inline">روابط عاطفی و زناشویی</span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg leading-[1.9] text-[#6F6B78] mb-8 max-w-2xl text-justify">
              پایان دادن به چرخه‌های فرسایشی دعوا، التیام ترومای خیانت، احیای صمیمیت جنسی و تصمیم‌گیری آگاهانه درباره طلاق با رویکرد علمی هیجان‌مدار (EFT) و طرحواره‌درمانی توسط مهناز خوینی، مسئول فنی کلینیک پیوند امن.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D9%87%D9%85%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%88%D9%82%D8%AA%20%D8%B1%D8%B2%D8%B1%D9%88%20%DA%A9%D9%86%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#6D5AA8] hover:bg-[#44386B] text-white font-black text-sm px-7 py-3.5 rounded-full shadow-[0_10px_26px_-6px_rgba(109,90,168,0.35)] hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>رزرو وقت مشاوره در واتساپ</span>
              </a>

              <button
                onClick={onScrollToAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f2eff8] text-[#44386B] font-extrabold text-sm px-6 py-3.5 rounded-full border border-[#6D5AA8] shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#6D5AA8]" />
                <span>ارزیابی وضعیت رابطه شما</span>
              </button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E0EA] w-full text-xs font-bold text-[#6F6B78]">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5e826b]" />
                <span>پروانه اشتغال تخصصی نظام روان‌شناسی: ۱۴۱۴۰۸۳</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#5e826b]" />
                <span>محرمانگی ۱۰۰٪ جلسات بالینی</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Award className="w-4 h-4 text-[#5e826b]" />
                <span>رویکرد علمی استاندارد EFT و طرحواره‌درمانی</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            <div className="relative bg-white p-4 rounded-3xl shadow-xl border border-[#E5E0EA]">
              <img
                src="/images/mahnaz-khoini-thumb.webp"
                onError={(e) => {
                  // fallback to jpg if webp fails
                  (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                }}
                alt="مهناز خوینی زوج‌درمانگر و مشاور خانواده"
                className="w-full h-[440px] sm:h-[480px] object-cover object-top rounded-2xl"
              />

              {/* Float Top Tag */}
              <div className="absolute top-8 left-0 bg-[#44386B]/90 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 -translate-x-3">
                <span className="w-2 h-2 rounded-full bg-[#8FAF9B]" />
                <span>پذیرش حضوری و آنلاین</span>
              </div>

              {/* Float Bottom Badge */}
              <div className="absolute -bottom-5 right-2 left-2 sm:left-auto sm:-right-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E5E0EA] flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-[#292733]">مهناز خوینی (کارشناس ارشد بالینی)</h4>
                  <p className="text-[11px] text-[#6F6B78] font-bold">مسئول فنی کلینیک پیوند امن | پروانه ۱۴۱۴۰۸۳</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
