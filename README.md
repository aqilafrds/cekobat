# CekObat

CekObat adalah prototipe aplikasi berbasis Next.js untuk mencari informasi produk obat contoh dan membaca/menulis review pengalaman pengguna.

> **Catatan penting:** data produk, produsen, harga, dan review di repository ini adalah **data contoh/fiktif** untuk keperluan prototipe. Jangan gunakan isi aplikasi sebagai pengganti informasi resmi pada kemasan, BPOM, apoteker, atau tenaga kesehatan.

## Fitur

- Pencarian produk berdasarkan nama, zat aktif, kategori, dan kata kunci.
- Halaman detail produk dengan informasi penggunaan, peringatan, efek samping, dan penyimpanan.
- Ringkasan rating serta review pengguna contoh.
- Form penulisan review dengan rating, tag pengalaman, efek samping, dan foto.
- Penyimpanan review lokal menggunakan `localStorage`.
- Tampilan responsif untuk desktop dan perangkat bergerak.
- Ilustrasi produk generated untuk seluruh katalog contoh.

## Menjalankan secara lokal

Persyaratan:

- Node.js 20+
- npm

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000` di browser.

## Pemeriksaan kualitas

```bash
npm run lint
npm run build
```

Workflow GitHub Actions menjalankan instalasi dependensi, lint, dan build pada branch `main`.

## Struktur utama

```text
src/
├── app/          # Route dan halaman Next.js
├── components/   # Komponen UI
├── data/         # Data contoh produk, kategori, dan review
└── lib/          # Tipe, helper, storage, pencarian, dan konfigurasi situs
```

Dokumentasi arsitektur lebih lengkap tersedia di [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Batasan prototipe

- Belum ada backend atau database bersama.
- Review baru hanya tersimpan pada browser/perangkat yang digunakan.
- Belum ada autentikasi pengguna dan moderasi konten server-side.
- Informasi obat pada aplikasi ini tidak diverifikasi sebagai sumber medis resmi.

Untuk penggunaan produksi, data produk harus diintegrasikan dengan sumber tepercaya, disertai backend, autentikasi, moderasi, kebijakan privasi, dan tinjauan aspek regulasi/medis.

## Pemilik dan pemelihara

**Aqila Faradisa Budiyanti**  
GitHub: [@aqilafrds](https://github.com/aqilafrds)
