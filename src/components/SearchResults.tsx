"use client";

import Link from "next/link";
import { useMemo } from "react";
import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";
import {
  CLASSIFICATION_LABEL,
  CLASSIFICATION_OPTIONS,
  FORM_LABEL,
  FORM_OPTIONS,
} from "@/lib/labels";
import { computeStats, groupByProduct } from "@/lib/reviews";
import { searchProducts } from "@/lib/search";
import { useAllReviews } from "@/lib/use-all-reviews";
import { setUrlSearch, useHydrated, useUrlSearch } from "@/lib/url-state";
import { EmptyState } from "./EmptyState";
import { ProductCard } from "./ProductCard";
import { SearchBar } from "./SearchBar";

type SortKey = "relevan" | "rating" | "review" | "harga" | "nama";

const SORT_LABEL: Record<SortKey, string> = {
  relevan: "Paling relevan",
  rating: "Rating tertinggi",
  review: "Review terbanyak",
  harga: "Harga terendah",
  nama: "Nama A–Z",
};

const RATING_OPTIONS = [4.5, 4, 3.5, 3];

function FilterSelect({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex min-w-0 flex-col gap-1 text-xs font-medium text-slate-600">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-2.5 text-sm font-normal text-slate-900 focus:border-teal-600"
      >
        {children}
      </select>
    </label>
  );
}

export function SearchResults() {
  const hydrated = useHydrated();
  const search = useUrlSearch();
  const params = useMemo(() => new URLSearchParams(search), [search]);
  const reviews = useAllReviews();

  const q = params.get("q") ?? "";
  const kategori = params.get("kategori") ?? "";
  const bentuk = params.get("bentuk") ?? "";
  const golongan = params.get("golongan") ?? "";
  const rating = params.get("rating") ?? "";
  const urut = ((params.get("urut") as SortKey | null) ?? "") || (q ? "relevan" : "review");

  function setParam(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    setUrlSearch(next.toString());
  }

  const results = useMemo(() => {
    const grouped = groupByProduct(reviews);
    const minRating = Number(rating) || 0;

    let rows = searchProducts(products, q).map((product) => ({
      product,
      stats: computeStats(grouped.get(product.slug) ?? []),
    }));

    rows = rows.filter(
      ({ product, stats }) =>
        (!kategori || product.categorySlug === kategori) &&
        (!bentuk || product.form === bentuk) &&
        (!golongan || product.classification === golongan) &&
        (!minRating || stats.avgRating >= minRating),
    );

    switch (urut) {
      case "rating":
        rows.sort((a, b) => b.stats.avgRating - a.stats.avgRating);
        break;
      case "review":
        rows.sort((a, b) => b.stats.count - a.stats.count);
        break;
      case "harga":
        rows.sort((a, b) => a.product.priceRange.min - b.product.priceRange.min);
        break;
      case "nama":
        rows.sort((a, b) => a.product.name.localeCompare(b.product.name, "id"));
        break;
      default:
        break;
    }
    return rows;
  }, [reviews, q, kategori, bentuk, golongan, rating, urut]);

  const activeCategory = getCategory(kategori);
  const hasFilter = Boolean(kategori || bentuk || golongan || rating);

  let heading = "Semua obat";
  if (q) heading = `Hasil untuk “${q}”`;
  else if (activeCategory) heading = activeCategory.name;

  if (!hydrated) {
    return (
      <div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm text-slate-500 sm:px-6">
        Memuat…
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
      {activeCategory && !q && (
        <p className="mt-1 text-sm text-slate-600">{activeCategory.description}</p>
      )}

      <div className="mt-5">
        <SearchBar key={q} initialQuery={q} size="md" />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <FilterSelect label="Kategori" value={kategori} onChange={(v) => setParam("kategori", v)}>
          <option value="">Semua</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </FilterSelect>
        <FilterSelect label="Bentuk sediaan" value={bentuk} onChange={(v) => setParam("bentuk", v)}>
          <option value="">Semua</option>
          {FORM_OPTIONS.map((f) => (
            <option key={f} value={f}>{FORM_LABEL[f]}</option>
          ))}
        </FilterSelect>
        <FilterSelect label="Golongan obat" value={golongan} onChange={(v) => setParam("golongan", v)}>
          <option value="">Semua</option>
          {CLASSIFICATION_OPTIONS.map((c) => (
            <option key={c} value={c}>{CLASSIFICATION_LABEL[c]}</option>
          ))}
        </FilterSelect>
        <FilterSelect label="Rating minimal" value={rating} onChange={(v) => setParam("rating", v)}>
          <option value="">Semua</option>
          {RATING_OPTIONS.map((r) => (
            <option key={r} value={r}>{String(r).replace(".", ",")}+</option>
          ))}
        </FilterSelect>
        <FilterSelect label="Urutkan" value={urut} onChange={(v) => setParam("urut", v)}>
          {(Object.keys(SORT_LABEL) as SortKey[])
            .filter((k) => q || k !== "relevan")
            .map((k) => (
              <option key={k} value={k}>{SORT_LABEL[k]}</option>
            ))}
        </FilterSelect>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-600">
        <p aria-live="polite">{results.length} produk ditemukan</p>
        {hasFilter && (
          <Link
            href={q ? `/cari?q=${encodeURIComponent(q)}` : "/cari"}
            className="font-medium text-teal-700 hover:underline"
          >
            Reset filter
          </Link>
        )}
      </div>

      {results.length === 0 ? (
        <div className="mt-4">
          <EmptyState
            title="Tidak ada obat yang cocok"
            description="Coba kata kunci lain (nama obat, zat aktif, atau keluhan seperti “batuk”), atau longgarkan filter."
          >
            <Link
              href="/cari"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:border-teal-600"
            >
              Lihat semua obat
            </Link>
          </EmptyState>
        </div>
      ) : (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {results.map(({ product, stats }) => (
            <li key={product.slug}>
              <ProductCard product={product} stats={stats} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
