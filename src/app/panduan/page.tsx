import type { Metadata } from "next";
import { Notice } from "@/components/Notice";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Panduan & disclaimer",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function PanduanPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight">Panduan &amp; disclaimer</h1>
      <p className="mt-2 text-slate-600">
        {SITE.name} adalah tempat berbagi pengalaman memakai obat, terbuka untuk
        semua jenis obat dan semua kalangan.
      </p>

      <Notice className="mt-5">{SITE.medicalDisclaimer}</Notice>

      <Section title="Disclaimer medis">
        <p>
          Isi review ditulis oleh pengguna dan mencerminkan pengalaman pribadi. Tubuh
          setiap orang bereaksi berbeda terhadap obat. Informasi di situs ini bukan
          pengganti diagnosis, pengobatan, atau saran dari dokter dan apoteker.
        </p>
        <p>
          Jangan menunda mencari bantuan medis, atau mengubah/menghentikan pengobatan,
          hanya karena sesuatu yang Anda baca di sini. Dalam keadaan darurat, segera
          hubungi layanan kesehatan terdekat.
        </p>
      </Section>

      <Section title="Cara menulis review yang baik">
        <ul className="list-inside list-disc space-y-1">
          <li>Ceritakan keluhan, lama pemakaian, dan hasil yang Anda rasakan.</li>
          <li>Sebutkan efek samping yang dialami, sekecil apa pun.</li>
          <li>Tulis fakta pengalaman Anda, bukan klaim penyembuhan untuk orang lain.</li>
          <li>Obat keras hanya dipakai dengan resep; jangan menyarankan membeli tanpa resep.</li>
          <li>Jangan menyarankan dosis untuk orang lain. Tanyakan ke dokter atau apoteker.</li>
        </ul>
      </Section>

      <Section title="Yang tidak diperbolehkan">
        <ul className="list-inside list-disc space-y-1">
          <li>Data pribadi (nama lengkap, nomor telepon, alamat, nomor rekam medis).</li>
          <li>Foto wajah, identitas, atau resep yang memuat data pribadi.</li>
          <li>Iklan, promosi, atau ajakan membeli dari penjual tertentu.</li>
          <li>Ujaran kasar, menyerang pihak lain, atau informasi menyesatkan.</li>
        </ul>
      </Section>

      <Section title="Melaporkan review">
        <p>
          Gunakan tombol <strong>Laporkan</strong> pada review yang melanggar panduan
          ini. Pada prototipe, laporan hanya tersimpan di perangkat Anda.
        </p>
      </Section>

      <Section title="Tentang prototipe ini">
        <p>{SITE.sampleNotice}</p>
        <p>
          Produk memakai nama zat generik dan produsen fiktif, bukan merek asli.
          Informasi produk perlu diverifikasi dengan sumber resmi (kemasan dan
          BPOM) sebelum dipakai pada versi nyata. Review baru yang Anda tulis hanya
          tersimpan di browser perangkat ini.
        </p>
      </Section>
    </div>
  );
}
