# pikapp.ro design workspace

0205EE, Building with No-Code: the folders and guardrails for building better design, applied to pikapp.ro (BASS MVNT S.R.L.).

pikapp.ro today is the rental site, so the screen and the product loop are about booking DJ and sound gear.

## Homework checklist

| Deliverable | Where |
|---|---|
| `product-loop.md` | [product-loop.md](product-loop.md) |
| One screen built with `generate-design` | [screens/rezerva-setup/v2.html](screens/rezerva-setup/v2.html) (screenshot below) |
| `design-review` output with at least one fail | [reviews/rezerva-setup-v1.md](reviews/rezerva-setup-v1.md): 3 FAIL, then [v2](reviews/rezerva-setup-v2.md): 0 FAIL |
| One sentence: the mechanic we refuse | below, and in [never-list.md](never-list.md) line 2 |

> In my product I will use a one-message booking with the all-in price already written, and I will never use fake availability pressure, because a client who books under a false "last set" will not trust our "tot inclus" price either.

| v1 (3 FAIL) | v2 (0 FAIL) |
|---|---|
| ![v1](screens/rezerva-setup/v1-mobile.png) | ![v2](screens/rezerva-setup/v2-mobile.png) |

## The eight steps, one file each

| Step | Layer | File |
|---|---|---|
| 01 context | L1 knowledge | [day-one.md](day-one.md), [glossary.md](glossary.md), [never-list.md](never-list.md) |
| 02 materials | L1 knowledge | [materials/](materials/), [materials/LICENSES.md](materials/LICENSES.md) |
| 03 knowledge | L1 knowledge | [.claude/skills/design-principles](.claude/skills/design-principles/SKILL.md), [.claude/skills/specs](.claude/skills/specs/SKILL.md), [.claude/skills/voice](.claude/skills/voice/SKILL.md) |
| 04 skills | L2 skills | [.claude/skills/generate-design](.claude/skills/generate-design/SKILL.md) |
| 05 connectors | L3 connectors | [connectors.md](connectors.md), [.claude/settings.json](.claude/settings.json) |
| 06 agents | L2 skills | [.claude/skills/design-review](.claude/skills/design-review/SKILL.md) |
| 07 building | L2 + L3 | [build-order.md](build-order.md), [screens/](screens/), [reviews/](reviews/) |
| 08 product loop | L1 knowledge | [product-loop.md](product-loop.md) |

[CLAUDE.md](CLAUDE.md) is read at the start of every session and loads `day-one.md`, `never-list.md` and `glossary.md`.

## Guardrails

- **Written:** `never-list.md` (six refusals), the "never" column in `connectors.md`, the "Never" section in each skill, the "done when" condition in `generate-design`.
- **A judge that can say no:** `design-review` runs in its own subagent (`context: fork`), has not seen how the screen was made, cannot edit files, and returns PASS or FAIL per rule with evidence.
- **Enforced by Claude Code** (`.claude/settings.json`): Claude cannot run `git push`, cannot read `.env` files, and must ask before changing anything in `materials/`.

Skills live in `.claude/skills/<name>/SKILL.md`, the location Claude Code loads project skills from. The knowledge skills are `user-invocable: false`, so they load on demand and do not clutter the `/` menu.

## How to use it

```bash
cd design
claude
```

Then, inside Claude Code:

```
/generate-design rezerva-setup
/design-review screens/rezerva-setup/v2.html
```

Open the screens straight from the folder in a browser; they load the font and logo from `materials/`.

## Open tasks

See the bottom of [materials/LICENSES.md](materials/LICENSES.md): sources for the 19 gear photos on the live site, the sticker orange drift (#FF4305 vs #FF4A00), and confirming setup contents and prices before the screen goes live.
