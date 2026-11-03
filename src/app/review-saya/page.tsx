import type { Metadata } from "next";
import { MyReviews } from "@/components/MyReviews";
import { Notice } from "@/components/Notice";

export const metadata: Metadata = {
  title: "Review saya",
};

export default function ReviewSayaPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight">Review saya</h1>
      <Notice className="mt-4 mb-6">
        Karena tanpa akun, review disimpan di browser perangkat ini. Menghapus data
        browser akan menghapus review tersebut.
      </Notice>
      <MyReviews />
    </div>
  );
}
