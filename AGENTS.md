# Agent Instructions

## Project concept

This repository grows from things its owner did not know.

Do not turn it into a comprehensive encyclopedia by default. Knowledge should originate from an actual user question, a repeated question, or an explicitly approved entry.

The core idea is human-curated, ignorance-driven learning:

1. The user encounters something they do not understand.
2. The AI explains it conversationally.
3. The user decides whether the explanation is good enough to keep.
4. Accepted knowledge is stored as structured data.
5. Repeated questions and quiz mistakes become learning signals.
6. The same data may later power web pages, quizzes, reports, personalization, OGP, and social posts.

## Source of truth

- Canonical knowledge data: `data/terms/*.json`
- Knowledge registry: `data/terms/index.json`
- Static knowledge HTML under `knowledge/` is generated output.
- `scripts/build.mjs` is the current static-site generator for knowledge pages.
- `.github/workflows/build-knowledge.yml` automatically rebuilds generated knowledge pages when term data or the build script changes.
- Learning reports and profile files are derived from accumulated learning history.

## Current implementation status

Knowledge-page generation is implemented.

Current flow:

```text
AI conversation
→ human approval
→ add/update `data/terms/<id>.json`
→ add/update `data/terms/index.json`
→ push to `main`
→ GitHub Actions
→ `node scripts/build.mjs`
→ regenerate `knowledge/`
→ commit generated HTML
```

Important rules:

- Do **not** manually maintain generated category or detail HTML under `knowledge/` as the normal workflow.
- Do **not** treat generated HTML as canonical knowledge.
- If content is wrong, fix the JSON source and rebuild.
- If page structure or rendering is wrong, fix `scripts/build.mjs` or shared styling and rebuild.
- A new accepted/public term must be present in `data/terms/<id>.json` and registered in `data/terms/index.json` before the generator can surface it.
- Generated pages may be committed by `github-actions[bot]`; do not mistake those commits for canonical content edits.

## Knowledge lifecycle

When the user asks about a term:

1. Check whether the term already exists in `data/terms/`.
2. If it exists:
   - answer using the existing entry when appropriate;
   - treat the new question as a repeated learning event;
   - increment `asked_count` when the user is genuinely asking about the same concept again;
   - do not create a duplicate entry.
3. If it does not exist:
   - explain it conversationally first;
   - do not silently register it;
   - only add it after the user explicitly approves registration.
4. Preserve useful confusion links with `confused_with` when the user mixes up related concepts.

Repeated questions are not noise. They are valuable learning data.

## Content quality rules

- Prefer explanations that the user actually found understandable over bulk AI-generated encyclopedia text.
- Do not mass-generate hundreds of entries just to increase coverage unless the user explicitly asks for that.
- Keep explanations practical and concrete.
- Record useful examples and related concepts when they materially improve understanding.
- Human review is part of the quality model.

## Site structure

Current intended hierarchy:

```text
/
└── knowledge/
    └── <category>/
        └── <term>/
```

Current knowledge detail examples:

- `/knowledge/it/opt-in/`
- `/knowledge/it/opt-out/`
- `/knowledge/it/ogp/`
- `/knowledge/it/dgx-spark/`

The root page is the project entry point.
`/knowledge/` is the knowledge area.
Category pages such as `/knowledge/it/` list entries.
Individual knowledge pages are the canonical public-facing URLs for sharing.

Social sharing such as X should normally target individual knowledge pages, not category pages.

## Web design

Before creating or modifying any user-facing web design, read `docs/design-guidelines.md`.

- Do not apply generic AI-generated landing-page patterns by default.
- Treat `docs/design-guidelines.md` as the repository's local design rulebook.
- The repository's design guidelines take precedence over generic stylistic defaults.
- When adding a new visual pattern, prefer choices justified by the page's actual purpose rather than by convention or visual polish alone.

## OGP principles

Individual knowledge pages are expected to become shareable endpoints.

When OGP is implemented:

- generate metadata statically where possible;
- prefer absolute URLs for `og:image`;
- give each knowledge detail page its own title, description, URL, and image;
- remember that X and other services may cache OGP metadata.

## Future extensions

Planned or plausible extensions include:

- quizzes generated from accepted knowledge;
- review queues based on repeated questions, mistakes, or stale knowledge;
- weekly/monthly Markdown reports;
- user-owned AI personalization files under `profile/`;
- OGP image generation;
- social-post generation;
- category expansion beyond IT.

Do not assume all future features already exist.

## Design principle

The repository should remain portable across AI providers.
The user's knowledge state should live in files the user owns, not only in vendor-specific chat memory.

A useful shorthand for the project is:

> Commit your ignorance. Learn from it. Keep the memory yourself.
