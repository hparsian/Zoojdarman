import { getArticleBySlug } from './data/articles';
import { getServiceBySlug } from './data/services';
import { getTestBySlug } from './data/testsData';
import type { FaqItem, RouteState } from './types';

/**
 * ماژول مرکزی سئوی سایت (Client-Side SEO)
 *
 * برای هر مسیر، عنوان، توضیحات متا، canonical، برچسب‌های Open Graph / Twitter
 * و داده‌های ساختاریافته JSON-LD را به‌روزرسانی می‌کند. پیش از وجود این ماژول
 * تمام صفحات canonical و متا دیسکریپشن صفحه اصلی را داشتند.
 */

export const SITE_URL = 'https://zoojdarman.ir';
export const SITE_NAME = 'مرکز تخصصی زوج‌درمانی مهناز خوینی';

const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const NOT_FOUND_ROBOTS = 'noindex, follow';
const DEFAULT_IMAGE = '/images/og-cover.jpg';
const THERAPIST_ID = `${SITE_URL}/#therapist`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const HOME_TITLE = 'زوج‌درمانی و تست آنلاین سلامت رابطه | مهناز خوینی';
const HOME_DESCRIPTION =
  'سامانه تخصصی زوج‌درمانی، تست آنلاین رایگان رضایت زناشویی (انریچ) و پیش‌بینی طلاق عاطفی، مشاوره خیانت و بهبود رابطه توسط مهناز خوینی، روانشناس بالینی (پروانه ۱۴۱۴۰۸۳). جلسات حضوری در تهران و آنلاین سراسر جهان.';

export interface SeoBreadcrumbItem {
  name: string;
  /** آدرس نسبی؛ برای صفحه جاری خالی بگذارید */
  path?: string;
}

export interface SeoPage {
  title: string;
  description: string;
  /** آدرس نسبی مسیر، مثلاً `/articles/foo` */
  path: string;
  image?: string;
  ogType?: 'website' | 'article';
  robots?: string;
  breadcrumb?: SeoBreadcrumbItem[];
  /** گره‌های اضافی JSON-LD (Article، Service، Quiz و…) */
  jsonLd?: Record<string, unknown>[];
}

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** یک گره JSON-LD با شناسه مشخص را در <head> قرار می‌دهد یا جایگزین می‌کند */
export function setJsonLd(id: string, data: unknown): void {
  let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.setAttribute('type', 'application/ld+json');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function removeJsonLd(id: string): void {
  document.head.querySelector(`script#${id}`)?.remove();
}

/**
 * ثبت داده‌های ساختاریافته FAQPage برای پرسش‌وپاسخ‌هایی که همان لحظه
 * در صفحه رندر می‌شوند. تابع برگشتی، اسکریپت را هنگام ترک کامپوننت پاک می‌کند.
 *
 * نمونه مصرف:
 *   useEffect(() => registerFaqSchema(article.faqs), [article]);
 */
export function registerFaqSchema(faqs: FaqItem[]): () => void {
  const url = absoluteUrl(window.location.pathname || '/');
  setJsonLd('seo-faq', faqPageNode(faqs, url));
  return () => removeJsonLd('seo-faq');
}

/** گره FAQPage از پرسش‌وپاسخ‌های واقعیِ در حال نمایش در صفحه */
export function faqPageNode(faqs: FaqItem[], pageUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faqpage`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}

function webPageNode(page: SeoPage, url: string, image: string): Record<string, unknown> {
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: 'fa-IR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': THERAPIST_ID },
    primaryImageOfPage: image,
  };
}

function breadcrumbNode(items: SeoBreadcrumbItem[], currentUrl: string): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path ? absoluteUrl(item.path) : currentUrl,
    })),
  };
}

/** عنوان را با نام برند می‌سازد؛ اگر از قبل برند داشته باشد تکرار نمی‌شود */
function withBrand(title: string): string {
  return title.includes('مهناز خوینی') ? title : `${title} | مهناز خوینی`;
}

function notFoundSeo(): SeoPage {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  return {
    title: 'صفحه یافت نشد | مهناز خوینی',
    description:
      'این صفحه وجود ندارد یا آدرس آن تغییر کرده است. از صفحه اصلی، بانک مقالات یا تست‌های آنلاین سلامت رابطه بازدید کنید.',
    path,
    robots: NOT_FOUND_ROBOTS,
    breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'صفحه یافت نشد' }],
  };
}

/* ------------------------------------------------------------------ */
/* اعمال تنظیمات سئو روی <head>                                      */
/* ------------------------------------------------------------------ */

export function applySeo(page: SeoPage): void {
  const url = absoluteUrl(page.path);
  const image = absoluteUrl(page.image ?? DEFAULT_IMAGE);

  document.title = page.title;

  upsertMeta('name', 'description', page.description);
  upsertMeta('name', 'robots', page.robots ?? DEFAULT_ROBOTS);
  upsertLink('canonical', url);

  // Open Graph / WhatsApp & Instagram preview
  upsertMeta('property', 'og:title', page.title);
  upsertMeta('property', 'og:description', page.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:type', page.ogType ?? 'website');
  upsertMeta('property', 'og:image', image);

  // Twitter Card
  upsertMeta('name', 'twitter:title', page.title);
  upsertMeta('name', 'twitter:description', page.description);
  upsertMeta('name', 'twitter:url', url);
  upsertMeta('name', 'twitter:image', image);

  const graph: Record<string, unknown>[] = [webPageNode(page, url, image)];
  if (page.jsonLd?.length) graph.push(...page.jsonLd);
  if (page.breadcrumb && page.breadcrumb.length > 0) {
    graph.push(breadcrumbNode(page.breadcrumb, url));
  }

  setJsonLd('seo-page', { '@context': 'https://schema.org', '@graph': graph });
}

/* ------------------------------------------------------------------ */
/* تبدیل مسیر (Route) به پیکربندی سئو                                */
/* ------------------------------------------------------------------ */

function articleSchema(slug: string, url: string): Record<string, unknown>[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: article.h1 || article.title,
      description: article.description,
      image: absoluteUrl(DEFAULT_IMAGE),
      inLanguage: 'fa-IR',
      mainEntityOfPage: { '@id': url },
      author: { '@id': THERAPIST_ID, name: 'مهناز خوینی' },
      publisher: { '@id': THERAPIST_ID },
      articleSection: article.category,
    },
  ];
}

function serviceSchema(slug: string, url: string): Record<string, unknown>[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];
  return [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.title,
      description: service.description,
      url,
      inLanguage: 'fa-IR',
      serviceType: 'زوج‌درمانی و مشاوره خانواده',
      provider: { '@id': THERAPIST_ID },
      areaServed: 'ایران و ایرانیان مقیم خارج از کشور',
      availableLanguage: 'fa-IR',
    },
  ];
}

function testSchema(testSlug: string, url: string): Record<string, unknown>[] {
  const test = getTestBySlug(testSlug);
  if (!test) return [];
  return [
    {
      '@type': 'Quiz',
      '@id': `${url}#quiz`,
      name: test.seoTitle,
      description: test.seoDescription,
      url,
      inLanguage: 'fa-IR',
      about: { '@type': 'Thing', name: 'سلامت رابطه زناشویی' },
      educationalLevel: 'عمومی',
    },
  ];
}

export function seoForRoute(route: RouteState): SeoPage {
  switch (route.type) {
    case 'home':
      return {
        title: HOME_TITLE,
        description: HOME_DESCRIPTION,
        path: '/',
      };

    case 'article': {
      const article = getArticleBySlug(route.slug);
      if (!article) return notFoundSeo();
      const path = `/articles/${article.slug}`;
      return {
        title: withBrand(article.title),
        description: article.description,
        path,
        ogType: 'article',
        breadcrumb: [
          { name: 'صفحه اصلی' },
          { name: 'راهنمای رابطه و مقالات', path: '/articles' },
          { name: article.h1 || article.title },
        ],
        jsonLd: articleSchema(article.slug, absoluteUrl(path)),
      };
    }

    case 'articles':
      return {
        title: 'بانک مقالات تخصصی زوج‌درمانی، خیانت و بهبود روابط عاطفی | مهناز خوینی',
        description:
          '۴۲ مقاله تخصصی زوج‌درمانی، خیانت، طلاق عاطفی، سردی رابطه و مهارت حل تعارض با پروتکل‌های EFT و گاتمن؛ مطالعه رایگان و جستجوی موضوعی.',
        path: '/articles',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'مقالات و راهنما' }],
      };

    case 'service': {
      const service = getServiceBySlug(route.slug);
      if (!service) return notFoundSeo();
      const path = `/services/${service.slug}`;
      return {
        title: withBrand(service.title),
        description: service.description,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی' },
          { name: 'خدمات تخصصی', path: '/services' },
          { name: service.h1 || service.title },
        ],
        jsonLd: serviceSchema(service.slug, absoluteUrl(path)),
      };
    }

    case 'services':
      return {
        title: 'خدمات تخصصی زوج‌درمانی، مشاوره خیانت و بهبود روابط عاطفی | مهناز خوینی',
        description:
          '۶ خدمت تخصصی زوج‌درمانی هیجان‌مدار، مشاوره خیانت، طلاق آگاهانه، پیش از ازدواج، الگوهای رابطه و مشاوره آنلاین با مهناز خوینی.',
        path: '/services',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'خدمات تخصصی' }],
      };

    case 'singleTest': {
      const test = getTestBySlug(route.testSlug);
      if (!test) return notFoundSeo();
      const path = `/tests/${test.slug}`;
      return {
        title: test.seoTitle,
        description: test.seoDescription,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی' },
          { name: 'تست‌های آنلاین رابطه', path: '/tools' },
          { name: test.title },
        ],
        jsonLd: testSchema(test.slug, absoluteUrl(path)),
      };
    }

    case 'tools':
      return {
        title: 'تست آنلاین رایگان رضایت زناشویی و سلامت رابطه | انریچ و گاتمن | مهناز خوینی',
        description:
          '۴ آزمون آنلاین و رایگان سلامت رابطه: تست انریچ رضایت زناشویی، پیش‌بینی طلاق عاطفی گاتمن، سبک دلبستگی و ۵ زبان عشق با تحلیل فوری.',
        path: '/tools',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'تست‌های آنلاین رابطه' }],
      };

    case 'topics':
      return {
        title: 'دانشنامه کلمات کلیدی و جستجوهای پرطرفدار زوج‌درمانی در گوگل | مهناز خوینی',
        description:
          'راهنمای موضوعی جستجوهای پرطرفدار زوج‌درمانی در گوگل؛ انتخاب مقاله یا خدمت مناسب مشاجرات مکرر، خیانت، سردی رابطه و تصمیم‌گیری درباره طلاق.',
        path: '/topics',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'موضوعات پرجستجو' }],
      };

    case 'about':
      return {
        title: 'درباره مهناز خوینی | زوج‌درمانگر هیجان‌مدار و مسئول فنی کلینیک پیوند امن',
        description:
          'مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی، زوج‌درمانگر EFT و طرحواره‌درمانی، مسئول فنی کلینیک پیوند امن با پروانه نظام روان‌شناسی ۱۴۱۴۰۸۳.',
        path: '/about',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'درباره مهناز خوینی' }],
      };

    case 'process':
      return {
        title: 'مراحل ۴ گانه زوج‌درمانی هیجان‌مدار (EFT) | مهناز خوینی',
        description:
          'فرآیند گام‌به‌گام زوج‌درمانی: ارزیابی و تشخیص، تثبیت هیجان، بازپردازش تعارضات عمیق و تثبیت دستاوردها برای پایداری رابطه زناشویی.',
        path: '/process',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'مراحل درمان' }],
      };

    case 'faq':
      return {
        title: 'پرسش‌های متداول زوج‌درمانی و مشاوره رابطه | مهناز خوینی',
        description:
          'پاسخ پرتکرارترین پرسش‌های مراجعان درباره مدت و تعداد جلسات زوج‌درمانی، محرمانگی، مشاوره آنلاین، خیانت و شرایط نوبت‌دهی.',
        path: '/faq',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'پرسش‌های متداول' }],
      };

    case 'contact':
      return {
        title: 'رزرو وقت و تماس با کلینیک زوج‌درمانی مهناز خوینی | تهران و آنلاین',
        description:
          'رزرو وقت حضوری در تهران و مشاوره آنلاین سراسر جهان؛ آدرس کلینیک پیوند امن، ساعات کاری، تماس مستقیم و رزرو از طریق واتساپ.',
        path: '/contact',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'تماس و نوبت‌دهی' }],
      };

    case 'privacy':
      return {
        title: 'حریم خصوصی و محرمانگی | zoojdarman.ir',
        description:
          'تعهد مرکز زوج‌درمانی مهناز خوینی به محرمانگی کامل جلسات بالینی، حفظ داده‌های مراجعان و تطابق با موازین سازمان نظام روان‌شناسی و مشاوره.',
        path: '/privacy-policy',
        breadcrumb: [{ name: 'صفحه اصلی' }, { name: 'حریم خصوصی' }],
      };

    case '404':
    default:
      return notFoundSeo();
  }
}
