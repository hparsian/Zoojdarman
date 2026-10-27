import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

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

            <p className="text-xs sm:text-sm text-[#D8D2E5] leading-relaxed mb-6 max-w-sm text-justify">
              مرکز تخصصی زوج‌درمانی، درمان خیانت و مشاوره روابط عاطفی مهناز خوینی، مسئول فنی کلینیک پیوند امن و عضو سازمان نظام روان‌شناسی و مشاوره ایران (پروانه ۱۴۱۴۰۸۳).
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8FAF9B] bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>پروانه رسمی نظام روان‌شناسی: ۱۴۱۴۰۸۳</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-black text-white mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-8 after:h-0.5 after:bg-[#E8A58D] after:rounded-full">
              خدمات تخصصی بالینی
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-[#D8D2E5]">
              <li>
                <button
                  onClick={() => onNavigateService('couples-therapy')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  زوج‌درمانی هیجان‌مدار (EFT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateService('infidelity-counseling')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره تخصصی درمان خیانت
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateService('divorce-counseling')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره طلاق آگاهانه و کاهش آسیب
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateService('online-counseling')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره آنلاین خارج از کشور
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateService('premarital-counseling')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مشاوره پیش از ازدواج و تست‌ها
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateService('relationship-patterns-therapy')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  طرحواره‌درمانی روابط عاطفی
                </button>
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
                <button
                  onClick={() => onNavigateArticle('anger-management-in-marriage')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مدیریت خشم در مشاجرات
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateArticle('attachment-style-in-marriage')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  سبک‌های دلبستگی در ازدواج
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateArticle('dealing-with-infidelity-shock')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مواجهه با شوک خیانت
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateArticle('emotional-distance-in-marriage')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  سرد شدن رابطه زناشویی
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateArticle('deciding-about-divorce')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  تصمیم‌گیری آگاهانه درباره طلاق
                </button>
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
                <button
                  onClick={() => (onNavigateTools ? onNavigateTools() : onNavigateHome('tools'))}
                  className="hover:text-[#E8A58D] text-[#8FAF9B] font-bold transition-colors cursor-pointer text-right flex items-center gap-1"
                >
                  <span>تست آنلاین سلامت رابطه (انریچ)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => (onNavigateTopics ? onNavigateTopics() : onNavigateHome('seo-hub'))}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  موضوعات و جستجوهای پرطرفدار
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateHome('assessment')}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  راهنمای تشخیصی رابطه
                </button>
              </li>
              <li>
                <button
                  onClick={() => (onNavigateAbout ? onNavigateAbout() : onNavigateHome('bio'))}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  درباره مهناز خوینی
                </button>
              </li>
              <li>
                <button
                  onClick={() => (onNavigateProcess ? onNavigateProcess() : onNavigateHome('process'))}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  مراحل و پروتکل درمانی
                </button>
              </li>
              <li>
                <button
                  onClick={() => (onNavigateFaq ? onNavigateFaq() : onNavigateHome('faq'))}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  پرسش‌های متداول
                </button>
              </li>
              <li>
                <button
                  onClick={() => (onNavigateContact ? onNavigateContact() : onNavigateHome('contact'))}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  آدرس و تماس کلینیک
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigatePrivacy}
                  className="hover:text-[#E8A58D] transition-colors cursor-pointer text-right"
                >
                  حریم خصوصی و محرمانگی
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D2E5]">
          <p>© کلیه حقوق مادی و معنوی برای zoojdarman.ir و مهناز خوینی محفوظ است.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigatePrivacy}
              className="text-white hover:underline cursor-pointer"
            >
              حریم خصوصی و محرمانگی
            </button>
            <span>•</span>
            <span dir="ltr">تهران، منطقه ۲ (پیوند امن)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
