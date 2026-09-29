# Sources — Spec Kit (github/spec-kit)

## 확인한 사실 (2026-09-29 21:51 KST 선택 시점 기준)

- GitHub 저장소: https://github.com/github/spec-kit
  - full_name: github/spec-kit
  - 설명: Toolkit to help you get started with SDD or any other process!
  - 스타 139,358개 → 표시 "별 13.9만 개" / "별 13.9만" (선택 시점 GitHub API 값, 다른 지표 창작 금지)
  - 라이선스: MIT (무료·오픈소스)
  - homepage: https://github.github.com/spec-kit/
- 공식 README / 문서:
  - AI 코딩 에이전트에 구조화된 프로세스·템플릿·결과물을 주는 오픈소스 툴킷
  - 세 가지 독립 진입점: Spec-Driven Development(기능 만들기), Bug fixing(버그 고치기), Idea assessment(아이디어 타당성 판단)
  - SDD는 코어에 포함. Bug fixing·Idea assessment는 확장(extension)으로 설치
  - 필요 환경: Python 3.11+, uv, 지원되는 AI 코딩 에이전트 (Linux/macOS/Windows)
  - 설치(공식): `uv tool install specify-cli` / `specify init my-project --integration copilot`
  - SDD 흐름(에이전트 채팅에서 스킬 호출): constitution → specify → plan → tasks → implement → converge
  - 문서 사이트는 130K+라고도 쓰지만, 슬라이드 숫자는 API 실시간 값 13.9만 기준

### 슬라이드·캡션에 쓴 사실
- 별 13.9만 개, MIT 무료, 깃허브 공개 툴킷
- AI 코딩 도우미용 스펙·계획·할 일 목록 생성
- uv로 specify-cli 설치 → specify init → 에이전트에서 스펙 작성
- 파이썬 3.11+, Copilot 등 여러 에이전트와 사용 가능
- SDD 코어 + 버그 고치기·아이디어 판단 확장

## 내 제안·해석 (공식 아님)
- 2장 공감(한 줄 지시로 코드 엉킴·재수정 실패) — 일반적 사용 경험에 기반한 해석
- 6장 활용 예시 3개 (예시) 표시: 사이드 프로젝트 기능 잡기, 버그 원인부터 고치기, 아이디어 갈지 말지 판단
- 7장 "스펙이 남는다", "다시 손볼 때" — 문서형 워크플로에서 끌어낸 독자 이득 서술
- 4장 카드 문구·5장 터미널 명령은 공식 설치/흐름을 초보자용으로 축약한 예시
- 캡션 댓글 질문, 해시태그
