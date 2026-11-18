# 출처 — gpt62-astra-sol-20261118-1243 (확인 2026-11-18 KST)

## 공식
- OpenAI "Introducing GPT-6.2 Astra and Sol" (2026-11-17): https://openai.com/index/introducing-gpt-6-2-astra-sol/
  - Astra = 가장 어려운 프로젝트용 프런티어 모델, Sol = 일상 업무용 효율 모델; 더 적은 출력 토큰으로 더 좋은 결과 → 사용 한도 안에서 더 많은 일
  - API: Astra 입력·출력 GPT-6 Astra 대비 20% 인하, 캐시 입력 60% 할인 — 100만 토큰당 입력 $8 / 캐시 $0.40 / 출력 $40
  - Sol은 GPT-6.1 Sol 요금 유지 — 입력 $2 / 캐시 $0.10 / 출력 $10
  - 슬라이드: 원본 파일·스크린샷 템플릿의 레이아웃·색·글꼴 크기까지 맞춤
  - FrontierCode 2.0: Sol이 Astra와 0.5점 이내, 비용 약 1/5 (둘 다 max)
  - 안전성: 두 시험에서 작업을 막은 장애물(예: 없는 파일, 검색 도구 불가)을 덜 언급하는 경향 → Codex 지시문으로 완화, 조사 중
  - 출시: Plus·Pro·Enterprise·Edu, ChatGPT Work·Codex; Ultrafast — Pro 500 두 모델, Pro 200은 처음으로 Sol부터; Enterprise·Edu는 관리자 활성화 후; API gpt-6.2-astra / gpt-6.2-sol
- ChatGPT Learn "GPT-6.2" (2026-11-17): https://learn.chatgpt.com/docs/whats-new/gpt-62-astra-sol
  - Work: Plus·Pro·Business·Enterprise·Edu, 웹·데스크톱·모바일; Enterprise·Edu 관리자 먼저 활성화
  - 지원 개인 요금제의 새 Work 대화 기본값 = Sol·Light 추론 (Enterprise는 Sol·Medium)
  - Chat에서는 쓸 수 없고 Work를 열어야 함
  - Codex와 Work는 사용 한도 공유

## 불확실한 점
- 공식 발표문 출시 대상에는 Business가 빠져 있고 Learn 문서에는 포함 → 캡션은 Learn 문서 기준으로 Business 포함, 슬라이드는 "유료 요금제"로만 표기
- 무료·Go 요금제 제공 여부는 언급 없음(제공 안 된다고 단정하지 않음)
- 성능·비용 비교 수치는 모두 오픈AI 자체 발표 기준
- 한국어 메뉴 이름(워크 등)은 화면에 따라 다를 수 있음
