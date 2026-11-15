"use client";

import { useEffect, useId, useRef, useSyncExternalStore, type ReactNode } from "react";
import {
  acknowledgeReviewNotice,
  getReviewNoticeServerSnapshot,
  getReviewNoticeSnapshot,
  subscribeReviewNotice,
} from "@/lib/review-notice";
import { InfoIcon } from "./Icons";

export function ReviewReadingGate({ children }: { children: ReactNode }) {
  const accepted = useSyncExternalStore(subscribeReviewNotice, getReviewNoticeSnapshot, getReviewNoticeServerSnapshot);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const overflowRef = useRef<string | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  function restoreScroll() {
    if (overflowRef.current !== null) {
      document.body.style.overflow = overflowRef.current;
      overflowRef.current = null;
    }
  }

  function openNotice(trigger?: HTMLElement) {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    returnFocusRef.current = trigger ?? regionRef.current;
    overflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    titleRef.current?.focus({ preventScroll: true });
  }

  function dismissNotice() {
    acknowledgeReviewNotice();
    dialogRef.current?.close();
    restoreScroll();
    requestAnimationFrame(() => {
      const target = returnFocusRef.current;
      (target?.isConnected ? target : regionRef.current)?.focus({ preventScroll: true });
    });
  }

  useEffect(() => {
    const region = regionRef.current;
    const dialog = dialogRef.current;
    if (!region || !dialog || accepted) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || getReviewNoticeSnapshot() || dialog.open) return;
      returnFocusRef.current = region;
      overflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.showModal();
      titleRef.current?.focus({ preventScroll: true });
      observer.disconnect();
    }, { threshold: 0.1 });
    observer.observe(region);
    return () => observer.disconnect();
  }, [accepted]);

  useEffect(() => () => {
    // Restore page scrolling if navigation unmounts an open dialog.
    if (overflowRef.current !== null) document.body.style.overflow = overflowRef.current;
  }, []);

  return (
    <div ref={regionRef} tabIndex={-1} className="rounded-xl outline-offset-4">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-teal-100 bg-teal-50/80 px-4 py-3">
        <p className="flex items-center gap-2 text-sm font-medium text-teal-900">
          <InfoIcon size={18} /> Pengalaman tiap orang dapat berbeda
        </p>
        <button type="button" onClick={(event) => openNotice(event.currentTarget)} className="min-h-11 rounded-lg px-2 text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950">
          Baca pengingat
        </button>
      </div>

      {accepted ? children : (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <p className="font-semibold text-slate-900">Sebelum membaca pengalaman pengguna</p>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600">Luangkan waktu untuk membaca pengingat singkat agar ulasan dipahami dengan konteks yang tepat.</p>
          <button type="button" onClick={(event) => openNotice(event.currentTarget)} className="mt-4 min-h-11 rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800">
            Baca pengingat dan lanjutkan
          </button>
        </div>
      )}

      <dialog ref={dialogRef} aria-labelledby={titleId} aria-describedby={descriptionId} onCancel={(event) => { event.preventDefault(); dismissNotice(); }} className="review-notice-dialog fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[480px] overflow-y-auto rounded-3xl border border-white/80 bg-white p-0 text-slate-900 shadow-2xl backdrop:bg-slate-950/45 backdrop:backdrop-blur-sm">
        <div className="relative bg-gradient-to-br from-teal-50 via-emerald-50 to-white px-6 pb-5 pt-7 sm:px-8">
          <button type="button" aria-label="Tutup peringatan" onClick={dismissNotice} className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full text-slate-500 transition hover:bg-white hover:text-teal-900">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
          <div aria-hidden="true" className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-teal-100 bg-white text-teal-700 shadow-sm">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M25 19a5 5 0 0 1-5 5H12l-6 4v-8a5 5 0 0 1-2-4V9a5 5 0 0 1 5-5h11a5 5 0 0 1 5 5"/><circle cx="24" cy="15" r="6" fill="white"/><path d="M24 14v4m0-7h.01M9 11h8M9 16h5"/></svg>
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-teal-700">Baca dengan bijak</p>
          <h2 ref={titleRef} tabIndex={-1} id={titleId} className="max-w-xs rounded text-2xl font-bold leading-tight tracking-tight">Setiap orang punya pengalaman berbeda</h2>
        </div>
        <div className="px-6 pb-6 sm:px-8 sm:pb-8">
          <div id={descriptionId} className="space-y-4 text-base leading-relaxed text-slate-600">
            <p>Review menggambarkan pengalaman pribadi. Manfaat maupun efek samping yang dirasakan seseorang belum tentu sama dengan yang Anda alami.</p>
            <p><strong className="font-semibold text-slate-900">Gunakan review sebagai tambahan informasi, bukan pengganti saran dokter atau apoteker.</strong> Jangan memulai, menghentikan, atau mengubah pengobatan hanya berdasarkan ulasan. Diskusikan pertanyaan atau kekhawatiran Anda dengan tenaga kesehatan yang menangani Anda.</p>
          </div>
          <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50 px-4 py-3 text-sm leading-relaxed text-teal-900">
            <span className="mb-1 block font-semibold">Tentang prototipe ini</span>
            Review contoh pada prototipe ini adalah cerita fiktif untuk demonstrasi, bukan pengalaman pengguna sungguhan. Review yang Anda tulis sendiri disimpan di browser ini.
          </div>
          <button type="button" onClick={dismissNotice} className="mt-6 min-h-12 w-full rounded-xl bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800">
            Saya mengerti, lanjut membaca
          </button>
        </div>
      </dialog>
    </div>
  );
}
