import React from 'react';
import { ShieldCheck, Phone, ExternalLink, MapPin } from 'lucide-react';

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
  onNavigateVideos?: () => void;
  onNavigateCities?: () => void;
  onNavigateCountries?: () => void;
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
  onNavigateTopics,
  onNavigateFees,
  onNavigateVideos,
  onNavigateCities,
  onNavigateCountries,
}) => {
  return (
    <footer className="bg-[#1E1527] text-[#FAF8F5] pt-16 pb-20 lg:pb-12 border-t border-[#C5A059]/25">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-header.png"
                alt="لوگوی مرکز زوج درمان"
                className="h-8 w-auto brightness-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="flex items-center text-xl font-black text-white tracking-tight" dir="ltr">
                <span>Zoojdarman.ir</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8D2E5] leading-relaxed mb-6 max-w-sm text-justify">
              مرکز تخصصی زوج‌درمان و زوج‌درمانی هیجان‌مدار (EFT) تحت نظارت بالینی مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی و مسئول فنی کلینیک پیوند امن تهران (پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳).
            </p>

            <div className="flex flex-col gap-2.5 mb-6 max-w-sm w-full text-xs">
              <a
                href="tel:02144600980"
                className="flex items-center justify-between text-[#E8DFD5] hover:text-[#C5A059] transition-colors py-2.5 px-3.5 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="flex items-center gap-2 font-bold">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>تلفن پذیرش کلینیک</span>
                </span>
                <span className="font-black tabular-nums" dir="ltr">021 4460 0980</span>
              </a>

              <a
                href="https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8DFD5] hover:text-[#C5A059] transition-colors py-2.5 px-3.5 rounded-lg bg-white/5 border border-white/10 font-bold"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>تهران، پونک (مسیریابی گوگل مپ)</span>
              </a>

              <a
                href="https://peyvandamn.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8DFD5] hover:text-[#C5A059] transition-colors py-2.5 px-3.5 rounded-lg bg-white/5 border border-white/10 font-bold"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>کلینیک تخصصی پیوند امن — peyvandamn.ir</span>
              </a>
            </div>

            {/* Unified Editorial Social Links */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <a
                href="https://www.aparat.com/Mahnaz.khoini_psychology"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-[#E8DFD5] hover:border-[#C5A059] hover:text-[#C5A059] text-xs font-bold transition-colors"
              >
                آپارات رسمی
              </a>
              <a
                href="https://youtube.com/@mahnaz.khoini"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-[#E8DFD5] hover:border-[#C5A059] hover:text-[#C5A059] text-xs font-bold transition-colors"
              >
                کانال یوتیوب
              </a>
              <a
                href="https://instagram.com/mahnaz.khoini"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-[#E8DFD5] hover:border-[#C5A059] hover:text-[#C5A059] text-xs font-bold transition-colors"
              >
                اینستاگرام
              </a>
              <a
                href="https://t.me/MKHOINI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-[#E8DFD5] hover:border-[#C5A059] hover:text-[#C5A059] text-xs font-bold transition-colors"
              >
                تلگرام
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#C5A059] font-bold tabular-nums">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>پروانه رسمی نظام روان‌شناسی و مشاوره: ۱۴۱۴۰۸۳</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black tracking-wide text-[#C5A059] mb-4 pb-2 border-b border-white/10">
              خدمات تخصصی زوج‌درمانی
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/services/couples-therapy"
                  onClick={(e) => { e.preventDefault(); onNavigateService('couples-therapy'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  زوج درمان و زوج‌درمانی هیجان‌مدار (EFT)
                </a>
              </li>
              <li>
                <a
                  href="/services/infidelity-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('infidelity-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مشاوره تخصصی درمان خیانت و بازسازی اعتماد
                </a>
              </li>
              <li>
                <a
                  href="/services/divorce-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('divorce-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مشاوره طلاق آگاهانه و کاهش آسیب
                </a>
              </li>
              <li>
                <a
                  href="/services/online-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('online-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مشاوره آنلاین خارج از کشور و بین‌المللی
                </a>
              </li>
              <li>
                <a
                  href="/services/premarital-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('premarital-counseling'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مشاوره پیش از ازدواج و آزمون‌های تشخیصی
                </a>
              </li>
              <li>
                <a
                  href="/services/relationship-patterns-therapy"
                  onClick={(e) => { e.preventDefault(); onNavigateService('relationship-patterns-therapy'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  طرحواره‌درمانی روابط و تله‌های عاطفی
                </a>
              </li>
            </ul>
          </div>

          {/* Articles & Guides Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black tracking-wide text-[#C5A059] mb-4 pb-2 border-b border-white/10">
              مقالات بالینی منتخب
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/articles/anger-management-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('anger-management-in-marriage'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مدیریت خشم در مشاجرات
                </a>
              </li>
              <li>
                <a
                  href="/articles/attachment-style-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('attachment-style-in-marriage'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  سبک‌های دلبستگی در ازدواج
                </a>
              </li>
              <li>
                <a
                  href="/articles/dealing-with-infidelity-shock"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('dealing-with-infidelity-shock'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مواجهه با شوک خیانت
                </a>
              </li>
              <li>
                <a
                  href="/articles/emotional-distance-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('emotional-distance-in-marriage'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  سرد شدن رابطه زناشویی
                </a>
              </li>
              <li>
                <a
                  href="/articles/deciding-about-divorce"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('deciding-about-divorce'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  تصمیم‌گیری آگاهانه درباره طلاق
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Access & Regional Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black tracking-wide text-[#C5A059] mb-4 pb-2 border-b border-white/10">
              دسترسی و بخش‌ها
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/best-couples-therapist-tehran"
                  className="hover:text-[#C5A059] text-white font-bold transition-colors block py-1"
                >
                  بهترین زوج درمانگر تهران
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  onClick={(e) => { e.preventDefault(); onNavigateTools ? onNavigateTools() : onNavigateHome('tools'); }}
                  className="hover:text-[#C5A059] text-[#C5A059] font-bold transition-colors block py-1"
                >
                  تست‌های آنلاین سلامت رابطه
                </a>
              </li>
              <li>
                <a
                  href="/cities"
                  onClick={(e) => { if (onNavigateCities) { e.preventDefault(); onNavigateCities(); } }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  شهرهای تحت پوشش ایران
                </a>
              </li>
              <li>
                <a
                  href="/countries"
                  onClick={(e) => { if (onNavigateCountries) { e.preventDefault(); onNavigateCountries(); } }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  ایرانیان خارج از کشور
                </a>
              </li>
              <li>
                <a
                  href="/videos"
                  onClick={(e) => { e.preventDefault(); onNavigateVideos ? onNavigateVideos() : onNavigateHome('videos'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  ویدیوهای آپارات و یوتیوب
                </a>
              </li>
              <li>
                <a
                  href="/topics"
                  onClick={(e) => { e.preventDefault(); onNavigateTopics ? onNavigateTopics() : onNavigateHome('seo-hub'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  موضوعات و پرسش و پاسخ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); onNavigateAbout ? onNavigateAbout() : onNavigateHome('bio'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  درباره مهناز خوینی
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  onClick={(e) => { e.preventDefault(); onNavigateProcess ? onNavigateProcess() : onNavigateHome('process'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  مراحل درمان EFT
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => { e.preventDefault(); onNavigateFaq ? onNavigateFaq() : onNavigateHome('faq'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  پرسش‌های متداول
                </a>
              </li>
              <li>
                <a
                  href="/fees"
                  onClick={(e) => { e.preventDefault(); onNavigateFees ? onNavigateFees() : onNavigateHome('pricing'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  تعرفه جلسات و بیمه
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); onNavigateContact ? onNavigateContact() : onNavigateHome('contact'); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  آدرس و تماس کلینیک
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => { e.preventDefault(); onNavigatePrivacy(); }}
                  className="hover:text-[#C5A059] transition-colors block py-1"
                >
                  منشور محرمانگی مراجعین
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Clean Directory Links Row */}
        <div className="pt-8 pb-8 border-t border-white/10 mb-8 space-y-3 text-[11px] text-[#BDB6CB]">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="text-[#E8DFD5] font-bold">مراکز و شهرها:</span>
            <a href="/cities/couples-therapist-tehran" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تهران</a>
            <span>·</span>
            <a href="/cities/couples-therapy-karaj" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">کرج</a>
            <span>·</span>
            <a href="/cities/couples-therapy-mashhad" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">مشهد</a>
            <span>·</span>
            <a href="/cities/couples-therapy-esfahan" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">اصفهان</a>
            <span>·</span>
            <a href="/cities/couples-therapy-shiraz" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">شیراز</a>
            <span>·</span>
            <a href="/cities/couples-therapy-tabriz" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تبریز</a>
            <span>·</span>
            <a href="/cities/couples-therapy-ahvaz" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">اهواز</a>
            <span>·</span>
            <a href="/cities/couples-therapy-kerman" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">کرمان</a>
            <span>·</span>
            <a href="/countries/couples-therapy-canada" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">کانادا</a>
            <span>·</span>
            <a href="/countries/couples-therapy-germany" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">آلمان</a>
            <span>·</span>
            <a href="/countries/couples-therapy-uk" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">انگلستان</a>
            <span>·</span>
            <a href="/countries/couples-therapy-usa" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">آمریکا</a>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="text-[#E8DFD5] font-bold">آزمون‌های آنلاین:</span>
            <a href="/tests/enrich-marital-satisfaction" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تست انریچ (ENRICH)</a>
            <span>·</span>
            <a href="/tests/gottman-divorce-predictor" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">شاخص ۴ سوارکار طلاق</a>
            <span>·</span>
            <a href="/tests/infidelity-trauma-assessment" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تست ترومای خیانت</a>
            <span>·</span>
            <a href="/tests/attachment-style-in-relationships" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تست سبک دلبستگی</a>
            <span>·</span>
            <a href="/tests/five-love-languages" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تست ۵ زبان عشق</a>
            <span>·</span>
            <a href="/tests/premarital-readiness-assessment" className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تست آمادگی ازدواج</a>
          </div>

          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
            <span className="text-[#E8DFD5] font-bold">موضوعات محوری:</span>
            <a href="/articles/what-is-couples-therapy" onClick={(e) => { e.preventDefault(); onNavigateArticle('what-is-couples-therapy'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">زوج درمانی چیست</a>
            <span>·</span>
            <a href="/articles/emotional-distance-in-marriage" onClick={(e) => { e.preventDefault(); onNavigateArticle('emotional-distance-in-marriage'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">درمان سرد شدن رابطه زناشویی</a>
            <span>·</span>
            <a href="/articles/rebuilding-trust-after-infidelity" onClick={(e) => { e.preventDefault(); onNavigateArticle('rebuilding-trust-after-infidelity'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">ترمیم رابطه بعد از خیانت</a>
            <span>·</span>
            <a href="/articles/signs-marriage-is-over-test" onClick={(e) => { e.preventDefault(); onNavigateArticle('signs-marriage-is-over-test'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">تست پایان زندگی مشترک</a>
            <span>·</span>
            <a href="/articles/deciding-about-divorce" onClick={(e) => { e.preventDefault(); onNavigateArticle('deciding-about-divorce'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">از کجا بدانیم باید طلاق بگیریم</a>
            <span>·</span>
            <a href="/articles/engagement-period-conflicts" onClick={(e) => { e.preventDefault(); onNavigateArticle('engagement-period-conflicts'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">فرق نامزدی و عقد</a>
            <span>·</span>
            <a href="/articles/wife-infidelity-to-husband" onClick={(e) => { e.preventDefault(); onNavigateArticle('wife-infidelity-to-husband'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">خیانت به شوهر</a>
            <span>·</span>
            <a href="/articles/emotionally-focused-therapy-eft" onClick={(e) => { e.preventDefault(); onNavigateArticle('emotionally-focused-therapy-eft'); }} className="hover:text-[#C5A059] underline decoration-[#C5A059]/35 underline-offset-4">درمان هیجان‌مدار سوزان جانسون</a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A1B5]">
          <p>© کلیه حقوق مادی و معنوی برای zoojdarman.ir و مهناز خوینی محفوظ است.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => { e.preventDefault(); onNavigatePrivacy(); }}
              className="hover:text-[#C5A059] transition-colors"
            >
              حریم خصوصی و محرمانگی
            </a>
            <span>·</span>
            <a
              href="https://peyvandamn.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C5A059] transition-colors"
              dir="ltr"
            >
              peyvandamn.ir
            </a>
            <span>·</span>
            <span>تهران، منطقه ۲</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
