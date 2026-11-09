# Sources — K-EXAONE 2.5 free API (LG AI Research)

Fetched 2026-11-09 ~12:45–12:50 KST.

- EXAONE API Platform changelog (official): https://docs.exaone.ai/en/docs/changelog , https://docs.exaone.ai/ko/docs/changelog
  - "November 9, 2026 — EXAONE foundation models developed by LG AI Research are now available through the API. This service is currently available free of charge."
  - Available models: K-EXAONE 2.5 (750B), EXAONE Tabular
- Models page (official): https://docs.exaone.ai/en/docs/models , /ko/docs/models
  - Strength in Korean understanding/generation; coding, long context, tool calling, agentic tasks
  - Context 512K, max output 512K, knowledge cutoff 2026-01, Text only, Korean/English
  - Parameters 750B (Active 31B); Features: Chat / Tool calling / Structured outputs / Code generation / Streaming
  - Benchmarks: SWE-Bench Pro 59.21 (2.0: 47.1, DeepSeek-V4.1-Flash 58.41, GLM-5.3 64.03); BrowseComp 78 (50.87/75.8/79); AutomationBench 74.6 (16.9/74.9/71.6); Claw-Eval 77.29 (62.11/75.78/77.64)
- K-EXAONE 2.5 endpoint doc: https://docs.exaone.ai/en/docs/k-exaone-2.5
  - POST https://api.exaone.ai/v1/chat/completions, OpenAI-compatible, model `k-exaone_v2.5`, max context 524,288 tokens, text-only, reasoning_effort low/high/max
- Rate limits doc: https://docs.exaone.ai/en/docs/rate-limits — limits per second/minute/day reported in x-{window}-rate-limit headers; 429 on exceed. (Example header values on the page are examples only — NOT used as actual limits.)
- Press (announcement context, 2026-11-09 10:00 KST): Yonhap https://www.yna.co.kr/view/AKR20261109034200003 ; Herald https://biz.heraldcorp.com/article/10930221 ; Asia Business Daily (EN) https://www.asiae.co.kr/en/article/2026110908593029581
  - Announced at NVIDIA AI Day Seoul 2026 (COEX); technical-validation model = 2nd-round sovereign model (Aug) + additional training; anyone with an API key can use it for development/research free
  - "24 metrics combined improved 70%+ vs August model" (LG internal analysis, quote by EXAONE Lab head); 3rd-round frontier model targeted by January 2027

## Uncertainties
- Free period end date and future pricing not published (stated on slide 7).
- Actual numeric rate limits not published in docs (only header mechanism) — not quantified.
- "8 weeks" figure is from press quotes; not used on slides.
- No open weights claim made for 2.5 (not confirmed either way on official pages).
- Slide 6 Korean-work use and slide 5 startup use are illustrative (marked 예시).
