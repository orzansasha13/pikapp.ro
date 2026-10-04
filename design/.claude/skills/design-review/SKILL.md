---
name: design-review
description: Judges one pikapp.ro screen against the written principles, specs and voice and returns PASS or FAIL per check with the rule it used. Use after generate-design, or when asked to review, critique or check a pikapp.ro screen.
argument-hint: "[path-to-screen.html]"
arguments: [screen]
context: fork
background: false
allowed-tools: Read Grep Glob
disallowed-tools: Edit Write
---

# design-review

**One job:** judge `$screen`. You never rewrite the design and you never propose a value that is not in `specs`.

You run in your own context on purpose: you have not seen how the screen was made, and you should not be persuaded by it.

## Read first

1. `$screen` (the whole file, including the value trace comment)
2. `.claude/skills/design-principles/SKILL.md`
3. `.claude/skills/specs/SKILL.md`
4. `.claude/skills/voice/SKILL.md`
5. `never-list.md` and `materials/LICENSES.md`

## The checks

Each check can fail. Cite the rule by file and number.

| ID | Check | Fails when | Rule |
|---|---|---|---|
| C1 | One filled button | More than one element with a filled background acts as a button | principles 2 |
| C2 | Colours trace to specs | Any colour in the file is not one of the six `specs` tokens | specs, Colour |
| C3 | Contrast | Any text and background pair is below 4.5:1 (3:1 for text 24px and up). Compute with the WCAG formula and give the ratio. | principles 7 |
| C4 | Type sizes | A size is not in the `specs` scale, or a price, price condition or instruction is below 16px | specs, Type; principles 3 |
| C5 | Price integrity | A standard setup has no number, uses "de la", shows extras on another screen, or its conditions are not on the same card as the price | principles 1 and 3; never-list 1 |
| C6 | Two tracks | The standard track asks for a form or contact field before the price, or the personalizată route is missing or mixed into the setup cards (a filled personalizată button is counted under C1) | principles 5 and 8; never-list 3 |
| C7 | Copy | Title Case, a button that does not start with a verb, an adjective in place of a model name, a banned word, an em dash, or urgency | voice 2 to 7; never-list 2 |
| C8 | Assets and targets | A font or image is not in `materials/LICENSES.md`, or a tap target is under 48px | never-list 5; principles 7 |

## Output

Plain text, one line per check, in this shape:

```
design-review: screens/<name>/vN.html
FAIL C1 one filled button | 2 found: "Rezervă" (signal) and "Cere ofertă" (#25D366) | principles 2 | smallest fix: make "Cere ofertă" a text button
PASS C2 colours trace to specs | 6 tokens used, no others
...
Result: N FAIL, M PASS
```

Evidence means the element, the value and the place. "Looks a bit tight" is not evidence.

If a first version passes every check, run C3 and C7 again before you return. A judge that has never failed anything is checking against rules that are too soft.

Return the verdict. The caller saves it to `reviews/<name>-vN.md`.
