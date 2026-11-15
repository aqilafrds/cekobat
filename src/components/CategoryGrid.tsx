import Link from "next/link";
import type { CSSProperties } from "react";

const PALETTES = [
  ["#fff0e9", "#f0dcd0", "#925137"],
  ["#edf4fc", "#d8e5f4", "#3d648e"],
  ["#f2edfa", "#e2d9f0", "#735397"],
  ["#fceef2", "#efdce3", "#91536d"],
  ["#fff6df", "#ecdfbd", "#806122"],
  ["#ecf6f3", "#d7e8e1", "#366d5d"],
  ["#edf2fd", "#dbe3f5", "#4f6391"],
  ["#f0f4e7", "#dee6cf", "#5c7038"],
  ["#f2f0f7", "#e1dce9", "#66567c"],
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
