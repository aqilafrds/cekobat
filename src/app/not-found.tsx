import Link from "next/link";
import { EmptyState } from "@/components/EmptyState";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <EmptyState
        title="Halaman tidak ditemukan"
        description="Produk atau halaman yang Anda cari tidak ada. Coba cari lewat kotak pencarian."
      >
        <Link
          href="/"
          className="rounded-lg bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
        >
          Kembali ke beranda
        </Link>
      </EmptyState>
    </div>
  );
}
