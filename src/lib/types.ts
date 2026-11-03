export type Classification = "bebas" | "bebas-terbatas" | "keras" | "tradisional";

export type DosageForm =
  | "tablet"
  | "kapsul"
  | "sirup"
  | "salep"
  | "tetes"
  | "larutan"
  | "serbuk"
  | "minyak";

export type WhoFor = "dewasa" | "anak" | "lansia" | "ibu-hamil-menyusui";
export type SideEffectLevel = "tidak-ada" | "ringan" | "sedang" | "berat";
export type UsageDuration = "sekali" | "1-3-hari" | "4-7-hari" | "lebih-1-minggu" | "rutin";

export type ReviewTag =
  | "cepat-terasa"
  | "efek-tahan-lama"
  | "mudah-ditelan"
  | "rasa-enak"
  | "rasa-kurang-enak"
  | "bikin-ngantuk"
  | "bikin-mual"
  | "harga-terjangkau"
  | "mudah-dicari"
  | "kemasan-praktis";

export type CategoryIconName =
  | "thermometer"
  | "wind"
  | "utensils"
  | "shield"
  | "sun"
  | "droplet"
  | "eye"
  | "leaf"
  | "pill";

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: CategoryIconName;
}

export interface Product {
  slug: string;
  name: string;
  genericName: string;
  manufacturer: string;
  categorySlug: string;
  form: DosageForm;
  strength: string;
  classification: Classification;
  indications: string;
  usageNote: string;
  warnings: string;
  commonSideEffects: string[];
  storage: string;
  priceRange: { min: number; max: number; unit: string };
  targetUsers: WhoFor[];
  keywords: string[];
}

export interface Review {
  id: string;
  productSlug: string;
  nickname: string;
  whoFor: WhoFor;
  rating: number;
  effectiveness: number;
  sideEffectLevel: SideEffectLevel;
  valueForMoney: number;
  usageDuration: UsageDuration;
  title: string;
  body: string;
  tags: ReviewTag[];
  recommend: boolean;
  photos: string[];
  helpfulCount: number;
  createdAt: string;
  isLocal: boolean;
}

export type NewReviewInput = Omit<Review, "id" | "helpfulCount" | "createdAt" | "isLocal">;

export interface ReviewStats {
  count: number;
  avgRating: number;
  avgEffectiveness: number;
  avgValue: number;
  recommendPct: number;
  distribution: Record<1 | 2 | 3 | 4 | 5, number>;
  sideEffects: Record<SideEffectLevel, number>;
  dominantSideEffect: SideEffectLevel | null;
}
