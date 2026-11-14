import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    {
      num: '+۱۵٬۰۰۰',
      label: 'ساعت مشاوره بالینی',
      sub: 'زوج‌درمانی، درمان خیانت و مداخلات طلاق عاطفی',
    },
    {
      num: '+۱٬۲۰۰',
      label: 'پرونده موفق زوجین',
      sub: 'بازسازی اعتماد و احیای گفتگوی ایمن زناشویی',
    },
    {
      num: '۹۴٪',
      label: 'پایداری نتایج درمان',
      sub: 'بر اساس پیگیری بالینی پروتکل هیجان‌مدار EFT',
    },
    {
      num: '۱۲+',
      label: 'سال سابقه تخصصی رسمی',
      sub: 'مسئول فنی کلینیک پیوند امن · پروانه ۱۴۱۴۰۸۳',
    },
  ];

  return (
    <section
      aria-label="شاخص‌های سوابق بالینی"
      className="bg-[#F8F5EE] border-b border-[#E8E2D8] py-10 sm:py-12"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x lg:divide-x-reverse divide-[#E8E2D8]">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="px-4 py-4 sm:px-6 lg:py-2 flex flex-col items-start text-right"
            >
              <div className="text-2xl sm:text-4xl font-black text-[#241A35] tabular-nums tracking-tight mb-1.5">
                {s.num}
              </div>
              <div className="text-xs sm:text-sm font-black text-[#3E2F5B] mb-1">
                {s.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#5E5868] leading-relaxed">
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
