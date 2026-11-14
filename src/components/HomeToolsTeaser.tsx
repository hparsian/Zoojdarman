import React from 'react';
import { Compass, ArrowLeft, ChevronLeft } from 'lucide-react';
import { testsData } from '../data/testsData';

interface HomeToolsTeaserProps {
  onNavigateTools: () => void;
  onSelectTest: (testSlug: string) => void;
}

export const HomeToolsTeaser: React.FC<HomeToolsTeaserProps> = ({
  onNavigateTools,
  onSelectTest,
}) => {
  const allTests = Object.values(testsData);
  const featuredTests = allTests.slice(0, 3);
  const additionalTests = allTests.slice(3, 6);

  return (
    <section
      className="py-16 lg:py-24 bg-[#FCFAF8] border-b border-[#E8E2D8]"
      id="tools-teaser"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              سامانه خودسنجی و غربالگری بالینی آنلاین
            </span>
            <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              تست‌های آنلاین استاندارد سلامت رابطه (رایگان)
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-3 leading-relaxed">
              پیش از رزرو جلسه مشاوره، وضعیت فعلی رابطه زناشویی خود را با ۶ آزمون معتبر جهانی ارزیابی کنید و کارنامه تحلیلی فوری دریافت نمایید.
            </p>
          </div>

          <a
            href="/tools"
            onClick={(e) => {
              e.preventDefault();
              onNavigateTools();
            }}
            className="inline-flex items-center gap-2 text-xs font-black text-[#241A35] hover:text-[#3E2F5B] py-2.5 px-5 rounded-lg border border-[#E8E2D8] hover:border-[#C5A059] bg-white transition-colors cursor-pointer shrink-0 self-start md:self-end"
          >
            <span>سامانه کامل ۶ تست آنلاین</span>
            <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
          </a>
        </div>

        {/* 3 Spotlight Assessments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featuredTests.map((test) => (
            <a
              key={test.id}
              href={`/tests/${test.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectTest(test.slug);
              }}
              className="bg-white hover:bg-[#FAF5EB]/55 rounded-2xl p-6 border border-[#E8E2D8] hover:border-[#3E2F5B]/45 transition-colors flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="text-[11px] font-bold text-[#9E7D36] mb-3 pb-2.5 border-b border-[#F0EBE2] flex items-center justify-between gap-2">
                  <span>{test.badge}</span>
                  <span className="text-[#4E7A66] tabular-nums">
                    {test.questionsCount} سوال · {test.timeEstimate}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#241A35] group-hover:text-[#3E2F5B] transition-colors mb-2.5 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs text-[#5E5868] leading-[1.85] mb-6 line-clamp-3">
                  {test.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2] flex items-center justify-between text-xs font-black text-[#3E2F5B]">
                <span>شروع آزمون رایگان</span>
                <ChevronLeft className="w-4 h-4 text-[#9E7D36] group-hover:-translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Remaining 3 Tests Direct Access Row (Ensures all 6 tests are directly crawlable on /) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {additionalTests.map((test) => (
            <a
              key={test.id}
              href={`/tests/${test.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectTest(test.slug);
              }}
              className="bg-[#F8F5EE] hover:bg-white rounded-xl px-5 py-4 border border-[#E8E2D8] hover:border-[#C5A059] transition-colors flex items-center justify-between gap-4 group cursor-pointer"
            >
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-[#5E5868] mb-0.5 tabular-nums">
                  {test.questionsCount} سوال · {test.timeEstimate}
                </div>
                <h3 className="text-xs sm:text-sm font-black text-[#241A35] group-hover:text-[#3E2F5B] truncate">
                  {test.title}
                </h3>
              </div>
              <ArrowLeft className="w-4 h-4 text-[#9E7D36] shrink-0 group-hover:-translate-x-1 transition-transform" />
            </a>
          ))}
        </div>

        {/* Crisp CTA Strip */}
        <div className="bg-[#241A35] text-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/35 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center shrink-0 border border-[#C5A059]/30">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-[#FAF5EB] mb-1">
                پروفایل جامع رابطه خود را پیش از جلسه مشاوره بسازید
              </h4>
              <p className="text-xs text-[#D8D2E5]">
                تمامی آزمون‌ها رایگان، کاملاً محرمانه و دارای کارنامه تحلیلی قابل ارائه به درمانگر هستند.
              </p>
            </div>
          </div>

          <a
            href="/tools"
            onClick={(e) => {
              e.preventDefault();
              onNavigateTools();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] hover:bg-[#b58e44] text-[#241A35] font-black text-xs rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 text-center"
          >
            مشاهده سامانه کامل ۶ آزمون
          </a>
        </div>
      </div>
    </section>
  );
};
