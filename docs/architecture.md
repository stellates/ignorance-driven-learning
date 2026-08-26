# Architecture

## Purpose

This document describes the current information architecture and the intended role of each layer.

The repository is not just an IT glossary. It is intended to grow into a user-owned learning system built from questions the owner actually asked.

## Information hierarchy

```text
/
├── knowledge/
│   └── <category>/
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

Generated knowledge area top page.

Responsibilities:

- list available knowledge categories;
- provide a stable parent for future categories such as IT, law, English, history, and trivia.

### `/knowledge/<category>/`

Generated category page.

Example:

```text
/knowledge/it/
```

Responsibilities:

- list accepted/public entries for the category;
- link to individual knowledge pages;
- later support search/filter/sort features.

### `/knowledge/<category>/<term>/`

Generated individual knowledge page.

Examples:

```text
/knowledge/it/opt-in/
/knowledge/it/opt-out/
/knowledge/it/ogp/
/knowledge/it/dgx-spark/
```

Responsibilities:

- display one accepted knowledge entry;
- provide a stable public URL;
- act as the primary social-sharing target;
- eventually contain per-entry OGP metadata and generated OGP imagery.

## Data architecture

Canonical knowledge lives under:

```text
data/
└── terms/
    ├── index.json
    └── <id>.json
```

`data/terms/index.json` is the registry of knowledge IDs.
Each `<id>.json` file is the canonical data for that entry.

Generated HTML under `knowledge/` is a presentation layer and is not canonical knowledge.

## Static-site generation

Knowledge-page generation is implemented by:

```text
scripts/build.mjs
```

The generator:

1. reads `data/terms/index.json`;
2. loads each registered term JSON;
3. filters to `public === true` and `status === "accepted"`;
4. groups entries by category;
5. generates `knowledge/index.html`;
6. generates each category index;
7. generates each individual knowledge detail page.

The current build pipeline is:

```text
Canonical JSON
→ `scripts/build.mjs`
→ generated `knowledge/` HTML
```

## GitHub Actions integration

`.github/workflows/build-knowledge.yml` runs on relevant pushes to `main`, including changes under `data/terms/**` and changes to the build script.

The workflow:

```text
push
→ checkout
→ setup Node.js
→ run `node scripts/build.mjs`
→ commit changed `knowledge/` files
→ push generated output
```

The workflow avoids looping on its own generated commit by skipping when the actor is `github-actions[bot]`.

## Editing rules

Because the site is generated:

- content edits belong in `data/terms/*.json`;
- registry edits belong in `data/terms/index.json`;
- page-template/rendering edits belong in `scripts/build.mjs` and shared CSS;
- generated `knowledge/` HTML should not be manually maintained in normal operation.

If generated HTML is incorrect, repair the source or generator and rebuild rather than patching the generated page as the durable fix.

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

Current and future derived outputs may include:

```text
JSON knowledge
├── category/index pages            # implemented
├── individual knowledge pages      # implemented
├── OGP metadata/images             # future
├── quiz candidates                 # future
├── review queues                   # future
├── weekly/monthly reports          # future
├── learning profile                # future
└── social post candidates          # future
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
