# 출처 — mai-code2-copilot-20261118-2043 (확인 2026-11-18 KST)

## 공식
- 마이크로소프트 AI 발표 (2026-11-17, Ignite): https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/
  - MAI Code 2: 4개 벤치(DeepSWE 1.1, Terminal Bench 2.1, SWE-Atlas, FrontierCode v1.1) 평균 GPT 6.1 Sol 성능 98%를 40% 비용, Claude Opus 5.5 96%를 5% 비용 (각주: MAI-Code-2 비용은 50% 프로모션 가격 기준, max reasoning)
  - "explicitly not yet tuned for harder problems, like fundamental science research and very long horizon agentic work"
  - 용도: Code 2 = deep debugging, multi-file implementation, repo wide reasoning, UI / Flash = code explanations, targeted edits, routine fixes, rapid iterations
  - GitHub Copilot에서 사용 가능, Code 2 Flash는 Microsoft Foundry 제한 프리뷰
- MAI 라인업 발표: https://microsoft.ai/news/microsoft-ignite-2026/ (7개 모델, 2026-11-17)
- GitHub Changelog (2026-11-17): https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/
  - MAI Code 2: Copilot Pro, Pro+, Max, Business, Enterprise
  - MAI Code 2 Flash: Copilot Free, Student, Pro, Pro+, Max, Business, Enterprise
  - 모델 선택: VS Code, Visual Studio, Copilot CLI, cloud agent, Copilot app, github.com, GitHub Mobile, JetBrains, Xcode, Eclipse
  - Business/Enterprise: 기본 모델 활성화 정책상 새 모델 자동 켜짐, 관리자가 끌 수 있음
  - usage-based billing 적용
- GitHub Docs 요금표: https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing
  - MAI Code 2 프로모션 $0.50 입력 / $0.025 캐시 / $2.50 출력 (100만 토큰) ~2027-05-17, 이후 $1.00 / $0.05 / $5.00
  - MAI Code 2 Flash 프로모션 $0.05 / $0.005 / $0.25 ~2027-05-17, 이후 $0.10 / $0.01 / $0.50
  - 1 AI credit = $0.01

## 불확실한 점
- 성능·비용 비교는 마이크로소프트 자체 평가(자사 MSBench + Artificial Analysis), 작업마다 다름 → 슬라이드에 "MS 자체 평가" 명시
- 무료 플랜의 AI 크레딧 한도(양)는 이번 세트에서 숫자로 쓰지 않음
- 2027-05-17 경계 시각(시간대) 미기재 → 날짜만 사용
- 연간 레거시(요청 기반) 요금제 배수(Code 2 1x, Flash 0.33x)는 슬라이드·캡션 미사용

## 후보 스캔(선택 안 함)
- 퍼플렉시티 Computer Multiagent (11/17) — 직전 슬롯이 A(GPT-6.2)라 B 축 우선
- MAI Image 2.7 (11/17, 1,000장당 약 $35 / Flash 약 $10, Foundry 공개 프리뷰) — 개발자용 API 위주
- Google Cloud 무료 체험 크레딧 $300을 11/16 이후 가입자는 Gemini 플랫폼에 못 씀 — 2차 집계 사이트 출처만 확인
