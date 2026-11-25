import React, { useEffect } from 'react';
import { getCityBySlug } from '../data/citiesData';
import { CITIES_META } from '../data/citiesMeta';
import { getArticleMetaBySlug } from '../data/articlesMeta';
import { registerFaqSchema } from '../seo';
import { InnerPageTopBar } from './InnerPageTopBar';
import { CitiesHubView } from './CitiesHubView';
import { ClinicSpaceFigure } from './ClinicSpaceFigure';
import {
  MapPin,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  ArrowLeft,
  Globe,
} from 'lucide-react';

interface CityLandingViewProps {
  citySlug: string;
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateTools: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectCity: (slug: string) => void;
}

export const CityLandingView: React.FC<CityLandingViewProps> = ({
  citySlug,
  onNavigateHome,
  onNavigateContact,
  onNavigateTools,
  onSelectArticle,
  onSelectCity,
}) => {
  const cityData = getCityBySlug(citySlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [citySlug]);

  useEffect(() => {
    if (cityData?.faqs && cityData.faqs.length > 0) {
      return registerFaqSchema(cityData.faqs.map((f) => ({ q: f.q, a: f.a })));
    }
  }, [cityData]);

  if (!cityData) {
    return (
      <CitiesHubView
        onNavigateHome={onNavigateHome}
        onSelectCity={onSelectCity}
        onNavigateContact={onNavigateContact}
      />
    );
  }

  const relatedArticles = cityData.relatedArticleSlugs
    .map((slug) => getArticleMetaBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-20 text-[#292D2A]">
      <InnerPageTopBar
        onBack={() => onSelectCity('hub')}
        backLabel="شهرهای ایران"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-5xl"
      />

      {/* Hero Banner */}
      <div className="bg-[#FCFBF8] py-12 lg:py-16 border-b border-[#E5E0D8]">
        <div className="container-custom max-w-5xl">
          <nav aria-label="مسیر صفحه" className="flex flex-wrap items-center gap-2 text-xs text-[#6B6D67] mb-6">
            <button type="button" onClick={onNavigateHome} className="hover:text-[#344A42] cursor-pointer">
              صفحه اصلی
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => onSelectCity('hub')}
              className="hover:text-[#344A42] cursor-pointer"
            >
              مراکز و شهرهای ایران
            </button>
            <span>/</span>
            <span className="text-[#344A42] font-semibold">زوج‌درمانی در {cityData.cityName}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold text-[#3D5E4E] mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>پوشش تخصصی زوج‌درمانی در {cityData.cityName} و استان {cityData.province}</span>
              </p>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] leading-tight mb-4">
                {cityData.h1}
              </h1>

              <p className="text-xs sm:text-base text-[#555650] leading-relaxed mb-6">
                {cityData.metaDescription}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#344A42]">
                <div className="flex items-center gap-1.5 bg-[#EDF2EE] px-3 py-1.5 rounded-lg border border-[#D3E0D7]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>پروانه مسئول فنی ۱۴۱۴۰۸۳</span>
                </div>

                <div className="flex items-center gap-1.5 bg-[#F4F1EC] px-3 py-1.5 rounded-lg border border-[#E5E0D8]">
                  <Globe className="w-4 h-4 text-[#3D5E4E]" />
                  <span>مشاوره آنلاین تصویری امن</span>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 bg-[#344A42] text-[#FCFBF8] p-6 rounded-2xl space-y-4">
              <div className="border-b border-[#8FAE9B]/20 pb-3">
                <span className="text-[11px] text-[#DCE4DE] font-semibold block mb-1">
                  پذیرش {cityData.cityName}
                </span>
                <h2 className="text-base font-extrabold">رزرو مشاوره زوج‌درمانی</h2>
              </div>

              <button
                type="button"
                onClick={onNavigateContact}
                className="w-full py-3 bg-[#FCFBF8] hover:bg-[#F4F1EC] text-[#344A42] rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>هماهنگی نوبت و پذیرش</span>
              </button>

              <a
                href="tel:09199087264"
                className="w-full py-3 bg-[#273932] hover:bg-[#1F2E28] text-[#FCFBF8] rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-[#8FAE9B]/25"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />
                <span>۰۹۱۹ ۹۰۸ ۷۲۶۴</span>
              </a>

              <p className="text-[11px] text-[#DCE4DE] leading-relaxed">
                {cityData.populationNote}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom max-w-5xl py-10 space-y-10">
        <div className="bg-[#FCFBF8] p-6 sm:p-10 rounded-2xl border border-[#E5E0D8] space-y-6">
          <span className="text-xs font-semibold text-[#3D5E4E] block">
            راهنمای بالینی و ویژگی‌های مشاوره برای ساکنین {cityData.cityName}
          </span>

          <p className="text-sm sm:text-base text-[#292D2A] leading-[1.9] text-justify">
            {cityData.introText}
          </p>

          <div className="pt-6 border-t border-[#E5E0D8]">
            <h2 className="text-base font-extrabold text-[#292D2A] mb-4">
              ویژگی‌های جلسات زوج‌درمانی برای استان {cityData.province}:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cityData.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F4F1EC] p-4 rounded-xl border border-[#E5E0D8]">
                  <CheckCircle2 className="w-5 h-5 text-[#3D5E4E] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#292D2A] font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E0D8]">
            <span className="text-xs font-bold text-[#292D2A] block mb-3">
              مناطق تحت پوشش مشاوره آنلاین و حضوری در {cityData.cityName}:
            </span>
            <p className="text-xs sm:text-sm text-[#555650] leading-relaxed">
              {cityData.neighborhoods.join(' · ')}
            </p>
          </div>
        </div>

        {/* Session Environment for this City */}
        <div className="bg-[#FCFBF8] p-6 sm:p-8 rounded-2xl border border-[#E5E0D8]">
          <h2 className="text-base sm:text-lg font-extrabold text-[#292D2A] mb-4">
            {cityData.slug === 'tehran'
              ? 'فضای جلسات حضوری و سالن انتظار کلینیک پیوند امن در تهران'
              : `فضای برگزاری جلسات آنلاین تصویری برای مراجعان ${cityData.cityName}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cityData.slug === 'tehran' ? (
              <>
                <ClinicSpaceFigure space="tehran-sunlit-mustard-room" aspectRatio="4/5" />
                <ClinicSpaceFigure space="waiting-lounge-doors" aspectRatio="4/5" />
              </>
            ) : (
              <>
                <ClinicSpaceFigure space="controlled-light-online-room" aspectRatio="4/5" />
                <ClinicSpaceFigure space="acoustic-leather-private-room" aspectRatio="4/5" />
              </>
            )}
          </div>
        </div>

        {/* Detailed Local Clinical Guide */}
        {cityData.detailedGuideHtml && (
          <article className="bg-[#FCFBF8] p-6 sm:p-10 rounded-2xl border border-[#E5E0D8]">
            <div
              className="article-rendered-content"
              dangerouslySetInnerHTML={{ __html: cityData.detailedGuideHtml }}
            />
          </article>
        )}

        {/* Local FAQs Section */}
        {cityData.faqs && cityData.faqs.length > 0 && (
          <div className="bg-[#FCFBF8] p-6 sm:p-10 rounded-2xl border border-[#E5E0D8] space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3D5E4E]">
              <HelpCircle className="w-4 h-4" />
              <span>پرسش‌های متداول مراجعین در {cityData.cityName}</span>
            </div>

            <div className="space-y-4">
              {cityData.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#F4F1EC] p-5 rounded-xl border border-[#E5E0D8] space-y-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#292D2A]">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555650] leading-[1.9]">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Clinical Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#292D2A]">
              <BookOpen className="w-5 h-5 text-[#344A42]" />
              <span>مقالات پیشنهادی برای زوجین {cityData.cityName}:</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((art) => (
                <a
                  key={art.slug}
                  href={`/articles/${art.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectArticle(art.slug);
                  }}
                  className="bg-[#FCFBF8] p-6 rounded-2xl border border-[#E5E0D8] hover:border-[#344A42] transition-colors cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#3D5E4E] block mb-2">
                      {art.category}
                    </span>
                    <h4 className="text-base font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors leading-snug mb-2">
                      {art.h1 || art.title}
                    </h4>
                    <p className="text-xs text-[#555650] line-clamp-2 leading-relaxed mb-4">
                      {art.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#344A42]">
                    <span>مطالعه مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Other Major Iranian Cities Directory */}
        <div className="bg-[#344A42] text-[#FCFBF8] p-6 sm:p-8 rounded-2xl space-y-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#DCE4DE] border-b border-[#8FAE9B]/20 pb-3">
            <Globe className="w-4 h-4" />
            <span>سایر شهرهای تحت پوشش زوج‌درمانی آنلاین:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CITIES_META.map((city) => (
              <a
                key={city.slug}
                href={`/cities/${city.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectCity(city.slug);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer inline-flex items-center gap-1.5 ${
                  city.slug === cityData.slug
                    ? 'bg-[#FCFBF8] text-[#344A42]'
                    : 'bg-[#273932] hover:bg-[#1F2E28] text-[#FCFBF8] border border-[#8FAE9B]/20'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>زوج‌درمانی در {city.cityName}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
