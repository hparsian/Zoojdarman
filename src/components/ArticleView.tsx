import React, { useEffect } from 'react';
import { Article } from '../types';
import { getRelatedArticles } from '../data/articles';
import { registerFaqSchema } from '../seo';
import { ArrowRight, Clock, Calendar, User, Lightbulb, MessageSquare, ChevronDown, BookOpen } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onSelectArticle }) => {
  const related = getRelatedArticles(article.slug, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article]);

  // داده‌های ساختاریافته پرسش‌وپاسخ مقاله (JSON-LD)
  useEffect(() => registerFaqSchema(article.faqs), [article]);

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

      <div className="container-custom max-w-4xl pt-8 sm:pt-12">
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
        <div className="flex flex-wrap items-center gap-5 text-xs text-[#6F6B78] pb-6 mb-8 border-b border-[#E5E0EA]">
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

        {/* Key Takeaways if available */}
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-[#f2eff8] border-r-4 border-[#6D5AA8] rounded-2xl p-6 sm:p-8 mb-10 shadow-xs">
            <h3 className="text-base font-black text-[#44386B] mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#E8A58D]" />
              <span>چکیده طلایی مقاله</span>
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#292733] leading-relaxed list-disc list-inside">
              {article.takeaways.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Article Body */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5E0EA] shadow-xs mb-10">
          <div
            className="article-rendered-content"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />
        </article>

        {/* FAQs Section for Article */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E0EA] shadow-xs mb-10">
            <h2 className="text-xl font-black text-[#44386B] mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#6D5AA8]" />
              <span>سوالات متداول مراجعان</span>
            </h2>
            <div className="flex flex-col gap-4">
              {article.faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E5E0EA]">
                  <h3 className="text-sm font-black text-[#292733] mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-[#6F6B78] leading-relaxed text-justify">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
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

        {/* Author Bio Box */}
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

        {/* Related Articles */}
        {related.length > 0 && (
          <div>
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
