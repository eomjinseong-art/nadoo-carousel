# 출처 — Scribe v3 / Scribe v3 Live (일레븐랩스)

- 공식 블로그 (2026-11-10, Min Kim): https://elevenlabs.io/blog/scribe-v3
  - Scribe v3: Scribe v2 대비 단어 오류(WER) 27% 감소, 102개 언어(FLEURS 내부판) 모든 언어에서 개선
  - 3명 이상 화자 녹음에서 화자 구분 오류 17% 감소(전체 12% 감소)
  - Scribe v3 Live: Scribe v2 Realtime 대비 semantic WER 43%·WER 31% 감소, 실시간 화자 구분 처음 포함, 턴 감지 개선
  - keyterm prompting 최대 1,000개, 숫자를 digits/words로 선택, 영어 평문 규칙(transcript edits) 예: "write every date as YYYY-MM-DD"
  - 앱 기본값: v3·v3 Live / ElevenAgents(v3 Live) / ElevenAPI 모델 ID scribe_v3, scribe_v3_live
  - Zero Retention Mode, SOC 2·ISO 27001·PCI DSS L1, HIPAA 가능(BAA)

## 후보 비교 (2026-11-12 확인)
- ERNIE 5.5 Flash Preview (바이두, 11/11): https://ernie.baidu.com/release/ernie-5-5-flash-preview/ — 가중치 "곧" 공개, 국내 실사용 접점 약함
- Tencent Hy4 (11/4): https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/ — 가중치 공개 예정 단계
- Businesses in ChatGPT (오픈AI, 11/10): https://openai.com/index/introducing-businesses-chatgpt — 미국 한정 베타
- → 국내 직장인 체감(회의록)이 가장 큰 Scribe v3 선택 (방향 A)

## 불확실한 점
- 모든 수치는 일레븐랩스 자체 측정. 한국어 개별 개선 폭 미공개(“모든 언어 개선”만 명시).
- 요금·무료 플랜 한도는 블로그에 없음 → 슬라이드·캡션에 숫자 쓰지 않음.
- transcript edits 규칙은 블로그 원문상 "plain English" → "영어 문장"으로 표기.
