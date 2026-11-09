# Sources — Seedream 5.5 (ByteDance Seed)

Fetched 2026-11-09 ~20:50–21:00 KST.

- Official blog (ByteDance Seed, dated 2026-11-09): https://seed.bytedance.com/en/blog/more-realistic-images-more-stable-editing-across-100-rounds-introducing-seedream-5-5
  - "Today, we are introducing Seedream 5.5, our next-generation image creation model."
  - Three upgrades: stable multi-turn editing (preserve unedited regions at pixel level, eliminate color shifts; "continued work on the same image across 100 rounds of editing"); native RGBA with full/partial transparency, no separate background removal or edge cleanup; more realistic images and clearer (densely arranged small) text.
  - Demo: "100 successive edits on an image of the same person".
  - Evaluations on MagicArena across six use cases (e-commerce, marketing, film/TV, gaming, office productivity, fashion): vs Seedream 5.0 Pro, quality and usability improved in all six; "In film and television and in office productivity, usability rates were more than twice those of the previous version."
  - Text corruption (Chinese & English incl. dense small text): severe 0.4%, minor 1.7%.
  - GSB +55.62% for realism in image-to-image vs previous version (not used on slides).
  - "A Pro version of the Seedream 5.5 series will follow."
- Official model page: https://seed.bytedance.com/zh/seedream5_5 (and /en/) — "Try now" (EN) links to https://dreamina.capcut.com/ai-tool/home (CN: jimeng.jianying.com); "Get API" entry has an empty URL (no API link yet, checked via page HTML).

## Secondary (context only, not used for numbers)
- Sina Tech 2026-11-09: available in Doubao, Doubao Work, Jimeng; API "coming soon" on Volcano Ark; ~¥0.28 per 2K square edit (NOT used — not from an official ByteDance page).
- seedream5-5.io / oxen.ai third-party listings — NOT used.

## Uncertainties
- Whether "Image 5.5" is selectable for every Dreamina account/region (incl. Korea) is not confirmed on an official page; slides only say the official try button links to Dreamina.
- API pricing/date not officially published; slides say "공식 API 안내는 아직 없음".
- Commercial-use terms not checked; slides tell readers to verify.
- Slide 4 shopping use is illustrative (marked 예시); slide 5/6 restate official capabilities.
