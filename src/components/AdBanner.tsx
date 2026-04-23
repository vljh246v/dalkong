"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner({ slot }: { slot: string }) {
  const pushed = useRef(false);
  const isValidSlot = /^\d+$/.test(slot);

  useEffect(() => {
    if (!isValidSlot) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded (blocked by adblocker, etc.)
    }
  }, [isValidSlot]);

  if (!isValidSlot) return null;

  return (
    <div className="my-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9364520099576698"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
