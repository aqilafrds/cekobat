import type {
  Classification,
  DosageForm,
  ReviewTag,
  SideEffectLevel,
  UsageDuration,
  WhoFor,
} from "./types";

export const CLASSIFICATION_LABEL: Record<Classification, string> = {
  bebas: "Obat Bebas",
  "bebas-terbatas": "Obat Bebas Terbatas",
  keras: "Obat Keras",
  tradisional: "Obat Tradisional",
};

export const CLASSIFICATION_HINT: Record<Classification, string> = {
  bebas: "Dapat dibeli tanpa resep",
  "bebas-terbatas": "Dapat dibeli tanpa resep, perhatikan peringatan di kemasan",
  keras: "Hanya dengan resep dokter",
  tradisional: "Jamu/herbal, tidak termasuk golongan obat modern",
};

export const FORM_LABEL: Record<DosageForm, string> = {
  tablet: "Tablet",
  kapsul: "Kapsul",
  sirup: "Sirup",
  salep: "Salep/Krim",
  tetes: "Tetes",
  larutan: "Larutan",
  serbuk: "Serbuk",
  minyak: "Minyak",
};

export const WHO_FOR_LABEL: Record<WhoFor, string> = {
  dewasa: "Dewasa",
  anak: "Anak",
  lansia: "Lansia",
  "ibu-hamil-menyusui": "Ibu hamil/menyusui",
};

export const SIDE_EFFECT_LABEL: Record<SideEffectLevel, string> = {
  "tidak-ada": "Tidak ada",
  ringan: "Ringan",
  sedang: "Sedang",
  berat: "Berat",
};

export const DURATION_LABEL: Record<UsageDuration, string> = {
  sekali: "Sekali pakai",
  "1-3-hari": "1–3 hari",
  "4-7-hari": "4–7 hari",
  "lebih-1-minggu": "Lebih dari 1 minggu",
  rutin: "Rutin/jangka panjang",
};

export const TAG_LABEL: Record<ReviewTag, string> = {
  "cepat-terasa": "Cepat terasa",
  "efek-tahan-lama": "Efek tahan lama",
  "mudah-ditelan": "Mudah ditelan",
  "rasa-enak": "Rasa enak",
  "rasa-kurang-enak": "Rasa kurang enak",
  "bikin-ngantuk": "Bikin ngantuk",
  "bikin-mual": "Bikin mual",
  "harga-terjangkau": "Harga terjangkau",
  "mudah-dicari": "Mudah dicari",
  "kemasan-praktis": "Kemasan praktis",
};

export const WHO_FOR_OPTIONS = Object.keys(WHO_FOR_LABEL) as WhoFor[];
export const SIDE_EFFECT_OPTIONS = Object.keys(SIDE_EFFECT_LABEL) as SideEffectLevel[];
export const DURATION_OPTIONS = Object.keys(DURATION_LABEL) as UsageDuration[];
export const TAG_OPTIONS = Object.keys(TAG_LABEL) as ReviewTag[];
export const FORM_OPTIONS = Object.keys(FORM_LABEL) as DosageForm[];
export const CLASSIFICATION_OPTIONS = Object.keys(CLASSIFICATION_LABEL) as Classification[];
