import { formatScore } from "@/lib/format";
import { StarIcon } from "./Icons";

const FIVE = [0, 1, 2, 3, 4];

export function RatingStars({
  value,
  size = 16,
  className = "",
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  const pct = (Math.max(0, Math.min(5, value)) / 5) * 100;
  return (
    <span
      className={`relative inline-flex ${className}`}
      role="img"
      aria-label={`Rating ${formatScore(value)} dari 5`}
    >
      <span className="flex text-slate-200">
        {FIVE.map((i) => (
          <StarIcon key={i} size={size} className="shrink-0" />
        ))}
      </span>
      <span
        className="absolute inset-y-0 left-0 flex overflow-hidden text-amber-400"
        style={{ width: `${pct}%` }}
      >
        {FIVE.map((i) => (
          <StarIcon key={i} size={size} className="shrink-0" />
        ))}
      </span>
    </span>
  );
}
