import { STANDALONE_SEO_PART1, StandaloneSeoEntry } from './standaloneSeoContentPart1';
import { STANDALONE_SEO_PART2 } from './standaloneSeoContentPart2';

export type { StandaloneSeoEntry };

export const STANDALONE_SEO_CONTENT: Record<string, StandaloneSeoEntry> = {
  ...STANDALONE_SEO_PART1,
  ...STANDALONE_SEO_PART2,
};

export function getStandaloneSeo(key: string): StandaloneSeoEntry | undefined {
  return STANDALONE_SEO_CONTENT[key];
}
