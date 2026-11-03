"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { WHO_FOR_LABEL, WHO_FOR_OPTIONS } from "@/lib/labels";
import {
  SORT_LABEL,
  SORT_OPTIONS,
  computeStats,
  filterReviews,
  photosOf,
  sortReviews,
  type ReviewSort,
} from "@/lib/reviews";
import { useHelpfulIds } from "@/lib/storage";
import { useAllReviews } from "@/lib/use-all-reviews";
import type { Product, WhoFor } from "@/lib/types";
import { EmptyState } from "./EmptyState";
import { PlusIcon } from "./Icons";
import { PhotoGrid } from "./PhotoGrid";
import { RatingSummary } from "./RatingSummary";
import { ReviewCard } from "./ReviewCard";

const PAGE_SIZE = 5;
const MAX_GALLERY = 12;

const selectClass =
  "h-10 rounded-lg border border-slate-300 bg-white px-2.5 text-sm text-slate-900 focus:border-teal-600";

export function ReviewSection({ product }: { product: Product }) {
  const all = useAllReviews();
  const helpfulIds = useHelpfulIds();

  const [rating, setRating] = useState("");
  const [whoFor, setWhoFor] = useState("");
  const [sort, setSort] = useState<ReviewSort>("terbaru");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const reviews = useMemo(
    () => all.filter((r) => r.productSlug === product.slug),
    [all, product.slug],
  );
  const stats = useMemo(() => computeStats(reviews), [reviews]);
  const gallery = useMemo(
    () => sortReviews(reviews, "terbaru").flatMap((r) => photosOf([r])),
    [reviews],
  );

  const shown = useMemo(
    () =>
      sortReviews(
        filterReviews(reviews, {
          rating: rating ? Number(rating) : undefined,
          whoFor: (whoFor || undefined) as WhoFor | undefined,
        }),
        sort,
        helpfulIds,
      ),
    [reviews, rating, whoFor, sort, helpfulIds],
  );

  const writeHref = `/tulis-review?produk=${product.slug}`;

  return (
    <section id="review" aria-labelledby="judul-review" className="scroll-mt-24">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 id="judul-review" className="text-xl font-semibold tracking-tight">
          Review pengguna
          {stats.count > 0 && (
            <span className="ml-2 text-base font-normal text-slate-500">
              ({stats.count})
            </span>
          )}
        </h2>
        <Link
          href={writeHref}
          className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-800"
        >
          <PlusIcon size={16} />
          Tulis review
        </Link>
      </div>

      {stats.count === 0 ? (
        <EmptyState
          title="Belum ada review untuk obat ini"
          description="Jadilah yang pertama berbagi pengalaman Anda."
        >
          <Link
            href={writeHref}
            className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
          >
            Tulis review pertama
          </Link>
        </EmptyState>
      ) : (
        <>
          <RatingSummary stats={stats} />

          {gallery.length > 0 && (
            <div className="mt-8">
              <h3 className="mb-3 text-base font-semibold">
                Foto dari reviewer
                <span className="ml-2 text-sm font-normal text-slate-500">
                  ({gallery.length})
                </span>
              </h3>
              <PhotoGrid
                itemClassName="h-24 w-24"
                photos={gallery.slice(0, MAX_GALLERY).map(({ src, review }, i) => ({
                  src,
                  alt: `Foto ${i + 1} dari ${review.nickname}`,
                  caption: `${review.title} · ${review.nickname}`,
                }))}
              />
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-end gap-3">
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
              Rating
              <select
                value={rating}
                onChange={(e) => {
                  setRating(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                className={selectClass}
              >
                <option value="">Semua</option>
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {n} bintang
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
              Untuk siapa
              <select
                value={whoFor}
                onChange={(e) => {
                  setWhoFor(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                className={selectClass}
              >
                <option value="">Semua</option>
                {WHO_FOR_OPTIONS.map((w) => (
                  <option key={w} value={w}>
                    {WHO_FOR_LABEL[w]}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-600">
              Urutkan
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as ReviewSort)}
                className={selectClass}
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {SORT_LABEL[s]}
                  </option>
                ))}
              </select>
            </label>
            <p className="ml-auto pb-2 text-sm text-slate-500" aria-live="polite">
              {shown.length} review
            </p>
          </div>

          {shown.length === 0 ? (
            <div className="mt-4">
              <EmptyState
                title="Tidak ada review yang cocok dengan filter"
                description="Coba ubah atau reset filter."
              />
            </div>
          ) : (
            <>
              <ul className="mt-4 space-y-4">
                {shown.slice(0, visible).map((r) => (
                  <li key={r.id}>
                    <ReviewCard review={r} />
                  </li>
                ))}
              </ul>
              {visible < shown.length && (
                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                  >
                    Tampilkan lebih banyak ({shown.length - visible})
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </section>
  );
}
