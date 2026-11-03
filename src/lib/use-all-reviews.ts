"use client";

import { useMemo } from "react";
import { seedReviews } from "@/data/reviews";
import { useLocalReviews } from "./storage";
import type { Review } from "./types";

export function useAllReviews(): Review[] {
  const local = useLocalReviews();
  return useMemo(() => [...local, ...seedReviews], [local]);
}
