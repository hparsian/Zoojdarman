import React, { useEffect } from 'react';
import { Brain } from 'lucide-react';
import { TESTS_META } from '../data/testsMeta';
import { InnerPageTopBar } from './InnerPageTopBar';
import { InteractiveToolsSuite } from './InteractiveToolsSuite';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface ToolsViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onSelectTest?: (slug: string) => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({
  onBack,
  onNavigateContact,
  onSelectTest,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-5xl"
      />

      <div className="container-custom max-w-5xl pt-8 sm:pt-12">
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
          <span className="text-[#344A42] font-semibold">ابزارهای خودسنجی و تست آنلاین</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            سامانه خودآگاهی و شناخت الگوهای رابطه
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-3 leading-tight">
            ابزارهای خودسنجی رابطه؛ ارزیابی رضایت زناشویی، دلبستگی و پیوند
          </h1>
          <p className="text-sm text-[#555650] leading-relaxed">
            پرسشنامه‌های علمی بدون نیاز به ثبت‌نام؛ پاسخ‌ها صرفاً در مرورگر شما پردازش می‌شوند و برای شروع گفت‌وگوی آگاهانه طراحی شده‌اند (جایگزین تشخیص بالینی نیستند).
          </p>
        </div>

        {/* Dedicated Test Pages Hub Grid */}
        <div className="mb-12">
          <h2 className="text-sm font-extrabold text-[#292D2A] mb-4">
            صفحات اختصاصی هر پرسشنامه:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTS_META.map((dt) => (
              <a
                key={dt.slug}
                href={`/tests/${dt.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTest?.(dt.slug);
                }}
                className="p-5 rounded-xl bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#344A42] text-right transition-colors cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-[#3D5E4E] mb-1.5 block">
                    {dt.clinicalFocus} · {dt.timeEstimate}
                  </span>
                  <h3 className="text-sm font-bold text-[#292D2A] mb-1.5 leading-snug">
                    {dt.title}
                  </h3>
                  <p className="text-xs text-[#555650] line-clamp-2 leading-relaxed">
                    {dt.shortDesc}
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#344A42] mt-4 block pt-3 border-t border-[#E5E0D8]">
                  شروع خودسنجی ←
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Suite */}
        <InteractiveToolsSuite onNavigateContact={onNavigateContact} />

        {/* Scientific Basis & Disclaimer */}
        <div className="mt-12 bg-[#FCFBF8] p-6 sm:p-10 rounded-2xl border border-[#E5E0D8]">
          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A] mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#344A42]" />
            <span>مبنای پژوهشی ابزارهای خودسنجی سامانه زوج‌درمان</span>
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#555650] leading-[1.9] text-justify">
            <p>
              پرسشنامه‌های آموزشی این بخش با الهام از ابزارهای معتبر حوزه روان‌شناسی خانواده و زوج‌درمانی تدوین شده‌اند:
            </p>
            <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm">
              <li>
                <strong className="text-[#292D2A]">مقیاس رضایت زناشویی انریچ (ENRICH):</strong> توسعه‌یافته توسط دکتر دیوید اولسون برای بررسی ابعاد مهم زندگی مشترک از جمله گفت‌وگو، حل تعارض و صمیمیت.
              </li>
              <li>
                <strong className="text-[#292D2A]">الگوی ۴ رفتار تخریبی گاتمن:</strong> شناخت نشانه‌های انتقاد، تحقیر، دفاع و دیوارکشی سکوت در تعاملات روزمره زوجین.
              </li>
              <li>
                <strong className="text-[#292D2A]">رویکرد شناختی-رفتاری (CBCT) و نظریه دلبستگی:</strong> شناخت خطاهای شناختی، الگوهای رفتاری تقابلی و واکنش‌های ایمن یا مضطرب در لحظات تنش یا دوری عاطفی.
              </li>
            </ul>
            <p className="bg-[#EDF2EE] p-4 rounded-xl border border-[#D3E0D7] text-[#292D2A] text-xs font-medium">
              نکته مهم: نتایج این خودسنجی‌ها صرفاً جهت خودآگاهی فردی و طرح سؤال در جلسه مشاوره است و تشخیص قطعی بالینی یا پیش‌بینی آینده رابطه محسوب نمی‌شود.
            </p>
          </div>
        </div>

        <StandaloneSeoGuide routeKey="tools" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
