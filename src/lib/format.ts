const dateFmt = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

/** Zona waktu dikunci agar render server dan klien identik (tanpa mismatch hidrasi). */
export function formatDate(iso: string): string {
  return dateFmt.format(new Date(iso));
}

export function formatRupiah(n: number): string {
  return `Rp${n.toLocaleString("id-ID")}`;
}

export function formatPriceRange(range: {
  min: number;
  max: number;
  unit: string;
}): string {
  return `${formatRupiah(range.min)} – ${formatRupiah(range.max)} ${range.unit}`;
}

export function formatScore(n: number): string {
  return n.toFixed(1).replace(".", ",");
}
