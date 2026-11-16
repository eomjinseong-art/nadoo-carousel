# llamacpp-v1-20261116-1243 — 출처 (확인 2026-11-16 12:50 KST)

## 공식
- GitHub 릴리스 v1.0.0 (published_at 2026-11-13T10:20:19Z = 2026-11-13 19:20 KST): https://github.com/ggml-org/llama.cpp/releases/tag/v1.0.0
  - deprecated API 제거, Kimi-K3.1-Pro·Ripple·xing4_0 모델 추가, drama-3 TTS, llama-server 보안 강화(SSRF·CORS·DNS rebinding·MCP tool cancellation), /v1/audio/speech 엔드포인트, 새 웹 UI(chat groups·markdown editor), ggml v1.0.0
- Hugging Face 블로그 "llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem" (2026-11-13): https://huggingface.co/blog/ggml-org/llama-cpp-v1
  - "3.5 years since its inception", 이후 API/ABI 비호환은 major 버전 올림, 150+ architecture variants, 배포: Linux·macOS·Windows·Android·iOS pre-release artifacts, Docker, Debian, Homebrew, conda-forge, MacPorts, Winget, XCFramework
  - "Llama desktop apps for MacOS and Windows, shipped with love by the team behind llama.cpp and Hugging Face"
- GitHub API ggml-org/llama.cpp (2026-11-16 12:5x KST): stargazers_count 135,233 → 13.5만(내림), license MIT
- 설치 문서: https://github.com/ggml-org/llama.cpp/blob/master/docs/install.md (winget install llama.cpp / brew install llama.cpp)
- README Quick start: `llama cli -hf ggml-org/Qwen3.5-0.8B-GGUF`
- Llama for Mac README: https://github.com/ggml-org/Llama-macOS (메뉴 막대 앱, brew install --cask llama-app, 100% local, 하드웨어에 맞는 모델 추천·원클릭 설치, MIT, 최신 0.47.0 2026-11-05)
- Llama for Windows README: https://github.com/ggml-org/Llama-Windows (Windows 11 트레이 앱, .msixbundle, One-click models, 텔레메트리 없음, 최신 v0.14.1 2026-10-30)

## 보조(뉴스)
- Celedog AI Daily 2026-11-14: https://celedog.io/blog/ai-daily-20261114 (v1.0.0 발표 보도)

## 불확실·주의
- "월 0원"은 소프트웨어·앱 무료(MIT) 의미. 전기료·PC 비용은 별개.
- "첫 안정판" 표현은 쓰지 않고 "1.0 정식판"으로만 표기(이전 릴리스는 b#### 빌드 태그).
- "대화가 PC 안에만"은 로컬 추론 기준. 모델 다운로드·업데이트 확인 등 외부 통신은 있음(Windows README 명시).
- 성능은 PC 사양·모델 크기에 따라 다름. 벤치 수치는 사용하지 않음.
- 후보로 함께 검토: LongCat-2.5 가중치 공개(11/15, 자체 호스팅 예시가 화웨이 어센드 194개 클러스터—초보 독자 부적합), Gemini Decisions API(11/11), Businesses in ChatGPT(11/10, 미국 한정).
