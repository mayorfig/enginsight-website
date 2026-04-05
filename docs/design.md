# Enginsight Design System
> Extracted from homepage (Version 2, Feb 2026). Reference this before building any page.

---

## Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--pink` | `#E8195A` | Primary CTA buttons, section labels, link accents, hero headline highlight |
| `--pink-hover` | `#C8144E` | Button hover state |
| `--pink-light` | `#FDE8EF` | Icon backgrounds, badge fills, trust-check backgrounds |
| `--pink-mid` | `rgba(232,25,90,0.08)` | Quote card tint, subtle section highlights |
| `--white` | `#FFFFFF` | Default page background, card backgrounds |
| `--off-white` | `#F9F9F7` | Alternate section background (every other section), table headers |
| `--gray-1` | `#F4F4F2` | Hover states on nav links, subtle fills |
| `--gray-2` | `#E8E8E4` | — |
| `--gray-3` | `#C4C4BC` | Muted logo text, decorative |
| `--gray-4` | `#8C8C84` | Footer links, table metadata, secondary labels |
| `--gray-5` | `#5C5C54` | Body copy, sub-headings, descriptions |
| `--gray-6` | `#2C2C28` | Nav items, strong body text |
| `--black` | `#111110` | H1/H2, nav logo, headings |
| `--border` | `#E4E4DC` | All borders, dividers, table lines |

### Dark panel (hero right, attack chain mockup)
Background layers: `#1A0A10 → #2D0F1E → #1E0C28` (diagonal gradient)
Text on dark: `rgba(255,255,255,0.65)` body, `rgba(255,255,255,0.35)` meta
Accent on dark: `#FF8FAF` (pink lightened), `#FFBA45` (amber), `#5CDB85` (green), `#FF6B6B` (red)

---

## Typography

**Font family:** `Inter` (Google Fonts) — weights 300, 400, 500, 600, 700  
**Rendering:** `-webkit-font-smoothing: antialiased`

| Style | Size | Weight | Letter-spacing | Line-height | Usage |
|-------|------|--------|----------------|-------------|-------|
| Hero H1 | `clamp(32px, 4vw, 52px)` | 700 | `-0.025em` | `1.08` | Hero headline only |
| Section H2 | `clamp(24px, 3vw, 40px)` | 700 | `-0.025em` | `1.1` | Every section title |
| Product title | `26px` | 700 | `-0.02em` | `1.2` | Product block headings |
| Card title | `17px` | 600 | `-0.01em` | `1.3` | Start/feature card titles |
| Body | `16px` | 400 | `0` | `1.65` | Section sub-copy |
| Small body | `14–15px` | 400 | `0` | `1.65` | Product descriptions |
| Section label | `12px` | 500 | `0.08em` | — | Uppercase pink labels above H2 |
| Card label | `11px` | 500 | `0.08em` | — | Uppercase gray labels in cards |
| Monospace | `'Courier New', monospace` | 400/500 | varies | — | Timestamps, CVE IDs, badges, terminal text |

---

## Spacing & Layout

- **Max width:** `1200px`
- **Container padding:** `0 48px` (desktop), `0 24px` (≤900px)
- **Section padding:** `96px 0`
- **Nav height:** `60px`
- **Border radius:** `--radius: 8px`, `--radius-lg: 12px`
- **Grid gap (2-col):** `64–80px`
- **Grid gap (cards):** `16–20px`
- **Card padding:** `24px`
- **Shadow sm:** `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`
- **Shadow:** `0 4px 16px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)`

---

## Navigation

- Fixed, `backdrop-filter: blur(12px)`, white 95% opacity
- Logo: Enginsight SVG mark (pink square) + wordmark
- Links: 14px, `--gray-5`, hover → `--black` + `--gray-1` background
- Chevron `▾` on dropdown items, opacity 0.5; rotates 180° when open
- Right: language selector | "Log in" ghost button | "Request a demo" pink button
- Lang selector and Log in: ghost style with border
- Demo CTA: `--pink` fill, white text, 13px

### Dropdown menu (Datashake-style)

Triggered on hover (desktop) over nav items with `▾`. 

**Panel:**
- Background: `--white`
- Border: `1px dashed --border` (dashed, matching Datashake reference)
- Border-radius: `--radius-lg` (12px)
- Box-shadow: `0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)`
- Padding: `8px`
- Min-width: `240px`
- Position: absolute, top 100% + 8px gap, left-aligned to the trigger
- Animated: opacity 0→1, translateY(-4px)→0, duration 150ms ease

**Each menu item:**
- Padding: `10px 12px`
- Border-radius: `8px`
- Hover background: `--gray-1`
- Layout: flex row, `gap: 12px`, align-items: center

**Item icon:**
- Size: `32px × 32px`, border-radius `8px`
- Background: `--pink-light` (default) or contextual tint
- Contains a small SVG icon (14×14px), stroke `--pink`

**Item text block:**
- Title: `14px`, weight `500`, color `--black`
- Subtitle: `13px`, color `--gray-4`, margin-top `1px`

**Dropdown map:**

| Nav item | Dropdown items |
|----------|---------------|
| Products | Core · Continuous threat detection / SIEM · Event correlation / MDR · 24/7 SOC / Pentesting · Find vulnerabilities first / Platform overview |
| Solutions | Energy & KRITIS / Healthcare / Manufacturing / Public Sector / Finance / E-Commerce & Logistics |
| Compliance | NIS2 / ISO 27001 / DORA / TISAX |
| Resources | Whitepapers / Case studies / Partner webinars / Docs |

Partners and Docs are plain links (no dropdown).

---

## Buttons

| Variant | Background | Text | Border | Padding | Border-radius |
|---------|-----------|------|--------|---------|---------------|
| Primary (large) | `--pink` | white | none | `11px 20px` | `8px` |
| Primary (small) | `--pink` | white | none | `9px 16px` | `8px` |
| Outline (large) | `--white` | `--gray-6` | `1px solid --border` | `11px 20px` | `8px` |
| Outline (small) | `--white` | `--gray-6` | `1px solid --border` | `9px 16px` | `8px` |
| Nav ghost | transparent | `--gray-6` | `1px solid --border` | `7px 14px` | `8px` |
| Nav primary | `--pink` | white | none | `8px 16px` | `8px` |

Hover: pink buttons darken to `--pink-hover`. Outline buttons get `--gray-1` background.

---

## Section Patterns

Every section follows the same atomic structure:

```
[section-label]   ← 12px, uppercase, pink, letter-spacing 0.08em
[H2]              ← large, bold, tight tracking
[section-sub]     ← 16px, --gray-5, max-width 600px
[content]         ← grid / cards / table
```

### Alternating backgrounds
- **White sections:** Default. Products, Why Enginsight, Data table.
- **Off-white sections:** Gap/Problem, Where to Start, CTA strip, Footer.
- **Dark section:** How it works (pink-section) — used once, mid-page as visual anchor.

---

## Component Library

### Feature card (`.pf-card`)
White bg, `box-shadow: var(--shadow-sm)`, `border-radius: 8px`, `padding: 16px`
- Icon: 32×32px rounded square, tinted background matching section accent
- Title: 13px, weight 600
- Description: 12px, `--gray-5`, line-height 1.5
- Meta: 11px, `--gray-4`
- Grid: 4 columns inside a tinted wrapper (`.product-feats`) with matching bg

### Start card (`.start-card`)
White bg, `border: 1px solid --border`, `border-radius: 12px`, `padding: 24px`
- Label: 11px uppercase gray
- Title: 17px, weight 600
- Sub: 13px, `--gray-5`
- Feature list: dot-prefixed items, 13px
- CTA at bottom

### Quote card (`.ot-quote`)
Background: `--pink-mid`, border: `1px solid rgba(232,25,90,0.12)`, `border-radius: 12px`, `padding: 24px`
- Quote text: 16px italic, `--gray-6`
- Author: 13px, `--gray-4`

### Data table
- Wrapper: `border: 1px solid --border`, `border-radius: 12px`, overflow hidden
- Header bar: off-white bg with title + count badge + action links
- `thead`: 11px uppercase, `--gray-4`, off-white bg
- `tbody td`: 13px, `--gray-6`, hover row → off-white
- Severity badges: coloured pill (CRITICAL red, HIGH amber, MEDIUM yellow, LOW green)
- Status pills: rounded 100px, tinted backgrounds

### Section label component
```css
.section-label {
  font-size: 12px; font-weight: 500; color: var(--pink);
  letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px;
}
```

### Dark mockup panel
- Background: gradient `#1A0A10 → #2D0F1E → #1E0C28`
- Border: `1px solid rgba(255,255,255,0.1)`
- Border-radius: `12px`
- Internal cards: `rgba(255,255,255,0.04–0.07)` fills
- Monospace font throughout
- Status dots: animated `pulse` keyframe (opacity 1 → 0.3 → 1, 2s)

---

## Page Structure (Homepage reference)

```
Nav (fixed, 60px)
Hero          — white bg, 2-col: copy left / dark panel right
Logos strip   — white, thin border top/bottom
Gap/Problem   — off-white, center heading + 2-col
Dark section  — dark gradient, 2-col: copy + mockup  ← visual anchor
Products      — white, stacked product blocks (Core / SIEM / MDR)
Where to start — off-white, 3-col cards
Why Enginsight — white, 2-col: numbered list + quotes
CTA strip     — off-white, 2-col: text + buttons
Data table    — white, full-width table
Footer        — off-white, 4-col grid + bottom bar
```

---

## Product Page Structure (to reuse for all product pages)

```
Nav
Hero              — 2-col: copy left / visual right, pink headline highlight
Breadcrumb        — small gray path e.g. "Home › Products › Pentesting"
Problem statement — off-white, center-aligned, 2-col comparison or list
Dark section      — dark gradient visual anchor with live mockup
Feature blocks    — white, product feature cards in 4-col tinted grid
Use cases         — off-white, 3-col cards
Compliance/proof  — white, 2-col table mapping
CTA strip         — off-white, text + buttons
Footer
```

---

## v4 Enhancements (datashake/bonsai/eigenpal inspired)

### Typography upgrade
- Display font: `Plus Jakarta Sans` (weights 400–800) for all headings
- Body: `Inter` unchanged
- H1 hero: 68px / weight 800 / tracking -0.04em
- Section H2: clamp(28px,3.5vw,48px) / weight 800

### New visual components
- **Browser frame** — dark bezel with macOS-style dots, perspective tilt on hover (`.browser-frame`)
- **Floating cards** — absolutely positioned over browser frame, box-shadow, CSS float animation (`.float-card`)
- **Feat browser** — lighter version for feature sections (`.feat-browser`)
- **Feat float badge** — bottom-left badge over feature screenshots (`.feat-float-badge`)
- **Stats ticker** — bordered grid of 4 animated counters, JS `IntersectionObserver` (`.stats-grid`)
- **Alternating feature sections** — bonsai-style L/R alternation via `.feat-inner.flip { direction:rtl }`
- **Compliance strip** — pill badges that hover pink (`.comp-badge`)
- **Proof cards** — left pink border accent, metric top-right, avatar gradient circles
- **CTA section** — full dark gradient with pattern overlay, white primary button

### Pattern usage
- `pattern.png` used as repeating background texture at `opacity:0.035` in hero
- `opacity:0.25` in dark section (more visible over dark bg)
- `opacity:0.2` in CTA gradient section
- Actual app screenshots used: `app-hosts.png`, `app-ids.png`, `app-siem.png`, `app-issues.png`, `app-endpoints.png`, `app-worldmap.png`

### Scroll animations
- `.reveal` class: `opacity:0; transform:translateY(28px)` → `visible` via `IntersectionObserver`
- `.reveal-delay-1/2/3` for staggered children
- Counter animation: cubic ease-out, 1600ms, targets `.js-count[data-target]`

### Buttons (additions)
- `.btn-white` — white bg, dark text, for dark section CTAs
- `.btn-dark-outline` — transparent + white border, for secondary dark section CTAs
- All primary buttons now have `box-shadow: 0 2px 8px rgba(232,25,90,0.25)`

## Tone & Copy Rules

- Headlines: Direct, urgent, second-person. "Your infrastructure is under attack right now."
- Pink highlight: always on the **question** or **key claim** at the end of the H1
- Section labels: factual category (e.g. "The Problem", "How it works", "Getting started")
- Body copy: short paragraphs, max 2 sentences. No fluff.
- CTAs: specific and time-bounded ("Book a 15-min demo", "Find a partner")
- German compliance terms kept: NIS2, DSGVO, TÜV, BaFin, TISAX — not translated
- "Made in Germany" used as trust signal, not marketing fluff
