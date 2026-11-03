import React, { useState } from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  BadgeCheck,
  MapPin,
  Video,
  Search,
  Building2,
  Compass
} from 'lucide-react';

interface CouplesTherapyGuideProps {
  onScrollToTools: () => void;
  onNavigateService: (slug: string) => void;
  onNavigateContact: () => void;
}

export const CouplesTherapyGuideSection: React.FC<CouplesTherapyGuideProps> = ({
  onScrollToTools,
  onNavigateService,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<'what' | 'signs' | 'methods' | 'therapist' | 'cities'>('what');

  const signsList = [
    {
      title: 'مشاجرات مکرر بر سر موضوعات تکراری',
      desc: 'یک بحث ساده مالی یا خانوادگی در کمتر از چند دقیقه به توهین، یادآوری اشتباهات گذشته یا قهر چند روزه تبدیل می‌شود.',
    },
    {
      title: 'طلاق عاطفی و زندگی مانند دو هم‌اتاقی غریبه',
      desc: 'دعواها متوقف شده اما جای آن را سکوت سنگین، بی‌تفاوتی و زندگی در دو دنیای کاملاً جداگانه گرفته است.',
    },
    {
      title: 'ترومای کشف خیانت و فروپاشی اعتماد',
      desc: 'بی‌وفایی عاطفی یا جسمی که منجر به نشخوار ذهنی، شکاکیت مداوم و از بین رفتن احساس امنیت پایه‌ای شده است.',
    },
    {
      title: 'سردی عاطفی و کاهش شدید میل جنسی',
      desc: 'نبود نوازش، فاصله فیزیکی و امتناع از رابطه زناشویی ناشی از رنجش‌های کهنه و خشم‌های ناگفته.',
    },
  ];

  const approaches = [
    {
      name: 'زوج درمان هیجان‌مدار (EFT)',
      badge: 'رویکرد محوری و استاندارد طلایی',
      desc: 'این روش که توسط دکتر سو جانسون پایه‌گذاری شده، بر نیازهای دلبستگی تمرکز دارد. در جلسات EFT با مهناز خوینی، زیر لایه‌های خشم (ترس از رهاشدگی و حس بی‌ارزشی) رمزگشایی شده و پیوند امن مجدداً شکل می‌گیرد.',
      successRate: 'بیش از ۷۵٪ بهبود پایدار',
    },
    {
      name: 'زوج درمان مبتنی بر روش گاتمن',
      badge: 'مهارت‌محور و شواهدنگر',
      desc: 'تمرکز بر خنثی‌سازی «۴ سوارکار طلاق» (انتقاد، تحقیر، موضع دفاعی و سکوت قفل‌کننده)، تقویت بانک عاطفی مشترک و آموزش تکنیک‌های دقیق مهار طغیان فیزیولوژیک در مشاجرات.',
      successRate: 'کاهش ریسک طلاق تا ۶۰٪',
    },
    {
      name: 'طرحواره‌درمانی زوجین (Schema Therapy)',
      badge: 'ریشه‌یابی تله‌های دوران کودکی',
      desc: 'بررسی تله‌های ناسازگار هر یک از طرفین (مانند تله رهاشدگی، اطاعت، نقص و شرم یا بی‌اعتمادی) و چگونگی فعال شدن این تله‌ها در پارتنر مقابل.',
      successRate: 'حل تعارضات بنیادین شخصیتی',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E5E0EA]" id="zooj-darman-guide">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#f2eff8] text-[#6D5AA8] px-4 py-1.5 rounded-full border border-[#6D5AA8]/25 text-xs font-black mb-4">
            <HeartHandshake className="w-4 h-4 text-[#6D5AA8]" />
            <span>دانشنامه جامع بالینی مرکز زوج درمان</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-4 leading-tight">
            زوج درمانی چیست و چه زمانی به یک زوج درمانگر خوب نیاز داریم؟
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed text-justify sm:text-center">
            راهنمای کامل شناخت <strong>نقش زوج درمانگر</strong>، معیارهای انتخاب <strong>زوج درمانگر خوب در تهران، شیراز، مشهد و آنلاین</strong>، و پروتکل‌های روز جهانی برای نجات زندگی مشترک.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto mb-10">
          <button
            onClick={() => setActiveTab('what')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'what'
                ? 'bg-[#6D5AA8] text-white shadow-md'
                : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
            }`}
          >
            زوج درمانی چیست؟
          </button>
          <button
            onClick={() => setActiveTab('signs')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'signs'
                ? 'bg-[#6D5AA8] text-white shadow-md'
                : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
            }`}
          >
            نشانه‌های نیاز به زوج درمان
          </button>
          <button
            onClick={() => setActiveTab('methods')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'methods'
                ? 'bg-[#6D5AA8] text-white shadow-md'
                : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
            }`}
          >
            رویکردهای علمی زوج درمان
          </button>
          <button
            onClick={() => setActiveTab('therapist')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'therapist'
                ? 'bg-[#6D5AA8] text-white shadow-md'
                : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
            }`}
          >
            ویژگی‌های زوج درمانگر خوب
          </button>
          <button
            onClick={() => setActiveTab('cities')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'cities'
                ? 'bg-[#6D5AA8] text-white shadow-md'
                : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
            }`}
          >
            تهران، شیراز، مشهد و آنلاین
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] mb-12 shadow-xs">
          {activeTab === 'what' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-black text-[#5e826b] bg-[#edf5f0] px-3 py-1 rounded-full border border-[#8FAF9B]/30 inline-block">
                  تعریف علمی و بالینی
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#44386B]">
                  تعریف تخصصی زوج درمانی در روانشناسی معاصر
                </h3>
                <p className="text-sm text-[#292733] leading-relaxed text-justify">
                  <strong>زوج درمانی (Couples Therapy)</strong> یکی از شاخه‌های تخصصی روانشناسی بالینی است که در آن درمانگر دارای صلاحیت بالینی، نه به عنوان قاضی یا داور، بلکه به عنوان یک تسهیل‌گر بی‌طرف به بررسی تعاملات، الگوهای ناخودآگاه و آسیب‌های دلبستگی بین دو شریک عاطفی می‌پردازد.
                </p>
                <p className="text-sm text-[#6F6B78] leading-relaxed text-justify">
                  برخلاف مشاوره‌های سطحی و توصیه‌های عامیانه، در جلسات زوج درمان تمرکز بر مقصر شناختن یکی از طرفین نیست؛ بلکه «چرخه مخرب ارتباطی» به عنوان دشمن مشترک رابطه شناخته شده و مهارت‌های گفتگوی ایمن، تنظیم هیجان و بازسازی دلبستگی جایگزین قهر و جنگ قدرت می‌شود.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#44386B]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5e826b]" />
                    <span>توقف چرخه تعقیب‌کننده و گریزنده</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5e826b]" />
                    <span>احیای زبان مهرورزی و صمیمیت</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5e826b]" />
                    <span>حفظ ۱۰۰٪ محرمانگی پزشکی</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs space-y-3">
                <h4 className="text-sm font-black text-[#44386B] border-b border-[#E5E0EA] pb-2">
                  تفاوت زوج درمان با نصیحت یا داوری اطرافیان
                </h4>
                <ul className="space-y-2.5 text-xs text-[#6F6B78]">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0 font-bold text-[10px]">۱</span>
                    <span><strong>بی‌طرفی مطلق:</strong> زوج درمانگر هرگز جانب یکی را علیه دیگری نمی‌گیرد.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0 font-bold text-[10px]">۲</span>
                    <span><strong>پروتکل شواهدنگر:</strong> استفاده از روش‌های استاندارد EFT و گاتمن به جای نظرات سلیقه‌ای.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#f2eff8] text-[#6D5AA8] flex items-center justify-center shrink-0 font-bold text-[10px]">۳</span>
                    <span><strong>امنیت اسرار:</strong> هیچ اطلاعاتی به خانواده‌ها یا اشخاص ثالث درز پیدا نمی‌کند.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'signs' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#44386B] mb-2">
                  چه زمانی مراجعه به مرکز زوج درمان ضروری است؟
                </h3>
                <p className="text-sm text-[#6F6B78]">
                  اگر حداقل دو مورد از هشدارهای زیر را در رابطه مشترک خود مشاهده می‌کنید، تعلل در مراجعه به زوج درمانگر خطر طلاق را افزایش می‌دهد:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {signsList.map((sign, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E5E0EA] shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-[#E8A58D]" />
                      <h4 className="text-sm font-black text-[#292733]">{sign.title}</h4>
                    </div>
                    <p className="text-xs text-[#6F6B78] leading-relaxed text-justify">
                      {sign.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'methods' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-black text-[#44386B] mb-2">
                  رویکردهای علمی زوج درمان در کلینیک مهناز خوینی
                </h3>
                <p className="text-sm text-[#6F6B78]">
                  در سامانه و مرکز زوج درمان، جلسات بر مبنای آخرین دستاوردهای شواهدنگر دانشگاهی جهان تنظیم می‌شوند:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {approaches.map((app, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-[#E5E0EA] flex flex-col justify-between shadow-xs">
                    <div>
                      <span className="text-[10px] font-black text-[#5e826b] bg-[#edf5f0] px-2.5 py-0.5 rounded-full inline-block mb-3">
                        {app.badge}
                      </span>
                      <h4 className="text-base font-black text-[#44386B] mb-2">{app.name}</h4>
                      <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                        {app.desc}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#E5E0EA] text-[11px] font-extrabold text-[#6D5AA8] flex items-center justify-between">
                      <span>اثربخشی در پژوهش‌ها:</span>
                      <span className="bg-[#f2eff8] px-2 py-0.5 rounded-md">{app.successRate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'therapist' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-black text-[#6D5AA8] bg-[#f2eff8] px-3 py-1 rounded-full border border-[#6D5AA8]/30 inline-block">
                  معیارهای انتخاب متخصص
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#44386B]">
                  ویژگی‌های یک زوج درمانگر متخصص و حرفه‌ای
                </h3>
                <p className="text-sm text-[#292733] leading-relaxed text-justify">
                  انتخاب زوج درمانگر تصمیمی حساس است؛ یک درمانگر بی‌تجربه یا بدون پروانه ممکن است با قضاوت زودهنگام یا سرزنش، تنش رابطه را چند برابر کند. یک زوج درمانگر دارای صلاحیت بالینی:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#6F6B78]">
                  <li className="flex items-center gap-2 font-bold text-[#292733]">
                    <BadgeCheck className="w-4 h-4 text-[#5e826b] shrink-0" />
                    <span>دارای پروانه رسمی اشتغال تخصصی از سازمان نظام روان‌شناسی (پروانه ۱۴۱۴۰۸۳) است.</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-[#292733]">
                    <BadgeCheck className="w-4 h-4 text-[#5e826b] shrink-0" />
                    <span>دوره جامع و سوپرویژن رسمی در رویکردهای EFT و طرحواره‌درمانی را گذرانده است.</span>
                  </li>
                  <li className="flex items-center gap-2 font-bold text-[#292733]">
                    <BadgeCheck className="w-4 h-4 text-[#5e826b] shrink-0" />
                    <span>فضایی کاملاً امن، بدون سوگیری جنسیتی و بدون قضاود اخلاقی فراهم می‌کند.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-[#44386B] to-[#6D5AA8] text-white p-7 rounded-2xl shadow-lg space-y-4">
                <h4 className="text-base font-black">
                  درباره مهناز خوینی (زوج درمانگر بالینی)
                </h4>
                <p className="text-xs text-white/90 leading-relaxed text-justify">
                  کارشناس ارشد روان‌شناسی بالینی، مسئول فنی کلینیک پیوند امن تهران، با بیش از ۱۲ سال سابقه بالینی و برگزاری بیش از ۱۵,۰۰۰ ساعت مشاوره تخصصی در زمینه زوج درمان، خیانت‌های زناشویی، بحران طلاق و بهبود رابطه.
                </p>
                <button
                  onClick={onNavigateContact}
                  className="w-full py-3 bg-white hover:bg-[#FAF8F5] text-[#44386B] text-xs font-black rounded-full shadow transition-all cursor-pointer text-center"
                >
                  درخواست رزرو وقت جلسه (حضوری تهران / آنلاین)
                </button>
              </div>
            </div>
          )}

          {activeTab === 'cities' && (
            <div className="space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-black text-[#A67C2E] bg-[#FAF5EB] px-3 py-1 rounded-full border border-[#C5A059]/30 inline-block mb-2">
                  دسترسی منطقه‌ای و آنلاین
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#44386B] mb-2">
                  خدمات زوج درمان در تهران، کرج، اصفهان، کرمان و سراسر کشور
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed">
                  تفاوت جغرافیایی مانع بهره‌مندی از خدمات تخصصی درجه‌یک نیست. چه در تهران و کرج سکونت داشته باشید و چه در اصفهان، کرمان، شیراز یا مشهد، امکان رزرو جلسات حضوری یا آنلاین با حفظ بالاترین استانداردهای بالینی فراهم است.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Tehran */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#F2EEF8] text-[#6D5AA8] flex items-center justify-center mb-3">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#2A1E35] mb-2">
                      زوج درمان خوب در تهران
                    </h4>
                    <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                      جلسات حضوری در کلینیک تخصصی پیوند امن غرب تهران (صادقیه، پونک، اشرفی اصفهانی، سعادت‌آباد) با رزرو قبلی.
                    </p>
                  </div>
                  <a
                    href="/articles/good-couples-therapist-in-tehran"
                    className="text-xs font-bold text-[#6D5AA8] hover:text-[#44386B] flex items-center gap-1 mt-2"
                  >
                    <span>اطلاعات کلینیک تهران و انتخاب درمانگر</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Karaj */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C5A059] flex items-center justify-center mb-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#2A1E35] mb-2">
                      زوج درمان خوب در کرج
                    </h4>
                    <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                      دسترسی سریع بزرگراهی و مترو از کرج، عظیمیه، گوهردشت و مهرشهر به کلینیک غرب تهران یا جلسات آنلاین هفتگی.
                    </p>
                  </div>
                  <a
                    href="/articles/couples-therapy-karaj"
                    className="text-xs font-bold text-[#C5A059] hover:text-[#A67C2E] flex items-center gap-1 mt-2"
                  >
                    <span>راهنمای زوج درمان کرج و البرز</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Esfahan */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5F1] text-[#3E6B56] flex items-center justify-center mb-3">
                      <Video className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#2A1E35] mb-2">
                      زوج درمان اصفهان
                    </h4>
                    <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                      جلسات آنلاین تصویری محرمانه برای خانواده‌های اصفهان با حفظ کامل حریم خصوصی و بالاترین کیفیت پروتکل‌های EFT.
                    </p>
                  </div>
                  <a
                    href="/articles/couples-therapy-esfahan"
                    className="text-xs font-bold text-[#3E6B56] hover:text-[#2A1E35] flex items-center gap-1 mt-2"
                  >
                    <span>راهنمای زوج درمانی اصفهان</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Kerman */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FBF1ED] text-[#D9846A] flex items-center justify-center mb-3">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#2A1E35] mb-2">
                      زوج درمان کرمان
                    </h4>
                    <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                      مشاوره تخصصی زوجین و حل ریشه‌ای خیانت و طلاق عاطفی برای مراجعان کرمان و رفسنجان بدون نیاز به سفر پرهزینه.
                    </p>
                  </div>
                  <a
                    href="/articles/couples-therapy-kerman"
                    className="text-xs font-bold text-[#D9846A] hover:text-[#2A1E35] flex items-center gap-1 mt-2"
                  >
                    <span>راهنمای زوج درمانی کرمان</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Shiraz */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EB] text-[#C5A059] flex items-center justify-center mb-3">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#2A1E35] mb-2">
                      زوج درمانگر شیراز
                    </h4>
                    <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                      مشاوره تصویری بدون افشای حریم خصوصی برای هم‌وطنان در شیراز و استان فارس با پروتکل‌های پیشرفته EFT.
                    </p>
                  </div>
                  <a
                    href="/articles/couples-therapy-shiraz"
                    className="text-xs font-bold text-[#C5A059] hover:text-[#A67C2E] flex items-center gap-1 mt-2"
                  >
                    <span>راهنمای زوج درمانی شیراز</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Mashhad */}
                <div className="bg-white p-6 rounded-2xl border border-[#E5E0EA] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5F1] text-[#3E6B56] flex items-center justify-center mb-3">
                      <Video className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#2A1E35] mb-2">
                      زوج درمانگر مشهد
                    </h4>
                    <p className="text-xs text-[#6F6B78] leading-relaxed mb-4 text-justify">
                      فضایی خنثی، بدون تعصب و کاملاً علمی برای حل تعارضات زناشویی، خیانت و طلاق عاطفی در مشهد و خراسان.
                    </p>
                  </div>
                  <a
                    href="/articles/couples-therapy-mashhad"
                    className="text-xs font-bold text-[#3E6B56] hover:text-[#2A1E35] flex items-center gap-1 mt-2"
                  >
                    <span>راهنمای زوج درمانی مشهد</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Diagnostic Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E0EA] shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#edf5f0] text-[#5e826b] flex items-center justify-center shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-[#292733]">
                می‌خواهید وضعیت سلامت رابطه زناشویی‌تان را همین الان بسنجید؟
              </h4>
              <p className="text-xs text-[#6F6B78] mt-0.5">
                تست آنلاین رایگان رضایت زناشویی انریچ (ENRICH) با نمره‌دهی و تحلیل فوری روانشناسی.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onScrollToTools}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white font-black text-xs px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E8A58D]" />
              <span>شروع تست رایگان زوج درمان</span>
            </button>
            <a
              href="/services/couples-therapy"
              onClick={(e) => {
                e.preventDefault();
                onNavigateService('couples-therapy');
              }}
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-black text-[#44386B] hover:text-[#6D5AA8] px-4 py-3 border border-[#E5E0EA] rounded-full hover:bg-[#FAF8F5] transition-all cursor-pointer"
            >
              <span>مشاهده پروتکل درمان</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
