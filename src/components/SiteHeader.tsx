import Link from "next/link";
import { SITE } from "@/lib/site";
import { PillIcon, PlusIcon } from "./Icons";

const navLink =
  "hidden rounded-md px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 sm:inline-block";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-white">
            <PillIcon size={18} />
          </span>
          {SITE.name}
        </Link>
        <nav aria-label="Navigasi utama" className="flex items-center gap-1 text-sm">
          <Link href="/cari" className={navLink}>
            Cari obat
          </Link>
          <Link href="/review-saya" className={navLink}>
            Review saya
          </Link>
          <Link href="/panduan" className={navLink}>
            Panduan
          </Link>
          <Link
            href="/tulis-review"
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg bg-teal-700 px-3.5 py-2 font-medium text-white transition hover:bg-teal-800"
          >
            <PlusIcon size={16} />
            Tulis review
          </Link>
        </nav>
      </div>
    </header>
  );
}
