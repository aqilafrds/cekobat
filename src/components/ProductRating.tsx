"use client";

import { useMemo } from "react";
import { formatScore } from "@/lib/format";
import { computeStats } from "@/lib/reviews";
import { useAllReviews } from "@/lib/use-all-reviews";
import { RatingStars } from "./RatingStars";

/** Ringkasan rating satu baris untuk bagian atas halaman produk. */
export function ProductRating({ productSlug }: { productSlug: string }) {
  const reviews = useAllReviews();
  const stats = useMemo(
    () => computeStats(reviews.filter((r) => r.productSlug === productSlug)),
    [reviews, productSlug],
  );

  if (stats.count === 0) {
    return <p className="text-sm text-slate-500">Belum ada review</p>;
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="flex items-center gap-2">
        <RatingStars value={stats.avgRating} size={18} />
        <span className="text-base font-semibold">
          {formatScore(stats.avgRating)}
        </span>
      </span>
      <a href="#review" className="text-slate-600 hover:text-teal-700 hover:underline">
        {stats.count} review
      </a>
      <span className="text-slate-600">
        <span className="font-medium text-green-700">{stats.recommendPct}%</span>{" "}
        merekomendasikan
      </span>
    </div>
  );
}
