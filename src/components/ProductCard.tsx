import Link from "next/link";
import { formatRupiah, formatScore } from "@/lib/format";
import { FORM_LABEL } from "@/lib/labels";
import type { Product, ReviewStats } from "@/lib/types";
import { ClassBadge } from "./ClassBadge";
import { ProductImage } from "./ProductImage";
import { RatingStars } from "./RatingStars";

export function ProductCard({
  product,
  stats,
}: {
  product: Product;
  stats: ReviewStats;
}) {
  return (
    <Link
      href={`/produk/${product.slug}`}
      className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-teal-600"
    >
      <ProductImage slug={product.slug} name={product.name} />
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold leading-snug text-slate-900 group-hover:text-teal-700">
          {product.name}
        </h3>
        <p className="mt-0.5 truncate text-sm text-slate-500">
          {FORM_LABEL[product.form]} · {product.genericName}
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm">
          {stats.count > 0 ? (
            <>
              <RatingStars value={stats.avgRating} size={14} />
              <span className="font-medium">{formatScore(stats.avgRating)}</span>
              <span className="text-slate-500">({stats.count})</span>
            </>
          ) : (
            <span className="text-slate-500">Belum ada review</span>
          )}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <ClassBadge classification={product.classification} />
          <span className="text-xs text-slate-500">
            {formatRupiah(product.priceRange.min)} –{" "}
            {formatRupiah(product.priceRange.max)}
          </span>
        </div>
      </div>
    </Link>
  );
}
