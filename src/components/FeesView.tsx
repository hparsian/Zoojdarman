import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Calculator,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  Clock,
  Award,
  CreditCard,
  Building2,
  FileText,
  Sparkles,
  ChevronDown,
  Globe,
  Coins,
  ChevronLeft
} from 'lucide-react';
import { registerFaqSchema } from '../seo';

interface FeesViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onSelectService?: (slug: string) => void;
}

export const FeesView: React.FC<FeesViewProps> = ({
  onBack,
  onNavigateContact,
  onSelectService,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ماشین‌حساب تخمین تعداد جلسات
  const [selectedIssue, setSelectedIssue] = useState<'premarital' | 'conflict' | 'infidelity' | 'divorce'>('conflict');
  const [sessionFormat, setSessionFormat] = useState<'inPerson' | 'onlineDomestic' | 'onlineInternational'>('inPerson');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const issuePlans = {
    premarital: {
      title: 'مشاوره پیش از ازدواج و ارزیابی تناسب',
      sessions: '۴ الی ۶ جلسه',
      interval: 'هفته‌ای ۱ جلسه',
      duration: '۴۵ دقیقه انفرادی و ۹۰ دقیقه زوجی',
      focus: 'اجرای آزمون‌های شخصیتی، بررسی استقلال از خانواده، شفافیت مالی و حل تعارض',
      serviceSlug: 'premarital-counseling',
    },
    conflict: {
      title: 'حل دعواهای مکرر، قهر و فاصله عاطفی (EFT)',
      sessions: '۸ الی ۱۲ جلسه',
      interval: 'هفته‌ای ۱ جلسه (در ادامه هر ۲ هفته)',
      duration: '۶۰ تا ۹۰ دقیقه زوجی',
      focus: 'توقف چرخه تعقیب‌کننده-فاصله‌گیر، ترمیم دلبستگی امن و آموزش گفتگوی بدون تحقیر',
      serviceSlug: 'couples-therapy',
    },
    infidelity: {
      title: 'بحران خیانت و بازسازی شوک و اعتماد',
      sessions: '۱۲ الی ۲۰ جلسه (پروتکل ۳ مرحله‌ای)',
      interval: 'هفته‌ای ۱ الی ۲ جلسه در فاز حاد',
      duration: 'جلسات انفرادی تثبیت و جلسات زوجی بازسازی',
      focus: 'مدیریت طغیان تروما، کالبدشکافی علل، قرارداد شفافیت و بازسازی گام‌به‌گام پیوند',
      serviceSlug: 'infidelity-counseling',
    },
    divorce: {
      title: 'تصمیم‌گیری آگاهانه طلاق و توافق کم‌آسیب',
      sessions: '۶ الی ۱۰ جلسه',
      interval: 'هفته‌ای ۱ جلسه',
      duration: '۶۰ دقیقه انفرادی و مشترک',
      focus: 'بررسی عدم قطعیت جدایی، مدیریت هیجان فرزندان، تنظیم توافقات بدون نزاع قضایی',
      serviceSlug: 'divorce-counseling',
    },
  };

  const feesFaqs = [
    {
      q: 'آیا هزینه جلسات زوج‌درمانی تحت پوشش بیمه تکمیلی قرار می‌گیرد؟',
      a: 'بله. از آنجا که جلسات با نظارت مستقیم مهناز خوینی (کارشناس ارشد روان‌شناسی بالینی و دارای پروانه اشتغال رسمی نظام روان‌شناسی به شماره ۱۴۱۴۰۸۳) برگزار می‌شود، در پایان هر دوره درمانی گواهی رسمی سربرگ‌دار با مهر و کد نظام صادر می‌گردد که برای تمامی بیمه‌های تکمیلی (دانا، ایران، البرز، آسیا، پاسارگاد، پارسیان، ما و...) معتبر و قابل استرداد هزینه است.',
    },
    {
      q: 'تعرفه جلسات بر چه اساسی تعیین می‌شود؟',
      a: 'تعرفه‌ها دقیقاً مطابق با مصوبه رسمی هیئت وزیران و سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران برای مقطع کارشناس ارشد با سابقه بالینی بالای ۱۰ سال تنظیم شده است و هیچ‌گونه هزینه مازاد یا غیررسمی دریافت نمی‌شود.',
    },
    {
      q: 'آیا پرداخت هزینه باید به صورت یکجا و پکیجی باشد؟',
      a: 'خیر. در این مرکز هیچ اصراری بر پرداخت‌های پکیجی سنگین نیست و پرداخت به صورت جلسه به جلسه پس از پایان هر جلسه انجام می‌پذیرد تا مراجع با آرامش کامل و بدون فشار مالی فرآیند درمان را پیگیری کند.',
    },
    {
      q: 'اگر یکی از طرفین توان ادامه مالی هفتگی را نداشته باشد، درمان متوقف می‌شود؟',
      a: 'خیر. در پروتکل هیجان‌مدار (EFT)، پس از تثبیت فاز اول، فواصل جلسات را می‌توان به ۲ یا ۳ هفته یک‌بار تنظیم کرد و با تکالیف ساختاریافته خانگی، سرعت و کیفیت درمان را بدون تحمیل بار مالی حفظ نمود.',
    },
    {
      q: 'نحوه پرداخت برای مراجعان آنلاین خارج از کشور چگونه است؟',
      a: 'مراجعان محترم مقیم خارج از ایران می‌توانند معادل هزینه جلسات را از طریق پی‌پال (PayPal)، وایز (Wise)، کردیت‌کارت بین‌المللی یا ارز دیجیتال تتر (USDT) پرداخت نمایند. همچنین در صورت داشتن حساب شتابی در ایران، پرداخت ریالی با کارت به کارت نیز کاملاً امکان‌پذیر است.',
    },
    {
      q: 'چرا مدت زمان جلسات زوج‌درمانی بیشتر از مشاوره فردی است؟',
      a: 'جلسات زوج‌درمانی به دلیل حضور هم‌زمان دو نفر و نیاز به کالبدشکافی تعاملات دونفره، معمولاً بین ۶۰ تا ۹۰ دقیقه طول می‌کشد تا هر دو همسر بدون احساس شتاب‌زدگی فرصت ابراز احساسات و بازپردازش تجربیات را داشته باشند.',
    },
  ];

  useEffect(() => {
    registerFaqSchema(feesFaqs);
  }, []);

  const currentPlan = issuePlans[selectedIssue];

  return (
    <div className="bg-[#FCFAF8] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E8E2D8] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#3E2F5B] hover:text-[#241A35] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            <span>بازگشت به صفحه اصلی</span>
          </a>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] luxury-pulse-gold" />
            <span className="text-xs font-bold text-[#5E5868]">تعرفه مصوب نظام روان‌شناسی ۱۴۰۴</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="py-14 sm:py-20 bg-gradient-to-b from-white via-[#FAF5EB]/40 to-[#FCFAF8] border-b border-[#E8E2D8] relative overflow-hidden">
        <div className="container-custom text-center relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EB] border border-[#C5A059]/40 text-[#241A35] text-xs font-bold mb-5 shadow-xs">
            <Award className="w-4 h-4 text-[#C5A059]" />
            <span>شفافیت مالی و تطابق ۱۰۰٪ با تعرفه سازمان نظام روان‌شناسی (پروانه ۱۴۱۴۰۸۳)</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#241A35] mb-5 leading-tight">
            تعرفه و هزینه جلسات زوج‌درمانی و مشاوره خانواده
          </h1>

          <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed mb-8 text-justify sm:text-center">
            شفافیت در هزینه‌ها بخشی از تعهد اخلاقی و بالینی ماست. در این بخش جزئیات تعرفه مصوب، شرایط استرداد وجه از طریق بیمه تکمیلی، و ماشین‌حساب هوشمند تخمین تعداد جلسات درمان را مشاهده می‌کنید.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#241A35]">
            <div className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-[#E8E2D8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#4E7A66]" />
              <span>پذیرش کلیه بیمه‌های تکمیلی</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-[#E8E2D8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#4E7A66]" />
              <span>پرداخت جلسه به جلسه (بدون پیش‌پرداخت پکیجی)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-[#E8E2D8] shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#4E7A66]" />
              <span>امکان پرداخت ارزی برای ایرانیان خارج از کشور</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container-custom py-14">
        {/* Section 1: Interactive Session & Investment Estimator */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-lg mb-16 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#3E2F5B]/10 text-[#3E2F5B] flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-black text-[#C5A059] uppercase tracking-wider block">
                تخمین هوشمند فرآیند درمان
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#241A35]">
                ماشین‌حساب تخمین تعداد جلسات و سرمایه‌گذاری رابطه
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#5E5868] mb-8 leading-relaxed">
            با انتخاب موضوع چالش رابطه و قالب برگزاری جلسات، برآورد علمی مدت زمان درمان و نحوه برنامه‌ریزی جلسات را مشاهده فرمایید:
          </p>

          {/* Select Step 1: Challenge */}
          <div className="mb-8">
            <label className="block text-xs font-black text-[#241A35] mb-3">
              ۱. نوع چالش و نیاز ارتباطی خود را انتخاب کنید:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { id: 'conflict', title: 'دعواهای مکرر و قهر', sub: 'حل تعارض و احیای صمیمیت' },
                { id: 'infidelity', title: 'بحران خیانت و شوک', sub: 'ترمیم اعتماد و تروما' },
                { id: 'premarital', title: 'مشاوره پیش از ازدواج', sub: 'سنجش تناسب دوران آشنایی' },
                { id: 'divorce', title: 'تصمیم‌گیری طلاق', sub: 'مشاوره جدایی کم‌آسیب' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedIssue(item.id as any)}
                  className={`p-4 rounded-2xl text-right transition-all cursor-pointer border ${
                    selectedIssue === item.id
                      ? 'bg-[#3E2F5B] text-white border-[#3E2F5B] shadow-md'
                      : 'bg-[#FAF8F5] text-[#241A35] border-[#E8E2D8] hover:bg-white'
                  }`}
                >
                  <span className="block font-black text-xs sm:text-sm mb-1">{item.title}</span>
                  <span
                    className={`block text-[11px] ${
                      selectedIssue === item.id ? 'text-white/80' : 'text-[#5E5868]'
                    }`}
                  >
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Select Step 2: Format */}
          <div className="mb-10">
            <label className="block text-xs font-black text-[#241A35] mb-3">
              ۲. قالب مورد نظر برای برگزاری جلسات:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'inPerson', title: 'حضوری تهران (کلینیک پیوند امن)', sub: 'محیط بالینی استاندارد و محرمانه' },
                { id: 'onlineDomestic', title: 'آنلاین سراسر ایران (تصویری امن)', sub: 'بستر رمزنگاری‌شده Google Meet' },
                { id: 'onlineInternational', title: 'آنلاین ایرانیان خارج از کشور', sub: 'هماهنگی با منطقه زمانی و پرداخت ارزی' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSessionFormat(item.id as any)}
                  className={`p-4 rounded-2xl text-right transition-all cursor-pointer border ${
                    sessionFormat === item.id
                      ? 'bg-[#241A35] text-white border-[#C5A059] shadow-md'
                      : 'bg-[#FAF8F5] text-[#241A35] border-[#E8E2D8] hover:bg-white'
                  }`}
                >
                  <span className="block font-black text-xs sm:text-sm mb-1">{item.title}</span>
                  <span
                    className={`block text-[11px] ${
                      sessionFormat === item.id ? 'text-white/80' : 'text-[#5E5868]'
                    }`}
                  >
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#FAF5EB] rounded-2xl p-6 sm:p-8 border border-[#C5A059]/40">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#C5A059]/20">
              <div>
                <span className="text-[11px] font-black text-[#C5A059] block mb-1">
                  برآورد پروتکل درمانی پیشنهادی
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#241A35]">
                  {currentPlan.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white px-5 py-3 rounded-xl border border-[#E8E2D8] text-center shadow-xs">
                  <span className="block text-[11px] text-[#5E5868]">تعداد جلسات معمول</span>
                  <span className="text-base font-black text-[#3E2F5B]">{currentPlan.sessions}</span>
                </div>
                <div className="bg-white px-5 py-3 rounded-xl border border-[#E8E2D8] text-center shadow-xs">
                  <span className="block text-[11px] text-[#5E5868]">توالی جلسات</span>
                  <span className="text-base font-black text-[#4E7A66]">{currentPlan.interval}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#241A35] mb-6">
              <div className="bg-white/80 p-4 rounded-xl border border-[#E8E2D8]/80">
                <span className="font-bold text-[#3E2F5B] block mb-1">مدت زمان هر جلسه:</span>
                <p className="text-[#5E5868]">{currentPlan.duration}</p>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-[#E8E2D8]/80">
                <span className="font-bold text-[#3E2F5B] block mb-1">محور اصلی جلسات:</span>
                <p className="text-[#5E5868]">{currentPlan.focus}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#C5A059]/20">
              <div className="text-xs text-[#5E5868]">
                💡 هماهنگی نهایی نوبت‌ها پس از جلسه ارزیابی اولیه و با توافق دوطرفه صورت می‌گیرد.
              </div>
              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87%20%D9%87%D8%B2%DB%8C%D9%86%D9%87%20%D9%88%20%D8%AA%D8%B9%D8%B1%D9%81%D9%87%20%D8%AC%D9%84%D8%B3%D8%A7%D8%AA%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%20%D8%B3%D9%88%D8%A7%D9%84%20%D8%AF%D8%A7%D8%B4%D8%AA%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#241A35] text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-md hover:bg-[#3E2F5B] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>استعلام دقیق هزینه و رزرو نوبت در واتساپ</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 2: Official Insurance & Reimbursement Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#4E7A66]/10 text-[#4E7A66] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-black text-[#4E7A66] uppercase block">پوشش بیمه درمانی</span>
                  <h3 className="text-lg sm:text-xl font-black text-[#241A35]">
                    نحوه دریافت هزینه از بیمه‌های تکمیلی
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed mb-6 text-justify">
                طبق قوانین بیمه مرکزی، خدمات روان‌شناختی بالینی ارائه‌شده توسط درمانگران دارای پروانه معتبر نظام، مشمول پوشش اکثر بیمه‌های تکمیلی انفرادی و گروهی است. مراحل دریافت وجه به شرح زیر است:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { step: '۱', title: 'حضور در جلسات و ثبت ساعات بالینی', desc: 'تعداد جلسات و تاریخ‌های مراجعه در پرونده ثبت می‌شود.' },
                  { step: '۲', title: 'صدور فاکتور و گواهی رسمی سربرگ‌دار', desc: 'صدور گواهی با مهر، امضا و شماره پروانه بالینی ۱۴۱۴۰۸۳ بدون هزینه مازاد.' },
                  { step: '۳', title: 'ارائه به شرکت بیمه تکمیلی', desc: 'بارگذاری در سامانه آنلاین بیمه یا تحویل فیزیکی برای واریز به حساب مراجع.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3.5 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E8E2D8]">
                    <span className="w-6 h-6 rounded-full bg-[#3E2F5B] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs text-[#241A35] mb-0.5">{s.title}</h4>
                      <p className="text-[11px] text-[#5E5868]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between text-xs font-bold text-[#4E7A66]">
              <span>پوشش بیمه‌های: ایران، دانا، البرز، آسیا، پاسارگاد، پارسیان و...</span>
              <FileText className="w-4 h-4" />
            </div>
          </div>

          {/* International Expatriate Payment Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#241A35] via-[#2A1E35] to-[#3E2F5B] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-[#C5A059]/30">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-black text-[#C5A059] uppercase block">مراجعان بین‌المللی</span>
                  <h3 className="text-lg sm:text-xl font-black text-[#FAF5EB]">
                    نحوه پرداخت ارزی خارج از کشور
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                برای هم‌وطنان مقیم اروپا، آمریکای شمالی، استرالیا و کشورهای خلیج فارس، بستر پرداخت مستقیم و آنی ارزی بدون نیاز به حساب بانکی ایران فراهم شده است:
              </p>

              <div className="space-y-3 mb-6">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold">پی‌پال (PayPal) و وایز (Wise)</span>
                  <span className="text-[#C5A059] font-mono text-[11px]">EUR / USD / CAD</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold">ارز دیجیتال تتر (USDT)</span>
                  <span className="text-[#C5A059] font-mono text-[11px]">TRC20 / BEP20</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                  <span className="font-bold">کارت به کارت شتابی</span>
                  <span className="text-[#C5A059] font-mono text-[11px]">ریالی (حساب‌های داخل)</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A7%D8%B2%20%D8%AE%D8%A7%D8%B1%D8%AC%20%DA%A9%D8%B4%D9%88%D8%B1%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85.%20%D8%B4%D8%B1%D8%A7%DB%8C%D8%B7%20%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA%20%D8%A7%D8%B1%D8%B2%DB%8C%20%D9%88%20%D8%B1%D8%B2%D8%B1%D9%88%20%D9%86%D9%88%D8%A8%D8%AA%20%D8%B1%D8%A7%20%D9%85%DB%8C%E2%80%8C%D8%AE%D9%88%D8%A7%D8%B3%D8%AA%D9%85."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#9E7D36] text-[#241A35] font-black text-xs py-3.5 px-6 rounded-full transition-all text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>هماهنگی پرداخت ارزی در واتساپ</span>
            </a>
          </div>
        </div>

        {/* Section 3: Comprehensive FAQs on Fees with FAQ Schema */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E2D8] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C5A059] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-black text-[#C5A059] uppercase block">پرسش‌های پرتکرار</span>
              <h2 className="text-xl sm:text-2xl font-black text-[#241A35]">
                سوالات متداول درباره هزینه و تعرفه جلسات
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {feesFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E8E2D8] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 bg-[#FCFAF8] hover:bg-[#FAF5EB]/50 transition-colors cursor-pointer"
                  >
                    <span className="font-black text-xs sm:text-sm text-[#241A35]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#3E2F5B] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-white text-xs sm:text-sm text-[#5E5868] leading-relaxed border-t border-[#E8E2D8]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};
