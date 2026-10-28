import React from 'react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      num: '+۱۵,۰۰۰',
      label: 'ساعت مشاوره بالینی تخصصی',
      sub: 'زوج‌درمانی و مداخلات بحران رابطه',
      icon: Clock,
    },
    {
      num: '+۱,۲۰۰',
      label: 'پرونده موفق زوجین',
      sub: 'عبور از طلاق عاطفی و بازسازی اعتماد',
      icon: Users,
    },
    {
      num: '۹۴٪',
      label: 'پایداری نتایج درمان',
      sub: 'مبتنی بر پیگیری‌های پروتکل EFT',
      icon: Award,
    },
    {
      num: '۱۲+',
      label: 'سال سابقه بالینی رسمی',
      sub: 'پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] border-y border-[#E8DFD5] py-14">
      {/* Subtle luxury ambient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.5px,transparent_0.5px)] opacity-10 [background-size:20px_20px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#E8DFD5] hover:border-[#C5A059]/50 transition-all duration-300 luxury-card-hover flex flex-col items-center text-center"
              >
                {/* Gold micro-accent top line */}
                <div className="absolute top-0 right-6 left-6 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#C5A059] transition-all" />

                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DFD5] text-[#2A1E35] group-hover:text-[#C5A059] flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-black text-[#2A1E35] tracking-tight mb-1 font-serif">
                  {s.num}
                </div>
                <div className="text-xs sm:text-sm font-black text-[#2A1E35] mb-1">
                  {s.label}
                </div>
                <div className="text-[11px] text-[#7A7382] font-medium leading-normal">
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
