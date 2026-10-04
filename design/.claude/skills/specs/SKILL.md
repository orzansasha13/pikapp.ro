---
name: specs
description: The source of truth for pikapp.ro values. Colours, type, spacing, radii, components and their states. Load whenever a screen is generated, edited or reviewed, or when someone asks which value or component to use.
user-invocable: false
---

# pikapp.ro specs

Values were read from the live pikapp.ro (Framer, published 12 Mar 2026) and then reduced. If a value you need is not here, ask. Do not pick one.

## Colour

| Token | HEX | Role |
|---|---|---|
| `ink` | #0D0D0D | Page background. Text on `signal`. |
| `surface` | #1C1C1C | Cards and selected chips (white at 6% on `ink`) |
| `line` | #262626 | Borders and dividers (white at 10% on `ink`) |
| `text` | #FFFFFF | Primary text |
| `text-muted` | #ABABAB | Secondary text (white at 65% on `ink`) |
| `signal` | #FF4A00 | The one filled button and the selected choice. Nothing else. |

Contrast, measured:

| Pair | Ratio | Allowed for |
|---|---|---|
| `text` on `ink` | 19.4 | everything |
| `text-muted` on `ink` | 8.5 | everything |
| `text-muted` on `surface` | 7.4 | everything |
| `ink` on `signal` | 5.8 | button labels |
| `text` on `signal` | 3.4 | **not allowed** below 24px |

Print and ink: orange is Pantone 021 C. The sticker file uses #FF4305, which is drift from the screen value; see the open tasks in `materials/LICENSES.md`.

Retired from new screens: #914BF1 and #244DFF (4.2 and 3.3 on `ink`, both fail as text), #25D366 WhatsApp green (white on it is 2.0), #D9D9D9 (no defined role). WhatsApp is named in text, not shown through its colour or logo.

## Type

- Family: **Inter Tight** only (`materials/fonts/`). The live site also loads Inter and Outfit; they are not used in new screens.
- Weights: **500** for body and UI, **700** for titles, prices and button labels.

| Token | Size | Line height | Letter spacing | Use |
|---|---|---|---|---|
| `meta` | 14px | 1.4 | 0 | Legal line, footer. Never prices, conditions or instructions. |
| `body` | 16px | 1.5 | 0 | Body, inputs, buttons, price conditions |
| `title-s` | 22px | 1.2 | -0.02em | Card titles, prices |
| `title` | 32px | 1.05 | -0.03em | Screen title |
| `display` | 54px | 1.0 | -0.03em | Desktop hero only |

Case: sentence case in Romanian ("Rezervă pe WhatsApp", not "Rezervă Pe WhatsApp"). No all-caps in UI text.

## Space, radius, layout

- Spacing steps: 4, 8, 12, 16, 24, 32, 48, 64 px. Nothing in between.
- Radius: `radius-s` 8px (buttons, chips, inputs), `radius-l` 20px (cards).
- Mobile first at 390px wide. Page padding 16px. Booking content max width 560px, centred on desktop.
- Tap targets at least 48px tall.

## Components

**Primary button.** `signal` fill, `ink` label, `body` size at weight 700, height 56px, `radius-s`, full width on mobile. One per screen.
States: hover underlines the label; focus shows a 2px `text` outline offset 2px; disabled uses `surface` fill and `text-muted` label.

**Text button.** No fill, `text` colour, `body` 500, underlined, at least 48px tall. Used for every secondary action.

**Date chip.** 48px tall, `radius-s`, 1px `line` border, `body` 500.
States: selected has a 2px `signal` border on `surface`; focus as primary button.

**Setup card.** `surface` fill, `radius-l`, 1px `line` border, 16px padding. Contains: name (`title-s`), gear list with model names (`body`), price (`title-s` 700, `text` colour) with its conditions directly under it (`body`, `text-muted`).
States: selected has a 2px `signal` border and a `signal` check mark; unavailable shows "ocupat pe <data>" in `text-muted` and cannot be selected.

**Logo.** `materials/logo/pikapp-lockup-orange-trimmed.png`, 24px tall in headers. Never recoloured.

## Motion

State changes (border, check mark) take 150ms ease-out. Nothing animates on load. Under `prefers-reduced-motion` nothing animates.
