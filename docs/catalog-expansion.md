# Katalog tambahan — 15 November 2026

Katalog berisi 30 entri generik demonstrasi (13 awal + 17 tambahan). Ke-64 review awal tidak diubah. Produk tambahan tidak diberi review/rating buatan. Statistik dihitung dari review yang benar-benar tersedia dalam prototipe; keadaan kosong tidak ditampilkan sebagai rating nol.

Data tambahan: `src/data/additional-products.ts`. Sumber informasi bahan/sediaan ditautkan dari setiap halaman detail. Semua harga adalah angka contoh, bukan survei harga pasar. Kemasan AI bukan foto produk terdaftar dan tidak memiliki NIE; identitas CekObat bukan produsen obat. Motif dekoratif pada gambar bukan komposisi. Semua 17 gambar berasal dari paket pratinjau yang disetujui, dioptimalkan ke WebP maksimum 1000 px, kualitas 94, dan dirender melalui next/image.

Golongan setirizin/loratadin mengacu pada pembatasan tablet maksimal 10 mg, kemasan maksimal 10 tablet dalam Permenkes 28/2022. Hipromelosa 0,3% merujuk informasi produsen Rohto Dryfresh (DTL1840000946A1) untuk sediaan, bukan untuk mengklaim ilustrasi sebagai produk Rohto. Sumber asing digunakan untuk informasi bahan, bukan penetapan izin edar Indonesia. Omeprazol diberi label obat keras dan peringatan resep. Vitamin B kompleks serta jahe tidak menetapkan komposisi/kekuatan ekstrak yang tidak diketahui.

Perubahan UI: bagian Baru di katalog (6 entri tambahan pertama), tautan semua 30 produk, label Ilustrasi AI, harga contoh, sumber informasi, filter Suplemen Kesehatan dan Krim. Search aliases termasuk cetirizine, loratadine, hypromellose, bromhexine, xylometazoline, omeprazole. Informasi merupakan ringkasan edukasi demonstrasi, bukan monografi lengkap atau rekomendasi pemakaian individu.

Validasi lokal: lint dan production build berhasil; 30 slug unik, 30 aset tersedia, pencarian nama seluruh produk, alias terpilih, batas autocomplete, data filter suplemen/krim, dan statistik kosong diperiksa. Browser produksi diperiksa terpisah setelah deploy; tidak mengklaim audit klinis atau uji aksesibilitas menyeluruh.
