import { getArticleMetaBySlug } from './data/articlesMeta';
import { getServiceMetaBySlug } from './data/servicesMeta';
import { getTestMetaBySlug } from './data/testsMeta';
import { getCityMetaBySlug } from './data/citiesMeta';
import { getCountryMetaBySlug } from './data/countriesMeta';
import { VIDEOS_DATA } from './data/videosData';
import type { FaqItem, RouteState } from './types';

/**
 * ماژول مرکزی سئوی سایت (Client-Side & Build-time Prerender SEO)
 *
 * برای هر مسیر، عنوان، توضیحات متا، canonical، برچسب‌های Open Graph / Twitter
 * و داده‌های ساختاریافته JSON-LD معتبر را به‌روزرسانی می‌کند.
 */

export const SITE_URL = 'https://zoojdarman.ir';
export const SITE_NAME = 'مرکز تخصصی زوج درمان مهناز خوینی (zoojdarman.ir)';

const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const NOT_FOUND_ROBOTS = 'noindex, follow';
const DEFAULT_IMAGE = '/images/og-cover.jpg';
const THERAPIST_ID = `${SITE_URL}/#therapist`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PARENT_CLINIC_ID = 'https://peyvandamn.ir/#organization';
const PARENT_CLINIC_URL = 'https://peyvandamn.ir';
const PARENT_THERAPIST_URL = 'https://peyvandamn.ir/author/mkhoini/';

const HOME_TITLE = 'مرکز تخصصی زوج درمان | مهناز خوینی (نظام ۱۴۱۴۰۸۳)';
const HOME_DESCRIPTION =
  'زوج درمانگر خوب در تهران (حضوری) و مشاوره آنلاین زوج درمانی در کرج، مشهد، اصفهان و خارج کشور با مهناز خوینی. درمان خیانت، طلاق عاطفی و خودسنجی رایگان رابطه.';

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
      'این صفحه وجود ندارد یا آدرس آن تغییر کرده است. از صفحه اصلی، بانک مقالات یا ابزارهای خودسنجی رابطه بازدید کنید.',
    path,
    robots: NOT_FOUND_ROBOTS,
    breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'صفحه یافت نشد' }],
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
  const article = getArticleMetaBySlug(slug);
  if (!article) return [];
  const keywords = Array.from(
    new Set([
      article.category,
      ...(article.targetKeywords || []),
      'زوج درمانی',
      'مهناز خوینی',
      'روانشناسی بالینی',
    ])
  );
  return [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: article.h1 || article.title,
      description: article.description,
      image: absoluteUrl(DEFAULT_IMAGE),
      inLanguage: 'fa-IR',
      mainEntityOfPage: { '@id': url },
      datePublished: '2025-01-15T08:00:00+03:30',
      dateModified: '2026-11-12T10:00:00+03:30',
      wordCount: article.wordCount,
      keywords,
      author: {
        '@type': 'Person',
        '@id': THERAPIST_ID,
        name: 'مهناز خوینی',
        jobTitle: 'کارشناس ارشد روانشناسی بالینی و زوج درمانگر',
        url: `${SITE_URL}/about`,
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#clinic`,
        name: 'مرکز تخصصی زوج درمان مهناز خوینی',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo-512.png`,
          width: 512,
          height: 512,
        },
      },
      articleSection: article.category,
    },
  ];
}

function serviceSchema(slug: string, url: string): Record<string, unknown>[] {
  const service = getServiceMetaBySlug(slug);
  if (!service) return [];
  return [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: service.h1 || service.title,
      description: service.description,
      url,
      inLanguage: 'fa-IR',
      category: service.category || 'خدمات تخصصی زوج‌درمانی',
      serviceType: 'زوج‌درمانی، مشاوره خانواده و روانشناسی بالینی',
      provider: {
        '@type': 'MedicalBusiness',
        '@id': `${SITE_URL}/#clinic`,
        name: 'مرکز تخصصی زوج درمان مهناز خوینی',
        telephone: '+989199087264',
        parentOrganization: { '@id': PARENT_CLINIC_ID },
      },
      areaServed: ['تهران', 'کرج', 'اصفهان', 'کرمان', 'شیراز', 'مشهد', 'سراسر ایران', 'خارج از کشور'],
      availableLanguage: 'fa-IR',
      ...(service.relatedArticleSlugs && service.relatedArticleSlugs.length > 0
        ? {
            isRelatedTo: service.relatedArticleSlugs.map((aSlug) => absoluteUrl(`/articles/${aSlug}`)),
          }
        : {}),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01',
      },
    },
  ];
}

function testSchema(testSlug: string, url: string): Record<string, unknown>[] {
  const test = getTestMetaBySlug(testSlug);
  if (!test) return [];
  return [
    {
      '@type': 'Quiz',
      '@id': `${url}#quiz`,
      name: test.seoTitle,
      description: test.seoDescription,
      url,
      inLanguage: 'fa-IR',
      about: { '@type': 'Thing', name: 'سلامت رابطه زناشویی و زوج درمانی' },
      educationalLevel: 'عمومی',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock',
      },
    },
  ];
}

function toolsHubSchema(url: string): Record<string, unknown>[] {
  return [
    {
      '@type': 'WebApplication',
      '@id': `${url}#app`,
      name: 'سامانه خودسنجی و تست آنلاین رابطه مهناز خوینی',
      alternateName: ['تست زوج درمانی آنلاین', 'آزمون انریچ آنلاین', 'تست سلامت رابطه زناشویی'],
      description:
        'مجموعه ابزارهای غیرتشخیصی و آموزشی خودسنجی رابطه شامل پرسشنامه رضایت زناشویی انریچ، ارزیابی آسیب خیانت، سبک دلبستگی و ۴ الگوی گاتمن.',
      url,
      applicationCategory: 'HealthApplication',
      operatingSystem: 'All',
      inLanguage: 'fa-IR',
      author: {
        '@type': 'Person',
        '@id': THERAPIST_ID,
        name: 'مهناز خوینی',
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock',
      },
    },
  ];
}

function homeJsonLdSchema(url: string): Record<string, unknown>[] {
  return [
    {
      '@type': ['MedicalClinic', 'Organization'],
      '@id': PARENT_CLINIC_ID,
      name: 'کلینیک تخصصی روان‌شناسی پیوند امن',
      alternateName: ['پيوند امن', 'مهناز خوینی زوج درمانگر | پيوند امن'],
      url: PARENT_CLINIC_URL,
      telephone: '+989199087264',
      sameAs: [
        SITE_URL,
        'https://maps.app.goo.gl/b9dx9xeA69wJJPzd6',
        'https://instagram.com/mahnaz.khoini',
        'https://t.me/MKHOINI',
        'https://www.aparat.com/Mahnaz.khoini_psychology',
        'https://youtube.com/@mahnaz.khoini',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${url}#website`,
      url,
      name: 'مرکز تخصصی زوج درمان مهناز خوینی',
      alternateName: ['Zoojdarman', 'zoojdarman.ir'],
      description: 'مرکز تخصصی زوج‌درمانی، مشاوره خیانت، درمان طلاق عاطفی و روان‌شناسی روابط؛ بخش تخصصی زوج‌درمانی کلینیک پیوند امن با مهناز خوینی (پروانه نظام ۱۴۱۴۰۸۳)',
      inLanguage: 'fa-IR',
      publisher: { '@id': PARENT_CLINIC_ID },
      creator: { '@id': THERAPIST_ID },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/articles?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Psychologist',
      '@id': THERAPIST_ID,
      name: 'مهناز خوینی',
      alternateName: ['Mahnaz Khoini'],
      jobTitle: 'زوج درمانگر بالینی و مشاور خانواده',
      description:
        'کارشناس ارشد روانشناسی بالینی، متخصص زوج درمان با رویکرد هیجان‌مدار (EFT) و طرحواره‌درمانی، مسئول فنی کلینیک پیوند امن با پروانه نظام روانشناسی ۱۴۱۴۰۸۳',
      identifier: '1414083',
      url: `${SITE_URL}/about`,
      image: absoluteUrl(DEFAULT_IMAGE),
      telephone: '+989199087264',
      email: 'Khoini.1988@gmail.com',
      worksFor: { '@id': PARENT_CLINIC_ID },
      memberOf: [
        {
          '@type': 'Organization',
          name: 'سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران',
          url: 'https://pcoiran.ir',
        },
        { '@id': PARENT_CLINIC_ID },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'پروانه اشتغال تخصصی',
        recognizedBy: {
          '@type': 'Organization',
          name: 'سازمان نظام روان‌شناسی و مشاوره',
        },
        validIn: {
          '@type': 'AdministrativeArea',
          name: 'ایران',
        },
      },
      knowsAbout: [
        'زوج‌درمانی هیجان‌مدار (EFT)',
        'طرحواره‌درمانی زوجین',
        'مداخله در بحران و ترومای خیانت',
        'درمان طلاق عاطفی و بازسازی صمیمیت',
        'ارزیابی و مشاوره پیش از ازدواج',
        'زوج‌درمانی آنلاین برای ایرانیان خارج از کشور',
        'روان‌شناسی بالینی و دلبستگی بزرگسالان',
      ],
      sameAs: [
        'https://maps.app.goo.gl/b9dx9xeA69wJJPzd6',
        PARENT_CLINIC_URL,
        PARENT_THERAPIST_URL,
        'https://instagram.com/mahnaz.khoini',
        'https://t.me/MKHOINI',
        'https://www.aparat.com/Mahnaz.khoini_psychology',
        'https://youtube.com/@mahnaz.khoini',
      ],
      hasMap: 'https://maps.app.goo.gl/b9dx9xeA69wJJPzd6',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'منطقه ۲، محدوده صادقیه – پونک، کلینیک پیوند امن',
        addressLocality: 'تهران',
        addressRegion: 'منطقه ۲',
        addressCountry: 'IR',
      },
    },
    {
      '@type': 'MedicalBusiness',
      '@id': `${url}#clinic`,
      name: 'مرکز تخصصی زوج درمان مهناز خوینی',
      alternateName: ['کلینیک پیوند امن', 'سامانه تخصصی زوج‌درمانی کلینیک پیوند امن'],
      description:
        'پرتال تخصصی زوج درمان، مشاوره خیانت، درمان طلاق عاطفی و حل تعارضات زناشویی با رویکرد هیجان‌مدار (EFT) زیرمجموعه کلینیک پیوند امن تحت مسئولیت فنی مهناز خوینی (نظام ۱۴۱۴۰۸۳)',
      url,
      parentOrganization: { '@id': PARENT_CLINIC_ID },
      branchOf: { '@id': PARENT_CLINIC_ID },
      hasMap: 'https://maps.app.goo.gl/b9dx9xeA69wJJPzd6',
      sameAs: [
        'https://maps.app.goo.gl/b9dx9xeA69wJJPzd6',
        PARENT_CLINIC_URL,
        'https://instagram.com/mahnaz.khoini',
        'https://www.aparat.com/Mahnaz.khoini_psychology',
        'https://youtube.com/@mahnaz.khoini',
      ],
      logo: `${SITE_URL}/images/logo-512.png`,
      image: absoluteUrl(DEFAULT_IMAGE),
      medicalSpecialty: 'Psychological',
      telephone: '+989199087264',
      email: 'Khoini.1988@gmail.com',
      priceRange: '$$',
      currenciesAccepted: 'IRR, USD, EUR, CAD, GBP, AED',
      paymentAccepted:
        'کارت‌خوان (POS)، واریز بانکی، پی‌پال (PayPal)، وایز (Wise)، کردیت‌کارت بین‌المللی، پذیرش فاکتور بیمه تکمیلی',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'خدمات مرکز تخصصی زوج درمان مهناز خوینی',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'زوج‌درمانی تخصصی حضوری و آنلاین (EFT)',
            description: 'جلسات ارزیابی و درمان تعارضات زناشویی، طلاق عاطفی و احیای صمیمیت بر مبنای پروتکل هیجان‌مدار و گاتمن',
            url: `${SITE_URL}/services/couples-therapy`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'مشاوره تخصصی مدیریت شوک و بحران خیانت زناشویی',
            description: 'مدیریت ترومای خیانت، بازسازی اعتماد و تصمیم‌گیری شفاف طبق موازین اخلاق حرفه‌ای نظام روان‌شناسی',
            url: `${SITE_URL}/services/infidelity-counseling`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'مشاوره طلاق آگاهانه و کم‌آسیب',
            description: 'مدیریت بحران عاطفی جدایی، کاهش آسیب‌های روانشناختی فرزندان و همراهی در تصمیم‌گیری عقلانی',
            url: `${SITE_URL}/services/divorce-counseling`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'مشاوره پیش از ازدواج و ارزیابی تناسب شخصیتی',
            description: 'ارزیابی تخصصی بالینی، تست انریچ و تحلیل سبک‌های دلبستگی و انتظارات مشترک پیش از ازدواج',
            url: `${SITE_URL}/services/premarital-counseling`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'مشاوره آنلاین زوج‌درمانی ویژه ایرانیان خارج از کشور',
            description: 'جلسات آنلاین تصویری با تطبیق منطقه زمانی محلی (کانادا، آمریکا، اروپا، استرالیا، امارات)',
            url: `${SITE_URL}/services/online-counseling`,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
          {
            '@type': 'Offer',
            name: 'گروه‌درمانی الگوهای تکراری در روابط عاطفی',
            description: 'تحلیل الگوهای ناخودآگاه تکرارشونده در انتخاب شریک و یادگیری مرزبندی سالم',
            url: `${SITE_URL}/services/relationship-patterns-therapy`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
          },
        ],
      },
      founder: { '@id': THERAPIST_ID },
      employee: [{ '@id': THERAPIST_ID }],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'پروانه اشتغال تخصصی روانشناسی بالینی و زوج‌درمانی',
          identifier: '1414083',
          recognizedBy: {
            '@type': 'Organization',
            name: 'سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران',
            url: 'https://pcoiran.ir',
          },
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'مسئولیت فنی کلینیک تخصصی روان‌شناسی پیوند امن',
          recognizedBy: {
            '@type': 'Organization',
            name: 'سازمان نظام روان‌شناسی و مشاوره',
          },
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.7208,
        longitude: 51.3347,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
          opens: '09:00',
          closes: '21:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Thursday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+989199087264',
          contactType: 'reservations',
          areaServed: ['تهران', 'کرج', 'اصفهان', 'کرمان', 'شیراز', 'مشهد', 'IR', 'خارج از کشور'],
          availableLanguage: ['fa', 'en'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+982144600980',
          contactType: 'customer support',
          areaServed: 'IR',
          availableLanguage: ['fa'],
        },
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'منطقه ۲، محدوده صادقیه – پونک، کلینیک پیوند امن',
        addressLocality: 'تهران',
        addressRegion: 'منطقه ۲',
        postalCode: '14517',
        addressCountry: 'IR',
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${url}#sitelinks`,
      name: 'خدمات و بخش‌های اصلی مرکز زوج درمان',
      itemListElement: [
        {
          '@type': 'SiteNavigationElement',
          position: 1,
          name: 'زوج درمانگر در تهران (حضوری و آنلاین)',
          url: `${SITE_URL}/services/couples-therapy`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 2,
          name: 'مشاوره خیانت و بازسازی اعتماد',
          url: `${SITE_URL}/services/infidelity-counseling`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 3,
          name: 'خودسنجی و تست آنلاین رابطه',
          url: `${SITE_URL}/tools`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 4,
          name: 'تعرفه جلسات ۱۴۰۴',
          url: `${SITE_URL}/fees`,
        },
        {
          '@type': 'SiteNavigationElement',
          position: 5,
          name: 'بانک مقالات تخصصی رابطه',
          url: `${SITE_URL}/articles`,
        },
      ],
    },
  ];
}

function videosJsonLdSchema(url: string): Record<string, unknown>[] {
  return [
    {
      '@type': 'CollectionPage',
      '@id': `${url}#collection`,
      name: 'ویدیوهای آموزشی و کارگاه‌های روان‌شناسی مهناز خوینی',
      url,
      inLanguage: 'fa-IR',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: VIDEOS_DATA.map((v, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'CreativeWork',
            '@id': `${url}#video-${v.id}`,
            name: v.title,
            description: v.description,
            url: v.youtubeUrl || v.aparatUrl,
            inLanguage: 'fa-IR',
            author: { '@id': THERAPIST_ID },
          },
        })),
      },
    },
  ];
}

export function seoForRoute(route: RouteState): SeoPage {
  switch (route.type) {
    case 'videos':
      return {
        title: 'ویدیوهای آموزشی و برنامه‌های آپارات و یوتیوب | مهناز خوینی',
        description:
          'مشاهده کارگاه‌ها و فیلم‌های آموزشی زوج‌درمانی، مشاوره خیانت، درمان طلاق عاطفی و مهارت‌های ارتباطی مهناز خوینی در آپارات و یوتیوب.',
        path: '/videos',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'ویدیوهای آموزشی و رسانه' }],
        jsonLd: videosJsonLdSchema(absoluteUrl('/videos')),
      };

    case 'home': {
      const path = '/';
      const hasSearchQuery =
        typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('s');
      return {
        title: HOME_TITLE,
        description: HOME_DESCRIPTION,
        path,
        robots: hasSearchQuery ? NOT_FOUND_ROBOTS : DEFAULT_ROBOTS,
        jsonLd: homeJsonLdSchema(absoluteUrl(path)),
      };
    }

    case 'article': {
      const article = getArticleMetaBySlug(route.slug);
      if (!article) return notFoundSeo();
      const path = `/articles/${article.slug}`;
      return {
        title: withBrand(article.title),
        description: article.description,
        path,
        ogType: 'article',
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'راهنمای رابطه و مقالات', path: '/articles' },
          { name: article.h1 || article.title },
        ],
        jsonLd: articleSchema(article.slug, absoluteUrl(path)),
      };
    }

    case 'articles':
      return {
        title: 'بانک مقالات تخصصی زوج درمان، خیانت و بهبود روابط عاطفی | مهناز خوینی',
        description:
          '۶۳ مقاله تخصصی زوج درمان، خیانت، طلاق عاطفی، سردی رابطه و حل تعارض با پروتکل‌های EFT و گاتمن؛ مطالعه رایگان و جستجوی موضوعی.',
        path: '/articles',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'مقالات و راهنما' }],
      };

    case 'service': {
      const service = getServiceMetaBySlug(route.slug);
      if (!service) return notFoundSeo();
      const path = `/services/${service.slug}`;
      return {
        title: withBrand(service.title),
        description: service.description,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'خدمات تخصصی', path: '/services' },
          { name: service.h1 || service.title },
        ],
        jsonLd: serviceSchema(service.slug, absoluteUrl(path)),
      };
    }

    case 'services':
      return {
        title: 'خدمات تخصصی زوج درمان، مشاوره خیانت و بهبود روابط عاطفی | مهناز خوینی',
        description:
          '۶ خدمت تخصصی زوج درمان هیجان‌مدار، مشاوره خیانت، طلاق آگاهانه، پیش از ازدواج، الگوهای رابطه و مشاوره آنلاین با مهناز خوینی.',
        path: '/services',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'خدمات تخصصی' }],
      };

    case 'singleTest': {
      const test = getTestMetaBySlug(route.testSlug);
      if (!test) return notFoundSeo();
      const path = `/tests/${test.slug}`;
      return {
        title: test.seoTitle,
        description: test.seoDescription,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'خودسنجی رابطه', path: '/tools' },
          { name: test.title },
        ],
        jsonLd: testSchema(test.slug, absoluteUrl(path)),
      };
    }

    case 'tools':
      return {
        title: 'تست زوج درمانی آنلاین رایگان و خودسنجی رابطه | مهناز خوینی',
        description:
          'سامانه خودسنجی آنلاین رابطه مهناز خوینی: انریچ، آسیب خیانت (PISD)، الگوی گاتمن، سبک دلبستگی و ۵ زبان عشق.',
        path: '/tools',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'تست زوج درمانی آنلاین' }],
        jsonLd: toolsHubSchema(absoluteUrl('/tools')),
      };

    case 'fees':
      return {
        title: 'تعرفه و هزینه زوج درمانی ۱۴۰۴ و بیمه تکمیلی | مهناز خوینی',
        description:
          'تعرفه مصوب زوج درمانی، مشاوره خیانت و پیش از ازدواج، شرایط فاکتور بیمه تکمیلی، پرداخت ارزی و راهنمای برنامه‌ریزی جلسات.',
        path: '/fees',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'تعرفه و هزینه جلسات' }],
      };

    case 'topics':
      return {
        title: 'دانشنامه موضوعات و پرسش‌های زوج‌درمانی | مهناز خوینی',
        description:
          'راهنمای جامع موضوعات و پرسش‌های مراجعان زوج‌درمانی؛ انتخاب مقاله یا خدمت مناسب مشاجرات مکرر، خیانت، سردی رابطه و تصمیم‌گیری درباره طلاق.',
        path: '/topics',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'موضوعات پرجستجو' }],
      };

    case 'about':
      return {
        title: 'درباره مهناز خوینی | زوج درمانگر بالینی (نظام ۱۴۱۴۰۸۳)',
        description:
          'مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی (پروانه ۱۴۱۴۰۸۳)، مسئول فنی کلینیک پیوند امن و زوج‌درمانگر رویکرد EFT؛ رزرو مشاوره حضوری تهران و آنلاین.',
        path: '/about',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'درباره مهناز خوینی' }],
        jsonLd: [
          {
            '@type': 'ProfilePage',
            '@id': `${absoluteUrl('/about')}#profile`,
            url: absoluteUrl('/about'),
            inLanguage: 'fa-IR',
            mainEntity: { '@id': THERAPIST_ID },
          },
        ],
      };

    case 'process':
      return {
        title: 'مراحل ۴ گانه زوج درمان هیجان‌مدار (EFT) | مهناز خوینی',
        description:
          'فرآیند گام‌به‌گام زوج درمان: ارزیابی و شناخت چرخه، تثبیت هیجان، گفت‌وگوی عمیق و تثبیت دستاوردها برای پایداری رابطه زناشویی.',
        path: '/process',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'مراحل درمان' }],
      };

    case 'faq':
      return {
        title: 'پرسش‌های متداول جلسات زوج درمان و مشاوره رابطه | مهناز خوینی',
        description:
          'پاسخ پرتکرارترین پرسش‌های مراجعان درباره مدت و تعداد جلسات زوج درمان، محرمانگی، مشاوره آنلاین، خیانت و شرایط نوبت‌دهی.',
        path: '/faq',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'پرسش‌های متداول' }],
      };

    case 'contact':
      return {
        title: 'رزرو وقت و تماس با مرکز تخصصی زوج درمان مهناز خوینی | تهران و آنلاین',
        description:
          'رزرو وقت حضوری در تهران و مشاوره آنلاین سراسر جهان؛ آدرس کلینیک پیوند امن، ساعات کاری، تماس مستقیم و هماهنگی نوبت.',
        path: '/contact',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'تماس و نوبت‌دهی' }],
      };

    case 'bestTherapist': {
      const path = '/best-couples-therapist-tehran';
      return {
        title: 'معیارهای انتخاب زوج درمانگر خوب در تهران و آنلاین | مهناز خوینی',
        description:
          'راهنمای انتخاب زوج درمانگر خوب در تهران و آنلاین؛ پروانه رسمی ۱۴۱۴۰۸۳ نظام روانشناسی، پروتکل‌های تخصصی EFT و گاتمن، کلینیک منطقه ۲ تهران و مشاوره آنلاین.',
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'راهنمای انتخاب زوج درمانگر' },
        ],
        jsonLd: [
          {
            '@type': 'MedicalWebPage',
            '@id': `${absoluteUrl(path)}#webpage`,
            name: 'راهنمای انتخاب زوج درمانگر خوب در تهران و آنلاین',
            description:
              'راهنمای انتخاب زوج درمانگر در تهران و آنلاین؛ پروانه رسمی ۱۴۱۴۰۸۳ نظام روانشناسی، پروتکل‌های تخصصی EFT و مشاوره آنلاین با مهناز خوینی.',
            url: absoluteUrl(path),
            inLanguage: 'fa-IR',
            about: { '@id': THERAPIST_ID },
          },
        ],
      };
    }

    case 'privacy':
      return {
        title: 'حریم خصوصی و محرمانگی | سامانه زوج درمان zoojdarman.ir',
        description:
          'تعهد مرکز تخصصی زوج درمان مهناز خوینی به محرمانگی جلسات بالینی، حفظ داده‌های مراجعان و تطابق با موازین سازمان نظام روان‌شناسی و مشاوره.',
        path: '/privacy-policy',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'حریم خصوصی' }],
      };

    case 'city': {
      const city = getCityMetaBySlug(route.citySlug);
      if (!city) return notFoundSeo();
      const path = `/cities/${city.slug}`;
      const url = absoluteUrl(path);
      return {
        title: city.title,
        description: city.metaDescription,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'مراکز و شهرهای ایران', path: '/cities' },
          { name: `زوج درمانی در ${city.cityName}` },
        ],
        jsonLd: [
          {
            '@type': 'Service',
            '@id': `${url}#service`,
            name: `مشاوره آنلاین زوج درمانی و درمان خیانت در ${city.cityName}`,
            description: city.metaDescription,
            url,
            inLanguage: 'fa-IR',
            serviceType: 'زوج‌درمانی آنلاین، مشاوره خیانت و حل تعارضات زناشویی',
            provider: {
              '@type': 'MedicalBusiness',
              '@id': `${SITE_URL}/#clinic`,
              name: 'مرکز تخصصی زوج درمان مهناز خوینی',
              telephone: '+989199087264',
              parentOrganization: { '@id': PARENT_CLINIC_ID },
            },
            areaServed: {
              '@type': 'City',
              name: city.cityName,
            },
            availableLanguage: 'fa-IR',
          },
        ],
      };
    }

    case 'cities':
      return {
        title: 'پایگاه سراسری پوشش زوج درمانی آنلاین در شهرهای ایران | مهناز خوینی',
        description:
          'ارائه خدمات تخصصی مشاوره آنلاین زوج درمانی، درمان خیانت و طلاق عاطفی برای تهران، کرج، مشهد، اصفهان، شیراز، تبریز، اهواز، رشت، کرمان و سراسر ایران.',
        path: '/cities',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'مراکز و شهرهای ایران' }],
      };

    case 'country': {
      const country = getCountryMetaBySlug(route.countrySlug);
      if (!country) return notFoundSeo();
      const path = `/countries/${country.slug}`;
      const url = absoluteUrl(path);
      return {
        title: country.title,
        description: country.metaDescription,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'کشورها و ایرانیان خارج از کشور', path: '/countries' },
          { name: `زوج درمانی آنلاین در ${country.countryNameFa}` },
        ],
        jsonLd: [
          {
            '@type': 'Service',
            '@id': `${url}#service`,
            name: `مشاوره آنلاین زوج درمانی برای ایرانیان مقیم ${country.countryNameFa}`,
            description: country.metaDescription,
            url,
            inLanguage: 'fa-IR',
            serviceType: 'زوج‌درمانی آنلاین بین‌المللی به زبان فارسی',
            provider: {
              '@type': 'MedicalBusiness',
              '@id': `${SITE_URL}/#clinic`,
              name: 'مرکز تخصصی زوج درمان مهناز خوینی',
              telephone: '+989199087264',
              parentOrganization: { '@id': PARENT_CLINIC_ID },
            },
            areaServed: {
              '@type': 'Country',
              name: country.countryNameFa,
            },
            availableLanguage: 'fa-IR',
          },
        ],
      };
    }

    case 'countries':
      return {
        title: 'زوج درمانی آنلاین برای ایرانیان خارج از کشور | مهناز خوینی',
        description:
          'ارائه خدمات تخصصی مشاوره زوج درمانی آنلاین فارسی‌زبان برای ایرانیان مقیم کانادا، آمریکا، آلمان، انگلیس، استرالیا، امارات (دبی)، سوئد و ترکیه با مهناز خوینی.',
        path: '/countries',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'کشورها و ایرانیان خارج از کشور' }],
      };

    case '404':
    default:
      return notFoundSeo();
  }
}
