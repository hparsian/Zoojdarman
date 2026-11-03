import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import { BookOpen, Search, Clock, Calendar, ArrowLeft, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Article } from '../types';

interface ArticlesSectionProps {
  onSelectArticle: (slug: string) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 9;

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach(a => {
      if (a.category) set.add(a.category);
    });
    return ['همه', ...Array.from(set)];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter(a => {
      const matchCategory = selectedCategory === 'همه' || a.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / pageSize) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredArticles.slice(start, start + pageSize);
  }, [filteredArticles, currentPage, pageSize]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] overflow-hidden" id="articles">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A67C2E] uppercase mb-3">
            <span className="w-6 h-px bg-[#C5A059]" />
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>پایگاه دانش بالینی و مقالات تخصصی</span>
            <span className="w-6 h-px bg-[#C5A059]" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-4 leading-tight">
            دانشنامه جامع روابط عاطفی و زوج‌درمانی
          </h2>

          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            مجموعه بیش از ۴۰ مقاله بالینی بر پایه رویکرد هیجان‌مدار (EFT)، نظریه گاتمن و طرحواره‌درمانی برای رمزگشایی و ترمیم پیوندهای آسیب‌دیده.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E8DFD5] shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Categories Buttons */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2A1E35] text-white shadow-sm border border-[#C5A059]/40'
                    : 'bg-[#FAF8F5] text-[#6F6B78] hover:text-[#2A1E35] hover:border-[#C5A059]/40 border border-[#E8DFD5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="جستجو در مقالات..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-4 pr-10 py-2.5 bg-[#FAF8F5] border border-[#E8DFD5] rounded-xl text-xs font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none transition-all"
            />
            <Search className="w-4 h-4 text-[#A67C2E] absolute right-3.5 top-3" />
          </div>
        </div>

        {/* Articles Count */}
        <div className="text-xs text-[#7A7382] font-bold mb-6 flex justify-between items-center px-1">
          <span>نمایش {filteredArticles.length} مقاله تخصصی</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#A67C2E] hover:underline cursor-pointer"
            >
              پاک کردن فیلتر جستجو
            </button>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedArticles.map((art: Article) => (
            <article
              key={art.slug}
              onClick={() => onSelectArticle(art.slug)}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="inline-block bg-[#FAF8F5] border border-[#E8DFD5] text-[#A67C2E] text-[11px] font-mono font-bold px-3 py-1 rounded-md">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#7A7382]">
                    <img
                      src="/images/mahnaz-khoini-thumb.webp"
                      alt="مهناز خوینی"
                      loading="lazy"
                      decoding="async"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full object-cover border border-[#C5A059]/40"
                    />
                    <span className="font-bold text-[#2A1E35]">مهناز خوینی</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-[#2A1E35] group-hover:text-[#44386B] transition-colors leading-snug mb-3">
                  <a
                    href={`/articles/${art.slug}`}
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSelectArticle(art.slug); }}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {art.h1 || art.title}
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed line-clamp-3 mb-6">
                  {art.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7A7382]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{art.readTime}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{art.updatedAt}</span>
                  </span>
                </div>
                <span className="text-[#A67C2E] font-bold group-hover:-translate-x-1 transition-transform flex items-center gap-1">
                  مطالعه
                  <ArrowLeft className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white border border-[#E8DFD5] disabled:opacity-40 hover:bg-[#FAF8F5] text-[#2A1E35] cursor-pointer shadow-xs transition-colors"
              aria-label="صفحه قبلی"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#7A7382] px-4 font-mono">
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white border border-[#E8DFD5] disabled:opacity-40 hover:bg-[#FAF8F5] text-[#2A1E35] cursor-pointer shadow-xs transition-colors"
              aria-label="صفحه بعدی"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
