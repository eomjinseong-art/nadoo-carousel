# Sources — 오프라인 로컬 AI 5가지 (Jan·Ollama·LocalAI·llamafile·llama.cpp)

## 확인한 사실 (2026-09-29 14:25 KST 확인, 공식 저장소 기준)

별 개수는 GitHub API(get_repository) 값, 소수점 첫째 자리에서 버림.

- Jan — https://github.com/janhq/jan · https://jan.ai/
  - 설명: "Jan is an open source alternative to ChatGPT that runs 100% offline on your computer."
  - README: "Download and run LLMs with full control and privacy", "Privacy First: Everything runs locally when you want it to"
  - 윈도우·맥·리눅스 설치 파일 제공, 내장 엔진 llama.cpp (README 빌드 안내, 저장소 topic "llamacpp")
  - 권장 사양: macOS 13.6+ — 3B 모델 8GB RAM, 7B 16GB, 13B 32GB
  - 별 44,698개 → "4.4만 개"
- Ollama — https://github.com/ollama/ollama · https://ollama.com
  - README: `ollama run gemma4` 로 모델 실행·채팅, macOS·Windows·Linux 설치
  - README "Community Integrations" 에 연동 앱·라이브러리 다수 나열
  - 별 181,888개 → "18.1만 개"
- LocalAI — https://github.com/mudler/LocalAI · https://localai.io
  - 설명: "Run any model ... on any hardware. No GPU required."
  - README: "Drop-in API compatibility: OpenAI, Anthropic, and ElevenLabs APIs", "Privacy-first: your data never leaves your infrastructure"
  - 별 49,315개 → "4.9만 개"
- llamafile — https://github.com/mozilla-ai/llamafile · https://docs.mozilla.ai/llamafile
  - README: "lets you distribute and run LLMs with a single file", "single-file executable ... runs locally on most operating systems and CPU architectures, with no installation", llama.cpp 기반
  - 주의: 윈도우는 4GB 넘는 실행 파일 불가(외부 모델 파일 방식 사용), 윈도우는 .exe로 이름 변경 필요
  - 별 26,086개 → "2.6만 개"
- llama.cpp — https://github.com/ggml-org/llama.cpp
  - README: "enable LLM inference with minimal setup and state-of-the-art performance on a wide range of hardware", x86 CPU(AVX 등)·Apple silicon 지원
  - Jan(내장 엔진), llamafile(llama.cpp 기반), LocalAI(백엔드 중 하나)가 사용
  - 별 129,814개 → "12.9만 개"

## 내 제안·해석 (공식 아님)
- 2장 공감 문구(구독료 부담, 회사 자료 찜찜함, 인터넷 끊기면 못 씀) — 일반적 인식
- "초보자는 Jan", "개발자는 LocalAI" 등 대상 구분, 8장 추천 순서 — 편집 제안
- "무료" — 5개 모두 오픈소스·무료 다운로드 기준 (Jan·llamafile 라이선스는 GitHub에서 'Other'로 표시)
- "인터넷 없이" — 모델을 처음 내려받을 때는 인터넷이 필요함
- 8장 "속도는 PC 사양에 따라 다르다" — Jan 권장 사양·llamafile 안내에서 끌어낸 일반적 주의
- 9장 "오늘 밤 Jan 켜고 와이파이 끄고 질문" — 실천 제안
- 캡션 댓글 질문, 해시태그
