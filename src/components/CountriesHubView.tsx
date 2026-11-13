import React, { useState } from 'react';
import { COUNTRIES_DATA, CountrySEOData } from '../data/countriesData';
import { Globe, Search, Sparkles, ChevronLeft, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface CountriesHubViewProps {
  onNavigateHome: () => void;
  onSelectCountry: (slug: string) => void;
}

export const CountriesHubView: React.FC<CountriesHubViewProps> = ({
  onNavigateHome,
  onSelectCountry,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCountries = COUNTRIES_DATA.filter((country) => {
    const q = searchQuery.trim().toLowerCase();
    return (
      q === '' ||
      country.countryNameFa.toLowerCase().includes(q) ||
      country.countryName.toLowerCase().includes(q) ||
      country.majorCities.some((c) => c.toLowerCase().includes(q))
    );
  });

  return (
    <div className="bg-[#FCFAF8] min-h-screen pb-20">
      {/* Hero Bar */}
      <div className="bg-[#241A35] text-white py-14 lg:py-20 relative overflow-hidden border-b border-[#C5A059]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#C5A059] font-bold mb-4">
            <button onClick={onNavigateHome} className="hover:underline cursor-pointer">
              صفحه اصلی
            </button>
            <span>/</span>
            <span className="text-white">کشورها و ایرانیان خارج از کشور</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3E2F5B] text-[#C5A059] text-xs font-black mb-3 border border-[#C5A059]/30">
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <span>پایگاه بین‌المللی مشاوره آنلاین زوج درمانی برای ایرانیان جهان</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                مشاوره آنلاین زوج درمانی در کشورهای مختلف جهان
              </h1>
              <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-2xl leading-relaxed font-medium">
                انتخاب کشور محل سکونت جهت دریافت خدمات تخصصی مشاوره آنلاین فارسی‌زبان، درمان خیانت، طلاق عاطفی و بهبود صمیمیت زناشویی با مهناز خوینی.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container-custom py-12 space-y-10">
        {/* Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E8DFD5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-black text-[#241A35]">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>کشور یا شهر محل سکونت خود را جستجو کنید:</span>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی کشور (مثلاً کانادا، آلمان، دبی...)"
              className="w-full pl-4 pr-10 py-2.5 bg-[#FAF8F5] border border-[#E8DFD5] rounded-2xl text-xs font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none transition-all"
            />
            <Search className="w-4 h-4 text-[#A67C2E] absolute right-3.5 top-3" />
          </div>
        </div>

        {/* Countries Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country: CountrySEOData) => (
            <div
              key={country.id}
              onClick={() => onSelectCountry(country.slug)}
              className="bg-white rounded-3xl p-6 border border-[#E8DFD5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#FAF5EB] text-[#241A35] font-black text-xs px-3.5 py-1 rounded-full border border-[#C5A059]/30 flex items-center gap-1.5">
                    <span className="text-base">{country.flagEmoji}</span>
                    <span>{country.countryNameFa}</span>
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8FAF9B]" />
                </div>

                <h3 className="text-lg font-black text-[#241A35] group-hover:text-[#3E2F5B] leading-snug mb-2 transition-colors">
                  زوج درمانی آنلاین در {country.countryNameFa}
                </h3>

                <p className="text-xs text-[#5E5868] line-clamp-3 leading-relaxed mb-4">
                  {country.metaDescription}
                </p>

                {/* Cities tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {country.majorCities.slice(0, 3).map((city, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAF8F5] text-[#7A7382] text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-[#E8DFD5]"
                    >
                      {city}
                    </span>
                  ))}
                  {country.majorCities.length > 3 && (
                    <span className="text-[10px] font-bold text-[#A67C2E]">
                      +{country.majorCities.length - 3} شهر دیگر
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2] flex items-center justify-between text-xs font-black text-[#3E2F5B]">
                <span>ورود به صفحه اختصاصی {country.countryNameFa}</span>
                <ChevronLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <StandaloneSeoGuide routeKey="countries" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
