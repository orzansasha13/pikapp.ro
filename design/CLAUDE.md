# pikapp.ro design workspace

This folder is where screens for pikapp.ro get designed and checked. Start Claude Code from inside `design/` so this file, the skills in `.claude/skills/` and the rules in `.claude/settings.json` load.

@day-one.md
@never-list.md
@glossary.md

## Where things live

- Knowledge (read on demand): `.claude/skills/design-principles`, `.claude/skills/specs`, `.claude/skills/voice`
- Procedures: `.claude/skills/generate-design` (makes one screen), `.claude/skills/design-review` (judges one screen)
- Materials and their licences: `materials/` and `materials/LICENSES.md`
- Tools and what each may touch: `connectors.md`
- The order a screen is built in: `build-order.md`
- Why a user comes back, and what we refuse to do: `product-loop.md`
- Output: screens in `screens/<name>/vN.html`, verdicts in `reviews/<name>-vN.md`

## Standing rules

- One fact lives in one file. If you are about to write a value that exists elsewhere, point to that file instead.
- Every colour, size, radius and spacing value comes from `specs`. If a value is missing there, ask. Do not choose one.
- Copy comes from `materials/copy/`. No placeholder or lorem text in a screen.
- The maker never approves its own work. A screen is done only when `design-review` returns no FAIL.
- When you correct something by hand twice, add the missing line to the skill that should have prevented it.
