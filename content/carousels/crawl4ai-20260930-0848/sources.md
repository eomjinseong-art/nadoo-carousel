# Sources — Crawl4AI (unclecode/crawl4ai)

## 확인한 사실 (2026-09-30 08:48 KST 선택 시점 기준)

- GitHub 저장소: https://github.com/unclecode/crawl4ai
  - 설명: Open-source web crawler and scraper for LLMs and AI agents: any website into clean, LLM-ready Markdown. Run it yourself, or use Crawl4AI Cloud with one key.
  - 스타 84,489개 → 표시 "별 8.4만 개" / "별 8.4만" (선택 시점 GitHub API 값, 다른 지표 창작 금지)
  - 라이선스: Apache-2.0 (무료·오픈소스)
  - 홈페이지: https://crawl4ai.com
  - 문서: https://docs.crawl4ai.com
  - 최신 릴리스: v0.9.4 (2026-09-23, GitHub Releases)
  - 설치(공식 README): `pip install -U crawl4ai` 후 `crawl4ai-setup` (브라우저 1회 설치)
  - 기본 사용(공식 README): `AsyncWebCrawler`로 URL → `result.markdown`
  - 두 가지 사용법(공식): ① 자체 실행(라이브러리/도커, 무료) ② Crawl4AI Cloud(유료·선불, 첫 $10 프로모 등은 시점별 변동 — 캐러셀은 자체 실행 중심)
  - 출력: LLM용 클린 마크다운, 구조화 추출(CSS/XPath/LLM), 인용·필터 등 (README Features)
  - Python: 공식 사이트 표기 3.10 | 3.11 | 3.12 | 3.13 (crawl4ai.com)

### 슬라이드·캡션에 쓴 사실
- 별 8.4만 개, Apache-2.0, 오픈소스 웹 크롤러
- 웹 → 마크다운(AI가 잘 읽는 글), 광고·메뉴 제거(Fit Markdown/필터 개념을 초보자 말로)
- pip 설치 → crawl4ai-setup → 주소로 마크다운
- 무료 자체 실행 + 클라우드 선택 가능
- v0.9.4 (캡션만)

## 내 제안·해석 (공식 아님)
- 2장 공감(사이트 복붙 피로, 광고·메뉴) — 일반적 사용 경험 해석
- 6장 활용 예시 3개 (예시) 표시: 경쟁사 요약, 뉴스·블로그 자료 모으기, 상품 페이지 정보 뽑기
- 7장 "조사·리서치 시간 절약", "AI 답의 재료를 깨끗이" — README의 LLM-ready Markdown·RAG/에이전트 용도에서 끌어낸 독자 이득 서술
- 4장 "본문만/바로 쓰기/무료" 카드 라벨 — 공식 기능을 초보자 말로 재구성
- 캡션 댓글 질문, 해시태그
- 클라우드 첫 $10·가격은 변동 가능하므로 슬라이드에는 "클라우드 선택"만 언급, 구체 금액은 캡션/슬라이드에 넣지 않음
