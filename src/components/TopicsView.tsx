import React, { useEffect } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { KeywordsHubSection } from './KeywordsHubSection';

interface TopicsViewProps {
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectService: (slug: string) => void;
  onNavigateTools: () => void;
}

export const TopicsView: React.FC<TopicsViewProps> = ({
  onBack,
  onSelectArticle,
  onSelectService,
  onNavigateTools,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'دانشنامه کلمات کلیدی و جستجوهای پرطرفدار زوج‌درمانی در گوگل | مهناز خوینی';
  }, []);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </button>

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
          <button onClick={onBack} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </button>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">موضوعات پرجستجو</span>
        </nav>

        {/* Embedded Keywords Hub */}
        <KeywordsHubSection
          onSelectArticle={onSelectArticle}
          onSelectService={onSelectService}
          onScrollToTools={onNavigateTools}
        />
      </div>
    </div>
  );
};
