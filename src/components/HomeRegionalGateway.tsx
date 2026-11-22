import React from 'react';
import { CITIES_META } from '../data/citiesMeta';
import { COUNTRIES_META } from '../data/countriesMeta';
import { MapPin, Globe, ArrowLeft } from 'lucide-react';

interface HomeRegionalGatewayProps {
  onSelectCity: (citySlug: string) => void;
  onSelectCountry: (countrySlug: string) => void;
  onNavigateCities: () => void;
  onNavigateCountries: () => void;
  onNavigateBestTherapist: () => void;
  onSelectService?: (slug: string) => void;
}

export const HomeRegionalGateway: React.FC<HomeRegionalGatewayProps> = ({
  onSelectCity,
  onSelectCountry,
  onNavigateCities,
  onNavigateCountries,
  onNavigateBestTherapist,
  onSelectService,
}) => {
  return (
    <section id="regions" className="py-16 sm:py-24 bg-[#F4F1EC] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              دسترسی حضوری و بین‌المللی
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              جلسات حضوری در تهران و مشاوره آنلاین برای سراسر ایران و جهان
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              علاوه بر کلینیک حضوری پیوند امن در منطقه ۲ تهران، امکان برگزاری جلسات آنلاین فارسی
              متناسب با افق زمانی شهرهای ایران و کشورهای مختلف فراهم است.
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateBestTherapist}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap"
          >
            <span>معیارهای انتخاب زوج‌درمانگر خوب</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Iran Cities */}
          <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E5E0D8]">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-5 h-5 text-[#344A42]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#292D2A]">
                    مراکز حضوری تهران و کلان‌شهرهای ایران
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onNavigateCities}
                  className="text-xs font-semibold text-[#344A42] hover:underline cursor-pointer"
                >
                  فهرست شهرها
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CITIES_META.slice(0, 9).map((city) => (
                  <a
                    key={city.slug}
                    href={`/cities/${city.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCity(city.slug);
                    }}
                    className="px-3.5 py-2.5 rounded-lg bg-[#F4F1EC] hover:bg-[#EDF2EE] border border-[#E5E0D8] hover:border-[#8FAE9B] text-xs sm:text-sm font-semibold text-[#292D2A] transition-colors text-right"
                  >
                    {city.cityName}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* International Diaspora */}
          <div className="bg-[#FCFBF8] border border-[#E5E0D8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E5E0D8]">
                <div className="flex items-center gap-2.5">
                  <Globe className="w-5 h-5 text-[#3D5E4E]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#292D2A]">
                    ایرانیان مقیم خارج از کشور
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onNavigateCountries}
                  className="text-xs font-semibold text-[#344A42] hover:underline cursor-pointer"
                >
                  همه کشورها
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {COUNTRIES_META.map((country) => (
                  <a
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCountry(country.slug);
                    }}
                    className="px-3 py-2.5 rounded-lg bg-[#F4F1EC] hover:bg-[#EDF2EE] border border-[#E5E0D8] hover:border-[#8FAE9B] text-xs sm:text-sm font-semibold text-[#292D2A] transition-colors text-right"
                  >
                    {country.countryNameFa}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#555650]">
                تطبیق کامل با مناطق زمانی آمریکا، اروپا، کانادا و استرالیا
              </span>
              <a
                href="/services/online-counseling"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSelectService) {
                    onSelectService('online-counseling');
                  } else {
                    onNavigateCountries();
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#344A42] hover:underline"
              >
                <span>شرایط جلسات بین‌المللی</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
