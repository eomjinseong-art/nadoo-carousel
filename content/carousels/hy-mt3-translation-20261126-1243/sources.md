# Hy-MT3 (텐센트 훈위안 번역 모델 3세대) — 2026-11-26 12:43
## 공식 출처
- https://huggingface.co/tencent/Hy-MT3-1.8B — 모델 카드(README): 3세대·1.8B/7B/30B-A3B(MoE), 38→102개 언어(신규 64), Hy-MT2 대비 실제 시나리오 데이터에서 오역 샘플 비율 43%↓·누락/추가 74%↓·지시 따르기 오류 40%↓, 30B-A3B(활성 3B) 비사고 모드 평가 모델 중 종합 1위 주장, 1.8B가 iFlytek·Microsoft Translator·Qwen-MT-Flash 등 상용 API보다 일반 번역 우수 주장, 게임 현지화·OCR 이미지 번역 강화, 지시 유형(용어·스타일·개인화·구분자·구조화 데이터·배경 정보), max_context 8192, 기본 system prompt 없음, News "2026.11.24 open-sourced on HuggingFace and ModelScope"
- https://huggingface.co/tencent/Hy-MT3-1.8B/blob/main/LICENSE.txt — "licensed under Apache-2.0 … does not impose any additional restrictions"(지역 제한 문구 없음 확인)
- https://huggingface.co/api/models/tencent/Hy-MT3-1.8B — license:apache-2.0, 언어 태그에 ko 포함, 저장소 생성 2026-11-17(비공개 준비 추정), 최종 수정 2026-11-24
- https://huggingface.co/tencent/Hy-MT3-1.8B-GGUF — llama.cpp 사용 예(git clone·cmake 빌드·llama-completion 예시), 파일 Hy-MT3-1.8B-Q4_K_M.gguf 1.35GB / Q8_0 1.91GB (HF API tree, 10진 GB)
- https://github.com/Tencent-Hunyuan/Hy-MT3 — 공식 깃허브(README 동일, TransRubric·train 폴더), 2026-11-26 확인 시 별 77개(적어서 슬라이드에 미기재)
- https://arxiv.org/abs/2611.27673 — Hy-MT3 기술 보고서(카드에서 링크)

## 후보로 훑은 주제 (미선택)
- Gemini API 파일 슬라이싱(구글, 11/23) — 개발자 전용 성격이 강함
- ERNIE 5.5 Flash Preview 오픈 가중치(바이두, 11/24~25 보도) — 280B 대형이라 일반 독자 실사용 거리 멂, 1차 출처 미확인
- ChatGPT Chat·Work 사용 한도 합산(11/26 보도) — 11/7 'ChatGPT·Codex 공유 사용 한도'와 겹칠 위험
- OpenAI·Cisco Shirudo(11/23) — 리눅스 보안 런타임, 독자층과 거리

## 불확실·주의
- 모든 성능 수치는 텐센트 자체 평가(자체 벤치·TransRubric 채점). 슬라이드에 "자체 비교/발표"로 표기.
- "43%"는 원문상 '오역이 포함된 샘플의 비율' 감소 → "오역 섞인 번역 43% 감소"로 의역.
- 공개일 11/24는 README News 표기(시간대 미표기, 중국 기준 추정).
- 휴대폰 온디바이스 실행은 2차 요약(communeify)에만 있어 쓰지 않음.
- 캡션 명령어는 공식 GGUF 카드 예시에서 대상 언어(Chinese→Korean)와 파일명만 바꿈. 한국어 출력 품질은 직접 테스트하지 않음.
- 8천 토큰 = max_context 8192.
