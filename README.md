# 나두Ai 캐러셀

틱톡을 쓰지 않아도 읽을 수 있는 AI 캐러셀 아카이브와, 데스크테리어·사무용품 쿠팡 파트너스 코너입니다.

기본 주소는 `NEXT_PUBLIC_SITE_URL` 이고, 값이 없으면 `https://nadoo-carousel.vercel.app` 를 씁니다.

## 캐러셀 폴더

`content/carousels/<slug>/post.json` 과 같은 폴더의 슬라이드 이미지입니다.

```json
{
  "slug": "sample-chatgpt-prompt-5",
  "date": "2026-09-28",
  "title": "제목",
  "summary": "한 줄 요약",
  "tags": ["ChatGPT", "업무자동화"],
  "tiktok_url": "https://www.tiktok.com/...",
  "slides": [{ "image": "01.webp", "text": "첫 줄은 소제목\n나머지는 본문" }]
}
```

- `date` 는 `YYYY-MM-DD`.
- `tiktok_url` 은 없어도 됩니다. 있으면 글 아래에 링크가 나옵니다.
- 슬라이드 `text` 의 첫 줄은 상세 페이지의 `h2` 가 됩니다.
- 이미지는 png, jpg, webp 모두 됩니다. `npm run build` 전에 `scripts/optimize-images.mjs` 가 가로 1080 이하 webp 로 `public/carousels/<slug>/` 에 다시 만들고, 페이지는 `next/image` 로 그 파일을 보여 줍니다.
- 폴더를 `main` 에 커밋하면 다음 빌드에서 목록, 태그, 사이트맵에 자동으로 들어갑니다. 별도의 목록 파일을 고칠 필요는 없습니다.
- 샘플 슬라이드를 다시 그리려면 `npm run slides` (Pretendard 폰트를 받아 SVG 를 webp 로 변환).

## 시트

시트 ID 는 `config/sheets.json` 에 있습니다. 두 시트 모두 링크가 있는 사람은 볼 수 있게 공유되어 있어야 하고, 동기화 스크립트는 아래 주소로 CSV 를 받습니다.

`https://docs.google.com/spreadsheets/d/<id>/export?format=csv`

### 캐러셀 시트 `1JhNIZVs8ZwsSUou9KllxTctiDJ_fPoJGdPclo18Gz-o`

| 열 | 의미 |
| --- | --- |
| slug | 폴더 이름과 같은 주소 키 |
| date | `YYYY-MM-DD` |
| title | 시트에 적는 제목 (화면 제목은 `post.json`) |
| tags | `ChatGPT\|업무자동화` 처럼 `\|` 또는 쉼표로 구분 |
| visible | `Y` 만 공개 목록. 그 외는 숨김 |
| tiktok_url | 메모용. 화면 링크는 `post.json` |
| memo | 비공개 메모 |

결과 파일은 `data/carousel-visibility.json` 입니다.

- `visible` 이 `Y` 인 행은 `listed` 에 남습니다.
- `visible` 이 `Y` 가 아닌 행의 slug 는 `hidden` 에 들어갑니다.
- 시트에 없는 slug 는 기본으로 공개됩니다.
- `hidden` 에 있는 글은 홈, 태그, 검색, 사이트맵에서 빠지고 `/c/<slug>` 는 404 (noindex) 입니다.

### 상품 시트 `1Y2qEKEGBrcS9Gfiu4d7KMk2FJbxMQ6tfrOG7razG4cY`

| 열 | 의미 |
| --- | --- |
| id | 상품 키. 같은 id 가 여러 줄이면 아래 행이 이깁니다 |
| visible | `Y` 만 사이트에 나옵니다 |
| category | `모니터 받침대`, `키보드·마우스`, `조명`, `정리함·수납`, `의자·쿠션`, `데스크 매트`, `케이블 정리`, `식물·소품`, `기타` 중 하나. 다른 값도 탭으로 추가됩니다 |
| name | 카드에 보이는 이름 |
| price | `29900`, `29,900원` 처럼 적어도 됩니다. 숫자만 남깁니다 |
| image_url | 비우면 자리 표시 그림 |
| link | 쿠팡 주소. 버튼은 새 탭이고 `rel="sponsored nofollow noopener"` |
| badge | 비우면 배지를 숨깁니다 |
| memo | 사이트에 보이지 않는 메모 |

빼는 행: `visible` 이 `Y` 가 아님, 이름이 비어 있음, 이름이 `nothing` 으로 시작함, 링크가 비어 있음.

결과 파일은 `data/products.json` 의 `products` 배열입니다. 화면에는 한 페이지 40개, 번호 페이지, 브라우저 세션마다 순서를 섞습니다.

상품이 나오는 곳(홈의 데스크 추천, 캐러셀 하단, `/desk`)과 바닥글에는 다음 문장을 둡니다.

> 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.

## 숨기기

1. 캐러셀 시트에서 해당 `slug` 의 `visible` 을 `N` 으로 바꿉니다.
2. GitHub Actions `Sync Google Sheets` 가 30분마다, 또는 수동 실행으로 CSV 를 받아 JSON 을 고치고, 바뀐 경우에만 커밋합니다.
3. 그 커밋이 Vercel 배포를 일으키면 글이 목록에서 사라지고 주소는 404 가 됩니다.

시트를 읽지 못하면 스크립트는 마지막에 커밋된 JSON 을 그대로 둡니다. 사이트 빌드도 시트를 직접 부르지 않고 그 JSON 만 읽습니다.

로컬에서 바로 반영하려면 `npm run sync-sheets`. CSV 파일을 이미 받아 두었다면 `node scripts/sync-sheets.mjs --from-files carousel.csv products.csv`.

## 상품 추가

시트에 행을 추가하고 `visible` 을 `Y` 로 둡니다. 이름과 링크가 있어야 합니다. 동기화 워크플로가 `data/products.json` 을 고치면 다음 배포에 카드가 생깁니다. 분류 탭은 비어 있어도 항상 보입니다.

## 개발

```bash
npm run dev
npm run build
npm run check
```

외부 링크(자매 사이트, 틱톡, 상품)에는 `utm_source=nadoo-carousel` 이 붙습니다.
