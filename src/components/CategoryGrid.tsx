import Link from "next/link";
import type { CSSProperties } from "react";

const PALETTES = [
  ["#fff0e9", "#f0dcd0", "#925137"],
  ["#edf4fc", "#d8e5f4", "#3d648e"],
  ["#eaf7ef", "#d3e9dc", "#306851"],
  ["#fff0e6", "#efd9c8", "#8b5131"],
  ["#fef2e6", "#eedbc9", "#795537"],
  ["#ecf6f3", "#d7e8e1", "#366d5d"],
  ["#edf5fb", "#d6e6f2", "#385f81"],
  ["#f0f4e7", "#dee6cf", "#5c7038"],
  ["#eef6fb", "#d8e7ef", "#345d75"],
];
import { categories } from "@/data/categories";
import { CategoryIcon } from "./Icons";

export function CategoryGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {categories.map((c, index) => (
        <li
          key={c.slug}
          className="max-sm:[&:last-child:nth-child(odd)]:col-span-2"
        >
          <Link
            href={`/cari?kategori=${c.slug}`}
            style={{ "--card-tint": PALETTES[index][0], "--card-border": PALETTES[index][1], "--card-ink": PALETTES[index][2] } as CSSProperties}
            className="category-card flex h-full items-center gap-3 rounded-2xl border p-4 sm:p-5"
          >
            <span className="category-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl">
              <CategoryIcon name={c.icon} size={20} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold leading-tight text-slate-900">
                {c.name}
              </span>
              <span className="mt-0.5 hidden text-xs leading-snug text-slate-500 sm:block">
                {c.description}
              </span>
            </span>
            <svg aria-hidden="true" className="category-arrow ml-auto hidden h-4 w-4 shrink-0 sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18 18 6M6 6h12v12" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}
