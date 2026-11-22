import React, { useState, useEffect } from 'react';
import { articlesMeta } from '../data/articlesMeta';
import { ProfessionalCredentialsSummaryCard } from './ProfessionalCredentialsSummaryCard';
import { StandaloneSeoGuide } from './StandaloneSeoGuide';
import { InnerPageTopBar } from './InnerPageTopBar';
import { Search, ChevronLeft } from 'lucide-react';

interface ArticlesArchiveViewProps {
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigateTools: () => void;
  onNavigateContact?: () => void;
}

export const ArticlesArchiveView: React.FC<ArticlesArchiveViewProps> = ({
  onBack,
  onSelectArticle,
  onNavigateTools,
  onNavigateContact,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = ['all', ...Array.from(new Set(articlesMeta.map((a) => a.category)))];

  const filteredArticles = articlesMeta.filter((a) => {
    const matchesCategory = selectedCategory === 'all' || a.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.h1.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24">
      <InnerPageTopBar
        onBack={onBack}
        backLabel="صفحه اصلی"
        onNavigateTools={onNavigateTools}
        onNavigateContact={onNavigateContact}
        maxWidthClass="max-w-6xl"
      />

      <div className="container-custom max-w-6xl pt-8 sm:pt-12">
        <nav className="flex items-center gap-2 text-xs text-[#6E6E68] mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#344A42]"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">بانک مقالات تخصصی</span>
        </nav>

        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
            {articlesMeta.length} مقاله پژوهشی و راهنمای بالینی
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292D2A] mb-3 leading-snug">
            دانشنامه تخصصی روابط عاطفی و ازدواج
          </h1>
          <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
            مجموعه کامل راهنماهای علمی برای حل تعارضات زناشویی، بازسازی اعتماد پس از خیانت و شناخت سبک‌های دلبستگی.
          </p>
        </div>

        <ProfessionalCredentialsSummaryCard />

        {/* Search & Category Filter */}
        <div className="mb-10 space-y-4">
          <div className="relative max-w-xl">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو در عنوان یا موضوع مقالات (مثال: خیانت، خشم، دلبستگی، طلاق...)"
              aria-label="جستجو در بانک مقالات"
              className="w-full px-5 py-3.5 pr-11 bg-[#FCFBF8] border border-[#CFC7BA] rounded-xl text-xs sm:text-sm text-[#292D2A] focus:border-[#344A42] focus:outline-none placeholder:text-[#6E6E68]"
            />
            <Search className="w-4 h-4 text-[#6E6E68] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                    : 'bg-[#FCFBF8] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                }`}
              >
                {cat === 'all' ? 'همه مقالات' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6 text-xs text-[#555650]">
          <span>نمایش {filteredArticles.length} مقاله تخصصی</span>
          {(searchTerm || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-[#344A42] font-semibold hover:underline cursor-pointer"
            >
              پاک کردن فیلترها
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {filteredArticles.map((art) => (
            <a
              key={art.slug}
              href={`/articles/${art.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectArticle(art.slug);
              }}
              className="bg-[#FCFBF8] rounded-xl p-6 border border-[#E5E0D8] hover:border-[#8FAE9B] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#6E6E68] mb-3">
                  <span>{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h2 className="text-base font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors leading-snug mb-2.5">
                  {art.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#555650] leading-relaxed line-clamp-3 mb-4">
                  {art.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#344A42]">
                <span>مطالعه مقاله کامل</span>
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        <StandaloneSeoGuide routeKey="articles" maxWidthClass="max-w-full" />
      </div>
    </div>
  );
};
