# Sources — MarkItDown (microsoft/markitdown)

## 확인한 사실 (2026-09-29 17:43 KST 선택 시점 기준)

- GitHub 저장소: https://github.com/microsoft/markitdown
  - 설명: Lightweight Python utility for converting various files to Markdown for use with LLMs / text analysis
  - 스타 187,533개 → 표시 "별 18.7만 개" / "별 18.7만" (선택 시점 GitHub API 값, 다른 지표 창작 금지)
  - 라이선스: MIT (무료·오픈소스)
  - 지원 형식(공식 README): PDF, PowerPoint, Word, Excel, Images(EXIF/OCR), Audio(transcription), HTML, CSV/JSON/XML 등 텍스트, ZIP, YouTube URLs, EPubs 등
  - 설치: `pip install 'markitdown[all]'`
  - CLI: `markitdown path-to-file.pdf > document.md` 또는 `markitdown path-to-file.pdf -o document.md`
  - Python API: `from markitdown import MarkItDown; md = MarkItDown(); result = md.convert("file.xlsx"); print(result.markdown)`
  - 필요 환경: Python 3.10–3.14
  - 마크다운을 쓰는 이유(README): LLM이 마크다운을 잘 이해함, 토큰 효율, 제목·목록·표·링크 보존
  - Azure Document Intelligence / Content Understanding은 선택적 유료 클라우드 업그레이드(필수 아님). 본 캐러셀은 로컬 pip 설치 중심
  - 보안(README, 짧게): 신뢰할 수 없는 환경에서는 입력 소독(sanitize) 권장 — 본문 주인공은 아님

### 슬라이드·캡션에 쓴 사실
- 별 18.7만 개, MIT 무료, 마이크로소프트 공개 파이썬 도구
- PDF·PPT·Word·Excel·이미지 글자 인식·음성 받아쓰기·HTML·유튜브·전자책·ZIP 변환
- pip 설치 → 변환 명령 → AI 채팅에 붙여넣기 3단계
- 파이썬 3.10~3.14, 마크다운이 AI·토큰·구조 보존에 유리하다는 README 설명

## 내 제안·해석 (공식 아님)
- 2장 공감(PDF 복붙 피로, 표·제목 깨짐) — 일반적 사용 경험에 기반한 해석
- 6장 활용 예시 3개 (예시) 표시: 제안서 PDF 요약, 회의 PPT 회의록, 엑셀 표 질문용 변환
- 7장 "AI 답이 더 좋아진다", "복붙 시간 절약" — README의 LLM·구조 보존 설명에서 끌어낸 독자 이득 서술
- 5장 터미널에 보인 명령은 공식 CLI/설치 문구를 초보자용으로 축약한 예시
- 캡션 댓글 질문, 해시태그
