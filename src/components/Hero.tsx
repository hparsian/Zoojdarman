import React from 'react';
import {
  MessageSquare,
  Compass,
  ShieldCheck,
  Lock,
  Award,
  Sparkles,
  ChevronLeft,
  HeartHandshake,
  HeartCrack,
  Flame,
  Globe
} from 'lucide-react';

interface HeroProps {
  onScrollToAssessment: () => void;
  onScrollToTools: () => void;
  onSelectService?: (slug: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToAssessment,
  onScrollToTools,
  onSelectService,
}) => {
  const pathways = [
    {
      title: 'آزمون آنلاین سلامت رابطه',
      desc: 'سنجش شاخص انریچ و ۴ سوارکار طلاق با تحلیل بالینی فوری',
      actionText: 'شروع آزمون رایگان',
      icon: Compass,
      color: '#3E2F5B',
      bgColor: '#F2EEF8',
      onClick: onScrollToTools,
    },
    {
      title: 'زوج درمان دعوای مکرر',
      desc: 'شکستن چرخه معیوب تعارض و قهر با متد هیجان‌مدار (EFT)',
      actionText: 'مشاهده پروتکل درمان',
      icon: Flame,
      color: '#C5A059',
      bgColor: '#FAF5EB',
      onClick: () => onSelectService && onSelectService('couples-therapy'),
    },
    {
      title: 'مشاوره خیانت و اعتماد',
      desc: 'پروتکل علمی ۳ مرحله‌ای برای مدیریت شوک و ترمیم پیوند',
      actionText: 'مشاهده جزئیات خدمت',
      icon: HeartCrack,
      color: '#D9846A',
      bgColor: '#FBF1ED',
      onClick: () => onSelectService && onSelectService('infidelity-counseling'),
    },
    {
      title: 'مشاوره آنلاین خارج از کشور',
      desc: 'هماهنگی جلسات تصویری امن با منطقه زمانی ایرانیان جهان',
      actionText: 'رزرو جلسه بین‌المللی',
      icon: Globe,
      color: '#4E7A66',
      bgColor: '#EEF5F1',
      onClick: () => onSelectService && onSelectService('online-counseling'),
    },
  ];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#FCFAF8] border-b border-[#E8E2D8]">
      {/* Ambient luxury light aura */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-radial from-[#C5A059]/10 via-[#3E2F5B]/5 to-transparent rounded-full pointer-events-none blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-radial from-[#8FAF9B]/10 to-transparent rounded-full pointer-events-none blur-2xl" />

      <div className="container-custom relative z-10">
        {/* Main 2-Column Split: Value Proposition vs Clinician Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mb-16">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-3.5 sm:px-4 py-2 rounded-full border border-[#E8E2D8] text-[11px] sm:text-xs font-bold text-[#241A35] mb-4 sm:mb-6 shadow-xs max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] luxury-pulse-gold shrink-0" />
              <span>پذیرش مراجعان جدید · حضوری تهران و آنلاین</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black leading-[1.6] sm:leading-[1.4] text-[#241A35] mb-3 sm:mb-4">
              زوج‌درمان؛{' '}
              <span className="text-[#3E2F5B] inline-block border-b-4 border-[#C5A059]/40 pb-1">
                مرکز تخصصی زوج‌درمانی بالینی
              </span>{' '}
              و مشاوره زناشویی
            </h1>

            {/* Sub-headline */}
            <h2 className="text-base sm:text-xl lg:text-2xl font-extrabold text-[#5E5868] leading-[1.8] sm:leading-[1.6] mb-5 sm:mb-6">
              بازسازی اعتماد، دلبستگی امن و صمیمیت پایدار در رابطه
            </h2>

            {/* Lead Paragraph */}
            <p className="text-sm sm:text-base leading-[2.1] sm:leading-[2.2] text-[#5E5868] mb-5 max-w-2xl text-right sm:text-justify">
              هدایت شده توسط <strong>مهناز خوینی</strong> (کارشناس ارشد روان‌شناسی بالینی، متخصص زوج درمان با رویکرد هیجان‌مدار EFT و مسئول فنی کلینیک پیوند امن تهران با پروانه نظام روانشناسی ۱۴۱۴۰۸۳). پایان دادن به چرخه‌های فرسایشی دعوا، التیام ترومای خیانت، احیای صمیمیت جنسی و تصمیم‌گیری آگاهانه درباره طلاق با متدهای شواهدنگر جهانی.
            </p>

            {/* Quick Keyword Links for Google SEO and instant visitor navigation */}
            <div className="flex flex-wrap items-center gap-2 mb-7 text-xs">
              <span className="text-[#8A8494] font-bold text-[11px] ml-1">دسترسی سریع:</span>
              <a
                href="/best-couples-therapist-tehran"
                className="px-2.5 py-1 bg-[#F2EEF8] hover:bg-[#3E2F5B] text-[#3E2F5B] hover:text-white border border-[#6D5AA8]/30 rounded-lg font-black text-[11px] transition-all"
              >
                ⭐ بهترین زوج درمانگر تهران و آنلاین
              </a>
              <a
                href="/articles/what-is-couples-therapy"
                className="px-2.5 py-1 bg-white hover:bg-[#F2EEF8] text-[#3E2F5B] border border-[#E8E2D8] hover:border-[#6D5AA8]/40 rounded-lg font-bold text-[11px] transition-colors"
              >
                زوج درمانی چیست؟
              </a>
              <a
                href="/articles/online-couples-therapist"
                className="px-2.5 py-1 bg-white hover:bg-[#F2EEF8] text-[#3E2F5B] border border-[#E8E2D8] hover:border-[#6D5AA8]/40 rounded-lg font-bold text-[11px] transition-colors"
              >
                زوج درمانگر آنلاین
              </a>
              <a
                href="/articles/couples-therapy-shiraz"
                className="px-2.5 py-1 bg-white hover:bg-[#FAF5EB] text-[#A67C2E] border border-[#E8E2D8] hover:border-[#C5A059]/40 rounded-lg font-bold text-[11px] transition-colors"
              >
                زوج درمانگر شیراز
              </a>
              <a
                href="/articles/couples-therapy-mashhad"
                className="px-2.5 py-1 bg-white hover:bg-[#EEF5F1] text-[#3E6B56] border border-[#E8E2D8] hover:border-[#3E6B56]/40 rounded-lg font-bold text-[11px] transition-colors"
              >
                زوج درمانگر مشهد
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onScrollToTools}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#241A35] hover:bg-[#3E2F5B] text-white font-black text-xs sm:text-sm px-7 py-4 rounded-full shadow-[0_12px_30px_-8px_rgba(36,26,53,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer border border-[#C5A059]/40"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>شروع آزمون آنلاین سلامت رابطه (تحلیل رایگان)</span>
              </button>

              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF5EB] text-[#241A35] font-extrabold text-xs sm:text-sm px-6 py-4 rounded-full border border-[#E8E2D8] shadow-xs hover:-translate-y-0.5 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#3E2F5B]" />
                <span>رزرو وقت در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>
            </div>

            {/* Clinical Trust Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-6 border-t border-[#E8E2D8] w-full text-xs font-bold text-[#5E5868]">
              <div className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4E7A66]" />
                <span>پروانه نظام روان‌شناسی: ۱۴۱۴۰۸۳</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#4E7A66]" />
                <span>محرمانگی ۱۰۰٪ جلسات پزشکی</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Award className="w-4 h-4 text-[#4E7A66]" />
                <span>بیش از ۱۲ سال سابقه و ۱۵,۰۰۰ ساعت مشاوره</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            <div className="relative bg-white p-3.5 sm:p-4 rounded-3xl shadow-[0_20px_50px_-15px_rgba(36,26,53,0.12)] border border-[#E8E2D8]">
              {/* Photo Frame */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/mahnaz-khoini-thumb.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                  }}
                  alt="مهناز خوینی کارشناس ارشد روانشناسی بالینی و زوج درمانگر مرکز زوج درمان"
                  width={617}
                  height={775}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-top rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Top Badge: License / Credential */}
                <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#241A35]/85 backdrop-blur-md text-white font-bold rounded-xl text-[11px] sm:text-xs border border-[#C5A059]/40 shadow-lg">
                  <Award className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <span>پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳</span>
                </div>

                {/* Subtle Luxury Gradient Overlay at Bottom for Clinician Identity */}
                <div className="absolute inset-x-0 bottom-0 pt-16 pb-3.5 px-4 bg-gradient-to-t from-[#241A35]/95 via-[#241A35]/65 to-transparent pointer-events-none rounded-b-2xl">
                  <div className="flex items-end justify-between text-white gap-2">
                    <div>
                      <span className="block font-black text-base sm:text-lg text-[#FAF5EB] leading-tight mb-0.5">
                        مهناز خوینی
                      </span>
                      <span className="text-[11px] sm:text-xs text-white/85 block">
                        کارشناس ارشد روان‌شناسی بالینی و زوج درمانگر
                      </span>
                    </div>
                    <span className="px-2.5 py-1 bg-[#C5A059] text-[#241A35] font-black rounded-lg text-[10px] sm:text-[11px] shrink-0 shadow-xs">
                      رویکرد EFT
                    </span>
                  </div>
                </div>
              </div>

              {/* Clinic Accreditation Bar (Positioned cleanly below image in flow - no overlap) */}
              <div className="mt-3.5 bg-[#241A35] text-white rounded-2xl p-3 sm:p-3.5 shadow-md border border-[#C5A059]/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-[#FAF5EB] truncate">
                    کلینیک تخصصی پیوند امن تهران
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-white/75 truncate">
                    مرکز تخصصی زوج درمان، حل تعارضات و مشاوره خانواده
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Portal Clinical Pathways (Breaks out of single-page flatness) */}
        <div className="pt-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[11px] font-black text-[#C5A059] uppercase tracking-wider block mb-1">
                درگاه‌های دسترسی تخصصی مراجعان
              </span>
              <h2 className="text-lg sm:text-2xl font-black text-[#241A35]">
                مسیر درمانی متناسب با چالش رابطه شما
              </h2>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-[#5E5868]">
              انتخاب بخش مورد نظر برای ارزیابی و مشاوره
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {pathways.map((path, idx) => {
              const IconComp = path.icon;
              return (
                <div
                  key={idx}
                  onClick={path.onClick}
                  className="bg-white rounded-2xl p-5 border border-[#E8E2D8] hover:border-[#3E2F5B]/40 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(36,26,53,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: path.bgColor, color: path.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-black text-[#241A35] mb-1.5 group-hover:text-[#3E2F5B] transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-xs text-[#5E5868] leading-relaxed mb-4">
                      {path.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F0EBE2] text-[11px] font-extrabold text-[#3E2F5B]">
                    <span>{path.actionText}</span>
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C5A059]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
