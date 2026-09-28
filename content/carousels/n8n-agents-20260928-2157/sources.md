# Sources — n8n Agents

## Official facts (verified 2026-09-28 KST)

- Blog launch post (2026-09-25): https://blog.n8n.io/introducing-n8n-agents/
  - n8n now has Agents: describe what an agent should do, choose a model, tools and workflows; it works out the steps.
  - Use via Slack, schedule, or call from any workflow; same agent everywhere.
  - Agents sit next to workflows; agent can use workflows as tools; Message an Agent node calls agent from workflow.
  - Existing AI Agent node unchanged.
  - Channels: Slack, Telegram, Linear (docs); blog also mentions Discord.
  - Tools: built-in n8n integrations, MCP servers, workflows.
  - Skills, sub-agents, knowledge (csv/pdf/md/txt on Cloud), memory, sessions with logs.
  - Approvals for sensitive tools; per-tool credentials.
  - Drafts and published versions.
  - Getting started: Agents tab → Create Agent, or describe to n8n Assistant.
  - Gateway credits: try without provider API key.
  - Availability: n8n Cloud latest stable; self-hosted with extra setup; Enterprise self-hosted coming soon.
  - Cost: one turn = one execution; tool calls to workflows/sub-agents don't count separately.
  - Still in preview.

- Docs: https://docs.n8n.io/build/build-and-manage-agents
  - Create: project → Agents tab → Create Agent → name, model, instructions, tools → Preview → Publish.
  - Channels: Slack, Telegram, Linear.
  - Schedules: hourly/daily/weekly/monthly/custom cron (published version only).
  - Message an Agent node for workflows.
  - Self-hosted from 2.32.3; enable `agents` in N8N_ENABLED_MODULES.

### Facts used in slides/caption
- Launch date 2026-09-25 from blog byline.
- Plain-language goal → agent figures out steps.
- Slack / schedule / workflow usage.
- Agents tab create flow; Preview then Publish.
- n8n Cloud latest stable; Preview status; approvals for sensitive actions.
- Gateway credits for trying without API key (slide 5 note).

## Our practical suggestions / examples (NOT from vendor)
- Slide 6 input examples marked (예시): 역할/도구/요청.
- Slide 7 benefit framing (팀 질문↓, 기획·매출) — interpretive.
- Caption engagement question and hashtags.
