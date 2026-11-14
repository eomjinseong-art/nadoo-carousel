# 출처 — Claude Meetings (앤트로픽, 베타)

- 공식 발표 (claude.com, "Introducing Claude Meetings, now in beta"): https://claude.com/resources/articles/claude-meetings
  - 페이지 메타 datePublished 2026-11-12 (본문 내 Nov 10, 2026 표기도 있음). Axios 기사(2026-11-10, 화요일 발표)와 함께 11/10 발표로 표기
  - 화상회의에 보이는 참석자로 들어와 대화를 따라가며 회의 중 작업 시작, 질문은 말로/채팅으로, 기본 답변은 글
  - 연결 도구는 허락받고 사용, 회의 중 문서·화이트보드 등 함께 만들기, 노트·할 일(action items) 작성
  - Team·Enterprise 요금제에 베타 순차 적용, 다른 화상회의 플랫폼은 곧
  - 예: 고객 행사 기획 회의 — "Claude, start a doc for this plan", 작년 행사 비용 질문 → 허락 후 조회해 채팅에 게시·비교, 일정은 화이트보드로
  - 회의 후 노트·할 일·계획·보드가 claude.ai 회의 페이지에, 지난 회의를 나중에 물어보기, 캘린더에서 다음 회의에 추가
  - 파트너 Gong·Attention·Granola·Fireflies.ai·Otter·Plaud와 녹취록 보내기 "곧"
  - 보안: 외부 사람이 초대되면 기본은 불참, 중간에 들어오면 나감(관리자가 허용 가능). 오디오 대신 녹취록·요약·화면 설명 저장. 참석자 모두 기록 동의 확인 권고
  - Team 기본 켜짐(관리자가 끌 수 있음), Enterprise는 관리자가 켬. 베타 중 ZDR·HIPAA-ready·CMEK 조직은 불가
  - 베타 동안 노트·녹취록 무료(Team·Enterprise), 통화 중 답변도 무료(연결 도구 사용 답변은 사용량 차감), 회의 중 만든 문서·보드 등은 2027-02-10까지 무료
- 도움말 (Use Claude Meetings): https://support.claude.com/en/articles/18325154-use-claude-meetings
  - 사용법: Claude의 Meetings → 구글 캘린더 연결(조직 소유자가 먼저 허용) → 회의 선택 → "Add Claude"
  - 자동 참석: Settings > Capabilities > Meetings > Auto-join (모든 회의 / 1:1 제외)
  - "Claude"라고 부르고 질문 또는 Meet 채팅 입력, 최대 8시간 머무름, 회의 후 사내 초대자에게 요약 메일(recap email)
- 보도(참고): https://www.axios.com/2026/11/10/anthropic-claude-meetings-knowledge-work — 앤트로픽 내부 약 2개월 시험, 거의 모든 사내 회의 참석

## 후보 비교 (2026-11-14 확인)
- Inkling 2 Small 가중치 공개 (Thinking Machines, 11/5 발표·11/12 허깅페이스 아파치 2.0): https://huggingface.co/thinkingmachines/Inkling-2-Small — 오픈웨이트(방향 C), 직전 세트가 C라 이번엔 보류
- OpenAI 인도 현지 처리(11/12, GPT-6 Luna API) — 국내 독자 체감 낮음
- OpenAI Daybreak Red Team·Defense Factory(11/12) — 보안팀 대상 얼리 액세스
- → 직장인 회의 업무에 바로 닿는 Claude Meetings 선택 (방향 A). 11/12 Claude Sheets·Whiteboards와 같은 날 발표지만 별개 제품, 그 세트에서 다루지 않음.

## 불확실한 점
- 한국어 회의 인식 품질·국내 출시 일정은 공식 자료에 없음 → 언급 안 함(주의 카드에는 "한국어 품질 미공개"로 짧게).
- Pro·Max 개인 요금제 지원 여부/일정 미공개.
