import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/produk/amoxicillin-500-mg-kapsul", destination: "/cari", permanent: true },
      { source: "/produk/omeprazol-20-mg", destination: "/cari", permanent: true },
      { source: "/cari", has: [{ type: "query", key: "kategori", value: "obat-resep" }], destination: "/cari?kategori=mulut-tenggorokan", permanent: true },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
