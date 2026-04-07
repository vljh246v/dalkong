import guidesData from "../../data/guides.json";

export type Category = "feeding" | "development" | "cognitive" | "action";

export interface Guide {
  id: string;
  day_range: [number, number];
  category: Category;
  title: string;
  summary: string;
  detail: string;
  source_name: string;
  source_url: string;
  source_secondary: string;
}

export interface MonthBucket {
  slug: string;
  label: string;
  dayMin: number;
  dayMax: number;
}

export const MONTH_BUCKETS: MonthBucket[] = [
  { slug: "newborn", label: "신생아", dayMin: 0, dayMax: 30 },
  { slug: "2months", label: "2개월", dayMin: 31, dayMax: 60 },
  { slug: "3months", label: "3개월", dayMin: 61, dayMax: 90 },
  { slug: "4months", label: "4개월", dayMin: 91, dayMax: 120 },
  { slug: "5months", label: "5개월", dayMin: 121, dayMax: 150 },
  { slug: "6months", label: "6개월", dayMin: 151, dayMax: 180 },
];

export const CATEGORY_META: Record<
  Category,
  { label: string; emoji: string }
> = {
  feeding: { label: "수유", emoji: "🍼" },
  development: { label: "발달", emoji: "💪" },
  cognitive: { label: "인지", emoji: "🧠" },
  action: { label: "놀이", emoji: "🎈" },
};

const guides = guidesData as Guide[];

export function getDaysSinceBirth(birthdate: Date): number {
  const now = new Date();
  const diffMs = now.getTime() - birthdate.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function getBucketFromDays(days: number): MonthBucket | null {
  return MONTH_BUCKETS.find((b) => days >= b.dayMin && days <= b.dayMax) ?? null;
}

export function getBucketFromBirthdate(birthdate: Date): MonthBucket | null {
  const days = getDaysSinceBirth(birthdate);
  if (days < 0) return null;
  return getBucketFromDays(days);
}

export function getBucketBySlug(slug: string): MonthBucket | null {
  return MONTH_BUCKETS.find((b) => b.slug === slug) ?? null;
}

export function getGuidesByBucket(bucket: MonthBucket): Guide[] {
  return guides.filter(
    (g) => g.day_range[0] === bucket.dayMin && g.day_range[1] === bucket.dayMax
  );
}

export function getGuidesByCategory(
  guides: Guide[],
  category: Category
): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function getNextBucket(current: MonthBucket): MonthBucket | null {
  const idx = MONTH_BUCKETS.findIndex((b) => b.slug === current.slug);
  if (idx === -1 || idx === MONTH_BUCKETS.length - 1) return null;
  return MONTH_BUCKETS[idx + 1];
}

export function calculateFormula(weightKg: number): {
  dailyTotal: number;
  perFeeding: number;
  feedingsPerDay: number;
} | null {
  if (weightKg < 1 || weightKg > 15) return null;
  const dailyTotal = Math.round(weightKg * 150);
  const feedingsPerDay = weightKg < 4 ? 8 : weightKg < 6 ? 6 : 5;
  const perFeeding = Math.round(dailyTotal / feedingsPerDay);
  return { dailyTotal, perFeeding, feedingsPerDay };
}
