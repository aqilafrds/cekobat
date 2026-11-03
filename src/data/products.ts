import type { Product } from "@/lib/types";

const MAKER = "Produsen Contoh";
const STORAGE_DRY =
  "Simpan di tempat sejuk dan kering, terlindung dari cahaya matahari langsung, jauh dari jangkauan anak-anak.";
const STORAGE_BOTTLE =
  "Simpan di tempat sejuk, tutup rapat setelah dibuka, jauh dari jangkauan anak-anak. Perhatikan batas waktu pemakaian setelah kemasan dibuka.";

/**
 * DATA CONTOH untuk prototipe. Memakai nama zat generik dan produsen fiktif,
 * bukan merek asli. Verifikasi dengan sumber resmi (kemasan/BPOM) sebelum
 * dipakai pada produk nyata.
 */
export const products: Product[] = [
  {
    slug: "paracetamol-500-mg-tablet",
    name: "Paracetamol 500 mg",
    genericName: "Parasetamol",
    manufacturer: MAKER,
    categorySlug: "nyeri-demam",
    form: "tablet",
    strength: "500 mg",
    classification: "bebas",
    indications:
      "Meredakan demam serta nyeri ringan hingga sedang, seperti sakit kepala, sakit gigi, dan nyeri otot.",
    usageNote:
      "Diminum sesudah makan dengan air putih. Ikuti takaran pada kemasan dan jangan melebihi batas harian yang tertera.",
    warnings:
      "Jangan dikombinasikan dengan obat lain yang juga mengandung parasetamol. Hati-hati pada penderita gangguan hati. Konsultasi ke dokter bila demam berlanjut lebih dari 3 hari.",
    commonSideEffects: ["Mual (jarang)", "Ruam kulit (jarang)"],
    storage: STORAGE_DRY,
    priceRange: { min: 5000, max: 15000, unit: "per strip" },
    targetUsers: ["dewasa", "lansia"],
    keywords: ["panas", "demam", "sakit kepala", "pusing", "sakit gigi", "pegal"],
  },
  {
    slug: "paracetamol-sirup-120-mg",
    name: "Paracetamol Sirup 120 mg/5 mL",
    genericName: "Parasetamol",
    manufacturer: MAKER,
    categorySlug: "nyeri-demam",
    form: "sirup",
    strength: "120 mg/5 mL",
    classification: "bebas",
    indications: "Menurunkan demam dan meredakan nyeri ringan pada anak.",
    usageNote:
      "Kocok dahulu, gunakan pipet atau sendok takar bawaan. Takaran disesuaikan dengan usia/berat badan sesuai kemasan atau anjuran dokter.",
    warnings:
      "Gunakan alat takar yang disertakan, bukan sendok makan biasa. Jangan diberikan bersama obat lain yang mengandung parasetamol. Segera ke dokter bila demam anak sangat tinggi atau tidak turun.",
    commonSideEffects: ["Mual (jarang)", "Ruam kulit (jarang)"],
    storage: STORAGE_BOTTLE,
    priceRange: { min: 15000, max: 30000, unit: "per botol 60 mL" },
    targetUsers: ["anak"],
    keywords: ["panas", "demam anak", "demam", "imunisasi", "pegal"],
  },
  {
    slug: "obat-batuk-hitam-sirup",
    name: "Obat Batuk Hitam (OBH) Sirup",
    genericName: "Ekstrak akar manis, amonium klorida, dan bahan lain",
    manufacturer: MAKER,
    categorySlug: "batuk-flu",
    form: "sirup",
    strength: "Kombinasi tetap (lihat kemasan)",
    classification: "bebas-terbatas",
    indications: "Meredakan batuk berdahak.",
    usageNote:
      "Dikocok dahulu, diminum sesuai takaran pada kemasan, sebaiknya setelah makan.",
    warnings:
      "Tidak dianjurkan untuk anak di bawah usia yang tertera pada kemasan. Konsultasi ke dokter bila batuk berlangsung lebih dari 1–2 minggu atau disertai sesak napas. Hati-hati pada penderita tekanan darah tinggi atau gangguan lambung.",
    commonSideEffects: ["Mual", "Perut tidak nyaman"],
    storage: STORAGE_BOTTLE,
    priceRange: { min: 8000, max: 20000, unit: "per botol" },
    targetUsers: ["dewasa", "lansia"],
    keywords: ["batuk", "dahak", "batuk berdahak", "tenggorokan"],
  },
  {
    slug: "obat-flu-kombinasi-tablet",
    name: "Obat Flu Kombinasi Tablet",
    genericName: "Parasetamol, klorfeniramin maleat, fenilefrin HCl",
    manufacturer: MAKER,
    categorySlug: "batuk-flu",
    form: "tablet",
    strength: "Kombinasi tetap (lihat kemasan)",
    classification: "bebas-terbatas",
    indications:
      "Meredakan gejala flu: demam, sakit kepala, hidung tersumbat, dan bersin-bersin.",
    usageNote:
      "Diminum sesudah makan dengan air putih, sesuai takaran pada kemasan.",
    warnings:
      "Dapat menyebabkan kantuk, jangan mengemudi atau mengoperasikan mesin. Jangan digabung dengan obat lain yang mengandung parasetamol. Hati-hati pada penderita tekanan darah tinggi, penyakit jantung, glaukoma, atau gangguan prostat.",
    commonSideEffects: ["Mengantuk", "Mulut kering", "Pusing"],
    storage: STORAGE_DRY,
    priceRange: { min: 3000, max: 12000, unit: "per strip" },
    targetUsers: ["dewasa"],
    keywords: ["pilek", "flu", "hidung tersumbat", "bersin", "meriang", "masuk angin"],
  },
  {
    slug: "antasida-tablet-kunyah",
    name: "Antasida Tablet Kunyah",
    genericName: "Aluminium hidroksida + magnesium hidroksida",
    manufacturer: MAKER,
    categorySlug: "pencernaan",
    form: "tablet",
    strength: "200 mg / 200 mg",
    classification: "bebas-terbatas",
    indications:
      "Meredakan gejala maag: nyeri ulu hati, perut kembung, mual, dan rasa panas di dada akibat asam lambung berlebih.",
    usageNote:
      "Dikunyah sampai halus, diminum saat gejala muncul atau 1 jam setelah makan, sesuai takaran pada kemasan.",
    warnings:
      "Dapat mengganggu penyerapan obat lain, beri jeda waktu. Hati-hati pada penderita gangguan ginjal. Konsultasi ke dokter bila gejala sering kambuh atau disertai muntah darah atau BAB hitam.",
    commonSideEffects: ["Sembelit atau diare", "Rasa kapur di mulut"],
    storage: STORAGE_DRY,
    priceRange: { min: 5000, max: 15000, unit: "per strip" },
    targetUsers: ["dewasa", "lansia", "ibu-hamil-menyusui"],
    keywords: ["maag", "asam lambung", "kembung", "ulu hati", "heartburn", "gerd", "mual"],
  },
  {
    slug: "oralit-serbuk",
    name: "Oralit (Garam Rehidrasi Oral) Serbuk",
    genericName: "Natrium klorida, kalium klorida, natrium sitrat, glukosa",
    manufacturer: MAKER,
    categorySlug: "pencernaan",
    form: "serbuk",
    strength: "Per sachet (lihat kemasan)",
    classification: "bebas",
    indications: "Mengganti cairan dan elektrolit pada diare atau dehidrasi ringan.",
    usageNote:
      "Larutkan satu sachet dalam air matang sesuai jumlah yang tertera pada kemasan. Jangan dicampur susu atau jus.",
    warnings:
      "Bukan pengganti penanganan medis. Segera ke fasilitas kesehatan bila diare berat, ada darah pada tinja, atau pasien (terutama anak) tampak lemas. Jangan mengubah jumlah air dari petunjuk kemasan.",
    commonSideEffects: ["Mual", "Muntah bila diminum terlalu cepat"],
    storage: STORAGE_DRY,
    priceRange: { min: 1500, max: 3000, unit: "per sachet" },
    targetUsers: ["dewasa", "anak", "lansia"],
    keywords: ["diare", "mencret", "dehidrasi", "muntaber", "lemas"],
  },
  {
    slug: "klorfeniramin-maleat-ctm-4-mg",
    name: "Klorfeniramin Maleat (CTM) 4 mg",
    genericName: "Klorfeniramin maleat",
    manufacturer: MAKER,
    categorySlug: "alergi",
    form: "tablet",
    strength: "4 mg",
    classification: "bebas-terbatas",
    indications:
      "Meredakan gejala alergi: bersin, hidung berair, mata gatal, dan gatal-gatal pada kulit.",
    usageNote: "Diminum sesuai takaran pada kemasan, sebaiknya saat malam hari karena dapat menyebabkan kantuk.",
    warnings:
      "Menyebabkan kantuk, hindari berkendara atau mengoperasikan mesin. Hindari alkohol. Hati-hati pada penderita glaukoma, pembesaran prostat, dan asma.",
    commonSideEffects: ["Mengantuk", "Mulut kering", "Pusing"],
    storage: STORAGE_DRY,
    priceRange: { min: 2000, max: 6000, unit: "per strip" },
    targetUsers: ["dewasa"],
    keywords: ["alergi", "gatal", "bersin", "biduran", "rhinitis", "debu", "gigitan serangga"],
  },
  {
    slug: "vitamin-c-500-mg",
    name: "Vitamin C 500 mg",
    genericName: "Asam askorbat",
    manufacturer: MAKER,
    categorySlug: "vitamin-suplemen",
    form: "tablet",
    strength: "500 mg",
    classification: "bebas",
    indications: "Membantu memenuhi kebutuhan vitamin C dan menjaga daya tahan tubuh.",
    usageNote: "Diminum setelah makan, sesuai takaran pada kemasan.",
    warnings:
      "Dosis berlebih dapat menyebabkan gangguan lambung dan diare. Hati-hati pada penderita dengan riwayat batu ginjal.",
    commonSideEffects: ["Perut tidak nyaman", "Diare (dosis tinggi)"],
    storage: STORAGE_DRY,
    priceRange: { min: 10000, max: 40000, unit: "per botol" },
    targetUsers: ["dewasa", "lansia"],
    keywords: ["daya tahan", "imun", "imunitas", "suplemen", "pancaroba", "sariawan"],
  },
  {
    slug: "multivitamin-sirup-anak",
    name: "Multivitamin Sirup Anak",
    genericName: "Kombinasi vitamin dan mineral",
    manufacturer: MAKER,
    categorySlug: "vitamin-suplemen",
    form: "sirup",
    strength: "Kombinasi (lihat kemasan)",
    classification: "bebas",
    indications:
      "Membantu memenuhi kebutuhan vitamin harian anak, terutama saat nafsu makan menurun.",
    usageNote: "Gunakan pipet takar sesuai usia, diminum setelah makan.",
    warnings:
      "Bukan pengganti makanan bergizi. Konsultasi ke dokter bila anak memiliki alergi atau sedang menjalani pengobatan lain.",
    commonSideEffects: ["Urine berwarna kuning terang", "Mual (jarang)"],
    storage: STORAGE_BOTTLE,
    priceRange: { min: 30000, max: 60000, unit: "per botol 100 mL" },
    targetUsers: ["anak"],
    keywords: ["nafsu makan", "anak susah makan", "vitamin anak", "tumbuh kembang"],
  },
  {
    slug: "povidon-iodin-10-larutan",
    name: "Povidon Iodin 10% Larutan Antiseptik",
    genericName: "Povidon iodin",
    manufacturer: MAKER,
    categorySlug: "kulit",
    form: "larutan",
    strength: "10%",
    classification: "bebas-terbatas",
    indications: "Antiseptik untuk luka ringan, lecet, dan goresan agar tidak terinfeksi.",
    usageNote:
      "Bersihkan luka lebih dulu, lalu oleskan tipis. Hanya untuk pemakaian luar.",
    warnings:
      "Hanya untuk pemakaian luar. Hindari pada penderita alergi iodium atau gangguan tiroid. Jangan digunakan pada luka bakar luas atau luka dalam.",
    commonSideEffects: ["Iritasi kulit", "Kulit kemerahan", "Noda cokelat sementara"],
    storage: STORAGE_BOTTLE,
    priceRange: { min: 8000, max: 25000, unit: "per botol 30 mL" },
    targetUsers: ["dewasa", "anak"],
    keywords: ["luka", "lecet", "antiseptik", "luka bakar ringan", "goresan", "betadine"],
  },
  {
    slug: "tetes-mata-tetrahidrozolin",
    name: "Tetes Mata Pereda Mata Merah",
    genericName: "Tetrahidrozolin HCl",
    manufacturer: MAKER,
    categorySlug: "mata-telinga-hidung",
    form: "tetes",
    strength: "0,05%",
    classification: "bebas-terbatas",
    indications:
      "Meredakan mata merah dan iritasi ringan akibat debu, asap, atau mata lelah.",
    usageNote:
      "Teteskan pada kantung mata bawah sesuai kemasan. Jangan menyentuhkan ujung botol ke mata.",
    warnings:
      "Jangan dipakai berhari-hari tanpa saran dokter. Lepas lensa kontak sebelum meneteskan. Periksa ke dokter bila mata nyeri, penglihatan kabur, atau tidak membaik. Hati-hati pada penderita glaukoma.",
    commonSideEffects: ["Perih sesaat", "Pupil melebar", "Mata kering"],
    storage: STORAGE_BOTTLE,
    priceRange: { min: 10000, max: 25000, unit: "per botol kecil" },
    targetUsers: ["dewasa", "lansia"],
    keywords: ["mata merah", "mata perih", "mata lelah", "iritasi mata", "belekan"],
  },
  {
    slug: "minyak-kayu-putih-60-ml",
    name: "Minyak Kayu Putih 60 mL",
    genericName: "Minyak atsiri kayu putih",
    manufacturer: MAKER,
    categorySlug: "herbal-tradisional",
    form: "minyak",
    strength: "60 mL",
    classification: "tradisional",
    indications:
      "Menghangatkan badan, meredakan perut kembung, gigitan serangga, dan pegal ringan.",
    usageNote:
      "Oleskan tipis pada kulit atau hirup aromanya. Hanya untuk pemakaian luar.",
    warnings:
      "Hanya untuk pemakaian luar, jauhkan dari mata dan selaput lendir. Konsultasikan dulu penggunaan pada bayi dan anak kecil. Dapat mengiritasi kulit sensitif. Mudah terbakar.",
    commonSideEffects: ["Kulit terasa panas", "Iritasi pada kulit sensitif"],
    storage: STORAGE_BOTTLE,
    priceRange: { min: 15000, max: 40000, unit: "per botol" },
    targetUsers: ["dewasa", "anak", "lansia"],
    keywords: ["pegal", "masuk angin", "kembung", "gigitan nyamuk", "hangat", "jamu"],
  },
  {
    slug: "amoxicillin-500-mg-kapsul",
    name: "Amoxicillin 500 mg Kapsul",
    genericName: "Amoksisilin",
    manufacturer: MAKER,
    categorySlug: "obat-resep",
    form: "kapsul",
    strength: "500 mg",
    classification: "keras",
    indications:
      "Antibiotik untuk infeksi bakteri tertentu. Hanya digunakan atas resep dan anjuran dokter.",
    usageNote:
      "Diminum sesuai resep dan dihabiskan sesuai lama pengobatan yang ditetapkan dokter.",
    warnings:
      "Obat keras: hanya dengan resep dokter. Jangan membeli atau memakai tanpa resep dan jangan menghentikan sendiri sebelum waktunya. Jangan dipakai bila alergi penisilin. Segera cari bantuan medis bila muncul ruam luas, bengkak pada wajah, atau sesak napas.",
    commonSideEffects: ["Diare", "Mual", "Ruam kulit"],
    storage: STORAGE_DRY,
    priceRange: { min: 15000, max: 45000, unit: "per strip (sesuai resep)" },
    targetUsers: ["dewasa", "lansia"],
    keywords: ["antibiotik", "infeksi", "radang tenggorokan", "bakteri", "resep"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
