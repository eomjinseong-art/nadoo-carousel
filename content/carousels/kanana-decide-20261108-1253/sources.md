# 출처

- 카카오 보도자료 (2026-11-06): https://www.kakaocorp.com/page/detail/12193
  - Kanana-2-v-decide 허깅페이스 오픈소스 공개
  - 문장 생성 없이 확률(Noul)·선택(Choice)·점수(Score)로 응답
  - 텍스트+이미지, 고객 문의 분류·도구 선택·상품 이미지 판단 예시(파손 사진+교환 요청)
  - H200 1장 기준 평균 0.04초 이내, GPT-6 Luna 대비 약 43배 (카카오 자체 측정)
  - 자체 평가셋 Kanana Decision Bench 1만 5,909문항에서 비교 대상 중 가장 높은 성능
  - 카나나 오픈 라이선스(Kanana Open License), 연구 목적뿐 아니라 상업적 활용 가능
- 허깅페이스 모델 카드: https://huggingface.co/kakaocorp/kanana-2-v-decide-3b-2611
  - 가중치 공개일 2026/11/06, 모델 ID Kanana-2-v-decide-3b-2611
  - 3.67B (비전 인코더 0.49B, 언어 모델 3.18B)
  - 입력: 텍스트·JSON·채팅, 이미지 최대 10장, 최대 20,480토큰
  - Kanana Decision Bench(텍스트) 72.50, 공개 Decision Index/Vision 평균 61.23
  - 영상 입력 미지원, 문장 생성 없음
  - 라이선스: KananaOpenLicense
- 허깅페이스 컬렉션: https://huggingface.co/collections/kakaocorp/kanana-2-v-decide

# 불확실한 점 / 주의
- 0.04초·43배 수치는 카카오가 H200 GPU 1장에서 GPT-6 Luna와 비교해 발표한 값입니다. 사용 환경에 따라 달라질 수 있습니다.
- 72.50점은 카카오 자체 한국어 평가셋 기준이며, 모델 카드의 비교군(StartLux, Liquid AI d1, Joey 등)과 보도자료의 비교군(Decision-1, Jev, pplx-decider, Solar Decide 등)이 다릅니다. 슬라이드에는 '비교 모델 중 최고'를 자체 평가 문맥으로만 썼습니다.
- 공개 Decision Index 단일은 Joey-1이 더 높은 점수(63.31 vs 61.34)를 보여, '모든 벤치 1위'로 쓰지 않았습니다.
- 허깅페이스 likes는 조회 시점 23개라 카드에 넣지 않았습니다.
- 카카오가 이 모델을 일반 채팅 앱으로 제공하는지는 확인되지 않았습니다. 현재는 가중치를 직접 실행하는 방식입니다.
- 라이선스의 세부 제한 조항은 슬라이드에 요약하지 않았습니다. 상업 이용 전 원문 확인이 필요합니다.
