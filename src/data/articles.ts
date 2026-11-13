import rawArticles from './articles.json';
import { Article } from '../types';

export const articles: Article[] = rawArticles as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  const normalized = slug.replace(/^\/+|\/+$/g, '');
  return articles.find(a => a.slug === normalized);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  const normalized = currentSlug.replace(/^\/+|\/+$/g, '');
  const current = getArticleBySlug(normalized);
  if (!current) return articles.slice(0, count);
  return articles
    .filter(a => a.slug !== normalized)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, count);
}
