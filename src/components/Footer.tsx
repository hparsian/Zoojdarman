import React from 'react';
import { ShieldCheck, Heart, Phone, ExternalLink } from 'lucide-react';

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
}) => {
  return (
    <footer className="bg-[#44386B] text-[#FAF8F5] pt-16 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center text-2xl font-black text-white tracking-tight mb-4" dir="ltr">
              <span>Z</span>
              <svg width="20" height="20" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
                <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
              </svg>
              <span>jdarman.ir</span>
            </div>

            <p className="text-xs sm:text-sm text-[#D8D2E5] leading-relaxed mb-4 max-w-sm text-justify">
              مرکز تخصصی زوج درمان و زوج‌درمانی بالینی مهناز خوینی (کارشناس ارشد روانشناسی بالینی، مسئول فنی کلینیک پیوند امن، عضو سازمان نظام روان‌شناسی و مشاوره ایران با پروانه تخصصی ۱۴۱۴۰۸۳).
            </p>

            <div className="flex flex-col gap-2.5 mb-4 max-w-sm">
              <a
                href="tel:02144600980"
                className="flex items-center gap-2 text-xs font-bold text-[#8FAF9B] hover:text-[#E8A58D] transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>۰۲۱ ۴۴۶۰۰۹۸۰</span>
              </a>
              <a
                href="https://peyvandamn.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold text-[#8FAF9B] hover:text-[#E8A58D] transition-colors"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>
                  کلینیک پیوند امن — <span dir="ltr">peyvandamn.ir</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#8FAF9B] bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>پروانه رسمی نظام روان‌شناسی: ۱۴۱۴۰۸۳</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E8A58D] after:rounded-full">
              خدمات تخصصی زوج درمان
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/services/couples-therapy"
                  onClick={(e) => { e.preventDefault(); onNavigateService('couples-therapy'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  زوج درمان و زوج‌درمانی هیجان‌مدار (EFT)
                </a>
              </li>
              <li>
                <a
                  href="/services/infidelity-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('infidelity-counseling'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره تخصصی درمان خیانت
                </a>
              </li>
              <li>
                <a
                  href="/services/divorce-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('divorce-counseling'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره طلاق آگاهانه و کاهش آسیب
                </a>
              </li>
              <li>
                <a
                  href="/services/online-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('online-counseling'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره آنلاین خارج از کشور
                </a>
              </li>
              <li>
                <a
                  href="/services/premarital-counseling"
                  onClick={(e) => { e.preventDefault(); onNavigateService('premarital-counseling'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره پیش از ازدواج و تست‌ها
                </a>
              </li>
              <li>
                <a
                  href="/services/relationship-patterns-therapy"
                  onClick={(e) => { e.preventDefault(); onNavigateService('relationship-patterns-therapy'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  طرحواره‌درمانی روابط عاطفی
                </a>
              </li>
            </ul>
          </div>

          {/* Top Articles Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E8A58D] after:rounded-full">
              مقالات منتخب
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/articles/anger-management-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('anger-management-in-marriage'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مدیریت خشم در مشاجرات
                </a>
              </li>
              <li>
                <a
                  href="/articles/attachment-style-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('attachment-style-in-marriage'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  سبک‌های دلبستگی در ازدواج
                </a>
              </li>
              <li>
                <a
                  href="/articles/dealing-with-infidelity-shock"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('dealing-with-infidelity-shock'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مواجهه با شوک خیانت
                </a>
              </li>
              <li>
                <a
                  href="/articles/emotional-distance-in-marriage"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('emotional-distance-in-marriage'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  سرد شدن رابطه زناشویی
                </a>
              </li>
              <li>
                <a
                  href="/articles/deciding-about-divorce"
                  onClick={(e) => { e.preventDefault(); onNavigateArticle('deciding-about-divorce'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  تصمیم‌گیری آگاهانه درباره طلاق
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Access Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E8A58D] after:rounded-full">
              دسترسی سریع
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <a
                  href="/tools"
                  onClick={(e) => { e.preventDefault(); onNavigateTools ? onNavigateTools() : onNavigateHome('tools'); }}
                  className="hover:text-[#E8A58D] text-[#8FAF9B] font-bold transition-colors cursor-pointer text-right flex items-center gap-1"
                >
                  <span>تست آنلاین سلامت رابطه (انریچ)</span>
                </a>
              </li>
              <li>
                <a
                  href="/topics"
                  onClick={(e) => { e.preventDefault(); onNavigateTopics ? onNavigateTopics() : onNavigateHome('seo-hub'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  موضوعات و جستجوهای پرطرفدار
                </a>
              </li>
              <li>
                <a
                  href="/#assessment"
                  onClick={(e) => { e.preventDefault(); onNavigateHome('assessment'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  راهنمای تشخیصی رابطه
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => { e.preventDefault(); onNavigateAbout ? onNavigateAbout() : onNavigateHome('bio'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  درباره مهناز خوینی
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  onClick={(e) => { e.preventDefault(); onNavigateProcess ? onNavigateProcess() : onNavigateHome('process'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مراحل و پروتکل درمانی
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => { e.preventDefault(); onNavigateFaq ? onNavigateFaq() : onNavigateHome('faq'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  پرسش‌های متداول
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); onNavigateContact ? onNavigateContact() : onNavigateHome('contact'); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  آدرس و تماس کلینیک
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => { e.preventDefault(); onNavigatePrivacy(); }}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  حریم خصوصی و محرمانگی
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D2E5]">
          <p>© کلیه حقوق مادی و معنوی برای zoojdarman.ir و مهناز خوینی محفوظ است.</p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => { e.preventDefault(); onNavigatePrivacy(); }}
              className="text-white hover:underline cursor-pointer"
            >
              حریم خصوصی و محرمانگی
            </a>
            <span>•</span>
            <a
              href="https://peyvandamn.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
              dir="ltr"
            >
              peyvandamn.ir
            </a>
            <span>•</span>
            <span dir="ltr">تهران، منطقه ۲ (پیوند امن)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
