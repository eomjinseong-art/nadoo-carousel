# 출처 — 크래프톤 라온-1 미니 정식판 (2026-11-27 12:43 KST 슬롯, 방향 C)

## 공식
1. 허깅페이스 모델 카드 KRAFTON/Raon-1-mini https://huggingface.co/KRAFTON/Raon-1-mini (README 2026-11-27 12:5x KST 확인, 저장소 생성 2026-11-24 13:17 UTC = 11/24 22:17 KST)
   - 30B-A4B MoE, 처음부터(from scratch) 크래프톤 AI가 설계·학습, 아파치 2.0
   - 총 28.8B(288억)·활성 4.3B(43억) 매개변수, 128개 전문가 중 6개+공유 1개
   - 문맥 262,144토큰, 추론 강도 6단계(none·low·medium·high·xhigh·max)
   - 벤치(MoE 비교군 최고 표시): MultiChallenge 64.9(프리뷰 59.0), BrowseComp Plus 55.9, GDPVal 72.3
   - Chatbot Korean(internal, 비공개) 92.7 — 비교 해외 모델 6종(Qwen3.6 35B-A3B 74.5, Gemma 4 26B-A4B 90.6, Flint 66.5, Inkling 2 Mini 81.9, Qwen3.8 27B 90.1, Muse Glimmer 30B 87.0)보다 높음. 단 자사 프리뷰는 92.9
   - NVFP4로 24GB GPU 한 장에서 256K 요청 1건 처리(표 기준)
   - 플레이그라운드: "Chat with it for free, for a limited time" (raon-console.krafton.ai/playground/guest)
   - llama.cpp: krafton-ai/llama.cpp의 raon-1-mini 브랜치 필요("upstream support is pending"), GGUF Q4_K_M 예시
   - 지원 언어 학습: 한국어·영어·일본어·중국어·스페인어·프랑스어·태국어
   - 허깅페이스 좋아요 166(API, 확인 시점) — 슬라이드에는 미사용
2. 라온 공식 문서 https://raon-mini.krafton.ai/en/docs (Getting started·Models·Claude Code·Rate limits)
   - "The model is free for a limited time. Token usage and rate limits still apply."
   - 모델 ID raon-1-mini, 입력은 텍스트만(이미지·파일 이해 못 함)
   - 에이전트 연동 안내: Claude Code, Codex, OpenClaw, Hermes

## 보도(크래프톤 발표 인용)
3. 뉴스핌 2026-11-25 14:01 https://www.newspim.com/news/view/20261125000734
   - 11/25 정식 버전 공개, 멀티챌린지 64.9점으로 프리뷰 대비 5.9점 상승, 해외 동급 모델 6종보다 높음
   - GDPVal 72.3, BrowseComp Plus 55.9 동급 MoE 최고, 추론 5단계+일반 모드
   - 허깅페이스 아파치 2.0, 연구·상업 무료, 플레이그라운드·API 제공
   - 향후 '라온-1'(더 큰 모델)·실시간 양방향 음성 모델 계획

## 불확실한 점·주의
- 모든 성능 수치는 크래프톤 자체 발표·모델 카드 값. 한국어 채팅 평가는 비공개 내부 평가.
- 보도는 300억/40억(반올림), 슬라이드는 모델 카드 정밀값 288억/43억 사용.
- 무료 API·플레이그라운드는 "기간 한정"이며 종료일 미공개 → 날짜 주장 안 함.
- 캡션의 llama-cli 명령은 모델 카드 예시에서 샘플링 옵션을 줄인 것(전체 옵션은 모델 카드).
- 24GB 수치는 NVFP4 가중치 기준(NVFP4는 최신 GPU 전용일 수 있음 — 슬라이드에는 넣지 않음).
- 슬라이드 5장 '긴 회의록도 나눠 넣을 일이 줄어요', 7장 '맞는 사람'은 활용 해석(공식 문구 아님).
- 주제 후보 비교: 코그니션 SWE-2.1(11/24, 개발자용 데빈 전용), 앤트로픽 MCP Skills·Tasks(11/24, 개발자용), Z.ai GLM-5.4(11/23, API 미공개·해외), EBS AI이솦(11/26, 교육 플랫폼), ChatGPT Chat·Work 통합 한도(11/25, 기존 세트 중복) → 국내 독자 관련성·신선도로 라온-1 미니 선택. 직전 방향 C→A라 C 가능(3연속 아님).
