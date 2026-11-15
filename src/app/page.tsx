import Image from "next/image";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { HomeSections } from "@/components/HomeSections";
import { PlusIcon } from "@/components/Icons";
import { SearchBar } from "@/components/SearchBar";
import { SITE } from "@/lib/site";

const POPULAR_QUERIES = ["demam", "batuk", "maag", "alergi", "luka", "diare"];

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-title" className="relative isolate bg-white">
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pb-4 pt-10 sm:px-6 sm:pt-14 lg:py-20">
          <div className="lg:max-w-[56%]">
            <h1 id="hero-title" className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {SITE.tagline}
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-slate-600">
              Cari obat, lihat review dan foto dari pengguna lain, lalu bagikan
              pengalaman Anda untuk membantu orang lain.
            </p>
            <div className="mt-7 max-w-xl text-left">
              <SearchBar />
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <span>Sering dicari:</span>
              {POPULAR_QUERIES.map((q) => (
                <Link
                  key={q}
                  href={`/cari?q=${q}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white/95 px-3 py-1 transition hover:border-teal-600 hover:text-teal-700"
                >
                  {q}
                </Link>
              ))}
            </p>
            <p className="mt-5 max-w-lg text-xs leading-relaxed text-slate-600">{SITE.sampleNotice}</p>
          </div>
        </div>
        <div aria-hidden="true" className="pointer-events-none relative mx-auto h-52 w-full overflow-hidden sm:h-64 lg:absolute lg:inset-0 lg:-z-10 lg:h-full">
          <Image
            src="/images/hero/cekobat-health-discovery.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right lg:object-center"
          />
        </div>
      </section>

      <section
        aria-labelledby="judul-kategori"
        className="mx-auto w-full max-w-5xl px-4 pt-4 sm:px-6"
      >
        <h2 id="judul-kategori" className="mb-5 text-xl font-semibold tracking-tight">
          Telusuri kategori
        </h2>
        <CategoryGrid />
      </section>

      <HomeSections />

      <section className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6">
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-teal-700 p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-semibold">Punya pengalaman dengan suatu obat?</h2>
            <p className="mt-1 text-sm text-teal-50">
              Ceritakan khasiat, efek samping, dan kesesuaian harganya untuk
              membantu pengguna lain.
            </p>
          </div>
          <Link
            href="/tulis-review"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-teal-800 transition hover:bg-teal-50"
          >
            <PlusIcon size={16} />
            Tulis review
          </Link>
        </div>
      </section>
    </>
  );
}
