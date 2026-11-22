import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { BrandMark, ZoojdarmanWordmark } from './BrandMark';

interface NotFoundViewProps {
  onNavigateHome: (section?: string) => void;
  onNavigateArticles: () => void;
  onNavigateTools: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({
  onNavigateHome,
  onNavigateArticles,
  onNavigateTools,
}) => {
  return (
    <div className="min-h-screen bg-[#F4F1EC] text-[#292D2A] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-8 sm:p-10 space-y-5">
        <div className="flex flex-col items-center gap-2">
          <BrandMark className="w-12 h-12" />
          <ZoojdarmanWordmark className="text-lg" />
        </div>

        <p className="text-xs font-semibold text-[#3D5E4E]">صفحه یافت نشد · ۴۰۴</p>

        <h1 className="text-xl sm:text-2xl font-extrabold text-[#292D2A] leading-snug">
          این صفحه در دسترس نیست
        </h1>

        <p className="text-sm text-[#555650] leading-relaxed">
          نشانی واردشده تغییر کرده یا وجود ندارد. می‌توانید از صفحه اصلی، بانک مقالات علمی یا
          ابزارهای خودسنجی رابطه ادامه دهید.
        </p>

        <div className="flex flex-col gap-2.5 pt-2">
          <button
            type="button"
            onClick={() => onNavigateHome()}
            className="w-full py-3 px-5 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={onNavigateArticles}
              className="py-2.5 px-3 rounded-lg border border-[#CFC7BA] bg-[#F4F1EC] hover:bg-[#ECE7DF] text-xs font-semibold text-[#292D2A] transition-colors cursor-pointer"
            >
              بانک مقالات
            </button>
            <button
              type="button"
              onClick={onNavigateTools}
              className="py-2.5 px-3 rounded-lg border border-[#CFC7BA] bg-[#F4F1EC] hover:bg-[#ECE7DF] text-xs font-semibold text-[#292D2A] inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>خودسنجی رابطه</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
