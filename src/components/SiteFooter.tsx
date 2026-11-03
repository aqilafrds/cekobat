import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto w-full max-w-5xl space-y-4 px-4 py-8 text-sm text-slate-600 sm:px-6">
        <nav
          aria-label="Tautan footer"
          className="flex flex-wrap gap-x-6 gap-y-2 font-medium text-slate-700"
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
        <p className="text-slate-500">
          {SITE.sampleNotice} &copy; {SITE.owner} · {SITE.name}
        </p>
      </div>
    </footer>
  );
}
