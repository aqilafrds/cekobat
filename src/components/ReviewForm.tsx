"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";
import { compressImage } from "@/lib/image";
import {
  DURATION_LABEL,
  DURATION_OPTIONS,
  SIDE_EFFECT_LABEL,
  SIDE_EFFECT_OPTIONS,
  TAG_LABEL,
  TAG_OPTIONS,
  WHO_FOR_LABEL,
  WHO_FOR_OPTIONS,
} from "@/lib/labels";
import { newLocalReviewId, saveLocalReview } from "@/lib/storage";
import type {
  Review,
  ReviewTag,
  SideEffectLevel,
  UsageDuration,
  WhoFor,
} from "@/lib/types";
import { CameraIcon, XIcon } from "./Icons";
import { Notice } from "./Notice";
import { PhotoTile } from "./PhotoTile";
import { ProductIllustration } from "./ProductIllustration";

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-600";

function ScoreField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-slate-800">{label}</legend>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((score) => (
          <button
            key={score}
            type="button"
            aria-pressed={value === score}
            onClick={() => onChange(score)}
            className={`h-10 w-10 rounded-lg border text-sm font-semibold transition ${
              value === score
                ? "border-teal-700 bg-teal-700 text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-teal-600"
            }`}
          >
            {score}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function ReviewForm({ initialSlug = "" }: { initialSlug?: string }) {
  const router = useRouter();
  const validInitial = products.some((p) => p.slug === initialSlug) ? initialSlug : "";
  const [productSlug, setProductSlug] = useState(validInitial);
  const [nickname, setNickname] = useState("");
  const [whoFor, setWhoFor] = useState<WhoFor>("dewasa");
  const [rating, setRating] = useState(5);
  const [effectiveness, setEffectiveness] = useState(5);
  const [sideEffectLevel, setSideEffectLevel] =
    useState<SideEffectLevel>("tidak-ada");
  const [valueForMoney, setValueForMoney] = useState(4);
  const [usageDuration, setUsageDuration] = useState<UsageDuration>("1-3-hari");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<ReviewTag[]>([]);
  const [recommend, setRecommend] = useState(true);
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoBusy, setPhotoBusy] = useState(false);
  const [error, setError] = useState("");

  const product = useMemo(
    () => products.find((item) => item.slug === productSlug),
    [productSlug],
  );

  function toggleTag(tag: ReviewTag) {
    setTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  }

  async function addPhotos(files: FileList | null) {
    if (!files?.length) return;
    setError("");
    setPhotoBusy(true);
    try {
      const remaining = Math.max(0, 3 - photos.length);
      const selected = Array.from(files).slice(0, remaining);
      const compressed = await Promise.all(selected.map((file) => compressImage(file)));
      setPhotos((current) => [...current, ...compressed].slice(0, 3));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Foto tidak dapat diproses.");
    } finally {
      setPhotoBusy(false);
    }
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!productSlug) return setError("Pilih obat yang ingin direview.");
    if (nickname.trim().length < 2) return setError("Nama panggilan minimal 2 karakter.");
    if (title.trim().length < 5) return setError("Judul review minimal 5 karakter.");
    if (body.trim().length < 20) return setError("Ceritakan pengalaman Anda minimal 20 karakter.");

    const review: Review = {
      id: newLocalReviewId(),
      productSlug,
      nickname: nickname.trim(),
      whoFor,
      rating,
      effectiveness,
      sideEffectLevel,
      valueForMoney,
      usageDuration,
      title: title.trim(),
      body: body.trim(),
      tags,
      recommend,
      photos,
      helpfulCount: 0,
      createdAt: new Date().toISOString(),
      isLocal: true,
    };

    if (!saveLocalReview(review)) {
      setError("Review tidak dapat disimpan. Penyimpanan browser mungkin penuh atau diblokir.");
      return;
    }

    router.push(`/produk/${productSlug}#review`);
  }

  return (
    <form onSubmit={submit} className="space-y-7">
      <Notice>
        Review disimpan hanya di browser perangkat ini. Jangan cantumkan data pribadi,
        nomor rekam medis, atau informasi resep yang dapat mengidentifikasi seseorang.
      </Notice>

      <section className="space-y-3">
        <label className="block text-sm font-medium text-slate-800" htmlFor="review-product">
          Obat yang direview
        </label>
        <select
          id="review-product"
          value={productSlug}
          onChange={(e) => setProductSlug(e.target.value)}
          className={inputClass}
          required
        >
          <option value="">Pilih obat…</option>
          {products.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        {product && (
          <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <ProductIllustration form={product.form} className="h-14 w-14" />
            <div>
              <p className="text-sm font-semibold text-slate-900">{product.name}</p>
              <p className="text-xs text-slate-500">{product.genericName}</p>
            </div>
          </div>
        )}
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-800">
          Nama panggilan
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={40}
            placeholder="Contoh: Aqila"
            className={`mt-1.5 ${inputClass}`}
            required
          />
        </label>
        <label className="text-sm font-medium text-slate-800">
          Review ini untuk
          <select
            value={whoFor}
            onChange={(e) => setWhoFor(e.target.value as WhoFor)}
            className={`mt-1.5 ${inputClass}`}
          >
            {WHO_FOR_OPTIONS.map((item) => (
              <option key={item} value={item}>
                {WHO_FOR_LABEL[item]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <ScoreField label="Rating keseluruhan" value={rating} onChange={setRating} />
        <ScoreField label="Efektivitas" value={effectiveness} onChange={setEffectiveness} />
        <ScoreField label="Kesesuaian harga" value={valueForMoney} onChange={setValueForMoney} />
        <label className="text-sm font-medium text-slate-800">
          Efek samping
          <select
            value={sideEffectLevel}
            onChange={(e) => setSideEffectLevel(e.target.value as SideEffectLevel)}
            className={`mt-1.5 ${inputClass}`}
          >
            {SIDE_EFFECT_OPTIONS.map((item) => (
              <option key={item} value={item}>
                {SIDE_EFFECT_LABEL[item]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-800">
        Lama penggunaan
        <select
          value={usageDuration}
          onChange={(e) => setUsageDuration(e.target.value as UsageDuration)}
          className={`mt-1.5 ${inputClass}`}
        >
          {DURATION_OPTIONS.map((item) => (
            <option key={item} value={item}>
              {DURATION_LABEL[item]}
            </option>
          ))}
        </select>
      </label>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-800">
          Judul review
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={90}
            placeholder="Ringkas pengalaman Anda"
            className={`mt-1.5 ${inputClass}`}
            required
          />
        </label>
        <label className="block text-sm font-medium text-slate-800">
          Ceritakan pengalaman Anda
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            maxLength={2000}
            placeholder="Apa keluhannya, bagaimana efek obatnya, dan apakah ada efek samping?"
            className={`mt-1.5 resize-y ${inputClass}`}
            required
          />
          <span className="mt-1 block text-right text-xs text-slate-500">{body.length}/2000</span>
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-slate-800">Tag pengalaman (opsional)</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {TAG_OPTIONS.map((tag) => {
            const active = tags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={active}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? "border-teal-700 bg-teal-50 text-teal-800"
                    : "border-slate-300 text-slate-600 hover:border-teal-600"
                }`}
              >
                {TAG_LABEL[tag]}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-slate-800">Apakah Anda merekomendasikannya?</legend>
        <div className="mt-2 flex gap-2">
          {[true, false].map((choice) => (
            <button
              key={String(choice)}
              type="button"
              aria-pressed={recommend === choice}
              onClick={() => setRecommend(choice)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium ${
                recommend === choice
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "border-slate-300 text-slate-700"
              }`}
            >
              {choice ? "Ya" : "Tidak"}
            </button>
          ))}
        </div>
      </fieldset>

      <section>
        <p className="text-sm font-medium text-slate-800">Foto (opsional, maksimal 3)</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {photos.map((src, index) => (
            <div key={`${src.slice(0, 24)}-${index}`} className="relative">
              <PhotoTile src={src} alt={`Foto review ${index + 1}`} className="h-24 w-24 rounded-lg" />
              <button
                type="button"
                aria-label={`Hapus foto ${index + 1}`}
                onClick={() => setPhotos((current) => current.filter((_, i) => i !== index))}
                className="absolute -right-2 -top-2 rounded-full bg-slate-900 p-1 text-white"
              >
                <XIcon size={14} />
              </button>
            </div>
          ))}
          {photos.length < 3 && (
            <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-slate-300 text-xs text-slate-500 hover:border-teal-600 hover:text-teal-700">
              <CameraIcon size={20} />
              {photoBusy ? "Memproses…" : "Tambah foto"}
              <input
                type="file"
                accept="image/*"
                multiple
                disabled={photoBusy}
                onChange={(e) => void addPhotos(e.target.files)}
                className="sr-only"
              />
            </label>
          )}
        </div>
      </section>

      {error && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={photoBusy}
        className="w-full rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Publikasikan review di perangkat ini
      </button>
    </form>
  );
}
