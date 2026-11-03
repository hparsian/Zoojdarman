import React from 'react';
import { ShieldCheck, GraduationCap, Award, BookOpen, MessageSquare, CheckCircle2, Sparkles, FileCheck2 } from 'lucide-react';
import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';

export const BioSection: React.FC = () => {
  const credentials = [
    {
      icon: ShieldCheck,
      title: 'پروانه اشتغال تخصصی نظام روان‌شناسی',
      desc: 'شماره پروانه رسمی ۱۴۱۴۰۸۳ از سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران.',
      badge: 'پروانه بالینی',
    },
    {
      icon: Award,
      title: 'مسئول فنی کلینیک تخصصی پیوند امن',
      desc: 'مدیریت فنی و نظارت بالینی بر پروتکل‌های زوج‌درمانی، سکس‌تراپی و خانواده در تهران.',
      badge: 'نظارت بالینی',
    },
    {
      icon: GraduationCap,
      title: 'کارشناس ارشد روان‌شناسی بالینی',
      desc: 'تخصص در پروتکل بین‌المللی زوج‌درمانی هیجان‌مدار (EFT) و طرحواره‌درمانی اختلالات شخصیت.',
      badge: 'دانش‌آموخته بالینی',
    },
    {
      icon: BookOpen,
      title: 'بیش از ۱۲ سال مداخله بالینی موثر',
      desc: 'انجام بیش از ۱۵,۰۰۰ ساعت مشاوره تخصصی زوجین در بحران‌های خیانت، طلاق و سردی عاطفی.',
      badge: 'سابقه مستند',
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE9] to-[#FAF8F5] overflow-hidden" id="bio">
      {/* Subtle ambient luxury element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Clinician Portrait & Certification Frame */}
          <div className="lg:col-span-5 relative max-w-md mx-auto w-full">
            <div className="relative rounded-3xl p-3 bg-white border border-[#E8DFD5] shadow-2xl">
              {/* Outer luxury border effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#C5A059]/30 via-transparent to-[#2A1E35]/20 rounded-[28px] -z-10 blur-[1px]" />

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/mahnaz-khoini.jpg"
                  alt="مهناز خوینی کارشناس ارشد روانشناسی بالینی و زوج درمانگر"
                  width={617}
                  height={775}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[470px] object-cover object-top filter brightness-[1.02] contrast-[1.03]"
                />

                {/* Prestige Corner Seal */}
                <div className="absolute top-4 left-4 bg-[#2A1E35]/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-xl border border-[#C5A059]/40 flex items-center gap-2 shadow-lg">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-[11px] font-mono tracking-wider text-[#E8DFD5]">پروانه ۱۴۱۴۰۸۳</span>
                </div>

                {/* Bottom Signature Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2A1E35] via-[#2A1E35]/60 to-transparent p-6 text-white">
                  <div className="text-xl font-black mb-1">مهناز خوینی</div>
                  <div className="text-xs text-[#C5A059] font-medium flex items-center gap-1.5">
                    <span>زوج‌درمانگر هیجان‌مدار (EFT) و مسئول فنی پیوند امن</span>
                  </div>
                </div>
              </div>

              {/* Verified Clinical Registration Bar */}
              <div className="mt-3 p-3 bg-[#FAF8F5] rounded-xl border border-[#E8DFD5] flex items-center justify-between text-xs font-bold text-[#2A1E35]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#3E6B56]" />
                  <span>عضویت رسمی سازمان نظام روان‌شناسی ایران</span>
                </div>
                <span className="text-[10px] text-[#C5A059] font-mono font-bold">VERIFIED</span>
              </div>
            </div>
          </div>

          {/* Credentials and Bio Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#A67C2E] uppercase mb-4">
              <span className="w-6 h-px bg-[#C5A059]" />
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>صلاحیت بالینی و سوابق حرفه‌ای</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-5 leading-tight">
              مهناز خوینی؛ زوج درمانگر تخصصی و مشاور ارشد روابط زناشویی
            </h2>

            <p className="text-sm sm:text-base text-[#5A5265] leading-relaxed mb-6 text-justify">
              مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی و مسئول فنی کلینیک تخصصی پیوند امن تهران، با بیش از ۱۲ سال سابقه بالینی مستمر، یکی از برجسته‌ترین درمانگران در حوزه زوج‌درمانی هیجان‌مدار (EFT) و طرحواره‌درمانی است. تمرکز درمانی ایشان نجات روابط در آستانه فروپاشی، درمان ریشه‌ای آسیب‌های ناشی از خیانت و شکستن چرخه‌های فرساینده قهر، سکوت و پرخاشگری است؛ بدون پیش‌داوری، با متدهای علمی اثبات‌شده و ایجاد بستری کاملاً امن و محرمانه برای هر دو همسر.
            </p>

            {/* Credential Items - Luxury Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#C5A059]/40 shadow-xs hover:shadow-md transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] text-[#2A1E35] group-hover:text-[#C5A059] group-hover:border-[#C5A059]/30 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xs sm:text-sm font-black text-[#2A1E35] truncate">
                          {cred.title}
                        </h3>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#7A7382] leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

              {/* Direct CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%DB%8C%20%D8%AC%D9%84%D8%B3%D9%87%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%A8%D8%A7%20%D8%B3%D8%B1%DA%A9%D8%A7%D8%B1%20%D8%AE%D8%A7%D9%86%D9%85%20%D8%AE%D9%88%DB%8C%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#2A1E35] hover:bg-[#1E1527] text-white text-xs sm:text-sm font-black px-7 py-4 rounded-xl border border-[#C5A059]/40 shadow-xl hover:shadow-2xl transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                  <span>هماهنگی جلسه با زوج درمانگر مهناز خوینی در واتساپ</span>
                </a>

                <a
                  href="tel:02144600980"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-white border border-[#E8DFD5] hover:border-[#C5A059] text-[#2A1E35] text-xs font-bold transition-all"
                >
                  <span>تماس کلینیک: ۴۴۶۰۰۹۸۰-۰۲۱</span>
                </a>
              </div>
            </div>
          </div>

          {/* SEO & Schema.org Certification Summary Card */}
          <div className="mt-16">
            <SeoCertificationSummaryCard />
          </div>
        </div>
      </section>
    );
  };
