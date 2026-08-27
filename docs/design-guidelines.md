# Anti-AI Design Guidelines

This document records visual patterns that make AI-generated websites look generic, artificial, or unnecessarily designed.

It is a research note and a local design rulebook for this repository. The rules should grow from actual observations made while reviewing and improving this site, not from bulk-generated generic design advice.

The goal is not to reject modern web design. The goal is to notice recurring AI defaults, explain why they feel generic, and replace them with choices that fit the actual purpose of the page.

## AI instructions

Read this section before making any user-facing design change.

These instructions are the operational summary. The detailed rules and research history below explain how these constraints were derived and may be consulted when more context is needed.

- Do not add interface elements by convention alone. Every visible element must have a clear user-facing job.
- Avoid oversized hero sections unless the page has a specific reason to prioritize a campaign-like first impression.
- Do not switch languages for visual style alone. Prefer the target audience's primary language unless a semantic, product, technical, brand, or audience reason justifies another language.
- Keep terminology consistent. Use one canonical user-facing label for the same concept unless the meaning, scope, or action is genuinely different.
- Do not add explanatory prose that merely restates what a component already communicates through its label, position, hierarchy, context, or interaction.
- Prefer improving labels, structure, grouping, hierarchy, or affordance before adding explanatory text.
- Before the initial implementation, agree with the user on the styling strategy instead of choosing one silently.
- Offer these baseline choices when no project-specific design system already exists: AI-authored custom CSS, Bootstrap via CDN, Pico CSS via CDN, or Bulma via CDN.
- When the user does not express a preference, prefer a framework-only baseline over AI-authored custom CSS. Bootstrap is the safe default for familiarity and ecosystem breadth; Bulma is a strong alternative when CSS-only readability is preferred; Pico CSS is suitable when a minimal semantic baseline is the goal.
- Treat the chosen framework as a constraint, not as a component catalog. Do not add cards, badges, navbars, alerts, or other framework components merely because they are available.
- Custom CSS is the last resort, not the next design step. First use semantic HTML, then the framework's standard elements, utilities, modifiers, variables, or supported customization mechanisms.
- Add custom CSS only for a specific user-facing requirement that the selected framework cannot reasonably satisfy, and keep it narrowly scoped to that requirement.
- Prefer removing unnecessary UI over decorating or narrating it.
- Preserve exceptions when they serve a real usability, product, technical, brand, accessibility, or audience requirement.
- When these guidelines conflict with a real requirement, the requirement wins.

Before finalizing a design change, ask:

1. What job does each visible element perform for the user?
2. Is any layout pattern present only because it is a familiar default?
3. Is any language switch decorative rather than communicative?
4. Are the same concepts named consistently across the interface?
5. Does any sentence merely explain what the component already makes clear?
6. Could clarity be improved by changing the component itself instead of adding more text?
7. Was the styling strategy agreed with the user before implementation?
8. Is any framework component present only because the framework provides it?
9. Before adding custom CSS, have the framework's own standard elements, utilities, modifiers, variables, or supported customization mechanisms been exhausted reasonably?
10. What specific user-facing requirement requires custom CSS?

If an element cannot justify its presence beyond convention, polish, or explanation of the interface itself, revise or remove it before implementation.

---

## Research notes and rule history

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

## Rule 2: Avoid decorative use of a secondary language

### Pattern

AI-generated interfaces often insert short words or labels from a secondary language into an otherwise single-language interface even when the language switch adds no meaning.

On a Japanese-facing page, this may appear as English section labels such as `Explore`, `Knowledge`, `Features`, `Overview`, or `Discover`. These examples are not prohibited words. The pattern is the use of a secondary language primarily because it looks concise, modern, familiar, or visually "designed".

The same pattern can occur in any language pair. What matters is whether the language switch serves the user or merely serves the composition.

### Why it feels AI-generated

Short English labels are heavily represented in templates, design-system examples, landing pages, and generated UI samples. They are therefore easy defaults for a model to reproduce without checking whether the target audience actually benefits from them.

The result can feel like an interface assembled from familiar design fragments rather than one written for its actual users. The secondary language becomes visual decoration instead of communication.

This rule is not anti-English and does not require translating everything into the audience's primary language. A secondary-language term may be the clearest choice when it is an official product name, acronym, brand, code-related term, established technical vocabulary, quotation, or domain-standard wording.

### Preferred approach

For user-facing interface text:

- prefer the target audience's primary language by default;
- require a semantic, product, technical, brand, or audience reason before switching languages;
- do not introduce a secondary language solely because the label looks shorter, more modern, more familiar, or more visually polished;
- evaluate each language switch in context rather than maintaining a blacklist of particular words;
- preserve established names and terminology when translation would reduce clarity or accuracy.

The useful question is not "Is this English word allowed?" but "Why is this label in a different language from the surrounding interface?"

## Rule 3: Keep terminology consistent within the interface

### Pattern

AI-generated interfaces may refer to the same user-facing concept with different terms in different parts of the page or site.

Examples include:

- `Knowledge`, `ナレッジ`, and `知識` for the same destination or concept;
- `Home` and `トップ` for the same navigation target;
- `Settings` and `設定` for the same feature;
- different labels for the same action, content type, or navigation level without a meaningful distinction.

The inconsistency may cross languages, but language mixing is not required. The same problem can occur entirely within Japanese or entirely within English.

### Why it feels AI-generated

Generated sections can be locally plausible while remaining globally inconsistent. A label may sound reasonable in isolation, yet differ from wording used elsewhere for the same concept.

This makes the interface feel like a collection of independently generated fragments rather than a single system with deliberate vocabulary. It can also create real usability problems by making users wonder whether two different labels refer to different things.

Terminology consistency is therefore a content-design issue as much as a visual-design issue.

### Preferred approach

For each user-facing concept:

- choose a canonical label and reuse it consistently across navigation, headings, buttons, cards, and explanatory text when they refer to the same thing;
- do not alternate between English, katakana, translated Japanese, abbreviations, or synonyms merely for variety;
- use a different term only when the underlying meaning, scope, or action is actually different;
- preserve official names and quoted terminology where exact wording matters;
- when revising a label, check nearby and related UI for older variants rather than changing only the local instance.

Consistency should not flatten meaningful distinctions. The goal is to avoid accidental naming drift, not to force genuinely different concepts into one label.

## Rule 4: Do not turn components into explanatory prose

### Pattern

AI-generated interfaces often treat components as containers for explanations rather than as interface elements with a clear job.

A simple card, list item, navigation block, button group, or section may accumulate several layers of text at once:

- a category or meta label;
- a heading;
- a sentence that restates the heading;
- a second sentence explaining what the user can already infer from the label or interaction;
- an additional note, hint, or CTA.

For example, a navigation card labeled "View knowledge" may also include a sentence such as "Browse the things you did not know by category" even when the destination and context already make that function obvious.

The individual sentences may be reasonable in isolation. The pattern is the repeated addition of prose to components that do not need prose to perform their role.

### Why it feels AI-generated

Language models are optimized to explain. When generating UI, that strength can become a default behavior: uncertainty about whether a component is self-explanatory is resolved by adding another sentence.

This produces interfaces that read like annotated mockups. Instead of communicating through hierarchy, labels, grouping, affordances, and interaction, the design explains itself in text.

The result is often verbose without being more useful. It increases visual density, weakens scanning, makes every component feel equally important, and can hide weak information architecture behind explanatory copy.

A component is not a comment. User-facing UI should not contain implementation-style narration merely to reassure the designer that the component's purpose is understandable.

### Preferred approach

When designing or reviewing a component:

- first ask whether its role is clear from its label, position, visual hierarchy, surrounding context, and interaction;
- if the heading or action label already communicates the purpose, do not add a sentence that merely paraphrases it;
- treat explanatory text as optional content that must justify its presence, not as a default subcomponent;
- prefer changing the label, grouping, structure, or affordance when a component is unclear instead of immediately adding instructions;
- keep supporting text when it adds information the user could not otherwise know, such as consequences, constraints, prerequisites, unusual behavior, or meaningful context;
- remove persistent hints and commentary that only describe what the interface visibly does;
- review cards and repeated components especially aggressively, because one unnecessary sentence becomes many unnecessary sentences when the pattern repeats.

Before adding explanatory copy, ask: "What information does this sentence provide that the component does not already communicate?"

If the answer is only a restatement of the component itself, remove it.

## Rule 5: Agree on the styling strategy before implementation

### Pattern

AI-generated interfaces often begin by choosing a styling approach silently and immediately. The model may invent custom CSS before the page's structure and interaction have earned one, or it may choose a familiar framework and then treat that framework's component catalog as a design plan.

The first implementation may therefore introduce custom typography, spacing, colors, borders, shadows, rounded corners, hover motion, responsive behavior, and one-off component styling before there is evidence that any of those choices are needed.

The opposite failure can happen after adopting a framework: the interface becomes a showcase of cards, badges, navbars, alerts, pills, accordions, and other components simply because they are readily available.

The problem is not custom CSS, Bootstrap, Pico CSS, Bulma, or any particular tool. The problem is allowing the styling tool to make product and interface decisions before the user has chosen the intended level of visual freedom and before there is a demonstrated need.

### Why it feels AI-generated

Custom CSS gives a model a large design surface on which statistically familiar conventions can accumulate without being requested: oversized typography, generous empty space, rounded white cards, subtle borders, muted labels, small hover lifts, and decorative hierarchy.

A framework-only baseline reduces that freedom and makes the first pass easier to inspect and maintain. It keeps more of the design visible in semantic HTML and framework classes rather than dispersing decisions into a growing custom stylesheet.

However, framework choice is partly a human preference and maintenance decision. Bootstrap, Pico CSS, and Bulma can all produce a sufficiently simple baseline. Choosing one silently merely replaces one AI default with another.

The useful constraint is therefore not "always use Bootstrap". It is "agree on the styling strategy first, then stay inside that strategy as long as reasonably possible."

### Preferred approach

Before the initial user-facing implementation, determine the styling strategy with the user when no project-specific design system or established framework already answers the question.

Offer these choices:

- **AI-authored custom CSS** — use when the user explicitly wants the AI to shape the visual design freely, when an existing visual specification requires it, or when CDN/framework use is not suitable;
- **Bootstrap via CDN** — use as the safe framework default when familiarity, ecosystem breadth, common maintenance knowledge, and a large standard vocabulary are useful;
- **Pico CSS via CDN** — use when the goal is a minimal, semantic, low-ceremony baseline with very little framework markup;
- **Bulma via CDN** — use when a CSS-only framework and readable class-based styling are preferred.

If the user has no preference, prefer a framework-only baseline over custom CSS. Bootstrap is the safe default; Bulma is a strong alternative when CSS-only readability is preferred; Pico CSS is appropriate when minimal semantic styling is the priority.

After choosing a framework:

1. start with semantic HTML;
2. use the framework's ordinary styling and layout;
3. use its existing utilities, modifiers, variables, or supported customization mechanisms;
4. add custom CSS only when a specific user-facing requirement still cannot be reasonably satisfied.

Treat the framework as a constraint, not as a component catalog:

- do not add a framework component merely because it exists;
- prefer plain headings, links, lists, buttons, forms, and layout primitives when they are sufficient;
- validate information structure and interaction before increasing visual complexity;
- keep any custom CSS narrowly scoped to the requirement that justified it;
- do not use the first custom-CSS exception as permission to redesign unrelated parts of the interface.

Custom CSS is the last resort, not the next design step.

Before selecting the styling strategy, ask: "Has the user already chosen or inherited a design system or framework?"

Before adding a framework component, ask: "Does this component solve a real interface problem, or am I using it because it is available?"

Before adding custom CSS, ask: "What specific user-facing requirement cannot be reasonably satisfied by the selected framework and its supported customization mechanisms?"

If there is no concrete answer, keep the simpler baseline.

## Status

This is an evolving set of guidelines based on observations from actual work on this repository.

Future rules should be added only as recurring AI-design patterns are identified in practice.
