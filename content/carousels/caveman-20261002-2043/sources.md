# Sources — Caveman (JuliusBrussee/caveman)

## 확인한 사실 (2026-10-02 20:43 KST 슬롯 · 제작 시점)

- GitHub 저장소: https://github.com/JuliusBrussee/caveman
  - 스타 108,842개 → 표시 "별 10.8만 개" / "별 10.8만" (`gh api repos/JuliusBrussee/caveman --jq .stargazers_count`, 2026-10-02 조회, 내림)
  - 라이선스: Apache-2.0
  - 홈페이지/문서: https://docs.caveman.so/docs/quickstart
  - 설명(저장소): "Viral skill + proxy for coding agents that cuts 65% of tokens by talking like a caveman."
  - README: skill(출력 축소) + proxy(입력/읽기 축소) + middleware. 스킬은 `npx skills add JuliusBrussee/caveman -g`, 계정·API 키 불필요.
  - INSTALL.md: Claude Code, Cursor, Codex, Gemini, Copilot 등 다수 에이전트 표 — README badge "works with 30+ agents"와 일치해 「30+ 에이전트」로 표기.
  - See-it 예시: Normal agent 69 tokens → Caveman agent 19 tokens, 같은 useMemo 처방. 코드·명령·경로·에러는 caveman 대상 아님.
  - Adobe Research CAVEWOMAN (arXiv 2606.24083): output-side caveman style cuts realized cost **1.4 to 2.4×**, up to **3×**.
  - JetBrains (2026-07 블로그, 86 coding tasks, skill only): **8.5% fewer output tokens**, *"costs you nothing measurable in quality"* / 품질 변화 감지 없음(sign test p=0.82). 블로그 제목에는 "Saves 65% of Tokens"가 있으나, 코딩 에이전트 스킬만의 실측치는 8.5%. 슬라이드에는 품질 문구만 사용.

### 슬라이드·캡션에 쓴 사실
- 별 10.8만, Apache-2.0 무료, 한 줄 설치(npx skills add), 30+ 에이전트, 계정·API 키 불필요
- 69→19 토큰 예시(README), 코드·명령·경로·에러는 유지
- Adobe 비용 1.4~2.4배(최대 3배), JetBrains 품질 저하 없음

## 불확실·주의
- 저장소 설명·JetBrains 블로그 제목의 「65%」는 코딩 에이전트 스킬 단독 실측(8.5%)과 다름. 슬라이드에는 65%를 넣지 않음. 캡션에도 65% 미포함.
- proxy·middleware의 입력 토큰 절감률(벤치마크 33.2% 등)은 슬라이드에 넣지 않음(초보 메시지 단순화).
- 「오늘 코딩 AI에 Caveman 켜 보기」는 CTA 제안(공식 아님).

## 내 제안·해석 (공식 아님)
- 2장 공감(장황한 설명 → 요금) — 타겟 페인포인트 해석
- 캡션 댓글 질문(Claude vs Cursor), 해시태그 5개
