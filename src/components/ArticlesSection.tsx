import React, { useState, useMemo } from 'react';
import { articlesMeta } from '../data/articlesMeta';
import { Search, ArrowLeft } from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle: (slug: string) => void;
  onNavigateArticles?: () => void;
  limit?: number;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onSelectArticle,
  onNavigateArticles,
  limit = 6,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articlesMeta.map((a) => a.category)));
    return ['همه', ...cats.slice(0, 5)];
  }, []);

  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return articlesMeta.filter((article) => {
      const matchCat = selectedCategory === 'همه' || article.category === selectedCategory;
      const matchQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.h1.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = !searchQuery && selectedCategory === 'همه' ? filteredArticles[0] : null;
  const gridArticles = featuredArticle
    ? filteredArticles.slice(1, limit)
    : filteredArticles.slice(0, limit);

  return (
    <section id="articles" className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#3D5E4E] mb-2">
              دانشنامه علمی روابط و زوج‌درمانی
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292D2A] leading-snug mb-3">
              مقالات و راهنماهای تخصصی رابطه
            </h2>
            <p className="text-sm sm:text-base text-[#555650] leading-relaxed">
              مطالب تخصصی برای درک ریشه‌های تعارض، ترمیم اعتماد پس از خیانت و شناخت سبک‌های دلبستگی.
            </p>
          </div>

          {onNavigateArticles && (
            <button
              type="button"
              onClick={onNavigateArticles}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42] hover:text-[#273932] border-b border-[#344A42]/30 pb-1 self-start md:self-auto cursor-pointer whitespace-nowrap"
            >
              <span>آرشیو کامل ({articlesMeta.length} مقاله)</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#344A42] text-[#FCFBF8] border-[#344A42]'
                      : 'bg-[#F4F1EC] text-[#292D2A] border-[#E5E0D8] hover:border-[#8FAE9B]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#6E6E68] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در موضوعات مقالات..."
              aria-label="جستجو در مقالات"
              className="w-full pr-10 pl-4 py-2.5 rounded-lg bg-[#F4F1EC] border border-[#E5E0D8] focus:border-[#344A42] focus:outline-none text-xs sm:text-sm text-[#292D2A] placeholder:text-[#6E6E68]"
            />
          </div>
        </div>

        {/* Featured Editorial Lead Story */}
        {featuredArticle && (
          <a
            href={`/articles/${featuredArticle.slug}`}
            onClick={(e) => {
              e.preventDefault();
              onSelectArticle(featuredArticle.slug);
            }}
            className="group block bg-[#F4F1EC] border border-[#CFC7BA] hover:border-[#344A42] rounded-2xl p-6 sm:p-9 mb-8 transition-colors"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#3D5E4E] mb-3">
              <span>مقاله مرجع</span>
              <span>·</span>
              <span>{featuredArticle.category}</span>
              <span>·</span>
              <span>زمان مطالعه: {featuredArticle.readTime}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#292D2A] group-hover:text-[#344A42] transition-colors leading-snug mb-3 max-w-3xl">
              {featuredArticle.h1 || featuredArticle.title}
            </h3>

            <p className="text-sm sm:text-base text-[#555650] leading-relaxed max-w-3xl mb-5">
              {featuredArticle.description}
            </p>

            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#344A42]">
              <span>مطالعه راهنمای کامل</span>
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </span>
          </a>
        )}

        {/* Curated Article Grid */}
        {gridArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridArticles.map((article) => (
              <a
                key={article.slug}
                href={`/articles/${article.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectArticle(article.slug);
                }}
                className="group bg-[#FCFBF8] border border-[#E5E0D8] hover:border-[#8FAE9B] rounded-xl p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-[#6E6E68] mb-3">
                    <span>{article.category}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#292D2A] group-hover:text-[#344A42] transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555650] leading-relaxed mb-5 line-clamp-3">
                    {article.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-semibold text-[#344A42]">
                  <span>خواندن مقاله</span>
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="bg-[#F4F1EC] border border-[#E5E0D8] rounded-xl p-8 text-center text-sm text-[#555650]">
            مقاله‌ای با این عبارت پیدا نشد. لطفاً عبارت دیگری را جستجو کنید.
          </div>
        )}
      </div>
    </section>
  );
};
