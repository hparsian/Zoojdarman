import React from 'react';
import { ShieldCheck, Phone, ExternalLink, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigateHome: (sectionId?: string) => void;
  onNavigateService: (slug: string) => void;
  onNavigateArticle: (slug: string) => void;
  onNavigatePrivacy: () => void;
  onNavigateAbout?: () => void;
  onNavigateProcess?: () => void;
  onNavigateFaq?: () => void;
  onNavigateContact?: () => void;
  onNavigateTools?: () => void;
  onNavigateArticles?: () => void;
  onNavigateServices?: () => void;
  onNavigateTopics?: () => void;
  onNavigateFees?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateService,
  onNavigateArticle,
  onNavigatePrivacy,
  onNavigateAbout,
  onNavigateProcess,
  onNavigateFaq,
  onNavigateContact,
  onNavigateTools,
  onNavigateArticles,
  onNavigateServices,
  onNavigateTopics,
  onNavigateFees,
}) => {
  return (
    <footer className="relative bg-[#1E1527] text-[#FAF8F5] pt-20 pb-12 overflow-hidden border-t border-[#C5A059]/20">
      {/* Top Gold Hairline Glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-60" />

      {/* Subtle radial ambient highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo-header.png"
                alt="لوگوی زوج درمان"
                className="h-9 w-auto filter drop-shadow-sm brightness-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="flex items-center text-2xl font-black text-white tracking-tight" dir="ltr">
                <span className="font-serif">Z</span>
                <span className="text-[#C5A059] font-serif">ooj</span>
                <span>darman.ir</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8D2E5] leading-relaxed mb-6 max-w-sm text-justify">
              سامانه و مرکز تخصصی زوج درمان و زوج‌درمانی هیجان‌مدار (EFT) تحت نظارت بالینی مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی و مسئول فنی کلینیک پیوند امن تهران با پروانه رسمی نظام روان‌شناسی ۱۴۱۴۰۸۳.
            </p>

            <div className="flex flex-col gap-2.5 mb-6 max-w-sm w-full">
              <a
                href="tel:02144600980"
                className="flex items-center gap-2.5 text-xs font-bold text-[#E8DFD5] hover:text-[#C5A059] transition-colors p-2.5 rounded-xl bg-white/5 border border-white/10"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>۰۲۱ ۴۴۶۰۰۹۸۰</span>
                <span className="text-[10px] text-[#A67C2E] mr-auto font-sans font-medium">پذیرش کلینیک</span>
              </a>

              <a
                href="https://peyvandamn.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-bold text-[#E8DFD5] hover:text-[#C5A059] transition-colors p-2.5 rounded-xl bg-white/5 border border-white/10"
              >
                <ExternalLink className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>کلینیک تخصصی پیوند امن تهران — peyvandamn.ir</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-[#E8DFD5] bg-[#2A1E35] border border-[#C5A059]/30 px-4 py-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>پروانه رسمی نظام روان‌شناسی و مشاوره: ۱۴۱۴۰۸۳</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C5A059] uppercase mb-4 pb-2 border-b border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>خدمات تخصصی زوج‌درمانی</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/services/couples-therapy"
                  onClick={(e) => { e.preventDefault(); onNavigateService('couples-therapy'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  زوج درمان و زوج‌درمانی هیجان‌مدار (EFT)
                </a>
              </li>
              <li>
                <a
                  href="/services/infidelity-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('infidelity-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  مشاوره تخصصی درمان خیانت و بازسازی اعتماد
                </a>
              </li>
              <li>
                <a
                  href="/services/divorce-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('divorce-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  مشاوره طلاق آگاهانه و کاهش آسیب
                </a>
              </li>
              <li>
                <a
                  href="/services/online-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('online-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  مشاوره آنلاین خارج از کشور و بین‌المللی
                </a>
              </li>
              <li>
                <a
                  href="/services/premarital-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('premarital-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  مشاوره پیش از ازدواج و آزمون‌های تشخیصی
                </a>
              </li>
              <li>
                <a
                  href="/services/relationship-patterns-therapy"
                  onClick={(e) => { e.preventDefault(); onNavigateService('relationship-patterns-therapy'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  طرحواره‌درمانی روابط و شکستن چرخه‌های تکراری
                </a>
              </li>
            </ul>
          </div>

          {/* Top Articles Column */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold tracking-wider text-[#C5A059] uppercase mb-4 pb-2 border-b border-white/10">
              <span>مقالات بالینی منتخب</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/articles/anger-management-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('anger-management-in-marriage'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  مدیریت خشم در مشاجرات
                </a>
              </li>
              <li>
                <a
                  href="/articles/attachment-style-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('attachment-style-in-marriage'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  سبک‌های دلبستگی در ازدواج
                </a>
              </li>
              <li>
                <a
                  href="/articles/dealing-with-infidelity-shock"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('dealing-with-infidelity-shock'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  مواجهه با شوک خیانت
                </a>
              </li>
              <li>
                <a
                  href="/articles/emotional-distance-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('emotional-distance-in-marriage'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  سرد شدن رابطه زناشویی
                </a>
              </li>
              <li>
                <a
                  href="/articles/deciding-about-divorce"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('deciding-about-divorce'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  تصمیم‌گیری آگاهانه درباره طلاق
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Access Column */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold tracking-wider text-[#C5A059] uppercase mb-4 pb-2 border-b border-white/10">
              <span>دسترسی و بخش‌ها</span>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/best-couples-therapist-tehran"
                  className="hover:text-[#C5A059] text-white font-bold transition-colors cursor-pointer text-right block py-1"
                >
                  بهترین زوج درمانگر تهران و آنلاین
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  onClick={(e) => { e.preventDefault(); onNavigateTools ? onNavigateTools() : onNavigateHome('tools'); }}
                  className="hover:text-[#C5A059] text-[#C5A059] font-bold transition-colors cursor-pointer text-right block py-1 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  <span>تست آنلاین رضایت زناشویی</span>
                </a>
              </li>
              <li>
                <a
                  href="/topics"
                  onClick={(e) => { e.preventDefault(); onNavigateTopics ? onNavigateTopics() : onNavigateHome('seo-hub'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  موضوعات و پایگاه کلمات کلیدی
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); onNavigateAbout ? onNavigateAbout() : onNavigateHome('bio'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  درباره مهناز خوینی
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  onClick={(e) => { e.preventDefault(); onNavigateProcess ? onNavigateProcess() : onNavigateHome('process'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  پروتکل ۴ مرحله‌ای درمان
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => { e.preventDefault(); onNavigateFaq ? onNavigateFaq() : onNavigateHome('faq'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  پرسش‌های متداول زوجین
                </a>
              </li>
              <li>
                <a
                  href="/fees"
                  onClick={(e) => { e.preventDefault(); onNavigateFees ? onNavigateFees() : onNavigateHome('pricing'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  تعرفه مصوب و شرایط بیمه
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); onNavigateContact ? onNavigateContact() : onNavigateHome('contact'); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  آدرس و تماس کلینیک
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => { e.preventDefault(); onNavigatePrivacy(); }}
                  className="hover:text-[#C5A059] transition-colors cursor-pointer text-right block py-1"
                >
                  منشور محرمانگی مراجعین
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Semantic Keyword Hub & City Quick Links for SEO */}
        <div className="pt-10 pb-8 border-t border-white/10 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C5A059] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>پایگاه موضوعی و دسترسی سریع به کلمات کلیدی پرجستجوی سامانه زوج‌درمان</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#BDB6CB] leading-relaxed">
            <span className="text-[#E8DFD5] font-bold">مراکز و شهرها:</span>
            <a href="/best-couples-therapist-tehran" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمان خوب در تهران</a>
            <span>•</span>
            <a href="/articles/good-couples-therapist-in-tehran" onClick={(e) => { e.preventDefault(); onNavigateArticle('good-couples-therapist-in-tehran'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمان تهران</a>
            <span>•</span>
            <a href="/articles/couples-therapy-karaj" onClick={(e) => { e.preventDefault(); onNavigateArticle('couples-therapy-karaj'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمان خوب در کرج</a>
            <span>•</span>
            <a href="/articles/couples-therapy-esfahan" onClick={(e) => { e.preventDefault(); onNavigateArticle('couples-therapy-esfahan'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمان اصفهان</a>
            <span>•</span>
            <a href="/articles/couples-therapy-kerman" onClick={(e) => { e.preventDefault(); onNavigateArticle('couples-therapy-kerman'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمان کرمان</a>
            <span>•</span>
            <a href="/articles/couples-therapy-shiraz" onClick={(e) => { e.preventDefault(); onNavigateArticle('couples-therapy-shiraz'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمانگر شیراز</a>
            <span>•</span>
            <a href="/articles/couples-therapy-mashhad" onClick={(e) => { e.preventDefault(); onNavigateArticle('couples-therapy-mashhad'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمانگر مشهد</a>
            <span>•</span>
            <a href="/articles/online-couples-therapist" onClick={(e) => { e.preventDefault(); onNavigateArticle('online-couples-therapist'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمانگر آنلاین</a>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#BDB6CB] leading-relaxed mt-3">
            <span className="text-[#E8DFD5] font-bold">خیانت و بحران رابطه:</span>
            <a href="/articles/infidelity-counseling-qa" onClick={(e) => { e.preventDefault(); onNavigateArticle('infidelity-counseling-qa'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">مشاوره خیانت پرسش و پاسخ</a>
            <span>•</span>
            <a href="/articles/husband-infidelity-to-wife" onClick={(e) => { e.preventDefault(); onNavigateArticle('husband-infidelity-to-wife'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">مشاوره خیانت مرد به زن</a>
            <span>•</span>
            <a href="/articles/wife-infidelity-to-husband" onClick={(e) => { e.preventDefault(); onNavigateArticle('wife-infidelity-to-husband'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">مشاوره خیانت زن به شوهر</a>
            <span>•</span>
            <a href="/articles/infidelity-counseling-mashhad" onClick={(e) => { e.preventDefault(); onNavigateArticle('infidelity-counseling-mashhad'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">مشاوره خیانت در مشهد</a>
            <span>•</span>
            <a href="/articles/free-infidelity-phone-counseling" onClick={(e) => { e.preventDefault(); onNavigateArticle('free-infidelity-phone-counseling'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">مشاوره خیانت تلفنی رایگان</a>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#BDB6CB] leading-relaxed mt-3">
            <span className="text-[#E8DFD5] font-bold">تست‌های آنلاین روانشناسی رابطه:</span>
            <a href="/tests/enrich-marital-satisfaction" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">تست رضایت زناشویی انریچ</a>
            <span>•</span>
            <a href="/tests/gottman-divorce-predictor" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">شاخص ۴ سوارکار طلاق گاتمن</a>
            <span>•</span>
            <a href="/tests/infidelity-trauma-assessment" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">تست ترومای خیانت PISD</a>
            <span>•</span>
            <a href="/tests/attachment-style-in-relationships" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">تست سبک دلبستگی رابطه</a>
            <span>•</span>
            <a href="/tests/five-love-languages" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">تست ۵ زبان عشق چپمن</a>
            <span>•</span>
            <a href="/tests/premarital-readiness-assessment" className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">تست آمادگی ازدواج</a>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#BDB6CB] leading-relaxed mt-3">
            <span className="text-[#E8DFD5] font-bold">دانشنامه بالینی:</span>
            <a href="/articles/what-is-couples-therapy" onClick={(e) => { e.preventDefault(); onNavigateArticle('what-is-couples-therapy'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمانی چیست</a>
            <span>•</span>
            <a href="/articles/what-is-clinical-psychology" onClick={(e) => { e.preventDefault(); onNavigateArticle('what-is-clinical-psychology'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">روانشناسی بالینی چیست</a>
            <span>•</span>
            <a href="/articles/online-psychologist-selection-guide" onClick={(e) => { e.preventDefault(); onNavigateArticle('online-psychologist-selection-guide'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">روانشناس آنلاین معتبر</a>
            <span>•</span>
            <a href="/articles/psychology-of-money-in-marriage" onClick={(e) => { e.preventDefault(); onNavigateArticle('psychology-of-money-in-marriage'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">روانشناسی پول در ازدواج</a>
            <span>•</span>
            <a href="/articles/emotionally-focused-therapy-eft" onClick={(e) => { e.preventDefault(); onNavigateArticle('emotionally-focused-therapy-eft'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">زوج درمانی هیجان‌مدار EFT</a>
            <span>•</span>
            <a href="/fees" onClick={(e) => { e.preventDefault(); onNavigateFees ? onNavigateFees() : onNavigateHome('pricing'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-4">هزینه و تعرفه هر جلسه زوج درمانی</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A1B5]">
          <p>© کلیه حقوق مادی و معنوی برای پلتفرم zoojdarman.ir و مهناز خوینی محفوظ است.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => { e.preventDefault(); onNavigatePrivacy(); }}
              className="hover:text-[#C5A059] transition-colors cursor-pointer"
            >
              حریم خصوصی و محرمانگی
            </a>
            <span>•</span>
            <a
              href="https://peyvandamn.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
              dir="ltr"
            >
              peyvandamn.ir
            </a>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>تهران، منطقه ۲ (کلینیک پیوند امن)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
