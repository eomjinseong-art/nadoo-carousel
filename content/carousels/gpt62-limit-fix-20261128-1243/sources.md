# 출처 — gpt62-limit-fix-20261128-1243 (확인 2026-11-28 KST, 방향 B)

## 1차 출처
- 오픈AI 티보 소티오(Thibault "Tibo" Sottiaux, Codex·ChatGPT 담당) X 게시물 2026-11-26 (@thsottiaux). X는 박스에서 403으로 직접 열람 불가 → 아래 매체들이 같은 원문을 그대로 인용:
  > "We made a billing mistake at launch of GPT-6.2 that incorrectly discounted GPT-6.2 Astra and Sol usage for most users. We've fixed this now, so the same work will use more of your plan's usage allowance. Comparing to last week, you will reach your limits 40% faster on GPT-6.2 Astra and 25% faster on Sol. You should still see these go further in usage compared to 6 Astra and 6.1 Sol. Other models weren't affected, and we won't charge you for the difference on past usage. As a small token to apologize for the mistake, we'll be adding one banked reset for everyone on Go, Plus, Pro, and Business."
  - 같은 날 후속 게시물: "Banked reset is online."
- 같은 사람 X 게시물 2026-11-24 (ChatGPT Business 팀 대상): "a banked reset and fast mode at no extra charge through Dec 31" — 11/26 정정과 별개 혜택.
- 오픈AI 도움말 "How resets work in Codex": https://help.openai.com/en/articles/20001498-how-resets-work-in-codex
  - 데스크톱 앱 Settings > Usage & billing, 웹 Usage settings, 모바일 앱 불가; CLI /usage → Redeem reset
  - 적립 리셋은 해당 한도 중 하나라도 남은 양이 80% 미만이어야 사용 가능
  - 한도를 영구로 늘리지 않음; Go=월 한도, Plus·Business Standard=5시간·주간, Pro=주간 복원
- 오픈AI "Introducing GPT-6.2 Astra and Sol" (2026-11-17, 출시일 확인): https://openai.com/index/introducing-gpt-6-2-astra-sol/

## 보도(원문 인용 교차 확인)
- 디크립트(Decrypt) 2026-11-26: https://decrypt.co/384053/openai-fixes-chatgpt-billing-error-promises-to-make-it-40-worse
- 더 넥스트 웹(TNW) 2026-11-26: https://thenextweb.com/news/openai-billing-mistake-gpt-6-2-usage-limits (Business Insider 최초 보도 인용, 가격 페이지 변경 없음)
- 더 디코더(The Decoder) 2026-11-27: https://the-decoder.com/
- Sulat 2026-11-27: https://news.sulat.com/2026/11/27/openai-gpt-6-2-billing-fix/ (Business 빠른 모드는 11/24 별도 안내라고 구분)

## 불확실한 점
- 정정 자체는 오픈AI 공식 블로그·도움말 문서가 아니라 오픈AI 임원의 X 게시물이 1차 출처(여러 매체가 동일 원문 인용). 가격 페이지의 메시지 수 추정 범위는 바뀌지 않았다고 보도됨 → 메시지 수 환산은 하지 않음.
- 40%·25%는 "지난주 대비 한도 도달 속도"이며 요금 인상이 아님.
- 비즈니스 팀이 11/24 리셋과 11/26 리셋을 둘 다 받는지는 불명 → 슬라이드에서 리셋 횟수 합산 언급 안 함.
- 리셋 사용 위치(설정 > 사용량 및 결제)는 Codex 도움말 기준; 한국어 메뉴 이름은 화면에 따라 다를 수 있음. 리셋 만료일은 계정 화면 기준(공개 안 됨).
- "반복 업무는 솔·가벼운 모델로"는 나두Ai의 권장 팁(공식 권고 아님).
- 12월 챗GPT·코덱스 공유 한도는 11/07 세트에서 다뤄 이번엔 제외.
