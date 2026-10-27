import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '۱',
      title: 'ارزیابی اولیه و نقشه‌برداری تعارض',
      desc: 'برگزاری جلسه مشترک اولیه برای کشف الگوی تکراری دعواها و به دنبال آن جلسات فردی برای بررسی ریشه‌ها و تاریخچه دلبستگی هر دو طرف.',
    },
    {
      num: '۲',
      title: 'رمزگشایی از هیجانات زیرین',
      desc: 'شناسایی احساسات پنهان (ترس از رهاشدگی، بی‌ارزشی، تنهایی) که در پشت لایه‌های خشم، طلبکاری یا سکوت و فرار سنگر گرفته‌اند.',
    },
    {
      num: '۳',
      title: 'بازسازی چرخه تعامل و پیوند ایمن',
      desc: 'تغییر الگوهای مخرب، آموزش مهارت مکالمه بدون حالت تدافعی، التیام ترومای خیانت و بازگرداندن حس امنیت و اعتماد دوطرفه.',
    },
    {
      num: '۴',
      title: 'تثبیت صمیمیت و تاب‌آوری رابطه',
      desc: 'احیای صمیمیت جسمی و عاطفی، توافق بر سر حل مسائل مالی یا خانوادگی و ساختن پروتکل‌های پیشگیری از بازگشت به بحران‌های گذشته.',
    },
  ];

  return (
    <section className="py-20 bg-[#F2EFF8]" id="process">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#edf5f0] text-[#5e826b] px-4 py-1.5 rounded-full border border-[#8FAF9B]/30 mb-4">
            <span>مسیر بهبودی رابطه</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-3">
            فرآیند ۴ مرحله‌ای زوج‌درمانی تخصصی
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            رویکرد گام‌به‌گام و علمی برای تغییر الگوهای ناسازگار و ایجاد صلح و پایداری در زندگی مشترک.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E5E0EA] shadow-xs relative flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-[#f2eff8] border border-[#E5E0EA] text-[#6D5AA8] font-black text-base flex items-center justify-center mb-5 shrink-0">
                {st.num}
              </div>
              <h3 className="text-base font-black text-[#44386B] mb-3 leading-snug">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed text-justify">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
