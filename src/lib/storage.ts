"use client";

import { useSyncExternalStore } from "react";
import type { Review } from "./types";

export const KEYS = {
  reviews: "cekobat:reviews",
  helpful: "cekobat:helpful",
  reports: "cekobat:reports",
} as const;

type Listener = () => void;
const listeners = new Set<Listener>();
const cache = new Map<string, { raw: string | null; value: unknown }>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === null || Object.values(KEYS).includes(e.key as never)) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function readJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    return fallback;
  }
  const hit = cache.get(key);
  if (hit && hit.raw === raw) return hit.value as T;
  let value: T = fallback;
  if (raw) {
    try {
      value = JSON.parse(raw) as T;
    } catch {
      value = fallback;
    }
  }
  cache.set(key, { raw, value });
  return value;
}

function writeJSON(key: string, value: unknown): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return false;
  }
  emit();
  return true;
}

const EMPTY_REVIEWS: Review[] = [];
const EMPTY_IDS: string[] = [];

export function useLocalReviews(): Review[] {
  return useSyncExternalStore(subscribe, () => readJSON(KEYS.reviews, EMPTY_REVIEWS), () => EMPTY_REVIEWS);
}

export function useHelpfulIds(): string[] {
  return useSyncExternalStore(subscribe, () => readJSON(KEYS.helpful, EMPTY_IDS), () => EMPTY_IDS);
}

export function useReportedIds(): string[] {
  return useSyncExternalStore(subscribe, () => readJSON(KEYS.reports, EMPTY_IDS), () => EMPTY_IDS);
}

export function saveLocalReview(review: Review): boolean {
  const current = readJSON(KEYS.reviews, EMPTY_REVIEWS);
  return writeJSON(KEYS.reviews, [review, ...current]);
}

export function deleteLocalReview(id: string): boolean {
  const current = readJSON(KEYS.reviews, EMPTY_REVIEWS);
  return writeJSON(KEYS.reviews, current.filter((r) => r.id !== id));
}

export function toggleHelpful(id: string): boolean {
  const current = readJSON(KEYS.helpful, EMPTY_IDS);
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  return writeJSON(KEYS.helpful, next);
}

export function reportReview(id: string): boolean {
  const current = readJSON(KEYS.reports, EMPTY_IDS);
  if (current.includes(id)) return true;
  return writeJSON(KEYS.reports, [...current, id]);
}

export function newLocalReviewId(): string {
  return `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
