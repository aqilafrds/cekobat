const MAX_INPUT_BYTES = 10 * 1024 * 1024;

/**
 * Memperkecil foto (sisi terpanjang maks. `maxSize` px) lalu mengubahnya jadi
 * data URL JPEG agar muat di localStorage.
 */
export async function compressImage(
  file: File,
  maxSize = 800,
  quality = 0.7,
): Promise<string> {
  if (!file.type.startsWith("image/")) {
    throw new Error("File harus berupa gambar.");
  }
  if (file.size > MAX_INPUT_BYTES) {
    throw new Error("Ukuran foto maksimal 10 MB.");
  }

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Browser tidak mendukung pengolahan gambar.");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  return canvas.toDataURL("image/jpeg", quality);
}
