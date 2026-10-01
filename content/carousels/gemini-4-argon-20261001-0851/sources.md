# Sources — Gemini 4 Argon

## 확인한 사실 (2026-10-01 08:51 KST 제작 시점)

### Google Blog (2026-09-30)
- URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/
- New frontier model Gemini 4 Argon announced.
- Rolling out first to trusted cyber defenders via Fairwind Program; phased expansion to developers/enterprises/consumers later (paid API + Google AI Ultra first).
- Strengths: complex long-horizon workflows — software engineering, enterprise knowledge work (legal/finance), cybersecurity defense.
- Introductory API price: $2 / 1M input tokens, $10 / 1M output tokens; cached input 95% off input price. After intro: $4 / $20.
- Output token limit expanded to 1M tokens (from previous 64K).
- Internal Google use examples (Google-reported): quantum algorithmic optimization beat published baseline by 40% in minutes; agents freed over 300 TiB memory (est. 500 TiB–1 PiB total); large C/C++→Rust migrations; libgav1 Rust port 2.7x faster after Argon agent work.
- Benchmarks (Google-reported): DeepSWE v1.1 77.9% SOTA; AutomationBench (Zapier) #1 at 51.3%; LVBench 91.7% SOTA; CWE-bench v1 ties first at 68%.
- Cyber: can find/validate/patch vulnerabilities; Wiz using via Scan for Good; early demo found critical healthcare software exposure previous models missed (Google/Wiz via Google blog).
- Safeguards being strengthened before broad availability; engaged in US voluntary pre-release process.

### Reuters (2026-09-30)
- Google announced Gemini 4 flagship; Argon larger than previous Pro line; company says comparable to Astra and Opus on key coding/cyber benchmarks.

### 슬라이드·캡션에 쓴 사실
- 공식 명칭 Gemini 4 Argon, GOOGLE · 2026.09.30
- 출력 1M 토큰(이전 64K), Fairwind → 유료 API·AI Ultra 단계 공개
- 도입가 $2/$10 → 이후 $4/$20, 캐시 입력 입력가 95%↓
- 코딩·법률·금융·사이버 방어용 긴 멀티스텝 작업
- 벤치 수치(캡션): DeepSWE 77.9%, AutomationBench 51.3% 1위, LVBench 91.7%, CWE-bench 공동 1위 68% — 모두 구글 발표 기준
- 슬라이드에는 벤치 숫자를 넣지 않고 7장에서 '구글 발표 기준'으로 주의 표기

## 내 제안·해석 (공식 아님)
- 2장 공감: AI 성능 경쟁 속도·최신성 혼란 — 일반 사용자·팀 페인
- 6장 준비 예시 3개 (예시) 표시: 워크플로 정리, Ultra·API 대기, 보안·프롬프트 주입 대비
- 4장 카드 라벨(출력 한도/긴 작업/쓰임새) — 공식 강점을 초보자 말로 재구성
- 캡션 댓글 유도 질문, 해시태그
