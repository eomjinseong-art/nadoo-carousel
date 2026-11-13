# 출처 — 제미나이 4 하이드로젠·요금제별 변화 (2026-11-13 12:43 슬롯, 방향 B)

확인 시각: 2026-11-13 12:50~13:00 KST

## 공식 출처
1. Google 블로그 "Introducing Gemini 4 Hydrogen" (2026-11-12, Koray Kavukcuoglu)
   https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
   - 모든 등급의 AI Studio·Gemini API, Gemini for business, Gemini 앱, Google 검색에 출시. Antigravity는 유료 AI Pro·Ultra.
   - API 단가: 100만 토큰 문맥 전체 동일, 입력 100만 토큰당 $1.50·출력 $7.50
   - 3.8 Flash 대비 기본(high) 설정에서 작업 2.5배 빠름, Terminal-Bench 4.1 57% vs 18.2%, 지어낸 주장 5배 이상 감소
   - Artificial Analysis 지능 지수 기본 설정 51 (Argon 50), xhigh 54
   - 무료 사용자: 자동 모델 선택으로 프롬프트에 맞을 때 Hydrogen 사용
   - Gemini in Google Sheets: AI Pro·Ultra부터
2. Gemini Apps 도움말 "About Gemini models"
   https://support.google.com/gemini/answer/18648722
   - 구독 없음: 자동 또는 Flash-Lite. 자동 선택 켜면 대부분 Flash-Lite, 추론이 필요한 프롬프트는 Hydrogen 가능. 끄면 모두 Flash-Lite.
   - AI Plus: Flash-Lite·Hydrogen·Pro(도움말 표 기준), AI Pro: Flash-Lite·Hydrogen·Pro·Argon, Ultra: +Carbon
3. Gemini 구독 페이지(대한민국) https://gemini.google/kr/subscriptions/?hl=ko
   - 무료 ₩0, Google AI Plus 월 ₩7,500 (무료 대비 사용량 2배, Hydrogen 액세스), AI Pro: Argon·Pro 모델·Hydrogen, 무료 대비 4배
   - AI Plus 카드에 Pro 모델 항목 없음 (AI Pro 카드에만 'Pro 모델에 대한 액세스')
4. Gemini API 가격 페이지 https://aistudio.google.com/docs/pricing
   - gemini-4-hydrogen: 무료 등급 입력·출력 무료(제품 개선에 사용 Yes), 유료 입력 $1.50·출력 $7.50, 캐시 $0.075
   - gemini-3.8-flash: 2026-12-31까지 입력 $0.75·출력 $3.75, 2027-01-01부터 $1.50·$7.50
5. Google 안내 메일(9to5Google 2026-10-14 원문 인용) https://9to5google.com/2026/10/14/gemini-ai-plus-loses-pro-november/
   - "Starting on 13 November 2026, the ability to select Pro models in both the Gemini app and AI Mode in Google Search will only be available to Google AI Pro subscribers and above."
   - 참고 보도: Notebookcheck 2026-11-09 https://www.notebookcheck.net/Google-AI-Plus-loses-Gemini-Pro-models-on-November-13.1445681.0.html

## 불확실한 점
- 도움말 "About Gemini models" 표에는 아직 AI Plus에 Pro가 남아 있음(갱신 전으로 보임). 구글 안내 메일과 한국 구독 페이지(AI Plus 카드에 Pro 없음)를 근거로 "11월 13일부터 Pro 선택은 AI Pro 이상"으로 썼다.
- 이 변화(AI Plus에서 Pro 제외)는 10/8 세트(gemini-free-flash-lite-20261008-2043)에서 예고로 다뤘음. 이번 세트는 11/12 하이드로젠 출시 + 11/13 시행을 요금제별로 새로 정리한 것.
- AI Pro 한국 원화 가격은 구독 페이지 본문에서 확인되지 않아 쓰지 않음.
- 성능 수치는 구글 발표 기준. 한국 내 순차 적용 시점은 계정마다 다를 수 있음.
