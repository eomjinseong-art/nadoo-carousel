# sources — bg-remove-free-20261007-1254 (방향 B, pastel)

## 사실 확인 (2026-10-07 12:50~13:05 KST 조회)
- remove.bg 요금: https://www.remove.bg/pricing (페이지 내 plans-data JSON 직접 확인)
  - Personal 구독: 월 40크레딧, 월 결제 $9 (연 결제 시 월 $8.10 / 연 $97.20), commercialUse true
  - 1크레딧 = 고화질(최대 50MP) 1장, 웹사이트 미리보기는 무료
  - 사이트 배너: "remove.bg's background removal is moving to Canva. The standalone website will no longer be available from 1 December 2026 at 9:00am CET."
- remove.bg 무료 플랜: https://www.remove.bg/fr/help/a/what-is-the-difference-between-the-free-plan-subscription-and-pay-as-you-go
  - 무료 = 웹사이트에서 저해상도 미리보기 최대 0.25메가픽셀, 무료 계정은 보너스 1크레딧 + API/앱 미리보기 월 50회
- iPhone 피사체 들어올리기: https://support.apple.com/en-us/102460 (Published May 27, 2026),
  https://support.apple.com/guide/iphone/lift-a-subject-from-the-photo-background-iphfe4809658/ios
  - iOS 16 이상, iPhone XS·XR 이후. 길게 누르기 → 복사, 스티커 추가, 공유. "Subjects cannot be pasted onto another photo."
- 갤럭시 갤러리 Image Clipper: https://r2.community.samsung.com/t5/CamCyclopedia/Image-Clipper/ba-p/13831421 (삼성 공식 CamCyclopedia),
  https://www.samsung.com/us/explore/photography/become-the-ultimate-photographer-with-samsung-AI/
  - 사진을 길게 누르면 대상 자동 분리 → 클립보드 복사, 공유, 이미지로 저장. S23에서 처음 추가.
- Windows 사진 앱 배경 제거: https://support.microsoft.com/ko-kr/windows/apps/photos/edit-photos-and-videos-in-windows ,
  https://blogs.windows.com/windows-insider/2023/11/17/windows-photos-gets-background-remove-and-replace-along-with-other-improvements/
  - 배경 패널 → 흐림/제거/바꾸기 → 적용. "분리 프로세스는 디바이스에서 로컬로 수행됩니다. 즉, 데이터가 디바이스를 벗어나지 않습니다."
  - 사진 앱 2023.11110.8002.0 이상 필요(Insider 블로그)
- Adobe Firefly 무료 배경 제거: https://www.adobe.com/products/firefly/features/remove-background/transparent.html
  - Adobe 계정으로 무료, "free daily generations", JPEG·PNG·WEBP 최대 50MB 업로드, 투명 PNG 다운로드, 대량은 유료 플랜
- Canva 배경 제거 = Pro 기능: https://www.canva.com/ko_kr/pricing/ (curl로 받은 HTML의 요금제 비교표)
  - "사진 배경 제거(확장형 포함) — 하나씩, 또는 일괄적으로 이미지에서 배경 제거": 무료 열 없음, Pro·Business·Enterprise 열 true
  - "Pro 요금제를 이용하면 ... AI 도구(크기 조정, 자동 번역, 배경 제거 등)"

## 불확실한 점 / 주의
- Canva Pro 원화 가격은 페이지가 JS/Cloudflare로 막혀 공식 확인 불가 → 슬라이드·캡션에 가격 미표기.
- Firefly 무료 일일 횟수는 Adobe가 숫자를 공개하지 않음(“free daily generations”만 표기) → "하루 단위 제한"으로만 표기.
  업로드 한도는 같은 페이지에서 50MB로 표기(일부 외부 글은 40MB로 적음, 공식 페이지 최신값 50MB 사용).
- 갤럭시: 지원 기종·One UI 버전 공식 목록 미확인(외부 블로그는 One UI 5.1 이상이라 함) → "기종·버전에 따라 지원 다름"으로만 표기.
- Windows 10 지원 여부는 공식 문서에서 명시 확인 못 함(ZDNET은 2024년 2월 Windows 10에도 추가됐다고 보도) → 버전 언급 없이 "최신 업데이트 필요"만.
- 한국어 메뉴명 "이미지 편집"은 영문 "Edit image" 기준 추정(지원 문서 본문에는 "배경 패널", "제거", "적용" 확인).
- remove.bg 단독 사이트 12/1 종료는 사이트 공식 배너 기준. 요금은 USD, 세금 별도일 수 있음.
