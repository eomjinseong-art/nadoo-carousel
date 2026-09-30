# Sources — Gemini 3.8 Flash TTS

## 확인한 사실 (2026-09-30 12:48 KST 제작 시점)

### Google Blog (2026-09-23)
- URL: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/
- Gemini 3.8 Flash TTS / Gemini 3.8 Flash-Lite TTS 공개
- Flash TTS: 창작·캐릭터·라인별 연출(deep creative direction)
- Flash-Lite TTS: 고볼륨·비용 효율(high-volume, cost-efficient)
- Google AI Studio, Gemini API 등에서 이용 가능 (블로그 명시)
- Voice replication: 약 30초 샘플(블로그) + 동의 검증, SynthID, C2PA
- 모든 Gemini Audio 생성물에 SynthID 워터마크
- Voice replication via AI Studio 제한 지역: Illinois, Texas, EEA, UK, Switzerland, India (한국은 블로그 제한 목록에 없음)

### Gemini API 모델 페이지
- URL: https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash-tts
- 모델 id: `gemini-3.8-flash-tts`
- Flash TTS: studio-grade, 창작 플래그십 / 130 languages
- Flash-Lite: `gemini-3.8-flash-lite-tts` / 101 languages / 고처리량·저지연·비용
- Latest update: September 2026

### Voice replication 문서
- URL: https://ai.google.dev/gemini-api/docs/voice-replication
- Reference audio: 10–30초 clean natural speech (같은 성인 화자)
- Consent audio: 동일 화자가 지정 문장 낭독 (예: 영어 동의 문구)
- Flash / Flash-Lite 모두 Voice replication 지원
- Google AI Studio에서 복제·동의·미리듣기 가능

### 슬라이드·캡션에 쓴 사실
- 모델명 Gemini 3.8 Flash TTS, id gemini-3.8-flash-tts
- 130개 언어 (모델 페이지)
- AI Studio · Gemini API 이용
- 10~30초 샘플 + 동의 녹음 필수
- SynthID 워터마크 (블로그; 캡션에 C2PA도 언급)
- Flash-Lite는 대량·저비용 포지션 (터미널/캡션 보조)

## 내 제안·해석 (공식 아님)
- 2장 공감: 쇼츠·팟캐스트 성우/녹음 비용·시간 — 일반 크리에이터 페인
- 6장 활용 예시 3개 (예시) 표시: 쇼츠 나레이션, 팟캐스트 두 화자, 브랜드 안내 음성
- 4장 카드 라벨(다국어/내 목소리/바로 체험) — 공식 기능을 초보자 말로 재구성
- 캡션 댓글 유도 질문, 해시태그
- 블로그의 "over 100 languages"(보이스 디자인)와 모델 페이지 "130 languages"가 함께 있어, 캐러셀 수치는 모델 페이지 130을 사용
