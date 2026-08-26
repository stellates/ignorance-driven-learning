# Ignorance Driven Learning

> This repository is made of things I didn't know.

Ignorance Driven Learning is a user-owned knowledge repository that grows whenever its owner asks AI about something they do not understand.

Instead of generating a huge knowledge base up front, this project keeps only human-reviewed knowledge that came from real questions, confusion, mistakes, and re-learning.

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
data/
  terms/          accepted knowledge entries
  quizzes/        accepted quiz questions
  history/        learning / review events
profile/           portable AI personalization material
reports/           periodic learning analysis
schema/            JSON schemas
web/               GitHub Pages frontend
```

## Status

Early prototype / base repository. The first goal is intentionally small: add an accepted term as JSON and make it visible on GitHub Pages.

## Why this exists

Most AI conversations disappear into chat history. This project tries to turn useful conversations into durable, portable, human-reviewed knowledge — while preserving the fact that the knowledge began with a real gap in understanding.
