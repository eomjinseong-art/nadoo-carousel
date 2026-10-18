# Sources — DeepSeek-V4.1-Flash-1017 (2026-10-18 12:43 슬롯)

## Official (primary)
- DeepSeek API Docs Change Log, 2026-10-17: https://api-docs.deepseek.com/updates/
  - DeepSeek V4.1 Flash upgraded to DeepSeek-V4.1-Flash-1017; official web and APP models also updated
  - API calling method and pricing unchanged; model name `deepseek-flash`
  - Benchmarks vs previous V4.1-Flash (2026-09-10 entry): DeepSWE v1.1 74.2 → 77.0; Terminal-Bench 4.0 31.2 → 42.3 (Claude Code framework); also Agents' Last Exam 31.8 → 35.4, Automation-Bench 54.8 → 60.5, Chartography 78.9 → 83.0
  - Reduced task runtime and output length → lower cost, higher speed (company claim)
  - Opened in-house search engine as Search & Fetch API
- DeepSeek Models & Pricing: https://api-docs.deepseek.com/quick_start/pricing
  - deepseek-flash = DeepSeek-V4.1-Flash-1017, context 1M, max output 384K, vision supported
  - Per 1M tokens, PEAK: input cache hit $0.006 / cache miss $0.3 / output $1.2; OFF-PEAK = half ($0.003 / $0.15 / $0.6)
  - Peak hours 01:00–04:00 and 06:00–10:00 UTC Mon–Fri (excl. Chinese public holidays); weekends fully off-peak
  - Search / Fetch: $0.75 per 1,000 successful requests each
  - Server-side tool calls via DeepSeek Harness, Claude Code, Codex currently free; per-request billing starts 00:00 Beijing time 2026-11-01 (= 01:00 KST 11/1)
- Hugging Face model card: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
  - "minor update" to V4.1-Flash; weights and repo under MIT License
  - Model size 763B params (HF page); recommended context_window 1M tokens
  - No Jinja chat template; Python reference encoder + deepseek-recipe

## Secondary (context only, not used for slide numbers)
- The Decoder (2026-10-17): https://the-decoder.com/deepseek-v4-1-flash-1017-beats-larger-rivals-in-agentic-tasks-while-once-again-massively-cutting-per-task-costs/ — notes independent benchmarks not yet out
- Vercel AI Gateway changelog (2026-10-17): https://vercel.com/changelog/deepseek-v4-1-flash-1017-now-available-on-ai-gateway
- PacketNebula open-weight tracker (17 Oct): 510.3 GB repo, multi-GPU server needed (third-party)

## Uncertainties / careful wording
- All benchmark numbers are DeepSeek's own; slides say "(딥시크 자체 측정)".
- "Faster/cheaper" is the company's claim (shorter output & runtime); no per-task dollar figure used (only seen in a third-party chart reading).
- "내 PC로 직접 돌리기 안 맞음" is an inference from the 763B size (HF) — no official hardware floor quoted.
- "회사 기밀·개인정보는 넣지 말기" is general safety advice, not a claim about DeepSeek policy.
- Slide 6 "코딩 도구 속 호출은 11월부터 과금" refers to server-side tool calls via Harness/Claude Code/Codex (free until 11/1 00:00 Beijing).
