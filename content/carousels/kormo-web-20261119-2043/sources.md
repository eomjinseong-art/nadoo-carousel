# Sources — kormo-web-20261119-2043 (확인: 2026-11-19 20:50~21:10 KST)

## 공식
- KORMo-Web-4B 모델 카드 (KAIST MLP Lab): https://huggingface.co/KORMo-VL/KORMo-Web-4B
  - 4B 시각 기반 웹 에이전트, 스크린샷만으로 동작, 한/영 지시
  - Online-Mind2Web 612개 실제 웹 작업(영어 300·한국어 312), 같은 LLM 심판(GPT-6)
  - 4B: EN 42.3 / KO 42.3, 9B: EN 51.0 / KO 48.1 (성공률 %, 실패·빈 실행도 분모 포함)
  - 비교 공개 모델 대비 +9.6%p(EN) / +22.1%p(KO)
  - 1,000만 건 이상 한영 웹 사전학습 샘플, 10만 건 이상 웹 사용 궤적
  - 여러 사이트·탭 작업, 생각 후 행동, 다음 화면으로 결과 확인
  - 맥 메모리: 4B 4비트 2.8GB 가중치/약 3.8GB 사용/16GB+ 권장, 4B bf16 24GB+, 9B 48GB+
  - 공식 예시 작업: "다나와에서 50만 원 이하, 10인치 이상 태블릿 3개를 찾아서 가격을 알려줘"
  - 레퍼런스 하네스(agent_playwright.py)는 upload 동작을 실행하지 않음
- KORMo-Web-11B 모델 카드: https://huggingface.co/KORMo-VL/KORMo-Web-11B
  - 자체 KORMo-10B(처음부터 학습) 기반, KO 33.7 / EN 31.3, GPT-6-luna(유료) EN 63.0 / KO 65.7
- 컬렉션: https://huggingface.co/collections/KORMo-VL/kormo-web
- 크롬 확장: https://github.com/MLP-Lab/KORMo-Web-Extension (README 한국어; 크롬 116+, 애플 실리콘 맥(M5 권장) 또는 GPU 서버, 맥은 느린 편→GPU 권장, 디스코드 릴레이 선택)
- HF API: 4B/9B/11B 생성 2026-11-14 UTC(=11/14 KST), 라이선스 apache-2.0, 4B-mlx-4bit 2026-11-17. 깃허브 확장 저장소 생성 2026-11-17 02:08 UTC(=11:08 KST).
- 공개 소개(연구실 측 글 인용 큐레이션, 11/18): https://datanexus-kr.github.io/curations/2026-11/2026-11-18-kormo-web-local-gui-agent/

## 불확실/메모
- "11월 중순 공개"로 표기: HF 등록 11/14, 확장·외부 소개 11/17~18. 정확한 공식 발표일 미확인.
- 성공률은 연구실 자체 평가(LLM 심판) 수치.
- KORMo 읽는 법은 공식 표기 없음 → 쇼츠 음성은 '코르모 웹'으로 처리(귀로 미확인).
- 깃허브 확장 저장소 별 4개(신규) — 별 수는 슬라이드에 쓰지 않음. 라이선스 표기는 모델 기준(Apache 2.0).
- 다른 후보(검토 후 제외): Tencent Hy4 flash(11/18 오픈 웨이트, 일반 사용자 실행 어려움·Tencent Hy License), Rumble-2-Flash(11/18, 한국어 정확도 미공개), Gemini Tasks 무료 확대(11/17, 제미나이 연속·A축), alibaba/open-code-review(신규성 약함).
