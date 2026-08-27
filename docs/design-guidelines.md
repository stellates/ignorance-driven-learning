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

## Status

This is the first observation in an evolving set of guidelines.

Future rules should be added only as recurring AI-design patterns are identified in actual work on this repository.
