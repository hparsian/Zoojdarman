import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Award,
  BadgeCheck,
  CheckCircle2,
  MessageSquare,
  MapPin,
  Video,
  Phone,
  ChevronDown,
  Building2,
  Compass,
} from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { SeoCertificationSummaryCard } from './SeoCertificationSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface BestTherapistViewProps {
  onBack: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
  onSelectService?: (slug: string) => void;
  onSelectArticle?: (slug: string) => void;
}

export const BestTherapistView: React.FC<BestTherapistViewProps> = ({
  onBack,
  onNavigateContact,
  onNavigateTools,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [expandedFaqId, setExpandedFaqId] = useState<number | null>(0);

  const criteriaList = [
    {
      title: '۱. پروانه رسمی اشتغال تخصصی از سازمان نظام روان‌شناسی',
      desc: 'یک زوج‌درمانگر معتبر باید دارای پروانه رسمی اشتغال تخصصی قابل استعلام در سازمان نظام روان‌شناسی و مشاوره ایران باشد (شماره پروانه مهناز خوینی: ۱۴۱۴۰۸۳).',
      tag: 'صلاحیت قانونی',
    },
    {
      title: '۲. تسلط بر رویکرد علمی زوج‌درمانی هیجان‌مدار (EFT)',
      desc: 'رویکرد هیجان‌مدار (Emotionally Focused Therapy) یکی از مستندترین پروتکل‌های پژوهشی جهان برای ترمیم پیوند دلبستگی و کاهش چرخه‌های تکراری تعارض است.',
      tag: 'پروتکل پژوهشی',
    },
    {
      title: '۳. بی‌طرفی کامل و پرهیز از قضاوت یا جانب‌داری',
      desc: 'درمانگر در جایگاه قاضی نمی‌نشیند و حق را یک‌طرفه به هیچ‌کس نمی‌دهد؛ بلکه چرخه منفی ارتباطی را روشن می‌کند تا هر دو طرف احساس امنیت و انصاف داشته باشند.',
      tag: 'اخلاق بالینی',
    },
    {
      title: '۴. تجربه بالینی متمرکز در بحران‌های رابطه',
      desc: 'مدیریت شوک خیانت، خشم حاد و تردید در طلاق نیازمند تجربه بالینی طولانی و ساختاریافته برای تثبیت بحران در جلسات اولیه است.',
      tag: 'سابقه و مهارت',
    },
    {
      title: '۵. رعایت محرمانگی حرفه‌ای و حریم خصوصی',
      desc: 'تمامی گفت‌وگوها و سوابق درمان مطابق منشور اخلاقی نظام روان‌شناسی محفوظ می‌ماند و در جلسات آنلاین هیچ‌گونه ضبط صدا یا تصویر انجام نمی‌شود.',
      tag: 'تعهد حرفه‌ای',
    },
    {
      title: '۶. امکان برگزاری جلسات حضوری و آنلاین باکیفیت یکسان',
      desc: 'دسترسی به جلسات حضوری در محیط آرام کلینیک یا جلسات تصویری امن برای مراجعان سایر شهرها و ایرانیان خارج از کشور.',
      tag: 'دسترسی آسان',
    },
  ];

  const tehranDistricts = [
    { name: 'غرب تهران (محدوده صادقیه – پونک)', desc: 'محل کلینیک تخصصی پیوند امن در منطقه ۲ تهران با دسترسی آسان از بزرگراه‌ها و مترو صادقیه' },
    { name: 'کرج و استان البرز', desc: 'دسترسی سریع از اتوبان تهران-کرج و مترو صادقیه به کلینیک یا جلسات آنلاین هفتگی' },
    { name: 'جنت‌آباد، شهران و شهرک غرب', desc: 'مسیر مستقیم از بزرگراه‌های اشرفی اصفهانی، ستاری و یادگار امام' },
    { name: 'سعادت‌آباد، مرکز و شمال تهران', desc: 'دسترسی از بزرگراه‌های همت، حکیم و چمران یا برگزاری جلسات آنلاین' },
  ];

  const faqs = [
    {
      q: 'چگونه یک زوج‌درمانگر خوب در تهران یا آنلاین انتخاب کنیم؟',
      a: 'متخصص واجد صلاحیت باید علاوه بر تحصیلات تکمیلی روان‌شناسی بالینی، دارای پروانه رسمی اشتغال از سازمان نظام روان‌شناسی (قابل استعلام) باشد، از رویکردهای شواهدنگر مانند EFT و گاتمن استفاده کند و سوابق بالینی متمرکز در حوزه زوجین داشته باشد. مهناز خوینی با پروانه ۱۴۱۴۰۸۳ و تمرکز تخصصی بر زوج‌درمانی و درمان خیانت در این حوزه فعالیت می‌کند.',
    },
    {
      q: 'آیا مراجعان سایر شهرها مانند مشهد، اصفهان، شیراز یا کرمان می‌توانند جلسه آنلاین بگیرند؟',
      a: 'بله. مطالعات تخصصی نشان داده‌اند زوج‌درمانی آنلاین تصویری با رویکردهای ساختاریافته مانند EFT می‌تواند اثربخشی مطلوبی در کاهش تعارضات داشته باشد. مراجعان از شهرهای مختلف ایران و خارج از کشور به‌صورت آنلاین با محرمانگی حرفه‌ای در جلسات شرکت می‌کنند.',
    },
    {
      q: 'تفاوت زوج‌درمانگر بالینی با مشاور عمومی چیست؟',
      a: 'روان‌شناس عمومی بیشتر روی مسائل فردی کار می‌کند؛ در حالی که زوج‌درمانگر بالینی آموزش تخصصی در تحلیل تعامل دونفره، سبک‌های دلبستگی، ترمیم ترومای خیانت و اصلاح چرخه‌های گفت‌وگوی زوجین دارد.',
    },
    {
      q: 'طول دوره جلسات زوج‌درمانی معمولاً چقدر است؟',
      a: 'بسته به عمق تعارض یا وجود بحران‌هایی مانند خیانت، معمولاً بین ۸ تا ۱۶ جلسه هفتگی ۶۰ تا ۹۰ دقیقه‌ای در نظر گرفته می‌شود که شامل ارزیابی اولیه، تثبیت تنش، بازسازی پیوند و تحکیم مهارت‌هاست.',
    },
    {
      q: 'آدرس کلینیک حضوری در تهران کجاست و چگونه وقت بگیریم؟',
      a: 'جلسات حضوری در کلینیک تخصصی پیوند امن واقع در منطقه ۲ تهران (محدوده صادقیه – پونک) برگزار می‌شود. هماهنگی وقت حضوری یا آنلاین از طریق فرم پذیرش سایت و شماره‌های ۰۹۱۹۹۰۸۷۲۶۴ یا ۰۲۱۴۴۶۰۰۹۸۰ انجام می‌شود.',
    },
  ];

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-5xl"
      />

      <div className="container-custom max-w-5xl pt-8 sm:pt-12">
        <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-[#6B6D67] mb-8">
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
          <span className="text-[#344A42] font-semibold">راهنمای انتخاب زوج‌درمانگر خوب در تهران و آنلاین</span>
        </nav>

        {/* Hero Section */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-10">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-3">
            راهنمای مرجع انتخاب زوج‌درمانگر بالینی
          </p>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] leading-tight mb-5">
            انتخاب زوج‌درمانگر خوب در تهران و آنلاین؛ معیارهای علمی و حرفه‌ای
          </h1>

          <p className="text-sm sm:text-base text-[#555650] leading-[1.9] max-w-3xl mb-8 text-justify">
            انتخاب یک <strong className="text-[#292D2A]">زوج‌درمانگر بالینی واجد صلاحیت</strong> می‌تواند مسیر
            برخورد با تعارض‌های فرسایشی، دلخوری‌های عمیق و بحران اعتماد را تغییر دهد. در این راهنما معیارهای
            رسمی، نحوه استعلام پروانه نظام روان‌شناسی، رویکرد EFT و شرایط برگزاری جلسات حضوری در منطقه ۲ تهران و آنلاین را مرور می‌کنیم.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E5E0D8] mb-8">
            <div className="bg-[#F4F1EC] p-3.5 rounded-xl border border-[#E5E0D8] text-center">
              <ShieldCheck className="w-5 h-5 text-[#344A42] mx-auto mb-1.5" />
              <span className="block text-xs font-bold text-[#292D2A]">پروانه ۱۴۱۴۰۸۳</span>
              <span className="text-[11px] text-[#555650]">نظام روان‌شناسی ایران</span>
            </div>
            <div className="bg-[#F4F1EC] p-3.5 rounded-xl border border-[#E5E0D8] text-center">
              <Award className="w-5 h-5 text-[#3D5E4E] mx-auto mb-1.5" />
              <span className="block text-xs font-bold text-[#292D2A]">رویکرد بالینی EFT</span>
              <span className="text-[11px] text-[#555650]">درمان هیجان‌مدار دلبستگی</span>
            </div>
            <div className="bg-[#F4F1EC] p-3.5 rounded-xl border border-[#E5E0D8] text-center">
              <Building2 className="w-5 h-5 text-[#344A42] mx-auto mb-1.5" />
              <span className="block text-xs font-bold text-[#292D2A]">کلینیک پیوند امن</span>
              <span className="text-[11px] text-[#555650]">منطقه ۲ تهران (صادقیه – پونک)</span>
            </div>
            <div className="bg-[#F4F1EC] p-3.5 rounded-xl border border-[#E5E0D8] text-center">
              <Video className="w-5 h-5 text-[#3D5E4E] mx-auto mb-1.5" />
              <span className="block text-xs font-bold text-[#292D2A]">مشاوره آنلاین امن</span>
              <span className="text-[11px] text-[#555650]">سراسر ایران و خارج کشور</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onNavigateContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>هماهنگی جلسه حضوری یا آنلاین (۰۹۱۹۹۰۸۷۲۶۴)</span>
            </button>

            <button
              type="button"
              onClick={onNavigateTools}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#344A42] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-lg border border-[#E5E0D8] transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>خودسنجی رایگان سلامت رابطه</span>
            </button>
          </div>
        </div>

        {/* Clinician Profile */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="inline-block mx-auto">
                <img
                  src="/images/mahnaz-khoini-thumb.webp"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                  }}
                  alt="مهناز خوینی زوج‌درمانگر بالینی"
                  width={617}
                  height={775}
                  loading="lazy"
                  decoding="async"
                  className="w-56 h-64 object-cover object-top rounded-2xl border border-[#E5E0D8] mx-auto"
                />
                <p className="mt-3 text-xs font-semibold text-[#3D5E4E]">
                  مهناز خوینی · پروانه ۱۴۱۴۰۸۳
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold text-[#3D5E4E] block">
                معرفی و صلاحیت‌های حرفه‌ای
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#292D2A]">
                درباره مهناز خوینی؛ مسئول فنی کلینیک پیوند امن تهران
              </h2>
              <p className="text-xs sm:text-sm text-[#555650] leading-[1.9] text-justify">
                مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی با شماره پروانه رسمی اشتغال تخصصی{' '}
                <strong className="text-[#292D2A]">۱۴۱۴۰۸۳</strong> از سازمان نظام روان‌شناسی و مشاوره ایران است.
                تمرکز حرفه‌ای ایشان بر زوج‌درمانی هیجان‌مدار (EFT)، بازسازی پیوند پس از خیانت، مشاوره تصمیم‌گیری طلاق و سکس‌تراپی است.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#292D2A]">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <span>کاربست ساختاریافته زوج‌درمانی هیجان‌مدار (EFT) برای بازسازی دلبستگی ایمن.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <span>به‌کارگیری الگوی گاتمن برای شناسایی و توقف چهار رفتار تخریبی گفت‌وگو.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <span>طرحواره‌درمانی زوجین برای شناخت الگوهای تکرارشونده دوران رشد در ازدواج.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 6 Criteria */}
        <div className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#292D2A] mb-2">
              ۶ معیار اساسی برای انتخاب زوج‌درمانگر مناسب
            </h2>
            <p className="text-xs sm:text-sm text-[#555650]">
              پیش از آغاز درمان، این شاخص‌های علمی و قانونی را بررسی کنید:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteriaList.map((crit, idx) => (
              <div key={idx} className="bg-[#FCFBF8] p-6 rounded-xl border border-[#E5E0D8]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-[#3D5E4E]">
                    {crit.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#3D5E4E]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#292D2A] mb-2">
                  {crit.title}
                </h3>
                <p className="text-xs text-[#555650] leading-relaxed text-justify">
                  {crit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-10">
          <h2 className="text-lg sm:text-2xl font-extrabold text-[#292D2A] mb-6 text-center">
            تفاوت زوج‌درمانگر بالینی دارای مجوز با مشاوره‌های غیرتخصصی
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-[#E5E0D8] bg-[#F4F1EC]">
                  <th className="p-3.5 font-bold text-[#292D2A]">شاخص</th>
                  <th className="p-3.5 font-bold text-[#344A42]">زوج‌درمانگر بالینی (مرکز پیوند امن)</th>
                  <th className="p-3.5 font-bold text-[#9E563E]">مداخله‌های غیرتخصصی و عامیانه</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E0D8]">
                <tr>
                  <td className="p-3.5 font-semibold">صلاحیت قانونی</td>
                  <td className="p-3.5 text-[#344A42] font-semibold">دارای پروانه رسمی اشتغال تخصصی نظام روان‌شناسی</td>
                  <td className="p-3.5 text-[#555650]">فاقد پروانه بالینی تخصصی</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">رویکرد درمانی</td>
                  <td className="p-3.5 text-[#344A42] font-semibold">پروتکل‌های شواهدنگر EFT، طرحواره‌درمانی و گاتمن</td>
                  <td className="p-3.5 text-[#555650]">توصیه‌های شخصی و کلیشه‌ای</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">موضع در جلسه</td>
                  <td className="p-3.5 text-[#344A42] font-semibold">بی‌طرفی کامل و تمرکز بر تغییر چرخه تعامل</td>
                  <td className="p-3.5 text-[#555650]">مقصریابی و جانب‌داری از یک طرف</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">مداخله در خیانت</td>
                  <td className="p-3.5 text-[#344A42] font-semibold">پروتکل سه‌مرحله‌ای تثبیت شوک، شفاف‌سازی و ترمیم</td>
                  <td className="p-3.5 text-[#555650]">تجویز شتاب‌زده بخشش یا جدایی</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">محرمانگی جلسات</td>
                  <td className="p-3.5 text-[#344A42] font-semibold">محرمانگی حرفه‌ای مطابق منشور نظام روان‌شناسی</td>
                  <td className="p-3.5 text-[#555650]">نبود چارچوب قانونی الزام‌آور</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10">
          <SeoCertificationSummaryCard />
        </div>

        {/* Physical Clinic Districts */}
        <div className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-10 border border-[#E5E0D8] mb-10">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-semibold text-[#3D5E4E] block mb-1.5">
              کلینیک حضوری غرب تهران
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#292D2A] mb-2">
              دسترسی به کلینیک پیوند امن در منطقه ۲ تهران
            </h2>
            <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
              کلینیک پیوند امن در منطقه ۲ تهران (محدوده صادقیه – پونک) واقع شده و دسترسی مستقیمی به بزرگراه‌ها و مترو دارد:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tehranDistricts.map((d, idx) => (
              <div key={idx} className="bg-[#F4F1EC] p-5 rounded-xl border border-[#E5E0D8]">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-[#344A42]" />
                  <h3 className="text-sm font-bold text-[#292D2A]">{d.name}</h3>
                </div>
                <p className="text-xs text-[#555650] leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Online Callout */}
        <div className="bg-[#344A42] rounded-2xl p-6 sm:p-10 text-[#FCFBF8] mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-semibold text-[#DCE4DE] block">
                خدمت سراسری و بین‌المللی
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold">
                مشاوره آنلاین با مهناز خوینی برای سایر شهرهای ایران و خارج از کشور
              </h2>
              <p className="text-xs sm:text-sm text-[#DCE4DE] leading-[1.9] text-justify">
                ساکنان مشهد، اصفهان، شیراز، تبریز، کرمان و سایر شهرها و همچنین ایرانیان مقیم کانادا، اروپا،
                آمریکا و استرالیا می‌توانند در جلسات تصویری امن بدون ضبط و متناسب با منطقه زمانی خود شرکت کنند.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold pt-2 text-[#F4F1EC]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAE9B]" />
                  <span>کیفیت درمانی هم‌تراز با جلسات حضوری</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8FAE9B]" />
                  <span>محرمانگی حرفه‌ای بدون ثبت پرونده محلی</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#273932] p-6 rounded-xl text-center space-y-4">
              <Phone className="w-7 h-7 text-[#8FAE9B] mx-auto" />
              <h3 className="text-sm font-bold text-[#FCFBF8]">هماهنگی نوبت آنلاین</h3>
              <p className="text-xs text-[#DCE4DE]">
                امکان هماهنگی زمان متناسب با منطقه زمانی شما
              </p>
              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full py-3 bg-[#FCFBF8] hover:bg-[#F4F1EC] text-[#344A42] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                درخواست وقت جلسه آنلاین
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#292D2A] mb-2">
              پرسش‌های متداول درباره انتخاب زوج‌درمانگر
            </h2>
            <p className="text-xs sm:text-sm text-[#555650]">
              پاسخ شفاف به پرسش‌های پرتکرار پیش از شروع جلسه اول:
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaqId === idx;
              return (
                <div
                  key={idx}
                  className={`bg-[#FCFBF8] rounded-xl border transition-colors ${
                    isOpen ? 'border-[#344A42]' : 'border-[#E5E0D8]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaqId(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#292D2A]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#344A42] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[#555650] leading-[1.9] border-t border-[#E5E0D8] text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Bar */}
        <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-[#292D2A] mb-1">
              آماده برداشتن قدم اول با آرامش هستید؟
            </h3>
            <p className="text-xs text-[#555650]">
              شما می‌توانید پیش از تماس با ابزارهای خودسنجی رابطه وضعیت فعلی را بررسی کنید یا برای جلسه اول وقت بگیرید.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onNavigateContact}
              className="w-full sm:w-auto px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              درخواست رزرو نوبت
            </button>
            <button
              type="button"
              onClick={onNavigateTools}
              className="w-full sm:w-auto px-5 py-3 bg-[#F4F1EC] hover:bg-[#ECE7DF] text-[#344A42] border border-[#E5E0D8] font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              ابزارهای خودسنجی رابطه
            </button>
          </div>
        </div>

        <StandaloneSeoGuide routeKey="bestTherapist" maxWidthClass="max-w-5xl" />
      </div>
    </div>
  );
};
