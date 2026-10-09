# 출처 — Claude Haiku 5.5 요금·정책 (2026-10-09 12:56 슬롯, 방향 B, pastel)

## 주제 선정
- **Claude Haiku 5.5** 공식 출시 2026-10-07 — history.md에 없음. 직전 슬롯 A→B라 방향 B 가능.
- 사용자 지정 주제·방향 B·pastel. 숫자·요금은 공식 페이지만 사용.

## 공식 출처
- Anthropic Claude Haiku 5.5 제품 페이지: https://www.anthropic.com/claude-haiku-5-5
- Anthropic Claude Haiku 모델 페이지: https://www.anthropic.com/claude/haiku
- 확인 요지 (2026-10-07 공지 기준, 과제에 제공된 공식 사실):
  - 가장 싸고 빠르며 성능 좋은 Anthropic 소형 모델
  - 대량·비용 민감 작업(요약·분류·DB 쿼리·실시간 고객지원·브라우저 유즈), Opus/Sonnet 5.5 서브에이전트
  - 평균 실행비 Haiku 4.5 대비 약 75% 저렴. ≤100K 요청 약 90% 저렴, >100K 약 50% 저렴 (~90% of Haiku 4.5 requests ≤100K)
  - API (Claude Platform): ≤100K → 입력 $0.10/M, 출력 $0.50/M / >100K → 입력 $0.50/M, 출력 $2.50/M. model id `claude-haiku-5-5`
  - Claude.ai (Free·Pro·Max·Team·Enterprise, web/iOS/Android), Claude Platform API, AWS, Google Cloud, Microsoft Azure/Foundry, Claude Code
  - 첫 Haiku adjustable effort (비용 vs 지능)
  - Sonnet 5.5 캐시 읽기 $0.20→$0.10/M (에이전트 작업 체감 약 20% 절감)
  - Max/Team 월 API 크레딧: Max 5x $100, Max 20x $200, Team up to $500 pooled
  - 용도: 대량 NLP, 실시간 채팅/보이스/지원, 서브에이전트, 브라우저·데스크톱 자동화, 간단 코딩. 복잡 코딩→Opus 5.5, 범위 잡힌 일→Sonnet 5.5

## 불확실한 점
- "$/M"은 백만 토큰당 달러(공식 Claude Platform 표기). 원화 환산은 환율 변동으로 슬라이드·캡션에 넣지 않음.
- "평균 75% 저렴"은 Anthropic 공식 평균치. 실제 청구는 요청 길이·effort·캐시 여부에 따라 달라질 수 있음.
- Max/Team 크레딧 "이번 주 지급"은 출시 주간(10/7 전후) 공지 기준. 계정별 반영 시점은 다를 수 있음.
- 7장 모델 선택 가이드·8장 체크리스트·9장 CTA는 권장 사항이지 공식 의무 사항이 아님.
- AWS·GCP·Azure/Foundry 단가는 플랫폼별로 다를 수 있어 슬라이드에는 Claude Platform API 단가만 표기.
