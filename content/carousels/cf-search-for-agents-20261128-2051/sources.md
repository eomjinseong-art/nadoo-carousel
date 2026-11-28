# 출처 — cf-search-for-agents-20261128-2051 (확인 2026-11-28 KST, 방향 A)

## 1차 출처 (공식)
- 클라우드플레어 블로그 "Introducing Search for Agents" (2026-11-25, Celso Martinho·Gabriel Massadas·Nelson Duarte): https://blog.cloudflare.com/search-for-agents/
  - 대시보드 존 페이지 Quick Actions의 토글로 켜면 AI Search 인스턴스 자동 생성·크롤링·색인, 내 도메인에서 검색 제공
  - "available to all customers, including Free (with limits)"
  - 모든 페이지 HTML에 agent:endpoint 등 메타데이터 자동 삽입(Markdown for Agents 켜면 YAML 앞머리)
  - 결과는 생성된 답이 아니라 Markdown 원문 검색 결과; GET(q)·HTTP QUERY(RFC 10008) 지원
  - 사용량은 AI Search 요금 기준(수집·저장·질의), Workers Free·Paid 포함량·한도 적용
  - 봇 관리·AI Crawl Control·WAF 설정 적용
- 체인지로그 2026-11-25: https://developers.cloudflare.com/changelog/post/2026-11-25-search-for-agents/ ("available on all plans", Overview → Quick Actions)
- 개발자 문서 Search for Agents: https://developers.cloudflare.com/ai-search/how-to/search-for-agents/
  - "available in beta on all plans" → 슬라이드 '시험 단계(베타)'
  - 도메인이 클라우드플레어 계정에 등록(onboarded)돼 있어야 함; 공개 검색해도 되는 콘텐츠만 색인 권고
  - 기본값: discover 크롤(사이트맵+링크), 크롤 한도 100,000페이지, 깊이 5, 동기화 24시간, 하이브리드 검색, 최대 10개 결과
- AI Search Limits & pricing: https://developers.cloudflare.com/ai-search/platform/limits-pricing/
  - Workers Free 하루 최대 크롤 500페이지(Paid 무제한)
  - 의미(semantic) 질의 월 1,000회·전문(full-text) 질의 월 1,000회 포함
  - "AI Search billing begins on December 1, 2026"
  - 계정당 월 포함: 수집 500만 토큰, 저장 10GB-월, 의미 1,000회, 전문 1,000회; 초과 요금 수집 $0.75/100만 토큰, 저장 $2/GB-월, 의미·하이브리드 $0.75/1,000회, 전문 $0.10/1,000회 (슬라이드·음성엔 초과 단가 미기재)

## 보조
- AI Workshop(blocksize.hr) AI Digest 2026-11-27: Free 플랜 포함·대시보드 스위치 하나 보도 확인

## 불확실한 점
- 한국어 대시보드 메뉴 이름(개요/빠른 작업)은 화면 언어에 따라 다를 수 있어 슬라이드에 'Quick Actions' 영문 병기.
- Workers Free 계정이 포함량을 넘을 때 과금되는지 사용이 제한되는지는 문서에 명시가 약함 → '기본 포함량 넘기 전 사용량 확인'으로만 표현.
- 실제 AI 에이전트(챗GPT·클로드 등)가 이 엔드포인트를 얼마나 자주 쓰는지는 클라우드플레어 자사 문서 사례(OpenCode)만 공개 → 효과 수치 언급 안 함.
- '손님 대신 AI 에이전트가 찾아옴'은 업계 흐름에 대한 나두Ai 해석(훅 문구).
