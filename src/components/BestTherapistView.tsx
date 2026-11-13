import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  BadgeCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  MapPin,
  Video,
  Clock,
  Sparkles,
  Phone,
  ChevronDown,
  Building2,
  Star,
  Users,
  Compass,
  AlertTriangle
} from 'lucide-react';
import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface BestTherapistViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
  onSelectService: (slug: string) => void;
  onSelectArticle: (slug: string) => void;
}

export const BestTherapistView: React.FC<BestTherapistViewProps> = ({
  onBack,
  onNavigateContact,
  onNavigateTools,
  onSelectService,
  onSelectArticle,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(0);

  const criteriaList = [
    {
      title: '۱. پروانه رسمی اشتغال تخصصی از سازمان نظام روان‌شناسی',
      desc: 'بسیاری از افراد صرفاً عضویت دانشجویی یا کارشناسی دارند. یک زوج درمانگر خوب باید دارای پروانه رسمی اشتغال تخصصی با شماره ثبت شده در سازمان نظام روانشناسی و مشاوره ایران (مانند پروانه ۱۴۱۴۰۸۳ مهناز خوینی) باشد.',
      tag: 'شرط حیاتی قانونی'
    },
    {
      title: '۲. تسلط به رویکرد استاندارد بین‌المللی EFT (هیجان‌مدار)',
      desc: 'روش هیجان‌مدار (Emotionally Focused Therapy) استاندارد طلایی زوج درمانی در دانشگاه‌های جهان است که نرخ موفقیت بالای ۷۵٪ در ترمیم پیوند دلبستگی و کاهش تنش‌های پایدار دارد.',
      tag: 'استاندارد جهانی'
    },
    {
      title: '۳. بی‌طرفی مطلق و پرهیز از قضاوت یا جانبداری جنسیتی',
      desc: 'درمانگر نباید در جایگاه داور بنشیند یا حق را به زن یا شوهر بدهد؛ بلکه با نگاه سیستمی، چرخه منفی ارتباطی را شناسایی و هر دو نفر را برای شکستن آن یاری می‌کند.',
      tag: 'اخلاق بالینی'
    },
    {
      title: '۴. تجربه عملی بالا در مدیریت بحران‌های حاد (خیانت و طلاق)',
      desc: 'زوج درمانی نیاز به تجربه بالینی صدها پرونده واقعی دارد تا در مواجهه با شوک خیانت، خشم انفجاری و طلاق عاطفی، بحران در جلسات اول تثبیت و مهار شود.',
      tag: 'سابقه و مهارت'
    },
    {
      title: '۵. رعایت ۱۰۰٪ محرمانگی و امنیت حریم خصوصی',
      desc: 'تمامی گفتگوها، رازها و اطلاعات ضبط‌نشده در اتاق درمان محفوظ مانده و طبق سوگندنامه بالینی هرگز به خانواده‌ها یا اشخاص ثالث درز نمی‌کند.',
      tag: 'تعهد حرفه‌ای'
    },
    {
      title: '۶. انعطاف در ارائه خدمات حضوری و آنلاین باکیفیت',
      desc: 'فراهم بودن امکان جلسات حضوری در محیط استاندارد کلینیکال و همچنین جلسات تصویری آنلاین برای مراجعان شهرستان‌ها و خارج از کشور.',
      tag: 'دسترسی همه‌جانبه'
    }
  ];

  const tehranDistricts = [
    { name: 'غرب تهران (صادقیه و اشرفی اصفهانی)', desc: 'محل کلینیک تخصصی پیوند امن، دسترسی سریع از مترو صادقیه و بزرگراه‌های اصلی' },
    { name: 'کرج و استان البرز (عظیمیه، گوهردشت، مهرشهر، جهانشهر)', desc: 'دسترسی کمتر از ۳۰ دقیقه از اتوبان تهران-کرج و مترو صادقیه به کلینیک یا جلسات آنلاین هفتگی' },
    { name: 'پونک، جنت‌آباد و شهران', desc: 'دسترسی مستقیم از بزرگراه اشرفی اصفهانی، ستاری و نیایش' },
    { name: 'سعادت‌آباد و شهرک غرب', desc: 'مسیر سرراست از بزرگراه یادگار امام، چمران و میدان کاج' },
    { name: 'مرکز، شمال و شرق تهران', desc: 'دسترسی از طریق همت، حکیم و مترو یا استفاده از جلسات آنلاین تصویری' },
  ];

  const faqs = [
    {
      q: 'بهترین زوج درمان خوب در تهران و کرج کیست و چطور انتخاب کنیم؟',
      a: 'بهترین زوج درمان خوب متخصصی است که علاوه بر تحصیلات تکمیلی کارشناسی ارشد یا دکتری روانشناسی بالینی، دارای پروانه رسمی اشتغال تخصصی از سازمان نظام روانشناسی (قابل استعلام) باشد، رویکردهای شواهدنگر EFT و گاتمن را اجرا کند و سابقه صدها پرونده موفق داشته باشد. مهناز خوینی با پروانه ۱۴۱۴۰۸۳ و بیش از ۱۵,۰۰۰ ساعت مشاوره تخصصی بالینی از برجسته‌ترین درمانگران تهران و البرز است.'
    },
    {
      q: 'آیا مراجعان زوج درمان اصفهان و زوج درمان کرمان می‌توانند مشاوره آنلاین داشته باشند؟',
      a: 'بله، انجمن روان‌شناسی آمریکا (APA) در تحقیقات بالینی گسترده تایید کرده است که زوج درمانی آنلاین تصویری با پروتکل EFT اثربخشی کاملاً مشابهی با جلسات حضوری دارد. مراجعان ما از اصفهان، کرمان، شیراز، مشهد، تبریز و خارج از کشور به طور منظم در جلسات آنلاین تصویری با رازداری ۱۰۰٪ شرکت می‌کنند.'
    },
    {
      q: 'تفاوت یک زوج درمان گر بالینی با مشاور خانواده یا روانشناس عمومی چیست؟',
      a: 'روانشناس عمومی روی درمان تعارضات درون‌فردی (اضطراب یا افسردگی یک شخص) کار می‌کند؛ در حالی که زوج درمان گر بالینی تخصص ویژه در تحلیل «تعامل دوطرفه، سبک‌های دلبستگی، ترمیم زخم خیانت و زبان بدن زوجین» دارد و بدون موضع‌گیری، رابطه را جراحی و بازسازی می‌کند.'
    },
    {
      q: 'طول دوره جلسات زوج درمانی معمولاً چقدر است؟',
      a: 'به طور متوسط بین ۸ تا ۱۶ جلسه هفتگی ۶۰ تا ۹۰ دقیقه‌ای زمان می‌برد. مراحل درمان شامل ارزیابی اولیه، مصاحبه‌های فردی، مداخله هیجانی مشترک و تثبیت دستاوردها برای جلوگیری از بازگشت تعارضات است.'
    },
    {
      q: 'آدرس کلینیک حضوری در تهران کجاست و چگونه وقت بگیریم؟',
      a: 'جلسات حضوری در مرکز تخصصی روانشناسی پیوند امن واقع در غرب تهران، منطقه ۲ (دسترسی آسان از فلکه دوم صادقیه و بزرگراه اشرفی اصفهانی) برگزار می‌شود. رزرو وقت حضوری یا آنلاین از طریق شماره ۰۹۱۹۹۰۸۷۲۶۴ در واتساپ و تماس مستقیم امکان‌پذیر است.'
    }
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24 text-[#2A1E35]">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-[#E8DFD5] sticky top-0 z-40">
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

      <div className="container-custom max-w-5xl pt-8 sm:pt-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8494] mb-8">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">بهترین زوج درمانگر خوب در تهران و آنلاین</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E8DFD5] shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#C5A059]/15 via-transparent to-transparent pointer-events-none rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#FAF5EB] text-[#A67C2E] border border-[#C5A059]/40 px-3.5 py-1.5 rounded-full text-xs font-black mb-4">
              <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              <span>راهنمای مرجع انتخاب زوج درمانگر بالینی</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#241A35] leading-tight sm:leading-snug mb-5">
              بهترین زوج درمانگر خوب در تهران و آنلاین؛{' '}
              <span className="text-[#6D5AA8] block sm:inline">راهنمای انتخاب متخصص بالینی با صلاحیت</span>
            </h1>

            <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed max-w-3xl mb-8 text-justify">
              انتخاب یک <strong>زوج درمانگر خوب در تهران یا به صورت آنلاین</strong> می‌تواند تفاوت میان فروپاشی یک زندگی مشترک و بازسازی عشقی پایدار و عمیق باشد. در این صفحه تخصصی، معیارهای علمی، نحوه استعلام پروانه رسمی، رویکردهای اثبات‌شده EFT و شرایط دریافت نوبت در کلینیک پیوند امن غرب تهران و سراسر جهان را بررسی می‌کنیم.
            </p>

            {/* Quick Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E8DFD5] mb-8">
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DFD5] text-center">
                <ShieldCheck className="w-5 h-5 text-[#3E6B56] mx-auto mb-1.5" />
                <span className="block text-xs font-black text-[#241A35]">پروانه ۱۴۱۴۰۸۳</span>
                <span className="text-[10px] text-[#8A8494]">نظام روان‌شناسی ایران</span>
              </div>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DFD5] text-center">
                <Award className="w-5 h-5 text-[#C5A059] mx-auto mb-1.5" />
                <span className="block text-xs font-black text-[#241A35]">رویکرد بالینی EFT</span>
                <span className="text-[10px] text-[#8A8494]">استاندارد جهانی سو جانسون</span>
              </div>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DFD5] text-center">
                <Building2 className="w-5 h-5 text-[#6D5AA8] mx-auto mb-1.5" />
                <span className="block text-xs font-black text-[#241A35]">کلینیک پیوند امن</span>
                <span className="text-[10px] text-[#8A8494]">غرب تهران (صادقیه)</span>
              </div>
              <div className="bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8DFD5] text-center">
                <Video className="w-5 h-5 text-[#3E6B56] mx-auto mb-1.5" />
                <span className="block text-xs font-black text-[#241A35]">مشاوره آنلاین امن</span>
                <span className="text-[10px] text-[#8A8494]">سراسر ایران و خارج از کشور</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A7%D8%B2%20%D8%B7%D8%B1%DB%8C%D9%82%20%D8%B5%D9%81%D8%AD%D9%87%20%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DA%AF%D8%B1%20%D8%AA%D9%87%D8%B1%D8%A7%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85%20%D9%88%20%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D8%B3%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%AC%D9%84%D8%B3%D9%87%20%D8%AF%D8%A7%D8%B1%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-white font-black text-xs sm:text-sm px-7 py-4 rounded-full shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>رزرو نوبت جلسه حضوری تهران یا آنلاین (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>

              <button
                onClick={onNavigateTools}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#241A35] font-extrabold text-xs sm:text-sm px-6 py-4 rounded-full border border-[#E8DFD5] transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#6D5AA8]" />
                <span>شروع تست آنلاین سلامت رابطه (انریچ)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Clinician Profile & Credentials */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative inline-block mx-auto rounded-2xl overflow-hidden border-2 border-[#C5A059]/40 shadow-lg mb-4">
                <img
                  src="/images/mahnaz-khoini-thumb.webp"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg'; }}
                  alt="مهناز خوینی بهترین زوج درمانگر تهران"
                  className="w-64 h-72 object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#241A35] to-transparent p-3 text-white text-right">
                  <span className="block font-black text-sm">مهناز خوینی</span>
                  <span className="text-[11px] text-white/80">زوج درمانگر بالینی</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-black text-[#6D5AA8] bg-[#F2EEF8] px-3 py-1 rounded-full border border-[#6D5AA8]/25 inline-block">
                هویت و سوابق علمی درمانگر
              </span>
              <h2 className="text-xl sm:text-3xl font-black text-[#241A35]">
                درباره مهناز خوینی؛ مسئول فنی کلینیک پیوند امن تهران
              </h2>
              <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed text-justify">
                مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی با شماره پروانه رسمی اشتغال تخصصی <strong>۱۴۱۴۰۸۳</strong> از سازمان نظام روان‌شناسی و مشاوره ایران است. وی بیش از ۱۲ سال در حوزه درمان تعارضات زناشویی، بازسازی پیوند عاطفی پس از خیانت، پیشگیری از طلاق و سکس‌تراپی فعالیت داشته و بالغ بر ۱۵,۰۰۰ ساعت مشاوره تخصصی حضوری و بین‌المللی را به انجام رسانده است.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#241A35]">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#3E6B56] shrink-0" />
                  <span>دوره جامع و سوپرویژن رسمی در رویکرد درمان هیجان‌مدار (EFT) تحت نظارت مدرسان بین‌المللی ICEEFT.</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#3E6B56] shrink-0" />
                  <span>تسلط بر متد زوج‌درمانی جان گاتمن و آزمون‌های سنجش شاخص طلاق و ۴ سوارکار.</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#3E6B56] shrink-0" />
                  <span>طرحواره‌درمانی تخصصی زوجین جهت ریشه‌یابی تله‌های ناسازگار دوران کودکی در ازدواج.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: 6 Vital Criteria for Choosing a Good Therapist */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#241A35] mb-2">
              ۶ معیار طلایی برای انتخاب بهترین زوج درمانگر خوب
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6B78]">
              پیش از سپردن سرنوشت رابطه خود به یک درمانگر، اطمینان حاصل کنید که شرایط زیر فراهم باشد:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteriaList.map((crit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E8DFD5] shadow-xs hover:border-[#6D5AA8]/40 transition-all">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-black bg-[#FAF5EB] text-[#A67C2E] border border-[#C5A059]/30 px-2.5 py-0.5 rounded-full">
                    {crit.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#3E6B56]" />
                </div>
                <h3 className="text-sm sm:text-base font-black text-[#241A35] mb-2">
                  {crit.title}
                </h3>
                <p className="text-xs text-[#5E5868] leading-relaxed text-justify">
                  {crit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Comparison Matrix: Specialist vs Unqualified */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] shadow-xs mb-12">
          <h2 className="text-lg sm:text-2xl font-black text-[#241A35] mb-6 text-center">
            تفاوت زوج درمانگر متخصص بالینی با مشاوران عمومی و روانشناسان زرد
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-[#E8DFD5] bg-[#FAF8F5]">
                  <th className="p-3.5 font-black text-[#241A35]">شاخص</th>
                  <th className="p-3.5 font-black text-[#3E6B56]">زوج درمانگر بالینی متخصص (مرکز پیوند امن)</th>
                  <th className="p-3.5 font-black text-[#D9846A]">مشاوران عمومی / کوچ‌های اینستاگرامی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFD5]">
                <tr>
                  <td className="p-3.5 font-bold">صلاحیت قانونی</td>
                  <td className="p-3.5 text-[#3E6B56] font-bold">دارای پروانه رسمی اشتغال تخصصی نظام روانشناسی</td>
                  <td className="p-3.5 text-[#6F6B78]">فاقد پروانه بالینی یا عضویت دانشجویی ساده</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">رویکرد درمانی</td>
                  <td className="p-3.5 text-[#3E6B56] font-bold">پروتکل‌های بین‌المللی EFT و گاتمن</td>
                  <td className="p-3.5 text-[#6F6B78]">نصیحت‌های شخصی، سلیقه‌ای و عامیانه</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">موضع در جلسه</td>
                  <td className="p-3.5 text-[#3E6B56] font-bold">بی‌طرفی مطلق و هدف قرار دادن چرخه تخریبی</td>
                  <td className="p-3.5 text-[#6F6B78]">قضاوت زودهنگام و مقصر شناختن یکی از زوجین</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">مهارت در خیانت</td>
                  <td className="p-3.5 text-[#3E6B56] font-bold">پروتکل سه‌مرحله‌ای التیام تروما و بازسازی شفافیت</td>
                  <td className="p-3.5 text-[#6F6B78]">توصیه به بخشش فوری یا جدایی شتاب‌زده</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">محرمانگی جلسات</td>
                  <td className="p-3.5 text-[#3E6B56] font-bold">۱۰۰٪ رازداری طبق سوگندنامه پزشکی و اخلاق بالینی</td>
                  <td className="p-3.5 text-[#6F6B78]">عدم تعهد قانونی به حفظ اسرار مراجع</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SEO & Schema.org Certification Summary Card */}
        <div className="mb-12">
          <SeoCertificationSummaryCard />
        </div>

        {/* Section 4: Physical Clinic in Tehran West */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E8DFD5] mb-12">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-black text-[#A67C2E] bg-[#FAF5EB] px-3 py-1 rounded-full border border-[#C5A059]/30 inline-block mb-2">
              کلینیک حضوری غرب تهران
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#241A35] mb-2">
              موقعیت مکانی کلینیک زوج درمانی پیوند امن در تهران
            </h2>
            <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed">
              کلینیک پیوند امن با مسئولیت فنی مهناز خوینی در منطقه ۲ تهران واقع شده و به دلیل دسترسی مستقیم به بزرگراه‌ها و خطوط مترو، رفت‌وآمد بدون استرس ترافیک را برای زوج‌ها فراهم می‌سازد:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tehranDistricts.map((d, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E8DFD5] shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="text-sm font-black text-[#241A35]">{d.name}</h3>
                </div>
                <p className="text-xs text-[#6F6B78] leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Online Couples Therapy for Other Cities & Diaspora */}
        <div className="bg-gradient-to-r from-[#3E2F5B] to-[#5E4B82] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="inline-block bg-white/20 text-white text-[11px] font-black px-3 py-1 rounded-full backdrop-blur-xs">
                خدمت سراسری و بین‌المللی
              </span>
              <h2 className="text-xl sm:text-3xl font-black">
                مشاوره آنلاین با بهترین زوج درمانگر تهران از شیراز، مشهد و خارج از کشور
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed text-justify">
                اگر ساکن شیراز، مشهد، اصفهان، تبریز یا سایر شهرستان‌ها هستید یا به عنوان مهاجر در کانادا، اروپا، آمریکا و استرالیا زندگی می‌کنید، نیازی نیست به دلیل بعد مسافت از دانش برجسته‌ترین متخصصان بالینی محروم بمانید. جلسات تصویری آنلاین با رعایت کامل رمزنگاری، هماهنگی دقیق منطقه زمانی و امکان پرداخت ارزی (پی‌پال، وایز، تتر) برگزار می‌شود.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold pt-2 text-[#FAF5EB]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>اثربخشی بالینی معادل جلسات حضوری</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>حفظ ۱۰۰٪ حریم خصوصی در محافل فامیلی</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>امکان اتصال همزمان از دو لوکیشن مختلف</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-4">
              <Phone className="w-8 h-8 text-[#C5A059] mx-auto" />
              <h3 className="text-sm font-black text-white">هماهنگی نوبت آنلاین</h3>
              <p className="text-xs text-white/80">
                ارسال پیام در واتساپ جهت دریافت اولین وقت در دسترس
              </p>
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-white hover:bg-[#FAF8F5] text-[#3E2F5B] text-xs font-black rounded-full shadow transition-all cursor-pointer"
              >
                ارسال پیام در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)
              </a>
            </div>
          </div>
        </div>

        {/* Section 6: FAQ Accordion */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#241A35] mb-2">
              پرسش‌های متداول درباره انتخاب بهترین زوج درمانگر
            </h2>
            <p className="text-xs sm:text-sm text-[#6F6B78]">
              پاسخ کوتاه و شفاف به پرسش‌های مراجعان پیش از شروع اولین جلسه مشاوره:
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaqId === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                    isOpen ? 'border-[#6D5AA8]/50 shadow-md ring-1 ring-[#6D5AA8]/20' : 'border-[#E8DFD5]'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaqId(isOpen ? null : idx)}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-[#241A35]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#6D5AA8] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5E5868] leading-relaxed border-t border-[#F0EBE2] text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-black text-[#241A35] mb-1">
              آماده نجات و بازسازی صمیمیت در زندگی مشترک هستید؟
            </h3>
            <p className="text-xs text-[#6F6B78]">
              همین امروز اولین گام را برای توقف دعواهای تکراری و احیای عشق بردارید.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D8%AF%D8%B1%DB%8C%D8%A7%D9%81%D8%AA%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-[#3E2F5B] hover:bg-[#241A35] text-white font-black text-xs rounded-full shadow-md transition-all cursor-pointer"
            >
              درخواست رزرو نوبت
            </a>
            <button
              onClick={onNavigateTools}
              className="w-full sm:w-auto px-5 py-3.5 bg-[#FAF8F5] hover:bg-[#F2EEF8] text-[#3E2F5B] border border-[#E8DFD5] font-bold text-xs rounded-full transition-all cursor-pointer"
            >
              تست سلامت رابطه
            </button>
          </div>
        </div>

        <StandaloneSeoGuide routeKey="bestTherapist" maxWidthClass="max-w-5xl" />
      </div>
    </div>
  );
};
