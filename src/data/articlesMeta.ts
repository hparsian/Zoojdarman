import articlesMetaJson from './articlesMeta.json';

export interface ArticleMeta {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: string;
  readTime: string;
  updatedAt: string;
  takeaways: string[];
  targetKeywords?: string[];
  wordCount: number;
}

export const articlesMeta: ArticleMeta[] = articlesMetaJson as ArticleMeta[];

export const getArticleMetaBySlug = (slug: string): ArticleMeta | undefined =>
  articlesMeta.find((a) => a.slug === slug);
