# Sources — inkling2-mini-20261121-1243 (방향 C, pastel)

Checked 2026-11-21 ~13:00 KST.

## Official
- Thinking Machines Lab, "Introducing Inkling 2 Mini" (Nov 20, 2026) https://thinkingmachines.ai/news/inkling-2-mini/
  - looped transformer, middle layers run 3 times; leads open-weights <100B on DeepSWE v1.1 (48.2%), Vals Index v2.2 (46.5%); runs faster than similarly performing models
  - MoE 26.4B total, 3.4B active, 5.4B weight activations per token; ~20GB; ran offline on MacBook Pro (M5 Pro, 48GB) airplane mode → flight simulator in a few minutes; Thinkyville 20 villagers on one offline MacBook
  - leads similar-size open models on BrowseComp (79.0%), DeepSearchQA, MCP Atlas
  - limitations: MultiChallenge 50.0%, ComplexConstraints 33.4% behind Qwen3.8-27B
  - open weights; Tinker
- Hugging Face model card https://huggingface.co/thinkingmachines/Inkling-2-Mini — Apache 2.0, release Nov 20 2026, 1M context, text+image input, Apple silicon 32GB+, languages "English, general multilingual support"
- Ollama https://ollama.com/library/inkling-2-mini — `ollama run inkling-2-mini`, preview release on Mac, 32GB+, Windows/other hardware "shortly"

## Uncertain / not stated
- 한국어 성능 수치 없음 → 캡션에 명시, 슬라이드에서 주장 안 함
- "1위"는 회사 자체 발표(1,000억 미만 오픈 모델 기준) → 슬라이드에 (자체 발표)
- 264억/54억 = 26.4B/5.4B effective active

## Other candidates scanned (not chosen)
- Gemini computer use on Mac (11/19, 미국·영어) — 제미나이 최근 다수
- Taskade 요금 인하 (11/20) — 비주류
- Anthropic Computer Use beta Team/Enterprise — 날짜 미확인
