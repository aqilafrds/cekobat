import type { Metadata } from "next";
import { SearchResults } from "@/components/SearchResults";

export const metadata: Metadata = {
  title: "Cari obat",
};

export default function CariPage() {
  return <SearchResults />;
}
