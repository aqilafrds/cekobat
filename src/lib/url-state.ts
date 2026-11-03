"use client";

import { useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

let historyPatched = false;

function patchHistory() {
  if (historyPatched) return;
  historyPatched = true;
  for (const method of ["pushState", "replaceState"] as const) {
    const original = window.history[method].bind(window.history);
    window.history[method] = (...args: Parameters<History["pushState"]>) => {
      original(...args);
      queueMicrotask(notify);
    };
  }
}

function subscribe(listener: () => void) {
  patchHistory();
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

export function useUrlSearch(): string {
  return useSyncExternalStore(subscribe, () => window.location.search, () => "");
}

const noopSubscribe = () => () => {};

export function useHydrated(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export function setUrlSearch(search: string, mode: "push" | "replace" = "replace") {
  const url = `${window.location.pathname}${search ? `?${search}` : ""}`;
  if (mode === "push") window.history.pushState(null, "", url);
  else window.history.replaceState(null, "", url);
  notify();
}
