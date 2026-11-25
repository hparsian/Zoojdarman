import React, { useState, useEffect, useRef } from 'react';
import { getServiceBySlug } from '../data/services';
import { articlesMeta } from '../data/articlesMeta';
import { registerFaqSchema } from '../seo';
import { TableOfContents } from './TableOfContents';
import { InnerPageTopBar } from './InnerPageTopBar';
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
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { SocialShareButtons } from './SocialShareButtons';
import { getServiceSocialMeta } from '../utils/socialShareSeo';
import { PARENT_CLINIC_LINKS, getParentServiceLink } from '../utils/parentClinicLinks';
import { ClinicSpaceFigure, ClinicSpaceKey } from './ClinicSpaceFigure';
import { ClinicalTrustFooter } from './ClinicalTrustFooter';

const SERVICE_SPACE_MAP: Record<string, ClinicSpaceKey> = {
  'couples-therapy': 'tehran-sunlit-mustard-room',
  'infidelity-counseling': 'acoustic-leather-private-room',
  'divorce-counseling': 'acoustic-leather-private-room',
  'premarital-counseling': 'sunlit-blue-couples-room',
  'online-counseling': 'controlled-light-online-room',
  'relationship-patterns-therapy': 'navy-eft-counseling-room',
};

interface ServiceViewProps {
  slug: string;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
}

export const ServiceView: React.FC<ServiceViewProps> = ({
  slug,
  onBack,
  onNavigateHome,
  onNavigateContact,
}) => {
  const service = getServiceBySlug(slug);
  const contentRef = useRef<HTMLDivElement>(null);
  const [readingProgress, setReadingProgress] = useState<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!service?.faqs || service.faqs.length === 0) return;
    return registerFaqSchema(service.faqs);
  }, [service]);

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

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F4F1EC] flex flex-col items-center justify-center p-6 text-center">
        <AlertCircle className="w-14 h-14 text-[#344A42] mb-4" />
        <h1 className="text-2xl font-extrabold text-[#292D2A] mb-2">خدمت مورد نظر یافت نشد</h1>
        <p className="text-sm text-[#555650] mb-6">صفحه مورد نظر در حال حاضر در دسترس نیست.</p>
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] rounded-lg font-semibold text-xs cursor-pointer"
        >
          مشاهده خدمات تخصصی
        </button>
      </div>
    );
  }

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
    .map((aSlug) => articlesMeta.find((a) => a.slug === aSlug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const socialMeta = getServiceSocialMeta(service);
  const parentService = getParentServiceLink(service.slug);

  return (
    <div className="bg-[#F4F1EC] min-h-screen pb-24">
      <div className="sticky top-0 z-40">
        <div
          className="h-1 bg-[#344A42] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
        <InnerPageTopBar
          onBack={onBack}
          backLabel="بازگشت به خدمات"
          onNavigateContact={onNavigateContact}
          maxWidthClass="max-w-6xl"
        />
      </div>

      <div className="container-custom max-w-6xl pt-8 sm:pt-12">
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
            href="/services"
            onClick={(e) => {
              e.preventDefault();
              navigateInternal('/services');
            }}
            className="hover:text-[#344A42]"
          >
            خدمات تخصصی
          </a>
          <span>/</span>
          <span className="text-[#344A42] font-semibold">{service.title}</span>
        </nav>

        <p className="text-xs font-semibold text-[#3D5E4E] mb-3">
          {service.category || 'پروتکل تخصصی بالینی'}
        </p>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292D2A] leading-[1.35] mb-4 max-w-4xl">
          {service.h1 || service.title}
        </h1>

        <p className="text-sm sm:text-base text-[#555650] leading-relaxed mb-6 max-w-3xl">
          {service.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#3D5E4E] shrink-0" />
            <span className="text-xs font-semibold text-[#292D2A]">پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳</span>
          </div>
          <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#344A42] shrink-0" />
            <span className="text-xs font-semibold text-[#292D2A]">
              مدت جلسه: {service.sessionDuration || '۶۰ دقیقه استاندارد'}
            </span>
          </div>
          <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <Globe2 className="w-5 h-5 text-[#3D5E4E] shrink-0" />
            <span className="text-xs font-semibold text-[#292D2A]">
              حضوری تهران (منطقه ۲) و آنلاین
            </span>
          </div>
          <div className="bg-[#FCFBF8] p-4 rounded-xl border border-[#E5E0D8] flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#344A42] shrink-0" />
            <span className="text-xs font-semibold text-[#292D2A]">پروتکل علمی EFT و گاتمن</span>
          </div>
        </div>

        <div className="mb-8">
          <SocialShareButtons meta={socialMeta} />
        </div>

        <SeoTakeawaysCard
          title="دستاوردهای کلیدی و اهداف درمانی این خدمت"
          items={service.takeaways}
        />

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

            <article className="bg-[#FCFBF8] rounded-2xl p-6 sm:p-11 border border-[#E5E0D8] mb-10">
              <div
                ref={contentRef}
                onClick={handleContentClick}
                className="article-rendered-content"
              >
                <div dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
                <StructuredTablesSection tables={service.structuredTables} />
              </div>
            </article>

            <InteractiveFaqSection
              faqs={service.faqs}
              title="سوالات متداول مراجعان این حوزه"
            />

            <div className="mb-10">
              <ClinicSpaceFigure
                space={SERVICE_SPACE_MAP[service.slug] || 'tehran-sunlit-mustard-room'}
                aspectRatio="4/5"
                className="max-w-md mx-auto"
              />
            </div>

            <div className="bg-[#EDF2EE] border border-[#D3E0D7] rounded-2xl p-7 sm:p-9 mb-10 text-center">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#292D2A] mb-3">
                هماهنگی اولین جلسه {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555650] max-w-xl mx-auto mb-6 leading-relaxed">
                جلسات حضوری در تهران، پونک (منطقه ۲)، کلینیک پیوند امن و به‌صورت
                آنلاین در سراسر ایران و جهان برگزار می‌شوند.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {onNavigateContact && (
                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className="inline-flex items-center gap-2 bg-[#344A42] hover:bg-[#273932] text-[#FCFBF8] text-xs sm:text-sm font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>درخواست رزرو نوبت</span>
                  </button>
                )}
                <a
                  href="https://wa.me/989199087264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#344A42] bg-[#FCFBF8] hover:bg-[#F4F1EC] text-[#344A42] text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساپ پذیرش (۰۹۱۹۹۰۸۷۲۶۴)</span>
                </a>
              </div>
              <div className="mt-5 pt-4 border-t border-[#D3E0D7] flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#344A42]">
                <a
                  href={parentService.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 font-semibold hover:text-[#273932] underline underline-offset-4 transition-colors"
                >
                  <span>{parentService.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PARENT_CLINIC_LINKS.portal}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 font-semibold hover:text-[#273932] underline underline-offset-4 transition-colors"
                >
                  <span>پورتال مراجعان کلینیک پیوند امن</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <ClinicalTrustFooter
              context="service"
              onNavigateAbout={() => navigateInternal('/about')}
            />

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
                <p className="text-xs text-[#555650] leading-relaxed tabular-nums">
                  کارشناس ارشد روان‌شناسی و مسئول فنی کلینیک پیوند امن · پروانه نظام روان‌شناسی: ۱۴۱۴۰۸۳
                </p>
              </div>
            </div>
          </main>
        </div>

        {relatedArticles.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#E5E0D8]">
            <h3 className="text-lg font-extrabold text-[#292D2A] mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#344A42]" />
              <span>مقالات علمی و راهنماهای مرتبط</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedArticles.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/articles/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateInternal(`/articles/${rel.slug}`);
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
                    مطالعه راهنمای کامل
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
