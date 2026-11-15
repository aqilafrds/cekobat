import type { Product } from "@/lib/types";

/** Generic demonstration entries. Not registered SKUs; all prices are examples. */
export const additionalProducts: Product[] = [
  {
    "slug": "ibuprofen-200-mg",
    "name": "Ibuprofen 200 mg Tablet",
    "genericName": "Ibuprofen",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "nyeri-demam",
    "form": "tablet",
    "strength": "200 mg",
    "classification": "bebas-terbatas",
    "indications": "Meredakan nyeri ringan hingga sedang dan demam.",
    "usageNote": "Gunakan sesuai petunjuk kemasan, dengan atau setelah makan. Gunakan dosis efektif terendah selama waktu tersingkat.",
    "warnings": "Hindari bila alergi OAINS atau memiliki tukak/perdarahan lambung. Jangan digabung dengan OAINS lain. Konsultasikan bila memiliki penyakit ginjal, menggunakan pengencer darah, atau sedang hamil.",
    "commonSideEffects": [
      "Mual",
      "Nyeri lambung",
      "Pusing"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 5000,
      "max": 20000,
      "unit": "per strip (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "nyeri",
      "demam",
      "sakit gigi",
      "ibuprofen"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.nhs.uk/medicines/ibuprofen-for-adults/"
      }
    ]
  },
  {
    "slug": "parasetamol-tetes-100-mg-ml",
    "name": "Parasetamol 100 mg/mL Tetes oral",
    "genericName": "Parasetamol",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "nyeri-demam",
    "form": "tetes",
    "strength": "100 mg/mL",
    "classification": "bebas",
    "indications": "Meredakan demam dan nyeri ringan.",
    "usageNote": "Takaran harus mengikuti berat badan dan petunjuk produk atau dokter. Gunakan alat takar oral berskala yang sesuai.",
    "warnings": "Konsentrasi tetes berbeda dari sirup: jangan menyamakan volume dosis. Jangan digabung dengan produk lain yang mengandung parasetamol. Demam pada bayi di bawah 3 bulan memerlukan pemeriksaan dokter. Hati-hati pada gangguan hati.",
    "commonSideEffects": [
      "Mual",
      "Ruam kulit (jarang)"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 15000,
      "max": 40000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "anak"
    ],
    "keywords": [
      "demam anak",
      "panas",
      "paracetamol drops",
      "parasetamol"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://standarobat.pom.go.id/sisobat/storage/book/24-21092023-buku-seri-iii-revisi-21923-edit.pdf"
      }
    ]
  },
  {
    "slug": "bromheksin-8-mg",
    "name": "Bromheksin 8 mg Tablet",
    "genericName": "Bromheksin hidroklorida",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "batuk-flu",
    "form": "tablet",
    "strength": "8 mg",
    "classification": "bebas-terbatas",
    "indications": "Membantu mengencerkan dahak pada batuk berdahak.",
    "usageNote": "Diminum sesuai petunjuk kemasan. Perhatikan batas usia dan kekuatan sediaan.",
    "warnings": "Konsultasikan bila memiliki riwayat tukak lambung, sedang hamil atau menyusui. Hentikan dan cari bantuan medis bila timbul ruam luas atau lepuh. Batuk disertai sesak perlu diperiksa.",
    "commonSideEffects": [
      "Mual",
      "Muntah",
      "Diare"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 10000,
      "max": 25000,
      "unit": "per strip (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "batuk berdahak",
      "dahak",
      "bromhexine"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://registrasiobat.pom.go.id/files/assesment-reports/01762402011.pdf"
      }
    ]
  },
  {
    "slug": "bromheksin-guaifenesin-sirup",
    "name": "Bromheksin + Guaifenesin 4 mg + 100 mg / 5 mL Sirup",
    "genericName": "Bromheksin HCl + guaifenesin",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "batuk-flu",
    "form": "sirup",
    "strength": "4 mg + 100 mg / 5 mL",
    "classification": "bebas-terbatas",
    "indications": "Membantu mengencerkan dan mengeluarkan dahak pada batuk berdahak.",
    "usageNote": "Gunakan alat takar dan ikuti petunjuk kemasan. Jangan menggunakan sendok makan rumah tangga.",
    "warnings": "Hindari bila alergi kandungan atau memiliki porfiria. Konsultasikan pada riwayat tukak lambung, kehamilan, atau menyusui. Hentikan bila muncul ruam atau lepuh.",
    "commonSideEffects": [
      "Mual",
      "Muntah",
      "Diare"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 25000,
      "max": 60000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "batuk berdahak",
      "dahak",
      "bromhexine",
      "guaifenesin"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://registrasiobat.pom.go.id/files/assesment-reports/01777002805.pdf"
      }
    ]
  },
  {
    "slug": "bisakodil-5-mg",
    "name": "Bisakodil 5 mg Tablet",
    "genericName": "Bisakodil",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "pencernaan",
    "form": "tablet",
    "strength": "5 mg",
    "classification": "bebas-terbatas",
    "indications": "Membantu mengatasi sembelit untuk penggunaan jangka pendek.",
    "usageNote": "Telan tablet salut enterik utuh; jangan dikunyah atau dihancurkan. Ikuti kemasan mengenai jarak dengan susu atau antasida.",
    "warnings": "Jangan digunakan bila diduga sumbatan usus, nyeri perut hebat disertai muntah, atau dehidrasi berat. Hindari pemakaian terus-menerus tanpa pemeriksaan penyebab sembelit.",
    "commonSideEffects": [
      "Kram perut",
      "Diare",
      "Mual"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 10000,
      "max": 25000,
      "unit": "per strip (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "sembelit",
      "konstipasi",
      "susah bab",
      "bisacodyl"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.nhs.uk/medicines/bisacodyl/"
      }
    ]
  },
  {
    "slug": "laktulosa-sirup",
    "name": "Laktulosa 3,335 g/5 mL Sirup",
    "genericName": "Laktulosa",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "pencernaan",
    "form": "sirup",
    "strength": "3,335 g/5 mL",
    "classification": "bebas",
    "indications": "Membantu melunakkan tinja dan mengatasi sembelit.",
    "usageNote": "Gunakan alat takar sesuai kemasan. Efek tidak selalu langsung terasa; jangan menambah dosis sendiri.",
    "warnings": "Jangan digunakan pada sumbatan saluran cerna atau galaktosemia. Konsultasikan pada diabetes atau nyeri perut yang tidak diketahui penyebabnya. Diare berlebih dapat menyebabkan kehilangan cairan.",
    "commonSideEffects": [
      "Kembung",
      "Diare",
      "Nyeri perut"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 30000,
      "max": 75000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "sembelit",
      "konstipasi",
      "lactulose",
      "susah bab"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://registrasiobat.pom.go.id/files/assesment-reports/01776128743.pdf"
      }
    ]
  },
  {
    "slug": "setirizin-10-mg",
    "name": "Setirizin 10 mg Tablet",
    "genericName": "Setirizin hidroklorida",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "alergi",
    "form": "tablet",
    "strength": "10 mg",
    "classification": "bebas-terbatas",
    "indications": "Meredakan gejala alergi seperti bersin, hidung berair, dan biduran.",
    "usageNote": "Gunakan sesuai petunjuk kemasan. Konsultasikan penyesuaian penggunaan bila memiliki gangguan ginjal.",
    "warnings": "Golongan bebas terbatas di sini mengacu pada tablet paling tinggi 10 mg dengan kemasan maksimal 10 tablet. Dapat menyebabkan kantuk; jangan mengemudi bila mengantuk. Konsultasikan pada kehamilan atau menyusui.",
    "commonSideEffects": [
      "Mengantuk",
      "Mulut kering",
      "Sakit kepala"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 5000,
      "max": 25000,
      "unit": "per kemasan 10 tablet (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "alergi",
      "biduran",
      "bersin",
      "cetirizine"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.nhs.uk/medicines/cetirizine/about-cetirizine/"
      },
      {
        "title": "Permenkes 28/2022 — pembatasan golongan",
        "url": "https://jdih.kemkes.go.id/documents/peraturan-menteri-kesehatan-nomor-28-tahun-2022"
      }
    ]
  },
  {
    "slug": "loratadin-10-mg",
    "name": "Loratadin 10 mg Tablet",
    "genericName": "Loratadin",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "alergi",
    "form": "tablet",
    "strength": "10 mg",
    "classification": "bebas-terbatas",
    "indications": "Meredakan gejala rinitis alergi dan biduran.",
    "usageNote": "Gunakan sesuai petunjuk kemasan; konsultasikan bila memiliki gangguan hati.",
    "warnings": "Golongan bebas terbatas di sini mengacu pada tablet paling tinggi 10 mg dengan kemasan maksimal 10 tablet. Tetap dapat menyebabkan kantuk pada sebagian orang. Konsultasikan pada kehamilan, menyusui, atau penggunaan obat lain.",
    "commonSideEffects": [
      "Sakit kepala",
      "Mengantuk",
      "Mulut kering"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 10000,
      "max": 30000,
      "unit": "per kemasan 10 tablet (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "alergi",
      "biduran",
      "bersin",
      "loratadine"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://registrasiobat.pom.go.id/files/assesment-reports/01776130716.pdf"
      },
      {
        "title": "Permenkes 28/2022 — pembatasan golongan",
        "url": "https://jdih.kemkes.go.id/documents/peraturan-menteri-kesehatan-nomor-28-tahun-2022"
      }
    ]
  },
  {
    "slug": "vitamin-d3-400-iu",
    "name": "Vitamin D3 400 IU Suplemen",
    "genericName": "Kolekalsiferol (vitamin D3)",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "vitamin-suplemen",
    "form": "tablet",
    "strength": "400 IU",
    "classification": "suplemen",
    "indications": "Membantu memenuhi kebutuhan vitamin D yang berperan dalam penyerapan kalsium dan kesehatan tulang.",
    "usageNote": "Ikuti anjuran pada label suplemen atau tenaga kesehatan. Perhitungkan asupan dari suplemen lain.",
    "warnings": "Bukan pengganti makanan bergizi. Penggunaan berlebih dapat menyebabkan kadar kalsium terlalu tinggi. Konsultasikan bila memiliki penyakit ginjal atau sedang menggunakan obat lain.",
    "commonSideEffects": [
      "Mual pada penggunaan berlebih",
      "Gangguan pencernaan"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 20000,
      "max": 70000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "vitamin d",
      "tulang",
      "kolekalsiferol",
      "cholecalciferol"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://ods.od.nih.gov/factsheets/VitaminD-Consumer/"
      }
    ]
  },
  {
    "slug": "zinc-10-mg",
    "name": "Zinc 10 mg Suplemen",
    "genericName": "Zinc (seng elemental)",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "vitamin-suplemen",
    "form": "tablet",
    "strength": "10 mg",
    "classification": "suplemen",
    "indications": "Membantu memenuhi kebutuhan mineral seng untuk fungsi tubuh normal.",
    "usageNote": "Ikuti label suplemen. Kekuatan 10 mg pada contoh ini merujuk jumlah seng elemental.",
    "warnings": "Bukan pengganti terapi diare anak. Seng dapat berinteraksi dengan antibiotik tertentu; tanyakan jarak minum kepada apoteker. Penggunaan berlebih dalam jangka panjang dapat menurunkan kadar tembaga.",
    "commonSideEffects": [
      "Mual",
      "Nyeri perut",
      "Muntah"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 15000,
      "max": 50000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "seng",
      "zinc",
      "mineral",
      "suplemen"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://ods.od.nih.gov/factsheets/Zinc-Consumer/"
      }
    ]
  },
  {
    "slug": "vitamin-b-kompleks",
    "name": "Vitamin B Kompleks",
    "genericName": "Kombinasi vitamin B (komposisi mengikuti label)",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "vitamin-suplemen",
    "form": "tablet",
    "strength": "Bervariasi menurut produk; lihat label",
    "classification": "suplemen",
    "indications": "Membantu memenuhi kebutuhan vitamin B sesuai komposisi produk.",
    "usageNote": "Ikuti label produk; kombinasi dan jumlah masing-masing vitamin berbeda antarproduk.",
    "warnings": "Jangan menumpuk beberapa suplemen dengan kandungan sama. Vitamin B6 dosis tinggi dalam jangka panjang dapat merusak saraf. Bukan pengganti pemeriksaan penyebab kesemutan atau lemas.",
    "commonSideEffects": [
      "Mual",
      "Gangguan pencernaan"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 10000,
      "max": 40000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "vitamin b",
      "b complex",
      "suplemen"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://ods.od.nih.gov/factsheets/VitaminB6-Consumer/"
      }
    ]
  },
  {
    "slug": "klotrimazol-krim-1-persen",
    "name": "Klotrimazol 1% Krim",
    "genericName": "Klotrimazol",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "kulit",
    "form": "krim",
    "strength": "1%",
    "classification": "bebas-terbatas",
    "indications": "Antijamur untuk infeksi jamur kulit tertentu.",
    "usageNote": "Oleskan pada kulit yang bersih dan kering sesuai label. Ikuti lama pemakaian yang dianjurkan.",
    "warnings": "Hanya untuk kulit, bukan mata atau bagian dalam mulut. Jangan menganggap semua ruam sebagai jamur. Periksakan bila meluas, memburuk, atau tidak membaik.",
    "commonSideEffects": [
      "Rasa terbakar lokal",
      "Kemerahan",
      "Iritasi"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 15000,
      "max": 45000,
      "unit": "per tube (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "jamur kulit",
      "kurap",
      "kutu air",
      "clotrimazole"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.nhs.uk/medicines/clotrimazole/"
      }
    ]
  },
  {
    "slug": "mikonazol-krim-2-persen",
    "name": "Mikonazol 2% Krim",
    "genericName": "Mikonazol nitrat",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "kulit",
    "form": "krim",
    "strength": "2%",
    "classification": "bebas-terbatas",
    "indications": "Antijamur untuk infeksi jamur kulit tertentu.",
    "usageNote": "Oleskan sesuai petunjuk pada kulit yang bersih dan kering. Cuci tangan setelah pemakaian.",
    "warnings": "Hanya untuk pemakaian kulit. Hindari mata. Konsultasikan sebelum penggunaan bila mengonsumsi warfarin. Hentikan bila terjadi reaksi alergi.",
    "commonSideEffects": [
      "Rasa terbakar lokal",
      "Iritasi",
      "Kemerahan"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 15000,
      "max": 50000,
      "unit": "per tube (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "jamur kulit",
      "kurap",
      "kutu air",
      "miconazole"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://registrasiobat.pom.go.id/files/assesment-reports/01731563440.pdf"
      }
    ]
  },
  {
    "slug": "hipromelosa-tetes-mata",
    "name": "Hipromelosa 0,3% Tetes mata",
    "genericName": "Hipromelosa (hypromellose)",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "mata-telinga-hidung",
    "form": "tetes",
    "strength": "0,3%",
    "classification": "bebas-terbatas",
    "indications": "Pelumas mata untuk membantu meredakan gejala mata kering.",
    "usageNote": "Cuci tangan sebelum meneteskan. Jangan menyentuhkan ujung botol ke mata atau permukaan lain. Ikuti petunjuk mengenai lensa kontak dan masa pakai setelah dibuka.",
    "warnings": "Jangan berbagi botol tetes mata. Periksakan bila mata nyeri, penglihatan berubah, atau iritasi menetap. Bukan terapi semua penyebab mata merah.",
    "commonSideEffects": [
      "Penglihatan kabur sementara",
      "Rasa perih sementara"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 20000,
      "max": 50000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "mata kering",
      "air mata buatan",
      "hypromellose",
      "hipromelosa"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.rohto.co.id/product/detail/rohto-dryfresh"
      }
    ]
  },
  {
    "slug": "xilometazolin-tetes-hidung",
    "name": "Xilometazolin 0,1% Tetes hidung",
    "genericName": "Xilometazolin hidroklorida",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "mata-telinga-hidung",
    "form": "tetes",
    "strength": "0,1%",
    "classification": "bebas-terbatas",
    "indications": "Membantu meredakan hidung tersumbat untuk penggunaan singkat.",
    "usageNote": "Gunakan hanya pada hidung sesuai petunjuk kemasan dan batas usia sediaan 0,1%. Jangan dipakai lebih lama dari petunjuk.",
    "warnings": "Pemakaian terlalu lama dapat menyebabkan hidung tersumbat kembali. Konsultasikan pada hipertensi, penyakit jantung, glaukoma, hipertiroid, kehamilan, atau penggunaan antidepresan. Sediaan dewasa bukan untuk anak kecil.",
    "commonSideEffects": [
      "Hidung kering",
      "Rasa perih",
      "Bersin"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 20000,
      "max": 60000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "hidung tersumbat",
      "pilek",
      "xylometazoline"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://sfda.gov.sa/en/details_data?id=2511211366&nid=17582&page=2"
      }
    ]
  },
  {
    "slug": "jahe-kapsul",
    "name": "Jahe Kapsul",
    "genericName": "Jahe (Zingiber officinale)",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "herbal-tradisional",
    "form": "kapsul",
    "strength": "Bervariasi menurut produk; lihat label",
    "classification": "tradisional",
    "indications": "Contoh sediaan herbal berbahan jahe. Klaim penggunaan harus mengikuti label produk terdaftar; bukti manfaat tidak sama untuk semua kondisi.",
    "usageNote": "Ikuti petunjuk produk terdaftar. Jenis ekstrak dan kekuatan berbeda antarproduk.",
    "warnings": "Bahan alami tetap dapat menimbulkan efek samping dan interaksi. Konsultasikan bila hamil, menyusui, atau menggunakan obat lain. Jangan menggantikan terapi dokter dengan herbal.",
    "commonSideEffects": [
      "Nyeri ulu hati",
      "Diare",
      "Perut tidak nyaman"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 20000,
      "max": 60000,
      "unit": "per botol (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "jahe",
      "ginger",
      "herbal",
      "jamu"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.nccih.nih.gov/health/ginger"
      }
    ]
  },
  {
    "slug": "omeprazol-20-mg",
    "name": "Omeprazol 20 mg Kapsul",
    "genericName": "Omeprazol",
    "manufacturer": "Kemasan demonstrasi — bukan produsen nyata",
    "categorySlug": "obat-resep",
    "form": "kapsul",
    "strength": "20 mg",
    "classification": "keras",
    "indications": "Menurunkan produksi asam lambung pada kondisi tertentu sesuai diagnosis dokter.",
    "usageNote": "Gunakan sesuai resep dan lama terapi yang ditentukan dokter. Sediaan lepas tunda tidak boleh dihancurkan sembarangan.",
    "warnings": "Obat keras: hanya dengan resep dokter. Jangan digunakan untuk menutupi keluhan berulang tanpa pemeriksaan. Segera cari pertolongan bila muntah darah, BAB hitam, sulit menelan, atau berat badan turun tanpa sebab. Beri tahu dokter semua obat yang digunakan.",
    "commonSideEffects": [
      "Sakit kepala",
      "Nyeri perut",
      "Mual",
      "Diare"
    ],
    "storage": "Ikuti suhu dan petunjuk penyimpanan pada label. Simpan tertutup, terlindung dari panas dan cahaya, jauh dari jangkauan anak. Untuk sediaan yang dibuka, ikuti batas waktu penggunaan pada kemasan.",
    "priceRange": {
      "min": 10000,
      "max": 35000,
      "unit": "per strip sesuai resep (harga contoh)"
    },
    "targetUsers": [
      "dewasa"
    ],
    "keywords": [
      "asam lambung",
      "gerd",
      "omeprazole",
      "resep"
    ],
    "imageKind": "ai",
    "sources": [
      {
        "title": "Rujukan informasi bahan / sediaan",
        "url": "https://www.nhs.uk/medicines/omeprazole/"
      }
    ]
  }
];
