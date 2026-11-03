import { getCategory } from "@/data/categories";
import { FORM_LABEL } from "./labels";
import type { Product } from "./types";

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function scoreProduct(product: Product, query: string): number {
  const q = normalize(query);
  if (!q) return 0;

  const name = normalize(product.name);
  const generic = normalize(product.genericName);
  const keywords = product.keywords.map(normalize);
  let score = 0;

  if (name.startsWith(q)) score = 100;
  else if (name.includes(q)) score = 80;
  if (generic.startsWith(q)) score = Math.max(score, 90);
  else if (generic.includes(q)) score = Math.max(score, 70);
  if (keywords.some((k) => k === q)) score = Math.max(score, 75);
  else if (keywords.some((k) => k.includes(q) || (k.length >= 4 && q.includes(k)))) {
    score = Math.max(score, 60);
  }

  const haystack = [
    name,
    generic,
    ...keywords,
    normalize(product.indications),
    normalize(getCategory(product.categorySlug)?.name ?? ""),
    normalize(FORM_LABEL[product.form]),
  ].join(" ");
  const tokens = q.split(" ");
  if (tokens.every((t) => haystack.includes(t))) score = Math.max(score, 30 + tokens.length);

  return score;
}

export function searchProducts(products: Product[], query: string): Product[] {
  if (!normalize(query)) return products;
  return products
    .map((p) => ({ p, score: scoreProduct(p, query) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.p.name.localeCompare(b.p.name, "id"))
    .map((x) => x.p);
}

export function suggestProducts(products: Product[], query: string, limit = 5): Product[] {
  if (!normalize(query)) return [];
  return searchProducts(products, query).slice(0, limit);
}
