import React, { useEffect } from 'react';
import { CountrySEOData, COUNTRIES_DATA } from '../data/countriesData';
import { getArticleBySlug } from '../data/articles';
import {
  Globe,
  Phone,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Clock,
  ArrowLeft,
  CreditCard,
  Building2,
  Calendar
} from 'lucide-react';
import { registerFaqSchema } from '../seo';

interface CountryLandingViewProps {
  countryData: CountrySEOData;
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectCountry: (slug: string) => void;
}

export const CountryLandingView: React.FC<CountryLandingViewProps> = ({
  countryData,
  onNavigateHome,
  onNavigateContact,
  onNavigateTools,
  onSelectArticle,
  onSelectCountry,
}) => {
  // Register FAQ JSON-LD Schema
  useEffect(() => {
    if (countryData.faqs && countryData.faqs.length > 0) {
      const cleanup = registerFaqSchema(
        countryData.faqs.map((f) => ({ q: f.q, a: f.a }))
      );
      return cleanup;
    }
  }, [countryData]);

  // Fetch related articles
  const relatedArticles = countryData.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);

  return (
    <div className="bg-[#FCFAF8] min-h-screen pb-20">
      {/* Top Hero Banner */}
      <div className="bg-[#241A35] text-white py-14 lg:py-20 relative overflow-hidden border-b border-[#C5A059]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E2F5B]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs text-[#C5A059] font-bold mb-6">
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
              صفحه اصلی
            </button>
            <span>/</span>
            <button onClick={() => onSelectCountry('hub')} className="hover:underline cursor-pointer text-white/80">
              کشورها و ایرانیان خارج از کشور
            </button>
            <span>/</span>
            <span className="text-white">زوج درمانی در {countryData.countryNameFa} {countryData.flagEmoji}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3E2F5B] text-[#C5A059] text-xs font-black mb-4 border border-[#C5A059]/30 shadow-md">
                <span className="text-base">{countryData.flagEmoji}</span>
                <span>خدمات مشاوره بین‌المللی زوج‌درمانی آنلاین در {countryData.countryNameFa}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {countryData.h1}
              </h1>

              <p className="text-xs sm:text-base text-white/85 leading-relaxed font-medium mb-6">
                {countryData.metaDescription}
              </p>

              {/* Badges: Timezone & Payment */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#E8DFD5]">
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>{countryData.timezoneNote}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <CreditCard className="w-4 h-4 text-[#8FAF9B]" />
                  <span>{countryData.paymentNote}</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Box */}
            <div className="bg-gradient-to-b from-[#2A1E35] to-[#1E1527] p-6 sm:p-7 rounded-3xl border border-[#C5A059]/40 shadow-2xl shrink-0 w-full lg:w-80 space-y-4">
              <div className="text-center border-b border-white/10 pb-4">
                <span className="text-[11px] text-[#C5A059] font-black uppercase tracking-wider block mb-1">
                  پذیرش بین‌المللی {countryData.countryNameFa} {countryData.flagEmoji}
                </span>
                <h3 className="text-base font-black text-white">رزرو آنلاین فوری مشاوره</h3>
              </div>

              <a
                href="https://wa.me/989199087264?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%86%D9%88%D8%A8%D8%AA%20%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87%20%D8%B2%D9%88%D8%AC%20%D8%AF%D8%B1%D9%85%D8%A7%D9%86%DB%8C%20%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86%20%D8%AE%D8%A7%D8%B1%D8%AC%20%D8%A7%D8%B2%20%DA%A9%D8%B4%D9%88%D8%B1%20%D9%BE%DB%8C%D8%A7%D9%85%20%D9%85%DB%8C%E2%80%8C%D8%AF%D9%87%D9%85."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#C5A059] hover:bg-[#9E7D36] text-[#241A35] rounded-2xl font-black text-xs flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ارسال پیام در واتساپ (۲۴/۷)</span>
              </a>

              <a
                href="tel:09199087264"
                className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/15"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <span>+98 919 908 7264</span>
              </a>

              <p className="text-[11px] text-white/70 text-center leading-normal">
                برگزاری جلسات تصویری امن روی Google Meet و WhatsApp با تایید وقت قبلی
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="container-custom py-12 lg:py-16 space-y-12">
        {/* Intro & Cultural Context */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#A67C2E] uppercase">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>چرا هموطنان مقیم {countryData.countryNameFa} مشاوره آنلاین مهناز خوینی را انتخاب می‌کنند؟</span>
          </div>

          <p className="text-sm sm:text-base text-[#241A35] leading-relaxed text-justify font-medium">
            {countryData.introText}
          </p>

          {/* Key Features Grid */}
          <div className="pt-6 border-t border-[#F0EBE2]">
            <h3 className="text-base font-black text-[#241A35] mb-4">
              مزایای اختصاصی زوج‌درمانی آنلاین برای مقیمان {countryData.countryNameFa}:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {countryData.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#FAF8F5] p-4 rounded-2xl border border-[#E8DFD5]">
                  <CheckCircle2 className="w-5 h-5 text-[#8FAF9B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#241A35] font-bold leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Major Cities List */}
          <div className="pt-6 border-t border-[#F0EBE2]">
            <span className="text-xs font-black text-[#241A35] block mb-3">
              🌍 شهرهای اصلی تحت پوشش در کشور {countryData.countryNameFa}:
            </span>
            <div className="flex flex-wrap gap-2">
              {countryData.majorCities.map((city, idx) => (
                <span
                  key={idx}
                  className="bg-[#FAF5EB] text-[#3E2F5B] text-xs font-bold px-3.5 py-1.5 rounded-full border border-[#C5A059]/30"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Local FAQs Section */}
        {countryData.faqs && countryData.faqs.length > 0 && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E8DFD5] shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A67C2E] uppercase">
              <HelpCircle className="w-4 h-4 text-[#C5A059]" />
              <span>پرسش‌های متداول مراجعین مقیم {countryData.countryNameFa}</span>
            </div>

            <div className="space-y-4">
              {countryData.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DFD5] space-y-2">
                  <h4 className="text-sm sm:text-base font-black text-[#241A35] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed pr-4">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm sm:text-base font-black text-[#241A35]">
                <BookOpen className="w-5 h-5 text-[#C5A059]" />
                <span>مقالات بالینی پیشنهادی برای هموطنان مقیم خارج از کشور:</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((art) => art && (
                <div
                  key={art.slug}
                  onClick={() => onSelectArticle(art.slug)}
                  className="bg-white p-6 rounded-3xl border border-[#E8DFD5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-bold text-[#A67C2E] bg-[#FAF5EB] px-3 py-1 rounded-full border border-[#C5A059]/30 inline-block mb-3">
                      {art.category}
                    </span>
                    <h4 className="text-base font-black text-[#241A35] group-hover:text-[#3E2F5B] transition-colors leading-snug mb-2">
                      {art.h1 || art.title}
                    </h4>
                    <p className="text-xs text-[#5E5868] line-clamp-2 leading-relaxed mb-4">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F0EBE2] flex items-center justify-between text-xs font-black text-[#3E2F5B]">
                    <span>مطالعه مقاله کامل</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global Countries Directory */}
        <div className="bg-[#241A35] text-white p-6 sm:p-10 rounded-3xl border border-[#C5A059]/40 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#C5A059]">
              <Globe className="w-5 h-5 text-[#C5A059]" />
              <span>پایگاه بین‌المللی مشاوره آنلاین زوج درمانی در سایر کشورهای جهان:</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {COUNTRIES_DATA.map((country) => (
              <button
                key={country.id}
                onClick={() => onSelectCountry(country.slug)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  country.id === countryData.id
                    ? 'bg-[#C5A059] text-[#241A35] font-black shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/15'
                }`}
              >
                <span>{country.flagEmoji}</span>
                <span>زوج درمانی در {country.countryNameFa}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
