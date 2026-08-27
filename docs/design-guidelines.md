# Anti-AI Design Guidelines

This document records visual patterns that make AI-generated websites look generic, artificial, or unnecessarily designed.

It is a research note and a local design rulebook for this repository. The rules should grow from actual observations made while reviewing and improving this site, not from bulk-generated generic design advice.

The goal is not to reject modern web design. The goal is to notice recurring AI defaults, explain why they feel generic, and replace them with choices that fit the actual purpose of the page.

## How to use this document

- Treat each rule as an observation-backed constraint.
- Add rules when a recurring AI-generated pattern is actually observed.
- Prefer small, specific rules over broad aesthetic manifestos.
- Record why a pattern feels artificial before prescribing a replacement.
- Do not turn this file into a generic web-design best-practices checklist.
- When a rule conflicts with a real product or usability requirement, the requirement wins.

## Rule 1: Avoid oversized hero sections by default

### Pattern

A common AI-generated page starts with a large hero section containing several of the following at once:

- a small eyebrow label above the title;
- an oversized `h1` that dominates the viewport;
- a short supporting lead sentence;
- excessive vertical whitespace;
- a divider below the hero;
- an immediate CTA or card directly after the hero.

This pattern is often applied even when the page is a small documentation site, personal knowledge base, utility, internal tool, or simple project index.

### Why it feels AI-generated

The structure is visually polished but often unrelated to the information density or purpose of the page.

It tends to make every site resemble a landing page. The page spends a large amount of its first viewport announcing itself instead of showing useful content. Repeated use of the same hierarchy — eyebrow, giant heading, lead, whitespace, CTA — also makes unrelated projects converge on the same visual language.

The issue is not that hero sections are always bad. The issue is using them as a default composition without a clear reason.

### Preferred approach

For documentation, knowledge, utility, and project-index pages:

- start with a normal document or application header unless a hero has a specific job;
- keep the primary heading proportional to the amount of content around it;
- do not add eyebrow text only to create visual hierarchy;
- use the first viewport for useful information or navigation rather than empty presentation space;
- prefer structure that reflects the page's purpose over a generic landing-page composition.

A hero section is acceptable when the page genuinely needs campaign-like communication, strong visual storytelling, or a single-message first impression. It should be a deliberate exception, not an automatic starting point.

## Rule 2: Avoid decorative English and terminology drift

### Pattern

AI-generated interfaces often insert short English labels into an otherwise non-English page simply because they look like familiar UI vocabulary.

Examples include section labels such as `Explore`, `Knowledge`, `Features`, or `About`, even when the audience primarily reads Japanese and there is no product, technical, or naming reason to use English.

The same page may also refer to one concept using multiple forms, such as:

- `Knowledge`;
- `ナレッジ`;
- `知識`.

Repository names, internal project names, and English technical terms may also be surfaced prominently even when they are not useful to the end user.

### Why it feels AI-generated

The English is often serving visual style rather than communication.

Short English labels are common in templates and design examples, so they are easy defaults to reproduce. When inserted without considering the audience, they make the interface feel assembled from generic UI fragments rather than written for a specific user.

Terminology drift makes the problem worse. Mixing English, katakana, and Japanese labels for the same concept suggests that each section was generated independently rather than designed as one coherent interface.

This is not an argument for eliminating English. Terms such as `AI`, official product names, standard technical vocabulary, or intentionally retained brand names may be the clearest choice. The problem is using English automatically when the user's language would communicate the same thing more naturally.

### Preferred approach

For user-facing text:

- prefer the primary language of the target audience unless there is a concrete reason not to;
- do not use English only because it looks concise, modern, or visually familiar;
- do not surface repository names or internal identifiers prominently unless they help the user understand or navigate the product;
- choose one user-facing term for each concept and use it consistently across the page;
- treat English, katakana, and translated Japanese forms as separate wording choices that require deliberate selection, not interchangeable decoration;
- preserve English where it is the established or clearest form, including product names, acronyms, code-related terms, and technical vocabulary when translation would reduce clarity.

Language choice should follow the audience and the meaning of the content, not a generic interface aesthetic.

## Status

This is an evolving set of guidelines based on observations from actual work on this repository.

Future rules should be added only as recurring AI-design patterns are identified in practice.
