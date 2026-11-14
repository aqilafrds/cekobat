import Image from "next/image";

export function ProductImage({
  slug,
  name,
  className = "size-24",
  sizes = "96px",
}: {
  slug: string;
  name: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <span
      data-product-image={slug}
      className={`relative inline-block shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-teal-50 shadow-sm ${className}`}
    >
      <Image
        src={`/images/produk/${slug}.webp`}
        alt={`Ilustrasi kemasan ${name}`}
        fill
        sizes={sizes}
        className="object-contain"
      />
    </span>
  );
}
