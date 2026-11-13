import { getArticleBySlug } from './data/articles';
import { getServiceBySlug } from './data/services';
import { getTestBySlug } from './data/testsData';
import { getCityBySlug } from './data/citiesData';
import { getCountryBySlug } from './data/countriesData';
import { VIDEOS_DATA } from './data/videosData';
import type { FaqItem, RouteState } from './types';

/**
 * ماژول مرکزی سئوی سایت (Client-Side SEO)
 *
 * برای هر مسیر، عنوان، توضیحات متا، canonical، برچسب‌های Open Graph / Twitter
 * و داده‌های ساختاریافته JSON-LD را به‌روزرسانی می‌کند. پیش از وجود این ماژول
 * تمام صفحات canonical و متا دیسکریپشن صفحه اصلی را داشتند.
 */

export const SITE_URL = 'https://zoojdarman.ir';
export const SITE_NAME = 'مرکز تخصصی زوج درمان مهناز خوینی (zoojdarman.ir)';

const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
const NOT_FOUND_ROBOTS = 'noindex, follow';
const DEFAULT_IMAGE = '/images/og-cover.jpg';
const THERAPIST_ID = `${SITE_URL}/#therapist`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const HOME_TITLE = 'مرکز تخصصی زوج درمان | مهناز خوینی (نظام ۱۴۱۴۰۸۳)';
const HOME_DESCRIPTION =
  'زوج درمانگر خوب در تهران (حضوری) و مشاوره آنلاین زوج درمانی در کرج، مشهد، اصفهان و خارج کشور با مهناز خوینی. درمان خیانت، طلاق عاطفی و تست آنلاین رایگان.';

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
      datePublished: '2025-01-15T08:00:00+03:30',
      dateModified: '2026-11-12T10:00:00+03:30',
      keywords: [
        article.category,
        'زوج درمان',
        'زوج درمانی',
        'زوج درمانگر',
        'زوج درمان خوب',
        'مهناز خوینی',
        'روانشناسی بالینی'
      ],
      author: {
        '@type': 'Person',
        '@id': THERAPIST_ID,
        name: 'مهناز خوینی',
        jobTitle: 'کارشناس ارشد روانشناسی بالینی و زوج درمانگر',
        url: `${SITE_URL}/#bio`
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#clinic`,
        name: 'مرکز تخصصی زوج درمان مهناز خوینی',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo-512.png`,
          width: 512,
          height: 512
        }
      },
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
      serviceType: 'زوج‌درمانی، مشاوره خانواده و روانشناسی بالینی',
      provider: {
        '@type': 'MedicalBusiness',
        '@id': `${SITE_URL}/#clinic`,
        name: 'مرکز تخصصی زوج درمان مهناز خوینی',
        telephone: '+989199087264'
      },
      areaServed: ['تهران', 'کرج', 'اصفهان', 'کرمان', 'شیراز', 'مشهد', 'سراسر ایران', 'خارج از کشور'],
      availableLanguage: 'fa-IR',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01'
      }
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
      about: { '@type': 'Thing', name: 'سلامت رابطه زناشویی و زوج درمانی' },
      educationalLevel: 'عمومی',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IRR',
        availability: 'https://schema.org/InStock'
      }
    },
  ];
}

function toolsHubSchema(url: string): Record<string, unknown>[] {
  return [
    {
      '@type': 'WebApplication',
      '@id': `${url}#app`,
      name: 'سامانه تست زوج درمانی آنلاین رایگان مهناز خوینی',
      alternateName: [
        'تست زوج درمانی',
        'تست زوج درمانی آنلاین',
        'تست آنلاین زوج درمانی',
        'آزمون انریچ آنلاین',
        'تست خیانت آنلاین',
        'تست سلامت رابطه زناشویی'
      ],
      description: 'مجموعه ابزارهای سنجش و تست زوج درمانی آنلاین رایگان شامل آزمون رضایت زناشویی انریچ، تست ترومای خیانت، سبک دلبستگی و طلاق عاطفی با نمره و تحلیل بالینی فوری.',
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
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '1540',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'کاربر آزمون انریچ'
          },
          datePublished: '2025-12-05',
          reviewBody: 'تحلیل تست انریچ و آزمون ترومای خیانت بسیار علمی و دقیق بود و به شفافیت مسائل رابطه‌مان کمک زیادی کرد.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
          }
        }
      ],
    },
  ];
}

function homeJsonLdSchema(url: string): Record<string, unknown>[] {
  return [
    {
      '@type': 'WebSite',
      '@id': `${url}#website`,
      url,
      name: 'مرکز تخصصی زوج درمان مهناز خوینی',
      alternateName: [
        'زوج درمان',
        'زوج درمان خوب در تهران',
        'زوج درمان گر',
        'زوج درمان اصفهان',
        'زوج درمان خوب',
        'زوج درمان کرمان',
        'زوج درمان تهران',
        'زوج درمان خوب در کرج',
        'زوج درمانی',
        'زوج درمانگر',
        'سایت زوج درمان',
        'مرکز زوج درمان',
        'کلینیک زوج درمانی',
        'بهترین زوج درمانگر تهران',
        'زوج درمانگر آنلاین',
        'مشاوره خیانت',
        'مشاوره روانشناسی آنلاین',
        'روانشناس آنلاین',
        'Zoojdarman',
        'zoojdarman.ir'
      ],
      description: 'سامانه و مرکز تخصصی زوج درمان، زوج درمان خوب در تهران، کرج، اصفهان، کرمان، شیراز و مشهد و آنلاین با مهناز خوینی',
      inLanguage: 'fa-IR',
      publisher: { '@id': THERAPIST_ID },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/articles?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'Psychologist',
      '@id': THERAPIST_ID,
      name: 'مهناز خوینی',
      alternateName: [
        'Mahnaz Khoini',
        'دکتر مهناز خوینی',
        'زوج درمان گر مهناز خوینی',
        'زوج درمانگر مهناز خوینی',
        'بهترین زوج درمانگر تهران',
        'زوج درمان خوب در تهران',
        'زوج درمان خوب در کرج',
        'روانشناس بالینی مهناز خوینی'
      ],
      jobTitle: 'زوج درمانگر بالینی و مشاور خانواده',
      description: 'کارشناس ارشد روانشناسی بالینی، متخصص زوج درمان با رویکرد هیجان‌مدار (EFT) و طرحواره‌درمانی، مسئول فنی کلینیک پیوند امن با پروانه نظام روانشناسی ۱۴۱۴۰۸۳',
      identifier: '1414083',
      url: `${url}#bio`,
      image: absoluteUrl(DEFAULT_IMAGE),
      telephone: '+989199087264',
      email: 'Khoini.1988@gmail.com',
      memberOf: {
        '@type': 'Organization',
        name: 'سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران',
        url: 'https://pcoiran.ir'
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'پروانه اشتغال تخصصی',
        recognizedBy: {
          '@type': 'Organization',
          name: 'سازمان نظام روان‌شناسی و مشاوره'
        },
        validIn: {
          '@type': 'AdministrativeArea',
          name: 'ایران'
        }
      },
      award: 'بیش از ۱۵,۰۰۰ ساعت مشاوره بالینی تخصصی زوجین و خانواده',
      knowsAbout: [
        'زوج درمان',
        'زوج درمان خوب در تهران',
        'زوج درمان گر',
        'زوج درمان اصفهان',
        'زوج درمان خوب',
        'زوج درمان کرمان',
        'زوج درمان تهران',
        'زوج درمان خوب در کرج',
        'زوج درمانی',
        'زوج درمانگر',
        'زوج درمانگر خوب در تهران',
        'زوج درمانگر آنلاین',
        'زوج درمانگر خوب',
        'زوج درمانی چیست',
        'زوج درمانگر شیراز',
        'زوج درمانگر مشهد',
        'مشاوره خیانت',
        'مشاوره خیانت پرسش و پاسخ',
        'مشاوره خیانت زن',
        'مشاوره خیانت همسر',
        'مشاوره خیانت مرد به زن',
        'مشاوره خیانت در مشهد',
        'مشاوره خیانت زن به شوهر',
        'مشاوره خیانت تلفنی رایگان',
        'مشاوره روانشناسی آنلاین',
        'مشاوره آنلاین',
        'مشاوره به انگلیسی',
        'مشاوره رایگان',
        'مشاوره تلفنی رایگان',
        'مشاوره روانشناسی',
        'روانشناس به انگلیسی',
        'روانشناس',
        'روانشناسی به انگلیسی',
        'روانشناسی',
        'روانشناس آنلاین',
        'روانشناسی پول',
        'روانشناسی بالینی',
        'روانشناسی بالینی چیست',
        'حل تعارضات زناشویی',
        'درمان طلاق عاطفی',
        'EFT هیجان مدار',
        'سکس تراپی'
      ],
      sameAs: [
        'https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA',
        'https://peyvandamn.ir',
        'https://instagram.com/mahnaz.khoini',
        'https://t.me/MKHOINI',
        'https://www.aparat.com/Mahnaz.khoini_psychology',
        'https://youtube.com/@mahnaz.khoini'
      ],
      hasMap: 'https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'فلکه دوم صادقیه، بزرگراه اشرفی اصفهانی',
        addressLocality: 'تهران',
        addressRegion: 'منطقه ۲',
        addressCountry: 'IR',
      },
    },
    {
      '@type': 'MedicalBusiness',
      '@id': `${url}#clinic`,
      name: 'مرکز تخصصی زوج درمان مهناز خوینی',
      alternateName: [
        'کلینیک زوج درمانی پیوند امن',
        'مرکز زوج درمان تهران',
        'مرکز تخصصی روانشناسی و زوج‌درمانی غرب تهران',
        'بهترین مرکز زوج درمان تهران'
      ],
      description: 'مرکز تخصصی زوج درمان، مشاوره خیانت، درمان طلاق عاطفی و حل تعارضات زناشویی با رویکرد هیجان‌مدار (EFT) تحت مسئولیت فنی مهناز خوینی با پروانه نظام روانشناسی ۱۴۱۴۰۸۳',
      url,
      hasMap: 'https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA',
      sameAs: [
        'https://maps.app.goo.gl/P8KDPPDp9mQ6nEbWA',
        'https://peyvandamn.ir',
        'https://instagram.com/mahnaz.khoini',
        'https://www.aparat.com/Mahnaz.khoini_psychology',
        'https://youtube.com/@mahnaz.khoini'
      ],
      logo: `${SITE_URL}/images/logo-512.png`,
      image: absoluteUrl(DEFAULT_IMAGE),
      medicalSpecialty: 'Psychological',
      telephone: '+989199087264',
      email: 'Khoini.1988@gmail.com',
      priceRange: '$$',
      currenciesAccepted: 'IRR, USD, EUR, CAD, GBP, AED',
      paymentAccepted: 'کارت‌خوان (POS)، وجه نقد، کارت به کارت شتابی، واریز بانکی آنلاین، پی‌پال (PayPal)، وایز (Wise)، کردیت‌کارت بین‌المللی، ارز دیجیتال تتر (USDT)، پذیرش فاکتور بیمه تکمیلی',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'کاتالوگ خدمات و تعرفه‌های مرکز زوج درمان مهناز خوینی',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'زوج‌درمانی تخصصی حضوری و آنلاین (EFT)',
            description: 'جلسات ارزیابی و درمان تعارضات زناشویی، طلاق عاطفی و احیای صمیمیت بر مبنای پروتکل هیجان‌مدار و گاتمن',
            url: `${SITE_URL}/services/couples-therapy`,
            priceCurrency: 'IRR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'IRR',
              description: 'تعرفه هر جلسه طبق مصوبه سازمان نظام روان‌شناسی با امکان استرداد بیمه تکمیلی'
            },
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'زوج‌درمانی هیجان‌مدار (EFT)',
              url: `${SITE_URL}/services/couples-therapy`
            }
          },
          {
            '@type': 'Offer',
            name: 'مشاوره تخصصی مدیریت شوک و بحران خیانت زناشویی',
            description: 'مدیریت ترومای خیانت، بازسازی اعتماد و تصمیم‌گیری شفاف در محیطی کاملاً محرمانه',
            url: `${SITE_URL}/services/infidelity-counseling`,
            priceCurrency: 'IRR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'IRR',
              description: 'جلسات انفرادی و مشترک زوجین با محرمانگی ۱۰۰٪'
            },
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'مشاوره خیانت زناشویی',
              url: `${SITE_URL}/services/infidelity-counseling`
            }
          },
          {
            '@type': 'Offer',
            name: 'مشاوره طلاق آگاهانه و کم‌آسیب',
            description: 'مدیریت بحران عاطفی جدایی، کاهش آسیب‌های روانشناختی فرزندان و همراهی در تصمیم‌گیری عقلانی',
            url: `${SITE_URL}/services/divorce-counseling`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'مشاوره طلاق و جدایی',
              url: `${SITE_URL}/services/divorce-counseling`
            }
          },
          {
            '@type': 'Offer',
            name: 'مشاوره پیش از ازدواج و ارزیابی تناسب شخصیتی',
            description: 'ارزیابی تخصصی بالینی، تست انریچ و تحلیل سبک‌های دلبستگی و انتظارات مشترک پیش از ازدواج',
            url: `${SITE_URL}/services/premarital-counseling`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'مشاوره پیش از ازدواج',
              url: `${SITE_URL}/services/premarital-counseling`
            }
          },
          {
            '@type': 'Offer',
            name: 'مشاوره آنلاین زوج‌درمانی ویژه ایرانیان خارج از کشور',
            description: 'جلسات آنلاین تصویری با تطبیق منطقه زمانی محلی (کانادا، آمریکا، اروپا، استرالیا، امارات) و پرداخت ارزی',
            url: `${SITE_URL}/services/online-counseling`,
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
              description: 'امکان پرداخت ارزی از طریق PayPal، Wise، کردیت‌کارت بین‌المللی یا تتر (USDT)'
            },
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'زوج‌درمانی آنلاین بین‌المللی',
              url: `${SITE_URL}/services/online-counseling`
            }
          },
          {
            '@type': 'Offer',
            name: 'گروه‌درمانی الگوهای تکراری در روابط عاطفی',
            description: 'تحلیل الگوهای ناخودآگاه تکرارشونده در انتخاب شریک و یادگیری مرزبندی سالم',
            url: `${SITE_URL}/services/relationship-patterns-therapy`,
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
            itemOffered: {
              '@type': 'MedicalTherapy',
              name: 'گروه‌درمانی الگوهای رابطه',
              url: `${SITE_URL}/services/relationship-patterns-therapy`
            }
          },
          {
            '@type': 'Offer',
            name: 'سنجش و تست‌های آنلاین زوج درمانی (رایگان)',
            description: 'آزمون رضایت زناشویی انریچ، ترومای خیانت، سبک دلبستگی و طلاق عاطفی با تفسیر فوری',
            url: `${SITE_URL}/tools`,
            price: '0',
            priceCurrency: 'IRR',
            availability: 'https://schema.org/InStock',
            itemOffered: {
              '@type': 'WebApplication',
              name: 'سامانه تست زوج درمانی آنلاین',
              url: `${SITE_URL}/tools`
            }
          }
        ]
      },
      founder: { '@id': THERAPIST_ID },
      employee: [{ '@id': THERAPIST_ID }],
      isAccessibleForFree: false,
      publicAccess: true,
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'پروانه اشتغال تخصصی روانشناسی بالینی و زوج‌درمانی',
          identifier: '1414083',
          recognizedBy: {
            '@type': 'Organization',
            name: 'سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران',
            url: 'https://pcoiran.ir'
          },
          validIn: {
            '@type': 'AdministrativeArea',
            name: 'ایران'
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'مجوز و پروانه مسئولیت فنی کلینیک تخصصی روان‌شناسی پیوند امن',
          recognizedBy: {
            '@type': 'Organization',
            name: 'سازمان نظام روان‌شناسی و مشاوره'
          },
          validIn: {
            '@type': 'AdministrativeArea',
            name: 'تهران'
          }
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'گواهی‌نامه تخصصی بین‌المللی زوج‌درمانی هیجان‌مدار (EFT)',
          recognizedBy: {
            '@type': 'Organization',
            name: 'انجمن بین‌المللی درمان هیجان‌مدار (ICEEFT)',
            url: 'https://iceeft.com'
          }
        }
      ],
      memberOf: [
        {
          '@type': 'Organization',
          name: 'سازمان نظام روان‌شناسی و مشاوره جمهوری اسلامی ایران',
          url: 'https://pcoiran.ir'
        },
        {
          '@type': 'Organization',
          name: 'مرکز تخصصی روانشناسی پیوند امن',
          url: 'https://peyvandamn.ir'
        }
      ],
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'اتاق‌های مشاوره عایق صدا (Acoustic Soundproof)',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'دسترسی آسان با آسانسور و رمپ توان‌یاب (Wheelchair Accessible)',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'سالن انتظار آرام با پذیرایی و تهویه مطبوع',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'اینترنت بی‌سیم پرسرعت (Wi-Fi رایگان مراجعان)',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'دستگاه کارت‌خوان POS و صدور فاکتور رسمی بیمه تکمیلی',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'دسترسی سریع به مترو فلکه صادقیه و خطوط BRT',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'مجاورت با پارکینگ عمومی و دسترسی آسان بزرگراهی',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'اتاق تست‌های روان‌سنجی و ارزیابی آنلاین زوجین',
          value: true
        }
      ],
      availableService: [
        {
          '@type': 'MedicalTherapy',
          name: 'زوج درمانی تخصصی هیجان‌مدار (EFT)',
          description: 'حل تعارضات عمیق زناشویی، بازسازی پیوند عاطفی و ارتقای صمیمیت'
        },
        {
          '@type': 'MedicalTherapy',
          name: 'مشاوره تخصصی مدیریت بحران خیانت زناشویی',
          description: 'مدیریت تروما و شوک خیانت، بازسازی اعتماد و تصمیم‌گیری شفاف'
        },
        {
          '@type': 'MedicalTherapy',
          name: 'درمان طلاق عاطفی و سردی رابطه',
          description: 'احیای رابطه در آستانه جدایی و بازگشت شور و تعهد زناشویی'
        },
        {
          '@type': 'MedicalTherapy',
          name: 'مشاوره آنلاین زوجین برای ایرانیان خارج از کشور',
          description: 'جلسات آنلاین تصویری با حفظ کامل محرمانگی و پروتکل‌های رسمی نظام روانشناسی'
        }
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.7208,
        longitude: 51.3347
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
          opens: '09:00',
          closes: '21:00',
          description: 'شیفت صبح و عصر روزهای عادی'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Thursday'],
          opens: '09:00',
          closes: '19:00',
          description: 'پنج‌شنبه‌ها تا ساعت ۱۹:۰۰'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Friday'],
          opens: '10:00',
          closes: '16:00',
          description: 'جمعه‌ها ویژه جلسات آنلاین بین‌المللی و موارد اورژانسی با هماهنگی قبلی'
        }
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '348',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'مراجع زوج‌درمانی (تهران)'
          },
          datePublished: '2025-10-14',
          reviewBody: 'پس از ماه‌ها تعارض و قهر طولانی، جلسات EFT با خانم خوینی نجات‌بخش زندگی ما شد. درک عمیق و رویکرد علمی ایشان فوق‌العاده است.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
          }
        },
        {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: 'مراجع مشاوره آنلاین خیانت'
          },
          datePublished: '2025-11-20',
          reviewBody: 'در بحران شدید شوک خیانت به صورت آنلاین از اصفهان مراجعه کردیم. مدیریت بحران، تخصص و رازداری خانم خوینی آرامش را به زندگی ما بازگرداند.',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
            worstRating: '1'
          }
        }
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+989199087264',
          contactType: 'reservations',
          areaServed: ['تهران', 'کرج', 'اصفهان', 'کرمان', 'شیراز', 'مشهد', 'تبریز', 'IR', 'خارج از کشور'],
          availableLanguage: ['fa', 'en'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '21:00'
          }
        },
        {
          '@type': 'ContactPoint',
          telephone: '+982144600980',
          contactType: 'customer support',
          areaServed: 'IR',
          availableLanguage: ['fa']
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'فلکه دوم صادقیه، بزرگراه اشرفی اصفهانی',
        addressLocality: 'تهران',
        addressRegion: 'منطقه ۲',
        postalCode: '14517',
        addressCountry: 'IR',
      },
    },
    {
      '@type': 'ItemList',
      '@id': `${url}#sitelinks`,
      name: 'خدمات و تخصص‌های اصلی مرکز زوج درمان',
      itemListElement: [
        {
          '@type': 'SiteNavigationElement',
          position: 1,
          name: 'زوج درمانگر در تهران (حضوری)',
          description: 'جلسات تخصصی زوج درمانی حضوری در کلینیک غرب تهران با مهناز خوینی',
          url: `${SITE_URL}/services/couples-therapy`
        },
        {
          '@type': 'SiteNavigationElement',
          position: 2,
          name: 'مشاوره آنلاین خیانت زناشویی',
          description: 'مدیریت شوک خیانت، ترمیم اعتماد و تصمیم‌گیری آگاهانه آنلاین',
          url: `${SITE_URL}/services/infidelity-counseling`
        },
        {
          '@type': 'SiteNavigationElement',
          position: 3,
          name: 'تست زوج درمانی آنلاین',
          description: 'خودسنجی آنلاین انریچ، ترومای خیانت، سبک دلبستگی و ۵ زبان عشق',
          url: `${SITE_URL}/tools`
        },
        {
          '@type': 'SiteNavigationElement',
          position: 4,
          name: 'تعرفه و هزینه جلسات ۱۴۰۴',
          description: 'تعرفه مصوب نظام روانشناسی، بیمه تکمیلی و ماشین‌حساب تخمین',
          url: `${SITE_URL}/fees`
        },
        {
          '@type': 'SiteNavigationElement',
          position: 5,
          name: 'بانک مقالات تخصصی رابطه',
          description: 'راهنماهای تحلیلی زوج‌درمانی، طلاق عاطفی، حل تعارض و دلبستگی',
          url: `${SITE_URL}/articles`
        }
      ]
    }
  ];
}

function videosJsonLdSchema(url: string): Record<string, unknown>[] {
  return VIDEOS_DATA.map((v) => ({
    '@type': 'VideoObject',
    '@id': `${url}#video-${v.id}`,
    name: v.title,
    description: v.description,
    thumbnailUrl: [absoluteUrl(v.thumbnail)],
    uploadDate: '2025-01-15T08:00:00+03:30',
    duration: 'PT15M',
    embedUrl: v.aparatEmbedUrl,
    contentUrl: v.aparatUrl,
    inLanguage: 'fa-IR',
    keywords: v.tags.join(', '),
    author: {
      '@type': 'Person',
      '@id': THERAPIST_ID,
      name: 'مهناز خوینی',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#clinic`,
      name: 'مرکز تخصصی زوج درمان مهناز خوینی',
    },
  }));
}

export function seoForRoute(route: RouteState): SeoPage {
  switch (route.type) {
    case 'videos':
      return {
        title: 'ویدیوهای آموزشی و برنامه‌های آپارات و یوتیوب | مهناز خوینی',
        description:
          'مشاهده آنلاین کارگاه‌ها و فیلم‌های آموزشی زوج‌درمانی، مشاوره خیانت، درمان طلاق عاطفی و مهارت‌های ارتباطی مهناز خوینی در آپارات و یوتیوب.',
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
      const article = getArticleBySlug(route.slug);
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
      const service = getServiceBySlug(route.slug);
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
      const test = getTestBySlug(route.testSlug);
      if (!test) return notFoundSeo();
      const path = `/tests/${test.slug}`;
      return {
        title: test.seoTitle,
        description: test.seoDescription,
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'تست‌های آنلاین رابطه', path: '/tools' },
          { name: test.title },
        ],
        jsonLd: testSchema(test.slug, absoluteUrl(path)),
      };
    }

    case 'tools':
      return {
        title: 'تست زوج درمانی آنلاین رایگان با تحلیل بالینی و نمره فوری | مهناز خوینی',
        description:
          'سامانه تست زوج درمانی آنلاین رایگان با تحلیل فوری مهناز خوینی: انریچ، ترومای خیانت (PISD)، طلاق گاتمن، سبک دلبستگی و ۵ زبان عشق.',
        path: '/tools',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'تست زوج درمانی آنلاین' }],
        jsonLd: toolsHubSchema(absoluteUrl('/tools')),
      };

    case 'fees':
      return {
        title: 'تعرفه و هزینه زوج درمانی ۱۴۰۴ و بیمه تکمیلی | مهناز خوینی',
        description:
          'تعرفه مصوب زوج درمانی، مشاوره خیانت و پیش از ازدواج، شرایط فاکتور بیمه تکمیلی، پرداخت ارزی و ماشین‌حساب تخمین تعداد جلسات.',
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
          'مهناز خوینی، کارشناس ارشد روان‌شناسی بالینی (پروانه ۱۴۱۴۰۸۳) و زوج درمانگر EFT با بیش از ۱۵,۰۰۰ ساعت تجربه بالینی؛ رزرو مشاوره حضوری تهران و آنلاین.',
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
          'فرآیند گام‌به‌گام زوج درمان: ارزیابی و تشخیص، تثبیت هیجان، بازپردازش تعارضات عمیق و تثبیت دستاوردها برای پایداری رابطه زناشویی.',
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
          'رزرو وقت حضوری در تهران و مشاوره آنلاین سراسر جهان؛ آدرس مرکز زوج درمان پیوند امن، ساعات کاری، تماس مستقیم و رزرو از طریق واتساپ.',
        path: '/contact',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'تماس و نوبت‌دهی' }],
      };

    case 'bestTherapist': {
      const path = '/best-couples-therapist-tehran';
      return {
        title: 'بهترین زوج درمانگر خوب در تهران و آنلاین | مهناز خوینی',
        description:
          'راهنمای انتخاب بهترین زوج درمانگر خوب در تهران و آنلاین؛ پروانه رسمی ۱۴۱۴۰۸۳ نظام روانشناسی، پروتکل EFT، کلینیک صادقیه و مشاوره آنلاین.',
        path,
        breadcrumb: [
          { name: 'صفحه اصلی', path: '/' },
          { name: 'بهترین زوج درمانگر خوب در تهران و آنلاین' },
        ],
        jsonLd: [
          {
            '@type': 'MedicalWebPage',
            '@id': `${absoluteUrl(path)}#webpage`,
            name: 'بهترین زوج درمانگر خوب در تهران و آنلاین',
            description:
              'راهنمای انتخاب بهترین زوج درمانگر خوب در تهران و آنلاین؛ پروانه رسمی ۱۴۱۴۰۸۳ نظام روانشناسی، پروتکل‌های تخصصی EFT، کلینیک غرب تهران و مشاوره آنلاین با مهناز خوینی.',
            url: absoluteUrl(path),
            inLanguage: 'fa-IR',
            about: { '@id': THERAPIST_ID },
          },
          {
            '@type': 'FAQPage',
            '@id': `${absoluteUrl(path)}#faqpage`,
            mainEntity: [
              {
                '@type': 'Question',
                name: 'بهترین زوج درمانگر در تهران کیست و چطور انتخاب کنیم؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'بهترین زوج درمانگر متخصصی است که علاوه بر تحصیلات تکمیلی کارشناسی ارشد یا دکتری روانشناسی بالینی، دارای پروانه رسمی اشتغال تخصصی از سازمان نظام روانشناسی (پروانه ۱۴۱۴۰۸۳ مهناز خوینی)، تسلط به EFT و گاتمن، و بیش از ۱۵,۰۰۰ ساعت تجربه بالینی باشد.',
                },
              },
              {
                '@type': 'Question',
                name: 'آیا جلسات آنلاین زوج درمانی برای مراجعان خارج از تهران همان کیفیت حضوری را دارد؟',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'بله، پژوهش‌های متعدد انجمن روان‌شناسی آمریکا (APA) اثربخشی کاملاً مشابه جلسات آنلاین و حضوری با متد EFT را به اثبات رسانده است.',
                },
              },
            ],
          },
        ],
      };
    }

    case 'privacy':
      return {
        title: 'حریم خصوصی و محرمانگی | سامانه زوج درمان zoojdarman.ir',
        description:
          'تعهد مرکز تخصصی زوج درمان مهناز خوینی به محرمانگی کامل جلسات بالینی، حفظ داده‌های مراجعان و تطابق با موازین سازمان نظام روان‌شناسی و مشاوره.',
        path: '/privacy-policy',
        breadcrumb: [{ name: 'صفحه اصلی', path: '/' }, { name: 'حریم خصوصی' }],
      };

    case 'city': {
      const city = getCityBySlug(route.citySlug);
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
      const country = getCountryBySlug(route.countrySlug);
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
