import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    {
      num: '+۱۵,۰۰۰',
      label: 'ساعت مشاوره تخصصی',
      sub: 'جلسات بالینی زوجین و فردی',
    },
    {
      num: '+۱,۲۰۰',
      label: 'مراجع زوج و فردی',
      sub: 'پرونده‌های بالینی در ۱۰ سال گذشته',
    },
    {
      num: '۹۴٪',
      label: 'پایداری نتایج درمان',
      sub: 'بر اساس پروتکل‌های پیگیری EFT',
    },
    {
      num: '۱۲+',
      label: 'سال سابقه بالینی',
      sub: 'عضو سازمان نظام روان‌شناسی',
    },
  ];

  return (
    <section className="bg-white border-y border-[#E5E0EA] py-10">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-2 ${
                idx !== stats.length - 1 ? 'lg:border-l lg:border-[#E5E0EA]' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl font-black text-[#44386B] tracking-tight mb-1">
                {s.num}
              </span>
              <span className="text-sm font-extrabold text-[#292733] mb-1">
                {s.label}
              </span>
              <span className="text-xs text-[#6F6B78]">
                {s.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
