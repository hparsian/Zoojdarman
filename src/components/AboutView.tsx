import React, { useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
  Building,
  CheckCircle2,
  MessageSquare,
  Phone,
  MapPin,
  Calendar,
  HeartHandshake,
  BookOpen,
  Sparkles
} from 'lucide-react';

import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface AboutViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onBack,
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
          <span className="text-[#6D5AA8] font-bold">درباره مهناز خوینی</span>
        </nav>

        {/* Bio Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center">
              <div className="relative inline-block mx-auto">
                <img
                  src="/images/mahnaz-khoini.jpg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/mahnaz-khoini-thumb.webp';
                  }}
                  alt="مهناز خوینی زوج‌درمانگر"
                  width={617}
                  height={775}
                  decoding="async"
                  className="w-48 h-56 sm:w-56 sm:h-64 object-cover object-top rounded-3xl border-4 border-[#FAF8F5] shadow-lg mx-auto"
                />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#44386B] text-white text-[11px] font-black px-4 py-1.5 rounded-full whitespace-nowrap shadow">
                  پروانه نظام: ۱۴۱۴۰۸۳
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-3.5 py-1.5 rounded-full mb-3 border border-[#8FAF9B]/30">
                زوج‌درمانگر و مشاور خانواده
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-2">
                مهناز خوینی
              </h1>
              <p className="text-xs sm:text-sm font-bold text-[#6D5AA8] mb-4">
                کارشناس ارشد روانشناسی بالینی | مسئول فنی کلینیک تخصصی پیوند امن
              </p>
              <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-6 text-justify">
                با بیش از ۱۲ سال تجربه بالینی متمرکز در حوزه زوج‌درمانی هیجان‌مدار (EFT)، مداخله در ترومای خیانت، سکس‌تراپی و طرحواره‌درمانی اختلالات روابط. هدف من کمک به همسران برای خروج از چرخه‌های فرسایشی مشاجره و بازیابی امنیت، اعتماد و صمیمیت پایدار است.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%D8%A7%20%D8%AE%D8%A7%D9%86%D9%85%20%D8%AE%D9%88%DB%8C%D9%86%DB%8C%20%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D8%B3%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%AF%D8%A7%D8%B1%D9%85."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs font-black px-5 py-3 rounded-full shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>رزرو وقت در واتساپ</span>
                </a>
                <button
                  onClick={onNavigateTools}
                  className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#f2eff8] text-[#44386B] border border-[#E5E0EA] text-xs font-bold px-5 py-3 rounded-full transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#E8A58D]" />
                  <span>انجام تست آنلاین رابطه</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials & Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Academic & Licensure */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#edf5f0] text-[#5e826b] flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#44386B] mb-3">
              مدارک تحصیلی و مجوزهای رسمی
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#6F6B78]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5e826b] mt-0.5 shrink-0" />
                <span>پروانه رسمی اشتغال تخصصی از سازمان نظام روان‌شناسی و مشاوره ایران (شماره پروانه: ۱۴۱۴۰۸۳)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5e826b] mt-0.5 shrink-0" />
                <span>کارشناس ارشد روانشناسی بالینی با پایان‌نامه پژوهشی در حوزه سبک‌های دلبستگی و رضایت زناشویی</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5e826b] mt-0.5 shrink-0" />
                <span>مسئول فنی و سرپرست تیم درمان کلینیک روان‌شناسی پیوند امن تهران</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#5e826b] mt-0.5 shrink-0" />
                <span>عضو انجمن روانشناسی ایران و انجمن بین‌المللی روان‌درمانی خانواده</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Specialized Clinical Training */}
          <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-[#44386B] mb-3">
              دوره‌های تخصصی بین‌المللی
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#6F6B78]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5AA8] mt-0.5 shrink-0" />
                <span>دوره جامع زوج‌درمانی هیجان‌مدار (EFT - بر اساس پروتکل دکتر سو جانسون)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5AA8] mt-0.5 shrink-0" />
                <span>دوره پیشرفته طرحواره‌درمانی روابط (Schema Therapy - پروتکل جفری یانگ)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5AA8] mt-0.5 shrink-0" />
                <span>مداخله در بحران ترومای خیانت زناشویی و بازسازی اعتماد ۳ مرحله‌ای</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#6D5AA8] mt-0.5 shrink-0" />
                <span>پروتکل‌های تشخیصی و مداخله در سکس‌تراپی و بهبود صمیمیت زناشویی</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO & Schema.org Certification Summary Card */}
        <div className="mb-12">
          <SeoCertificationSummaryCard />
        </div>

        {/* Treatment Philosophy */}
        <div className="bg-[#F2EFF8] p-6 sm:p-10 rounded-3xl border border-[#E5E0EA] mb-12">
          <h2 className="text-lg sm:text-xl font-black text-[#44386B] mb-4">
            رویکرد و فلسفه درمانی مهناز خوینی
          </h2>
          <p className="text-xs sm:text-sm text-[#292733] leading-relaxed mb-4 text-justify">
            «در جلسات درمانی من، هیچ‌یک از طرفین به عنوان مقصر یا متهم پای میز محاکمه نشانده نمی‌شوند. دعواهای مکرر، قهر، یا حتی سردی عاطفی علائمی از یک چرخه منفی ناخودآگاه هستند که هر دو نفر در آن به دام افتاده‌اند. با شناخت نیازهای دلبستگی برآورده‌نشده و توقف تحقیر و سرزنش، پیوند عاطفی ایمن دوباره شکل می‌گیرد.»
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E0EA]">
            <div className="bg-white p-4 rounded-2xl text-center">
              <span className="text-xl font-black text-[#6D5AA8] block mb-1">EFT</span>
              <span className="text-xs font-bold text-[#6F6B78]">زوج‌درمانی هیجان‌مدار</span>
            </div>
            <div className="bg-white p-4 rounded-2xl text-center">
              <span className="text-xl font-black text-[#5e826b] block mb-1">طرحواره</span>
              <span className="text-xs font-bold text-[#6F6B78]">شناسایی تله‌های رابطه</span>
            </div>
            <div className="bg-white p-4 rounded-2xl text-center">
              <span className="text-xl font-black text-[#E8A58D] block mb-1">Gottman</span>
              <span className="text-xs font-bold text-[#6F6B78]">حذف ۴ ویرانگر رابطه</span>
            </div>
          </div>
        </div>

        {/* Practice Locations & Contact Callout */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] text-[#6D5AA8] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-[#44386B] mb-1">
                کلینیک حضوری تهران و پذیرش آنلاین
              </h4>
              <p className="text-xs text-[#6F6B78]">
                تهران، منطقه ۲ (کلینیک تخصصی پیوند امن) | جلسات آنلاین تصویری در واتساپ و گوگل میت
              </p>
            </div>
          </div>

          <button
            onClick={onNavigateContact}
            className="w-full sm:w-auto px-6 py-3 bg-[#6D5AA8] hover:bg-[#44386B] text-white rounded-full font-bold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            اطلاعات تماس و رزرو جلسه
          </button>
        </div>

        <StandaloneSeoGuide routeKey="about" />
      </div>
    </div>
  );
};
