import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "nyeri-demam",
    name: "Nyeri & Demam",
    description: "Pereda sakit kepala, nyeri, dan penurun demam",
    icon: "thermometer",
  },
  {
    slug: "batuk-flu",
    name: "Batuk & Flu",
    description: "Batuk, pilek, dan hidung tersumbat",
    icon: "wind",
  },
  {
    slug: "pencernaan",
    name: "Pencernaan",
    description: "Maag, kembung, dan diare",
    icon: "utensils",
  },
  {
    slug: "alergi",
    name: "Alergi",
    description: "Bersin, gatal, dan reaksi alergi",
    icon: "shield",
  },
  {
    slug: "vitamin-suplemen",
    name: "Vitamin & Suplemen",
    description: "Penunjang kebutuhan harian",
    icon: "sun",
  },
  {
    slug: "kulit",
    name: "Kulit",
    description: "Luka, antiseptik, dan perawatan kulit",
    icon: "droplet",
  },
  {
    slug: "mata-telinga-hidung",
    name: "Mata, Telinga & Hidung",
    description: "Tetes mata, telinga, dan hidung",
    icon: "eye",
  },
  {
    slug: "herbal-tradisional",
    name: "Herbal & Tradisional",
    description: "Jamu dan obat tradisional",
    icon: "leaf",
  },
  {
    slug: "obat-resep",
    name: "Obat Resep",
    description: "Obat keras yang diberikan dengan resep dokter",
    icon: "pill",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
