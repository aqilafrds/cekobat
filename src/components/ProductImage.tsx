/* eslint-disable @next/next/no-img-element */
const PRODUCT_INDEX: Record<string, number> = {
  "minyak-kayu-putih-60-ml": 0,
  "paracetamol-500-mg-tablet": 1,
  "paracetamol-sirup-120-mg": 2,
  "obat-batuk-hitam-sirup": 3,
  "antasida-tablet-kunyah": 4,
  "obat-flu-kombinasi-tablet": 5,
  "oralit-serbuk": 6,
  "klorfeniramin-maleat-ctm-4-mg": 7,
  "vitamin-c-500-mg": 8,
  "multivitamin-sirup-anak": 9,
  "povidon-iodin-10-larutan": 10,
  "tetes-mata-tetrahidrozolin": 11,
  "amoxicillin-500-mg-kapsul": 12,
};

export function ProductImage({
  slug,
  name,
  className = "h-24 w-20",
}: {
  slug: string;
  name: string;
  className?: string;
}) {
  const index = PRODUCT_INDEX[slug] ?? 0;

  return (
    <span
      role="img"
      aria-label={`Ilustrasi kemasan ${name}`}
      data-product-image={slug}
      className={`relative inline-flex shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white ${className}`}
    >
      <img
        src="/product-images/catalog.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 h-full max-w-none"
        style={{
          width: "1300%",
          maxWidth: "none",
          left: `${-index * 100}%`,
        }}
      />
    </span>
  );
}
