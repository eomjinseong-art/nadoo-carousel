# Sources — Paperclip (paperclipai/paperclip)

## 확인한 사실 (2026-10-04 12:43 KST 슬롯 · 제작 시점)

- GitHub 저장소: https://github.com/paperclipai/paperclip
  - 스타 96,787개 → 표시 "별 9.6만 개" / "별 9.6만" (브리프 팩트체크 기준, floor)
  - 라이선스: MIT
  - 설명: "The open-source app everyone uses to manage agents at work"
- 홈페이지: https://paperclip.ing
- 문서: https://docs.paperclip.ing
- 설치(공식): `npx paperclipai onboard --yes`
- 태그라인(README/사이트 인용): If OpenClaw is an employee, Paperclip is the company.
  - 슬라이드 한국어: "OpenClaw가 직원이면 회사다"
- 구성: Node.js 서버 + React UI
- 핵심 기능: 조직도(org chart), 목표 정렬, 월 예산(에이전트별), 거버넌스(승인), 티켓·감사 로그
- Bring your own agent: Claude Code, Codex, Cursor(+Cloud), Gemini CLI, OpenClaw, OpenCode, Pi, Hermes, Grok Build, Kimi Code 등 — 하트비트 받으면 채용
- 흐름: (1) 목표 정의 (2) 팀 채용 (3) 승인 후 실행·대시보드 모니터링
- 비용: 에이전트별 월 예산, 100% 시 자동 일시정지(80% 소프트 경고). 보드가 한도 재개 가능
- 셀프호스트·오픈소스, Paperclip 계정 불필요. 로컬 임베디드 Postgres 또는 자체 Postgres
- 목표 예시(공식 사이트): "Build the #1 AI note-taking app to $1mm ARR"
  - 슬라이드: "(예시) 노트앱 1억 ARR 달성" (공식 예시의 한국어 압축)

### 슬라이드·캡션에 쓴 사실
- 별 9.6만, MIT 무료, 셀프호스트·계정 불필요
- 조직도·목표·예산·승인 한곳, OpenClaw=직원 / Paperclip=회사 비유
- Claude·Cursor·Codex 등, 하트비트=채용
- 월 예산 100% 자동 정지
- `npx paperclipai onboard --yes`

## 불확실·주의
- 스타 수는 브리프 팩트체크 스냅샷(96,787, 2026-10-04). 이후 변동 가능. 표시는 내림(floor) 9.6만.
- Paperclip Cloud는 대기 목록(waitlist) 별도 — 일반 공개로 단정하지 않음. 캡션에 한 줄 주의, 슬라이드는 셀프호스트 강조.
- "1억 ARR"은 공식 $1mm ARR 예시의 한국어 환산·압축. 통화·수치 해석은 예시용.
- "오늘 Paperclip 한 줄 실행!"은 CTA 제안(공식 문구 아님).
- 지원 에이전트 목록은 사이트 "Works with any agent" 기준이며, 버전·어댑터에 따라 다를 수 있음.

## 내 제안·해석 (공식 아님)
- 2장 공감(에이전트 분산·가시성·비용 누수)
- 캡션 댓글 질문(Claude vs Cursor), 해시태그 5개
