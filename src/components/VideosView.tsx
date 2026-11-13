import React from 'react';
import { VideosSection } from './VideosSection';
import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';
import { ProfessionalCredentialsSummaryCard } from './ProfessionalCredentialsSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';
import { Tv, Sparkles, MessageSquare, ChevronLeft, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
  return (
    <div className="bg-[#FCFAF8] min-h-screen pb-20">
      {/* Breadcrumb & Top Bar */}
      <div className="bg-[#241A35] text-white py-12 relative overflow-hidden border-b border-[#C5A059]/30">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#C5A059] font-bold mb-4">
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">صفحه اصلی</button>
            <span>/</span>
            <span className="text-white">ویدیوها و آپارات</span>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3E2F5B] text-[#C5A059] text-xs font-black mb-3 border border-[#C5A059]/30">
                <Tv className="w-4 h-4 text-[#C5A059]" />
                <span>رسانه تصویری زوج درمانی</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                ویدیوهای آموزشی و کارگاه‌های تصویری مهناز خوینی
              </h1>
              <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-2xl leading-relaxed font-medium">
                مجموعه فیلم‌های آموزشی و تحلیل‌های تخصصی زوج‌درمانی، مشاوره خیانت، درمان طلاق عاطفی و مهارت‌های ارتباطی در پلتفرم‌های آپارات و یوتیوب با تدریس مهناز خوینی.
              </p>
            </div>

            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#C5A059] hover:bg-[#9E7D36] text-[#241A35] font-black text-xs rounded-2xl shadow-lg transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>رزرو مشاوره مستقیم</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Videos Interactive Section */}
      <VideosSection onNavigateContact={onNavigateContact} />

      {/* Trust & Accreditation Summary Cards */}
      <div className="container-custom mt-12 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProfessionalCredentialsSummaryCard />
          <SeoCertificationSummaryCard />
        </div>
      </div>

      <StandaloneSeoGuide routeKey="videos" maxWidthClass="max-w-5xl" />
    </div>
  );
};
