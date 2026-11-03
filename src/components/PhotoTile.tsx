import type { DosageForm } from "@/lib/types";
import { ProductIllustration } from "./ProductIllustration";

const SAMPLE_FORM: Record<string, DosageForm> = {
  strip: "tablet",
  box: "kapsul",
  bottle: "sirup",
  sachet: "serbuk",
};

const SAMPLE_BG: Record<string, string> = {
  strip: "bg-slate-100",
  box: "bg-amber-50",
  bottle: "bg-sky-50",
  sachet: "bg-rose-50",
};

export function isSamplePhoto(src: string): boolean {
  return src.startsWith("sample:");
}

/** Foto unggahan pengguna (data URL) atau ubin placeholder "Foto contoh". */
export function PhotoTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  if (isSamplePhoto(src)) {
    const variant = src.slice("sample:".length);
    return (
      <span
        role="img"
        aria-label={`${alt} (foto contoh)`}
        className={`relative flex items-center justify-center overflow-hidden ${SAMPLE_BG[variant] ?? "bg-slate-100"} ${className}`}
      >
        <ProductIllustration
          form={SAMPLE_FORM[variant] ?? "tablet"}
          className="h-3/5 w-3/5 bg-transparent"
        />
        <span className="absolute bottom-1 right-1 whitespace-nowrap rounded bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">
          Foto contoh
        </span>
      </span>
    );
  }
  return (
    // Data URL dari unggahan lokal, tidak cocok untuk next/image.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
    />
  );
}
