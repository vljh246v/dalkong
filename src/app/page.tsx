"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getBucketFromBirthdate } from "@/lib/guides";

export default function HomePage() {
  const router = useRouter();
  const [birthdate, setBirthdate] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("dalkong-birthdate");
    if (saved) {
      const bucket = getBucketFromBirthdate(new Date(saved));
      if (bucket) {
        router.replace(`/${bucket.slug}`);
        return;
      }
    }
    setChecking(false);
  }, [router]);

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

  if (checking) return null;

  return (
    <div className="max-w-lg mx-auto px-4 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">달콩</h1>
        <p className="text-muted mt-2 text-base">
          아기 생년월일만 입력하면,
          <br />
          월령별 육아 가이드를 바로 보여드려요.
        </p>
        <p className="text-xs text-muted mt-1">출처 기반 · 소아과학회 · WHO</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xs">
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
          className="w-full px-4 py-3 border border-border rounded-lg text-center text-lg bg-card min-h-[44px]"
          required
        />
        <button
          type="submit"
          className="w-full mt-4 py-3 bg-accent text-white rounded-lg font-semibold text-base min-h-[44px]"
        >
          가이드 보기
        </button>
      </form>

      <p className="mt-12 text-xs text-muted text-center">
        대한소아과학회 · WHO · childcare.go.kr 기준
        <br />
        72개 항목, 출처 포함
      </p>
    </div>
  );
}
