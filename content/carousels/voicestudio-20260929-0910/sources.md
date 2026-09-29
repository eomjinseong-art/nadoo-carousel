# Sources — VoiceStudio (debpalash/VoiceStudio)

## 확인한 사실 (2026-09-29 09:10 KST 확인)

- GitHub 저장소: https://github.com/debpalash/VoiceStudio
  - 설명: "open-source, fully-local ElevenLabs alternative — voice cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646 languages."
  - 스타 43,995개(≈4.4만), 포크 5,092개 (저장소 페이지 기준, 확인 시각 09:10 KST)
  - 라이선스 AGPL-3.0. "Models have their own licenses; review them before commercial use. Clone voices only with permission."
  - "Local workflows run on your hardware. Remote services are optional; usage analytics requires consent."
  - 사용법: Voice cloning 열기 → 목소리 선택 또는 깨끗한 참고 녹음 추가 → 텍스트 입력 → 생성. 필요 시 모델 설치 안내.
  - 기본 음성 엔진: VoiceStudio (k2-fsa/OmniVoice 기반)
- GitHub Trending(일간): https://github.com/trending?since=daily — 09:10 KST 기준 1위, 오늘 3,221 스타
- 최신 릴리스 v0.5.6: https://github.com/debpalash/VoiceStudio/releases/latest
  - 2026-09-23 07:39 UTC(= 16:39 KST) 게시
  - 설치 파일: 윈도우 x64 .exe, 맥 arm64/x64 .dmg, 리눅스 AppImage/.deb
- 기능 목록: https://github.com/debpalash/VoiceStudio/blob/main/docs/feature-catalog.md
  - Voice Cloning, Voice Design, Video Dubbing, Dictation Widget, 받아쓰기(WhisperX 기본), Batch Queue, MCP Server, Local-first 등
- 맥 설치 문서: https://github.com/debpalash/VoiceStudio/blob/main/docs/install/macos.md — 인텔 맥은 백엔드 실행 불가(미지원)
- 성능/윈도우 문서: https://github.com/debpalash/VoiceStudio/blob/main/docs/performance.md , docs/install/windows.md — 윈도우 GPU 가속은 NVIDIA(CUDA)만, 그 외는 CPU로 동작(느림)
- 한국어 지원: OmniVoice 언어 목록 https://github.com/k2-fsa/OmniVoice/blob/main/docs/languages.md — 311번 Korean(ko)

### 슬라이드·캡션에 쓴 사실
- 별 4.4만 개, 646개 언어·한국어 지원, 윈도우·맥·리눅스 설치 파일, 무료·코드 공개(AGPL-3.0)
- 목소리 복제·영상 더빙·받아쓰기·오디오북, 내 PC에서 실행
- 개발자가 'ElevenLabs 대안'이라고 소개(저장소 설명 문구 인용)
- 인텔 맥 미지원, 첫 실행 시 모델 내려받기, 윈도우 GPU 가속은 엔비디아만
- 허락받은 목소리만 복제, 상업 이용 전 모델별 라이선스 확인

## 내 제안·해석 (공식 아님)
- 2장 공감 문구("괜찮은 음성 AI는 유료 구독이 많다", 서버 업로드 찜찜함) — 일반적 인식에 기반한 해석
- 6장 활용 예시 3개 (예시) 표시: 쇼츠 내레이션, 블로그 글 오디오북, 회의 녹음 정리
- 7장 이득 서술("구독료를 아낀다", "파일이 밖으로 안 나간다") — 로컬 실행이라는 공식 설명에서 끌어낸 해석. 원격 기능·동의 기반 분석은 선택 사항
- 5장 3단계는 README 사용법을 초보자용으로 요약
- 캡션 댓글 질문, 해시태그
