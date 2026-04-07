import Link from "next/link";
import { MONTH_BUCKETS, type MonthBucket } from "@/lib/guides";

export default function MonthNav({ current }: { current: MonthBucket }) {
  const idx = MONTH_BUCKETS.findIndex((b) => b.slug === current.slug);
  const prev = idx > 0 ? MONTH_BUCKETS[idx - 1] : null;
  const next = idx < MONTH_BUCKETS.length - 1 ? MONTH_BUCKETS[idx + 1] : null;

  return (
    <nav className="flex items-center justify-between py-2">
      {prev ? (
        <Link
          href={`/${prev.slug}`}
          className="text-sm text-accent font-medium min-h-[44px] flex items-center px-2"
        >
          ← {prev.label}
        </Link>
      ) : (
        <Link
          href="/"
          className="text-sm text-accent font-medium min-h-[44px] flex items-center px-2"
        >
          ← 홈
        </Link>
      )}

      <span className="text-xs text-muted">
        {idx + 1} / {MONTH_BUCKETS.length}
      </span>

      {next ? (
        <Link
          href={`/${next.slug}`}
          className="text-sm text-accent font-medium min-h-[44px] flex items-center px-2"
        >
          {next.label} →
        </Link>
      ) : (
        <span className="text-sm text-muted px-2 min-h-[44px] flex items-center">
          마지막
        </span>
      )}
    </nav>
  );
}
