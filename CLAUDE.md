# 달콩 (Dalkong)

월령별 아기 육아 가이드 — Next.js 16 App Router + React 19 + Tailwind v4.
배포: https://dalkong-one.vercel.app

## 명령어

```bash
npm run dev      # next dev (Next 16은 Turbopack 기본)
npm run build    # next build
npm run start    # next start
npm run lint     # eslint (flat config: eslint.config.mjs)
```

## 아키텍처

- **정적 콘텐츠 모델**: 모든 가이드 콘텐츠는 `data/guides.json`에 위치. DB 없음.
- **월령 버킷**: 6개 버킷(newborn → 6months), `src/lib/guides.ts`의 `MONTH_BUCKETS`에 정의. 각 가이드의 `day_range`는 버킷의 `[dayMin, dayMax]`와 **정확히 일치**해야 함 — 범위가 어긋나면 `getGuidesByBucket`에서 조용히 누락됨.
- **라우팅**: `src/app/page.tsx`(생년월일 입력 → 리다이렉트), `src/app/[month]/page.tsx`(slug 기반 버킷 화면).
- **카테고리**: `feeding | development | cognitive | action` — `CATEGORY_META`에 정의. 카테고리 추가 시 union 타입과 meta 레코드 **모두** 업데이트 필요.

## 주요 파일

- `src/lib/guides.ts` — 버킷/카테고리/분유량 계산의 단일 소스
- `data/guides.json` — 전체 가이드 엔트리. 각 항목에 `source_name` + `source_url` 필수 (출처 표기는 선택이 아니라 제품 요구사항)
- `src/app/layout.tsx` — SEO 메타데이터. `NEXT_PUBLIC_SITE_URL` 환경변수로 base URL 오버라이드
- `src/app/sitemap.ts`, `robots.ts` — SEO 라우트

## 컨벤션

- **모든 카피는 한국어.** 사용자 노출 문구는 한국어로, 기존의 따뜻하고 안심시키는 톤 유지.
- **의료 면책 고지 필수**: 건강 관련 정보가 노출되는 모든 화면에 "이 정보는 의료 조언이 아닙니다" 또는 동등한 문구 포함. `TODOS.md` 참조 — v1 배포 전 법적 검토 대기 중.
- **출처 표기 필수**: 모든 가이드에 `source_name` + `source_url` 필수 (소아과학회, WHO, 아이사랑 포털, 질병관리청 등). 출처 없는 가이드 추가 금지.

## 주의사항 (Gotchas)

- `public/` 하위에 SEO 인증 파일들(`google*.html`, `naver*.html`, `ads.txt`) 존재. 에셋 정리 시 삭제 주의.
- `calculateFormula`는 1~15kg 범위 밖에서 `null` 반환 — 호출부에서 null 처리 필수.
- Next.js 16은 **Turbopack이 기본** — 별도 `--turbo` 플래그 불필요.

## 로드맵 컨텍스트

`TODOS.md` 참조:
- 의료 면책 고지문 법적 검토 (런칭 전 블로커)
- 다크모드 (v1.1, 새벽 2시 사용 유스케이스)
- 발달 체크리스트 (post-PMF, 불안 증폭 리스크 주의)
