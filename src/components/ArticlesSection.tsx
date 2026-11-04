import React, { useState, useMemo } from 'react';
import { articles } from '../data/articles';
import {
  BookOpen,
  Search,
  Clock,
  Calendar,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Filter,
  ShieldCheck,
  CheckCircle2,
  Tag
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

  // Smart categories with emojis and normalized keys
  const categoryFilters = [
    { key: 'همه', label: 'همه موضوعات', badge: 'آرشیو جامع' },
    { key: 'خیانت', label: '💔 خیانت و بازسازی اعتماد', matchKeys: ['خیانت', 'پیمان‌شکنی', 'اعتماد'] },
    { key: 'طلاق', label: '🥀 طلاق عاطفی و جدایی', matchKeys: ['طلاق', 'جدایی', 'گاتمن'] },
    { key: 'تعارض', label: '💬 حل تعارض و صمیمیت', matchKeys: ['تعارض', 'خشم', 'ارتباط', 'ارتباطی'] },
    { key: 'دلبستگی', label: '🔗 سبک‌های دلبستگی و EFT', matchKeys: ['دلبستگی', 'صمیمیت', 'EFT'] },
    { key: 'ازدواج', label: '💍 پیش از ازدواج و انتخاب همسر', matchKeys: ['ازدواج', 'پیش از ازدواج', 'آمادگی'] },
  ];

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((a: Article) => {
      // Category matching
      let matchCat = true;
      if (selectedCategory !== 'همه') {
        const filterObj = categoryFilters.find(f => f.key === selectedCategory);
        if (filterObj && filterObj.matchKeys) {
          matchCat = filterObj.matchKeys.some(k =>
            a.category.includes(k) || a.title.includes(k) || a.description.includes(k)
          );
        } else {
          matchCat = a.category.includes(selectedCategory);
        }
      }

      // Search matching
      const matchSearch =
        searchQuery.trim() === '' ||
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase());

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
      className="relative py-20 lg:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFEA] to-[#FAF8F5] overflow-hidden"
      id="articles"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E2F5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#A67C2E] uppercase mb-3">
              <span className="w-6 h-px bg-[#C5A059]" />
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>ویجت هوشمند دانشنامه بالینی زوج‌درمانی</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#2A1E35] mb-2 leading-tight">
              بانک تخصصی مقالات روابط زناشویی و روانشناسی
            </h2>

            <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed font-medium">
              دسته‌بندی هوشمند بر اساس موضوعات چالش‌برانگیز رابطه زناشویی با تحلیل کلینیکی مهناز خوینی (EFT).
            </p>
          </div>

          {onNavigateArticles && (
            <button
              onClick={onNavigateArticles}
              className="inline-flex items-center gap-2 text-xs font-black text-[#3E2F5B] hover:text-[#241A35] py-2.5 px-5 rounded-full border border-[#E8DFD5] hover:border-[#3E2F5B]/40 bg-white transition-all cursor-pointer shrink-0 shadow-xs"
            >
              <span>مشاهده آرشیو کامل مقالات ({articles.length} مقاله)</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          )}
        </div>

        {/* Smart Filter & Interactive Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#E8DFD5] shadow-sm mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Topic Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none w-full lg:w-auto">
              <Filter className="w-4 h-4 text-[#C5A059] shrink-0 ml-1 hidden sm:block" />
              {categoryFilters.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                    selectedCategory === cat.key
                      ? 'bg-[#2A1E35] text-[#C5A059] shadow-md border border-[#C5A059]/50 scale-[1.02]'
                      : 'bg-[#FAF8F5] text-[#5E5868] hover:text-[#2A1E35] hover:bg-[#F4EFEA] border border-[#E8DFD5]'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                placeholder="جستجو در مقالات و کلمات کلیدی..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full pl-4 pr-10 py-2.5 bg-[#FAF8F5] border border-[#E8DFD5] rounded-2xl text-xs font-medium text-[#2A1E35] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]/30 focus:outline-none transition-all"
              />
              <Search className="w-4 h-4 text-[#A67C2E] absolute right-3.5 top-3" />
            </div>
          </div>

          {/* Active Filter Summary Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#F0EBE2] text-xs text-[#7A7382]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#2A1E35]">وضعیت نمایش:</span>
              <span className="bg-[#FAF5EB] text-[#2A1E35] font-black px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                {filteredArticles.length} مقاله یافت شد
              </span>
              {selectedCategory !== 'همه' && (
                <span className="text-[#A67C2E] font-medium">
                  (فیلتر بر اساس: {categoryFilters.find(f => f.key === selectedCategory)?.label})
                </span>
              )}
            </div>

            {(selectedCategory !== 'همه' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setSelectedCategory('همه');
                  setSearchQuery('');
                  setCurrentPage(1);
                }}
                className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
              >
                پاک‌سازی فیلترها ✕
              </button>
            )}
          </div>
        </div>

        {/* Articles Cards Grid */}
        {displayArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {displayArticles.map((art: Article) => (
              <article
                key={art.slug}
                onClick={() => onSelectArticle(art.slug)}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DFD5] hover:border-[#C5A059]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
              >
                {/* Subtle Card Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#C5A059] transition-all" />

                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-[#FAF8F5] border border-[#E8DFD5] text-[#A67C2E] text-[11px] font-bold px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3 text-[#C5A059]" />
                      <span>{art.category}</span>
                    </span>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#7A7382]">
                      <img
                        src="/images/mahnaz-khoini-thumb.webp"
                        alt="مهناز خوینی"
                        loading="lazy"
                        width={22}
                        height={22}
                        className="w-5 h-5 rounded-full object-cover border border-[#C5A059]/40"
                      />
                      <span className="font-bold text-[#2A1E35]">مهناز خوینی</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#8FAF9B]" />
                    </div>
                  </div>

                  {/* Article Title with Canonical SEO Link */}
                  <h3 className="text-base sm:text-lg font-black text-[#2A1E35] group-hover:text-[#3E2F5B] transition-colors leading-snug mb-3">
                    <a
                      href={`/articles/${art.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onSelectArticle(art.slug);
                      }}
                      className="hover:text-[#C5A059] transition-colors"
                    >
                      {art.h1 || art.title}
                    </a>
                  </h3>

                  {/* Description Snippet */}
                  <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed line-clamp-3 mb-5">
                    {art.description}
                  </p>

                  {/* Takeaway Highlight Preview (if present) */}
                  {art.takeaways && art.takeaways.length > 0 && (
                    <div className="bg-[#FAF5EB] p-3 rounded-2xl border border-[#C5A059]/20 text-[11px] text-[#2A1E35] mb-5">
                      <div className="font-bold text-[#A67C2E] flex items-center gap-1 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>نکته کلیدی مقاله:</span>
                      </div>
                      <p className="line-clamp-2 text-[#5E5868] font-medium leading-relaxed">
                        • {art.takeaways[0]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Metadata & Internal Link CTA */}
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

                  <a
                    href={`/articles/${art.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onSelectArticle(art.slug);
                    }}
                    className="text-[#A67C2E] font-black group-hover:text-[#2A1E35] group-hover:-translate-x-1 transition-all flex items-center gap-1"
                  >
                    <span>مطالعه مقاله</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#C5A059]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded-3xl border border-[#E8DFD5] mb-10">
            <p className="text-sm font-bold text-[#6F6B78]">
              مقاله‌ای متناسب با موضوع یا عبارت جستجوی «{searchQuery || selectedCategory}» یافت نشد.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('همه');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#2A1E35] text-[#C5A059] text-xs font-black rounded-full shadow-md"
            >
              نمایش تمامی مقالات
            </button>
          </div>
        )}

        {/* View All Articles CTA Button (if limited or homepage view) */}
        {limit && onNavigateArticles && (
          <div className="text-center mt-8">
            <button
              onClick={onNavigateArticles}
              className="inline-flex items-center gap-2 bg-[#2A1E35] hover:bg-[#3E2F5B] text-[#C5A059] font-black text-xs px-8 py-3.5 rounded-full border border-[#C5A059]/40 shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>مشاهده آرشیو کامل بانک مقالات تخصصی زوج درمانی ({articles.length} مقاله)</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Pagination Controls (when viewing full archive page without limit) */}
        {!limit && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-2xl bg-white border border-[#E8DFD5] disabled:opacity-40 hover:bg-[#FAF8F5] text-[#2A1E35] cursor-pointer shadow-xs transition-colors"
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
              className="p-3 rounded-2xl bg-white border border-[#E8DFD5] disabled:opacity-40 hover:bg-[#FAF8F5] text-[#2A1E35] cursor-pointer shadow-xs transition-colors"
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
