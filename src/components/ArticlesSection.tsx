import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import { BookOpen, Search, Clock, Calendar, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-20 bg-[#F2EFF8]" id="articles">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-black bg-[#fcf1ec] text-[#8e482f] px-4 py-1.5 rounded-full border border-[#E8A58D]/30 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>پایگاه دانش و مقالات علمی</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#44386B] mb-3">
            راهنمای تخصصی روابط عاطفی و زناشویی
          </h2>
          <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed">
            مجموعه بیش از ۴۰ مقاله جامع و کاربردی با رویکرد هیجان‌مدار، گاتمن و طرحواره‌درمانی برای درک و بهبود رابطه.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E5E0EA] shadow-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Categories Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#6D5AA8] text-white shadow-xs'
                    : 'bg-[#FAF8F5] text-[#6F6B78] hover:bg-[#f2eff8] hover:text-[#44386B] border border-[#E5E0EA]'
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
              className="w-full pl-4 pr-10 py-2.5 bg-[#FAF8F5] border border-[#E5E0EA] rounded-full text-xs font-medium text-[#292733] focus:bg-white focus:border-[#6D5AA8] focus:outline-none"
            />
            <Search className="w-4 h-4 text-[#8e8a96] absolute right-3.5 top-3" />
          </div>
        </div>

        {/* Articles Count */}
        <div className="text-xs text-[#6F6B78] font-bold mb-6 flex justify-between items-center">
          <span>نمایش {filteredArticles.length} مقاله تخصصی</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#6D5AA8] hover:underline cursor-pointer"
            >
              پاک کردن فیلتر جستجو
            </button>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {paginatedArticles.map((art: Article) => (
            <article
              key={art.slug}
              onClick={() => onSelectArticle(art.slug)}
              className="bg-white rounded-3xl p-6 border border-[#E5E0EA] hover:border-[#8b79c4] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <span className="inline-block bg-[#fcf1ec] text-[#8e482f] text-[11px] font-black px-3 py-1 rounded-full mb-3">
                  {art.category}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#292733] group-hover:text-[#6D5AA8] transition-colors leading-snug mb-3">
                  {art.h1 || art.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed line-clamp-3 mb-6">
                  {art.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0EA] flex items-center justify-between text-xs text-[#8e8a96]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{art.updatedAt}</span>
                  </span>
                </div>
                <span className="text-[#6D5AA8] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
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
              className="p-2.5 rounded-full bg-white border border-[#E5E0EA] disabled:opacity-40 hover:bg-[#f2eff8] text-[#44386B] cursor-pointer"
              aria-label="صفحه قبلی"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#6F6B78] px-3">
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-full bg-white border border-[#E5E0EA] disabled:opacity-40 hover:bg-[#f2eff8] text-[#44386B] cursor-pointer"
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
