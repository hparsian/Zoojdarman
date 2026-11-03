import React from 'react';
import {
  MessageSquare,
  HeartCrack,
  Scale,
  Globe,
  Users,
  Brain,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (slug: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8E2D8]" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black text-[#C5A059] uppercase tracking-wider block mb-2">
              خدمات تخصصی بالینی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              حوزه‌های درمان و پروتکل‌های بالینی رابطه
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-3 leading-relaxed">
              پروتکل‌های درمانی مبتنی بر شواهد علمی دانشگاهی در مرکز زوج درمان برای توقف بحران و احیای پیوند عاطفی.
            </p>
          </div>

          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              onSelectService('couples-therapy');
            }}
            className="inline-flex items-center gap-2 text-xs font-black text-[#3E2F5B] hover:text-[#241A35] py-2 px-4 rounded-full border border-[#E8E2D8] hover:border-[#3E2F5B]/40 bg-[#FAF5EB] transition-all cursor-pointer shrink-0 self-start md:self-end"
          >
            <span>مشاهده همه خدمات تخصصی</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bento Card 1: Flagship Marquee (Col-Span 2 on lg) */}
          <article
            onClick={() => onSelectService('couples-therapy')}
            className="lg:col-span-2 bg-gradient-to-br from-[#241A35] via-[#2D2142] to-[#3E2F5B] text-white rounded-3xl p-8 sm:p-10 shadow-[0_15px_35px_-10px_rgba(36,26,53,0.3)] border border-[#C5A059]/30 relative overflow-hidden flex flex-col justify-between group cursor-pointer"
          >
            {/* Ambient Background Watermark/Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-radial from-[#C5A059]/20 to-transparent rounded-full pointer-events-none blur-2xl" />

            <div className="relative z-10 mb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1 bg-[#C5A059] text-[#241A35] rounded-full text-[11px] font-black inline-flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  <span>پروتکل طلایی مرکز زوج درمان</span>
                </span>
                <div className="flex items-center gap-2">
                  <img
                    src="/images/mahnaz-khoini-thumb.webp"
                    alt="مهناز خوینی"
                    loading="lazy"
                    decoding="async"
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded-full object-cover border border-[#C5A059]"
                  />
                  <span className="text-xs text-white/90 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>نظارت بالینی مهناز خوینی</span>
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-[#FAF5EB] mb-4 leading-snug">
                زوج درمان و زوج‌درمانی هیجان‌مدار (EFT)
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-2xl text-justify mb-6">
                شکستن چرخه‌های فرسایشی دعوا، توقف خشم و سرزنش‌های سطحی و رمزگشایی از نیازهای دلبستگی ناگفته. این رویکرد بین‌المللی با ۸ الی ۱۲ جلسه، امنیت و صمیمیت از دست رفته رابطه را بازمی‌گرداند.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                  <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>حل مشاجرات مکرر مالی، خانوادگی و زناشویی</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-white/90">
                  <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>رهایی از الگوی تعقیب‌کننده و گریزنده</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-black text-[#FAF5EB]">
              <span className="group-hover:text-[#C5A059] transition-colors">
                مشاهده فرآیند درمان، پیش‌نیازها و رزرو جلسه
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C5A059] group-hover:text-[#241A35] flex items-center justify-center transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
            </div>
          </article>

          {/* Bento Card 2: Infidelity Counseling (Col-Span 1) */}
          <article
            onClick={() => onSelectService('infidelity-counseling')}
            className="bg-[#FCFAF8] hover:bg-white rounded-3xl p-7 border border-[#E8E2D8] hover:border-[#D9846A]/50 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(36,26,53,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FBF1ED] text-[#D9846A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <HeartCrack className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#D9846A] bg-[#FBF1ED] px-2.5 py-0.5 rounded-full inline-block mb-2">
                ترومای رابطه
              </span>
              <h3 className="text-lg font-black text-[#241A35] mb-2 leading-snug group-hover:text-[#3E2F5B] transition-colors">
                مشاوره تخصصی درمان خیانت
              </h3>
              <p className="text-xs text-[#5E5868] leading-relaxed mb-5">
                مدیریت شوک اولیه کشف خیانت، شفافیت رادیکال و بازسازی گام‌به‌گام اعتماد آسیب‌دیده با پروتکل علمی ۳ مرحله‌ای.
              </p>
              <ul className="space-y-1.5 text-xs text-[#231F2D] font-bold mb-6">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>تثبیت بحران بدون تصمیم‌گیری شتاب‌زده</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>التیام زخم‌های عاطفی و نشخوار ذهنی</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D8] text-xs font-black text-[#3E2F5B]">
              <span>مطالعه پروتکل ۳ مرحله‌ای</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C5A059]" />
            </div>
          </article>

          {/* Bento Card 3: Divorce Counseling (Col-Span 1) */}
          <article
            onClick={() => onSelectService('divorce-counseling')}
            className="bg-[#FCFAF8] hover:bg-white rounded-3xl p-7 border border-[#E8E2D8] hover:border-[#3E2F5B]/40 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(36,26,53,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F2EEF8] text-[#3E2F5B] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#3E2F5B] bg-[#F2EEF8] px-2.5 py-0.5 rounded-full inline-block mb-2">
                تصمیم‌گیری آگاهانه
              </span>
              <h3 className="text-lg font-black text-[#241A35] mb-2 leading-snug group-hover:text-[#3E2F5B] transition-colors">
                مشاوره طلاق آگاهانه و کاهش آسیب
              </h3>
              <p className="text-xs text-[#5E5868] leading-relaxed mb-5">
                ارزیابی قطعی بودن تصمیم جدایی، بررسی آخرین شانس‌های بقای رابطه و صیانت از سلامت روان فرزندان در طلاق.
              </p>
              <ul className="space-y-1.5 text-xs text-[#231F2D] font-bold mb-6">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>کاهش آسیب عاطفی بر کودکان</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>جدایی محترمانه بدون کینه و جنگ</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D8] text-xs font-black text-[#3E2F5B]">
              <span>جزئیات مشاوره طلاق</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C5A059]" />
            </div>
          </article>

          {/* Bento Card 4: Online Counseling (Col-Span 1) */}
          <article
            onClick={() => onSelectService('online-counseling')}
            className="bg-[#FCFAF8] hover:bg-white rounded-3xl p-7 border border-[#E8E2D8] hover:border-[#4E7A66]/40 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(36,26,53,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EEF5F1] text-[#4E7A66] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#4E7A66] bg-[#EEF5F1] px-2.5 py-0.5 rounded-full inline-block mb-2">
                دسترسی جهانی
              </span>
              <h3 className="text-lg font-black text-[#241A35] mb-2 leading-snug group-hover:text-[#3E2F5B] transition-colors">
                مشاوره آنلاین برای خارج از کشور
              </h3>
              <p className="text-xs text-[#5E5868] leading-relaxed mb-5">
                جلسات آنلاین ویدئویی با همان پروتکل‌های استاندارد حضوری، منطبق با منطقه زمانی شما در هر کجای دنیا.
              </p>
              <ul className="space-y-1.5 text-xs text-[#231F2D] font-bold mb-6">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>پلتفرم امن گوگل میت و واتساپ تصویری</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>هماهنگی با اختلاف ساعت کشورها</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D8] text-xs font-black text-[#3E2F5B]">
              <span>رزرو جلسه بین‌المللی</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C5A059]" />
            </div>
          </article>

          {/* Bento Card 5: Premarital (Col-Span 1) */}
          <article
            onClick={() => onSelectService('premarital-counseling')}
            className="bg-[#FCFAF8] hover:bg-white rounded-3xl p-7 border border-[#E8E2D8] hover:border-[#C5A059]/40 shadow-xs hover:shadow-[0_12px_28px_-6px_rgba(36,26,53,0.08)] hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] text-[#C5A059] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-[#C5A059] bg-[#FAF5EB] px-2.5 py-0.5 rounded-full inline-block mb-2">
                پیشگیری و ارزیابی
              </span>
              <h3 className="text-lg font-black text-[#241A35] mb-2 leading-snug group-hover:text-[#3E2F5B] transition-colors">
                مشاوره پیش از ازدواج و تست‌ها
              </h3>
              <p className="text-xs text-[#5E5868] leading-relaxed mb-5">
                سنجش تناسب شخصیتی با تست‌های نئو و انریچ، بررسی خط قرمزها و پیشگیری از تنش‌های مالی و خانوادگی پیش از عقد.
              </p>
              <ul className="space-y-1.5 text-xs text-[#231F2D] font-bold mb-6">
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>ارزیابی تناسب طرحواره‌های شخصیتی</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#4E7A66]" />
                  <span>مرزبندی هوشمندانه با خانواده پدری</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#E8E2D8] text-xs font-black text-[#3E2F5B]">
              <span>برنامه جلسات پیش از ازدواج</span>
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#C5A059]" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
