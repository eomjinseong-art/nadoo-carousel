# Sources — Kimi K3.1 Pro (Moonshot AI)

- Official tech blog (EN): https://www.kimi.ai/blog/kimi-k3-1-pro (re-fetched 2026-11-08 ~20:56 KST)
  - First model in K3.1 series; most capable 3T-class open-weight model to date; 1M-token context
  - Post-trained version of Kimi K3 with substantially larger post-training compute
  - K3.1 Pro Highspeed: 2-3x speed of K3.1 Pro
  - Available on Kimi.ai, Kimi Work, Kimi Code, Kimi API; full weights "will be released by Nov 4, 2026"
  - Terminal-Bench 4.0: 65.7% (GPT-6 Astra 58.2%, Claude Opus 5.5 66.4%), Claude-Code harness
  - Kimi Code Bench 3.0 Long-horizon (internal): 61.2% vs K3 55.95%
  - BenchCAD with tools 92.7% (Opus 5.5 96.2%, GPT-6 Astra 95.9%) — not used on slides
  - 3D Make live on kimi.ai and Kimi app: preview/edit, download for 3D printing, export video/Live Photos
  - OfficeQA Pro v2: 64.4 (SOTA, per Moonshot)
  - Kimi Hallu Bench Hard (internal stress test): claim-level hallucination 23.4% (K3) → 8.3%; "do not represent overall error rates in daily use"
  - API: kimi-k3.1-pro / kimi-k3.1-pro-highspeed; Zero Data Retention for API customers
  - Kimi Work desktop 3.1.0+ (Windows, Apple silicon Macs); Kimi Code `/model`; Enterprise off by default
  - Open-weight release: cyber-related data removed from training stages
- Official news page (CN): https://www.kimi.com/news/kimi-k3-1-pro (更新于 2026-10-24) — same facts, weights "11月4日前发布"
- Hugging Face weights: https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  - API createdAt 2026-11-02T04:13:51Z (= 2026-11-02 13:13 KST), lastModified 2026-11-05T07:11:43Z (16:11 KST)
  - 96 safetensors shards present, not gated; license: other / "kimi-k3.1-pro" (custom license)
  - Model card: MoE, total 2.8T, activated 104B (not used on slides; blog says "3T-class")

## Uncertainties
- Exact launch day not stated in the blog text; CN page shows update 2026-10-24 and asset path 20261022 → written as "2026년 10월 발표".
- Weights: repo created 11/2, last modified 11/5 KST; written as "11월 초 공개" rather than a specific day.
- Most benchmark numbers are Moonshot's own (several internal) — flagged on slide 7.
- No API prices, star counts, or Korea-specific availability claimed (not sourced).
- Whether kimi.ai web exposes a manual model picker for K3.1 Pro was not verified in UI; slide 8 says "K3.1 프로 선택" based on blog saying it is available on Kimi.ai.
