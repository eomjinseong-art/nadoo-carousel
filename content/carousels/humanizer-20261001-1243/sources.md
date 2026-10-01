# Sources — Humanizer (blader/humanizer)

## 확인한 사실 (2026-10-01 12:43 KST 선택 시점 기준)

- GitHub 저장소: https://github.com/blader/humanizer
  - 설명(API): Agent skill that removes signs of AI-generated writing from text
  - 스타 53,156개 → 표시 "별 5.3만 개" / "별 5.3만" (`gh api repos/blader/humanizer --jq .stargazers_count`, 2026-10-01 12:46 KST 조회)
  - 라이선스: MIT
  - 홈페이지: https://skills.sh/blader/humanizer
  - 최신 릴리스: v3.1.0 (2026-09-28, GitHub Releases)
  - 기반(README): Wikipedia 「Signs of AI writing」(위키백과 AI 글 징후 가이드)
  - 패턴 수(README): 26 patterns (가장 강한 5가지 포함: Not X but Y, one-line closers, deep-sounding sayings, staged run-up, arguing with no one)
  - 설치(README): `npx skills add blader/humanizer --global` (또는 Claude Code 플러그인, Codex 등)
  - 사용(README): `/humanizer` 후 글 붙여넣기 / "Please humanize this text" / 파일 경로 지정
  - 말투 맞춤(README): 본인 글 샘플 2–3단락을 넣으면 리듬·어휘·구두점 맞춤
  - 사실 보존(README): 이름·숫자·날짜·인용 등은 원문·작성자에서만, 없으면 지어내지 않고 물음
  - 탐지기(README 명시): Getting past AI detectors is not a goal; detectors still flag most of its output
  - 블라인드 테스트(README): judges preferred Humanizer rewrite 16/16 (#229) — 슬라이드·캡션에는 넣지 않음

### 슬라이드·캡션에 쓴 사실
- 별 5.3만 개, MIT, AI 글을 사람 말투로 다듬는 에이전트 스킬
- 위키백과 AI 징후 가이드 기반, 26가지 패턴
- npx 설치 → /humanizer → 붙여넣기
- 사실·숫자·인용 보존, 말투 샘플 맞춤
- 탐지기 우회가 목표가 아님(공식 README)

## 내 제안·해석 (공식 아님)
- 2장 공감(블로그·메일·제안서 AI 초안의 어색한 말투) — 타겟 페인포인트 해석
- 6장 활용 3가지에 "(예시)" 표기: 블로그·뉴스레터 / 제안서·메일 / SNS·랜딩
- 4장 카드 라벨(패턴 수정/사실 보존/말투 맞춤) — 공식 기능을 초보자 말로 재구성
- 캡션 댓글 질문, 해시태그
- 블라인드 16/16은 README 주장이나 표본·방법 상세가 슬라이드에 담기엔 길어서 제외
