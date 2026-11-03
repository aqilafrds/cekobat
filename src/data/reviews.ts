import type {
  Review,
  ReviewTag,
  SideEffectLevel,
  UsageDuration,
  WhoFor,
} from "@/lib/types";

type R = 1 | 2 | 3 | 4 | 5;

type Row = [
  string,
  WhoFor,
  R,
  R,
  SideEffectLevel,
  R,
  UsageDuration,
  string,
  string,
  ReviewTag[],
  boolean,
  number,
  string,
  string[]?,
];

/** DATA CONTOH untuk prototipe. Semua nama penulis dan isi review fiktif. */
const rows: Record<string, Row[]> = {
  "paracetamol-500-mg-tablet": [
    ["Dina_R", "dewasa", 5, 5, "tidak-ada", 5, "1-3-hari", "Andalan kalau demam", "Selalu sedia di kotak P3K. Demam turun dalam sekitar satu jam setelah minum, dan tidak bikin perut perih kalau diminum sesudah makan.", ["cepat-terasa", "harga-terjangkau", "mudah-dicari"], true, 24, "2026-10-28", ["sample:strip"]],
    ["Pak Agus", "lansia", 4, 4, "ringan", 5, "sekali", "Meredakan sakit kepala", "Sakit kepala karena begadang reda dalam waktu sekitar 30–45 menit. Murah dan ada di warung mana saja.", ["harga-terjangkau", "mudah-dicari"], true, 11, "2026-10-21"],
    ["Rani", "ibu-hamil-menyusui", 4, 4, "tidak-ada", 4, "1-3-hari", "Sempat tanya bidan dulu", "Saya konsultasi dulu ke bidan sebelum minum karena sedang menyusui. Setelah dapat saran, obat ini bekerja baik untuk demam saya. Tetap tanya tenaga kesehatan ya.", ["cepat-terasa"], true, 17, "2026-10-14"],
    ["Bimo", "dewasa", 3, 3, "ringan", 4, "4-7-hari", "Biasa saja untuk nyeri otot", "Untuk demam lumayan, tapi nyeri otot setelah olahraga hanya berkurang sedikit. Sempat agak mual saat diminum sebelum makan.", ["bikin-mual"], false, 5, "2026-09-30"],
    ["Wulan", "dewasa", 5, 5, "tidak-ada", 5, "sekali", "Sakit gigi tertolong sementara", "Sakit gigi malam hari jadi bisa tidur. Tentu tetap harus ke dokter gigi esoknya.", ["cepat-terasa", "efek-tahan-lama"], true, 9, "2026-09-18", ["sample:box"]],
    ["Hendra", "dewasa", 4, 4, "tidak-ada", 5, "1-3-hari", "Aman dan murah", "Sudah bertahun-tahun pakai saat demam ringan. Tablet mudah ditelan dan tidak pahit.", ["mudah-ditelan", "harga-terjangkau"], true, 6, "2026-08-29"],
  ],
  "paracetamol-sirup-120-mg": [
    ["Mama Kayla", "anak", 5, 5, "tidak-ada", 4, "1-3-hari", "Anak mau minum karena rasanya enak", "Anak usia 3 tahun biasanya menolak obat, tapi yang ini rasa jeruk dan dia mau. Demam turun dengan baik. Kami pakai pipet bawaan.", ["rasa-enak", "cepat-terasa"], true, 31, "2026-10-30", ["sample:bottle"]],
    ["Ayah Reza", "anak", 4, 4, "tidak-ada", 4, "1-3-hari", "Pipet takar membantu", "Ada pipet takar jadi gampang mengukur. Demam anak turun, tapi tetap kami bawa ke dokter karena belum membaik di hari ketiga.", ["kemasan-praktis"], true, 14, "2026-10-19"],
    ["Siska", "anak", 3, 3, "ringan", 3, "1-3-hari", "Rasanya terlalu manis", "Efeknya oke, tapi anak saya kadang muntah karena terlalu manis. Lebih suka kalau rasanya tidak terlalu pekat.", ["rasa-kurang-enak"], false, 4, "2026-10-02"],
    ["Tante Lina", "anak", 5, 5, "tidak-ada", 5, "sekali", "Selalu stok di rumah", "Keponakan sering demam setelah imunisasi, dokter menyarankan ini. Stok di rumah selalu ada.", ["cepat-terasa", "mudah-dicari"], true, 12, "2026-09-12"],
    ["Dewi", "anak", 4, 4, "ringan", 4, "sekali", "Sempat mual sedikit", "Anak saya sempat sedikit mual setelah minum, tapi hilang sendiri. Demamnya turun dengan baik.", [], true, 3, "2026-08-22"],
  ],
  "obat-batuk-hitam-sirup": [
    ["Mbak Tari", "dewasa", 4, 4, "ringan", 5, "4-7-hari", "Batuk berdahak jadi lebih lega", "Setelah 3 hari batuk berdahak mulai lebih mudah dikeluarkan. Rasanya manis dan agak pahit, tapi saya suka.", ["harga-terjangkau"], true, 15, "2026-10-26", ["sample:bottle"]],
    ["Pak Hasan", "lansia", 3, 3, "ringan", 4, "4-7-hari", "Membantu, tapi bikin mual sedikit", "Dahak berkurang, tapi sempat mual kalau diminum dalam keadaan perut kosong. Sekarang selalu setelah makan.", ["bikin-mual"], true, 8, "2026-10-10"],
    ["Nia", "dewasa", 5, 5, "tidak-ada", 5, "4-7-hari", "Langganan sejak kuliah", "Tiap musim hujan pasti stok. Batuk saya reda dalam beberapa hari.", ["mudah-dicari", "harga-terjangkau"], true, 10, "2026-09-25"],
    ["Rudi", "dewasa", 2, 2, "ringan", 3, "lebih-1-minggu", "Tidak banyak berpengaruh", "Batuk saya lebih dari seminggu dan tidak banyak membaik, akhirnya periksa ke dokter dan ternyata butuh penanganan lain. Jangan menunda ke dokter kalau batuk lama.", [], false, 20, "2026-09-05"],
    ["Citra", "dewasa", 4, 4, "tidak-ada", 4, "1-3-hari", "Rasa khas yang saya suka", "Rasanya manis herbal, mudah diminum. Batuk ringan saya reda cepat.", ["rasa-enak"], true, 2, "2026-08-18"],
  ],
  "obat-flu-kombinasi-tablet": [
    ["Fajar", "dewasa", 5, 5, "ringan", 5, "1-3-hari", "Pagi flu, siang sudah enakan", "Hidung tersumbat dan pusing reda cukup cepat. Efek sampingnya ngantuk, jadi saya minum malam hari.", ["cepat-terasa", "bikin-ngantuk"], true, 22, "2026-10-29", ["sample:strip"]],
    ["Lestari", "dewasa", 4, 4, "sedang", 4, "1-3-hari", "Ampuh tapi ngantuk berat", "Gejala flu reda, tapi saya ngantuk sekali sampai tidak bisa bekerja. Jangan minum sebelum menyetir.", ["bikin-ngantuk", "cepat-terasa"], true, 19, "2026-10-15"],
    ["Mas Dodi", "dewasa", 3, 3, "ringan", 4, "1-3-hari", "Mulut jadi kering", "Bersin-bersin berhenti, tapi mulut kering dan sedikit pusing.", [], false, 6, "2026-09-28"],
    ["Bu Yanti", "lansia", 3, 3, "sedang", 3, "sekali", "Sempat berdebar", "Setelah minum saya merasa agak berdebar. Saya konsultasi ke dokter dan disarankan memilih obat lain karena tekanan darah saya tinggi.", [], false, 28, "2026-09-14"],
    ["Gita", "dewasa", 4, 4, "ringan", 5, "1-3-hari", "Praktis dalam satu tablet", "Satu tablet sudah mencakup demam, hidung tersumbat, dan bersin. Praktis kalau sedang bepergian.", ["kemasan-praktis", "harga-terjangkau"], true, 4, "2026-08-25"],
  ],
  "antasida-tablet-kunyah": [
    ["Ibu Maya", "dewasa", 5, 5, "ringan", 5, "sekali", "Nyeri ulu hati reda cepat", "Perih di ulu hati hilang sekitar 15 menit setelah dikunyah. Rasa kapurnya agak khas tapi tertahankan.", ["cepat-terasa", "rasa-kurang-enak"], true, 18, "2026-10-27", ["sample:strip"]],
    ["Eko", "dewasa", 4, 4, "ringan", 5, "1-3-hari", "Penolong saat telat makan", "Kalau lambung mulai kembung karena telat makan, ini membantu. Efeknya sementara.", ["harga-terjangkau"], true, 9, "2026-10-12"],
    ["Santi", "ibu-hamil-menyusui", 4, 4, "tidak-ada", 4, "4-7-hari", "Heartburn saat hamil", "Saya konsultasi ke dokter kandungan yang mengizinkan antasida untuk heartburn kehamilan. Cukup membantu.", ["cepat-terasa"], true, 16, "2026-09-29"],
    ["Pak Yoga", "dewasa", 3, 3, "ringan", 4, "lebih-1-minggu", "Gejala sering kambuh", "Reda sementara, tapi maag saya kambuh lagi terus sampai akhirnya periksa ke dokter. Obat ini bukan solusi jangka panjang.", ["rasa-kurang-enak"], true, 13, "2026-09-08"],
    ["Alya", "dewasa", 4, 4, "ringan", 4, "sekali", "Rasa mint membantu", "Varian rasa mint terasa lebih enak, perut jadi lega. Sempat sedikit sembelit.", ["rasa-enak"], true, 3, "2026-08-20"],
  ],
  "oralit-serbuk": [
    ["Pak Wahyu", "dewasa", 5, 5, "tidak-ada", 5, "1-3-hari", "Diare tidak sampai lemas", "Saat diare, oralit membantu menggantikan cairan sehingga tidak lemas. Murah sekali dan mudah dicari.", ["harga-terjangkau", "mudah-dicari"], true, 21, "2026-10-24", ["sample:sachet"]],
    ["Mama Nabila", "anak", 4, 4, "ringan", 5, "1-3-hari", "Anak diare, diminum sedikit-sedikit", "Rasanya agak asin, anak harus dibujuk. Kami beri sedikit-sedikit dan tetap kontrol ke dokter.", ["rasa-kurang-enak"], true, 15, "2026-10-08"],
    ["Intan", "dewasa", 4, 4, "ringan", 5, "1-3-hari", "Penyelamat sehabis muntaber", "Setelah muntaber badan lemas; oralit membantu pulih. Mual sedikit kalau diminum cepat.", ["bikin-mual", "harga-terjangkau"], true, 7, "2026-09-20"],
    ["Pak Slamet", "lansia", 5, 5, "tidak-ada", 5, "1-3-hari", "Sedia di rumah", "Selalu sedia sachet di rumah, apalagi musim penyakit perut.", ["kemasan-praktis"], true, 4, "2026-08-31"],
  ],
  "klorfeniramin-maleat-ctm-4-mg": [
    ["Mira", "dewasa", 5, 5, "sedang", 5, "sekali", "Alergi debu reda, tapi ngantuk", "Bersin-bersin dan hidung berair reda dalam sejam. Efek ngantuknya terasa, jadi saya minum menjelang tidur.", ["bikin-ngantuk", "cepat-terasa", "harga-terjangkau"], true, 26, "2026-10-25", ["sample:strip"]],
    ["Yudi", "dewasa", 3, 4, "berat", 4, "sekali", "Terlalu ngantuk untuk kerja", "Gatal-gatalnya hilang tetapi saya sangat mengantuk dan lemas sepanjang hari. Tidak cocok untuk saya yang harus mengemudi.", ["bikin-ngantuk"], false, 12, "2026-10-09"],
    ["Bu Retno", "lansia", 3, 3, "sedang", 4, "sekali", "Mulut kering dan pusing", "Gatal berkurang, tapi mulut sangat kering dan pusing. Dokter menyarankan alternatif yang tidak membuat ngantuk.", [], false, 9, "2026-09-22"],
    ["Putri", "dewasa", 4, 4, "ringan", 5, "1-3-hari", "Murah dan efektif", "Untuk alergi musiman cukup. Murah sekali dibanding obat alergi lain.", ["harga-terjangkau", "mudah-dicari"], true, 8, "2026-09-02"],
    ["Danu", "dewasa", 4, 4, "ringan", 5, "1-3-hari", "Gatal gigitan serangga berkurang", "Gatal akibat gigitan serangga berkurang. Ngantuk sedikit.", ["bikin-ngantuk"], true, 2, "2026-08-16"],
  ],
  "vitamin-c-500-mg": [
    ["Sinta", "dewasa", 4, 4, "tidak-ada", 4, "rutin", "Rutin saat musim pancaroba", "Saya minum rutin saat pancaroba dan merasa lebih jarang meriang. Mungkin juga faktor lain, tapi saya lanjutkan.", ["mudah-ditelan"], true, 12, "2026-10-23", ["sample:bottle"]],
    ["Ardi", "dewasa", 3, 3, "ringan", 3, "rutin", "Perut agak perih", "Perut saya perih kalau diminum sebelum makan. Setelah makan sudah aman.", [], true, 7, "2026-10-05"],
    ["Lina", "dewasa", 5, 4, "tidak-ada", 5, "rutin", "Harga bersahabat", "Isi banyak dan harganya bersahabat. Mudah ditelan, ukuran tabletnya kecil.", ["harga-terjangkau", "mudah-ditelan"], true, 5, "2026-09-16"],
    ["Pak Budi", "lansia", 4, 3, "ringan", 4, "rutin", "Dokter ingatkan jangan berlebihan", "Saya diingatkan dokter agar tidak berlebihan karena riwayat batu ginjal. Jadi saya minum sesuai kemasan saja.", [], true, 17, "2026-09-03"],
    ["Vina", "dewasa", 4, 4, "tidak-ada", 4, "rutin", "Rasa jeruk tidak terlalu asam", "Rasa jeruknya enak dan tidak terlalu asam.", ["rasa-enak"], true, 2, "2026-08-19"],
  ],
  "multivitamin-sirup-anak": [
    ["Mama Aska", "anak", 4, 4, "tidak-ada", 4, "rutin", "Nafsu makan anak membaik", "Setelah sakit anak malas makan. Setelah beberapa minggu nafsu makannya membaik, walau mungkin juga karena sudah sembuh.", ["rasa-enak"], true, 14, "2026-10-22", ["sample:bottle"]],
    ["Ayah Dika", "anak", 3, 3, "ringan", 3, "rutin", "Urine jadi kuning terang", "Urine anak jadi kuning terang. Setelah ditanyakan ke dokter, katanya wajar karena vitamin B. Tapi rasanya terlalu manis menurut saya.", ["rasa-kurang-enak"], false, 9, "2026-10-01"],
    ["Ibu Yola", "anak", 5, 4, "tidak-ada", 4, "rutin", "Anak mau minum sendiri", "Anak malah minta tiap pagi. Pipetnya ada garis takarnya.", ["rasa-enak", "kemasan-praktis"], true, 8, "2026-09-11"],
    ["Mba Fitri", "anak", 4, 3, "ringan", 4, "lebih-1-minggu", "Pelengkap makanan sehat", "Saya tetap fokus pada makanan bergizi dan memakai ini sebagai pelengkap, sesuai saran dokter anak.", [], true, 5, "2026-08-27"],
  ],
  "povidon-iodin-10-larutan": [
    ["Kak Bayu", "dewasa", 5, 5, "tidak-ada", 5, "1-3-hari", "Luka lecet jadi bersih", "Jatuh dari sepeda, luka lecet dibersihkan lalu dioles ini. Tidak perih berlebihan dan cepat kering.", ["harga-terjangkau", "mudah-dicari"], true, 19, "2026-10-31", ["sample:bottle"]],
    ["Ibu Ratna", "dewasa", 4, 4, "ringan", 4, "4-7-hari", "Meninggalkan noda cokelat", "Efektif untuk luka kecil, tapi nodanya sulit hilang dari baju. Hati-hati ya.", [], true, 13, "2026-10-17"],
    ["Anita", "dewasa", 3, 3, "sedang", 4, "1-3-hari", "Kulit saya jadi merah", "Kulit saya jadi kemerahan dan gatal. Ternyata saya sensitif; sebaiknya tes dulu di area kecil.", [], false, 11, "2026-09-24"],
    ["Pak Jaya", "dewasa", 4, 4, "tidak-ada", 5, "1-3-hari", "Selalu ada di kotak P3K", "Isinya cukup banyak dan tahan lama. Cocok untuk luka kecil di rumah.", ["harga-terjangkau"], true, 6, "2026-09-07"],
    ["Lia", "anak", 4, 4, "ringan", 4, "1-3-hari", "Dipakai untuk luka lutut anak", "Anak jatuh waktu main, ini dioles tipis. Sempat perih sebentar tapi anak bisa menahan.", [], true, 3, "2026-08-21"],
  ],
  "tetes-mata-tetrahidrozolin": [
    ["Kevin", "dewasa", 4, 4, "ringan", 4, "sekali", "Mata merah karena begadang layar", "Mata merah setelah seharian di depan layar jadi lebih putih dalam beberapa menit. Sempat perih sedikit saat ditetes.", ["cepat-terasa"], true, 16, "2026-10-26", ["sample:bottle"]],
    ["Mbak Rina", "dewasa", 5, 5, "tidak-ada", 4, "sekali", "Adem dan cepat", "Mata kena debu, terasa adem dan merahnya hilang. Tidak saya pakai berhari-hari ya.", ["cepat-terasa"], true, 10, "2026-10-13"],
    ["Pak Handoko", "lansia", 2, 2, "sedang", 3, "4-7-hari", "Bukan solusi mata kering", "Awalnya membaik, lalu merah lagi setelah efeknya habis. Dokter mata bilang masalah saya mata kering dan perlu obat lain. Periksa dulu kalau tidak membaik.", [], false, 23, "2026-09-26"],
    ["Sari", "dewasa", 4, 4, "ringan", 4, "sekali", "Praktis dibawa", "Botolnya kecil, muat di tas. Saya pakai saat mata lelah.", ["kemasan-praktis"], true, 5, "2026-09-09"],
    ["Dedi", "dewasa", 3, 3, "ringan", 3, "1-3-hari", "Perih sebentar", "Perih beberapa detik, setelah itu normal.", [], true, 2, "2026-08-24"],
  ],
  "minyak-kayu-putih-60-ml": [
    ["Mama Zara", "anak", 5, 5, "tidak-ada", 5, "rutin", "Perut kembung dan gigitan nyamuk", "Dioles tipis di perut anak saat kembung dan setelah digigit nyamuk. Harumnya menenangkan.", ["harga-terjangkau", "mudah-dicari"], true, 27, "2026-10-30", ["sample:bottle"]],
    ["Pak Anwar", "lansia", 4, 4, "tidak-ada", 5, "rutin", "Hangat untuk pegal", "Dioles di bahu dan punggung saat pegal, terasa hangat dan nyaman.", ["efek-tahan-lama"], true, 12, "2026-10-14"],
    ["Dewi S.", "dewasa", 3, 3, "ringan", 4, "sekali", "Kulit sensitif agak panas", "Di kulit saya terasa panas, jadi hanya pakai sedikit dan tidak di area sensitif.", [], true, 6, "2026-09-19"],
    ["Tika", "dewasa", 5, 4, "tidak-ada", 5, "sekali", "Aroma khas yang menenangkan", "Aromanya menenangkan, saya teteskan sedikit ke tisu saat hidung tersumbat.", [], true, 4, "2026-09-01"],
    ["Rio", "dewasa", 4, 4, "tidak-ada", 4, "rutin", "Wajib dibawa bepergian", "Botol 60 mL pas untuk dibawa bepergian. Pereda masuk angin versi saya.", ["kemasan-praktis"], true, 3, "2026-08-17"],
  ],
  "amoxicillin-500-mg-kapsul": [
    ["Rama", "dewasa", 4, 4, "ringan", 4, "4-7-hari", "Diresepkan dokter untuk radang tenggorokan", "Dokter meresepkan setelah pemeriksaan. Setelah 2 hari tenggorokan mulai membaik, dan obat saya habiskan sesuai anjuran dokter.", ["mudah-ditelan"], true, 29, "2026-10-28", ["sample:strip"]],
    ["Nadia", "dewasa", 3, 4, "sedang", 3, "4-7-hari", "Diare di hari ketiga", "Infeksinya membaik, tapi saya diare selama pengobatan. Dokter menyarankan banyak minum dan makan teratur; setelah selesai, diarenya juga hilang.", [], true, 14, "2026-10-11"],
    ["Rizky", "dewasa", 1, 1, "berat", 2, "sekali", "Alergi, harus dihentikan", "Muncul ruam gatal setelah dosis kedua. Saya langsung menghubungi dokter dan obat diganti. Penting memberi tahu dokter riwayat alergi.", [], false, 41, "2026-09-27"],
    ["Pak Edi", "lansia", 4, 4, "ringan", 4, "4-7-hari", "Infeksi gigi mereda", "Dokter gigi meresepkan setelah gigi saya bengkak. Bengkak mengempis dalam beberapa hari. Obat dihabiskan sesuai resep.", [], true, 15, "2026-09-15"],
    ["Fani", "dewasa", 5, 5, "tidak-ada", 4, "4-7-hari", "Ingat: hanya dengan resep", "Obat bekerja baik untuk saya, tapi ingat ini obat keras: hanya dengan resep dan dihabiskan sesuai anjuran supaya tidak terjadi resistensi.", [], true, 33, "2026-08-30"],
  ],
};

export const seedReviews: Review[] = Object.entries(rows).flatMap(
  ([productSlug, list]) =>
    list.map(
      (
        [
          nickname,
          whoFor,
          rating,
          effectiveness,
          sideEffectLevel,
          valueForMoney,
          usageDuration,
          title,
          body,
          tags,
          recommend,
          helpfulCount,
          date,
          photos,
        ],
        i,
      ): Review => ({
        id: `seed-${productSlug}-${i + 1}`,
        productSlug,
        nickname,
        whoFor,
        rating,
        effectiveness,
        sideEffectLevel,
        valueForMoney,
        usageDuration,
        title,
        body,
        tags,
        recommend,
        photos: photos ?? [],
        helpfulCount,
        createdAt: `${date}T08:00:00+07:00`,
        isLocal: false,
      }),
    ),
);
