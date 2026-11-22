import React from 'react';
import { ArrowRight, Calendar, Compass } from 'lucide-react';
import { BrandMark, ZoojdarmanWordmark } from './BrandMark';

interface InnerPageTopBarProps {
  onBack: () => void;
  backLabel?: string;
  onNavigateContact?: () => void;
  onNavigateTools?: () => void;
  maxWidthClass?: string;
}

export const InnerPageTopBar: React.FC<InnerPageTopBarProps> = ({
  onBack,
  backLabel = 'بازگشت',
  onNavigateContact,
  onNavigateTools,
  maxWidthClass = 'max-w-5xl',
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EC]/95 backdrop-blur-md border-b border-[#E5E0D8]">
      <div className={`${maxWidthClass} mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] transition-colors cursor-pointer whitespace-nowrap"
          >
            <ArrowRight className="w-4 h-4 shrink-0" />
            <span>{backLabel}</span>
          </button>
        </div>

        <a
          href="/"
          aria-label="صفحه اصلی Zoojdarman — مهناز خوینی، کد نظام روان‌شناسی ۱۴۱۴۰۸۳"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="hidden sm:flex items-center gap-2 hover:opacity-85 transition-opacity whitespace-nowrap"
        >
          <BrandMark className="w-8 h-8 shrink-0" />
          <div className="flex flex-col items-start text-right">
            <ZoojdarmanWordmark className="text-sm" />
            <span className="hidden md:block text-[10.5px] font-medium text-[#555650] leading-tight mt-0.5">
              مهناز خوینی · نظام روان‌شناسی ۱۴۱۴۰۸۳
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2.5 shrink-0">
          {onNavigateTools && (
            <button
              type="button"
              onClick={onNavigateTools}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#344A42] hover:bg-[#ECE7DF] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>خودسنجی رابطه</span>
            </button>
          )}
          {onNavigateContact ? (
            <button
              type="button"
              onClick={onNavigateContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>رزرو جلسه</span>
            </button>
          ) : (
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs font-semibold transition-colors whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>رزرو جلسه</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
};
