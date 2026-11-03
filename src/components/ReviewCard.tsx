"use client";

import Link from "next/link";
import { getProduct } from "@/data/products";
import { formatDate } from "@/lib/format";
import {
  DURATION_LABEL,
  SIDE_EFFECT_LABEL,
  TAG_LABEL,
  WHO_FOR_LABEL,
} from "@/lib/labels";
import { displayedHelpful } from "@/lib/reviews";
import {
  reportReview,
  toggleHelpful,
  useHelpfulIds,
  useReportedIds,
} from "@/lib/storage";
import type { Review } from "@/lib/types";
import { CheckIcon, FlagIcon, ThumbIcon, TrashIcon } from "./Icons";
import { PhotoGrid } from "./PhotoGrid";
import { RatingStars } from "./RatingStars";

export function ReviewCard({
  review,
  showProduct = false,
  compact = false,
  onDelete,
}: {
  review: Review;
  showProduct?: boolean;
  /** Tampilan ringkas untuk daftar "Review tren": isi dipotong, tanpa aksi. */
  compact?: boolean;
  onDelete?: () => void;
}) {
  const helpfulIds = useHelpfulIds();
  const reportedIds = useReportedIds();
  const product = showProduct ? getProduct(review.productSlug) : undefined;

  const voted = helpfulIds.includes(review.id);
  const reported = reportedIds.includes(review.id);

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
      {product && (
        <Link
          href={`/produk/${product.slug}`}
          className="mb-3 text-sm font-semibold text-teal-700 hover:underline"
        >
          {product.name}
        </Link>
      )}

      <header className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        <span className="font-medium text-slate-900">{review.nickname}</span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
          {WHO_FOR_LABEL[review.whoFor]}
        </span>
        {review.isLocal && (
          <span className="rounded-full bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-700">
            Review Anda
          </span>
        )}
        <time
          dateTime={review.createdAt}
          className="ml-auto text-xs text-slate-500"
        >
          {formatDate(review.createdAt)}
        </time>
      </header>

      <div className="mt-2 flex items-center gap-2">
        <RatingStars value={review.rating} size={16} />
        <h3 className="font-semibold text-slate-900">{review.title}</h3>
      </div>

      <p
        className={`mt-2 text-sm leading-relaxed text-slate-700 ${compact ? "line-clamp-4" : ""}`}
      >
        {review.body}
      </p>

      {!compact && (
        <>
          <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
            <div className="flex gap-1">
              <dt>Efektivitas</dt>
              <dd className="font-medium text-slate-800">
                {review.effectiveness}/5
              </dd>
            </div>
            <div className="flex gap-1">
              <dt>Efek samping</dt>
              <dd className="font-medium text-slate-800">
                {SIDE_EFFECT_LABEL[review.sideEffectLevel]}
              </dd>
            </div>
            <div className="flex gap-1">
              <dt>Harga</dt>
              <dd className="font-medium text-slate-800">
                {review.valueForMoney}/5
              </dd>
            </div>
            <div className="flex gap-1">
              <dt>Durasi</dt>
              <dd className="font-medium text-slate-800">
                {DURATION_LABEL[review.usageDuration]}
              </dd>
            </div>
          </dl>

          {review.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {review.tags.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                >
                  {TAG_LABEL[t]}
                </li>
              ))}
            </ul>
          )}

          {review.photos.length > 0 && (
            <PhotoGrid
              className="mt-3"
              itemClassName="h-20 w-20"
              photos={review.photos.map((src, i) => ({
                src,
                alt: `Foto ${i + 1} dari ${review.nickname}`,
                caption: `${review.title} · ${review.nickname}`,
              }))}
            />
          )}
        </>
      )}

      <footer className="mt-auto flex flex-wrap items-center gap-2 pt-4 text-sm">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium ${review.recommend ? "text-green-700" : "text-slate-500"}`}
        >
          {review.recommend ? (
            <>
              <CheckIcon size={14} /> Merekomendasikan
            </>
          ) : (
            "Tidak merekomendasikan"
          )}
        </span>

        {!compact && (
          <div className="ml-auto flex items-center gap-2">
            {onDelete ? (
              <button
                type="button"
                onClick={onDelete}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 transition hover:border-red-500 hover:text-red-600"
              >
                <TrashIcon size={14} /> Hapus
              </button>
            ) : (
              !review.isLocal && (
                <>
                  <button
                    type="button"
                    onClick={() => toggleHelpful(review.id)}
                    aria-pressed={voted}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 transition ${voted ? "border-teal-600 bg-teal-50 text-teal-800" : "border-slate-300 text-slate-700 hover:border-teal-600"}`}
                  >
                    <ThumbIcon size={14} />
                    Membantu ({displayedHelpful(review, helpfulIds)})
                  </button>
                  <button
                    type="button"
                    onClick={() => reportReview(review.id)}
                    disabled={reported}
                    className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-slate-500 transition hover:text-red-600 disabled:cursor-default disabled:text-slate-400 disabled:hover:text-slate-400"
                  >
                    <FlagIcon size={14} />
                    {reported ? "Dilaporkan" : "Laporkan"}
                  </button>
                </>
              )
            )}
          </div>
        )}
      </footer>
    </article>
  );
}
