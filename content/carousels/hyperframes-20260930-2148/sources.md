# Sources — HyperFrames (heygen-com/hyperframes)

## 확인한 사실 (2026-09-30 21:48 KST 선택 시점 기준)

- GitHub 저장소: https://github.com/heygen-com/hyperframes
  - 태그라인(README): Write HTML. Render video. Built for agents.
  - 설명(README): open-source framework for turning HTML, CSS, media, and seekable animations into deterministic MP4 videos. Use locally with CLI, from AI coding agents with skills, or as rendering core.
  - 스타 54,424개 → 표시 "별 5.4만 개" / "별 5.4만" (GitHub API `gh api repos/heygen-com/hyperframes --jq .stargazers_count`, 2026-09-30 21:50 KST 조회)
  - 라이선스: Apache-2.0 (무료·오픈소스, 렌더당 요금 없음 — README/배지 기준)
  - 공식 문서: https://hyperframes.heygen.com/introduction
  - Quickstart: https://hyperframes.heygen.com/quickstart
  - Playground: https://www.hyperframes.dev/
  - 수동 CLI(README): `npx hyperframes init my-video` → `preview` → `render`
  - 요구사항(README): Node.js 22+, FFmpeg
  - 에이전트 스킬(README): `npx skills add heygen-com/hyperframes` / Claude plugin (`claude plugin marketplace add heygen-com/hyperframes` 등)
  - 활용 사례(README What You Can Build): product launch videos, PR walkthroughs, social videos with captions, docs-to-video, motion graphics 등
  - Docs intro: Agent-built / Editable project / Reliable render(프레임 단위 결정적 렌더)

### 슬라이드·캡션에 쓴 사실
- 별 5.4만 개, Apache-2.0, HTML→결정적 MP4
- CLI: init / preview / render, Node 22+·FFmpeg
- 에이전트 스킬·렌더 요금 없음
- README 활용 사례(제품 런칭, PR, 소셜 캡션, 문서→영상, 모션)

## 내 제안·해석 (공식 아님)
- 2장 공감(숏폼·제품 영상 니즈, 편집 어려움·외주 비용, HTML은 아는데 영상은 막막) — 타겟 페인포인트 해석
- 4장 카드 라벨(설계/에이전트/요금 없음) — 공식 기능을 초보자 말로 재구성
- 7장 "외주 없이 HTML·에이전트로 직접" — README 로컬 CLI·에이전트 스킬에서 끌어낸 독자 이득
- 캡션 댓글 질문, 해시태그
- 6장은 README 공식 사례라 (예시) 표기 대신 "공식 README 활용 사례"로 명시
- 상업적 이용: Apache-2.0이므로 일반적으로 상업 이용 가능하나, 배포·특허 등 세부 조건은 LICENSE와 법률 자문 확인 권장(캐러셀에는 Apache-2.0·요금 없음만 명시)
