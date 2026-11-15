"use client";

import Link from "next/link";
import { useMemo } from "react";
import { products } from "@/data/products";
import { computeStats, groupByProduct, pickTrending } from "@/lib/reviews";
import { useAllReviews } from "@/lib/use-all-reviews";
import { ProductCard } from "./ProductCard";
import { ReviewCard } from "./ReviewCard";
import { ReviewReadingGate } from "./ReviewReadingGate";

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
      <section aria-labelledby="judul-baru" className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow mb-2">Lebih banyak pilihan informasi</p><h2 id="judul-baru" className="text-2xl font-semibold tracking-tight">Baru di katalog</h2><p className="mt-1 text-sm text-slate-600">17 tambahan baru · {products.length} produk dalam 9 kategori. Kemasan baru adalah ilustrasi AI.</p></div><Link href="/cari" className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-teal-700 hover:border-teal-600">Lihat semua {products.length} produk</Link></div>
        <ul className="grid gap-4 sm:grid-cols-2">{products.filter(p => p.imageKind === "ai").slice(0, 6).map(product => <li key={product.slug}><ProductCard product={product} stats={computeStats(reviews.filter(r => r.productSlug === product.slug))} /></li>)}</ul>
      </section>
      <section
        aria-labelledby="judul-tren"
        className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6"
      >
        <div className="review-band">
        <div className="mb-5">
          <p className="eyebrow mb-2">Sudut pengalaman</p>
          <h2 id="judul-tren" className="text-2xl font-semibold tracking-tight">
            Review tren
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Temukan cerita dan sudut pandang pengguna. Setiap pengalaman bisa berbeda.
          </p>
        </div>
        <ReviewReadingGate>
        <ul className="grid gap-4 md:grid-cols-3">
          {trending.map((r) => (
            <li key={r.id}>
              <ReviewCard review={r} showProduct compact />
            </li>
          ))}
        </ul>
        </ReviewReadingGate>
        </div>
      </section>

      <section
        aria-labelledby="judul-populer"
        className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6"
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">Jelajahi katalog</p>
            <h2 id="judul-populer" className="text-2xl font-semibold tracking-tight">
              Produk populer
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Obat dengan review terbanyak.
            </p>
          </div>
          <Link
            href="/cari"
            className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-teal-700 transition hover:border-teal-600"
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
