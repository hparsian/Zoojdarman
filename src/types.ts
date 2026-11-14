export interface ContentTable {
  id?: string;
  title: string;
  subtitle?: string;
  headers: string[];
  rows: string[][];
}

export interface Article {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: string;
  readTime: string;
  updatedAt: string;
  takeaways: string[];
  faqs: { q: string; a: string }[];
  bodyHtml: string;
  structuredTables?: ContentTable[];
  targetKeywords?: string[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category?: string;
  sessionDuration?: string;
  modality?: string;
  takeaways?: string[];
  faqs: { q: string; a: string }[];
  bodyHtml: string;
  structuredTables?: ContentTable[];
  relatedArticleSlugs?: string[];
  targetKeywords?: string[];
}

export interface DiagnosisScenario {
  id: number;
  tabTitle: string;
  tabSub: string;
  iconClass: string;
  title: string;
  desc: string;
  pills: string[];
  msg: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export type RouteState =
  | { type: 'home'; section?: string }
  | { type: 'article'; slug: string }
  | { type: 'articles' }
  | { type: 'service'; slug: string }
  | { type: 'services' }
  | { type: 'about' }
  | { type: 'process' }
  | { type: 'faq' }
  | { type: 'contact' }
  | { type: 'tools' }
  | { type: 'singleTest'; testSlug: string }
  | { type: 'fees' }
  | { type: 'topics' }
  | { type: 'bestTherapist' }
  | { type: 'videos' }
  | { type: 'privacy' }
  | { type: 'city'; citySlug: string }
  | { type: 'cities' }
  | { type: 'country'; countrySlug: string }
  | { type: 'countries' }
  | { type: '404' };
