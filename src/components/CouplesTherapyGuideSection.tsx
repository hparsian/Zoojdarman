import React, { useState } from 'react';
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowLeft,
  Users,
  Compass,
  FileText,
  BadgeCheck,
  HelpCircle
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
  const [activeTab, setActiveTab] = useState<'what' | 'signs' | 'methods' | 'therapist'>('what');

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#f2eff8] text-[#6D5AA8] px-4 py-1.5 rounded-full border border-[#6D5AA8]/25 text-xs font-black mb-4">
            <HeartHandshake className="w-4 h-4 text-[#6D5AA8]" />
            <span>دانشنامه تخصصی مرکز زوج درمان</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-4 leading-tight">
            زوج درمان چیست و چگونه زندگی مشترک را نجات می‌دهد؟
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed text-justify sm:text-center">
            راهنمای جامع بالینی برای شناخت نقش <strong>زوج درمانگر متخصص</strong>، روش‌های نوین زوج درمان و زمان طلایی مداخله پیش از رسیدن به طلاق عاطفی یا جدایی رسمی.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto mb-10">
          <button
            onClick={() => setActiveTab('what')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer ${
              activeTab === 'what'
                ? 'bg-[#6D5AA8] text-white shadow-md'
                : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
            }`}
          >
            زوج درمان چیست؟
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
                  تعریف تخصصی زوج درمان در روانشناسی رابطه
                </h3>
                <p className="text-sm text-[#292733] leading-relaxed text-justify">
                  <strong>زوج درمان (Couples Therapy)</strong> یکی از شاخه‌های تخصصی روانشناسی بالینی است که در آن یک درمانگر دارای صلاحیت بالینی، نه به عنوان قاضی یا داور، بلکه به عنوان یک تسهیل‌گر بی‌طرف به بررسی تعاملات، الگوهای ناخودآگاه و آسیب‌های دلبستگی بین دو شریک عاطفی می‌پردازد.
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
                    <span>فضایی کاملاً امن، بدون سوگیری جنسیتی و بدون قضاوت اخلاقی فراهم می‌کند.</span>
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
