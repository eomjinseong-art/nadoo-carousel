# Sources — Agent Reach (Panniantong/Agent-Reach)

## 확인한 사실 (2026-10-03 12:43 KST 슬롯 · 제작 시점)

- GitHub 저장소: https://github.com/Panniantong/Agent-Reach
  - 스타 88,818개 → 표시 "별 8.8만 개" / "별 8.8만" (`gh api repos/Panniantong/Agent-Reach --jq .stargazers_count`, 2026-10-03 조회, 내림/floor)
  - 라이선스: MIT
  - 설명(저장소): "Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees."
  - 한국어 README: https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/README_ko.md
  - 설치 문서: https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md
  - 한 줄 설치(에이전트에 붙여넣기): `帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md` / 한국어 안내: Agent에게 「Agent Reach 설치해 줘」+ install.md 링크
  - 호환: Claude Code, OpenClaw, Cursor, Windsurf 등 CLI를 실행할 수 있는 에이전트
  - 완전 무료·유료 API 키 불필요(오픈소스 도구). 쿠키/토큰은 로컬 `~/.agent-reach/`(config.yaml 등)에만 저장, 업로드하지 않음
  - 설정 없이(또는 즉시): 웹 페이지(Jina Reader), YouTube 자막·검색(yt-dlp), RSS, GitHub 공개, Bilibili 검색·비디오 정보(bili-cli), V2EX 등
  - 설정/로그인·쿠키 후: Twitter/X, Reddit, XiaoHongShu(소홍서), Facebook, Instagram, LinkedIn 등
  - 진단: `agent-reach doctor` — 되는 채널·안 되는 채널·수정 방법 표시

### 슬라이드·캡션에 쓴 사실
- 별 8.8만, MIT 무료, 한 줄 설치(install.md), API비 0·오픈소스
- 설정 없이 웹·유튜브 자막·RSS·깃허브·B스테이션
- 설정 후 트위터·레딧·소홍서·페이스북·인스타
- 쿠키 로컬 저장, doctor 진단, Claude·Cursor 등 CLI 호환

## 불확실·주의
- 스타 수는 조회 시점 스냅샷(88,818). 이후 변동 가능. 표시는 내림(floor) 8.8만.
- README의 「서버 프록시 월 $1」은 로컬 PC에는 보통 불필요 — 슬라이드에 넣지 않음.
- Facebook/Instagram은 OpenCLI(브라우저 로그인 세션) 경로 — 「쿠키만」보다 넓게 「로그인·쿠키」로 표현.
- Reddit은 익명/제로설정 경로 없음(로그인 필요) — 「설정 후」 슬라이드에만 배치.
- 「오늘 Agent에게 설치 한 줄」은 CTA 제안(공식 문구 아님).
- 깃허브 #1 trending은 제작 시점 브리프 기준. 랭킹은 시시각각 변하므로 슬라이드 본문에는 「깃허브 인기」만 사용.

## 내 제안·해석 (공식 아님)
- 2장 공감(유튜브·트위터·레딧을 AI가 못 봄 / API 유료·차단)
- 캡션 댓글 질문(유튜브 vs 트위터), 해시태그 5개
