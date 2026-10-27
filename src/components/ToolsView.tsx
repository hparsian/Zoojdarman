import React, { useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Brain,
  Award,
  HelpCircle
} from 'lucide-react';
import { InteractiveToolsSuite } from './InteractiveToolsSuite';

interface ToolsViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ onBack, onNavigateContact }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'تست آنلاین رایگان رضایت زناشویی و سلامت رابطه | انریچ و گاتمن | مهناز خوینی';
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
          <span className="text-[#6D5AA8] font-bold">سامانه تست‌های آنلاین رابطه</span>
        </nav>

        {/* Embedded Interactive Suite */}
        <InteractiveToolsSuite />

        {/* Scientific Validity Information */}
        <div className="mt-14 bg-white p-6 sm:p-10 rounded-3xl border border-[#E5E0EA] shadow-xs">
          <h2 className="text-base sm:text-lg font-black text-[#44386B] mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#6D5AA8]" />
            <span>پایه علمی و روش‌شناسی تست‌های آنلاین سامانه زوج‌درمان</span>
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#6F6B78] leading-relaxed text-justify">
            <p>
              آزمون‌های بالینی طراحی‌شده در سامانه «زوج‌درمان» بر اساس معتبرترین ابزارهای سنجش خانواده و روابط زناشویی در جهان فرمول‌بندی شده‌اند:
            </p>
            <ul className="space-y-2 list-disc list-inside text-xs">
              <li>
                <strong>پرسشنامه رضایت زناشویی انریچ (ENRICH):</strong> توسعه‌یافته توسط دکتر دیوید اولسون، با ضریب پایایی بالای ۹۰٪ برای سنجش ابعاد ده‌گانه زندگی مشترک.
              </li>
              <li>
                <strong>شاخص ۴ سوارکار سرنوشت جان گاتمن:</strong> پیش‌بینی‌کننده احتمال جدایی و طلاق عاطفی با ۹۳٪ دقت بر اساس بررسی تعارضات فیزیولوژیک.
              </li>
              <li>
                <strong>تئوری دلبستگی جان بالبی و سو جانسون (EFT):</strong> شناسایی الگوهای ناایمن، ترس از رها شدن و تله‌های ارتباطی.
              </li>
            </ul>
            <p>
              این آزمون‌ها جایگزین تشخیص حضوری روانپزشک یا روانشناس در اختلالات حاد نیستند، اما تصویر اولیه فوق‌العاده دقیقی از نقاط قوت و آسیب‌پذیر رابطه به شما و درمانگر ارائه می‌دهند.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
