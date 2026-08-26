# Architecture

## Purpose

This document describes the current information architecture and the intended role of each layer.

The repository is not just an IT glossary. It is intended to grow into a user-owned learning system built from questions the owner actually asked.

## Information hierarchy

```text
/
├── knowledge/
│   └── it/
│       └── <term>/
├── quiz/          # future
├── reports/       # future public/derived views
└── profile/       # primarily repository data, not necessarily public
```

### `/`

Project entry point.

Responsibilities:

- explain the core concept;
- provide navigation to major areas;
- eventually summarize learning activity;
- avoid becoming a full dump of all knowledge cards.

### `/knowledge/`

Knowledge area top page.

Responsibilities:

- list available knowledge categories;
- provide a stable parent for future categories such as IT, law, English, history, and trivia.

### `/knowledge/<category>/`

Category page.

Example:

```text
/knowledge/it/
```

Responsibilities:

- list accepted/public entries for the category;
- support later search/filter/sort features;
- link to individual knowledge pages.

### `/knowledge/<category>/<term>/`

Individual knowledge page.

Examples:

```text
/knowledge/it/opt-in/
/knowledge/it/opt-out/
/knowledge/it/ogp/
```

Responsibilities:

- display one accepted knowledge entry;
- provide a stable canonical public URL;
- act as the primary social-sharing target;
- eventually contain per-entry OGP metadata and generated OGP imagery.

## Data architecture

Canonical knowledge currently lives under:

```text
data/
└── terms/
    ├── index.json
    ├── opt-in.json
    ├── opt-out.json
    └── ogp.json
```

`data/terms/index.json` is the registry of knowledge IDs.
Each `<id>.json` file is the canonical data for that entry.

HTML is a presentation layer.

### Current implementation status

There is currently **no automatic static-site generator** that turns new JSON entries into category/detail HTML.

This means:

- a new `data/terms/<id>.json` file can exist without a corresponding `/knowledge/<category>/<id>/` page;
- adding an ID to `data/terms/index.json` does not by itself guarantee that the category list page changes;
- category pages and detail pages currently require explicit HTML updates.

Long term, the intended architecture is to generate list/detail pages from JSON so the source of truth remains singular.

```text
JSON source of truth
→ generated category pages
→ generated detail pages
→ generated OGP metadata/images
```

Until that generator exists, the data layer and presentation layer can temporarily drift and must be checked separately.

## Knowledge record

Current fields include concepts such as:

- `id`
- `term`
- `reading`
- `category`
- `summary`
- `explanation`
- `example`
- `asked_count`
- `confused_with`
- `tags`
- `status`
- `public`
- `created_at`
- `updated_at`

The schema may evolve through real usage. Avoid premature over-modeling.

## Derived information

Future derived outputs may include:

```text
JSON knowledge
├── category/index pages
├── individual knowledge pages
├── OGP metadata/images
├── quiz candidates
├── review queues
├── weekly/monthly reports
├── learning profile
└── social post candidates
```

The structured knowledge and learning history should remain the source from which these outputs are regenerated.

## Learning-state architecture

The long-term design distinguishes between knowledge content and learning-state signals.

Examples of learning-state signals:

- how many times a concept was asked about;
- concepts commonly confused with it;
- quiz attempts/failures;
- last asked/reviewed date;
- whether the concept appears mastered or still weak.

These signals can later be analyzed by AI to produce review plans and user-owned personalization reports.

## Portability principle

No single AI vendor's memory should be the only copy of the user's learning state.

A future ChatGPT, Claude, Gemini, local LLM, or coding agent should be able to inspect this repository and recover the user's accumulated learning context from files the user owns.
