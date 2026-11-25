import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ClinicSpaceFigure } from './ClinicSpaceFigure';

interface ProcessSectionProps {
  onNavigateProcess?: () => void;
}

const STEPS = [
  {
    step: '۰۱',
    title: 'ارزیابی و شنیده‌شدن هر دو طرف',
    desc: 'در جلسه اول، تاریخچه رابطه و نگاه هر یک از زوجین با بی‌طرفی کامل شنیده می‌شود تا تصویر دقیقی از چرخه فعلی شکل بگیرد.',
  },
  {
    step: '۰۲',
    title: 'کاهش تنش و مهار چرخه دفاعی',
    desc: 'پیش از پرداختن به ریشه‌های عمیق‌تر، الگوهای انفجاری یا قهرهای طولانی مهار می‌شوند تا گفت‌وگو دوباره امن شود.',
  },
  {
    step: '۰۳',
    title: 'بازسازی پیوند و بیان نیازهای واقعی',
    desc: 'درمانگر کمک می‌کند پشت خشم یا سکوت، ترس‌ها و نیازهای دلبستگی بدون متهم‌کردن بیان و شنیده شوند.',
  },
  {
    step: '۰۴',
    title: 'تثبیت و استقلال در مهارت‌ها',
    desc: 'زوجین یاد می‌گیرند نشانه‌های لغزش را به‌موقع تشخیص دهند و بدون نیاز دائمی به اتاق درمان، پیوند خود را ترمیم کنند.',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onNavigateProcess }) => {
  return (
    <section id="process" className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              شفافیت پیش از شروع
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              در جلسات زوج‌درمانی چه اتفاقی می‌افتد؟
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              هدف جلسات دادگاه‌گرفتن یا قضاوت درباره اینکه چه کسی حق دارد نیست؛ بلکه تغییر الگویی
              است که هر دو نفر را خسته کرده است.
            </p>
          </div>

          {onNavigateProcess && (
            <button
              type="button"
              onClick={onNavigateProcess}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap"
            >
              <span>توضیح کامل مراحل ۴گانه</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-extrabold text-[#3D5E4E] block mb-4">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#292D2A] mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Common Reassurance Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <div className="bg-[#EDF2EE]/70 border border-[#D3E0D7] rounded-xl p-5 sm:p-6">
            <h3 className="text-sm font-bold text-[#344A42] mb-2">
              اگر همسرم تمایلی به شرکت در جلسه نداشته باشد چطور؟
            </h3>
            <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
              می‌توانید به‌تنهایی با یک جلسه ارزیابی فردی شروع کنید. در رویکرد سیستمیک، تغییر نحوه
              واکنش یک نفر می‌تواند پویایی کل رابطه را آرام‌تر کند و زمینه حضور طرف مقابل را فراهم سازد.
            </p>
          </div>
          <div className="bg-[#EDF2EE]/70 border border-[#D3E0D7] rounded-xl p-5 sm:p-6">
            <h3 className="text-sm font-bold text-[#344A42] mb-2">
              آیا جلسات حضوری و آنلاین از نظر کیفیت تفاوت دارند؟
            </h3>
            <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
              ساختار بالینی جلسات آنلاین کاملاً منطبق بر جلسات حضوری است و بسیاری از زوجین در فضای
              آرام منزل یا در دو مکان مجزا، با تمرکز بیشتری گفت‌وگو را پیش می‌برند.
            </p>
          </div>
        </div>

        {/* Real Session Environments (In-Person EFT Room + Online Controlled-Light Room) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClinicSpaceFigure
            space="navy-eft-counseling-room"
            aspectRatio="4/5"
          />
          <ClinicSpaceFigure
            space="controlled-light-online-room"
            aspectRatio="4/5"
          />
        </div>
      </div>
    </section>
  );
};
