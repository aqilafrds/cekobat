import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer mt-16">
      <div className="mx-auto w-full max-w-5xl space-y-5 px-4 py-10 text-sm text-slate-300 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-5"><span className="text-xl font-semibold tracking-tight text-white">CekObat<span className="text-amber-200">.</span></span><span className="text-xs text-slate-300">Kenali obat. Pahami pengalaman.</span></div>
        <nav
          aria-label="Tautan footer"
          className="flex flex-wrap gap-x-6 gap-y-2 font-medium text-slate-100"
        >
          <Link href="/cari" className="hover:text-teal-700">
            Cari obat
          </Link>
          <Link href="/review-saya" className="hover:text-teal-700">
            Review saya
          </Link>
          <Link href="/panduan" className="hover:text-teal-700">
            Panduan &amp; disclaimer
          </Link>
        </nav>
        <p>{SITE.medicalDisclaimer}</p>
        <p className="text-xs leading-relaxed text-slate-400">
          {SITE.sampleNotice} &copy; {SITE.owner} · {SITE.name}
        </p>
      </div>
    </footer>
  );
}
