import React, { useEffect } from 'react';
import {
  ArrowRight,
  ClipboardCheck,
  Flame,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Calendar,
  MessageSquare,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

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
      title: 'مرحله اول: ارزیابی بالینی و شناسایی چرخه منفی',
      sessions: 'جلسات ۱ تا ۳',
      desc: 'در این فاز، تاریخچه شکل‌گیری رابطه، الگوهای تعارض، طرحواره‌های ناسازگار هر دو پارتنر و سبک‌های دلبستگی ارزیابی می‌شود. یک جلسه مشترک و در صورت نیاز جلسات فردی مجزا برای هر یک از همسران برگزار می‌شود تا بدون ترس ناگفته‌ها مطرح گردد.',
      deliverables: [
        'ترسیم نمودار چرخه معیوب دعوا (انتقاد - دفاع - کناره‌گیری)',
        'اجرای تست‌های بالینی تشخیصی دلبستگی و رضایت زناشویی',
        'مشخص کردن اهداف درمانی شفاف با توافق هر دو طرف',
      ],
    },
    {
      num: '۰۲',
      title: 'مرحله دوم: تنش‌زدایی و تثبیت بحران (De-escalation)',
      sessions: 'جلسات ۴ تا ۶',
      desc: 'هدف این مرحله متوقف ساختن فوری رفتارهای ویرانگر، متلک‌گویی، قهر و تهدید به طلاق است. همسران یاد می‌گیرند که دشمن واقعی رابطه، «چرخه منفی» است نه پارتنرشان. با یادگیری مهارت وقفه و مدیریت فیزیولوژیک خشم، آرامش نسبی به خانه بازمی‌گردد.',
      deliverables: [
        'مهار هیجانات واکنشی شدید و توقف ۴ ویرانگر گاتمن',
        'کاهش زمان قهرها از چند روز به کمتر از چند ساعت',
        'ایجاد فضای امن روانی اولیه برای آغاز مکالمات عمیق‌تر',
      ],
    },
    {
      num: '۰۳',
      title: 'مرحله سوم: بازسازی پیوند عاطفی و دسترسی‌پذیری هیجانی',
      sessions: 'جلسات ۷ تا ۱۰',
      desc: 'قلب تپنده زوج‌درمانی هیجان‌مدار (EFT) در این مرحله است. همسر منزوی و گریزنده یاد می‌گیرد از غار تنهایی خود بیرون بیاید و احساسات پنهانش را بیان کند، و همسر شاکی و انتقادگر یاد می‌گیرد ترس از رها شدن و نیاز به صمیمیت را به جای خشم و کنایه ابراز نماید.',
      deliverables: [
        'بیان آسیب‌پذیری و احساسات دست‌اول دلبستگی بدون جبهه‌گیری',
        'احیای محبت کلامی، نوازش و صمیمیت زناشویی و جنسی',
        'ترمیم ترومای دلخوری‌ها، پیمان‌شکنی‌ها یا بی‌اعتمادی‌های گذشته',
      ],
    },
    {
      num: '۰۴',
      title: 'مرحله چهارم: تحکیم دستاوردها و پیشگیری از عود تعارضات',
      sessions: 'جلسات ۱۱ تا ۱۲+',
      desc: 'در فاز پایانی، پروتکل‌های پیشگیری از لغزش تدوین می‌شود. زوجین با اعتمادبه‌نفس بالا مسائل روزمره (مالی، فرزندپروری، دخالت اطرافیان) را به روش جدید حل می‌کنند و به استقلال و امنیت عاطفی پایدار می‌رسند.',
      deliverables: [
        'تدوین منشور و قوانین جدید خانه و رابطه',
        'تنظیم جلسات فالوآپ و چک‌این دوره‌ای (هر ۳ ماه یک‌بار)',
        'پایان موفقیت‌آمیز دوره درمان با پیوند محکم و رضایت بالا',
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </a>

          <div className="flex items-center text-lg font-black text-[#44386B]" dir="ltr">
            <span>Z</span>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <span>jdarman.ir</span>
          </div>
        </div>
      </div>

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">مراحل و پروتکل درمانی</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-[#8FAF9B]/30">
            پروتکل بالینی استاندارد بین‌المللی
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-4">
            نقشه راه و مراحل ۴ گانه زوج‌درمانی
          </h1>
          <p className="text-xs sm:text-base text-[#6F6B78] leading-relaxed">
            درمان بالینی روابط عاطفی یک فرایند ساختاریافته علمی بر اساس رویکرد هیجان‌مدار (EFT) است. در طول جلسات چه اتفاقی می‌افتد؟
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-8 mb-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-black text-[#6D5AA8]/30 font-sans" dir="ltr">
                  {s.num}
                </span>
                <span className="bg-[#f2eff8] text-[#6D5AA8] text-xs font-black px-3.5 py-1 rounded-full border border-[#6D5AA8]/20">
                  {s.sessions}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-black text-[#44386B] mb-3">
                {s.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed mb-6 text-justify">
                {s.desc}
              </p>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5E0EA]">
                <span className="text-xs font-black text-[#44386B] block mb-2">
                  دستاوردها و تمرین‌های این مرحله:
                </span>
                <ul className="space-y-2">
                  {s.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-[#292733] flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#5e826b] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Session Rules Box */}
        <div className="bg-[#edf5f0] p-6 sm:p-8 rounded-3xl border border-[#d8e8dd] mb-12">
          <h3 className="text-base font-black text-[#292733] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#5e826b]" />
            <span>اصول حاکم بر اتاق درمان مهناز خوینی</span>
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#44386B]">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5e826b] mt-2 shrink-0" />
              <span><strong>عدم قضاوت و بی‌طرفی مطلق:</strong> درمانگر وکیل هیچ‌یک از طرفین نیست؛ درمانگر حامی سلامت رابطه است.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5e826b] mt-2 shrink-0" />
              <span><strong>محرمانگی بالینی ۱۰۰٪:</strong> تمامی اطلاعات و صحبت‌های جلسات تحت سوگند حرفه‌ای نظام روان‌شناسی محرمانه است.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5e826b] mt-2 shrink-0" />
              <span><strong>مدت زمان هر جلسه:</strong> جلسات زوجی ۹۰ دقیقه و جلسات انفرادی ۶۰ دقیقه برگزار می‌گردد.</span>
            </li>
          </ul>
        </div>

        {/* Action Callout */}
        <div className="bg-gradient-to-r from-[#44386B] to-[#6D5AA8] rounded-3xl p-8 text-white text-center shadow-lg">
          <h3 className="text-xl font-black mb-2">
            برای شروع مسیر درمانی آماده‌اید؟
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mb-6 max-w-lg mx-auto">
            پیش از تعیین وقت، می‌توانید با شرکت در تست آنلاین رایگان سلامت رابطه وضعیت خود را بسنجید یا مستقیماً برای هماهنگی جلسه پیام دهید.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onNavigateContact}
              className="px-6 py-3 bg-white text-[#44386B] rounded-full font-black text-xs shadow hover:bg-[#FAF8F5] transition-all cursor-pointer"
            >
              هماهنگی جلسه اول (پذیرش)
            </button>
            <button
              onClick={onNavigateTools}
              className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold text-xs backdrop-blur-xs transition-all cursor-pointer"
            >
              انجام تست آنلاین رابطه (انریچ)
            </button>
          </div>
        </div>

        <StandaloneSeoGuide routeKey="process" />
      </div>
    </div>
  );
};
