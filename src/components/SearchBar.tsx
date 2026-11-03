"use client";

import { useId, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { getCategory } from "@/data/categories";
import { FORM_LABEL } from "@/lib/labels";
import { suggestProducts } from "@/lib/search";
import { setUrlSearch } from "@/lib/url-state";
import { SearchIcon } from "./Icons";

export function SearchBar({
  initialQuery = "",
  size = "lg",
  autoFocus = false,
}: {
  initialQuery?: string;
  size?: "lg" | "md";
  autoFocus?: boolean;
}) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);

  const suggestions = useMemo(() => suggestProducts(products, query, 5), [query]);
  const showList = open && suggestions.length > 0;

  function goSearch() {
    setOpen(false);
    const search = `q=${encodeURIComponent(query.trim())}`;
    // Sudah di halaman pencarian: cukup perbarui URL, hasil menyesuaikan sendiri.
    if (window.location.pathname === "/cari") setUrlSearch(search, "push");
    else router.push(`/cari?${search}`);
  }

  function goProduct(slug: string) {
    setOpen(false);
    router.push(`/produk/${slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => (i + 1) % Math.max(suggestions.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
      setActive(-1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (showList && active >= 0) goProduct(suggestions[active].slug);
      else goSearch();
    }
  }

  const height = size === "lg" ? "h-14 text-base" : "h-11 text-sm";

  return (
    <div
      className="relative w-full"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          goSearch();
        }}
        className="flex items-center gap-2"
      >
        <div className="relative flex-1">
          <SearchIcon
            size={size === "lg" ? 22 : 18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            role="combobox"
            aria-expanded={showList}
            aria-controls={listId}
            aria-activedescendant={
              showList && active >= 0 ? `${listId}-${active}` : undefined
            }
            aria-autocomplete="list"
            aria-label="Cari obat, zat aktif, atau keluhan"
            placeholder="Cari obat, zat aktif, atau keluhan…"
            autoComplete="off"
            autoFocus={autoFocus}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
              setActive(-1);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            className={`w-full rounded-xl border border-slate-300 bg-white pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-teal-600 ${height}`}
          />
        </div>
        <button
          type="submit"
          className={`shrink-0 rounded-xl bg-teal-700 px-5 font-medium text-white transition hover:bg-teal-800 ${height}`}
        >
          Cari
        </button>
      </form>

      {showList && (
        <ul
          id={listId}
          role="listbox"
          aria-label="Saran pencarian"
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
        >
          {suggestions.map((p, i) => (
            <li
              key={p.slug}
              id={`${listId}-${i}`}
              role="option"
              aria-selected={i === active}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => goProduct(p.slug)}
              onMouseEnter={() => setActive(i)}
              className={`cursor-pointer px-4 py-2.5 ${i === active ? "bg-teal-50" : ""}`}
            >
              <span className="block text-sm font-medium text-slate-900">
                {p.name}
              </span>
              <span className="block text-xs text-slate-500">
                {FORM_LABEL[p.form]} · {getCategory(p.categorySlug)?.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
