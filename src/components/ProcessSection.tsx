import React from 'react';
import { Compass, Search, HeartHandshake, ShieldCheck, ArrowLeft } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '۰۱',
      title: 'ارزیابی جامع و نقشه‌برداری تعارض',
      desc: 'برگزاری جلسه مشترک اولیه برای کشف چرخه منفی و تکراری دعواها و به دنبال آن جلسات فردی جهت تحلیل تاریخچه دلبستگی و تروماهای ارتباطی هر دو طرف.',
      icon: Search,
      badge: 'مرحله تشخیصی',
    },
    {
      num: '۰۲',
      title: 'رمزگشایی از احساسات زیرین',
      desc: 'شناسایی و بیرون کشیدن هیجانات ثانویه و آسیب‌پذیری‌های سرکوب‌شده (ترس از طرد، بی‌ارزشی، تنهایی) که پشت نقاب خشم یا سکوت‌های طولانی پنهان مانده‌اند.',
      icon: Compass,
      badge: 'ریشه‌یابی بالینی',
    },
    {
      num: '۰۳',
      title: 'بازسازی چرخه تعامل و پیوند ایمن',
      desc: 'تغییر الگوهای تعاملی مخرب بر اساس پروتکل EFT، آموزش مکالمه همدلانه بدون حالت تدافعی، التیام زخم خیانت و احیای اعتماد بنیادین در رابطه.',
      icon: HeartHandshake,
      badge: 'مداخله و بازسازی',
    },
    {
      num: '۰۴',
      title: 'تثبیت صمیمیت و مصون‌سازی رابطه',
      desc: 'احیای پیوند عاطفی و جسمی، توافق بر سر مسائل مالی یا خانوادگی و تدوین پروتکل‌های اختصاصی برای پیشگیری دائمی از بازگشت به بحران‌های گذشته.',
      icon: ShieldCheck,
      badge: 'پایداری و تثبیت',
    },
  ];

  return (
    <section className="relative py-24 bg-[#FAF8F5] overflow-hidden" id="process">
      {/* Subtle luxury ambient grid */}
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A67C2E] uppercase mb-3">
            <span className="w-6 h-px bg-[#C5A059]" />
            <span>پروتکل ۴ مرحله‌ای هیجان‌مدار (EFT)</span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-4 leading-snug">
            مسیر استاندارد درمان و احیای سلامت رابطه
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed max-w-2xl mx-auto">
            رویکردی ساختاریافته، بالینی و گام‌به‌گام برای نجات رابطه‌های گرفتار در چرخه‌های فرساینده تعارض، سردی عاطفی و بحران اعتماد.
          </p>
        </div>

        {/* Process Cards Grid with Connecting Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-7 border border-[#E8DFD5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Number Node & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-serif text-[#C5A059] group-hover:scale-110 transition-transform">
                      {st.num}
                    </span>
                    <span className="text-[10px] font-bold text-[#7A7382] bg-[#FAF8F5] border border-[#E8DFD5] px-2.5 py-1 rounded-md">
                      {st.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] text-[#2A1E35] group-hover:text-[#C5A059] group-hover:border-[#C5A059]/40 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-black text-[#2A1E35] mb-3 leading-snug group-hover:text-[#44386B] transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#6F6B78] leading-relaxed text-justify mb-6">
                    {st.desc}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 border-t border-[#F2ECE4] flex items-center justify-between text-[11px] font-bold text-[#A67C2E]">
                  <span>گام {idx + 1} از ۴</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Note Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#2A1E35] to-[#382847] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#C5A059]/30 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-[#C5A059]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div>
              <div className="text-sm font-black text-white mb-0.5">
                تعهد به پروتکل‌های درمانی بین‌المللی ICEEFT
              </div>
              <div className="text-xs text-[#D8D2E5] leading-relaxed">
                تمام مراحل با رعایت استانداردهای انجمن بین‌المللی زوج‌درمانی هیجان‌مدار و حفظ ۱۰۰٪ محرمانگی اطلاعات مراجعین اجرا می‌شود.
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D9%85%D8%A7%DB%8C%D9%84%20%D8%A8%D9%87%20%D8%A2%D8%BA%D8%A7%D8%B2%20%D9%81%D8%B1%D8%A2%DB%8C%D9%86%D8%AF%20%D8%B2%D9%88%D8%AC%E2%80%8C%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%87%D8%B3%D8%AA%D9%85."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 bg-[#C5A059] hover:bg-[#B38D46] text-[#1E1527] font-black text-xs rounded-xl shadow-md transition-all"
          >
            شروع جلسه اول ارزیابی
          </a>
        </div>
      </div>
    </section>
  );
};
