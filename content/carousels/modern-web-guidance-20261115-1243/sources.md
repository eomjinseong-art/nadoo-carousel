# 출처 — modern-web-guidance-20261115-1243 (방향 C, pastel)

## 주제
Modern Web Guidance 1.0 (구글 크롬, GoogleChrome/modern-web-guidance) — 2026-11-10 정식판

## 공식 출처
- 크롬 개발자 블로그 (2026-11-10, Philip Walton): https://developer.chrome.com/blog/modern-web-guidance-v1
  - 5월 Google I/O에서 early preview → 1.0 stable
  - 1.0: modernization workflow(기존 코드 스캔), 가이드 DB 확장, 전문가 검수, 공개 eval 대시보드
  - Firefox·Edge 합류(cross-browser effort)
  - 모델이 놓치는 영역: Accessibility(키보드 포커스·reduced-motion·폼 검증), UX(스와이프·dialog/popover 전환·라이트/다크), Performance(메인 스레드·layout shift), Security(HTML sanitization·CSP·passkey)
  - 설치 `npx modern-web-guidance@latest install`, 업데이트 `... update`; 플러그인 마켓: Claude Code, Codex, Cursor, Antigravity, Copilot, WebStorm, Kimi Code, Grok Build
  - note inc. 사례: 180-run evaluation, pass rate 61% → 94%, LCP 이미지 우선순위 28% 개선(431 PR)
- GitHub 릴리스 v1.0.0 (2026-11-10 03:24 UTC = 12:24 KST): https://github.com/GoogleChrome/modern-web-guidance/releases/tag/v1.0.0
  - 203 use-case guides, 250 web platform features; Chrome·Edge·Firefox·MDN 공동 관리
  - `legacy-scan` — 결정적 규칙이 있는 약 20% 가이드만 해당
  - 검색: 오프라인, npm 다운로드 23.5MB → 8.8MB
- GitHub API (2026-11-15 12:55 KST 조회): stars 15,584 → "1.5만"(내림), license Apache-2.0, created 2026-03-23, pushed 2026-11-10

## 후보 비교 (2026-11-15 확인)
- Tencent Hy4 (11/4): https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/ — 중국 서비스 중심, 국내 독자 접점 약함, 무료 이벤트 11/15 종료
- ERNIE 5.5 Flash Preview (바이두, 11/11): https://ernie.baidu.com/release/ernie-5-5-flash-preview/ — 가중치 "곧" 공개, 미확정
- meta/astryx (주간 별 급상승): https://astryx.atmeta.com/blog/introducing-astryx — 공개일 2026-06-18이라 신선도 부족
- OpenAI Daybreak Red Team (11/12) — 보안팀 대상 얼리 액세스, 초보 체감 낮음
- → 바이브 코딩 창업가·프리랜서에게 바로 닿고, 11/10 정식판·브라우저 3사 공동 관리로 why-now가 분명한 Modern Web Guidance 선택 (방향 C, 직전 A·A).

## 불확실한 점·판단
- "노코드 빌더만 쓰면 덜 맞음", "웹이 아닌 앱만 만들면 해당 없음"은 도구 성격(코딩 에이전트 스킬·웹 플랫폼 가이드)에 따른 나두Ai 판단.
- 통과율 61%→94%는 note inc. 한 회사 사례(구글 블로그 소개). 일반 보장 아님 → 캡션에 명시.
- 한국어 사이트 특화 내용 없음 → 언급 안 함.
