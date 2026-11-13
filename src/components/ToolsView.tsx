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
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface ToolsViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onSelectTest?: (slug: string) => void;
}

export const ToolsView: React.FC<ToolsViewProps> = ({ onBack, onNavigateContact, onSelectTest }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const dedicatedTests = [
    {
      title: 'تست رضایت زناشویی انریچ',
      slug: 'enrich-marital-satisfaction',
      desc: '۱۰ سوال استاندارد ارزیابی ابعاد صمیمیت، حل تعارض و اعتماد',
      badge: 'پرطرفدارترین',
    },
    {
      title: 'سنجش تروما و آسیب خیانت (PISD)',
      slug: 'infidelity-trauma-assessment',
      desc: 'ارزیابی شدت شوک، رفتارهای وارسی و پتانسیل بازسازی اعتماد',
      badge: 'اختصاصی خیانت',
    },
    {
      title: 'آمادگی پیش از ازدواج و تناسب عقد',
      slug: 'premarital-readiness-assessment',
      desc: 'بررسی ۸ رکن تفاهم: استقلال، امور مالی، رد فلگ‌ها و سبک تعارض',
      badge: 'ویژه آشنایی',
    },
    {
      title: 'پیش‌بینی طلاق عاطفی گاتمن',
      slug: 'gottman-divorce-predictor',
      desc: 'ارزیابی ۴ رفتار مرگبار سرزنش، تحقیر، دفاع و قفل شدن گفتگو',
      badge: 'هشدار زودهنگام',
    },
    {
      title: 'تست سبک‌های دلبستگی عاطفی',
      slug: 'attachment-style-in-relationships',
      desc: 'کشف ریشه مشاجرات و سبک‌های ایمن، اضطرابی و اجتنابی',
      badge: 'رویکرد EFT',
    },
    {
      title: 'آزمون ۵ زبان عشق گری چاپمن',
      slug: 'five-love-languages',
      desc: 'کشف زبان عشق غالب و زبان دوم شما و همسرتان در رابطه',
      badge: 'احیای صمیمیت',
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </a>

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
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">تست زوج درمانی آنلاین</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2eff8] text-[#6D5AA8] text-xs font-black mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>سامانه ارزیابی بالینی و خودسنجی سلامت رابطه</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#292733] mb-3 leading-tight">
            تست زوج درمانی آنلاین؛ ارزیابی علمی رضایت زناشویی، خیانت و دلبستگی
          </h1>
          <p className="text-sm text-[#6F6B78] max-w-2xl mx-auto leading-relaxed">
            مجموعه آزمون‌های استاندارد روانشناسی با نمره‌دهی فوری، نمودار تعاملی و تحلیل بالینی مهناز خوینی (زوج درمانگر هیجان‌مدار EFT). آزمون‌ها کاملاً رایگان، بدون نیاز به ثبت‌نام و همراه با کارنامه تحلیلی هستند.
          </p>
        </div>

        {/* Dedicated Test Pages Hub Grid */}
        <div className="mb-10">
          <h2 className="text-sm font-black text-[#44386B] mb-3">
            صفحات اختصاصی آزمون‌های روانشناسی رابطه:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {dedicatedTests.map((dt) => (
              <a
                key={dt.slug}
                href={`/tests/${dt.slug}`}
                onClick={(e) => { e.preventDefault(); onSelectTest && onSelectTest(dt.slug); }}
                className="p-4 rounded-2xl bg-white border border-[#E5E0EA] hover:border-[#6D5AA8] text-right shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black text-[#6D5AA8] bg-[#f2eff8] px-2 py-0.5 rounded-full mb-1.5 inline-block">
                    {dt.badge}
                  </span>
                  <h3 className="text-xs font-black text-[#292733] mb-1 leading-snug">
                    {dt.title}
                  </h3>
                  <p className="text-[11px] text-[#6F6B78] line-clamp-2">
                    {dt.desc}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#6D5AA8] mt-3 block pt-2 border-t border-[#E5E0EA]">
                  ورود به صفحه اختصاصی ←
                </span>
              </a>
            ))}
          </div>
        </div>

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

        <StandaloneSeoGuide routeKey="tools" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
