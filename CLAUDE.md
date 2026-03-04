# CLAUDE.md — pikapp.ro

Guidance for AI assistants working on this codebase.

## Project Overview

**Pikapp.ro** is a static landing page for a high-end DJ equipment rental and electronic music event production company based in Bucharest, Romania. The site is conversion-focused, targeting event organizers and promoters looking to hire professional sound systems and DJ setups.

**No build system. No dependencies. No framework.** Pure HTML, CSS, and JavaScript.

## Repository Structure

```
pikapp.ro/
├── index.html      # Single-page site — all content and structure
├── styles.css      # All styles — dark/minimal design system
├── main.js         # All interactions — fade-ins, smooth scroll, form
└── .gitattributes  # Line ending normalization
```

That's it. There are no subdirectories, no configuration files, no package manager, and no build pipeline.

## Technology Stack

| Layer      | Choice                                |
|------------|---------------------------------------|
| Markup     | HTML5 (semantic elements)             |
| Styling    | CSS3 (custom properties, grid/flex)   |
| Scripting  | Vanilla ES5-compatible JavaScript     |
| Fonts      | Google Fonts (Inter + Space Mono) CDN |
| Deployment | Any static file server                |

## Design System (styles.css)

### Color Tokens (CSS custom properties)
```css
--black: #0a0a0a        /* Page background */
--dark: #111111         /* Card backgrounds */
--dark-2: #1a1a1a       /* Borders */
--dark-3: #222222       /* Hover borders, subtle accents */
--gray: #666666         /* Muted text, labels */
--gray-light: #999999   /* Secondary text */
--white: #f0f0f0        /* Body text */
--white-pure: #ffffff   /* Headings, high-emphasis text */
--accent: #e0e0e0       /* Button hover state */
```

### Typography
- **Body font:** `Inter` (weights: 300, 400, 500, 600, 700)
- **Monospace font:** `Space Mono` (weights: 400, 700) — used for labels, nav logo, form labels, gear detail text
- Section labels use `font-family: var(--font-mono)`, `font-size: 0.75rem`, `letter-spacing: 0.15em`, `text-transform: uppercase`

### Spacing Scale
```css
--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 1.5rem
--space-lg: 3rem
--space-xl: 5rem
--space-2xl: 8rem
```

### Layout
- Max content width: `1200px` via `.container`
- Nav height: `64px` via `--nav-height`
- All major sections use `padding: var(--space-2xl) 0` and `border-top: 1px solid var(--dark-2)`

### Responsive Breakpoints (mobile-first)
| Breakpoint | Min-width | Container padding |
|------------|-----------|-------------------|
| Mobile     | 0         | 1.25rem           |
| Tablet     | 640px     | 2rem              |
| Desktop    | 960px     | 3rem              |
| Large      | 1200px    | 4rem              |

## Page Structure (index.html)

The page is a single HTML file with these sections in order:

1. **`<nav>`** — Fixed header; logo (PIKAPP) left, "Get in touch" CTA right
2. **`#hero`** — Full-viewport hero; headline, subtitle, "Request a quote" CTA, animated scroll indicator
3. **`#services`** — Two cards: Equipment Rental and Event Production
4. **`#gear`** — Brand list (Pioneer DJ / Funktion-One / Allen & Heath / PLAYdifferently / Pioneer Pro Audio) + 4 gear cards (Decks, Mixers, Sound, Monitoring)
5. **`#contact`** — Two-column layout: copy + contact email left, inquiry form right
6. **`<footer>`** — Logo, location, Instagram link, email link, copyright

## JavaScript Patterns (main.js)

The entire script is wrapped in an IIFE with `'use strict'` — no globals are exposed.

**Three modules initialized on DOM ready:**

### 1. `initFadeIn()`
- Adds `.fade-in` class to target elements on load
- Uses `IntersectionObserver` (threshold: `0.15`, rootMargin: `0px 0px -40px 0px`)
- Adds `.visible` class when element enters viewport; stops observing after first trigger
- Graceful fallback: if `IntersectionObserver` is unavailable, adds `.visible` immediately
- Stagger containers (`.stagger`) delay child animations via CSS nth-child selectors

### 2. `initSmoothScroll()`
- Intercepts clicks on all `a[href^="#"]` links
- Skips `href="#"` (no-op)
- Offsets scroll position by nav height (`document.querySelector('.nav').offsetHeight`)
- Uses `window.scrollTo({ behavior: 'smooth' })`

### 3. `initForm()`
- Prevents default form submission
- Converts `FormData` to a plain object (not sent anywhere — no backend)
- Hides the form and shows a `.form-success` confirmation div with a fade-in animation
- **Note:** The form does not submit data to any server. Backend integration is not yet implemented.

## Key Conventions

### HTML
- Use semantic elements (`<nav>`, `<section>`, `<footer>`, `<form>`)
- Section IDs match nav anchors: `#services`, `#gear`, `#work`, `#contact`
- All external links use `target="_blank" rel="noopener"`
- Form inputs use `autocomplete` attributes where appropriate
- Open Graph meta tags are in `<head>` with `https://pikapp.ro` as canonical URL

### CSS
- **Always use CSS custom properties** for colors and spacing — never hardcode hex values or pixel sizes that duplicate existing tokens
- **Mobile-first:** write base styles for mobile, override in `@media (min-width: ...)` blocks
- **No border-radius** on buttons or inputs — the design uses sharp corners intentionally
- Hover transitions use `0.2s ease`; fade-in animations use `0.6s ease`
- The `.fade-in` / `.visible` pattern is the standard approach for scroll animations
- Accessibility: use `:focus-visible` (not `:focus`) for keyboard focus styles
- Always include `@media (prefers-reduced-motion: reduce)` overrides for any new animations

### JavaScript
- Keep the IIFE pattern — do not add global variables
- Write ES5-compatible code (no arrow functions, template literals, `const`/`let` at top level)
- Progressive enhancement: features must work or fail gracefully without JS

## Development Workflow

### Running locally
There is no dev server or build step. Serve the files with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (if available)
npx serve .

# Or simply open index.html in a browser
```

### Making changes
1. Edit `index.html`, `styles.css`, or `main.js` directly
2. Refresh the browser — no compilation needed
3. Test at all breakpoints: mobile (320–639px), tablet (640–959px), desktop (960px+)

### Testing checklist before committing
- [ ] Page renders correctly at mobile, tablet, and desktop widths
- [ ] Smooth scroll works for all nav anchor links
- [ ] Fade-in animations trigger correctly on scroll
- [ ] Contact form shows success message on submit
- [ ] No console errors
- [ ] Keyboard navigation works (Tab, focus-visible outlines appear)
- [ ] Test with `prefers-reduced-motion` enabled (animations should be disabled)

## Content

### Business details
- **Brand:** Pikapp
- **Location:** Bucharest, Romania
- **Services:** DJ equipment rental + electronic music event production
- **Contact email:** contact@pikapp.ro
- **Instagram:** https://instagram.com/pikapp.ro
- **Geographic scope:** Romania (primarily Bucharest and surrounding areas)

### Equipment inventory referenced on site
- **Decks:** Pioneer CDJ-3000, Pioneer CDJ-2000NXS2
- **Mixers:** Pioneer DJM-A9, Allen & Heath XONE:96, PLAYdifferently MODEL 1
- **Sound:** Funktion-One Resolution Series
- **Monitoring:** Pioneer RM Series, KRK

### Event types served
- Club nights
- Festival stages (main and secondary)
- Private events (corporate and personal)
- Warehouse / underground parties

## SEO & Meta

- Page title: `Pikapp — Sound Systems & Event Production`
- Meta description targets "high-end DJ equipment rental" and "electronic music event production in Romania"
- Open Graph tags are set for social sharing
- Canonical URL: `https://pikapp.ro`
- Theme color: `#0a0a0a`

## What Does Not Exist (intentionally)

- No backend / API — the contact form is client-side only
- No CMS — content is hardcoded in `index.html`
- No analytics scripts — none configured
- No favicon — not yet added
- No sitemap.xml or robots.txt
- No tests
- No CI/CD configuration

If asked to add backend form submission, a service like Formspree, Netlify Forms, or a custom endpoint would need to be integrated and the `initForm()` function in `main.js` updated to send a `fetch()` POST request.
