import React, { useEffect } from 'react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { KeywordsHubSection } from './KeywordsHubSection';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface TopicsViewProps {
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectService: (slug: string) => void;
  onNavigateTools: () => void;
  onNavigateContact?: () => void;
}

export const TopicsView: React.FC<TopicsViewProps> = ({
  onBack,
  onSelectArticle,
  onSelectService,
  onNavigateTools,
  onNavigateContact,
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
          <span className="text-[#344A42] font-semibold">موضوعات پرجستجو</span>
        </nav>

        <KeywordsHubSection
          onSelectArticle={onSelectArticle}
          onSelectService={onSelectService}
          onScrollToTools={onNavigateTools}
        />

        <StandaloneSeoGuide routeKey="topics" />
      </div>
    </div>
  );
};
