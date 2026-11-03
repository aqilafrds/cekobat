import type { Metadata } from "next";
import { WriteReviewPage } from "@/components/WriteReviewPage";

export const metadata: Metadata = {
  title: "Tulis review",
};

export default function TulisReviewPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight">Tulis review</h1>
      <p className="mt-1 mb-6 text-sm text-slate-600">
        Bagikan pengalaman Anda memakai suatu obat agar membantu pengguna lain.
      </p>
      <WriteReviewPage />
    </div>
  );
}
