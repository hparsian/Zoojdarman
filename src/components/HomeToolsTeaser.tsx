import React from 'react';
import { Compass, ShieldCheck, ChevronLeft, ArrowLeft } from 'lucide-react';
import { testsData } from '../data/testsData';

interface HomeToolsTeaserProps {
  onNavigateTools: () => void;
  onSelectTest: (testSlug: string) => void;
}

export const HomeToolsTeaser: React.FC<HomeToolsTeaserProps> = ({
  onNavigateTools,
  onSelectTest,
}) => {
  // Top 3 featured assessments for home teaser
  const featuredTests = Object.values(testsData).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFFFF] via-[#FAF8F5] to-[#FFFFFF] border-b border-[#E8E2D8] relative overflow-hidden" id="tools-teaser">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#3E2F5B]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black text-[#C5A059] uppercase tracking-wider block mb-2">
              خودسنجی آنلاین و ارزیابی تشخیصی
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              سامانه آنلاین تست سلامت رابطه و تحلیل فوری
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-2 leading-relaxed">
              آزمون‌های بالینی استاندارد جهت سنجش کیفیت زناشویی، ترومای خیانت و شاخص طلاق با کارنامه آنالیزشده.
            </p>
          </div>

          <button
            onClick={onNavigateTools}
            className="inline-flex items-center gap-2 text-xs font-black text-[#3E2F5B] hover:text-[#241A35] py-2.5 px-5 rounded-full border border-[#E8DFD5] hover:border-[#3E2F5B]/40 bg-[#FAF5EB] transition-all cursor-pointer shrink-0"
          >
            <span>ورود به سامانه کامل ۶ تست آنلاین</span>
            <ArrowLeft className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
        </div>

        {/* 3 Featured Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredTests.map((test) => (
            <div
              key={test.id}
              onClick={() => onSelectTest(test.slug)}
              className="bg-white rounded-3xl p-6 border border-[#E8E2D8] hover:border-[#3E2F5B]/40 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black bg-[#F2EEF8] text-[#3E2F5B] px-3 py-1 rounded-full border border-[#3E2F5B]/15">
                    {test.badge}
                  </span>
                  <span className="text-[11px] text-[#8FAF9B] font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8FAF9B]" />
                    <span>تحلیل بالینی فوری</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#241A35] group-hover:text-[#3E2F5B] transition-colors mb-2 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs text-[#5E5868] leading-relaxed mb-6 line-clamp-3">
                  {test.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2] flex items-center justify-between text-xs font-black text-[#3E2F5B]">
                <span>شروع آزمون آنلاین (رایگان)</span>
                <div className="w-8 h-8 rounded-full bg-[#FAF5EB] group-hover:bg-[#3E2F5B] group-hover:text-[#C5A059] flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link Banner to Full Tools Hub */}
        <div className="bg-[#241A35] text-white p-6 sm:p-8 rounded-3xl border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-[#FAF5EB] mb-1">
                نیاز به ارزیابی دقیق‌تر دلبستگی یا ۵ زبان عشق دارید؟
              </h4>
              <p className="text-xs text-white/80">
                در سامانه تست آنلاین، می‌توانید تمامی ۶ آزمون بالینی رضایت، خیانت، دلبستگی، طلاق و ۵ زبان عشق را پاسخ دهید.
              </p>
            </div>
          </div>

          <button
            onClick={onNavigateTools}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] hover:bg-[#9E7D36] text-[#241A35] font-black text-xs rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            مشاهده تمام ۶ تست آنلاین
          </button>
        </div>
      </div>
    </section>
  );
};
