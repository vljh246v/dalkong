"use client";

import { CATEGORY_META, type Category } from "@/lib/guides";

const CATEGORIES: Category[] = ["feeding", "development", "cognitive", "action", "sleep"];

export default function CategoryTabs({
  active,
  onSelect,
}: {
  active: Category;
  onSelect: (c: Category) => void;
}) {
  return (
    <div className="flex gap-1 overflow-x-auto py-2 sticky top-0 bg-background z-10">
      {CATEGORIES.map((cat) => {
        const meta = CATEGORY_META[cat];
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
              isActive
                ? "bg-accent text-white"
                : "bg-card border border-border text-muted"
            }`}
          >
            {meta.label}
          </button>
        );
      })}
    </div>
  );
}
