"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBucketFromBirthdate } from "@/lib/guides";

export default function BirthdateForm() {
  const router = useRouter();
  const [birthdate, setBirthdate] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("dalkong-birthdate");
    if (!saved) return;

    const frame = requestAnimationFrame(() => {
      setBirthdate(saved);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birthdate) return;

    const date = new Date(birthdate);
    const now = new Date();

    if (date > now) {
      alert("미래 날짜는 입력할 수 없어요.");
      return;
    }

    const bucket = getBucketFromBirthdate(date);
    if (!bucket) {
      alert("현재 0~6개월 아기만 지원해요. 곧 더 넓은 범위를 추가할게요!");
      return;
    }

    localStorage.setItem("dalkong-birthdate", birthdate);
    router.push(`/${bucket.slug}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto">
      <label
        htmlFor="birthdate"
        className="block text-sm font-medium text-muted mb-2 text-center"
      >
        아기 생년월일
      </label>
      <input
        id="birthdate"
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        className="w-full px-4 py-3 border border-border rounded-lg text-center text-lg bg-background min-h-[44px] focus:outline-none focus:ring-2 focus:ring-accent/30"
        required
      />
      <button
        type="submit"
        className="w-full mt-4 py-3 bg-accent text-white rounded-lg font-semibold text-base min-h-[44px] active:opacity-90 transition-opacity"
      >
        가이드 보기
      </button>
      <p className="mt-3 text-center text-xs text-muted leading-relaxed">
        생년월일은 현재 기기에만 저장되고, 서버로 전송하지 않아요.
      </p>
    </form>
  );
}
