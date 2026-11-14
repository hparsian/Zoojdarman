import React, { useState, useEffect, useRef } from 'react';
import { ServiceItem } from '../types';
import { getArticleBySlug } from '../data/articles';
import { registerFaqSchema } from '../seo';
import { TableOfContents } from './TableOfContents';
import {
  SeoTakeawaysCard,
  StructuredTablesSection,
  InteractiveFaqSection,
} from './StructuredContentBlocks';
import {
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Globe2,
  BookOpen,
} from 'lucide-react';

import { SocialShareButtons } from './SocialShareButtons';
import { getServiceSocialMeta } from '../utils/socialShareSeo';

interface ServiceViewProps {
  service: ServiceItem;
  onBack: () => void;
}

export const ServiceView: React.FC<ServiceViewProps> = ({ service, onBack }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [service.slug]);

  // داده‌های ساختاریافته پرسش‌وپاسخ خدمت (JSON-LD)
  useEffect(() => registerFaqSchema(service.faqs), [service]);

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

  const navigateInternal = (path: string) => {
    const cleanPath = path.replace(/\/+$/, '') || '/';
    window.history.pushState({}, '', cleanPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
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

  const relatedArticles = (service.relatedArticleSlugs || [])
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const socialMeta = getServiceSocialMeta(service);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Top Bar with Reading Progress */}
      <div className="bg-white border-b border-[#E5E0EA] sticky top-0 z-40 shadow-xs">
        <div
          className="h-1 bg-gradient-to-r from-[#C5A059] to-[#3E2F5B] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />

        <div className="container-custom h-15 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#6D5AA8] hover:text-[#44386B] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>بازگشت به خدمات و صفحه اصلی</span>
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
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#6D5AA8] cursor-pointer"
          >
            صفحه اصلی
          </a>
          <span>/</span>
          <a
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              navigateInternal('/services');
            }}
            className="hover:text-[#6D5AA8] cursor-pointer"
          >
            خدمات تخصصی
          </a>
          <span>/</span>
          <span className="text-[#6D5AA8] font-bold">{service.title}</span>
        </nav>

        {/* Top Category Tag */}
        <span className="inline-block bg-[#edf5f0] text-[#5e826b] text-xs font-black px-3.5 py-1.5 rounded-full mb-4 border border-[#8FAF9B]/30">
          {service.category || 'پروتکل تخصصی بالینی'}
        </span>

        {/* H1 Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#44386B] leading-[1.35] mb-4">
          {service.h1 || service.title}
        </h1>

        {/* Lead Description */}
        <p className="text-sm sm:text-base text-[#6F6B78] leading-relaxed mb-6 text-justify">
          {service.description}
        </p>

        {/* Clinical Protocol Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#5e826b] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#6D5AA8] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">
              مدت هر جلسه: {service.sessionDuration || '۶۰ دقیقه استاندارد'}
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-[#E8A58D] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">
              {service.modality || 'حضوری تهران (پونک) و آنلاین'}
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-[#E5E0EA] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#6D5AA8] shrink-0" />
            <span className="text-xs font-bold text-[#292733]">پروتکل علمی EFT و گاتمن</span>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="mb-8">
          <SocialShareButtons meta={socialMeta} />
        </div>

        {/* Data-Driven Key Takeaways */}
        <SeoTakeawaysCard
          title="دستاوردهای کلیدی و اهداف درمانی این خدمت"
          items={service.takeaways}
        />

        {/* 2-Column Data-Driven Layout with Sticky TableOfContents */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24 lg:order-1 w-full space-y-6">
            <TableOfContents
              contentRef={contentRef}
              articleTrigger={service.slug}
              onNavigateInternal={navigateInternal}
              headingTitle="جدول محتوای پروتکل خدمت"
            />
          </aside>

          <main className="lg:col-span-8 lg:order-2 order-1 w-full">
            <div className="block lg:hidden mb-8">
              <TableOfContents
                contentRef={contentRef}
                articleTrigger={service.slug}
                onNavigateInternal={navigateInternal}
                defaultOpenOnMobile={false}
                headingTitle="جدول محتوای پروتکل خدمت"
              />
            </div>

            {/* Service Rendered Body + Data-Driven Structured Tables */}
            <article className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E5E0EA] shadow-xs mb-10">
              <div
                ref={contentRef}
                onClick={handleContentClick}
                className="article-rendered-content"
              >
                <div dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
                <StructuredTablesSection tables={service.structuredTables} />
              </div>
            </article>

            {/* Interactive FAQ Accordion */}
            <InteractiveFaqSection
              faqs={service.faqs}
              title="سوالات متداول مراجعان این حوزه"
            />

            {/* Service CTA */}
            <div className="bg-gradient-to-br from-[#FAF8F5] to-[#f2eff8] border border-[#6D5AA8]/30 rounded-3xl p-8 sm:p-10 mb-10 text-center">
              <h3 className="text-xl font-black text-[#44386B] mb-3">
                آماده شروع جلسات تخصصی {service.title} هستید؟
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6B78] max-w-xl mx-auto mb-6 leading-relaxed">
                برای دریافت اولین وقت مشاوره حضوری (کلینیک پیوند امن تهران - پونک) یا آنلاین با مهناز خوینی، در پیام‌رسان واتساپ با ما در ارتباط باشید.
              </p>
              <a
                href={`https://wa.me/989199087264?text=${encodeURIComponent(
                  `سلام، مایل به رزرو نوبت مشاوره برای خدمت «${service.title}» هستم.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#6D5AA8] hover:bg-[#44386B] text-white text-xs sm:text-sm font-black px-8 py-3.5 rounded-full shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>رزرو وقت در واتساپ (۰۹۱۹۹۰۸۷۲۶۴)</span>
              </a>
            </div>

            {/* Author Bio Box */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E0EA] flex items-center gap-4 shadow-xs mb-10">
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
                  کارشناس ارشد روان‌شناسی بالینی و مسئول فنی کلینیک پیوند امن | پروانه ۱۴۱۴۰۸۳
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Related Specialized Articles Cluster */}
        {relatedArticles.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#E5E0EA]">
            <h3 className="text-lg font-black text-[#44386B] mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#6D5AA8]" />
              <span>مقالات علمی و راهنماهای مرتبط با این خدمت</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateInternal(`/articles/${rel.slug}`);
                  }}
                  className="bg-white p-5 rounded-2xl border border-[#E5E0EA] hover:border-[#6D5AA8] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#8e482f] bg-[#fcf1ec] px-2 py-0.5 rounded-full mb-2 inline-block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#292733] line-clamp-2 mb-2">
                      {rel.h1 || rel.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-[#6D5AA8] font-black mt-3 flex items-center gap-1">
                    مطالعه راهنمای کامل
                    <ArrowRight className="w-3 h-3 rotate-180" />
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
