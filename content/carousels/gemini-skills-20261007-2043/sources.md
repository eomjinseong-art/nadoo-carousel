# 출처 — 제미나이 Gem → 스킬(skills) 전환 (2026-10-07 20:43 슬롯, 방향 A, pastel)

## 주제 선정 (최근 7~14일 후보)
1. **Gemini 스킬(skills)이 Gem 대체** — 구글 2026-09-30 발표, Workspace 배포 10/5 시작, Gemini 앱(Workspace 계정) 10/13 시작, 개인 계정 Gem 11월 종료 시작 → **선정** (사용자가 직접 바꿔야 할 일이 있고 마감이 있음, history.md에 없음)
2. Claude for Google Workspace 공개 베타 (Anthropic 2026-10-06) — 유료 플랜 한정, 9/28 'Claude Docs·Slides'와 주제가 가까워 보류
3. Mistral Large 4 공개 프리뷰 (2026-10-06, 가중치는 10월 말) — 초보 독자 실익 약함
4. Reflection Beam 501B 오픈웨이트 (2026-10-05, 아직 조기 신청만) / EmbeddingGemma 2 (2026-10-06) — 개발자용
5. OpenAI Decisions API 공개 베타 (2026-10-06) — 개발자용

## 공식 출처
- Google 블로그 (2026-09-30) "Let skills in Gemini tackle your most repetitive tasks": https://blog.google/products-and-platforms/products/gemini/automate-tasks-with-skills/
  - 스킬 = 저장해 두고 다시 쓰는 지시, '/' + 스킬 이름으로 호출, 여러 개 겹쳐 쓰기, 텍스트·PDF·이미지 참고 파일 포함
  - Gem 지원 종료: 개인 계정 2026년 11월부터, Workspace 비즈니스·엔터프라이즈·비영리 2027년 3월, 교육 2027년 6월. Gem은 스킬로 자동 이전
  - 공유, 드라이브 파일, Gemini Notebook 지원은 "앞으로 몇 주 안에"
- Google Workspace Updates (2026-09-30): https://workspaceupdates.googleblog.com/2026/09/skills-gemini-app-workspace.html
  - SKILL.md 공개 표준 기반 → 다른 플랫폼에서 만든 스킬 복사 가능
  - 주요 날짜: 10/5 Workspace 배포 시작(Rapid), 10/13 Gemini 앱 배포 시작(Workspace 도메인), 11/17 Gem이 Gemini 앱 설정 패널로 이동(계속 사용 가능), 2027-03-01 이후 비즈니스·엔터프라이즈 Gem 사용 불가, 2027-06-01 이후 교육
  - Gemini 앱 스킬과 Workspace 스킬은 아직 동기화되지 않음
- Gemini 앱 도움말 "About the transition from Gems to skills": https://support.google.com/gemini/answer/18560919?hl=en
  - '/' (곧 '@'), 자동 적용, 여러 개 겹쳐 쓰기 / 만 18세 이상 개인 계정에서 사용 가능
  - 직접 옮기는 3단계(지식 파일 내려받기 → Settings > Skills > Create manually에서 이름·설명·지시 복사 → 스킬 Download 후 SKILL.md를 폴더에 넣고 Replace skill로 폴더 업로드, 폴더 이름 = 스킬 이름)
  - 활성 스킬 최대 100개 / 아직 안 되는 기본 도구: Create video, Create music, Canvas, Deep research, Guided learning / GitHub 파일 미지원
- Gemini 앱 도움말 "Create & manage skills": https://support.google.com/gemini/answer/17094296?hl=en
  - 조건: 만 18세 이상, 개인 Google 계정(회사·학교 계정은 아직), Keep Activity 켜기
  - 사용 가능: Gemini 모바일 앱, Mac 앱, gemini.google.com
  - 알려진 문제: 모바일 앱에서 직접 만든 스킬이 저장되지 않음 → 웹에서 만들기 권장
  - "Skills are available without a Google AI subscription" (유료 구독 없이 사용)
- 참고(2차): 9to5Google 2026-10-02 '/' → '@' 변경 베타 https://9to5google.com/2026/10/02/gemini-app-map-tool/ , TechRepublic 2026-09-30 https://www.techrepublic.com/article/news-gemini-gems-skills-migration/

## 불확실한 점
- 개인 계정 Gem의 정확한 종료/자동 이전 시작일: 공식 문서는 "2026년 11월"까지만 명시. 11/17은 Workspace 블로그의 "설정 패널로 이동" 날짜이고, TechRepublic은 앱 내 공지 기준 11/17 자동 변환이라고 보도 → 슬라이드·캡션은 "11월부터"로만 표기
- 한국어 화면의 메뉴 이름(스킬/직접 만들기/스킬 바꾸기, Keep Activity의 한국어 표기)은 확인하지 못해 영문 메뉴명을 괄호로 병기
- 한국 계정에 스킬이 이미 열렸는지는 확인 못 함("순차 적용 중"으로 표기)
- 5장 예시 "보고서 말투 + 회사 양식"은 직접 지은 예시 → 슬라이드에 (예시) 표기
