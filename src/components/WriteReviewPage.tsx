"use client";

import { useUrlSearch } from "@/lib/url-state";
import { ReviewForm } from "./ReviewForm";

/**
 * Membaca `?produk=` dari URL di klien. Halaman tetap statis (tanpa
 * Suspense/`useSearchParams`) dan form tampil seketika.
 */
export function WriteReviewPage() {
  const slug = new URLSearchParams(useUrlSearch()).get("produk") ?? "";
  return <ReviewForm key={slug} initialSlug={slug} />;
}
