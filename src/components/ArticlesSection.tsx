import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import {
  BookOpen,
  Search,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { Article } from '../types';

interface ArticlesSectionProps {
  onSelectArticle: (slug: string) => void;
  onNavigateArticles?: () => void;
  limit?: number;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onSelectArticle,
  onNavigateArticles,
  limit,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categoryFilters = [
    { key: 'همه', label: 'همه موضوعات' },
    { key: 'خیانت', label: 'خیانت و بازسازی اعتماد', matchKeys: ['خیانت', 'پیمان‌شکنی', 'اعتماد'] },
    { key: 'طلاق', label: 'طلاق عاطفی و جدایی', matchKeys: ['طلاق', 'جدایی', 'گاتمن'] },
    { key: 'تعارض', label: 'حل تعارض و صمیمیت', matchKeys: ['تعارض', 'خشم', 'ارتباط', 'ارتباطی'] },
    { key: 'دلبستگی', label: 'دلبستگی و روش EFT', matchKeys: ['دلبستگی', 'صمیمیت', 'EFT'] },
    { key: 'ازدواج', label: 'پیش از ازدواج', matchKeys: ['ازدواج', 'پیش از ازدواج', 'آمادگی'] },
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((a: Article) => {
      let matchCat = true;
      if (selectedCategory !== 'همه') {
        const filterObj = categoryFilters.find((f) => f.key === selectedCategory);
        if (filterObj && filterObj.matchKeys) {
          matchCat = filterObj.matchKeys.some(
            (k) => a.category.includes(k) || a.title.includes(k) || a.description.includes(k)
          );
        } else {
          matchCat = a.category.includes(selectedCategory);
        }
      }

      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const pageSize = limit || 9;
  const totalPages = Math.ceil(filteredArticles.length / pageSize) || 1;

  const displayArticles = useMemo(() => {
    if (limit && selectedCategory === 'همه' && searchQuery === '') {
      return filteredArticles.slice(0, limit);
    }
    const start = (currentPage - 1) * pageSize;
    return filteredArticles.slice(start, start + pageSize);
  }, [filteredArticles, currentPage, pageSize, limit, selectedCategory, searchQuery]);

  const handleCategoryChange = (catKey: string) => {
    setSelectedCategory(catKey);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section
      className="py-16 lg:py-24 bg-white border-b border-[#E8E2D8]"
      id="articles"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div className="max-w-2xl">
            <span className="text-[11px] font-extrabold text-[#9E7D36] block mb-2">
              دانشنامه علمی و مقالات کلینیکی زوج‌درمانی
            </span>
            <h2 className="balance-text text-2xl sm:text-4xl font-black text-[#241A35] leading-tight">
              بانک مقالات تخصصی روابط زناشویی و روان‌شناسی
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] mt-3 leading-relaxed">
              راهنمای کاربردی مبتنی بر شواهد بالینی برای مدیریت بحران خیانت، طلاق عاطفی، مهارت گفتگو و شناخت سبک دلبستگی.
            </p>
          </div>

          {onNavigateArticles && (
            <a
              href="/articles"
              onClick={(e) => {
                e.preventDefault();
                onNavigateArticles();
              }}
              className="inline-flex items-center gap-2 text-xs font-black text-[#241A35] hover:text-[#3E2F5B] py-2.5 px-5 rounded-lg border border-[#E8E2D8] hover:border-[#C5A059] bg-[#FCFAF8] transition-colors cursor-pointer shrink-0 self-start md:self-end"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#9E7D36]" />
              <span className="tabular-nums">آرشیو کامل مقالات ({articles.length})</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#9E7D36]" />
            </a>
          )}
        </div>

        {/* Clean Filter & Search Toolbar */}
        <div className="bg-[#FCFAF8] p-4 sm:p-5 rounded-2xl border border-[#E8E2D8] mb-10 space-y-3">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {categoryFilters.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 border ${
                    selectedCategory === cat.key
                      ? 'bg-[#241A35] text-white border-[#241A35]'
                      : 'bg-white text-[#5E5868] hover:text-[#241A35] border-[#E8E2D8]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                placeholder="جستجو در مقالات..."
                value={searchQuery}
                onChange={handleSearchChange}
                aria-label="جستجو در مقالات"
                className="w-full pl-4 pr-10 py-2.5 bg-white border border-[#E8E2D8] rounded-lg text-xs font-medium text-[#241A35] focus:border-[#C5A059] focus:outline-none transition-colors"
              />
              <Search className="w-4 h-4 text-[#9E7D36] absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#EAE4DA] text-xs text-[#5E5868]">
            <span className="tabular-nums">
              نتیجه فیلتر: <strong className="text-[#241A35]">{filteredArticles.length} مقاله</strong>
            </span>

            {(selectedCategory !== 'همه' || searchQuery !== '') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('همه');
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="text-xs text-[#9C381D] font-bold hover:underline cursor-pointer"
              >
                پاک‌سازی فیلترها
              </button>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        {displayArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {displayArticles.map((art: Article) => (
              <article
                key={art.slug}
                onClick={() => onSelectArticle(art.slug)}
                className="bg-[#FCFAF8] hover:bg-white rounded-2xl p-6 border border-[#E8E2D8] hover:border-[#C5A059] transition-colors flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Unboxed Typographic Metadata Line */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[#EFEAE0] text-[11px] font-bold text-[#5E5868]">
                    <span className="text-[#9E7D36] font-extrabold truncate">{art.category}</span>
                    <span className="tabular-nums shrink-0">{art.readTime} · {art.updatedAt}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-base sm:text-lg font-black text-[#241A35] group-hover:text-[#3E2F5B] transition-colors leading-snug mb-3">
                    <a
                      href={`/articles/${art.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onSelectArticle(art.slug);
                      }}
                    >
                      {art.h1 || art.title}
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#5E5868] leading-[1.85] line-clamp-3 mb-4">
                    {art.description}
                  </p>

                  {/* Single Inline Key Takeaway (No nested inner box) */}
                  {art.takeaways && art.takeaways.length > 0 && (
                    <div className="flex items-start gap-2 text-[11px] text-[#4E4858] pt-3 border-t border-dashed border-[#E8E2D8] mb-5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E7A66] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed">{art.takeaways[0]}</span>
                    </div>
                  )}
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-[#EFEAE0] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#5E5868]">نگارش مهناز خوینی</span>

                  <a
                    href={`/articles/${art.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSelectArticle(art.slug);
                    }}
                    className="text-[#3E2F5B] font-black group-hover:text-[#9E7D36] inline-flex items-center gap-1"
                  >
                    <span>مطالعه مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-[#FCFAF8] p-12 text-center rounded-2xl border border-[#E8E2D8] mb-10">
            <p className="text-sm font-bold text-[#5E5868]">
              مقاله‌ای متناسب با عبارت «{searchQuery || selectedCategory}» یافت نشد.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('همه');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#241A35] text-white text-xs font-black rounded-lg cursor-pointer"
            >
              نمایش تمامی مقالات
            </button>
          </div>
        )}

        {/* Archive CTA */}
        {limit && onNavigateArticles && (
          <div className="text-center mt-8">
            <a
              href="/articles"
              onClick={(e) => {
                e.preventDefault();
                onNavigateArticles();
              }}
              className="inline-flex items-center gap-2 bg-[#241A35] hover:bg-[#3E2F5B] text-white font-black text-xs px-7 py-3.5 rounded-xl border border-[#C5A059]/35 transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span className="tabular-nums">مشاهده همه مقالات تخصصی ({articles.length} عنوان)</span>
              <ChevronLeft className="w-4 h-4 text-[#C5A059]" />
            </a>
          </div>
        )}

        {/* Archive Pagination */}
        {!limit && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-lg bg-[#FCFAF8] border border-[#E8E2D8] disabled:opacity-40 hover:bg-white text-[#241A35] cursor-pointer transition-colors"
              aria-label="صفحه قبلی"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold text-[#5E5868] px-4 tabular-nums">
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-lg bg-[#FCFAF8] border border-[#E8E2D8] disabled:opacity-40 hover:bg-white text-[#241A35] cursor-pointer transition-colors"
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
