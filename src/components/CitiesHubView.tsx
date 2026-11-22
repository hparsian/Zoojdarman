import React, { useState, useEffect } from 'react';
import { CITIES_META, CityMeta } from '../data/citiesMeta';
import { MapPin, Search, ChevronLeft, ShieldCheck } from 'lucide-react';
import { InnerPageTopBar } from './InnerPageTopBar';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';

interface CitiesHubViewProps {
  onNavigateHome: () => void;
  onSelectCity: (slug: string) => void;
  onNavigateContact?: () => void;
}

export const CitiesHubView: React.FC<CitiesHubViewProps> = ({
  onNavigateHome,
  onSelectCity,
  onNavigateContact,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredCities = CITIES_META.filter((city) => {
    const q = searchQuery.trim().toLowerCase();
    return (
      q === '' ||
      city.cityName.toLowerCase().includes(q) ||
      city.province.toLowerCase().includes(q) ||
      city.metaDescription.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-20 text-[#292D2A]">
      <InnerPageTopBar
        onBack={onNavigateHome}
        backLabel="صفحه اصلی"
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-5xl"
      />

      {/* Hero Bar */}
      <div className="bg-[#FCFBF8] py-12 lg:py-16 border-b border-[#E5E0D8]">
        <div className="container-custom max-w-5xl">
          <nav aria-label="مسیر صفحه" className="flex items-center gap-2 text-xs text-[#6B6D67] mb-4">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#344A42] cursor-pointer"
            >
              صفحه اصلی
            </button>
            <span>/</span>
            <span className="text-[#344A42] font-semibold">مراکز و شهرهای ایران</span>
          </nav>

          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            پوشش سراسری خدمات زوج‌درمانی در ایران
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] tracking-tight">
            مرکز زوج‌درمانی حضوری تهران و آنلاین در شهرهای ایران
          </h1>
          <p className="text-xs sm:text-sm text-[#555650] mt-3 max-w-2xl leading-relaxed">
            انتخاب شهر محل سکونت جهت آشنایی با شرایط جلسات حضوری یا مشاوره تصویری آنلاین با مهناز خوینی (پروانه نظام ۱۴۱۴۰۸۳).
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="container-custom max-w-5xl py-10 space-y-8">
        {/* Search Bar */}
        <div className="bg-[#FCFBF8] p-4 sm:p-6 rounded-2xl border border-[#E5E0D8] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs font-bold text-[#292D2A]">
            شهر یا استان مورد نظر خود را جستجو کنید:
          </span>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجوی نام شهر (مثلاً مشهد، کرج، شیراز...)"
              aria-label="جستجوی نام شهر"
              className="w-full pl-4 pr-10 py-2.5 bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl text-xs font-medium text-[#292D2A] focus:bg-[#FCFBF8] focus:border-[#344A42] focus:outline-none"
            />
            <Search className="w-4 h-4 text-[#6B6D67] absolute right-3.5 top-3 pointer-events-none" />
          </div>
        </div>

        {/* Cities Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCities.map((city: CityMeta) => (
            <a
              key={city.slug}
              href={`/cities/${city.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectCity(city.slug);
              }}
              className="bg-[#FCFBF8] rounded-2xl p-6 border border-[#E5E0D8] hover:border-[#344A42] transition-colors flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#3D5E4E] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>استان {city.province}</span>
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8FAE9B]" />
                </div>

                <h2 className="text-lg font-extrabold text-[#292D2A] group-hover:text-[#344A42] leading-snug mb-2 transition-colors">
                  زوج‌درمانی در {city.cityName}
                </h2>

                <p className="text-xs text-[#555650] line-clamp-3 leading-relaxed mb-4">
                  {city.metaDescription}
                </p>

                <p className="text-[11px] font-medium text-[#6B6D67] mb-4">
                  {city.modeLabel}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#344A42]">
                <span>مشاهده راهنمای {city.cityName}</span>
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        <StandaloneSeoGuide routeKey="cities" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
