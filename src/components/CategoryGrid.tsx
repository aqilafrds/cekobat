import Link from "next/link";
import { categories } from "@/data/categories";
import { CategoryIcon } from "./Icons";

export function CategoryGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {categories.map((c) => (
        <li
          key={c.slug}
          className="max-sm:[&:last-child:nth-child(odd)]:col-span-2"
        >
          <Link
            href={`/cari?kategori=${c.slug}`}
            className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-teal-600 hover:bg-teal-50/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
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
          </Link>
        </li>
      ))}
    </ul>
  );
}
