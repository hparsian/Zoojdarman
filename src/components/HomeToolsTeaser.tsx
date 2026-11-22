import React from 'react';
import { TESTS_META } from '../data/testsMeta';
import { ArrowLeft, Compass } from 'lucide-react';

interface HomeToolsTeaserProps {
  onNavigateTools: () => void;
  onSelectTest: (testSlug: string) => void;
}

export const HomeToolsTeaser: React.FC<HomeToolsTeaserProps> = ({
  onNavigateTools,
  onSelectTest,
}) => {
  return (
    <section id="tools" className="py-16 sm:py-24 bg-[#F4F1EC] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              ابزارهای خودسنجی رایگان و محرمانه
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              پرسشنامه‌های علمی برای شناخت بهتر رابطه
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              پاسخ‌ها فقط در مرورگر شما پردازش می‌شوند و به هیچ سروری ارسال نمی‌گردند. این ابزارها
              جنبه آموزشی و خودآگاهی دارند و جایگزین ارزیابی بالینی نیستند.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateTools}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap"
          >
            <span>مشاهده همه خودسنجی‌ها</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTS_META.map((test) => (
            <a
              key={test.id}
              href={`/tests/${test.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectTest(test.slug);
              }}
              className="group bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#8FAE9B] rounded-xl p-6 flex flex-col justify-between transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-medium text-[#6E6E68] mb-3">
                  <span>{test.clinicalFocus}</span>
                  <span>
                    {test.questionsCount} پرسش · {test.timeEstimate}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors mb-2.5 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed mb-5">
                  {test.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#344A42]">
                <span className="inline-flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  <span>شروع خودسنجی</span>
                </span>
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
