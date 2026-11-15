"use client";

import { useMemo } from "react";
import { getProduct } from "@/data/products";
import { seedReviews } from "@/data/reviews";
import { useLocalReviews } from "./storage";
import type { Review } from "./types";

export function useAllReviews(): Review[] {
  const local = useLocalReviews();
  return useMemo(
    () => [...local.filter((review) => getProduct(review.productSlug)), ...seedReviews],
    [local],
  );
}
