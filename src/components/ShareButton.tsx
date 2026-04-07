"use client";

import { useState } from "react";

export default function ShareButton({
  label,
  url,
  description,
}: {
  label: string;
  url: string;
  description: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: label, text: description, url });
        return;
      } catch {
        // User cancelled or not supported, fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard not available
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-full py-3 px-4 bg-[#FEE500] text-[#3C1E1E] rounded-lg font-medium text-sm min-h-[44px] flex items-center justify-center gap-2"
    >
      {copied ? "✅ 링크가 복사되었어요!" : "💬 카카오톡으로 공유하기"}
    </button>
  );
}
