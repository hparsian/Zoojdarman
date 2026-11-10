import React, { useState, useEffect, useRef } from 'react';
import { Article } from '../types';
import { getRelatedArticles } from '../data/articles';
import { registerFaqSchema } from '../seo';
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  Lightbulb,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ListOrdered,
  Link2,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Scale,
  BrainCircuit
} from 'lucide-react';

import { SocialShareButtons } from './SocialShareButtons';
import { getArticleSocialMeta } from '../utils/socialShareSeo';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export const ArticleView: React.FC<ArticleViewProps> = ({ article, onBack, onSelectArticle }) => {
  const related = getRelatedArticles(article.slug, 3);
  const contentRef = useRef<HTMLDivElement>(null);

  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [isTocOpen, setIsTocOpen] = useState<boolean>(true);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.slug]);

  // ثبت داده‌های ساختاریافته پرسش‌وپاسخ مقاله (JSON-LD)
  useEffect(() => {
    registerFaqSchema(article.faqs);
  }, [article]);

  // ۱. استخراج پویا و ساخت جدول محتوا (TOC) از تگ‌های h2 و h3
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    // پیدا کردن تمام تگ‌های h2 و h3 داخل محتوای رندرشده مقاله
    const headings = container.querySelectorAll<HTMLHeadingElement>('h2, h3');
    const items: TocItem[] = [];

    headings.forEach((heading, idx) => {
      let id = heading.id;
      if (!id) {
        // ایجاد شناسه یکتا و امن فارسی/انگلیسی در صورت نبود id
        const rawText = heading.textContent?.trim() || `section-${idx + 1}`;
        const slugified = rawText
          .replace(/[^\u0600-\u06FFa-zA-Z0-9\s-]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        id = `toc-${slugified || 'heading'}-${idx + 1}`;
        heading.id = id;
      }

      const level = heading.tagName.toLowerCase() === 'h2' ? 2 : 3;
      items.push({
        id,
        text: heading.textContent?.trim() || '',
        level,
      });
    });

    setTocItems(items);
  }, [article.bodyHtml, article.slug]);

  // ۲. ردیابی اسکرول کاربر (Scroll Spy) برای مشخص کردن بخش در حال مطالعه و درصد پیشرفت
  useEffect(() => {
    const handleScroll = () => {
      // محاسبه درصد پیشرفت مطالعه
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, Math.round((window.scrollY / totalHeight) * 100)));
        setReadingProgress(progress);
      }

      // تشخیص عنوان فعال در viewport
      if (tocItems.length === 0) return;
      const scrollPosition = window.scrollY + 140;

      for (let i = tocItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(tocItems[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveHeadingId(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  // اسکرول نرم به بخش انتخابی با کسر ارتفاع هدر چسبان
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveHeadingId(id);
    }
  };

  // ۳. مدیریت کلیک روی لینک‌های داخلی متن (هدایت نرم بدون رفرش صفحه)
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;

    // اگر لینک پرشی درون‌صفحه‌ای است (#section-...)
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      scrollToHeading(targetId);
      return;
    }

    // اگر لینک داخلی سایت است (/articles/... یا /services/... یا /tests/...)
    if (href.startsWith('/') && !href.startsWith('//')) {
      if (href.startsWith('/articles/')) {
        e.preventDefault();
        const slug = href.replace('/articles/', '');
        onSelectArticle(slug);
      } else {
        e.preventDefault();
        window.history.pushState({}, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  const socialMeta = getArticleSocialMeta(article);

  // فهرست صفحات کلیدی پیشنهادی مرتبط برای ارتقای سئو داخلی
  const vitalLinks = [
    { label: 'مشاوره خیانت زناشویی', path: '/services/infidelity-counseling', icon: ShieldCheck, badge: 'اورژانسی' },
    { label: 'مشاوره طلاق آگاهانه', path: '/services/divorce-counseling', icon: Scale, badge: 'تخصصی' },
    { label: 'تست‌های آنلاین رایگان رابطه', path: '/tools', icon: BrainCircuit, badge: 'خودارزیابی' },
    { label: 'تعرفه‌ها و هزینه جلسات', path: '/fees', icon: Sparkles, badge: 'تعرفه رسمی' },
    { label: 'رزرو وقت مشاوره حضوری و آنلاین', path: '/contact', icon: HeartHandshake, badge: 'نوبت‌دهی' },
  ];

  const navigateInternal = (path: string) => {
    if (path.startsWith('/articles/')) {
      onSelectArticle(path.replace('/articles/', ''));
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar with Reading Progress */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40 shadow-xs">
        {/* نوار پیشرفت مطالعه مقاله */}
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
        {article.takeaways && article.takeaways.length > 0 && (
          <div className="bg-[#f2eff8] border-r-4 border-[#6D5AA8] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
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

        {/* ============================================================== */}
        {/* قابلیت جدید: جدول محتوای پویا بر اساس H2 و H3 (Dynamic TOC)   */}
        {/* ============================================================== */}
        {tocItems.length > 0 && (
          <div className="bg-white border-2 border-[#E5DEF0] rounded-3xl p-5 sm:p-7 mb-10 shadow-sm transition-all">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D8]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FAF5EB] border border-[#C5A059]/40 flex items-center justify-center text-[#9E7D36]">
                  <ListOrdered className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#241A35] m-0">
                    جدول محتوا و سرفصل‌های این مقاله
                  </h3>
                  <span className="text-xs text-[#8A8494] block mt-0.5">
                    تولیدشده به صورت پویا بر اساس عناوین اصلی (H2) و فرعی (H3)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block bg-[#F2EEF8] text-[#5E4B82] text-xs font-bold px-3 py-1 rounded-full border border-[#5E4B82]/20">
                  {tocItems.length} سرفصل
                </span>
                <button
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#3E2F5B] bg-[#FAF8F5] hover:bg-[#F2EEF8] border border-[#E8E2D8] px-3 py-1.5 rounded-xl cursor-pointer transition-colors"
                >
                  <span>{isTocOpen ? 'بستن فهرست' : 'نمایش فهرست'}</span>
                  {isTocOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isTocOpen && (
              <div className="mt-5 animate-fadeIn">
                <nav className="max-h-[380px] overflow-y-auto pl-2 pr-1 space-y-1 custom-scrollbar">
                  {tocItems.map((item, idx) => {
                    const isActive = activeHeadingId === item.id;
                    const isH3 = item.level === 3;

                    return (
                      <button
                        key={idx}
                        onClick={() => scrollToHeading(item.id)}
                        className={`w-full text-right transition-all flex items-start gap-2.5 py-1.5 px-3 rounded-xl cursor-pointer ${
                          isH3 ? 'mr-5 text-xs text-[#5E5868]' : 'text-xs sm:text-sm font-bold text-[#231F2D]'
                        } ${
                          isActive
                            ? 'bg-[#F2EEF8] text-[#3E2F5B] font-black border-r-3 border-[#C5A059] shadow-2xs'
                            : 'hover:bg-[#FAF8F5] hover:text-[#3E2F5B]'
                        }`}
                      >
                        <span className={`shrink-0 mt-1 ${isH3 ? 'w-1.5 h-1.5 rounded-full bg-[#B5AFC0]' : 'w-2 h-2 rounded-full bg-[#C5A059]'}`} />
                        <span className="leading-relaxed line-clamp-1">{item.text}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* پیوندهای داخلی کلیدی پیشنهادی در پایین جدول محتوا */}
                <div className="mt-5 pt-4 border-t border-[#E8E2D8]/80 bg-[#FAF8F5]/80 -mx-5 -mb-5 p-5 rounded-b-3xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Link2 className="w-4 h-4 text-[#C5A059]" />
                    <span className="text-xs font-black text-[#241A35]">
                      صفحات کلیدی پیشنهادی مرتبط با این مقاله (سئو داخلی):
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {vitalLinks.map((link, idx) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={idx}
                          href={link.path}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateInternal(link.path);
                          }}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#3E2F5B] bg-white border border-[#E8E2D8] hover:border-[#C5A059] hover:bg-[#FAF5EB] px-3 py-1.5 rounded-xl shadow-2xs transition-all cursor-pointer"
                        >
                          <Icon className="w-3.5 h-3.5 text-[#9E7D36]" />
                          <span>{link.label}</span>
                          <span className="text-[9px] bg-[#EEF5F1] text-[#375949] font-black px-1.5 py-0.5 rounded-md">
                            {link.badge}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Main Article Body */}
        <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5E0EA] shadow-xs mb-10">
          <div
            ref={contentRef}
            onClick={handleContentClick}
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
