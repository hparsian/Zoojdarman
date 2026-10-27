import React, { useState, useEffect } from 'react';
import { articles } from '../data/articles';
import { Article } from '../types';
import {
  ArrowRight,
  Search,
  BookOpen,
  Clock,
  Calendar,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

interface ArticlesArchiveViewProps {
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigateTools: () => void;
}

export const ArticlesArchiveView: React.FC<ArticlesArchiveViewProps> = ({
  onBack,
  onSelectArticle,
  onNavigateTools,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Extract distinct categories
  const categories = ['all', ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === 'all' || a.category === selectedCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40">
        <div className="container-custom h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به صفحه اصلی</span>
          </a>

          <div className="flex items-center text-lg font-black text-[#44386B]" dir="ltr">
            <span>Z</span>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#8FAF9B]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 32 29" className="inline-block mx-0.5 fill-[#E8A58D]">
              <path d="M16 29 C16 29 0 18.5 0 8.8 C0 3.5 4 0 8.6 0 C11.8 0 14.4 1.8 16 4.6 C17.6 1.8 20.2 0 23.4 0 C28 0 32 3.5 32 8.8 C32 18.5 16 29 16 29 Z" />
            </svg>
            <span>jdarman.ir</span>
          </div>
        </div>
      </div>

      <div className="container-custom pt-8 sm:pt-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">
            صفحه اصلی
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">بانک مقالات تخصصی</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block bg-[#f2eff8] text-[#6D5AA8] text-xs font-black px-4 py-1.5 rounded-full mb-3 border border-[#6D5AA8]/20">
            ۴۲ مقاله پژوهشی و راهنمای بالینی
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-[#44386B] mb-3">
            دانشنامه تخصصی روابط عاطفی و ازدواج
          </h1>
          <p className="text-xs sm:text-base text-[#6F6B78] leading-relaxed">
            مجموعه کامل مقالات علمی با راهکارهای کاربردی برای حل تعارضات زناشویی، بازسازی اعتماد پس از خیانت و احیای صمیمیت.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative mb-5">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="جستجو در عنوان یا متن مقالات (مثال: خیانت، خشم، دلبستگی، طلاق...)"
              className="w-full px-5 py-4 pr-12 bg-white border border-[#E5E0EA] rounded-2xl text-xs sm:text-sm font-medium text-[#292733] focus:border-[#6D5AA8] focus:outline-none shadow-xs"
            />
            <Search className="w-5 h-5 text-[#8e8a96] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#6D5AA8] text-white shadow-sm'
                    : 'bg-white text-[#6F6B78] hover:bg-[#f2eff8] border border-[#E5E0EA]'
                }`}
              >
                {cat === 'all' ? 'همه مقالات' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Count */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#6F6B78]">
          <span>نمایش {filteredArticles.length} مقاله تخصصی</span>
          {searchTerm && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-[#6D5AA8] font-bold hover:underline"
            >
              پاک کردن فیلترها
            </button>
          )}
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredArticles.map((art) => (
            <article
              key={art.slug}
              onClick={() => onSelectArticle(art.slug)}
              className="bg-white rounded-3xl p-6 border border-[#E5E0EA] hover:border-[#6D5AA8] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-black text-[#6D5AA8] bg-[#f2eff8] px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#8e8a96]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h2 className="text-base font-black text-[#292733] group-hover:text-[#6D5AA8] transition-colors leading-snug mb-3">
                  <a
                    href={`/articles/${art.slug}`}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSelectArticle(art.slug); }}
                    className="hover:text-[#6D5AA8]"
                  >
                    {art.title}
                  </a>
                </h2>

                <p className="text-xs text-[#6F6B78] leading-relaxed line-clamp-3 mb-4 text-justify">
                  {art.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0EA] flex items-center justify-between text-xs font-bold text-[#6D5AA8]">
                <span>مطالعه مقاله کامل</span>
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
