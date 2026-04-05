# Enginsight Website — Developer README

> Static HTML/CSS/JS website for Enginsight GmbH.  
> No build tools. No dependencies. Open any `.html` file in a browser or Live Server.

---

## Quick start

```bash
# 1. Open the folder in VS Code
code enginsight-website/

# 2. Install the Live Server extension (if not already installed)
#    VS Code → Extensions → search "Live Server" → install Ritwick Dey's version

# 3. Right-click pages/index.html → "Open with Live Server"
#    Browser opens at http://127.0.0.1:5500/pages/index.html
```

That's it. No npm install, no build step, no config.

---

## Folder structure

```
enginsight-website/
│
├── pages/
│   ├── index.html          ← Homepage (canonical: homepage_v5)
│   └── pentesting.html     ← Pentesting product page (canonical: pentest_v4)
│
├── assets/
│   └── images/
│       └── pattern.png     ← Enginsight brand texture (used as bg overlay)
│
└── docs/
    ├── README.md           ← This file
    ├── PRD.md              ← Full product requirements document
    └── design.md           ← Design system reference (read before editing anything)
```

---

## Pages

| File | URL slug | Status |
|------|----------|--------|
| `pages/index.html` | `/` | ✅ Complete |
| `pages/pentesting.html` | `/pentesting` | ✅ Complete |
| `pages/core.html` | `/core` | 🔲 Not built yet |
| `pages/siem.html` | `/siem` | 🔲 Not built yet |
| `pages/mdr.html` | `/mdr` | 🔲 Not built yet |

---

## Visual assets — coded, not images

All UI data visualisations are built from pure HTML/CSS/SVG/JS. There are **no raw app screenshots** embedded in the pages. Every visual component animates on scroll via `IntersectionObserver`.

| Component | Page | What it shows |
|-----------|------|---------------|
| Host Dashboard | `index.html` hero | Arc gauges (CPU/RAM/SWAP), vulnerability donut, network sparkline, IDS donut |
| IDS Bar Chart | `index.html` Core section | 48-bar stacked histogram (Low/Med/High/Blocked) + anomaly table |
| SIEM Attack Chain | `index.html` SIEM section | Before/after event correlation with animated timeline |
| MDR Timeline | `index.html` MDR section | Without vs With MDR response comparison (11h vs 11min) |
| Risk Assessment | `index.html` Pentest section | Score ring, severity bars, findings table |
| Attack Donuts | `index.html` dark section | 3 IDS donut charts (countries, severities, action) |
| Pentest Audit | `pentesting.html` hero | Full audit dashboard with sidebar severity bars |
| Score Panel | `pentesting.html` web app section | Risk score ring + findings mini-table |
| Network Summary | `pentesting.html` network section | Pentest findings table with sidebar filters |
| Terminal Scan | `pentesting.html` dark section | Animated live scan output |

---

## Only one real image dependency

```
assets/images/pattern.png
```

The Enginsight brand matrix texture. Used as a CSS `background-image` at low opacity in:
- Hero section (`opacity: 0.035`)
- Dark "how it works" section (`opacity: 0.22–0.24`)  
- CTA gradient section (`opacity: 0.18`)

All other visuals are SVG/HTML/CSS.

---

## Fonts (loaded from Google Fonts CDN)

```html
Plus Jakarta Sans — weights 400, 500, 600, 700, 800   (headings)
Inter             — weights 300, 400, 500, 600          (body)
Courier New       — system font                         (monospace: CVE IDs, timestamps)
```

Both pages load fonts via `<link>` in `<head>`. No local font files needed. Requires internet connection to render correctly.

---

## Design tokens (CSS custom properties)

Defined in `:root` at the top of each page's `<style>` block. The canonical reference is `docs/design.md`.

| Token | Value | Usage |
|-------|-------|-------|
| `--pink` | `#E8195A` | Primary accent — buttons, labels, highlights |
| `--pink-hover` | `#C8144E` | Button hover state |
| `--pink-light` | `#FDE8EF` | Icon bg, badge fill |
| `--white` | `#FFFFFF` | Default page bg |
| `--off-white` | `#F8F8F6` | Alternate section bg |
| `--black` | `#0E0E0C` | Headings |
| `--gray-5` | `#5A5A52` | Body copy |
| `--border` | `rgba(0,0,0,0.07)` | All borders |
| `--border-strong` | `rgba(0,0,0,0.12)` | Card borders, inputs |
| `--radius` | `10px` | Default border radius |
| `--radius-lg` | `16px` | Cards, dropdowns |
| `--radius-xl` | `24px` | Large cards |
| `--font-display` | `'Plus Jakarta Sans'` | All headings |
| `--font-body` | `'Inter'` | Body text |
| `--font-mono` | `'Courier New'` | Data, badges, terminal |

App/dark palette (used inside dark UI mockups):
- `--app-bg: #1A1A1A`
- `--app-green: #2DC262` · `--app-red: #FF453A` · `--app-amber: #FFB340` · `--app-blue: #3D8EF0`

---

## Navigation

Both pages share an identical nav component. It is copy-pasted between files (no shared include system — this is static HTML).

**Rules:**
- Logo always links to `index.html`
- Active page is marked with `class="eng-nav-link active"` on the matching nav button
- On `pentesting.html`, the Pentesting dropdown item shows as current (no link, pink title, gray bg)
- Dropdowns open on hover + click, close on outside click or Escape

**To add a new page to the nav:**
1. Add a new `<a class="eng-dd-item">` inside the correct dropdown in both `index.html` and `pentesting.html`
2. Create the new page file under `pages/`
3. Copy the nav block from an existing page and update the `active` class and current-page indicator

---

## Animations

All scroll-triggered animations use `IntersectionObserver` — no libraries.

```js
// Reveal on scroll
.reveal            → opacity 0→1, translateY(24px→0), 0.55s ease
.reveal-delay-1/2/3 → same with 0.1/0.2/0.3s delay

// Counters
<span class="js-count" data-target="587">0</span>
// counts from 0 to data-target on scroll, cubic ease-out, 1800ms

// Visual components animate via animateHost(), animateIDS(), etc.
// triggered by IntersectionObserver on the parent vis-* container
```

---

## Adding a new page

1. Duplicate `pages/pentesting.html` as your starting point
2. Update `<title>`, `<meta name="description">`, and the hero breadcrumb
3. Update the nav: set `active` on the right link, update current-page indicator in the Products dropdown
4. Replace hero copy and visual component
5. Add your feature sections following the `feat-section` / `feat-inner` / `feat-inner flip` pattern
6. Keep backgrounds alternating: white → off-white → white (CSS already handles `feat-section:nth-child(even)`)
7. Always consult `docs/design.md` before introducing any new colours, type sizes, or spacing

---

## Using Claude to make edits

If you want Claude to help edit a specific file, paste the relevant section of HTML/CSS into the chat and say exactly what you want changed. The more specific you are about which component or section, the faster Claude can fix it.

You can also share the full file — Claude can hold the entire codebase in context and make targeted `str_replace` edits.

Useful prompts:
- "Fix the hero grid so the right column is vertically centred"
- "Add a new feature section for the SIEM page between the hero and dark section"
- "The IDS bar chart animation isn't triggering — debug the IntersectionObserver"
- "Update the primary button colour from #E8195A to #D91550"
