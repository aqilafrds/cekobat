import { getProduct } from "@/data/products";
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
  const isAI = getProduct(slug)?.imageKind === "ai";
  return (
    <span
      data-product-image={slug}
      className={`relative inline-block shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-teal-50 shadow-sm ${className}`}
    >
      <Image
        src={`/images/produk/${slug}.webp`}
        alt={`Ilustrasi ${isAI ? "AI " : ""}kemasan ${name}`}
        fill
        sizes={sizes}
        className="object-contain"
      />
      {isAI && <span className="absolute inset-x-0 bottom-0 bg-white/95 py-0.5 text-center text-[10px] font-semibold text-teal-800">Ilustrasi AI</span>}
    </span>
  );
}
