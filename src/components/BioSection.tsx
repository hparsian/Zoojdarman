import React from 'react';
import {
  ShieldCheck,
  GraduationCap,
  Award,
  BookOpen,
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';

interface BioSectionProps {
  onNavigateAbout?: () => void;
  onNavigateProcess?: () => void;
}

export const BioSection: React.FC<BioSectionProps> = ({
  onNavigateAbout,
  onNavigateProcess,
}) => {
  const credentials = [
    {
      icon: ShieldCheck,
      title: 'پروانه اشتغال تخصصی نظام روان‌شناسی',
      desc: 'شماره پروانه رسمی ۱۴۱۴۰۸۳ از سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران.',
    },
    {
      icon: Award,
      title: 'مسئول فنی کلینیک تخصصی پیوند امن',
      desc: 'مدیریت فنی و نظارت بالینی بر پروتکل‌های زوج‌درمانی و مشاوره خانواده در منطقه ۲ تهران.',
    },
    {
      icon: GraduationCap,
      title: 'کارشناس ارشد روان‌شناسی بالینی',
      desc: 'تخصص در زوج‌درمانی هیجان‌مدار (EFT)، متد گاتمن و طرحواره‌درمانی اختلالات ارتباطی.',
    },
    {
      icon: BookOpen,
      title: 'بیش از ۱۲ سال مداخله بالینی مستمر',
      desc: 'بیش از ۱۵٬۰۰۰ ساعت تجربه تخصصی در پرونده‌های خیانت، طلاق عاطفی و تعارض‌های شدید.',
    },
  ];

  const clinicalPillars = [
    {
      step: '۰۱',
      title: 'بی‌طرفی مطلق و پرهیز از قضاوت',
      desc: 'در جلسات زوج‌درمانی، درمانگر قاضی نیست؛ هدف یافتن مقصر نیست، بلکه شناسایی چرخه‌ای است که هر دو همسر را خسته کرده است.',
    },
    {
      step: '۰۲',
      title: 'پروتکل ساختاریافته به جای نصیحت عمومی',
      desc: 'هر جلسه با نقشه راه علمی EFT و ارزیابی کمی پیش می‌رود تا گفت‌وگوها از مشاجره تکراری به پیوند امن عاطفی تبدیل شود.',
    },
    {
      step: '۰۳',
      title: 'تمرکز بر پیگیری میان دو جلسه',
      desc: 'زوجین با تمرین‌های کاربردی و کوتاه‌مدت در خانه مهارت تنظیم هیجان در لحظه بحران را تمرین می‌کنند تا تغییر پایدار بماند.',
    },
  ];

  return (
    <section
      className="py-16 lg:py-24 bg-[#F8F5EE] border-b border-[#E8E2D8]"
      id="bio"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-14">
          {/* Clinician Portrait Column */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[420px] lg:min-h-full rounded-2xl overflow-hidden border border-[#E8E2D8] bg-[#241A35]">
              <img
                src="/images/mahnaz-khoini.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/mahnaz-khoini-thumb.webp';
                }}
                alt="مهناز خوینی کارشناس ارشد روان‌شناسی بالینی و زوج درمانگر"
                width={617}
                height={775}
                loading="lazy"
                decoding="async"
                className="w-full h-full max-h-[540px] lg:max-h-none object-cover object-top"
              />

              <div className="absolute inset-x-0 bottom-0 pt-20 pb-6 px-6 bg-gradient-to-t from-[#241A35]/95 via-[#241A35]/65 to-transparent text-white">
                <div className="text-lg sm:text-xl font-black text-[#FAF5EB] mb-1">
                  مهناز خوینی
                </div>
                <div className="text-xs text-[#E8E2D8] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="tabular-nums">عضویت رسمی سازمان نظام روان‌شناسی · پروانه ۱۴۱۴۰۸۳</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials and Bio Column */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              صلاحیت بالینی و سوابق حرفه‌ای درمانگر
            </span>

            <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] mb-4 leading-tight">
              مهناز خوینی؛ زوج درمانگر تخصصی و مشاور ارشد روابط زناشویی
            </h2>

            <p className="text-sm sm:text-[15px] text-[#4E4858] leading-[2] mb-7 text-justify">
              مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی و مسئول فنی کلینیک تخصصی پیوند امن تهران، با بیش از ۱۲ سال سابقه بالینی مستمر، بر درمان روابط در آستانه فروپاشی، بازسازی اعتماد پس از خیانت و شکستن چرخه‌های فرساینده قهر و پرخاشگری متمرکز است. رویکرد درمانی ایشان تلفیقی از زوج‌درمانی هیجان‌مدار (EFT) و طرحواره‌درمانی است که بدون پیش‌داوری و با حفظ محرمانگی کامل انجام می‌شود.
            </p>

            {/* Credentials 2x2 Architectural Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8E2D8] flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FCFAF8] border border-[#E8E2D8] text-[#3E2F5B] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-black text-[#241A35] mb-1">
                        {cred.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#5E5868] leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%DB%8C%20%D8%AC%D9%84%D8%B3%D9%87%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%D8%A7%20%D8%AE%D8%A7%D9%86%D9%85%20%D8%AE%D9%88%DB%8C%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#241A35] hover:bg-[#3E2F5B] text-white text-xs sm:text-sm font-black px-6 py-4 rounded-xl transition-colors border border-[#C5A059]/35"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>هماهنگی جلسه با مهناز خوینی در واتساپ</span>
              </a>

              <a
                href="/about"
                onClick={(e) => {
                  if (onNavigateAbout) {
                    e.preventDefault();
                    onNavigateAbout();
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white border border-[#E8E2D8] hover:border-[#C5A059] text-[#241A35] text-xs font-extrabold transition-colors"
              >
                <span>رزومه کامل و مدارک علمی</span>
                <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Methodology Pillars (Replaces developer telemetry card) */}
        <div className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-[#E8E2D8]">
            <div>
              <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-1">
                استاندارد علمی جلسات در کلینیک پیوند امن
              </span>
              <h3 className="text-lg sm:text-xl font-black text-[#241A35]">
                تفاوت زوج‌درمانی تخصصی EFT با مشاوره‌های عمومی چیست؟
              </h3>
            </div>
            <a
              href="/process"
              onClick={(e) => {
                if (onNavigateProcess) {
                  e.preventDefault();
                  onNavigateProcess();
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#3E2F5B] hover:text-[#9E7D36] shrink-0"
            >
              <span>مشاهده مراحل ۴ گانه درمان</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:divide-x md:divide-x-reverse md:divide-[#E8E2D8]">
            {clinicalPillars.map((item) => (
              <div key={item.step} className="md:px-6 first:md:pr-0 last:md:pl-0">
                <span className="text-xs font-black text-[#9E7D36] tabular-nums block mb-2">
                  اصل {item.step}
                </span>
                <h4 className="text-sm font-black text-[#241A35] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5E5868] leading-[1.85]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
