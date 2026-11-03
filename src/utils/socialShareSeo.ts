import { SITE_URL, SITE_NAME, absoluteUrl } from '../seo';
import { Article, ServiceItem } from '../types';

export interface SocialShareMeta {
  title: string;
  description: string;
  url: string;
  image: string;
  type: 'website' | 'article';
  siteName?: string;
  authorName?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

/**
 * Upserts a <meta> tag in <head> by attribute key and name/property value.
 */
function upsertMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Upserts a <link> tag in <head> (e.g. canonical).
 */
function upsertLinkTag(rel: string, href: string): void {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Dynamically updates all Open Graph and Twitter Card tags in <head>
 * for maximum fidelity when shared on WhatsApp, Telegram, Instagram, X/Twitter, LinkedIn, and Facebook.
 */
export function updateSocialShareMeta(meta: SocialShareMeta): void {
  if (typeof document === 'undefined') return;

  const fullUrl = absoluteUrl(meta.url);
  const fullImage = absoluteUrl(meta.image || '/images/og-cover.jpg');
  const siteName = meta.siteName || SITE_NAME;
  const authorName = meta.authorName || 'مهناز خوینی';

  // Standard document title & description
  document.title = meta.title;
  upsertMetaTag('name', 'description', meta.description);
  upsertLinkTag('canonical', fullUrl);

  // Open Graph Primary Meta Tags
  upsertMetaTag('property', 'og:site_name', siteName);
  upsertMetaTag('property', 'og:title', meta.title);
  upsertMetaTag('property', 'og:description', meta.description);
  upsertMetaTag('property', 'og:url', fullUrl);
  upsertMetaTag('property', 'og:type', meta.type);
  upsertMetaTag('property', 'og:image', fullImage);
  upsertMetaTag('property', 'og:image:secure_url', fullImage);
  upsertMetaTag('property', 'og:image:width', '1200');
  upsertMetaTag('property', 'og:image:height', '630');
  upsertMetaTag('property', 'og:image:alt', meta.title);
  upsertMetaTag('property', 'og:locale', 'fa_IR');

  // Article Specific Meta Tags
  if (meta.type === 'article') {
    upsertMetaTag('property', 'article:author', authorName);
    if (meta.publishedTime) upsertMetaTag('property', 'article:published_time', meta.publishedTime);
    if (meta.modifiedTime) upsertMetaTag('property', 'article:modified_time', meta.modifiedTime);
    if (meta.section) upsertMetaTag('property', 'article:section', meta.section);
    if (meta.tags && meta.tags.length > 0) {
      // Remove old tags if any
      document.head.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      meta.tags.forEach(tag => {
        const tagEl = document.createElement('meta');
        tagEl.setAttribute('property', 'article:tag');
        tagEl.setAttribute('content', tag);
        document.head.appendChild(tagEl);
      });
    }
  }

  // Twitter / X Card Meta Tags
  upsertMetaTag('name', 'twitter:card', 'summary_large_image');
  upsertMetaTag('name', 'twitter:site', '@mahnaz_khoini');
  upsertMetaTag('name', 'twitter:creator', '@mahnaz_khoini');
  upsertMetaTag('name', 'twitter:title', meta.title);
  upsertMetaTag('name', 'twitter:description', meta.description);
  upsertMetaTag('name', 'twitter:url', fullUrl);
  upsertMetaTag('name', 'twitter:image', fullImage);
  upsertMetaTag('name', 'twitter:image:alt', meta.title);
}

/**
 * Extracts optimized social share metadata for an Article.
 */
export function getArticleSocialMeta(article: Article): SocialShareMeta {
  return {
    title: article.h1 ? `${article.h1} | مهناز خوینی` : `${article.title} | مهناز خوینی`,
    description: article.description,
    url: `/articles/${article.slug}`,
    image: '/images/og-cover.jpg',
    type: 'article',
    authorName: 'مهناز خوینی',
    publishedTime: '2025-01-15T08:00:00+03:30',
    modifiedTime: '2026-11-03T10:00:00+03:30',
    section: article.category,
    tags: [article.category, 'زوج درمان', 'زوج درمانی', 'مهناز خوینی', 'زوج درمان خوب']
  };
}

/**
 * Extracts optimized social share metadata for a Service.
 */
export function getServiceSocialMeta(service: ServiceItem): SocialShareMeta {
  return {
    title: service.h1 ? `${service.h1} | مهناز خوینی` : `${service.title} | مهناز خوینی`,
    description: service.description,
    url: `/services/${service.slug}`,
    image: '/images/og-cover.jpg',
    type: 'website',
    authorName: 'مهناز خوینی',
    section: 'خدمات تخصصی زوج‌درمانی'
  };
}

/**
 * Generates direct share URLs for messaging and social platforms.
 */
export function generateShareLinks(url: string, title: string) {
  const absoluteTarget = absoluteUrl(url);
  const encodedUrl = encodeURIComponent(absoluteTarget);
  const encodedTitle = encodeURIComponent(title);

  return {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    copyLink: absoluteTarget
  };
}
