# build-order.md

How a pikapp.ro screen gets built: gather, install, assemble, check, ship. One section per screen.

## rezerva-setup

**The job in one line:** a promoter who already knows us opens the link from Instagram or WhatsApp, picks a date and a setup, sees the all-in price and leaves with a booking message written. Track: standard.

**Where trigger and action meet:** this is the first screen after the link. See `product-loop.md`.

### 1. Gather
- Copy: `materials/copy/rezerva-setup.md`
- Font: Inter Tight from `materials/fonts/`
- Logo: `materials/logo/pikapp-lockup-orange-trimmed.png`
- Reference: the live page copy in `materials/copy/site-copy.md`

### 2. Install
Everything above is already in `materials/` and listed in `LICENSES.md`. Nothing is linked from a chat thread or a desktop.

### 3. Assemble (with `generate-design`)
Build in this order, top to bottom, mobile first at 390px:
1. Header with the logo
2. Title and lead (states what the price includes before anything else)
3. Date chips (Data)
4. Three setup cards with price and conditions; the selected one has the `signal` border
5. The one primary button, "Rezervă pe WhatsApp", which builds the prefilled `wa.me` link from the selected date and setup
6. The custom track as a text button
7. Footer with the legal line

Components used, all from `specs`: date chip, setup card, primary button, text button, logo.

### 4. Check (with `design-review`)
Run `design-review` on the new version. Save the verdict to `reviews/rezerva-setup-vN.md`. Fix every FAIL in a new version, never in place, and run the review again.

### 5. Ship
A version ships when its review shows 0 FAIL. Hand over together: the screen file, its review, the copy file and `LICENSES.md`. A person rebuilds it in Framer; Claude does not publish.

### Log

| Version | Review | Result |
|---|---|---|
| v1 | `reviews/rezerva-setup-v1.md` | 3 FAIL (C1, C3, C4) |
| v2 | `reviews/rezerva-setup-v2.md` | 0 FAIL, ready for handover |

### Step repeated three times (first automation candidate)
Writing the value trace by hand: matching every colour and size in the file back to a line in `specs`. Done for v1, v2 and once while drafting the specs from the live site. Next: a small script that pulls every hex and px value from a screen file and lists anything not in `specs`. Nothing else gets automated yet.
