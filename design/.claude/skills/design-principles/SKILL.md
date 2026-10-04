---
name: design-principles
description: The eight rules pikapp.ro screens are judged by, each with its reason and an example of breaking it. Load before designing, critiquing or reviewing any pikapp.ro screen, or when a question needs judgment rather than a value.
user-invocable: false
---

# pikapp.ro design principles

These answer "is this right for the moment?". Exact values (colours, sizes) live in `specs`, not here. Each rule has a number so a review can cite it.

## 1. Price before persuasion
A standard setup shows its price before any description of it.
**Why:** our difference from Rentech is the all-in price. A promoter comparing options decides on the number in seconds.
**Broken:** the live homepage puts "Get Price on WhatsApp" on every piece of gear, so no price is ever visible.

## 2. One filled button per screen
Only the main action has a filled background. Everything else is a text button.
**Why:** two filled buttons make people stop and choose. Someone on this screen came to book one setup.
**Broken:** the live homepage has a filled green button on each of 11 gear cards.

## 3. The number never grows
The price on screen is the price paid. What it includes (delivery, setup, TVA) sits on the same element as the price, at body size.
**Why:** "tot inclus" is a promise. Conditions in small grey text read as a trick even when they are true.
**Broken:** "1.800 RON" in large type with "livrare și montaj incluse" underneath at 14px grey.

## 4. Gear by its real name
Name the model: CDJ-3000, DJM-V10, Xone:92, EKX. Never an adjective in place of a model.
**Why:** DJs choose by model. A specific name is the credibility; "premium" is not.
**Broken:** "Sistem audio profesional de înaltă calitate".

## 5. Two tracks, never mixed
Standard setups get a price and a date picker. Custom needs get a quote request. The quote route is a text link, never a second filled button.
**Why:** our discovery split 3 and 3: repeat bookers wanted prices, custom clients wanted quotes. One form for both serves neither.
**Broken:** a single form asking everyone to "describe the event and the equipment".

## 6. Dark stage, orange signal
The page is dark. Orange marks the one action and the selected choice, and nothing else.
**Why:** orange is the logo. Used on headings, icons and buttons at once, it stops pointing at anything.
**Broken:** orange headline, orange icons, orange price and orange button on the same screen.

## 7. Readable at the venue
Body text is at least 16px. Text contrast is at least 4.5:1, or 3:1 for text 24px and larger. Tap targets are at least 48px tall.
**Why:** people check this on a phone, at night, in a club or a van.
**Broken:** white text on the WhatsApp green (#25D366) is 1.98:1.

## 8. Ask for the least
A standard booking needs a date and a setup. Nothing else before the message opens.
**Why:** every field between wanting and having is a reason to leave and message a competitor.
**Broken:** the live contact form asks for name, email, phone and event details before showing any price.
