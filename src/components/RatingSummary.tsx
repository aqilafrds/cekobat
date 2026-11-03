import { formatScore } from "@/lib/format";
import { SIDE_EFFECT_LABEL } from "@/lib/labels";
import type { ReviewStats, SideEffectLevel } from "@/lib/types";
import { RatingStars } from "./RatingStars";

const LEVELS: SideEffectLevel[] = ["tidak-ada", "ringan", "sedang", "berat"];

const LEVEL_COLOR: Record<SideEffectLevel, string> = {
  "tidak-ada": "bg-green-500",
  ringan: "bg-lime-400",
  sedang: "bg-amber-400",
  berat: "bg-red-500",
};

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600">{label}</span>
        <span className="font-medium">{formatScore(value)}/5</span>
      </div>
      <div className="mt-1 h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-teal-600"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

export function RatingSummary({ stats }: { stats: ReviewStats }) {
  const ratings = [5, 4, 3, 2, 1] as const;

  return (
    <div className="grid gap-6 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-3">
      <div className="flex flex-col items-start justify-center">
        <p className="text-5xl font-bold tracking-tight">
          {formatScore(stats.avgRating)}
        </p>
        <RatingStars value={stats.avgRating} size={20} className="mt-2" />
        <p className="mt-2 text-sm text-slate-600">
          dari {stats.count} review ·{" "}
          <span className="font-medium text-green-700">
            {stats.recommendPct}%
          </span>{" "}
          merekomendasikan
        </p>
      </div>

      <div>
        <h3 className="sr-only">Distribusi rating</h3>
        <ul className="space-y-1.5">
          {ratings.map((n) => {
            const pct = (stats.distribution[n] / stats.count) * 100;
            return (
              <li key={n} className="flex items-center gap-2 text-sm">
                <span className="w-6 shrink-0 text-slate-600">{n}★</span>
                <span className="h-2 flex-1 rounded-full bg-slate-100">
                  <span
                    className="block h-2 rounded-full bg-amber-400"
                    style={{ width: `${pct}%` }}
                  />
                </span>
                <span className="w-6 shrink-0 text-right text-slate-500">
                  {stats.distribution[n]}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-3">
        <Meter label="Efektivitas" value={stats.avgEffectiveness} />
        <Meter label="Kesesuaian harga" value={stats.avgValue} />
        <div>
          <p className="text-sm text-slate-600">
            Efek samping dilaporkan:{" "}
            <span className="font-medium text-slate-900">
              {stats.dominantSideEffect
                ? SIDE_EFFECT_LABEL[stats.dominantSideEffect]
                : "-"}
            </span>
          </p>
          <div
            className="mt-1 flex h-2 overflow-hidden rounded-full bg-slate-100"
            role="img"
            aria-label={LEVELS.map(
              (l) => `${SIDE_EFFECT_LABEL[l]}: ${stats.sideEffects[l]} review`,
            ).join(", ")}
          >
            {LEVELS.map((l) => (
              <span
                key={l}
                className={LEVEL_COLOR[l]}
                style={{ width: `${(stats.sideEffects[l] / stats.count) * 100}%` }}
              />
            ))}
          </div>
          <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-500">
            {LEVELS.filter((l) => stats.sideEffects[l] > 0).map((l) => (
              <li key={l} className="flex items-center gap-1">
                <span className={`h-2 w-2 rounded-full ${LEVEL_COLOR[l]}`} />
                {SIDE_EFFECT_LABEL[l]} ({stats.sideEffects[l]})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
