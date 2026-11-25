import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Calculator,
  CheckCircle2,
  HelpCircle,
  MessageSquare,
  FileText,
  ChevronDown,
  Globe,
} from 'lucide-react';
import { registerFaqSchema } from '../seo';
import { InnerPageTopBar } from './InnerPageTopBar';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';
import { ClinicSpaceFigure } from './ClinicSpaceFigure';

interface FeesViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onSelectService?: (slug: string) => void;
}

type IssueKey = 'premarital' | 'conflict' | 'infidelity' | 'divorce';
type FormatKey = 'inPerson' | 'onlineDomestic' | 'onlineInternational';

export const FeesView: React.FC<FeesViewProps> = ({
  onBack,
  onNavigateContact,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [selectedIssue, setSelectedIssue] = useState<IssueKey>('conflict');
  const [sessionFormat, setSessionFormat] = useState<FormatKey>('inPerson');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const issuePlans: Record<
    IssueKey,
    {
      title: string;
      sessions: string;
      interval: string;
      duration: string;
      focus: string;
      serviceSlug: string;
    }
  > = {
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
      a: 'خدمات روان‌شناسی دارای پروانه رسمی نظام روان‌شناسی در بسیاری از قراردادهای بیمه تکمیلی مشمول پوشش است. با توجه به برگزاری جلسات توسط مهناز خوینی (پروانه نظام ۱۴۱۴۰۸۳)، در صورت درخواست شما گواهی رسمی سربرگ‌دار با مهر و کد نظام صادر می‌گردد تا مطابق ضوابط و سقف پوشش قرارداد بیمه تکمیلی خود ارائه نمایید.',
    },
    {
      q: 'تعرفه جلسات بر چه اساسی تعیین می‌شود؟',
      a: 'تعرفه‌ها مطابق با مصوبه رسمی سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران برای مقطع کارشناس ارشد تنظیم می‌شود و هزینه مازاد یا غیررسمی دریافت نمی‌گردد.',
    },
    {
      q: 'آیا پرداخت هزینه باید به صورت یکجا و پکیجی باشد؟',
      a: 'خیر. در این مرکز اصراری بر پرداخت‌های پکیجی وجود ندارد و پرداخت به صورت جلسه به جلسه انجام می‌پذیرد تا مراجع با آرامش و بدون فشار مالی فرآیند درمان را پیگیری کند.',
    },
    {
      q: 'اگر امکان ادامه هفتگی جلسات از نظر مالی دشوار باشد، درمان متوقف می‌شود؟',
      a: 'خیر. در پروتکل هیجان‌مدار (EFT)، پس از تثبیت فاز اول می‌توان فواصل جلسات را به ۲ یا ۳ هفته یک‌بار تنظیم کرد تا کیفیت درمان بدون تحمیل بار مالی حفظ شود.',
    },
    {
      q: 'نحوه پرداخت برای مراجعان آنلاین خارج از کشور چگونه است؟',
      a: 'مراجعان مقیم خارج از ایران می‌توانند معادل هزینه جلسات را از طریق روش‌های ارزی بین‌المللی هماهنگ‌شده با بخش پذیرش یا در صورت داشتن حساب شتابی، به‌صورت ریالی پرداخت نمایند.',
    },
    {
      q: 'چرا مدت زمان جلسات زوج‌درمانی بیشتر از مشاوره فردی است؟',
      a: 'جلسات زوج‌درمانی به دلیل حضور هم‌زمان دو نفر و نیاز به بررسی دقیق تعاملات دونفره، معمولاً بین ۶۰ تا ۹۰ دقیقه طول می‌کشد تا هر دو طرف فرصت کافی برای بیان احساسات خود داشته باشند.',
    },
  ];

  useEffect(() => {
    return registerFaqSchema(feesFaqs);
  }, []);

  const currentPlan = issuePlans[selectedIssue];

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-5xl"
      />

      {/* Hero Header */}
      <header className="py-12 sm:py-16 bg-[#FCFBF8] border-b border-[#E5E0D8]">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-3">
            شفافیت مالی · مطابق تعرفه مصوب سازمان نظام روان‌شناسی (پروانه ۱۴۱۴۰۸۳)
          </p>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-4 leading-tight">
            تعرفه و هزینه جلسات زوج‌درمانی و مشاوره خانواده
          </h1>

          <p className="text-sm sm:text-base text-[#555650] leading-relaxed mb-8">
            شفافیت در هزینه‌ها بخشی از تعهد اخلاقی و بالینی کلینیک است. در این بخش برآورد تعداد جلسات،
            شرایط استرداد از طریق بیمه تکمیلی و شیوه پرداخت جلسات حضوری و آنلاین را مشاهده می‌کنید.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-[#292D2A]">
            <div className="inline-flex items-center justify-center gap-2 bg-[#F4F1EC] px-4 py-2.5 rounded-lg border border-[#E5E0D8]">
              <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] shrink-0" />
              <span>صدور فاکتور معتبر بیمه تکمیلی</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 bg-[#F4F1EC] px-4 py-2.5 rounded-lg border border-[#E5E0D8]">
              <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] shrink-0" />
              <span>پرداخت جلسه به جلسه (بدون اجبار پکیج)</span>
            </div>
            <div className="inline-flex items-center justify-center gap-2 bg-[#F4F1EC] px-4 py-2.5 rounded-lg border border-[#E5E0D8]">
              <CheckCircle2 className="w-4 h-4 text-[#3D5E4E] shrink-0" />
              <span>امکان پرداخت برای ایرانیان خارج کشور</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container-custom max-w-5xl py-12">
        {/* Interactive Session Estimator */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#3D5E4E] block">
                برآورد حدود مدت درمان
              </span>
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#292D2A]">
                تخمین تعداد جلسات و برنامه‌ریزی مسیر درمان
              </h2>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#555650] mb-8 leading-relaxed">
            با انتخاب موضوع نیاز خود و قالب برگزاری جلسات، برآورد معمول مدت زمان درمان را ببینید:
          </p>

          {/* Select Step 1: Challenge */}
          <div className="mb-8">
            <span className="block text-xs font-bold text-[#292D2A] mb-3">
              ۱. نوع چالش و نیاز ارتباطی را انتخاب کنید:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {(
                [
                  { id: 'conflict', title: 'دعواهای مکرر و قهر', sub: 'حل تعارض و احیای صمیمیت' },
                  { id: 'infidelity', title: 'بحران خیانت و شوک', sub: 'ترمیم اعتماد و تروما' },
                  { id: 'premarital', title: 'مشاوره پیش از ازدواج', sub: 'سنجش تناسب دوران آشنایی' },
                  { id: 'divorce', title: 'تصمیم‌گیری طلاق', sub: 'مشاوره جدایی کم‌آسیب' },
                ] as { id: IssueKey; title: string; sub: string }[]
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIssue(item.id)}
                  className={`p-4 rounded-xl text-right transition-colors cursor-pointer border ${
                    selectedIssue === item.id
                      ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                      : 'bg-[#F4F1EC] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                  }`}
                >
                  <span className="block font-bold text-xs sm:text-sm mb-1">{item.title}</span>
                  <span
                    className={`block text-[11px] ${
                      selectedIssue === item.id ? 'text-[#DCE4DE]' : 'text-[#555650]'
                    }`}
                  >
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Select Step 2: Format */}
          <div className="mb-8">
            <span className="block text-xs font-bold text-[#292D2A] mb-3">
              ۲. قالب برگزاری جلسات:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(
                [
                  { id: 'inPerson', title: 'حضوری تهران (کلینیک پیوند امن)', sub: 'تهران، پونک (منطقه ۲)' },
                  { id: 'onlineDomestic', title: 'آنلاین سراسر ایران', sub: 'جلسات تصویری در بستر امن' },
                  { id: 'onlineInternational', title: 'آنلاین ایرانیان خارج از کشور', sub: 'هماهنگ با منطقه زمانی شما' },
                ] as { id: FormatKey; title: string; sub: string }[]
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSessionFormat(item.id)}
                  className={`p-4 rounded-xl text-right transition-colors cursor-pointer border ${
                    sessionFormat === item.id
                      ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                      : 'bg-[#F4F1EC] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                  }`}
                >
                  <span className="block font-bold text-xs sm:text-sm mb-1">{item.title}</span>
                  <span
                    className={`block text-[11px] ${
                      sessionFormat === item.id ? 'text-[#DCE4DE]' : 'text-[#555650]'
                    }`}
                  >
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-[#EDF2EE] rounded-xl p-6 sm:p-8 border border-[#D3E0D7]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-[#D3E0D7]">
              <div>
                <span className="text-xs font-semibold text-[#3D5E4E] block mb-1">
                  برآورد پروتکل پیشنهادی
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#292D2A]">
                  {currentPlan.title}
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="bg-[#FCFBF8] px-4 py-2.5 rounded-lg border border-[#E5E0D8] text-center">
                  <span className="block text-[11px] text-[#555650]">تعداد جلسات معمول</span>
                  <span className="text-sm font-extrabold text-[#344A42]">{currentPlan.sessions}</span>
                </div>
                <div className="bg-[#FCFBF8] px-4 py-2.5 rounded-lg border border-[#E5E0D8] text-center">
                  <span className="block text-[11px] text-[#555650]">توالی جلسات</span>
                  <span className="text-sm font-extrabold text-[#3D5E4E]">{currentPlan.interval}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#292D2A] mb-6">
              <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8]">
                <span className="font-bold text-[#344A42] block mb-1">مدت زمان هر جلسه:</span>
                <p className="text-[#555650]">{currentPlan.duration}</p>
              </div>
              <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8]">
                <span className="font-bold text-[#344A42] block mb-1">محور اصلی جلسات:</span>
                <p className="text-[#555650]">{currentPlan.focus}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#D3E0D7]">
              <p className="text-xs text-[#555650]">
                {sessionFormat === 'onlineInternational'
                  ? 'زمان و روش پرداخت ارزی پیش از جلسه با بخش پذیرش هماهنگ می‌شود.'
                  : 'تعداد نهایی جلسات پس از ارزیابی اولیه و متناسب با وضعیت شما تنظیم می‌گردد.'}
              </p>
              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] font-semibold text-xs px-6 py-3 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                <MessageSquare className="w-4 h-4" />
                <span>استعلام تعرفه دقیق و رزرو نوبت</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Official Insurance & International Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          <div className="lg:col-span-7 bg-[#FCFBF8] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#3D5E4E] block">پوشش بیمه درمانی</span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#292D2A]">
                    نحوه دریافت هزینه از بیمه‌های تکمیلی
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#555650] leading-relaxed mb-6 text-justify">
                خدمات روان‌شناسی بالینی ارائه‌شده توسط درمانگران دارای پروانه معتبر نظام روان‌شناسی، مشمول پوشش اکثر بیمه‌های تکمیلی انفرادی و گروهی است.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { step: '۱', title: 'حضور در جلسات و ثبت ساعات بالینی', desc: 'تاریخ‌های مراجعه در پرونده بالینی کلینیک ثبت می‌شود.' },
                  { step: '۲', title: 'صدور گواهی رسمی سربرگ‌دار', desc: 'ارائه گواهی با مهر، امضا و شماره پروانه نظام ۱۴۱۴۰۸۳ بدون هزینه مازاد.' },
                  { step: '۳', title: 'ارائه به شرکت بیمه تکمیلی', desc: 'بارگذاری در سامانه آنلاین بیمه یا تحویل به کارشناس بیمه تکمیلی.' },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3 bg-[#F4F1EC] p-3.5 rounded-xl border border-[#E5E0D8]">
                    <span className="w-6 h-6 rounded-md bg-[#344A42] text-[#FCFBF8] flex items-center justify-center font-bold text-xs shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-xs text-[#292D2A] mb-0.5">{s.title}</h3>
                      <p className="text-[11px] text-[#555650]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#3D5E4E]">
              <span>قابل ارائه به بیمه‌های تکمیلی معتبر</span>
              <FileText className="w-4 h-4" />
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#344A42] text-[#FCFBF8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#273932] text-[#DCE4DE] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#DCE4DE] block">مراجعان بین‌المللی</span>
                  <h2 className="text-lg sm:text-xl font-extrabold text-[#FCFBF8]">
                    پرداخت برای ایرانیان خارج از کشور
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#DCE4DE] leading-relaxed mb-6">
                برای هم‌وطنان مقیم اروپا، آمریکای شمالی، استرالیا و کشورهای حاشیه خلیج فارس امکان پرداخت مستقیم با هماهنگی بخش پذیرش فراهم است:
              </p>

              <div className="space-y-3 mb-6">
                <div className="bg-[#273932] p-3 rounded-xl flex items-center justify-between text-xs">
                  <span className="font-semibold">پی‌پال (PayPal) و وایز (Wise)</span>
                  <span className="text-[#DCE4DE] font-mono text-[11px]">EUR / USD / CAD</span>
                </div>
                <div className="bg-[#273932] p-3 rounded-xl flex items-center justify-between text-xs">
                  <span className="font-semibold">تتر (USDT)</span>
                  <span className="text-[#DCE4DE] font-mono text-[11px]">TRC20 / BEP20</span>
                </div>
                <div className="bg-[#273932] p-3 rounded-xl flex items-center justify-between text-xs">
                  <span className="font-semibold">کارت به کارت شتابی</span>
                  <span className="text-[#DCE4DE] font-mono text-[11px]">ریالی</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onNavigateContact}
              className="inline-flex items-center justify-center gap-2 bg-[#FCFBF8] hover:bg-[#F4F1EC] text-[#344A42] font-semibold text-xs py-3 px-5 rounded-lg transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>هماهنگی پرداخت و نوبت آنلاین</span>
            </button>
          </div>
        </div>

        {/* Clinic & Online Session Environments */}
        <div className="mb-12">
          <div className="mb-5">
            <span className="text-xs font-semibold text-[#3D5E4E] block mb-1">
              محیط استاندارد جلسات
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-[#292D2A]">
              فضای انتظار حضوری در کلینیک پیوند امن و اتاق جلسات آنلاین
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ClinicSpaceFigure space="waiting-lounge-doors" aspectRatio="4/5" />
            <ClinicSpaceFigure space="controlled-light-online-room" aspectRatio="4/5" />
          </div>
        </div>

        {/* Section 3: FAQs on Fees */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#EDF2EE] text-[#344A42] flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#3D5E4E] block">پرسش‌های پرتکرار</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#292D2A]">
                سوالات متداول درباره هزینه و تعرفه جلسات
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {feesFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#E5E0D8] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full text-right p-5 flex items-center justify-between gap-4 bg-[#F4F1EC] hover:bg-[#ECE7DF] transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-xs sm:text-sm text-[#292D2A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#344A42] transition-transform shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 bg-[#FCFBF8] text-xs sm:text-sm text-[#555650] leading-[1.9] border-t border-[#E5E0D8]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <StandaloneSeoGuide routeKey="fees" skipFaqSchema maxWidthClass="max-w-5xl" />
      </main>
    </div>
  );
};
