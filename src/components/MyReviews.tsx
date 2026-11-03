"use client";

import Link from "next/link";
import { deleteLocalReview, useLocalReviews } from "@/lib/storage";
import { EmptyState } from "./EmptyState";
import { ReviewCard } from "./ReviewCard";

export function MyReviews() {
  const reviews = useLocalReviews();

  if (reviews.length === 0) {
    return (
      <EmptyState
        title="Anda belum menulis review"
        description="Review yang Anda tulis di perangkat ini akan muncul di sini."
      >
        <Link
          href="/tulis-review"
          className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
        >
          Tulis review pertama
        </Link>
      </EmptyState>
    );
  }

  return (
    <ul className="space-y-4">
      {reviews.map((r) => (
        <li key={r.id}>
          <ReviewCard
            review={r}
            showProduct
            onDelete={() => {
              if (window.confirm("Hapus review ini dari perangkat Anda?")) {
                deleteLocalReview(r.id);
              }
            }}
          />
        </li>
      ))}
    </ul>
  );
}
