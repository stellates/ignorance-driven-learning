# Workflow

## Overview

This repository grows through conversation and human approval.

The current workflow is:

```text
User question
→ AI explanation
→ clarification / refinement
→ human approval
→ structured knowledge entry
→ push
→ GitHub Actions
→ generated public page
→ later reuse for quiz / reports / personalization / social sharing
```

## 1. New concept

When the user asks about a concept that does not yet exist:

1. Explain it conversationally.
2. Adjust the explanation if the user asks for a simpler, deeper, or more practical version.
3. Do not automatically save the first AI answer.
4. Wait until the user explicitly says to register/save/adopt it.
5. Add a new JSON entry under `data/terms/`.
6. Add the ID to `data/terms/index.json`.
7. Push the canonical data change.
8. Let GitHub Actions run `scripts/build.mjs` and regenerate the knowledge pages.

The normal registration flow is now:

```text
Register knowledge
├─ add/update `data/terms/<id>.json`
└─ add/update `data/terms/index.json`

Automatic publication build
├─ GitHub Actions detects the change
├─ runs `node scripts/build.mjs`
├─ regenerates `knowledge/`
└─ commits generated HTML
```

Do not manually create or patch generated detail/category HTML as the normal way to register knowledge.

## 2. Repeated concept

When the user asks again about a concept that already exists:

1. Read the existing knowledge entry first.
2. Answer from or with reference to the existing understanding when appropriate.
3. Increment `asked_count` for a genuine repeated question.
4. Update `updated_at` when the learning state or content changes.
5. Do not create a duplicate file.
6. If the user is confusing it with another concept, consider adding that relation to `confused_with`.
7. Push the JSON change; the build pipeline will regenerate affected knowledge pages.

A repeated question is meaningful evidence that the concept may not be retained yet.

## 3. Editing an existing explanation

If later conversation produces a better explanation:

1. Preserve the same knowledge ID.
2. Update the relevant fields in the existing JSON.
3. Keep the explanation concise enough to reuse publicly, but complete enough to remain useful.
4. Prefer user-tested wording over generic AI-generated wording.
5. Do not edit generated HTML as the durable fix.
6. Push the JSON change and let the generator update the site.

## 4. Public knowledge pages

Accepted public knowledge is generated under category routes such as:

```text
/knowledge/it/<term>/
```

The individual page is the preferred link target for external sharing.
Category pages exist for discovery and browsing.

The generator currently creates:

- `/knowledge/index.html`;
- category indexes such as `/knowledge/it/index.html`;
- detail pages such as `/knowledge/it/dgx-spark/index.html`.

For content changes, edit the JSON source. For rendering/layout changes, edit `scripts/build.mjs` or shared styles and rebuild.

## 5. OGP workflow

When OGP generation is added:

1. Generate OGP metadata per individual knowledge page.
2. Use an absolute URL for `og:image`.
3. Prefer a simple reusable visual template.
4. The OGP image may contain a small owner/avatar icon, term name, and one-line summary.
5. Treat OGP images as derived assets, not canonical knowledge.
6. Integrate OGP generation into the same JSON-driven build path rather than manually maintaining each page.

## 6. Quiz workflow

Quizzes should preferably originate from accepted knowledge or from questions that have been manually play-tested.

The quality model is:

```text
AI proposes
→ human actually answers
→ explanation/choices are reviewed
→ good questions are accepted
→ accepted questions enter the quiz bank
```

Avoid relying on bulk autonomous generation as the main source of quiz quality.

## 7. Review and learning analysis

Future batch or scheduled analysis may inspect learning signals such as:

- `asked_count`;
- repeated confusion between concepts;
- quiz failures;
- time since last review;
- recently active subject areas.

That analysis may generate:

- review queues;
- quizzes;
- weekly/monthly Markdown reports;
- weak-point summaries;
- mastered-topic summaries;
- a current AI personalization profile.

## 8. Personalization workflow

The long-term goal is to derive files such as:

```text
profile/current.md
profile/weak_points.md
profile/mastered.md
profile/interests.md
```

These files should summarize learning state in a portable form that another AI can read.

The user's learning profile should remain owned by the user and portable between AI providers.

## 9. Social content workflow

A subset of public knowledge may be reused as external educational content.

For example, IT entries can become:

- a public IT glossary;
- per-term OGP cards;
- X posts linking to individual knowledge pages;
- quiz material.

The same accepted knowledge data should feed all of these outputs rather than maintaining separate copies manually.

## 10. Guiding rule

Do not optimize for the number of entries.
Optimize for accumulated understanding.

The repository becomes valuable because the owner actually asked, understood, forgot, re-asked, and learned.
