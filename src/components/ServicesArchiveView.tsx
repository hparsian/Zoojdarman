import React, { useEffect } from 'react';
import { servicesMeta } from '../data/servicesMeta';
import { ProfessionalCredentialsSummaryCard } from './ProfessionalCredentialsSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';
import { InnerPageTopBar } from './InnerPageTopBar';
import { ClinicSpaceFigure } from './ClinicSpaceFigure';
import { ChevronLeft } from 'lucide-react';

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
    <div className="bg-[#F4F1EC] min-h-screen pb-24">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-4xl"
      />

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        <nav className="flex items-center gap-2 text-xs text-[#6E6E68] mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#344A42]"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">خدمات تخصصی</span>
        </nav>

        <div className="max-w-2xl mb-8">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            پروتکل‌های بالینی مبتنی بر شواهد
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-3 leading-snug">
            خدمات تخصصی زوج‌درمانی و مشاوره روابط
          </h1>
          <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
            رویکردهای بالینی استاندارد با جلسات حضوری در کلینیک پیوند امن (تهران) و جلسات آنلاین برای مراجعان سراسر جهان.
          </p>
        </div>

        <ProfessionalCredentialsSummaryCard />

        <div className="space-y-5 mb-14">
          {servicesMeta.map((s, idx) => (
            <div
              key={s.slug}
              className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] hover:border-[#8FAE9B] transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#3D5E4E] mb-1.5 block">
                  خدمت ۰{idx + 1} · {s.category}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-[#292D2A] mb-2">
                  {s.h1 || s.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0">
                <a
                  href={`/services/${s.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectService(s.slug);
                  }}
                  className="px-5 py-2.5 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>جزئیات کامل پروتکل</span>
                  <ChevronLeft className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="px-5 py-2.5 bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#344A42] border border-[#CFC7BA] rounded-lg font-semibold text-xs transition-colors text-center cursor-pointer"
                >
                  درخواست نوبت
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic Spaces for Individual, Couples & Group Workshops */}
        <div className="mb-12">
          <div className="mb-5">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-1">
              امکانات کلینیک پیوند امن تهران
            </p>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#292D2A]">
              اتاق‌های مشاوره زوجین و سالن کارگاه‌های تخصصی و گروه‌درمانی
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClinicSpaceFigure space="sunlit-blue-couples-room" aspectRatio="4/5" />
            <ClinicSpaceFigure space="workshop-group-hall" aspectRatio="4/5" />
          </div>
        </div>

        <div className="bg-[#EDF2EE] p-7 sm:p-9 rounded-2xl border border-[#D3E0D7] text-center mb-12">
          <h3 className="text-base sm:text-lg font-bold text-[#292D2A] mb-2">
            مطمئن نیستید کدام خدمت برای شما مناسب‌تر است؟
          </h3>
          <p className="text-xs sm:text-sm text-[#555650] mb-5 max-w-lg mx-auto leading-relaxed">
            می‌توانید ابتدا با خودسنجی‌های آنلاین رایگان آشنا شوید یا یک جلسه ارزیابی اولیه رزرو کنید.
          </p>
          <button
            type="button"
            onClick={onNavigateTools}
            className="px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs transition-colors cursor-pointer"
          >
            مشاهده ابزارهای خودسنجی رابطه
          </button>
        </div>

        <StandaloneSeoGuide routeKey="services" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
