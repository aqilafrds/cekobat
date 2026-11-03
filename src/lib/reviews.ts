import type {
  Review,
  ReviewStats,
  SideEffectLevel,
  WhoFor,
} from "./types";

const DAY_MS = 24 * 60 * 60 * 1000;

const EMPTY_STATS: ReviewStats = {
  count: 0,
  avgRating: 0,
  avgEffectiveness: 0,
  avgValue: 0,
  recommendPct: 0,
  distribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
  sideEffects: { "tidak-ada": 0, ringan: 0, sedang: 0, berat: 0 },
  dominantSideEffect: null,
};

export function computeStats(reviews: Review[]): ReviewStats {
  if (reviews.length === 0) return EMPTY_STATS;

  const distribution: ReviewStats["distribution"] = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  const sideEffects: ReviewStats["sideEffects"] = {
    "tidak-ada": 0,
    ringan: 0,
    sedang: 0,
    berat: 0,
  };
  let rating = 0;
  let effectiveness = 0;
  let value = 0;
  let recommend = 0;

  for (const r of reviews) {
    rating += r.rating;
    effectiveness += r.effectiveness;
    value += r.valueForMoney;
    if (r.recommend) recommend += 1;
    distribution[r.rating as 1 | 2 | 3 | 4 | 5] += 1;
    sideEffects[r.sideEffectLevel] += 1;
  }

  const n = reviews.length;
  let dominant: SideEffectLevel = "tidak-ada";
  for (const level of Object.keys(sideEffects) as SideEffectLevel[]) {
    if (sideEffects[level] > sideEffects[dominant]) dominant = level;
  }

  return {
    count: n,
    avgRating: rating / n,
    avgEffectiveness: effectiveness / n,
    avgValue: value / n,
    recommendPct: Math.round((recommend / n) * 100),
    distribution,
    sideEffects,
    dominantSideEffect: dominant,
  };
}

export function groupByProduct(reviews: Review[]): Map<string, Review[]> {
  const map = new Map<string, Review[]>();
  for (const r of reviews) {
    const list = map.get(r.productSlug);
    if (list) list.push(r);
    else map.set(r.productSlug, [r]);
  }
  return map;
}

export type ReviewSort = "terbaru" | "membantu" | "tertinggi" | "terendah";

export const SORT_LABEL: Record<ReviewSort, string> = {
  terbaru: "Terbaru",
  membantu: "Paling membantu",
  tertinggi: "Rating tertinggi",
  terendah: "Rating terendah",
};

export const SORT_OPTIONS = Object.keys(SORT_LABEL) as ReviewSort[];

export interface ReviewFilter {
  rating?: number;
  whoFor?: WhoFor;
}

export function filterReviews(reviews: Review[], f: ReviewFilter): Review[] {
  return reviews.filter(
    (r) => (!f.rating || r.rating === f.rating) && (!f.whoFor || r.whoFor === f.whoFor),
  );
}

export function displayedHelpful(r: Review, helpfulIds: string[]): number {
  return r.helpfulCount + (helpfulIds.includes(r.id) ? 1 : 0);
}

export function sortReviews(
  reviews: Review[],
  sort: ReviewSort,
  helpfulIds: string[] = [],
): Review[] {
  const byDate = (a: Review, b: Review) => b.createdAt.localeCompare(a.createdAt);
  const copy = [...reviews];
  switch (sort) {
    case "membantu":
      return copy.sort(
        (a, b) => displayedHelpful(b, helpfulIds) - displayedHelpful(a, helpfulIds) || byDate(a, b),
      );
    case "tertinggi":
      return copy.sort((a, b) => b.rating - a.rating || byDate(a, b));
    case "terendah":
      return copy.sort((a, b) => a.rating - b.rating || byDate(a, b));
    default:
      return copy.sort(byDate);
  }
}

export function trendingScore(r: Review, now: number): number {
  const ageDays = Math.max(0, (now - new Date(r.createdAt).getTime()) / DAY_MS);
  return r.helpfulCount + r.rating * 2 + 20 * Math.exp(-ageDays / 30);
}

export function pickTrending(reviews: Review[], limit: number): Review[] {
  if (reviews.length === 0) return [];
  const now = Math.max(...reviews.map((r) => new Date(r.createdAt).getTime()));
  const ranked = [...reviews].sort((a, b) => trendingScore(b, now) - trendingScore(a, now));
  const seen = new Set<string>();
  const out: Review[] = [];
  for (const r of ranked) {
    if (seen.has(r.productSlug)) continue;
    seen.add(r.productSlug);
    out.push(r);
    if (out.length === limit) break;
  }
  return out;
}

export function photosOf(reviews: Review[]): { src: string; review: Review }[] {
  return reviews.flatMap((review) => review.photos.map((src) => ({ src, review })));
}
