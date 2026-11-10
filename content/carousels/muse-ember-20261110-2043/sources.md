# Sources — Meta Muse Ember (muse-ember-1.0)

Fetched 2026-11-10 ~20:55–21:05 KST.

- Official blog (Meta, "Introducing Our Smallest, Most Efficient Model: Muse Ember", dated November 9, 2026): https://research.meta.ai/blog/muse-ember
  - Smallest and most efficient model; for "the work agents repeat all day: tool calls, coding subtasks, routing, extraction, and long document parsing".
  - "matches Haiku's best score at about a third of the cost" — AA chart: Muse Ember max $0.136/task score 35.8; Claude Haiku 5.5 max $0.411/task score 36.2 (table rounds both to 36) → 0.136/0.411 ≈ 33%.
  - Muse Ember vs Muse Spark 1.3 (AA): Index 36 vs 37; cost per task $0.14 vs $2.39; price $0.10/$0.50 vs $1.25/$4.25.
  - Pricing: $0.10 / 1M input, $0.004 cached input, $0.50 output; 1M-token context; up to 512K output tokens (524,288 → caption "약 52만").
  - Footnote 2: prompts over 200K tokens → $0.30 input, $0.012 cached, $1.50 output (= 3x) → slide 7 "20만 토큰 넘으면 단가 3배".
  - FrontierCode 2.0-AA: Haiku 5.5 34.9 > Ember 27.2 (caption caution).
  - Available today on Muse Code and Meta Model API as muse-ember-1.0; Responses API; also on Google Cloud and Oracle Cloud. "For the hardest problems, pair it with Muse Wonder: Muse Wonder plans, Muse Ember handles the volume."
  - Several benchmarks (Agents' Last Exam, PSI, OSWorld 2.1, PerceptionBench) are Meta internal evaluations → slide 7 "점수는 메타 발표 기준".
- Model API docs: https://dev.meta.ai/docs/muse-ember
  - Input: text, image, video, audio, PDF; output text; context 1,048,576; max output 524,288.
  - Use cases: sub-agent tasks, tool calls, routing ("classify requests"), large collections ("extracting fields, or classifying tickets"). Example: classify support ticket as billing / bug / feature request → slide 4 (결제·오류·요청).
  - "Pair Muse Ember with a larger model … Muse Wonder or Muse Spark on the main loop to plan and reason" → slide 6.
  - "For hard single-shot coding problems … use Muse Spark or Muse Wonder" → slide 7 line 2.
  - Availability: Model API pay-as-you-go (Standard mode) and Muse Code pay-as-you-go and every plan.
- Developer blog: https://dev.meta.ai/resources/blog/build-with-muse-ember — OpenAI-compatible: generate key at dev.meta.ai, point existing OpenAI-compatible client (base_url) at Model API, set model muse-ember-1.0; available in all Muse Code subscription plans.
- Model page: https://dev.meta.ai/models/muse-ember — pricing table (<200k: $0.004/$0.10/$0.50; >200k: $0.012/$0.30/$1.50).
- Press context only: Gadgets360 (2026-11-10) https://www.gadgets360.com/ai/news/meta-muse-ember-launch-availability-features-12307593

## Notes / uncertainties
- Date: Meta blog dated Nov 9, 2026 (US). Slides say "11월 9일"; caption says "(미국 시간)".
- Slide 1 "같은 점수 AI 대비 약 1/3" = vs Claude Haiku 5.5 (max) on AA Intelligence Index, cost per task at list price; Muse Ember cost is described as an estimate at list pricing.
- Slide 4/5 workplace uses are illustrative (marked 예시 on slide 4; slide 5 restates official extraction/long-document capability).
- Korean availability/billing of Meta Model API not confirmed on an official page → caption tells readers to check.
- Ember was not previously covered (history: Muse Wonder 10/13, Muse Spark Open 10/16).

## Candidates scanned (2026-11-10)
1. Meta Muse Ember (11/9) — picked: brand-new model, clear price/benefit for repetitive work, direction A.
2. OpenAI dots: multiple local computers per dot (11/9, community announcement + ChatGPT Learn) — Pro/Business Premium/Enterprise only, narrower audience.
3. Google Workspace skills rollout (11/9, Workspace Updates) — overlaps 10/7 Gemini skills set.
4. Gemini Memory summary (11/9) — US English Google AI subscribers only.
