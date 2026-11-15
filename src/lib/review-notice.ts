// Session-scoped acknowledgement; never store this preference in localStorage.
const KEY = "cekobat:review-notice:v1";
let accepted = false;
let initialized = false;
const listeners = new Set<() => void>();

export function subscribeReviewNotice(listener: () => void) {
  listeners.add(listener);
  if (!initialized && typeof window !== "undefined") {
    initialized = true;
    queueMicrotask(() => {
      try {
        accepted = window.sessionStorage.getItem(KEY) === "read";
      } catch {
        // Memory-only acknowledgement still works when storage is unavailable.
      }
      listeners.forEach((notify) => notify());
    });
  }
  return () => { listeners.delete(listener); };
}
export function getReviewNoticeSnapshot() { return accepted; }
export function getReviewNoticeServerSnapshot() { return false; }
export function acknowledgeReviewNotice() {
  accepted = true;
  try { window.sessionStorage.setItem(KEY, "read"); } catch { /* Keep the in-memory value. */ }
  listeners.forEach((notify) => notify());
}
