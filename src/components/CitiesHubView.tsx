import React, { useState } from 'react';
import { CITIES_DATA, CitySEOData } from '../data/citiesData';
import { MapPin, Search, Sparkles, ChevronLeft, Globe, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

interface CitiesHubViewProps {
  onNavigateHome: () => void;
  onSelectCity: (slug: string) => void;
}

export const CitiesHubView: React.FC<CitiesHubViewProps> = ({
  onNavigateHome,
  onSelectCity,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCities = CITIES_DATA.filter((city) => {
    const q = searchQuery.trim().toLowerCase();
    return (
      q === '' ||
      city.cityName.toLowerCase().includes(q) ||
      city.province.toLowerCase().includes(q) ||
      city.neighborhoods.some((n) => n.toLowerCase().includes(q))
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
            <span className="text-white">مراکز و شهرهای ایران</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3E2F5B] text-[#C5A059] text-xs font-black mb-3 border border-[#C5A059]/30">
                <Globe className="w-4 h-4 text-[#C5A059]" />
                <span>پایگاه سراسری پوشش خدمات زناشویی در ایران</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                مرکز زوج درمانی آنلاین در کلان‌شهرهای ایران و خارج از کشور
              </h1>
              <p className="text-xs sm:text-sm text-white/80 mt-2 max-w-2xl leading-relaxed font-medium">
                انتخاب شهر محل سکونت جهت دریافت خدمات تخصصی مشاوره آنلاین، درمان خیانت، طلاق عاطفی و ارزیابی زناشویی با مهناز خوینی.
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
            <span>شهر یا منطقه مورد نظر خود را جستجو کنید:</span>
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی نام شهر (مثلاً مشهد، کرج، شیراز...)"
              className="w-full pl-4 pr-10 py-2.5 bg-[#FAF8F5] border border-[#E8DFD5] rounded-2xl text-xs font-medium text-[#241A35] focus:bg-white focus:border-[#C5A059] focus:outline-none transition-all"
            />
            <Search className="w-4 h-4 text-[#A67C2E] absolute right-3.5 top-3" />
          </div>
        </div>

        {/* Cities Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city: CitySEOData) => (
            <div
              key={city.id}
              onClick={() => onSelectCity(city.slug)}
              className="bg-white rounded-3xl p-6 border border-[#E8DFD5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#FAF5EB] text-[#241A35] font-black text-xs px-3 py-1 rounded-full border border-[#C5A059]/30 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>استان {city.province}</span>
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8FAF9B]" />
                </div>

                <h3 className="text-lg font-black text-[#241A35] group-hover:text-[#3E2F5B] leading-snug mb-2 transition-colors">
                  زوج درمانی در {city.cityName}
                </h3>

                <p className="text-xs text-[#5E5868] line-clamp-3 leading-relaxed mb-4">
                  {city.metaDescription}
                </p>

                {/* Neighborhoods tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {city.neighborhoods.slice(0, 4).map((hood, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FAF8F5] text-[#7A7382] text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-[#E8DFD5]"
                    >
                      {hood}
                    </span>
                  ))}
                  {city.neighborhoods.length > 4 && (
                    <span className="text-[10px] font-bold text-[#A67C2E]">
                      +{city.neighborhoods.length - 4} منطقه دیگر
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2] flex items-center justify-between text-xs font-black text-[#3E2F5B]">
                <span>ورود به صفحه اختصاصی {city.cityName}</span>
                <ChevronLeft className="w-4 h-4 text-[#C5A059] group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
