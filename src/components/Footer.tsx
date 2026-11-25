import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { BrandMark, ZoojdarmanWordmark } from './BrandMark';
import { PARENT_CLINIC_LINKS } from '../utils/parentClinicLinks';

interface FooterProps {
  onNavigateHome: (section?: string) => void;
  onNavigateService?: (slug: string) => void;
  onNavigateArticle?: (slug: string) => void;
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
  onNavigateBestTherapist?: () => void;
  onNavigateCity?: (citySlug: string) => void;
  onNavigateCountry?: (countrySlug: string) => void;
  onSelectTest?: (testSlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateService,
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
  onNavigateVideos,
  onNavigateCities,
  onNavigateCountries,
  onNavigateBestTherapist,
  onNavigateCity,
  onNavigateCountry,
  onSelectTest,
}) => {
  const handleLink = (e: React.MouseEvent, action?: () => void, fallbackSection?: string) => {
    e.preventDefault();
    if (action) {
      action();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigateHome(fallbackSection);
    }
  };

  return (
    <footer className="bg-[#344A42] text-[#F4F1EC] border-t border-[#273932]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FCFBF8]/15">
          {/* Col 1: Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <BrandMark className="w-10 h-10 shrink-0 rounded-xl ring-1 ring-[#FCFBF8]/20 shadow-xs" />
              <div className="flex flex-col items-start text-right">
                <ZoojdarmanWordmark variant="dark" className="text-lg" />
                <p className="text-xs text-[#D8CBB9] mt-1">مرکز تخصصی زوج‌درمان · مهناز خوینی (نظام ۱۴۱۴۰۸۳)</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E5E0D8]/90 leading-relaxed">
              فضایی امن، علمی و بی‌طرف برای بازسازی پیوند عاطفی و تصمیم‌گیری آگاهانه در روابط؛
              حضوری در تهران و آنلاین در سراسر جهان.
            </p>

            <div className="space-y-2 text-xs text-[#E5E0D8]/90 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8FAE9B] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/b9dx9xeA69wJJPzd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FCFBF8] underline underline-offset-4 decoration-[#8FAE9B]/50 transition-colors"
                >
                  تهران، منطقه ۲ (محدوده صادقیه – پونک، کلینیک پیوند امن)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8FAE9B] shrink-0" />
                <span dir="ltr">021-44600980 · 0919-908-7264</span>
              </div>
              <p className="text-[11px] text-[#D8CBB9] pt-1 leading-relaxed">
                بخش تخصصی زوج‌درمانی و زیرمجموعه رسمی{' '}
                <a
                  href={PARENT_CLINIC_LINKS.home}
                  target="_blank"
                  rel="noopener"
                  className="text-[#8FAE9B] hover:text-[#FCFBF8] underline underline-offset-4 transition-colors"
                >
                  کلینیک پیوند امن (peyvandamn.ir)
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Services & Clinical Pages */}
          <div>
            <h3 className="text-sm font-bold text-[#FCFBF8] mb-4">خدمات تخصصی</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E5E0D8]/90">
              <li>
                <a
                  href="/services/couples-therapy"
                  onClick={(e) => handleLink(e, () => onNavigateService?.('couples-therapy'), 'services')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  زوج‌درمانی تخصصی (EFT)
                </a>
              </li>
              <li>
                <a
                  href="/services/infidelity-counseling"
                  onClick={(e) => handleLink(e, () => onNavigateService?.('infidelity-counseling'), 'services')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مشاوره بحران و ترمیم خیانت
                </a>
              </li>
              <li>
                <a
                  href="/services/divorce-counseling"
                  onClick={(e) => handleLink(e, () => onNavigateService?.('divorce-counseling'), 'services')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مشاوره طلاق آگاهانه
                </a>
              </li>
              <li>
                <a
                  href="/services/premarital-counseling"
                  onClick={(e) => handleLink(e, () => onNavigateService?.('premarital-counseling'), 'services')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مشاوره پیش از ازدواج
                </a>
              </li>
              <li>
                <a
                  href="/services/online-counseling"
                  onClick={(e) => handleLink(e, () => onNavigateService?.('online-counseling'), 'services')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مشاوره آنلاین بین‌المللی
                </a>
              </li>
              <li>
                <a
                  href={PARENT_CLINIC_LINKS.familyCounseling}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مشاوره فردی و خانواده (پیوند امن)
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => handleLink(e, onNavigateServices, 'services')}
                  className="text-[#8FAE9B] hover:text-[#FCFBF8] font-semibold transition-colors"
                >
                  مشاهده همه خدمات
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Knowledge, Tests & Clinic Info */}
          <div>
            <h3 className="text-sm font-bold text-[#FCFBF8] mb-4">دانشنامه و آشنایی</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E5E0D8]/90">
              <li>
                <a
                  href="/articles"
                  onClick={(e) => handleLink(e, onNavigateArticles, 'articles')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  بانک مقالات علمی رابطه
                </a>
              </li>
              <li>
                <a
                  href="/tools"
                  onClick={(e) => handleLink(e, onNavigateTools, 'tools')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  ابزارهای خودسنجی رایگان
                </a>
              </li>
              <li>
                <a
                  href="/tests/enrich-marital-satisfaction"
                  onClick={(e) => handleLink(e, () => onSelectTest?.('enrich-marital-satisfaction'), 'tools')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  پرسشنامه رضایت زناشویی انریچ
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, onNavigateAbout, 'bio')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  درباره مهناز خوینی
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  onClick={(e) => handleLink(e, onNavigateProcess, 'process')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مراحل ۴گانه درمان EFT
                </a>
              </li>
              <li>
                <a
                  href="/fees"
                  onClick={(e) => handleLink(e, onNavigateFees, 'faq')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  تعرفه و بیمه تکمیلی
                </a>
              </li>
              <li>
                <a
                  href="/best-couples-therapist-tehran"
                  onClick={(e) => handleLink(e, onNavigateBestTherapist, 'bio')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  معیارهای انتخاب زوج‌درمانگر خوب
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Coverage & Support */}
          <div>
            <h3 className="text-sm font-bold text-[#FCFBF8] mb-4">دسترسی منطقه‌ای و پشتیبانی</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#E5E0D8]/90">
              <li>
                <a
                  href="/cities/couples-therapist-tehran"
                  onClick={(e) => handleLink(e, () => onNavigateCity?.('couples-therapist-tehran'), 'regions')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  زوج‌درمانی در تهران و کرج
                </a>
              </li>
              <li>
                <a
                  href="/cities"
                  onClick={(e) => handleLink(e, onNavigateCities, 'regions')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مشاوره آنلاین شهرهای ایران
                </a>
              </li>
              <li>
                <a
                  href="/countries"
                  onClick={(e) => handleLink(e, onNavigateCountries, 'regions')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  ایرانیان خارج از کشور
                </a>
              </li>
              <li>
                <a
                  href="/countries/couples-therapy-canada"
                  onClick={(e) => handleLink(e, () => onNavigateCountry?.('couples-therapy-canada'), 'regions')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  مقیمان کانادا، آمریکا و اروپا
                </a>
              </li>
              <li>
                <a
                  href="/topics"
                  onClick={(e) => handleLink(e, onNavigateTopics)}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  موضوعات پرجستجو
                </a>
              </li>
              <li>
                <a
                  href="/videos"
                  onClick={(e) => handleLink(e, onNavigateVideos, 'videos')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  ویدیوهای آموزشی
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  onClick={(e) => handleLink(e, onNavigateFaq, 'faq')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  پرسش‌های متداول
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, onNavigateContact, 'contact')}
                  className="hover:text-[#FCFBF8] transition-colors"
                >
                  تماس و رزرو وقت
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E0D8]/80">
          <p>
            © ۱۴۰۴–۱۴۰۵ مرکز تخصصی زوج درمان مهناز خوینی (پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳). تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLink(e, onNavigatePrivacy)}
              className="hover:text-[#FCFBF8] transition-colors"
            >
              حریم خصوصی و محرمانگی
            </a>
            <a
              href={PARENT_CLINIC_LINKS.home}
              target="_blank"
              rel="noopener"
              className="hover:text-[#FCFBF8] transition-colors"
            >
              کلینیک پیوند امن
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
