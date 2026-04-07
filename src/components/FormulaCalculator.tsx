"use client";

import { useState } from "react";
import { calculateFormula } from "@/lib/guides";

export default function FormulaCalculator() {
  const [weight, setWeight] = useState("");
  const parsed = parseFloat(weight);
  const result = weight && !isNaN(parsed) ? calculateFormula(parsed) : null;

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="font-semibold text-base mb-3">🍼 분유량 계산기</h3>
      <div className="flex items-center gap-2">
        <label htmlFor="weight" className="text-sm text-muted shrink-0">
          아기 몸무게
        </label>
        <input
          id="weight"
          type="number"
          inputMode="decimal"
          min="1"
          max="15"
          step="0.1"
          placeholder="kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-20 px-3 py-2 border border-border rounded-md text-center text-base bg-background"
        />
        <span className="text-sm text-muted">kg</span>
      </div>

      {weight && !isNaN(parseFloat(weight)) && !result && (
        <p className="mt-2 text-sm text-red-500">
          1~15kg 범위에서 입력해주세요.
        </p>
      )}

      {result && (
        <div className="mt-3 p-3 bg-accent-light rounded-md">
          <p className="font-semibold text-accent">
            하루 총 {result.dailyTotal}ml
          </p>
          <p className="text-sm text-muted mt-1">
            1회 약 {result.perFeeding}ml × {result.feedingsPerDay}회
          </p>
        </div>
      )}

      <p className="mt-2 text-xs text-muted">
        출처: 체중(kg) × 150ml 공식 기준. 아기마다 다를 수 있으니 소아과 상담을
        권장합니다.
      </p>
    </div>
  );
}
