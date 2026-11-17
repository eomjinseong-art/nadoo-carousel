# 출처 — deeptutor-20261117-2043 (확인 2026-11-17 KST)

## 공식
- GitHub 저장소 README: https://github.com/HKUDS/DeepTutor
  - "DeepTutor: Lifelong Personalized Tutoring", Apache-2.0
  - Key Features: Chat·Quiz·Research·Mastery Path·Reading 등, 지식 베이스(LlamaIndex 등) + source-linked citations
  - Learning: Book(퀴즈·플래시카드 블록), Mastery Path(목표를 주제로 쪼개 안내), Immersive Reading(문서 옆 대화), Practice(오답·다음 복습일)
  - Anki 내보내기(Export flashcards (Anki)), Video Lesson(자막, 선택 시 Microsoft Edge 내레이션)
  - Desktop — macOS and Windows (Preview), Windows 빌드는 unsigned → SmartScreen 경고 가능
  - 시작 후 Settings → Providers / Language models에서 모델 연결; v1.0.3에서 LM Studio·llama.cpp 지원
  - PyPI 설치: Python 3.11–3.14, Node.js 20.9+, `pip install -U "deeptutor[full]"`, `deeptutor init`, `deeptutor start`
- 릴리스 v1.7.2 (2026-11-06 08:42 UTC = 11/6 17:42 KST): https://github.com/HKUDS/DeepTutor/releases/tag/v1.7.2
  - Apple Silicon·Intel DMG, Windows 설치 파일·포터블 ZIP 모두 제공
  - "Korean is available as a partial interface translation, with English fallback"
  - 선택 텍스트 Read aloud
- 릴리스 v1.7.3 (2026-11-15 18:18 UTC = 11/16 03:18 KST, 노트상 Release Date 2026.11.16): https://github.com/HKUDS/DeepTutor/releases/tag/v1.7.3
- v1.7.0 (10/28) 영상 강의, v1.7.1 (11/1) Anki·캘린더 내보내기 (README 릴리스 목록)
- GitHub API (2026-11-17 확인): stargazers_count 59,943 → "5.9만"(내림), license Apache-2.0, 생성 2025-12-28
- GitHub org HKUDS: "Data Intelligence Lab@HKU" (홍콩대 데이터 인텔리전스 연구실)

## 보조
- AgentScout 트렌딩(2026-11-15): https://agentscouthq.com/best/trending-open-source-ai-agents.html — DeepTutor 10/23~30 +9,056 별, v1.7.2 한국어 화면 미리보기 언급 (슬라이드 미사용)

## 불확실한 점
- 한국어 화면은 "부분 번역" — 메뉴 일부가 영어로 보일 수 있음(캡션에 명시)
- AI 사용료는 연결한 모델 업체 요금에 따름 — 앱 자체 요금 없음(오픈소스), 무료 모델 여부는 사용자가 고르는 업체에 달림
- 영상 강의·책 생성 품질은 연결한 모델에 따라 다름

## 후보 스캔(선택 안 함)
- 텐센트 Hy4 flash(11/16, 입력 $0.07·출력 $0.281, WorkBuddy 11/30까지 무료·TokenHub 50%) — 전날 20:43 Qwen4-Max와 같은 '중국 모델 가격' 축이라 제외
- OpenAI ChatGPT for Healthcare 컴퓨터 유즈 에이전트(11/16) — 의료 기관용, 독자 체감 낮음
- google-research/paper-orchestra(논문 작성 멀티 에이전트, 별 2천) — 연구자 전용
- Orca(코딩 에이전트 병렬 데스크톱) — 개발자 전용
