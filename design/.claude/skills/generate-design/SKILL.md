---
name: generate-design
description: Builds one pikapp.ro screen as a single HTML file from the brief, using only values from specs and copy from materials. Use when asked for a new screen, a new version of a screen, or a mockup for pikapp.ro.
argument-hint: "[screen-name]"
arguments: [screen]
---

# generate-design

**One job:** build one screen. Not two, not a flow.

## Read first, every time

1. `day-one.md` and `never-list.md`
2. `.claude/skills/design-principles/SKILL.md`
3. `.claude/skills/specs/SKILL.md`
4. `.claude/skills/voice/SKILL.md`
5. `materials/LICENSES.md` (what you may use) and `materials/copy/` (the words)
6. `build-order.md` if it has a section for `$screen`

## Steps

1. Restate the job in one line: who arrives, from where, and the one thing they leave having done. Name the track (standard or personalizată).
2. List the components from `specs` you will use. If you need one that does not exist, stop and ask.
3. Find the copy for `$screen` in `materials/copy/`. If a string is missing, ask for it. Do not write lorem or invent prices.
4. Build `screens/$screen/vN.html` (next free N). One self-contained file: declare every spec token as a CSS custom property at the top and use only those properties below. Load the font from `../../materials/fonts/` and the logo from `../../materials/logo/`.
5. Write a value trace at the bottom of the file, as an HTML comment: every colour, size, radius and spacing value used, with the spec line it comes from.
   For every label on a filled background, also write the pair and its ratio from the `specs` contrast table. A token that exists is not automatically a token that is allowed there.
6. Hand the file to `design-review`. Do not judge it yourself.

## Never

- Invent a colour, size, radius or spacing step.
- Use an asset or font that is not in `materials/LICENSES.md`.
- Show a price without its conditions on the same element.
- Add a second filled button, urgency, or a form in front of a standard price.

## Done when

Every value in the trace points to a line in `specs`, and `design-review` returns no FAIL for this version. Until then the screen is a draft, whatever it looks like.
