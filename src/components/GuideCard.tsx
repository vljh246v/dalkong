"use client";

import { useState } from "react";
import type { Guide } from "@/lib/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-card border border-border rounded-lg p-4 cursor-pointer active:bg-accent-light transition-colors"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="min-w-0">
          <h3 className="font-semibold text-base">{guide.title}</h3>
          <p className="text-sm text-muted mt-1">{guide.summary}</p>
        </div>
        <span className="text-accent text-base shrink-0 mt-0.5 font-bold">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {guide.detail}
          </p>
          {guide.source_name && (
            <div className="mt-3 text-xs text-muted">
              <span>출처: </span>
              {guide.source_url ? (
                <a
                  href={guide.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {guide.source_name}
                </a>
              ) : (
                <span>{guide.source_name}</span>
              )}
              {guide.source_secondary && (
                <span className="ml-1">· {guide.source_secondary}</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
