import type { ReactNode } from "react";
import { InfoIcon } from "./Icons";

/** Banner informasi kecil, dipakai untuk disclaimer medis dan label data contoh. */
export function Notice({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5 text-sm text-amber-900 ${className}`}
    >
      <InfoIcon size={16} className="mt-0.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}
