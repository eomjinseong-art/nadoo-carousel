# Sources — GPT-4o·GPT-4.1 계열 API 종료 (2026-10-17 20:43 KST 슬롯 제작)

## 공식 출처 (2026-10-17 20:4x KST에 직접 열어 확인)
- OpenAI API Deprecations — "2026-10-14: GPT-4 series model deprecations"
  https://developers.openai.com/api/docs/deprecations
  - 2026-10-14 개발자에게 통지, 2027-01-14 API에서 제거
  - GPT-4o (gpt-4o-2024-08-06, gpt-4o-2024-11-20), GPT-4o mini (gpt-4o-mini-2024-07-18), GPT-4.1 (gpt-4.1-2025-04-14), GPT-4.1 mini (gpt-4.1-mini-2025-04-14)
  - 대체 모델: 모두 gpt-6-luna
  - 미세조정(fine-tuned) 버전도 기본 모델과 같은 일정으로 종료
- GPT-6 Luna 모델 페이지: https://developers.openai.com/api/docs/models/gpt-6-luna
  - 입력 $0.10 / 캐시 입력 $0.01 / 출력 $0.50 (100만 토큰당, Standard)
  - reasoning.effort 기본값 medium (none~max 지원) → "생각 단계 기본 켜짐"
  - Fine-tuning: Not supported / Assistants: Not supported
  - Chat Completions는 reasoning_effort=none일 때만 function calling 지원
  - 272K 입력 토큰 초과 프롬프트는 입력 2배·출력 1.5배 요금
- 가격 페이지(확인용): https://developers.openai.com/api/docs/pricing — gpt-6-luna $0.10 / $0.50 일치
- GPT-4.1 모델 페이지: https://developers.openai.com/api/docs/models/gpt-4.1 — 입력 $2 / 출력 $8 (GPT-4o 비교표: $2.5 / $10)
- GPT-4o mini 모델 페이지: https://developers.openai.com/api/docs/models/gpt-4o-mini — 입력 $0.15 / 출력 $0.6
- ChatGPT 쪽: OpenAI Help Center "Retiring GPT-4o and other ChatGPT models" — GPT-4o·GPT-4.1·GPT-4.1 mini 등은 2026-02-13 ChatGPT에서 이미 제외, API는 당시 유지
  https://help.openai.com/en/articles/20001051-retiring-gpt-4o-and-other-chatgpt-models
- Microsoft Foundry 모델 종료 일정(마지막 업데이트 2026-09-23): gpt-4o(2024-08-06·2024-11-20), gpt-4o-mini(2024-07-18), gpt-4.1·gpt-4.1-mini(2025-04-14) → 2027-04-14
  https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule
- 참고 보도: AI Early Edition(10/16), DataNorth — 공식 페이지 내용과 일치 확인용

## 슬라이드·캡션에 쓴 숫자
- 10/14 공지, 2027-01-14 종료, 대체 GPT-6 Luna, 미세조정 모델 동시 종료 — Deprecations 페이지
- 입력 단가: 4o 2.5달러, 4.1 2달러, 4o mini 0.15달러, Luna 0.1달러 / 출력: 10·8·0.6·0.5달러 — 각 모델 페이지
- 애저 2027.4.14 — Microsoft Learn

## 해석·제안 (공식 아님)
- 1장 "새 모델 단가가 더 낮음": 100만 토큰당 단가 비교 기준. Luna는 추론이 기본 켜짐이라 실제 청구액은 사용량에 따라 다를 수 있음 → 7장·8장·캡션에서 "직접 확인·요금 다시 계산" 안내
- 3장 "앱에선 이미 빠진 모델들": 4o·4.1·4.1 mini는 2026-02-13 ChatGPT 제외(공식). 4o mini는 ChatGPT 제외 날짜를 공식 페이지에서 따로 확인하지 못해 날짜를 빼고 "이미 빠진"으로만 표현
- 4장 메일 분류·요약 자동화 예시는 "(예시)" — 특정 노코드 툴의 기본 모델 주장 아님
- 7장 "12월 안에 테스트 끝내기", 8장 체크리스트, 9장 CTA는 편집 제안

## 불확실한 점
- 애저 일정은 MS 문서상 "바뀔 수 있음"(문서 업데이트 9/23 기준)
- 별칭 이름(gpt-4o, gpt-4o-mini, gpt-4.1)만 쓰는 경우도 같은 날 끝나는지는 공지에 스냅샷 이름으로만 적혀 있음. 각 별칭의 기본 스냅샷이 목록의 스냅샷이므로 같은 영향으로 해석
