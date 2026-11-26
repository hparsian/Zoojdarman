import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Compass,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onScrollToAssessment?: () => void;
  onScrollToTools?: () => void;
  onSelectService?: (slug: string) => void;
  onNavigateBestTherapist?: () => void;
  onNavigateContact?: () => void;
}

const CONCERN_PATHS = [
  {
    slug: 'couples-therapy',
    title: 'تعارض و فاصله عاطفی',
    hint: 'وقتی گفت‌وگوها تکراری یا سرد شده',
  },
  {
    slug: 'infidelity-counseling',
    title: 'خیانت و آسیب اعتماد',
    hint: 'مدیریت شوک و تصمیم‌گیری آگاهانه',
  },
  {
    slug: 'premarital-counseling',
    title: 'مشاوره پیش از ازدواج',
    hint: 'شناخت ارزش‌ها و سبک ارتباطی',
  },
  {
    slug: 'divorce-counseling',
    title: 'تردید در طلاق یا ادامه',
    hint: 'رسیدن به وضوح بدون فشار یا قضاوت',
  },
];

export const Hero: React.FC<HeroProps> = ({
  onScrollToTools,
  onSelectService,
  onNavigateBestTherapist,
  onNavigateContact,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      className="relative bg-[#F4F1EC] border-b border-[#E5E0D8] overflow-hidden"
    >
      {/* Architectural calm spatial backdrop behind clinician gallery column on desktop */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 w-[39%] bg-[#ECE7DF]/55 border-r border-[#E5E0D8]/80 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Right Column (7 cols): Empathetic Copy, Primary Action & Direct Pathways */}
          <div className="lg:col-span-7 text-right flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold text-[#3D5E4E] mb-4">
              کلینیک تخصصی زوج‌درمانی و روان‌شناسی روابط · حضوری تهران و آنلاین
            </p>

            <h1 className="balance-text text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-[#292D2A] leading-[1.3] mb-6 max-w-2xl">
              گاهی مشکل، نبودنِ عشق نیست؛
              <span className="block text-[#344A42] mt-2">
                ناتوانی در شنیدنِ یکدیگر است.
              </span>
            </h1>

            <p className="text-base sm:text-[17px] text-[#555650] leading-[1.9] max-w-xl mb-8">
              اگر میان بحث‌های تکراری، سکوت طولانی یا تردید پس از آسیب اعتماد مانده‌اید،
              اینجا فضایی امن، بی‌طرف و بدون قضاوت برای شنیده‌شدن هر دو نفر است — با هدایت{' '}
              <strong className="font-semibold text-[#292D2A]">مهناز خوینی</strong>،
              زوج‌درمانگر بالینی و درمانگر رویکرد شناختی-رفتاری (CBT / CBCT).
            </p>

            {/* Primary & Secondary Action Row */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-9">
              <button
                type="button"
                onClick={() => {
                  if (onNavigateContact) {
                    onNavigateContact();
                  } else {
                    scrollTo('contact');
                  }
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>رزرو جلسه ارزیابی</span>
              </button>

              <button
                type="button"
                onClick={() => scrollTo('services')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg border border-[#CFC7BA] bg-[#FCFBF8] hover:bg-[#ECE7DF] text-[#344A42] text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>آشنایی با خدمات تخصصی</span>
                <ArrowLeft className="w-4 h-4 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onScrollToTools) {
                    onScrollToTools();
                  } else {
                    scrollTo('tools');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-[#3D5E4E] hover:text-[#273932] transition-colors cursor-pointer whitespace-nowrap"
              >
                <Compass className="w-4 h-4 shrink-0" />
                <span>خودسنجی آنلاین رابطه</span>
              </button>
            </div>

            {/* Interactive Concern Pathways (Functional entry points, zero static pills) */}
            <div className="pt-6 border-t border-[#E5E0D8]">
              <p className="text-xs font-semibold text-[#555650] mb-3">
                مسیر سریع متناسب با دغدغه فعلی شما:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CONCERN_PATHS.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => {
                      if (onSelectService) {
                        onSelectService(item.slug);
                      } else {
                        scrollTo('services');
                      }
                    }}
                    className="group flex items-center justify-between gap-3 px-4 py-3 rounded-lg bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#344A42] text-right transition-colors cursor-pointer"
                  >
                    <div className="min-w-0">
                      <span className="block text-xs sm:text-sm font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-[11px] text-[#6E6E68] mt-0.5 truncate">
                        {item.hint}
                      </span>
                    </div>
                    <ArrowLeft className="w-4 h-4 text-[#8FAE9B] group-hover:text-[#344A42] group-hover:-translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Left Column (5 cols): Editorial Framed Clinician Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none flex flex-col">
              {/* Warm architectural sand backing offset */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute inset-0 rounded-2xl bg-[#D8CBB9]/45 -translate-x-2.5 translate-y-2.5 pointer-events-none"
              />

              <div className="relative flex-1 flex flex-col bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-4 sm:p-5">
                <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:flex-1 lg:min-h-[520px] overflow-hidden rounded-xl bg-[#ECE7DF]">
                  <img
                    src="/images/mahnaz-khoini-thumb.webp"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                    }}
                    alt="مهناز خوینی — کارشناس ارشد روان‌شناسی بالینی و زوج‌درمانگر"
                    width={617}
                    height={775}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full lg:absolute lg:inset-0 object-cover object-top"
                  />

                  {/* Measured contrast scrim at bottom edge only */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#1D2B26]/85 via-[#1D2B26]/35 to-transparent pointer-events-none"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-right text-[#FCFBF8]">
                    <p className="text-base sm:text-lg font-extrabold leading-snug">
                      مهناز خوینی
                    </p>
                    <p className="text-xs sm:text-sm text-[#E5E0D8] mt-0.5">
                      کارشناس ارشد روان‌شناسی بالینی · زوج‌درمانگر شناختی-رفتاری (CBCT)
                    </p>
                  </div>
                </div>

                {/* Clean hairline credential footer inside gallery frame */}
                <div className="pt-4 mt-1 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-[#555650]">
                    {/* Two-hearts brand connection signature */}
                    <svg
                      viewBox="0 0 54 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z"
                        fill="#2f5c57"
                      />
                      <g transform="translate(22, 0)">
                        <path
                          d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z"
                          fill="#c77b58"
                        />
                      </g>
                    </svg>
                    <span className="font-semibold text-[#344A42] tabular-nums">
                      پروانه نظام ۱۴۱۴۰۸۳
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNavigateBestTherapist) {
                        onNavigateBestTherapist();
                      } else {
                        scrollTo('bio');
                      }
                    }}
                    className="inline-flex items-center gap-1 font-semibold text-[#3D5E4E] hover:text-[#273932] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>سوابق درمانگر</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Unboxed 4-Column Clinical Trust Ledger below Hero Split */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-[#E5E0D8] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#292D2A] tabular-nums">
                مجوز رسمی نظام روان‌شناسی
              </p>
              <p className="text-xs text-[#555650] mt-1 leading-relaxed tabular-nums">
                شماره پروانه ۱۴۱۴۰۸۳ · مسئول فنی کلینیک پیوند امن
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <BookOpen className="w-4 h-4 text-[#9E563E] shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#292D2A]">
                رویکرد علمی شناختی-رفتاری (CBCT)
              </p>
              <p className="text-xs text-[#555650] mt-1 leading-relaxed">
                شناسایی خطاهای شناختی، اصلاح الگوهای رفتاری و آموزش گفت‌وگوی سازنده
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#292D2A]">
                محرمانگی حرفه‌ای جلسات
              </p>
              <p className="text-xs text-[#555650] mt-1 leading-relaxed">
                رعایت کامل حریم خصوصی و منشور اخلاقی روان‌شناسی
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-1" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#292D2A]">
                حضوری تهران و آنلاین سراسری
              </p>
              <p className="text-xs text-[#555650] mt-1 leading-relaxed">
                تهران، پونک (منطقه ۲) ·{' '}
                <a
                  href="https://maps.app.goo.gl/b9dx9xeA69wJJPzd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#344A42] font-semibold underline underline-offset-4 hover:text-[#273932]"
                >
                  نقشه گوگل
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
