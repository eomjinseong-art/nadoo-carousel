# qwen4-max-price-20261116-2043 — 출처 (확인 2026-11-16 20:50 KST)

## 공식
- 알리바바 클라우드 블로그 "Alibaba Unveils Qwen4-Max" (2026-11-16, 항저우): https://www.alibabacloud.com/blog/alibaba-unveils-qwen4-max-new-ai-teammate-for-work-creativity-and-discovery_603783
  - Qwen 패밀리 최상위 모델, 총 2.4T 파라미터(토큰당 71B 활성), 네이티브 비전, 100만 토큰 문맥
  - Work360(알리바바 자체 벤치, 721개 분야): Qwen3.8-Max 대비 High effort에서 토큰 35% 적게, 작업당 평균 비용 약 60% 감소
  - Code Arena 6위
  - QwenCloud Token Plan·API, QwenWork·QwenStudio에서 사용. 암묵 캐시 적중 입력 $0.075/1M
  - Qwen4 시리즈 소형 오픈 가중치 모델 "곧" 공개(날짜 미정 → 슬라이드에서 제외)
- Alibaba Cloud Model Studio 요금 문서 (Last Updated Nov 16, 2026): https://www.alibabacloud.com/help/en/model-studio/model-pricing
  - 싱가포르: qwen4-max 입력 $1.5·출력 $4.5 (100만 토큰당), 무료 한도 100만 토큰 / qwen3.8-max $2·$6 → 각 25% 인하
  - 무료 한도는 싱가포르에서만, "Model Studio 활성화일·모델 출시일·신청 승인일 중 가장 늦은 날부터 90일"
  - 베이징·글로벌(프랑크푸르트·홍콩·도쿄·버지니아): $1.413·$4.24 (qwen3.8-max $1.65·$4.951)
  - 캐시: 쓰기 5분 $1.875, 1시간 $3, 읽기 $0.075 (싱가포르)
- qwen4-max-preview 문서: https://help.aliyun.com/en/model-studio/qwen4-max-preview
  - 미리보기 2026-11-11 10:00 ~ 11-25 24:00 (UTC+8), 종료 후 모델 폐기. Token Plan 전용. 정식 Qwen4-Max 사용 권장
- 구글 블로그 Gemini 4 Hydrogen (2026-11-12): https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/ — 입력 $1.50·출력 $7.50 (비교용)

## 보조
- The Model Gap 11월 출시 목록 (2026-11-16 qwen4-max 일반 출시 기록)
- apidog 블로그 "How to Use Qwen4-Max for Free" — 무료 한도 활성화에 결제 정보 등록 필요하다고 함(공식 문서로 미확인 → 슬라이드·캡션에서 제외)

## 불확실·주의
- "60%↓"는 알리바바 자체 벤치(Work360) 평균. 슬라이드 1·4·캡션에 "업체 측정/자체 평가" 명시. 단가 25%×토큰 35% 단순 곱(약 51%)과 다르며, 원문 수치 그대로 사용.
- 큐웬 스튜디오·큐웬 워크의 Qwen4-Max 무료 사용 한도는 미공개.
- 한국 원화 환산은 하지 않음(환율 변동).
- 다른 후보 검토: 텐센트 Hy4 flash(11/16, 초저가·WorkBuddy 11/30까지 무료 — 공식 페이지 본문 fetch 실패), 딥시크 앱 기능 API 공개(11/13, 검색 1,000회 0.75달러), Claude Max/Ultra 이름 변경(11/1, 지난 주제와 가까움).
