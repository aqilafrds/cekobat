"use client";

import Link from "next/link";
import { useMemo } from "react";
import { products } from "@/data/products";
import { computeStats, groupByProduct, pickTrending } from "@/lib/reviews";
import { useAllReviews } from "@/lib/use-all-reviews";
import { ProductCard } from "./ProductCard";
import { ReviewCard } from "./ReviewCard";

export function HomeSections() {
  const reviews = useAllReviews();

  const trending = useMemo(() => pickTrending(reviews, 3), [reviews]);

  const popular = useMemo(() => {
    const grouped = groupByProduct(reviews);
    return products
      .map((product) => ({
        product,
        stats: computeStats(grouped.get(product.slug) ?? []),
      }))
      .sort(
        (a, b) =>
          b.stats.count - a.stats.count || b.stats.avgRating - a.stats.avgRating,
      )
      .slice(0, 6);
  }, [reviews]);

  return (
    <>
      <section
        aria-labelledby="judul-tren"
        className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6"
      >
        <div className="mb-5">
          <h2 id="judul-tren" className="text-xl font-semibold tracking-tight">
            Review tren
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Review yang paling membantu dan baru-baru ini dibaca banyak orang.
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {trending.map((r) => (
            <li key={r.id}>
              <ReviewCard review={r} showProduct compact />
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="judul-populer"
        className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6"
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 id="judul-populer" className="text-xl font-semibold tracking-tight">
              Produk populer
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Obat dengan review terbanyak.
            </p>
          </div>
          <Link
            href="/cari"
            className="shrink-0 text-sm font-medium text-teal-700 hover:underline"
          >
            Lihat semua
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {popular.map(({ product, stats }) => (
            <li key={product.slug}>
              <ProductCard product={product} stats={stats} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
