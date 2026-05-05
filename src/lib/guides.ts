import guidesData from "../../data/guides.json";

export type Category =
  | "feeding"
  | "development"
  | "cognitive"
  | "action"
  | "sleep";

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

export interface CareScheduleItem {
  title: string;
  detail: string;
  sourceName: string;
  sourceUrl: string;
}

export interface CareWarningItem {
  text: string;
  urgency: "now" | "soon";
}

export interface MonthCareInfo {
  schedules: CareScheduleItem[];
  warnings: CareWarningItem[];
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
  sleep: { label: "수면", emoji: "🌙" },
};

const VACCINE_SOURCE = {
  sourceName: "질병관리청 예방접종도우미",
  sourceUrl: "https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=115&menuLv=1",
};

const HEALTH_CHECKUP_SOURCE = {
  sourceName: "국민건강보험공단",
  sourceUrl: "https://www.nhis.or.kr/static/alim/paper/oldpaper/202211/sub/11.html",
};

const FEVER_WARNING_SOURCE = {
  sourceName: "MSD 매뉴얼",
  sourceUrl:
    "https://www.msdmanuals.com/ko/home/%EC%95%84%EB%8F%99%EC%9D%98-%EA%B1%B4%EA%B0%95-%EB%AC%B8%EC%A0%9C/%EC%98%81%EC%95%84-%EB%B0%8F-%EC%86%8C%EC%95%84%EC%9D%98-%EC%A6%9D%EC%83%81/%EC%98%81%EC%95%84-%EB%B0%8F-%EC%86%8C%EC%95%84%EC%9D%98-%EC%97%B4",
};

const RESPIRATORY_WARNING_SOURCE = {
  sourceName: "CDC 호흡기 응급 신호",
  sourceUrl: "https://www.cdc.gov/respiratory-viruses/about/index.html",
};

const DEHYDRATION_WARNING_SOURCE = {
  sourceName: "CDC 영아 탈수 신호",
  sourceUrl: "https://www.cdc.gov/dengue/treatment/dengue-infants.html",
};

const infantEmergencyWarnings: CareWarningItem[] = [
  { text: "호흡이 빠르거나 힘들어 보임, 갈비뼈가 숨쉴 때마다 들어감", urgency: "now" },
  { text: "입술·얼굴·손발이 창백하거나 푸르게 보임", urgency: "now" },
  { text: "깨우기 어렵거나, 깨어 있어도 반응이 평소보다 뚜렷하게 떨어짐", urgency: "now" },
  { text: "경련, 의식 저하, 멈추지 않는 심한 울음", urgency: "now" },
  { text: "소변 기저귀가 크게 줄거나 입·혀가 마름, 울 때 눈물이 거의 없음", urgency: "soon" },
];

const youngInfantFeverWarning: CareWarningItem = {
  text: "생후 3개월 미만에서 직장 체온 기준 38.0°C 이상 발열",
  urgency: "now",
};

const olderInfantFeverWarning: CareWarningItem = {
  text: "39.0°C 이상 발열, 아파 보임, 발열이 1~2일 이상 지속됨",
  urgency: "soon",
};

export const WARNING_SOURCES = [
  FEVER_WARNING_SOURCE,
  RESPIRATORY_WARNING_SOURCE,
  DEHYDRATION_WARNING_SOURCE,
];

export const MONTH_CARE_INFO: Record<string, MonthCareInfo> = {
  newborn: {
    schedules: [
      {
        title: "B형간염 1차",
        detail: "출생 시 가능한 24시간 이내 접종합니다.",
        ...VACCINE_SOURCE,
      },
      {
        title: "BCG",
        detail: "금기사항이 없는 신생아는 생후 4주 이내 접종 대상입니다.",
        sourceName: "질병관리청 예방접종도우미",
        sourceUrl:
          "https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1101&menuLv=1",
      },
      {
        title: "영유아 건강검진 1차",
        detail: "생후 14~35일에 문진·진찰, 신체계측, 건강교육을 받습니다.",
        ...HEALTH_CHECKUP_SOURCE,
      },
    ],
    warnings: [youngInfantFeverWarning, ...infantEmergencyWarnings],
  },
  "2months": {
    schedules: [
      {
        title: "2개월 예방접종",
        detail: "DTaP, IPV, Hib, 폐렴구균, 로타바이러스 1차 접종 시기입니다.",
        ...VACCINE_SOURCE,
      },
      {
        title: "B형간염 후속 접종 확인",
        detail: "단독백신은 생후 1개월, 혼합백신 일정은 의료기관 안내에 따릅니다.",
        sourceName: "질병관리청 예방접종도우미",
        sourceUrl:
          "https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1102&menuLv=1",
      },
    ],
    warnings: [youngInfantFeverWarning, ...infantEmergencyWarnings],
  },
  "3months": {
    schedules: [
      {
        title: "다음 접종 일정 확인",
        detail: "표준 일정상 4개월 접종 전 구간입니다. 지연 접종이 있으면 의료기관에 일정을 확인하세요.",
        ...VACCINE_SOURCE,
      },
    ],
    warnings: [youngInfantFeverWarning, ...infantEmergencyWarnings],
  },
  "4months": {
    schedules: [
      {
        title: "4개월 예방접종",
        detail: "DTaP, IPV, Hib, 폐렴구균, 로타바이러스 2차 접종 시기입니다.",
        ...VACCINE_SOURCE,
      },
      {
        title: "영유아 건강검진 2차 시작",
        detail: "생후 4~6개월 건강검진 기간입니다.",
        ...HEALTH_CHECKUP_SOURCE,
      },
    ],
    warnings: [olderInfantFeverWarning, ...infantEmergencyWarnings],
  },
  "5months": {
    schedules: [
      {
        title: "영유아 건강검진 2차",
        detail: "생후 4~6개월 검진 기간 안에 예약·방문하세요.",
        ...HEALTH_CHECKUP_SOURCE,
      },
      {
        title: "지연 접종 확인",
        detail: "4개월 접종을 놓쳤다면 예방접종수첩과 의료기관에서 보완 일정을 확인하세요.",
        ...VACCINE_SOURCE,
      },
    ],
    warnings: [olderInfantFeverWarning, ...infantEmergencyWarnings],
  },
  "6months": {
    schedules: [
      {
        title: "6개월 예방접종",
        detail: "DTaP, IPV, Hib, 폐렴구균 3차와 B형간염 후속 접종 시기입니다. 로타텍은 3차 접종이 있습니다.",
        ...VACCINE_SOURCE,
      },
      {
        title: "영유아 건강검진 2차 마감",
        detail: "생후 4~6개월 검진 기간이 끝나기 전 확인하세요.",
        ...HEALTH_CHECKUP_SOURCE,
      },
    ],
    warnings: [olderInfantFeverWarning, ...infantEmergencyWarnings],
  },
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
