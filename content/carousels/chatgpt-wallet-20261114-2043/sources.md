# 출처 — ChatGPT Wallet (오픈AI, 2026-11-13 발표)

- 공식 발표 (openai.com, "Introducing ChatGPT Wallet", 2026-11-13): https://openai.com/index/introducing-chatgpt-wallet/
  - 에이전트가 실제 카드 정보에 접근하지 않고 결제, 구매마다 보안 확인(Face ID·지문 등) 필요 — 오픈AI는 "이런 방식의 첫 지갑"이라고 표현
  - 아메리칸 익스프레스·마스터카드·비자와 함께 만듦. 처음엔 닷(dots)을 통해 미국 ChatGPT Pro 구독자에게
  - 카드는 한 번 등록, 구매 전 상품·총액·선택 카드 확인 후 승인. 승인마다 기록이 남음
  - 승인 후 결제 네트워크가 실제 카드 정보 대신 쓰는 결제 토큰(카드 번호·보안 코드·유효기간) 발급 → 가게·에이전트에 실제 카드 정보 공유 안 함
  - 기존 카드 혜택(리워드)과 일부 분쟁 보호 유지. 가격·배송·반품·고객 응대는 가게가 계속 담당
  - 앞으로 지출 한도·구매 분류·기간을 정해 미리 승인하는 방식 예정("expect" — 일정 미공개)
  - 판매자용 Commerce Partner Playbook 공개: 상품 정보·가격 최신화(상품 피드), 방화벽/CDN이 서명된 ChatGPT 에이전트 요청(Web Bot Auth)을 막지 않게, 결제·사기 방지 업체와 협의, 플러그인·WebMCP
  - "1.2B people use ChatGPT each week" (주간 12억 명) — 카드에는 쓰지 않음
  - 출시: 11/13부터 닷에서 순차, 미국 ChatGPT Pro·만 18세 이상·미국 발급 대상 카드
- 도움말 (Making purchases with ChatGPT Wallet): https://help.openai.com/en/articles/20001654-making-purchases-with-chatgpt-wallet
  - 순차 적용이라 대상자라도 아직 안 보일 수 있음. 닷 대화에서만 동작(Chat·Work·단독 Codex 스레드에서는 불가), 먼저 닷을 만들어야 함
  - 대상 카드: 미국 발급 American Express·Chase·Mastercard·Visa 신용카드. 체크카드(debit) 불가, 가상카드 등록은 출시 시점 미지원
  - 카드 정보는 채팅이 아니라 보안 입력 창에만 입력. 인증 코드도 채팅·문의 메시지에 쓰지 말 것
  - 모든 가게에서 결제가 되진 않을 수 있음. "결제 준비 완료"는 주문 확정이 아님 → 가게 주문 확인 먼저
  - 정기 결제에 동의하면 가게가 다시 청구할 수 있음 → 해지는 가게에 문의
- 보도(참고): CNBC 2026-11-13 https://www.cnbc.com/2026/11/13/openai-chatgpt-wallet-dot-purchases.html , Reuters/Economic Times 2026-11-13

## 후보 비교 (2026-11-14 20시대 KST 확인)
- Gemini Decisions API·Gemini Decision 1 (구글, 11/11, 입력 100만 토큰당 0.10달러·출력 과금 없음): https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/ — 개발자 전용, 초보 독자 체감 낮음
- Gemini 2.5 Pro/Flash 12/1 자동 전환(3.8 Flash·3.5 Flash-Lite): https://aistudio.google.com/docs/deprecations — API 사용자 한정
- Claude Max→Max/Ultra 이름 변경·Ultra 5시간 한도 폐지 (10월 말~11/3) — 7~14일 창의 끝자락, B 방향
- → 가장 최신(11/13)이고 "에이전트가 결제까지"라는 업계 축 변화인 ChatGPT Wallet 선택 (방향 A). history·upload_log에 Wallet 주제 없음(9/30 dots 일반 비교만 있음).

## 불확실한 점
- 한국 등 미국 밖 출시 일정·요금 추가 여부 미공개 → "한국 출시 일정 미공개"로만 표기
- 이용 요금은 Pro 구독 외 별도 수수료 언급 없음 → 요금 언급 안 함
- 사전 한도 승인 기능 시점 미공개 → "앞으로 예정"으로만
