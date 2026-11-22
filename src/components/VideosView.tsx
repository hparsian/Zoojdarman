import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { VideosSection } from './VideosSection';
import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';
import { ProfessionalCredentialsSummaryCard } from './ProfessionalCredentialsSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface VideosViewProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
}

export const VideosView: React.FC<VideosViewProps> = ({
  onNavigateHome,
  onNavigateContact,
  onNavigateTools,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-20 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onNavigateHome}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-5xl"
      />

      <div className="bg-[#FCFBF8] py-12 border-b border-[#E5E0D8]">
        <div className="container-custom max-w-5xl">
          <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-[#6B6D67] mb-4">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#344A42] cursor-pointer"
            >
              صفحه اصلی
            </button>
            <span>/</span>
            <span className="text-[#344A42] font-semibold">ویدیوها و آموزش تصویری</span>
          </nav>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
                رسانه آموزشی زوج‌درمانی
              </p>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] tracking-tight">
                ویدیوهای آموزشی و کارگاه‌های تصویری مهناز خوینی
              </h1>
              <p className="text-xs sm:text-sm text-[#555650] mt-2 max-w-2xl leading-relaxed">
                مجموعه ویدیوهای آموزشی و تحلیل‌های تخصصی زوج‌درمانی، بازسازی اعتماد، درمان طلاق عاطفی و مهارت‌های گفت‌وگو در آپارات و یوتیوب.
              </p>
            </div>

            <button
              type="button"
              onClick={onNavigateContact}
              className="px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>رزرو مشاوره مستقیم</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Videos Interactive Section */}
      <VideosSection onNavigateContact={onNavigateContact} limit={12} />

      {/* Trust & Accreditation Summary Cards */}
      <div className="container-custom max-w-5xl mt-12 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProfessionalCredentialsSummaryCard />
          <SeoCertificationSummaryCard />
        </div>
      </div>

      <StandaloneSeoGuide routeKey="videos" maxWidthClass="max-w-5xl" />
    </div>
  );
};
