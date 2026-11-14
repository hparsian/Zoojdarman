import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types';
import { getRelatedArticles } from '../data/articles';
import { registerFaqSchema } from '../seo';
import { TableOfContents } from './TableOfContents';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  MessageSquare
} from 'lucide-react';
import {
  SeoTakeawaysCard,
  StructuredTablesSection,
  InteractiveFaqSection,
} from './StructuredContentBlocks';

import { SocialShareButtons } from './SocialShareButtons';
import { getArticleSocialMeta } from '../utils/socialShareSeo';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onSelectArticle }) => {
  const related = getRelatedArticles(article.slug, 3);
  const contentRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.slug]);

  // ثبت داده‌های ساختاریافته پرسش‌وپاسخ مقاله (JSON-LD)
  useEffect(() => {
    registerFaqSchema(article.faqs);
  }, [article]);

  // ردیابی درصد پیشرفت مطالعه در کل صفحه
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // مدیریت کلیک روی لینک‌های درون متن (هدایت نرم کلاینت‌ساید بدون رفرش)
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;

    // اگر لینک پرشی درون‌صفحه‌ای است (#section-...)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
      return;
    }

    // اگر لینک داخلی سایت است (/articles/... یا /services/... یا /tests/...)
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      navigateInternal(href);
    }
  };

  const navigateInternal = (path: string) => {
    const cleanPath = path.replace(/\/+$/, '') || '/';
    if (cleanPath.startsWith('/articles/')) {
      const slug = cleanPath.replace('/articles/', '');
      onSelectArticle(slug);
    } else {
      window.history.pushState({}, '', cleanPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const socialMeta = getArticleSocialMeta(article);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar with Reading Progress */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40 shadow-xs">
        {/* نوار پیشرفت مطالعه بالای صفحه */}
        <div
          className="h-1 bg-gradient-to-r from-[#C5A059] to-[#3E2F5B] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />

        <div className="container-custom h-15 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); onBack(); }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به مقالات و صفحه اصلی</span>
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

      <div className="container-custom max-w-6xl pt-8 sm:pt-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#8e8a96] mb-6 flex-wrap">
          <a href="/" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">صفحه اصلی</a>
          <span>/</span>
          <a href="/articles" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-[#6D5AA8] cursor-pointer">راهنمای رابطه</a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">{article.category}</span>
        </nav>

        {/* Category Tag */}
        <span className="inline-block bg-[#fcf1ec] text-[#8e482f] text-xs font-black px-3.5 py-1.5 rounded-full mb-4 border border-[#E8A58D]/30">
          {article.category}
        </span>

        {/* H1 Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#44386B] leading-[1.35] mb-6">
          {article.h1 || article.title}
        </h1>

        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-5 text-xs text-[#6F6B78] pb-6 mb-6 border-b border-[#E5E0EA]">
          <span className="flex items-center gap-1.5 font-bold">
            <User className="w-4 h-4 text-[#6D5AA8]" />
            <span>مهناز خوینی (زوج‌درمانگر بالینی)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#8FAF9B]" />
            <span>زمان مطالعه: {article.readTime}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#E8A58D]" />
            <span>به‌روزرسانی: {article.updatedAt}</span>
          </span>
        </div>

        {/* Dynamic Open Graph / Twitter Cards Social Share Buttons Bar */}
        <div className="mb-8">
          <SocialShareButtons meta={socialMeta} />
        </div>

        {/* Key Takeaways if available */}
        <SeoTakeawaysCard title="چکیده طلایی مقاله" items={article.takeaways} />

        {/* ============================================================== */}
        {/* ساختار ۲ ستونه تعاملی با کامپوننت TableOfContents شناور         */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ستون راست شناور در دسکتاپ (Right Sticky Sidebar in RTL): جدول محتوا */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 lg:order-1 w-full space-y-6">
            <TableOfContents
              contentRef={contentRef}
              articleTrigger={article.slug}
              onNavigateInternal={navigateInternal}
            />
          </aside>

          {/* ستون اصلی متن مقاله (سمت چپ جدول محتوا در دسکتاپ) */}
          <main className="lg:col-span-8 lg:order-2 order-1 w-full">
            {/* در موبایل و تبلت: باکس تاشو در بالای متن مقاله */}
            <div className="block lg:hidden mb-8">
              <TableOfContents
                contentRef={contentRef}
                articleTrigger={article.slug}
                onNavigateInternal={navigateInternal}
                defaultOpenOnMobile={false}
              />
            </div>

            {/* بدنه اصلی محتوای رندرشده مقاله و جداول داده‌محور */}
            <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5E0EA] shadow-xs mb-10">
              <div ref={contentRef} onClick={handleContentClick} className="article-rendered-content">
                <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
                <StructuredTablesSection tables={article.structuredTables} />
              </div>
            </article>

            {/* بخش سوالات متداول مراجعان */}
            <InteractiveFaqSection faqs={article.faqs} title="سوالات متداول مراجعان" />

            {/* باکس دعوت به اقدام (CTA) */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-[#f2eff8] border border-[#6D5AA8]/30 rounded-3xl p-8 sm:p-10 mb-10 text-center">
              <h3 className="text-xl font-black text-[#44386B] mb-3">
                آیا با این چالش در رابطه‌تان دست‌وپنجه نرم می‌کنید؟
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6B78] max-w-xl mx-auto mb-6 leading-relaxed">
                در یک جلسه ارزیابی تخصصی با مهناز خوینی، الگوهای تعارض رابطه‌تان بررسی شده و نقشه راه اختصاصی تدوین می‌شود.
              </p>
              <a
                href={`https://wa.me/989199087264?text=${encodeURIComponent(
                  `سلام، مقاله «${article.h1 || article.title}» را در سایت خواندم و مایل به دریافت وقت مشاوره هستم.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs sm:text-sm font-black px-8 py-3.5 rounded-full shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>رزرو نوبت مشاوره در واتساپ</span>
              </a>
            </div>

            {/* باکس معرفی درمانگر ارشد */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E0EA] flex items-center gap-4 mb-12 shadow-xs">
              <img
                src="/images/mahnaz-khoini-thumb.webp"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/mahnaz-khoini.jpg';
                }}
                alt="مهناز خوینی"
                width={617}
                height={775}
                loading="lazy"
                decoding="async"
                className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-[#6D5AA8]"
              />
              <div>
                <h4 className="text-sm font-black text-[#292733] mb-1">مهناز خوینی</h4>
                <p className="text-xs text-[#6F6B78] leading-relaxed">
                  زوج‌درمانگر بالینی و مسئول فنی کلینیک پیوند امن | پروانه تخصصی سازمان نظام روان‌شناسی: ۱۴۱۴۰۸۳
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* مطالب مرتبط پیشنهادی */}
        {related.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#E5E0EA]">
            <h3 className="text-lg font-black text-[#44386B] mb-6">مطالب مرتبط پیشنهادی</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => onSelectArticle(rel.slug)}
                  className="bg-white p-5 rounded-2xl border border-[#E5E0EA] hover:border-[#6D5AA8] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#8e482f] bg-[#fcf1ec] px-2 py-0.5 rounded-full mb-2 inline-block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#292733] line-clamp-2 mb-2">
                      <a
                        href={`/articles/${rel.slug}`}
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onSelectArticle(rel.slug); }}
                        className="hover:text-[#6D5AA8]"
                      >
                        {rel.h1 || rel.title}
                      </a>
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#6D5AA8] font-black mt-3 flex items-center gap-1">
                    مطالعه مقاله
                    <ArrowRight className="w-3 h-3 rotate-180" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
