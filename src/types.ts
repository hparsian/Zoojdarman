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
}

export interface ServiceItem {
  slug: string;
  title: string;
  h1: string;
  description: string;
  faqs: { q: string; a: string }[];
  bodyHtml: string;
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
  | { type: 'topics' }
  | { type: 'privacy' }
  | { type: '404' };
