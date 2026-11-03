import type { DosageForm } from "@/lib/types";

const STROKE = "#0f766e";
const LIGHT = "#ccfbf1";
const MID = "#5eead4";

const common = {
  stroke: STROKE,
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Art({ form }: { form: DosageForm }) {
  switch (form) {
    case "tablet":
      return (
        <>
          <circle cx="24" cy="36" r="14" fill="#fff" {...common} />
          <path d="M14 36h20" {...common} />
          <circle cx="44" cy="25" r="10" fill={MID} {...common} />
        </>
      );
    case "kapsul":
      return (
        <g transform="rotate(-35 32 32)">
          <rect x="8" y="22" width="48" height="20" rx="10" fill="#fff" />
          <path d="M32 22h14a10 10 0 0 1 0 20H32z" fill={MID} />
          <rect x="8" y="22" width="48" height="20" rx="10" fill="none" {...common} />
          <path d="M32 22v20" {...common} />
        </g>
      );
    case "salep":
      return (
        <>
          <rect x="26" y="7" width="12" height="9" rx="2" fill={STROKE} />
          <path
            d="M22 16h20l-3 38a2 2 0 0 1-2 2H27a2 2 0 0 1-2-2z"
            fill="#fff"
            {...common}
          />
          <path d="M26 24h12" {...common} />
          <path d="M26.6 50h10.8" {...common} />
        </>
      );
    case "tetes":
      return (
        <>
          <ellipse cx="32" cy="10" rx="5" ry="6" fill={STROKE} />
          <rect x="27" y="15" width="10" height="5" rx="1.5" fill={STROKE} />
          <rect x="21" y="20" width="22" height="36" rx="6" fill="#fff" {...common} />
          <path
            d="M32 30c-4 5-5 7-5 9a5 5 0 0 0 10 0c0-2-1-4-5-9z"
            fill={MID}
            {...common}
          />
        </>
      );
    case "serbuk":
      return (
        <>
          <path d="M17 10h30v44H17z" fill="#fff" {...common} />
          <path d="M17 15h30M17 49h30" {...common} />
          <rect x="23" y="24" width="18" height="14" rx="2" fill={LIGHT} {...common} />
        </>
      );
    case "sirup":
    case "larutan":
    case "minyak":
    default:
      return (
        <>
          <rect x="26" y="6" width="12" height="9" rx="2" fill={STROKE} />
          <path
            d="M24 15h16v5l5 7v27a4 4 0 0 1-4 4H23a4 4 0 0 1-4-4V27l5-7z"
            fill="#fff"
            {...common}
          />
          <rect x="24" y="33" width="16" height="13" rx="2" fill={LIGHT} {...common} />
        </>
      );
  }
}

export function ProductIllustration({
  form,
  className = "h-20 w-20",
}: {
  form: DosageForm;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl bg-teal-50 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="h-3/4 w-3/4" fill="none">
        <Art form={form} />
      </svg>
    </span>
  );
}
