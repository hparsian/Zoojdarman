import React, { useEffect } from 'react';
import {
  Award,
  GraduationCap,
  CheckCircle2,
  MapPin,
  Calendar,
  Compass,
  ExternalLink,
} from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';
import { ClinicGallery } from './ClinicGallery';
import { PARENT_CLINIC_LINKS } from '../utils/parentClinicLinks';

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
          <span className="text-[#344A42] font-semibold">درباره مهناز خوینی</span>
        </nav>

        {/* Bio Header Card */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-center">
              <div className="inline-block mx-auto">
                <img
                  src="/images/mahnaz-khoini-thumb.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                  }}
                  alt="مهناز خوینی زوج‌درمانگر بالینی"
                  width={617}
                  height={775}
                  decoding="async"
                  className="w-48 h-56 sm:w-52 sm:h-64 object-cover object-top rounded-2xl border border-[#E5E0D8] mx-auto"
                />
                <p className="mt-3 text-xs font-semibold text-[#3D5E4E]">
                  پروانه نظام روان‌شناسی: ۱۴۱۴۰۸۳
                </p>
              </div>
            </div>

            <div className="md:col-span-8">
              <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
                زوج‌درمانگر بالینی و مشاور خانواده
              </p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] mb-2">
                مهناز خوینی
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#344A42] mb-4">
                کارشناس ارشد روان‌شناسی · زوج‌درمانگر بالینی و مسئول فنی کلینیک تخصصی پیوند امن
              </p>
              <p className="text-sm text-[#555650] leading-[1.9] mb-6 text-justify">
                روان‌شناس بالینی و زوج‌درمانگر متمرکز بر رویکرد شناختی-رفتاری (CBT / CBCT)، مداخله در ترومای خیانت،
                سکس‌تراپی و طرحواره‌درمانی روابط. هدف اتاق درمان کمک به همسران برای شناسایی خطاهای شناختی، اصلاح رفتارهای
                فرسایشی و یادگیری مهارت‌های عملی حل مسئله و پیوند پایدار است.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="inline-flex items-center gap-2 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>هماهنگی و رزرو جلسه</span>
                </button>
                <button
                  type="button"
                  onClick={onNavigateTools}
                  className="inline-flex items-center gap-2 bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#344A42] border border-[#E5E0D8] text-xs font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#3D5E4E]" />
                  <span>ابزارهای خودسنجی رابطه</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials & Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8]">
            <div className="w-10 h-10 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-base font-extrabold text-[#292D2A] mb-4">
              مدارک تحصیلی و مجوزهای رسمی
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#555650] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>
                  پروانه رسمی اشتغال تخصصی از سازمان نظام روان‌شناسی و مشاوره ایران (شماره پروانه:
                  ۱۴۱۴۰۸۳)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>
                  عضو رسمی سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران (اعتبار عضویت: تا ۱۴۰۷/۰۲/۰۱)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>
                  کارشناس و کارشناس ارشد روان‌شناسی عمومی (ثبت‌شده در سامانه جامع اعضای نظام روان‌شناسی)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>مسئول فنی و مدیر کلینیک تخصصی روان‌شناسی پیوند امن تهران</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8]">
            <div className="w-10 h-10 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-base font-extrabold text-[#292D2A] mb-4">
              رویکردها و آموزش‌های تخصصی
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#555650] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>زوج‌درمانی شناختی-رفتاری (CBCT — مبتنی بر الگوی بک، باکوم و اپستین)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>طرحواره‌درمانی روابط (Schema Therapy — رویکرد جفری یانگ)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>مداخله بالینی در بحران ترومای خیانت زناشویی و بازسازی اعتماد سه‌مرحله‌ای</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                <span>پروتکل‌های ارزیابی و درمان اختلالات صمیمیت و سکس‌تراپی زوجین</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10">
          <SeoCertificationSummaryCard />
        </div>

        {/* Treatment Philosophy */}
        <div className="bg-[#EDF2EE] p-6 sm:p-10 rounded-2xl border border-[#D3E0D7] mb-10">
          <h2 className="text-lg sm:text-xl font-extrabold text-[#292D2A] mb-4">
            رویکرد و فلسفه درمانی مهناز خوینی
          </h2>
          <p className="text-sm text-[#292D2A] leading-[1.9] mb-6 text-justify">
            «در جلسات درمانی، هیچ‌یک از طرفین به‌عنوان مقصر یا متهم پای میز قضاوت نشانده نمی‌شوند. دعواهای مکرر،
            قهر، یا حتی سردی عاطفی محصول باورهای خودکار ناکارآمد، سوءتعبیرهای ذهنی و چرخه‌های رفتاریِ آموخته‌شده هستند
            که هر دو نفر را خسته کرده‌اند. با اصلاح شناختی و آموزش مهارت‌های ارتباطی شفاف، گفت‌وگوی سازنده دوباره شکل می‌گیرد.»
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#D3E0D7]">
            <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] text-center">
              <span className="text-lg font-extrabold text-[#344A42] block mb-1">CBCT</span>
              <span className="text-xs font-medium text-[#555650]">زوج‌درمانی شناختی-رفتاری</span>
            </div>
            <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] text-center">
              <span className="text-lg font-extrabold text-[#3D5E4E] block mb-1">طرحواره</span>
              <span className="text-xs font-medium text-[#555650]">شناسایی تله‌های رابطه</span>
            </div>
            <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] text-center">
              <span className="text-lg font-extrabold text-[#9E563E] block mb-1">Gottman</span>
              <span className="text-xs font-medium text-[#555650]">اصلاح الگوهای تخریبی گفت‌وگو</span>
            </div>
          </div>
        </div>

        {/* Interactive Clinic Photo Gallery with LightBox */}
        <ClinicGallery />

        {/* Practice Locations & Contact Callout */}
        <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-[#292D2A] mb-1">
                کلینیک حضوری تهران و پذیرش آنلاین
              </h3>
              <p className="text-xs text-[#555650] leading-relaxed">
                تهران، پونک (منطقه ۲)، کلینیک تخصصی پیوند امن · جلسات آنلاین تصویری در بستر امن
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onNavigateContact}
              className="w-full sm:w-auto px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              اطلاعات تماس و رزرو جلسه
            </button>
            <a
              href="https://maps.app.goo.gl/b9dx9xeA69wJJPzd6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-[#CFC7BA] hover:border-[#344A42] bg-[#F4F1EC] text-[#344A42] rounded-lg font-semibold text-xs transition-colors whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>نقشه و نظرات مراجعین (Google Maps)</span>
            </a>
            <a
              href={PARENT_CLINIC_LINKS.aboutClinic}
              target="_blank"
              rel="noopener"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 border border-[#CFC7BA] hover:border-[#344A42] bg-[#F4F1EC] text-[#344A42] rounded-lg font-semibold text-xs transition-colors whitespace-nowrap"
            >
              <span>معرفی کلینیک مادر (پیوند امن)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <StandaloneSeoGuide routeKey="about" />
      </div>
    </div>
  );
};
