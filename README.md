# Ignorance Driven Learning

> This repository is made of things I didn't know.

Ignorance Driven Learning is a user-owned knowledge repository that grows whenever its owner asks AI about something they do not understand.

Instead of generating a huge knowledge base up front, this project keeps only human-reviewed knowledge that came from real questions, confusion, mistakes, and re-learning.

## Start here

This repository is designed to be used together with an AI assistant such as ChatGPT, Claude, Gemini, Codex, or another tool that can read this repository.

For a new AI conversation, give the AI access to this repository and start with a prompt like this:

```text
Read this repository first, especially AGENTS.md and the documents under docs/.
Follow the project rules before answering or changing files.
I want to continue using Ignorance Driven Learning from here.
```

If the AI can access GitHub directly, point it to this repository and ask it to read the repository before continuing. If it cannot access GitHub directly, provide `AGENTS.md`, `docs/architecture.md`, and `docs/workflow.md` as context.

After that, use the AI normally. For example:

```text
opt-inって何？
```

The expected behavior is:

- If the knowledge already exists, the AI should use it as context and treat the question as a repeat question when appropriate.
- If it is new knowledge, the AI should explain it conversationally first.
- The AI must not silently register new durable knowledge.
- When the human explicitly approves registration, the AI should save it according to the repository rules.

The conversation is not the source of truth. Important project rules and accepted knowledge should live in this repository so another AI or another chat can continue from the same state.

## AI handoff documents

- [`AGENTS.md`](./AGENTS.md) — rules AI agents must follow when reading or modifying this repository.
- [`docs/architecture.md`](./docs/architecture.md) — current information architecture, data ownership, and page structure.
- [`docs/workflow.md`](./docs/workflow.md) — operational flow for new questions, repeated questions, registration, publishing, and future learning features.

When project behavior changes, update these documents rather than relying only on chat history.

## Core loop

1. Ask AI about something you do not understand.
2. Keep asking until the explanation actually makes sense.
3. Human-review the result.
4. Save the accepted knowledge as structured data.
5. Reuse the same data for learning pages, quizzes, reports, AI personalization, OGP cards, and social posts.
6. Track repeated questions and mistakes so the system can bring weak points back later.

```text
I don't know
    ↓
Ask AI
    ↓
Understand / revise
    ↓
Human accepts
    ↓
Structured knowledge
    ↓
├─ Knowledge pages
├─ Quizzes
├─ Review queue
├─ Learning reports
├─ AI profile
└─ Public / social content
```

## Principles

- **Ignorance is data.** Repeated questions, confusion, and wrong answers are useful signals.
- **Human curated.** AI proposes; a human decides what becomes durable knowledge.
- **Data is the source of truth.** Pages, cards, reports, and quizzes are derived outputs.
- **User owned.** The repository should remain useful across AI providers.
- **Start small.** No need to build a complete dictionary. Add what you genuinely did not know.

## Repository structure

```text
AGENTS.md          AI operating rules
docs/              architecture and workflow documentation
data/
  terms/           accepted knowledge entries
  quizzes/         accepted quiz questions
  history/         learning / review events
knowledge/         knowledge browsing pages
profile/           portable AI personalization material
reports/           periodic learning analysis
schema/            JSON schemas
index.html         project entry page
```

## Status

Early prototype / base repository. The current goal is to make the repository itself sufficient context for a human and a new AI conversation to continue the same learning workflow.

## Why this exists

Most AI conversations disappear into chat history. This project tries to turn useful conversations into durable, portable, human-reviewed knowledge — while preserving the fact that the knowledge began with a real gap in understanding.
