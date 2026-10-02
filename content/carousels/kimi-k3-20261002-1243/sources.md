# Sources — Kimi K3 (MoonshotAI/Kimi-K3)

## 확인한 사실 (2026-10-02 12:43 KST 슬롯 · 제작 시점)

- GitHub 저장소: https://github.com/MoonshotAI/Kimi-K3
  - 스타 8,885개 → 표시 "별 0.8만 개" / "별 0.8만" (`gh api repos/MoonshotAI/Kimi-K3 --jq .stargazers_count`, 2026-10-02 조회, 내림)
  - README: open-weight, native multimodal agentic model; 2.8T total / 104B activated MoE; 1,048,576 context; native vision; first open 3T-class model
  - 라이선스: Kimi K3 License (README badge + HF LICENSE) — MIT 아님. 슬라이드·캡션은 「키미 K3 라이선스」로 표기, 「완전 오픈소스」 금지
  - Tech Blog 링크(README): https://www.kimi.com/blog/kimi-k3
  - Chat: https://www.kimi.com
  - Hugging Face: https://huggingface.co/moonshotai/Kimi-K3

- 공식 테크 블로그: https://www.kimi.ai/blog/kimi-k3 (동일 내용으로 https://www.kimi.com/blog/kimi-k3 도 안내됨)
  - 2.8T, KDA/AttnRes, native vision, 1M context, first open 3T-class
  - Availability: kimi.ai / Kimi Work / Kimi Code / Kimi API (`kimi-k3`)
  - API: Visit Kimi API Platform, select `kimi-k3` (플랫폼 URL은 사용자 brief의 platform.kimi.ai와 블로그 문구로 안내)
  - 블로그 본문: "understands text, images, and video within the same model"
  - 가중치: README는 "We release the full Kimi K3 model weights under the Kimi K3 License"; 블로그에는 "full model weights will be released by July 27, 2026" 문구도 있음. 오늘(2026-10-02) 기준 GitHub·HF 페이지가 존재하므로 「허깅페이스에 가중치가 공개됨」으로 표기. 세부 조건은 LICENSE 확인 필요.

### 슬라이드·캡션에 쓴 사실
- 별 0.8만 개, 2.8조 파라미터, 활성 1040억(104B), 문맥 100만 토큰
- 글·이미지·영상 한 모델(블로그 본문), 세계 첫 오픈 3조급
- kimi.com 채팅, API 모델명 kimi-k3, HF 가중치
- 키미 K3 라이선스(MIT·완전 오픈소스 아님)

## 불확실·주의
- README 요약 표 Modality는 "Text, Image"만 명시. 블로그·README Key Features는 video도 언급. 슬라이드는 블로그 본문을 따름.
- KDA / AttnRes / Stable LatentMoE / 벤치마크 점수 등은 슬라이드에 넣지 않고 여기만 기록.
- API 단가($0.30/$3.00/$15.00 per MTok 등)는 슬라이드·캡션에 미포함(변동 가능).
- 「연구·배포·확장에 쓸 수 있다」는 README "research, deployment, and further innovation"을 초보 말로 요약한 것. 실제 허용 범위는 키미 K3 라이선스 전문을 따름.

## 내 제안·해석 (공식 아님)
- 2장 공감(유료 API·비용·가중치 접근) — 타겟 페인포인트 해석
- 6장 「초보 추천: 설치 없이 웹」 — 초보 온보딩용 제안
- 캡션 댓글 질문, 해시태그 5개
