import { CLASSIFICATION_HINT, CLASSIFICATION_LABEL } from "@/lib/labels";
import type { Classification } from "@/lib/types";

/** Penanda golongan obat mengikuti logo di kemasan obat di Indonesia. */
function Dot({ classification }: { classification: Classification }) {
  const base =
    "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold leading-none text-white";
  switch (classification) {
    case "bebas":
      return <span className={`${base} bg-green-600`} aria-hidden="true" />;
    case "bebas-terbatas":
      return <span className={`${base} bg-blue-600`} aria-hidden="true" />;
    case "keras":
      return (
        <span className={`${base} bg-red-600`} aria-hidden="true">
          K
        </span>
      );
    case "tradisional":
      return <span className={`${base} bg-emerald-800`} aria-hidden="true" />;
  }
}

export function ClassBadge({
  classification,
  className = "",
}: {
  classification: Classification;
  className?: string;
}) {
  return (
    <span
      title={CLASSIFICATION_HINT[classification]}
      className={`inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 ${className}`}
    >
      <Dot classification={classification} />
      {CLASSIFICATION_LABEL[classification]}
    </span>
  );
}
