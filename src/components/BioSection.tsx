import React from 'react';
import { Award, BookOpen, ShieldCheck, ArrowLeft } from 'lucide-react';
import { ClinicSpaceFigure } from './ClinicSpaceFigure';
import { PARENT_CLINIC_LINKS } from '../utils/parentClinicLinks';

interface BioSectionProps {
  onNavigateAbout?: () => void;
  onNavigateProcess?: () => void;
}

export const BioSection: React.FC<BioSectionProps> = ({
  onNavigateAbout,
  onNavigateProcess,
}) => {
  return (
    <section id="bio" className="py-16 sm:py-24 bg-[#F4F1EC] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Editorial Biography & Ethos (7 cols - no duplicate photo) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
                آشنایی با رویکرد و سوابق درمانگر
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-4">
                مهناز خوینی؛ زوج‌درمانگر بالینی و مسئول فنی کلینیک پیوند امن
              </h2>
            </div>

            <p className="text-base text-[#555650] leading-[1.9]">
              جلسات درمانی تنها زمانی اثر واقعی دارند که هر دو طرف احساس کنند بدون قضاوت و برچسب‌زدن
              شنیده می‌شوند. تمرکز اصلی من در کار بالینی با زوجین، کمک به شناسایی خطاهای شناختی و
              الگوهای رفتاری عامل تعارض و آموزش گفت‌وگوی سازنده بوده است — نه یافتن مقصر یا ارائه نصیحت‌های کلیشه‌ای.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl p-5">
                <h3 className="text-sm font-bold text-[#344A42] mb-2">
                  زوج‌درمانی شناختی-رفتاری (CBCT)
                </h3>
                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                  شناسایی افکار خودکار ناکارآمد، اسنادهای منفی و اصلاح چرخه‌های رفتاری برای حل مسئله و بهبود تعامل.
                </p>
              </div>
              <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-xl p-5">
                <h3 className="text-sm font-bold text-[#344A42] mb-2">
                  طرحواره‌درمانی و مهارت‌های ارتباطی
                </h3>
                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                  شناسایی طرحواره‌های فردی تکرارشونده و جایگزینی الگوهای تخریبی با گفت‌وگوی شفاف و همدلانه.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {onNavigateAbout && (
                <button
                  type="button"
                  onClick={onNavigateAbout}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>سوابق علمی و مدارک کامل</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {onNavigateProcess && (
                <button
                  type="button"
                  onClick={onNavigateProcess}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#CFC7BA] bg-[#FCFBF8] hover:bg-[#ECE7DF] text-[#292D2A] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>مشاهده مسیر جلسات درمانی</span>
                </button>
              )}
            </div>
          </div>

          {/* Consultation Setting + Verified Credentials Ledger (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <ClinicSpaceFigure
              space="tehran-sunlit-mustard-room"
              aspectRatio="4/5"
            />

            <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-base font-bold text-[#292D2A] pb-4 border-b border-[#E5E0D8]">
                مشخصات حرفه‌ای و مجوزهای رسمی
              </h3>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#292D2A] block tabular-nums">
                      پروانه اشتغال تخصصی شماره ۱۴۱۴۰۸۳
                    </span>
                    <span className="text-xs text-[#555650] leading-relaxed block mt-1">
                      ثبت‌شده در سامانه سازمان نظام روان‌شناسی و مشاوره ایران
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <BookOpen className="w-5 h-5 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#292D2A] block">کارشناس ارشد روان‌شناسی و زوج‌درمانگر بالینی</span>
                    <span className="text-xs text-[#555650] leading-relaxed block mt-1">
                      متمرکز بر زوج‌درمانی شناختی-رفتاری (CBCT)، طرحواره‌درمانی و مهارت‌های ارتباطی گاتمن
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <Award className="w-5 h-5 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#292D2A] block">
                      مسئول فنی{' '}
                      <a
                        href={PARENT_CLINIC_LINKS.aboutClinic}
                        target="_blank"
                        rel="noopener"
                        className="text-[#344A42] underline underline-offset-4 hover:text-[#273932] transition-colors"
                      >
                        کلینیک تخصصی پیوند امن
                      </a>
                    </span>
                    <span className="text-xs text-[#555650] leading-relaxed block mt-1">
                      تهران، پونک (منطقه ۲) و جلسات آنلاین سراسری
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
