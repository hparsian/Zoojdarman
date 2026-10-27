import rawArticles from './articles.json';
import { Article } from '../types';

export const articles: Article[] = rawArticles as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return articles.slice(0, count);
  return articles
    .filter(a => a.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, count);
}
