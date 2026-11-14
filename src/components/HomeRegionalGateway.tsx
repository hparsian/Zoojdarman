import React, { useState, useMemo } from 'react';
import { MapPin, Globe, ArrowLeft, Search, Video } from 'lucide-react';
import { CITIES_DATA } from '../data/citiesData';
import { COUNTRIES_DATA } from '../data/countriesData';

interface HomeRegionalGatewayProps {
  onSelectCity: (slug: string) => void;
  onSelectCountry: (slug: string) => void;
  onNavigateCities: () => void;
  onNavigateCountries: () => void;
  onNavigateBestTherapist: () => void;
}

export const HomeRegionalGateway: React.FC<HomeRegionalGatewayProps> = ({
  onSelectCity,
  onSelectCountry,
  onNavigateCities,
  onNavigateCountries,
  onNavigateBestTherapist,
}) => {
  const [regionTab, setRegionTab] = useState<'all' | 'iran' | 'international'>('all');
  const [query, setQuery] = useState('');

  const iranCities = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CITIES_DATA.filter((c) => c.id !== 'overseas').filter(
      (c) =>
        !q ||
        c.cityName.toLowerCase().includes(q) ||
        c.province.toLowerCase().includes(q) ||
        c.neighborhoods.some((n) => n.toLowerCase().includes(q))
    );
  }, [query]);

  const internationalCountries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COUNTRIES_DATA.filter(
      (co) =>
        !q ||
        co.countryNameFa.toLowerCase().includes(q) ||
        co.countryName.toLowerCase().includes(q) ||
        co.majorCities.some((m) => m.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section
      id="regional-coverage"
      className="py-16 lg:py-24 bg-white border-b border-[#E8E2D8]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              پوشش حضوری تهران و دسترسی آنلاین بدون مرز
            </span>
            <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              زوج‌درمانی حضوری در تهران و جلسات آنلاین در سراسر ایران و جهان
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-3 leading-relaxed">
              مراجعان ساکن تهران می‌توانند به‌صورت حضوری به کلینیک پیوند امن (پونک) مراجعه کنند و زوج‌های ساکن کلان‌شهرهای ایران و ایرانیان مقیم خارج از کشور با همان کیفیت بالینی از طریق جلسات تصویری امن مشاوره دریافت می‌نمایند.
            </p>
          </div>

          <a
            href="/best-couples-therapist-tehran"
            onClick={(e) => {
              e.preventDefault();
              onNavigateBestTherapist();
            }}
            className="inline-flex items-center gap-2 text-xs font-black text-[#241A35] hover:text-[#3E2F5B] py-2.5 px-5 rounded-lg border border-[#E8E2D8] hover:border-[#C5A059] bg-[#FCFAF8] transition-colors cursor-pointer shrink-0 self-start lg:self-end"
          >
            <span>معیارهای انتخاب بهترین زوج درمانگر تهران و آنلاین</span>
            <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
          </a>
        </div>

        {/* Interactive Filter & Region Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E2D8]">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="فیلتر مناطق تحت پوشش">
            <button
              type="button"
              role="tab"
              aria-selected={regionTab === 'all'}
              onClick={() => setRegionTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition-colors cursor-pointer border ${
                regionTab === 'all'
                  ? 'bg-[#241A35] text-white border-[#241A35]'
                  : 'bg-[#FCFAF8] text-[#5E5868] border-[#E8E2D8] hover:text-[#241A35]'
              }`}
            >
              همه مراکز ایران و خارج کشور
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={regionTab === 'iran'}
              onClick={() => setRegionTab('iran')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition-colors cursor-pointer border ${
                regionTab === 'iran'
                  ? 'bg-[#241A35] text-white border-[#241A35]'
                  : 'bg-[#FCFAF8] text-[#5E5868] border-[#E8E2D8] hover:text-[#241A35]'
              }`}
            >
              تهران و کلان‌شهرهای ایران
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={regionTab === 'international'}
              onClick={() => setRegionTab('international')}
              className={`px-4 py-2 rounded-lg text-xs font-black transition-colors cursor-pointer border ${
                regionTab === 'international'
                  ? 'bg-[#241A35] text-white border-[#241A35]'
                  : 'bg-[#FCFAF8] text-[#5E5868] border-[#E8E2D8] hover:text-[#241A35]'
              }`}
            >
              ایرانیان خارج از کشور
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجوی شهر یا کشور (مثال: مشهد، کانادا)..."
              aria-label="جستجوی شهر یا کشور"
              className="w-full pl-4 pr-10 py-2.5 bg-[#FCFAF8] border border-[#E8E2D8] rounded-lg text-xs font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none transition-colors"
            />
            <Search className="w-4 h-4 text-[#9E7D36] absolute right-3 top-2.5 pointer-events-none" />
          </div>
        </div>

        {/* Directory Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Iran Cities Panel */}
          {(regionTab === 'all' || regionTab === 'iran') && (
            <div className={regionTab === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-black text-[#241A35] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#9E7D36]" />
                  <span>مراکز پوشش حضوری و آنلاین در ایران</span>
                </h3>
                <a
                  href="/cities"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateCities();
                  }}
                  className="text-xs font-bold text-[#3E2F5B] hover:text-[#9E7D36] transition-colors"
                >
                  صفحه کامل شهرها
                </a>
              </div>

              {iranCities.length > 0 ? (
                <div
                  className={`grid gap-3 ${
                    regionTab === 'all'
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {iranCities.map((city) => (
                    <a
                      key={city.id}
                      href={`/cities/${city.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCity(city.slug);
                      }}
                      className="group p-4 rounded-xl bg-[#FCFAF8] hover:bg-white border border-[#E8E2D8] hover:border-[#C5A059] transition-colors flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-black text-[#241A35] group-hover:text-[#3E2F5B]">
                            زوج‌درمانی {city.cityName}
                          </span>
                          <ArrowLeft className="w-3.5 h-3.5 text-[#B5AFC0] group-hover:text-[#9E7D36] group-hover:-translate-x-0.5 transition-all shrink-0" />
                        </div>
                        <span className="text-[11px] text-[#5E5868] block truncate">
                          {city.id === 'tehran'
                            ? 'حضوری پونک + آنلاین کل مناطق'
                            : `استان ${city.province} · آنلاین اختصاصی`}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#5E5868] py-6">شهری با این عبارت یافت نشد.</p>
              )}
            </div>
          )}

          {/* International Diaspora Panel */}
          {(regionTab === 'all' || regionTab === 'international') && (
            <div className={regionTab === 'all' ? 'lg:col-span-6' : 'lg:col-span-12'}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-black text-[#241A35] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#4E7A66]" />
                  <span>مشاوره آنلاین ایرانیان خارج از کشور</span>
                </h3>
                <a
                  href="/countries"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateCountries();
                  }}
                  className="text-xs font-bold text-[#3E2F5B] hover:text-[#9E7D36] transition-colors"
                >
                  صفحه کامل کشورها
                </a>
              </div>

              {internationalCountries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {internationalCountries.map((country) => (
                    <a
                      key={country.id}
                      href={`/countries/${country.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCountry(country.slug);
                      }}
                      className="group p-4 rounded-xl bg-[#FCFAF8] hover:bg-white border border-[#E8E2D8] hover:border-[#4E7A66] transition-colors flex flex-col justify-between cursor-pointer"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-black text-[#241A35] group-hover:text-[#3E2F5B]">
                            {country.countryNameFa}
                          </span>
                          <ArrowLeft className="w-3.5 h-3.5 text-[#B5AFC0] group-hover:text-[#4E7A66] group-hover:-translate-x-0.5 transition-all shrink-0" />
                        </div>
                        <span className="text-[11px] text-[#5E5868] block truncate">
                          {country.majorCities.slice(0, 2).join('، ')}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-[#5E5868] py-6">کشوری با این عبارت یافت نشد.</p>
              )}
            </div>
          )}
        </div>

        {/* Bottom Format Clarifier */}
        <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5E5868]">
          <div className="flex items-center gap-2.5">
            <Video className="w-4 h-4 text-[#3E2F5B] shrink-0" />
            <span>
              تمامی جلسات آنلاین از طریق <strong>Google Meet</strong> یا <strong>واتساپ تصویری</strong> با هماهنگی دقیق ساعت محلی کشور شما و امکان پرداخت ریالی یا ارزی برگزار می‌شوند.
            </span>
          </div>
          <a
            href="/services/online-counseling"
            className="font-black text-[#3E2F5B] hover:text-[#9E7D36] whitespace-nowrap shrink-0 underline decoration-[#C5A059]/60 underline-offset-4"
          >
            شرایط جلسات آنلاین بین‌المللی
          </a>
        </div>
      </div>
    </section>
  );
};
