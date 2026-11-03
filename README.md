# CekObat

**CekObat** adalah prototipe platform ulasan obat berbahasa Indonesia untuk mencari produk, membaca pengalaman pengguna, melihat ringkasan rating, dan menulis review dari perangkat sendiri.

> **Status:** prototipe / MVP. Data produk dan review bawaan bersifat fiktif untuk demonstrasi. Konten di aplikasi bukan saran medis dan tidak boleh menggantikan konsultasi dengan dokter atau apoteker.

## Kepemilikan proyek

Repository ini dikelola dan dipublikasikan oleh **Aqila Faradisa Budiyanti** ([@aqilafrds](https://github.com/aqilafrds)).

CekObat merupakan repository utama untuk pengembangan, pemeliharaan, dan deployment proyek ini. Dependensi open-source yang digunakan tetap mengikuti lisensi masing-masing paket.

## Fitur utama

- Pencarian obat dengan autocomplete.
- Penelusuran berdasarkan kategori dan filter.
- Halaman detail produk dengan informasi, rating, dan review.
- Form penulisan review dengan rating, efek samping, durasi penggunaan, dan foto.
- Halaman **Review Saya** untuk review yang tersimpan pada perangkat.
- Panduan komunitas dan disclaimer medis.

## Teknologi

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

Saat ini aplikasi belum memakai backend. Data demo berada di source code, sedangkan review baru disimpan di `localStorage` browser.

## Menjalankan secara lokal

Persyaratan: **Node.js 20.9+** dan npm.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Pemeriksaan sebelum commit/deploy:

```bash
npm run lint
npm run build
```

## Struktur proyek

```text
.
├── .github/workflows/ci.yml   # CI lint + production build
├── docs/ARCHITECTURE.md       # arsitektur dan catatan teknis
├── src/
│   ├── app/                   # route dan halaman Next.js
│   ├── components/            # komponen UI
│   ├── data/                  # data demo
│   └── lib/                   # utilitas, pencarian, storage, tipe
├── package.json
└── README.md
```

## Konfigurasi utama

| Kebutuhan | Lokasi |
|---|---|
| Nama, tagline, deskripsi, disclaimer, owner | `src/lib/site.ts` |
| Produk demo | `src/data/products.ts` |
| Kategori | `src/data/categories.ts` |
| Review demo | `src/data/reviews.ts` |
| Styling global | `src/app/globals.css` |

## Deployment ke Vercel

Project ini kompatibel dengan deployment standar Next.js di Vercel. Setelah repository GitHub tersedia:

1. Hubungkan repository `aqilafrds/cekobat` ke Vercel.
2. Framework akan terdeteksi sebagai Next.js.
3. Gunakan pengaturan build bawaan (`npm run build`).
4. Deploy production.

Tidak ada file `.vercel` yang disimpan di repository; metadata deployment lokal tetap diabaikan oleh Git.

## Batasan MVP

Review yang ditulis pengguna saat ini hanya tersimpan di browser masing-masing. Agar menjadi aplikasi multi-user, proyek perlu database, autentikasi, penyimpanan foto server-side, moderasi, dan sumber informasi obat yang terverifikasi.

Lihat [dokumentasi arsitektur](docs/ARCHITECTURE.md) untuk detail lebih lanjut.
