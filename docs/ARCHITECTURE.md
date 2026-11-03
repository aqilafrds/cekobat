# Arsitektur CekObat

## Ringkasan

CekObat adalah aplikasi Next.js berbasis App Router yang saat ini berjalan sepenuhnya sebagai prototipe tanpa backend. Data produk dan review demo dibundel bersama aplikasi, sedangkan review pengguna lokal disimpan pada browser.

## Alur data

1. Data produk dibaca dari `src/data/products.ts`.
2. Kategori dibaca dari `src/data/categories.ts`.
3. Review demo dibaca dari `src/data/reviews.ts`.
4. Review lokal disimpan melalui `src/lib/storage.ts` menggunakan `localStorage`.
5. `src/lib/use-all-reviews.ts` menggabungkan review demo dan review lokal untuk ditampilkan pada UI.
6. Pencarian dan pemeringkatan dilakukan di sisi aplikasi melalui `src/lib/search.ts` dan utilitas terkait.

## Direktori

### `src/app`
Route, layout, halaman utama, pencarian, detail produk, form review, panduan, dan halaman review pengguna.

### `src/components`
Komponen presentasi dan interaksi yang dapat digunakan ulang, seperti header, footer, kartu produk, rating, galeri foto, dan form review.

### `src/data`
Dataset demonstrasi. Semua nama reviewer dan isi review bawaan adalah data fiktif.

### `src/lib`
Tipe TypeScript, format data, label, pencarian, statistik review, state URL, kompresi gambar, dan penyimpanan lokal.

## Penyimpanan lokal

MVP belum memiliki akun pengguna atau database. Review baru disimpan pada browser perangkat yang digunakan. Konsekuensinya:

- review dari perangkat A tidak otomatis terlihat pada perangkat B;
- penghapusan data browser dapat menghapus review lokal;
- tidak ada moderasi terpusat;
- foto disimpan sebagai data lokal dan bukan object storage.

## Arah pengembangan

Untuk production multi-user, prioritas teknis yang disarankan:

1. database relasional untuk produk, review, laporan, dan metadata moderasi;
2. autentikasi atau mekanisme anti-spam;
3. object storage untuk foto;
4. API/server actions untuk akses data;
5. moderasi dan audit trail;
6. informasi obat dari sumber resmi yang terverifikasi;
7. halaman privasi dan ketentuan penggunaan;
8. automated testing untuk pencarian, statistik, dan alur review.

## Deployment

Vercel dapat membangun aplikasi langsung dari repository GitHub. Tidak diperlukan `vercel.json` untuk konfigurasi dasar karena framework Next.js dapat dideteksi otomatis.

Repository mempertahankan `.vercel` di `.gitignore` agar konfigurasi akun/deployment lokal tidak ikut ter-commit.
