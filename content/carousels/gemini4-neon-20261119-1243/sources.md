# 출처 — gemini4-neon-20261119-1243 (확인 2026-11-19 KST)

## 공식
- 구글 블로그 "Introducing Gemini 4 Neon" (2026-11-18, Koray Kavukcuoglu): https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
  - "$3 per million input tokens ($0.15 per million cached input tokens, a 95% discount) and $15 per million output tokens, with a 1 million-token context window"
  - 출시처: Gemini API(Google AI Studio), Gemini for business(API·모델 드롭다운), 유료 Google AI Pro·Ultra 구독자 Google Antigravity, Pro·Ultra 구독자 Gemini 앱 모델 드롭다운
  - "At its default high thinking level, it pairs a high Artificial Analysis Intelligence Index score with a 32% lower cost per task than Carbon."
  - 가족 내 위치: "Carbon tackles your hardest, long-horizon projects and Hydrogen handles fast everyday execution, Neon balances depth and efficiency."
  - 앱 활용: "reads uploads like spreadsheets, PDFs, and photos more precisely, turns dense material into helpful reports and summaries, and pulls in relevant details from Google apps like Gmail and Docs"
  - "comparing pricing across vendors before a major purchase"
  - "analyzing billing statements to spot why a utility charge spiked or cross-checking multiple receipts and documents to negotiate a refund"
  - 입력: spreadsheets, PDFs, charts, audio, video in a single 1M-token context
- Google Cloud 문서 (모델 카드): https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/4-neon — 모델 ID `gemini-4-neon`, 문맥 1,048,576 토큰

## 불확실한 점
- 한국 계정 제미나이 앱 롤아웃 시점 미기재("rolling out today") → "순차 적용"으로만 표현
- 무료 제미나이 앱 사용자 이용 여부는 공식 글에 언급 없음 → 슬라이드는 "앱에서는 프로·울트라 구독자만 선택"(공식 문구 기준)
- 32%·벤치 수치는 구글 자체/제3자 벤치 발표 기준, 작업마다 다름
- API 무료 등급 불가는 2차 사이트(CellCog) 인용만 → 슬라이드·캡션에서 "유료 등급"(공식 "Gemini API paid tier")으로만 표기
- 슬라이드 예시(견적서 비교, 관리비 고지서)는 직접 만든 예시 → (예시) 표기

## 후보 스캔(선택 안 함)
- Genie 4 / Project Genie (구글 딥마인드, 11/19) — 울트라 구독자 전용 월드 모델, 실무성 낮음
- Perplexity Computer Multiagent (11/17) — Max 구독자 전용, 웹만
- Tencent Hunyuan Hy4 Flash (11/18 전후) — 개발자 API 위주, 공식 원문 미확인
- Replit Missions — 공식 원문 미확인
