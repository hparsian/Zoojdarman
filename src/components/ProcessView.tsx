import React, { useEffect } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';
import { ClinicSpaceFigure } from './ClinicSpaceFigure';

interface ProcessViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
}

export const ProcessView: React.FC<ProcessViewProps> = ({
  onBack,
  onNavigateContact,
  onNavigateTools,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const steps = [
    {
      num: '۰۱',
      title: 'مرحله اول: ارزیابی شناختی-رفتاری و نقشه تعامل',
      sessions: 'جلسات ۱ تا ۳',
      desc: 'در این فاز، تاریخچه رابطه، الگوهای رفتاری تقابلی، افکار خودکار ناکارآمد و اسنادهای منفی هر دو پارتنر بررسی می‌شود. یک جلسه مشترک و در صورت نیاز جلسات فردی مجزا برای ارزیابی دقیق و بدون قضاوت برگزار می‌شود.',
      deliverables: [
        'ترسیم نقشه چرخه رفتاری (انتقاد — دفاع — کناره‌گیری) و باورهای محرک آن',
        'اجرای ارزیابی‌های رضایت زناشویی و شناخت الگوهای ارتباطی در صورت نیاز',
        'مشخص کردن اهداف رفتاری و ارتباطی شفاف با توافق هر دو طرف',
      ],
    },
    {
      num: '۰۲',
      title: 'مرحله دوم: تنش‌زدایی و کنترل رفتارهای تقابلی',
      sessions: 'جلسات ۴ تا ۶',
      desc: 'هدف این مرحله متوقف ساختن رفتارهای ویرانگر، تحقیر، قهر طولانی و واکنش‌های تکانشی است. همسران تکنیک‌های وقفه سازنده، خودتنظیمی هیجانی و کاهش تبادل رفتارهای منفی را تمرین می‌کنند.',
      deliverables: [
        'مهار واکنش‌های کلامی تند و توقف الگوهای تخریبی گفت‌وگو',
        'افزایش تبادل‌های مثبت روزمره و کاهش مدت قهرهای طولانی',
        'ایجاد چارچوب امن اولیه برای تمرین مهارت‌های ارتباطی',
      ],
    },
    {
      num: '۰۳',
      title: 'مرحله سوم: بازسازی شناختی و آموزش مهارت حل مسئله',
      sessions: 'جلسات ۷ تا ۱۰',
      desc: 'هسته اصلی زوج‌درمانی شناختی-رفتاری (CBCT) در این مرحله شکل می‌گیرد. تحریف‌های شناختی مانند ذهن‌خوانی و فاجعه‌سازی اصلاح می‌شوند و زوجین روش بیان دقیق خواسته‌ها، گوش‌دادن فعال و حل مسئله مشترک را می‌آموزند.',
      deliverables: [
        'چالش با افکار خودکار ناکارآمد و اسنادهای بدبینانه درباره نیت همسر',
        'تمرین مهارت‌های ابراز وجود محترمانه، شنود فعال و مذاکره دوطرفه',
        'بازسازی اعتماد و صمیمیت بر پایه تعهدات رفتاری شفاف و قابل اندازه‌گیری',
      ],
    },
    {
      num: '۰۴',
      title: 'مرحله چهارم: تثبیت مهارت‌ها و پیشگیری از بازگشت الگوها',
      sessions: 'جلسات ۱۱ تا ۱۲+',
      desc: 'در فاز پایانی، مهارت‌های شناختی و حل مسئله در موضوعات روزمره (مالی، فرزندپروری، مرزبندی با خانواده‌ها) آزموده می‌شوند و زوجین برنامه نگهداری رابطه و پیشگیری از عود را تدوین می‌کنند.',
      deliverables: [
        'تدوین قراردادهای شفاف گفت‌وگو و حل اختلاف در خانه',
        'تنظیم جلسات پیگیری و چک‌این با فواصل طولانی‌تر',
        'خودپایشگری زوجین در تشخیص زودهنگام خطاهای شناختی و اصلاح به‌موقع رفتار',
      ],
    },
  ];

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-4xl"
      />

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-[#6B6D67] mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#344A42] cursor-pointer"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">مراحل و پروتکل درمانی</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            پروتکل ساختاریافته مبتنی بر شواهد علمی
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-4">
            نقشه راه و مراحل ۴گانه زوج‌درمانی
          </h1>
          <p className="text-xs sm:text-base text-[#555650] leading-relaxed">
            درمان بالینی روابط یک فرایند گام‌به‌گام بر پایه رویکرد شناختی-رفتاری (CBCT) است. شفافیت مسیر به شما کمک می‌کند بدانید در هر مرحله چه اتفاقی می‌افتد.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-6 mb-12">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#344A42]/35 font-mono" dir="ltr">
                  {s.num}
                </span>
                <span className="text-xs font-semibold text-[#3D5E4E] bg-[#EDF2EE] px-3 py-1 rounded-lg border border-[#D3E0D7]">
                  {s.sessions}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-[#292D2A] mb-3">
                {s.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#555650] leading-[1.9] mb-6 text-justify">
                {s.desc}
              </p>

              <div className="bg-[#F4F1EC] p-5 rounded-xl border border-[#E5E0D8]">
                <span className="text-xs font-bold text-[#344A42] block mb-2.5">
                  اهداف و محورهای این مرحله:
                </span>
                <ul className="space-y-2">
                  {s.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-[#292D2A] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Session Rules Box */}
        <div className="bg-[#EDF2EE] p-6 sm:p-8 rounded-2xl border border-[#D3E0D7] mb-10">
          <h3 className="text-base font-extrabold text-[#292D2A] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#344A42]" />
            <span>اصول حرفه‌ای اتاق درمان مهناز خوینی</span>
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#292D2A] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#344A42] mt-2 shrink-0" />
              <span><strong>بی‌طرفی کامل و نبود قضاوت:</strong> درمانگر حامی سلامت رابطه و شنیده شدن منصفانه هر دو طرف است، نه داور یا مقصریاب.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#344A42] mt-2 shrink-0" />
              <span><strong>محرمانگی حرفه‌ای مطابق منشور نظام روان‌شناسی:</strong> تمامی اطلاعات و صحبت‌های جلسات محرمانه می‌ماند (به جز استثنائات قانونی خطر جانی فوری).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#344A42] mt-2 shrink-0" />
              <span><strong>ساختار زمانی مشخص:</strong> جلسات زوجی ۶۰ تا ۹۰ دقیقه و جلسات انفرادی ۴۵ تا ۶۰ دقیقه برگزار می‌شود.</span>
            </li>
          </ul>
        </div>

        {/* Clinic Rooms Showcase */}
        <div className="mb-10">
          <h3 className="text-base sm:text-lg font-extrabold text-[#292D2A] mb-4">
            فضای برگزاری جلسات حضوری و آنلاین
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClinicSpaceFigure space="navy-eft-counseling-room" aspectRatio="4/5" />
            <ClinicSpaceFigure space="controlled-light-online-room" aspectRatio="4/5" />
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#344A42] rounded-2xl p-8 text-[#FCFBF8] text-center">
          <h3 className="text-xl font-extrabold mb-2">
            برای شروع مسیر درمانی آماده‌اید؟
          </h3>
          <p className="text-xs sm:text-sm text-[#DCE4DE] mb-6 max-w-lg mx-auto leading-relaxed">
            پیش از تعیین وقت، می‌توانید با ابزارهای خودسنجی رایگان نگاه روشن‌تری به وضعیت رابطه پیدا کنید یا برای هماهنگی جلسه اول اقدام نمایید.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onNavigateContact}
              className="px-6 py-3 bg-[#FCFBF8] text-[#344A42] rounded-lg font-semibold text-xs hover:bg-[#F4F1EC] transition-colors cursor-pointer"
            >
              هماهنگی جلسه اول (پذیرش)
            </button>
            <button
              type="button"
              onClick={onNavigateTools}
              className="px-6 py-3 bg-[#273932] hover:bg-[#1F2E28] text-[#FCFBF8] border border-[#8FAE9B]/30 rounded-lg font-semibold text-xs transition-colors cursor-pointer"
            >
              ابزارهای خودسنجی رابطه
            </button>
          </div>
        </div>

        <StandaloneSeoGuide routeKey="process" />
      </div>
    </div>
  );
};
