import React, { useState, useEffect, useRef } from 'react';
import { getArticleBySlug } from '../data/articles';
import { articlesMeta } from '../data/articlesMeta';
import { registerFaqSchema } from '../seo';
import { TableOfContents } from './TableOfContents';
import { InnerPageTopBar } from './InnerPageTopBar';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import {
  SeoTakeawaysCard,
  StructuredTablesSection,
  InteractiveFaqSection,
} from './StructuredContentBlocks';
import { SocialShareButtons } from './SocialShareButtons';
import { getArticleSocialMeta } from '../utils/socialShareSeo';

interface ArticleViewProps {
  slug: string;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  slug,
  onBack,
  onSelectArticle,
  onNavigateHome,
  onNavigateContact,
}) => {
  const article = getArticleBySlug(slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!article?.faqs || article.faqs.length === 0) return;
    return registerFaqSchema(article.faqs);
  }, [article]);

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

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F4F1EC] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-14 h-14 text-[#344A42] mb-4" />
        <h1 className="text-2xl font-extrabold text-[#292D2A] mb-2">مقاله مورد نظر یافت نشد</h1>
        <p className="text-sm text-[#555650] mb-6">
          احتمالاً نشانی مقاله تغییر کرده یا به صفحه دیگری منتقل شده است.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs cursor-pointer"
        >
          مشاهده سایر مقالات
        </button>
      </div>
    );
  }

  const relatedSameCat = articlesMeta.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );
  const related = (relatedSameCat.length >= 3
    ? relatedSameCat
    : [...relatedSameCat, ...articlesMeta.filter((a) => a.slug !== article.slug && a.category !== article.category)]
  ).slice(0, 3);

  const navigateInternal = (path: string) => {
    const cleanPath = path.replace(/\/+$/, '') || '/';
    if (cleanPath.startsWith('/articles/')) {
      onSelectArticle(cleanPath.replace('/articles/', ''));
    } else {
      window.history.pushState({}, '', cleanPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 85;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
      return;
    }

    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      navigateInternal(href);
    }
  };

  const socialMeta = getArticleSocialMeta(article);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24">
      <div className="sticky top-0 z-40">
        <div
          className="h-1 bg-[#344A42] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
        <InnerPageTopBar
          onBack={onBack}
          backLabel="بازگشت به مقالات"
          onNavigateContact={onNavigateContact}
          maxWidthClass="max-w-6xl"
        />
      </div>

      <div className="container-custom max-w-6xl pt-8 sm:pt-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#6E6E68] mb-5 flex-wrap">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
              else onBack();
            }}
            className="hover:text-[#344A42]"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <a
            href="/articles"
            onClick={(e) => {
              e.preventDefault();
              navigateInternal('/articles');
            }}
            className="hover:text-[#344A42]"
          >
            بانک مقالات
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">{article.category}</span>
        </nav>

        <p className="text-xs font-semibold text-[#3D5E4E] mb-3">
          {article.category}
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292D2A] leading-[1.35] mb-6 max-w-4xl">
          {article.h1 || article.title}
        </h1>

        <div className="flex flex-wrap items-center gap-5 text-xs text-[#555650] pb-6 mb-6 border-b border-[#E5E0D8]">
          <span className="flex items-center gap-1.5 font-semibold text-[#292D2A]">
            <User className="w-4 h-4 text-[#344A42]" />
            <span>مهناز خوینی (زوج‌درمانگر بالینی)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#3D5E4E]" />
            <span>زمان مطالعه: {article.readTime}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#3D5E4E]" />
            <span>به‌روزرسانی: {article.updatedAt}</span>
          </span>
        </div>

        <div className="mb-8">
          <SocialShareButtons meta={socialMeta} />
        </div>

        <SeoTakeawaysCard title="نکات کلیدی این راهنما" items={article.takeaways} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 lg:order-1 w-full space-y-6">
            <TableOfContents
              contentRef={contentRef}
              articleTrigger={article.slug}
              onNavigateInternal={navigateInternal}
            />
          </aside>

          <main className="lg:col-span-8 lg:order-2 order-1 w-full">
            <div className="block lg:hidden mb-8">
              <TableOfContents
                contentRef={contentRef}
                articleTrigger={article.slug}
                onNavigateInternal={navigateInternal}
                defaultOpenOnMobile={false}
              />
            </div>

            <article className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-11 border border-[#E5E0D8] mb-10">
              <div ref={contentRef} onClick={handleContentClick} className="article-rendered-content">
                <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
                <StructuredTablesSection tables={article.structuredTables} />
              </div>
            </article>

            <InteractiveFaqSection faqs={article.faqs} title="پرسش‌های متداول مراجعان" />

            <div className="bg-[#EDF2EE] border border-[#D3E0D7] rounded-2xl p-7 sm:p-9 mb-10 text-center">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#292D2A] mb-3">
                اگر با این وضعیت در رابطه‌تان روبه‌رو هستید
              </h3>
              <p className="text-xs sm:text-sm text-[#555650] max-w-xl mx-auto mb-6 leading-relaxed">
                در یک جلسه ارزیابی با مهناز خوینی، چرخه فعلی رابطه با بی‌طرفی بررسی شده و مسیر
                مناسب گفت‌وگو یا بازسازی اعتماد مشخص می‌شود.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {onNavigateContact && (
                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className="inline-flex items-center gap-2 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs sm:text-sm font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>هماهنگی جلسه مشاوره</span>
                  </button>
                )}
                <a
                  href="https://wa.me/989199087264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#344A42] bg-[#FCFBF8] hover:bg-[#F4F1EC] text-[#344A42] text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>پذیرش واتساپ</span>
                </a>
              </div>
            </div>

            <div className="bg-[#FCFBF8] rounded-2xl p-6 border border-[#E5E0D8] flex items-center gap-4 mb-10">
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
                className="w-16 h-16 rounded-full object-cover object-top shrink-0 border border-[#CFC7BA]"
              />
              <div>
                <h4 className="text-sm font-bold text-[#292D2A] mb-1">مهناز خوینی</h4>
                <p className="text-xs text-[#555650] leading-relaxed">
                  زوج‌درمانگر بالینی و مسئول فنی کلینیک پیوند امن · پروانه سازمان نظام روان‌شناسی: ۱۴۱۴۰۸۳
                </p>
              </div>
            </div>
          </main>
        </div>

        {related.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#E5E0D8]">
            <h3 className="text-lg font-extrabold text-[#292D2A] mb-6">مقالات مرتبط پیشنهادی</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectArticle(rel.slug);
                  }}
                  className="bg-[#FCFBF8] p-5 rounded-xl border border-[#E5E0D8] hover:border-[#8FAE9B] transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs font-medium text-[#6E6E68] mb-2 block">
                      {rel.category} · {rel.readTime}
                    </span>
                    <h4 className="text-sm font-bold text-[#292D2A] group-hover:text-[#344A42] line-clamp-2 mb-2">
                      {rel.h1 || rel.title}
                    </h4>
                  </div>
                  <span className="text-xs text-[#344A42] font-semibold mt-3 flex items-center gap-1">
                    مطالعه مقاله
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
