# 출처 — 구글 워크스페이스 MCP 서버·CLI 정식 출시 + 사용 등급 (2026-11-25 20:43 KST 슬롯, 방향 B)

## 공식 출처
1. Google Workspace Updates 블로그 (2026-11-24) "Simplifying agent access while keeping organizations in control: MCP servers, CLI, standardized usage tiers, and admin policies"
   https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html
   - Workspace MCP 서버·공식 Workspace CLI GA. MCP 지원: Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat, Tasks (Keep coming soon) → 8곳
   - 두 등급: Standard(무료, 공개 한도) / Scaled(더 높은 한도). 2027-04-01부터 Scaled 선택 시 과금
   - MCP requirement: AI 에이전트는 REST API 대신 MCP 사용, 기술적 시행 2027-02-01
   - "Over 99% of active developers currently operate within the Standard tier"
   - HITL 확인(외부 파일 읽기·데이터 공유 등 민감 작업, 관리자 규칙), DLP 자동 적용, 감사 로그
   - 관리자: Admin console Security > API Controls
   - 새 Workspace API usage developer dashboard
   - 롤아웃: Rapid/Scheduled Release 2주 내 전체
   - 데이터 장기 보관·스크래핑 금지(Workspace AI Tools Addendum)
2. Google for Developers "Usage tiers and quotas for Google Workspace APIs and MCP servers" (Last updated 2026-11-24 UTC)
   https://developers.google.com/workspace/guides/quota-usage-tiers
   - Standard Tier: 무료, Cloud Billing 계정·카드 불필요, GA MCP 서버는 프로젝트·제품당 하루 최대 5,000 요청(+분당 제한)
   - 일부 MCP 도구는 여러 API 호출을 하므로 여러 요청으로 계산
   - Standard 한도 초과 시 quota window 리셋까지 throttle
   - 2027-02-01: REST API 직접 호출 에이전트는 tier와 무관하게 Standard 한도
   - 2027-04-01: Scaled Tier 과금 시작, Scaled Tier의 Gmail·Calendar·Drive MCP는 무료 구간 없이 첫 요청부터 과금
3. Google for Developers "Use the Google Workspace command-line interface (CLI)" — CLI 이름 gwscli
   https://developers.google.com/workspace/guides/workspace-cli

## 불확실한 점·주의
- "11월 24일"은 미국 시간 기준 게시일(한국 시간으로는 11/24~25).
- 1장 "하루 5,000번까지 무료"는 단순화 표현. 정확히는 "Standard 등급 GA MCP 서버, 프로젝트·제품당 하루 최대 5,000 요청"(분당 제한 별도). 3장·캡션에 정확한 조건 표기.
- 개인용(일반 Gmail) 계정에서도 같은 MCP 서버를 쓸 수 있는지는 이 공지에 명시 없음 → 슬라이드·캡션에서 주장하지 않음.
- 확장 등급의 구체적 단가는 이 출처에서 확인하지 않아 쓰지 않음.
- 확인 창(HITL)은 관리자가 규칙을 설정한 경우에 뜸 → "관리자 설정에 따라"로 표현.

## 후보 비교(이번 회차)
- Google Workspace MCP·CLI GA + 사용 등급(11/24) ← 선택 (B, 직전 C·A 이후, 직장인 체감 큼)
- Claude Ship(앤트로픽 11/23, Team·Enterprise 베타 PR 에이전트) — 직전 12:43 슬롯이 클로드라 회피, 개발자 한정
- Z.ai GLM-5.4(11/23, 루프 트랜스포머 750B, API·가중치 미정) — 국내 체감 약함
- Anthropic Skills over MCP 공개 베타(11/24) — 개발자 한정
