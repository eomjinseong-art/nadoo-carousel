# Sources — GitHub Copilot Computer Use

## 확인한 사실 (2026-10-03 20:43 KST 슬롯 · 제작 시점)

- 공식 Changelog: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps/
  - 게시일: October 1, 2026
  - 제목: "GitHub Copilot can now interact with desktop apps with computer use"
  - Computer use는 GitHub Copilot CLI와 macOS·Windows용 GitHub Copilot 앱에서 **공개 프리뷰(public preview)** 로 제공
  - Copilot이 데스크톱 앱을 대신 조작: 접근 가능한 앱 내용·시각 컨텍스트 읽기, 컨트롤 클릭, 텍스트 입력·편집, 키 입력, 스크롤, 드래그, 앱 간 워크플로 탐색
  - API·CLI·MCP가 없는 레거시·GUI 전용 소프트웨어 워크플로 자동화 범위 확대
  - 통제권: 앱 제어 전 승인 요청. 항상 허용(always allow)한 앱은 검토·초기화(reset) 가능
  - macOS: Accessibility·Screen Recording 권한 안내
  - 조직 관리 설정(Organization-managed settings)으로 기능 비활성화 가능
  - CLI: `/computer on` 켜기, `/computer show` 상태, `/computer off` 끄기
  - 앱: Settings → Computer Use → Enable Computer Use. 앱에서도 `/computer on` 가능
  - 권장: 원하는 결과·관련 앱·중요 제약을 설명해 달라고 안내. 예) 브라우저 알림 요약, 프레젠테이션 내용 업데이트, 데스크톱 앱 워크플로로 정보 이동

### 슬라이드·캡션에 쓴 사실
- 공개 프리뷰, macOS·Windows, Copilot CLI + Copilot 앱
- 클릭·입력·스크롤·드래그·앱 내용/화면 읽기
- `/computer on` / `show` / `off`
- Settings→Computer Use, Enable로 켜기, 앱에서도 `/computer on`
- 승인 후 제어, 항상 허용 앱 검토·초기화, 조직에서 끌 수 있음
- API·CLI 없는 레거시·GUI 자동화 맥락(공식: legacy and GUI-only software without API/CLI/MCP)

## 불확실·주의
- 가격·요금제 변경 여부는 Changelog에 없음 — 슬라이드에 넣지 않음
- Linux 데스크톱 앱 지원 여부는 Changelog에 명시되지 않음(macOS·Windows만 언급) — 슬라이드에 Linux 미기재
- 「오늘 Computer Use 켜 보기」는 CTA 제안(공식 문구 아님)
- MCP 미지원 소프트웨어 언급은 공식에 있으나 초보 독자용 슬라이드에서는 API·CLI 중심으로 축약

## 내 제안·해석 (공식 아님)
- 2장 공감(API 없는 앱·수동 클릭 반복)
- 캡션 댓글 질문(자동화하고 싶은 앱), 해시태그 5개
