import React from 'react';
import {
  MessageSquare,
  Compass,
  ShieldCheck,
  Lock,
  Award,
  ArrowLeft,
  MapPin,
} from 'lucide-react';

interface HeroProps {
  onScrollToAssessment: () => void;
  onScrollToTools: () => void;
  onSelectService?: (slug: string) => void;
  onNavigateBestTherapist?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScrollToTools,
  onSelectService,
  onNavigateBestTherapist,
}) => {
  const pathways = [
    {
      index: '۰۱',
      title: 'آزمون آنلاین سلامت رابطه',
      desc: 'سنجش علمی انریچ، ۴ سوارکار طلاق و ترومای خیانت با کارنامه بالینی فوری',
      actionText: 'شروع ارزیابی رایگان',
      href: '/tools',
      onClick: onScrollToTools,
    },
    {
      index: '۰۲',
      title: 'زوج‌درمانی تعارض و سردی',
      desc: 'شکستن چرخه معیوب دعوا، قهر و فاصله عاطفی با پروتکل هیجان‌مدار (EFT)',
      actionText: 'جزئیات زوج‌درمانی',
      href: '/services/couples-therapy',
      onClick: () => onSelectService && onSelectService('couples-therapy'),
    },
    {
      index: '۰۳',
      title: 'مشاوره خیانت و بازسازی اعتماد',
      desc: 'مدیریت شوک پس از کشف پیمان‌شکنی و ترمیم ۳ مرحله‌ای پیوند زناشویی',
      actionText: 'پروتکل درمان خیانت',
      href: '/services/infidelity-counseling',
      onClick: () => onSelectService && onSelectService('infidelity-counseling'),
    },
    {
      index: '۰۴',
      title: 'مشاوره آنلاین سراسر دنیا',
      desc: 'جلسات تصویری امن منطبق با ساعت ایران، اروپا، آمریکا، کانادا و استرالیا',
      actionText: 'رزرو نوبت آنلاین',
      href: '/services/online-counseling',
      onClick: () => onSelectService && onSelectService('online-counseling'),
    },
  ];

  return (
    <section className="relative bg-[#FCFAF8] border-b border-[#E8E2D8] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20">
      <div className="container-custom">
        {/* Main 2-Column Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12 lg:mb-16">
          {/* Narrative & Action Column */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start">
            {/* Editorial Location & Accreditation Kicker (Zero pills / zero pulsing dots) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-bold text-[#5E5868] mb-5 pb-3 border-b border-[#E8E2D8] w-full max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-[#241A35] font-extrabold">
                <MapPin className="w-3.5 h-3.5 text-[#9E7D36]" />
                <span>کلینیک پیوند امن تهران (پونک)</span>
              </span>
              <span className="text-[#B5AFC0]">·</span>
              <span>مشاوره آنلاین سراسری ایران و جهان</span>
              <span className="text-[#B5AFC0]">·</span>
              <span className="text-[#9E7D36] font-extrabold tabular-nums">پروانه نظام ۱۴۱۴۰۸۳</span>
            </div>

            {/* Balanced Main Display H1 */}
            <h1 className="balance-text text-2xl sm:text-4xl lg:text-[2.7rem] font-black leading-[1.35] text-[#241A35] mb-4">
              <span className="block">
                مرکز تخصصی{' '}
                <span className="text-[#3E2F5B] underline decoration-[#C5A059] decoration-[3px] underline-offset-[8px]">
                  زوج درمان
                </span>
              </span>
              <span className="block mt-1.5">زوج‌درمانی با مهناز خوینی</span>
            </h1>

            {/* Concrete Mechanism Sub-headline */}
            <h2 className="balance-text text-sm sm:text-xl font-extrabold text-[#5E5868] leading-[1.7] mb-5">
              بازسازی اعتماد پس از خیانت، رفع طلاق عاطفی و توقف چرخه تعارض با پروتکل علمی EFT
            </h2>

            {/* Clinical Lead Copy */}
            <p className="text-xs sm:text-[15px] leading-[2.05] text-[#4E4858] mb-7 max-w-2xl text-justify">
              حتی در پیچیده‌ترین بحران‌های زناشویی، با مداخله تخصصی یک{' '}
              <a
                href="/best-couples-therapist-tehran"
                onClick={(e) => {
                  if (onNavigateBestTherapist) {
                    e.preventDefault();
                    onNavigateBestTherapist();
                  }
                }}
                className="font-extrabold text-[#241A35] underline decoration-[#C5A059]/70 underline-offset-4 hover:text-[#3E2F5B]"
              >
                زوج درمانگر خوب در تهران
              </a>{' '}
              می‌توان پیوند عاطفی را ترمیم کرد. جلسات زیر نظر <strong>مهناز خوینی</strong> (کارشناس ارشد روان‌شناسی بالینی، مسئول فنی کلینیک پیوند امن و متخصص رویکرد هیجان‌مدار EFT) به‌صورت <strong>حضوری در تهران</strong> و <strong>آنلاین تصویری برای سراسر ایران و ایرانیان مقیم خارج</strong> در فضایی کاملاً محرمانه برگزار می‌شود.
            </p>

            {/* Clear CTA Hierarchy: 1 Primary + 1 Secondary */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8 w-full sm:w-auto">
              <button
                type="button"
                onClick={onScrollToTools}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#241A35] hover:bg-[#3E2F5B] text-white font-black text-xs sm:text-sm px-6 py-4 rounded-xl transition-colors cursor-pointer border border-[#C5A059]/40"
              >
                <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>شروع آزمون رایگان سلامت رابطه</span>
              </button>

              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8F5EE] text-[#241A35] font-extrabold text-xs sm:text-sm px-6 py-4 rounded-xl border border-[#E8E2D8] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#4E7A66] shrink-0" />
                <span>رزرو وقت در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>
            </div>

            {/* Clean Typographic Clinical Trust Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x sm:divide-x-reverse sm:divide-[#E8E2D8] pt-5 border-t border-[#E8E2D8] w-full text-xs font-bold text-[#4E4858]">
              <div className="flex items-center gap-2 sm:pl-4">
                <ShieldCheck className="w-4 h-4 text-[#4E7A66] shrink-0" />
                <span className="tabular-nums">پروانه نظام ۱۴۱۴۰۸۳</span>
              </div>
              <div className="flex items-center gap-2 sm:px-4">
                <Lock className="w-4 h-4 text-[#4E7A66] shrink-0" />
                <span>محرمانگی ۱۰۰٪ جلسات</span>
              </div>
              <div className="flex items-center gap-2 sm:pr-4">
                <Award className="w-4 h-4 text-[#9E7D36] shrink-0" />
                <span className="tabular-nums">۱۵٬۰۰۰+ ساعت مشاوره</span>
              </div>
            </div>
          </div>

          {/* Editorial Clinician Portrait Frame */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[400px] sm:min-h-[470px] lg:min-h-full rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#241A35] shadow-[0_20px_48px_-20px_rgba(36,26,53,0.22)]">
              <img
                src="/images/mahnaz-khoini-thumb.webp"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                }}
                alt="مهناز خوینی کارشناس ارشد روان‌شناسی بالینی و زوج درمانگر مرکز زوج درمان"
                width={617}
                height={775}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full max-h-[540px] lg:max-h-none object-cover object-top"
              />

              {/* Single Grounded Editorial Caption Scrim */}
              <div className="absolute inset-x-0 bottom-0 pt-24 pb-6 px-6 bg-gradient-to-t from-[#241A35]/95 via-[#241A35]/70 to-transparent text-white">
                <div className="flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                  <div>
                    <div className="text-lg sm:text-xl font-black text-[#FAF5EB] leading-snug">
                      مهناز خوینی
                    </div>
                    <div className="text-xs text-[#E8E2D8] mt-0.5">
                      کارشناس ارشد روان‌شناسی بالینی · متخصص EFT و مسئول فنی کلینیک پیوند امن
                    </div>
                  </div>
                  <div className="text-left shrink-0">
                    <span className="block text-[10px] text-[#C5A059] font-extrabold tracking-wide">تلفن پذیرش</span>
                    <a
                      href="tel:02144600980"
                      className="text-xs sm:text-sm font-black text-white hover:text-[#C5A059] tabular-nums"
                      dir="ltr"
                    >
                      021 4460 0980
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Architectural Pathways */}
        <div className="pt-8 border-t border-[#E8E2D8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
            <div>
              <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-1">
                درگاه‌های تخصصی دسترسی سریع
              </span>
              <h2 className="balance-text text-lg sm:text-2xl font-black text-[#241A35]">
                مسیر متناسب با چالش فعلی رابطه خود را انتخاب کنید
              </h2>
            </div>
            <span className="text-xs font-medium text-[#5E5868]">
              ارزیابی اولیه آنلاین یا رزرو مستقیم جلسه بالینی
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pathways.map((path) => (
              <a
                key={path.index}
                href={path.href}
                onClick={(e) => {
                  e.preventDefault();
                  path.onClick();
                }}
                className="group bg-white hover:bg-[#FAF5EB]/55 rounded-xl p-5 border border-[#E8E2D8] hover:border-[#C5A059] transition-colors flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[#F0EBE2]">
                    <span className="text-xs font-black text-[#9E7D36] tabular-nums">{path.index}</span>
                    <ArrowLeft className="w-4 h-4 text-[#B5AFC0] group-hover:text-[#3E2F5B] group-hover:-translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-sm font-black text-[#241A35] group-hover:text-[#3E2F5B] mb-2 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs text-[#5E5868] leading-relaxed mb-4">
                    {path.desc}
                  </p>
                </div>

                <span className="text-[11px] font-extrabold text-[#3E2F5B] group-hover:text-[#9E7D36] transition-colors">
                  {path.actionText}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
