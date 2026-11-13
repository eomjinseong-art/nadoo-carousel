# 출처 — Nod (n8n Labs 오픈소스 개인 에이전트, 저장소 n8n-io/nod)

- 공식 발표 (n8n 블로그, Ophir Prusak, 2026-11-10): https://blog.n8n.io/meet-nod/
  - n8n Labs(n8n 안의 새 실험 팀)가 연구용 미리보기(research preview)로 공개. n8n과 별개 앱, n8n 계정 불필요
  - 자기 컴퓨터(로컬 샌드박스 가상 머신)와 브라우저를 가짐 → Gmail·Calendar·Drive·Slack 같은 연결 앱과 연동 없는 웹사이트에서 일을 끝냄
  - 예시 작업: 구독 해지·잔류 제안 거절·환불 요청, 가격 감시, 호텔 찾아 "go" 하면 예약, 매달 공급사 포털 로그인→청구서 내려받아 회계사용 정리, 내보내기 없는 대시보드 숫자→주간 보고
  - 앱·텔레그램·왓츠앱 한 대화로 지시, 여러 작업 병렬, 아침 브리핑·가격 확인 같은 반복 작업은 일정 실행
  - 기억: LongMemEval 93.2%. Gmail 연결 시 문체 학습, 기억은 보고·고치고·지울 수 있음
  - 신뢰: 안 시킨 발송·결제·게시·삭제 전 별도 확인(이 확인도 모델이라 실수 가능 → 지시가 안 덮는 행동은 물어봄). 웹페이지·메일은 명령 불가. 로그인·카드는 기기에서 암호화, 모델이 못 읽는 양식으로 입력. 모든 로그인·카드 사용·앱 행동·작업 비용 기록
  - 비용: 앱은 오픈소스·무료, AI 모델 사용료는 사용자 부담(API 키 또는 ChatGPT 요금제, 로컬 오픈소스 모델도 가능). 작업마다 비용·영수증, 월 지출 한도, 작업이 5달러를 넘으면 확인(금액 변경 가능)
  - 한계: 노트북이 잠들면 멈춤(상시 켜 둔 Mac mini·자체 서버 권장, 호스팅판 로드맵), 설치당 소유자 1명, 전화 불가
  - 라이선스 Apache 2.0, Mac·Windows 다운로드
- 공식 사이트: https://nod.n8n.io/
  - macOS 14+ · Windows 11 preview · Linux x64 preview · Apache 2.0 · free · ChatGPT Plus/Pro 또는 AI 키
  - 설치 후 AI 제공자 추가, 앱 연결(Gmail·Slack·Notion·Drive·Calendar), 웹 로그인 저장 → "About ten minutes"
  - 통화 전 한 장 브리핑, 놓친 질문 답장 초안(승인 후 전송), 가격 페이지 감시(바뀔 때만 알림)
  - 자체 테스트: 226개 작업×3회 98% 완료, 678회 중 허락 없는 행동 0 (2026년 10월, GPT-6.1 Sol, 시험용 계정·사이트, 보장 아님) → 슬라이드에는 안 씀(캡션에 "자체 테스트 기준"으로만)
- GitHub: https://github.com/n8n-io/nod — GitHub API 2026-11-13 20:50 KST 확인: 별 929개, Apache-2.0, 릴리스 nod-v0.6.0(2026-11-09 17:20 UTC)~nod-v0.7.3(2026-11-12 18:30 UTC), README 배지 "research preview"
- 문서: https://nod.n8n.io/docs/get-started/what-is-nod/ — "Early preview. Expect rough edges and breaking changes."
- 주간 급상승: https://upstar.dev/t/ai-agents (11/7~11/13 AI 에이전트 주간 순위 2위, +914) — 참고용 제3자

## 후보 비교 (2026-11-13 확인)
- Gemini Decisions API·Gemini Decision 1 (구글, 11/11): https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/ — 개발자 전용 분류 API, 11/8 Kanana decide(의사결정 모델)와 축이 겹침
- OpenAI Daybreak Red Team·Defense Factory (11/12): https://www.theregister.com/security/2026/11/12/openai-launches-security-products-tells-orgs-theyre-doomed-if-they-dont-use-them/5309500 — 보안팀 대상 얼리 액세스, 초보 독자 체감 낮음
- DIYgod/pinky (11/6 생성, 별 2,058, Apache-2.0): https://github.com/DIYgod/pinky — AI가 폰을 조작, 설치가 Xcode 등 개발자 단계라 초보 부담 큼
- ERNIE 5.5 Flash Preview (바이두, 11/11): 가중치 "곧" 공개, 국내 접점 약함
- → 1인 사업자·프리랜서 잡무(청구서·해지·통화 준비)에 바로 닿는 Nod 선택 (방향 C). 11/11 agent-desktop(개발자용 CLI)과는 다른, 일반인용 데스크톱 앱 비서.

## 불확실한 점
- 한국어 사이트·한국어 지시 품질은 발표에 없음 → 언급 안 함.
- "약 10분" 설정은 공식 사이트 FAQ 기준.
- 윈도우 11·리눅스는 preview 단계.
- 별 수는 빠르게 변함(11/13 기준 929 → 슬라이드 "별 900개+").
