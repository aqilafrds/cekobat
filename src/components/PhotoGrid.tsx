"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "./Icons";
import { PhotoTile } from "./PhotoTile";

export interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
}

function Lightbox({
  photos,
  index,
  onChange,
  onClose,
}: {
  photos: PhotoItem[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];

  const prev = useCallback(
    () => onChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onChange],
  );
  const next = useCallback(
    () => onChange((index + 1) % photos.length),
    [index, photos.length, onChange],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pratinjau foto"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Tutup pratinjau"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <XIcon size={22} />
      </button>
      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Foto sebelumnya"
            className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronLeftIcon size={24} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Foto berikutnya"
            className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronRightIcon size={24} />
          </button>
        </>
      )}
      <figure
        className="flex max-h-full max-w-full flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <PhotoTile
          src={photo.src}
          alt={photo.alt}
          className="h-[min(70vh,28rem)] w-[min(90vw,28rem)] rounded-xl"
        />
        <figcaption className="text-center text-sm text-white/90">
          {photo.caption ?? photo.alt}
          {photos.length > 1 && (
            <span className="ml-2 text-white/60">
              {index + 1}/{photos.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

/** Kumpulan thumbnail foto; klik untuk membuka pratinjau besar. */
export function PhotoGrid({
  photos,
  className = "",
  itemClassName = "h-16 w-16",
}: {
  photos: PhotoItem[];
  className?: string;
  itemClassName?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  if (photos.length === 0) return null;

  return (
    <>
      <ul className={`flex flex-wrap gap-2 ${className}`}>
        {photos.map((p, i) => (
          <li key={`${i}-${p.src.slice(0, 40)}`}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Buka foto: ${p.alt}`}
              className="block overflow-hidden rounded-lg border border-slate-200 transition hover:border-teal-600"
            >
              <PhotoTile src={p.src} alt={p.alt} className={itemClassName} />
            </button>
          </li>
        ))}
      </ul>
      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}
