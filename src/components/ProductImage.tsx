type PackKind = "box" | "bottle" | "dropper" | "sachet";

type PackSpec = {
  label: string;
  detail: string;
  kind: PackKind;
  accent: string;
  soft: string;
  dark?: string;
};

const PACKS: Record<string, PackSpec> = {
  "minyak-kayu-putih-60-ml": {
    label: "KAYU PUTIH",
    detail: "60 mL",
    kind: "bottle",
    accent: "#0f766e",
    soft: "#ccfbf1",
    dark: "#134e4a",
  },
  "paracetamol-500-mg-tablet": {
    label: "PARACETAMOL",
    detail: "500 mg",
    kind: "box",
    accent: "#2563eb",
    soft: "#dbeafe",
  },
  "paracetamol-sirup-120-mg": {
    label: "PARACETAMOL",
    detail: "Sirup Anak",
    kind: "bottle",
    accent: "#e11d48",
    soft: "#ffe4e6",
    dark: "#78350f",
  },
  "obat-batuk-hitam-sirup": {
    label: "OBH",
    detail: "Sirup Batuk",
    kind: "bottle",
    accent: "#854d0e",
    soft: "#fef3c7",
    dark: "#451a03",
  },
  "antasida-tablet-kunyah": {
    label: "ANTASIDA",
    detail: "Tablet Kunyah",
    kind: "box",
    accent: "#0891b2",
    soft: "#cffafe",
  },
  "obat-flu-kombinasi-tablet": {
    label: "FLU",
    detail: "Kombinasi",
    kind: "box",
    accent: "#7c3aed",
    soft: "#ede9fe",
  },
  "oralit-serbuk": {
    label: "ORALIT",
    detail: "Serbuk",
    kind: "sachet",
    accent: "#0284c7",
    soft: "#e0f2fe",
  },
  "klorfeniramin-maleat-ctm-4-mg": {
    label: "CTM",
    detail: "4 mg",
    kind: "box",
    accent: "#059669",
    soft: "#d1fae5",
  },
  "vitamin-c-500-mg": {
    label: "VITAMIN C",
    detail: "500 mg",
    kind: "box",
    accent: "#ea580c",
    soft: "#ffedd5",
  },
  "multivitamin-sirup-anak": {
    label: "MULTIVITAMIN",
    detail: "Sirup Anak",
    kind: "bottle",
    accent: "#f59e0b",
    soft: "#fef3c7",
    dark: "#92400e",
  },
  "povidon-iodin-10-larutan": {
    label: "POVIDON IODIN",
    detail: "Antiseptik 10%",
    kind: "bottle",
    accent: "#b45309",
    soft: "#fef3c7",
    dark: "#431407",
  },
  "tetes-mata-tetrahidrozolin": {
    label: "TETES MATA",
    detail: "Eye Drops",
    kind: "dropper",
    accent: "#0ea5e9",
    soft: "#e0f2fe",
  },
  "amoxicillin-500-mg-kapsul": {
    label: "AMOXICILLIN",
    detail: "500 mg",
    kind: "box",
    accent: "#dc2626",
    soft: "#fee2e2",
  },
};

const DEFAULT_PACK: PackSpec = {
  label: "CEKOBAT",
  detail: "Produk",
  kind: "box",
  accent: "#0f766e",
  soft: "#ccfbf1",
};

function Label({ spec, x = 80, y = 102 }: { spec: PackSpec; x?: number; y?: number }) {
  const labelSize = spec.label.length > 11 ? 8 : spec.label.length > 8 ? 9 : 11;
  return (
    <>
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fill="#0f172a"
        fontSize={labelSize}
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        letterSpacing="0.35"
      >
        {spec.label}
      </text>
      <text
        x={x}
        y={y + 13}
        textAnchor="middle"
        fill="#64748b"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="Arial, sans-serif"
      >
        {spec.detail}
      </text>
    </>
  );
}

function BoxPack({ spec }: { spec: PackSpec }) {
  return (
    <>
      <ellipse cx="80" cy="159" rx="44" ry="7" fill="#cbd5e1" opacity="0.45" />
      <path d="M43 43l72-8 7 11-72 8z" fill={spec.soft} opacity="0.8" />
      <rect x="38" y="43" width="84" height="110" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M38 60h84v25H38z" fill={spec.accent} />
      <path d="M38 84h84v8H38z" fill={spec.soft} />
      <circle cx="104" cy="72" r="8" fill="#fff" opacity="0.95" />
      <path d="M99 72h10M104 67v10" stroke={spec.accent} strokeWidth="2" strokeLinecap="round" />
      <Label spec={spec} y={112} />
      <rect x="55" y="129" width="50" height="5" rx="2.5" fill={spec.soft} />
      <rect x="62" y="139" width="36" height="4" rx="2" fill="#e2e8f0" />
    </>
  );
}

function BottlePack({ spec }: { spec: PackSpec }) {
  const body = spec.dark ?? "#78350f";
  return (
    <>
      <ellipse cx="80" cy="162" rx="36" ry="7" fill="#cbd5e1" opacity="0.45" />
      <rect x="62" y="25" width="36" height="16" rx="4" fill={spec.accent} stroke="#0f172a" strokeOpacity="0.12" />
      <path d="M57 43h46l7 12v82c0 13-9 21-21 21H71c-12 0-21-8-21-21V55z" fill={body} stroke="#334155" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M56 52h48" stroke="#fff" strokeOpacity="0.35" strokeWidth="3" />
      <rect x="55" y="72" width="50" height="54" rx="6" fill="#fff" />
      <rect x="55" y="72" width="50" height="13" rx="6" fill={spec.accent} />
      <rect x="55" y="80" width="50" height="6" fill={spec.accent} />
      <Label spec={spec} y={101} />
      <path d="M64 135h32" stroke={spec.soft} strokeWidth="5" strokeLinecap="round" />
      <path d="M68 145h24" stroke="#fff" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function DropperPack({ spec }: { spec: PackSpec }) {
  return (
    <>
      <ellipse cx="80" cy="163" rx="31" ry="6" fill="#cbd5e1" opacity="0.45" />
      <path d="M75 24h10l5 15H70z" fill={spec.accent} />
      <rect x="66" y="37" width="28" height="13" rx="4" fill="#fff" stroke="#94a3b8" strokeWidth="2" />
      <rect x="53" y="48" width="54" height="108" rx="15" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M53 78h54v42H53z" fill={spec.soft} />
      <circle cx="80" cy="72" r="9" fill={spec.accent} opacity="0.95" />
      <path d="M80 66c-5 7-7 10-7 13a7 7 0 0014 0c0-3-2-6-7-13z" fill="#fff" />
      <Label spec={spec} y={99} />
      <path d="M67 135h26" stroke={spec.accent} strokeWidth="4" strokeLinecap="round" />
    </>
  );
}

function SachetPack({ spec }: { spec: PackSpec }) {
  return (
    <>
      <ellipse cx="80" cy="161" rx="42" ry="6" fill="#cbd5e1" opacity="0.45" />
      <path d="M41 34h78l-4 124H45z" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <path d="M42 50h76v31H42z" fill={spec.accent} />
      <path d="M45 37l8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <path d="M45 151l8-5 8 5 8-5 8 5 8-5 8 5 8-5 8 5 8-5" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      <Label spec={spec} y={105} />
      <circle cx="80" cy="132" r="11" fill={spec.soft} />
      <path d="M74 132h12M80 126v12" stroke={spec.accent} strokeWidth="2.4" strokeLinecap="round" />
    </>
  );
}

function Packshot({ spec }: { spec: PackSpec }) {
  switch (spec.kind) {
    case "bottle":
      return <BottlePack spec={spec} />;
    case "dropper":
      return <DropperPack spec={spec} />;
    case "sachet":
      return <SachetPack spec={spec} />;
    default:
      return <BoxPack spec={spec} />;
  }
}

export function ProductImage({
  slug,
  name,
  className = "h-24 w-20",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const spec = PACKS[slug] ?? DEFAULT_PACK;

  return (
    <span
      role="img"
      aria-label={`Ilustrasi kemasan ${name}`}
      data-product-image={slug}
      className={`inline-flex shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-sm ${className}`}
    >
      <svg viewBox="0 0 160 192" className="h-full w-full" aria-hidden="true">
        <rect width="160" height="192" fill="transparent" />
        <Packshot spec={spec} />
      </svg>
    </span>
  );
}
