import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategory } from "@/data/categories";
import { getProduct, products } from "@/data/products";
import { ClassBadge } from "@/components/ClassBadge";
import { InfoIcon, PlusIcon } from "@/components/Icons";
import { Notice } from "@/components/Notice";
import { ProductIllustration } from "@/components/ProductIllustration";
import { ProductRating } from "@/components/ProductRating";
import { ReviewSection } from "@/components/ReviewSection";
import { formatPriceRange } from "@/lib/format";
import { CLASSIFICATION_HINT, FORM_LABEL, WHO_FOR_LABEL } from "@/lib/labels";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/produk/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `Review dan informasi ${product.name}: ${product.indications}`,
  };
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-medium text-slate-500">{label}</dt>
      <dd className="mt-0.5 text-sm text-slate-900">{children}</dd>
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-1.5 text-sm leading-relaxed text-slate-700">{children}</div>
    </section>
  );
}

function ProductSkeleton() {
  return (
    <div
      className="mx-auto w-full max-w-5xl animate-pulse px-4 py-8 sm:px-6"
      aria-busy="true"
      aria-label="Memuat produk"
    >
      <div className="h-4 w-48 rounded bg-slate-100" />
      <div className="mt-6 flex gap-5">
        <div className="h-32 w-32 rounded-2xl bg-slate-100" />
        <div className="flex-1 space-y-3">
          <div className="h-5 w-28 rounded-full bg-slate-100" />
          <div className="h-8 w-2/3 rounded bg-slate-100" />
          <div className="h-4 w-1/3 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

// `params` dibaca di dalam Suspense agar kerangka halaman bisa tampil seketika.
export default function ProductPage(props: PageProps<"/produk/[slug]">) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent params={props.params} />
    </Suspense>
  );
}

async function ProductContent({
  params,
}: {
  params: PageProps<"/produk/[slug]">["params"];
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.categorySlug);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
      <nav aria-label="Jejak halaman" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <li>
            <Link href="/" className="hover:text-teal-700">
              Beranda
            </Link>
          </li>
          {category && (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/cari?kategori=${category.slug}`}
                  className="hover:text-teal-700"
                >
                  {category.name}
                </Link>
              </li>
            </>
          )}
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-slate-700">
            {product.name}
          </li>
        </ol>
      </nav>

      <header className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
        <ProductIllustration form={product.form} className="h-32 w-32" />
        <div className="min-w-0 flex-1">
          <ClassBadge classification={product.classification} />
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-1 text-slate-600">
            {FORM_LABEL[product.form]} · {product.genericName}
          </p>
          <div className="mt-3">
            <ProductRating productSlug={product.slug} />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={`/tulis-review?produk=${product.slug}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-teal-800"
            >
              <PlusIcon size={16} />
              Tulis review
            </Link>
            <a
              href="#review"
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
            >
              Baca review
            </a>
          </div>
        </div>
      </header>

      <Notice className="mt-6">{SITE.medicalDisclaimer}</Notice>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          <InfoBlock title="Kegunaan">{product.indications}</InfoBlock>
          <InfoBlock title="Cara pemakaian umum">{product.usageNote}</InfoBlock>
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="flex items-center gap-2 text-base font-semibold text-amber-900">
              <InfoIcon size={18} />
              Peringatan
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-amber-900">
              {product.warnings}
            </p>
          </section>
          <InfoBlock title="Efek samping umum">
            <ul className="list-inside list-disc space-y-0.5">
              {product.commonSideEffects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </InfoBlock>
          <InfoBlock title="Penyimpanan">{product.storage}</InfoBlock>
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-base font-semibold">Ringkasan produk</h2>
          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
            <Fact label="Zat aktif">{product.genericName}</Fact>
            <Fact label="Kekuatan">{product.strength}</Fact>
            <Fact label="Bentuk sediaan">{FORM_LABEL[product.form]}</Fact>
            <Fact label="Golongan">
              {product.classification === "keras" ? (
                <>Obat Keras · {CLASSIFICATION_HINT.keras}</>
              ) : (
                CLASSIFICATION_HINT[product.classification]
              )}
            </Fact>
            <Fact label="Produsen">{product.manufacturer}</Fact>
            <Fact label="Kisaran harga">{formatPriceRange(product.priceRange)}</Fact>
            <Fact label="Umumnya untuk">
              {product.targetUsers.map((u) => WHO_FOR_LABEL[u]).join(", ")}
            </Fact>
          </dl>
          <p className="mt-4 border-t border-slate-200 pt-3 text-xs text-slate-500">
            {SITE.sampleNotice}
          </p>
        </aside>
      </div>

      <div className="mt-12">
        <ReviewSection product={product} />
      </div>
    </div>
  );
}
