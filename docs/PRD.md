# Enginsight Website — Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** April 2026  
**Status:** In progress  
**Owner:** Enginsight GmbH  

---

## 1. Overview

### 1.1 Product summary

A production-ready multi-page marketing website for Enginsight GmbH, a German cybersecurity company offering a security operations platform (Core IDS/IPS, SIEM, MDR, and Pentesting). The site targets IT managers, security leads, and CISOs at mid-market companies (300–3,000 employees) in Germany, with a secondary audience of MSP/MSSP partners.

### 1.2 Goals

| Goal | Metric |
|------|--------|
| Generate demo booking leads | Primary CTA conversion: "Book a 15-min demo" |
| Build trust with regulated buyers | NIS2/ISO27001/TISAX compliance evidence visible in first scroll |
| Partner acquisition | "Become a partner" flow accessible from nav and footer |
| Support ongoing content additions | Pages built as a consistent system, new pages addable without design debt |

### 1.3 Non-goals

- No CMS integration (static HTML for now)
- No JavaScript framework (React, Vue, etc.) — pure HTML/CSS/JS only
- No e-commerce or self-serve signup
- No i18n (English only for now, German content in copy only)

---

## 2. Design system

All visual decisions are governed by `docs/design.md`. This section summarises the key constraints.

### 2.1 References

The design is inspired by three SaaS marketing sites:
- **datashake.com** — dropdown nav pattern, dashed borders, dense information hierarchy
- **bonsai.com** — alternating L/R feature sections, clean card layouts
- **eigenpal.com** — typography weight, minimal decoration, strong hero headlines

### 2.2 Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Display headings | Plus Jakarta Sans | 800 | clamp(28px, 3.5vw, 48px) |
| Hero H1 | Plus Jakarta Sans | 800 | clamp(36px, 5vw, 66px) |
| Body | Inter | 400 | 16px / 17px |
| Section label | Inter | 600 | 12px, uppercase, 0.1em spacing |
| UI data (badges, timestamps) | Courier New | 400/500 | 8–11px |

### 2.3 Colour palette

Primary accent: `#E8195A` (Enginsight pink)

Full token list in `docs/design.md §Colours`.

### 2.4 Layout

- Max width: `1200px`, centered
- Container padding: `48px` desktop, `24px` mobile (≤900px)
- Section padding: `88px 0` standard
- Grid: 2-column `1fr 1fr` for feature sections, 3-column for cards, 4-column for footer

### 2.5 Visual component philosophy

All UI data visualisations are built from pure SVG/HTML/CSS/JS. **No raw app screenshots are embedded.** Every visual:
- Matches data from the live Enginsight app
- Animates on scroll via `IntersectionObserver`
- Runs without any chart library (vanilla SVG)

---

## 3. Pages — current state

### 3.1 Homepage (`pages/index.html`) ✅ Complete

**URL:** `/`

| Section | Status | Visual component |
|---------|--------|-----------------|
| Nav | ✅ | Datashake-style dropdown, 4 menus |
| Hero | ✅ | Host dashboard (arc gauges + donut + sparkline) |
| Logos strip | ✅ | Static text logos |
| Stats ticker | ✅ | 4 animated counters (587k / 99% / <15min / 12mo) |
| Core feature | ✅ | IDS stacked bar chart (48 bars, live anomaly table) |
| SIEM feature | ✅ | Attack chain correlation (before/after) |
| MDR feature | ✅ | Response timeline comparison (11h vs 11min) |
| Pentest feature | ✅ | Risk assessment panel (score ring, findings table) |
| Dark section | ✅ | Attack donut dashboard (3 donuts: countries/severities/action) |
| Where to start | ✅ | 3 cards (Core / Core+SIEM / +MDR) |
| Social proof | ✅ | 4 quote cards with metrics |
| Compliance strip | ✅ | 6 compliance badges (NIS2, ISO27001, DORA, TISAX, BSI, DSGVO) |
| CTA | ✅ | Dark gradient with pattern, white primary button |
| Footer | ✅ | 4-column grid + bottom bar |

### 3.2 Pentesting (`pages/pentesting.html`) ✅ Complete

**URL:** `/pentesting`

| Section | Status | Visual component |
|---------|--------|-----------------|
| Nav | ✅ | Same as homepage, Pentesting marked as current |
| Hero | ✅ | Pentest audit dashboard (A-260330, sidebar bars, findings rows) |
| Problem comparison | ✅ | Traditional vs Enginsight 2-col comparison |
| Dark / how it works | ✅ | Terminal scan output (animated live scan) |
| Web app testing | ✅ | Score panel (risk ring 574, severity bars, findings table) |
| Network testing | ✅ | Network summary (sidebar filters + findings table) |
| Use cases | ✅ | 6 cards (KRITIS, TISAX, E-Commerce, Healthcare, Finance, Public) |
| Compliance mapping | ✅ | 2 cards (NIS2 + ISO27001/DORA/TISAX) |
| FAQ | ✅ | 6 items, 2-column |
| CTA | ✅ | Dark gradient, "Book a pentest" |
| Footer | ✅ | Same as homepage |

---

## 4. Pages — backlog

These pages are defined in the copy document (`enginsight_website_copy_paste_TEIL_2.docx`) but not yet built. Each follows the product page template in `docs/design.md §Product Page Structure`.

### 4.1 Core product page

**URL:** `/core`  
**Priority:** High  
**Hero visual to build:** Host monitoring overview with IDS panel  
**Key sections:** 4 pillars (Network IDS, FIM, CVE scanning, System monitoring), dashboard highlights, deployment timeline  

### 4.2 SIEM product page

**URL:** `/siem`  
**Priority:** High  
**Hero visual to build:** SIEM Data Lake live log stream with pink histogram  
**Key sections:** Before/after correlation (expanded version), feature 4-pack, vs Enterprise SIEM comparison  

### 4.3 MDR product page

**URL:** `/mdr`  
**Priority:** High  
**Hero visual to build:** SIEM incident timeline (account created → deleted → condition fulfilled)  
**Key sections:** Timeline comparison (expanded), benefit cards, for-whom section  

### 4.4 Platform overview

**URL:** `/platform`  
**Priority:** Medium  
**Content:** How Core + SIEM + MDR + Pentest work as a stack  

### 4.5 Industry / solution pages (6 total)

| URL | Industry | Key visual |
|-----|----------|-----------|
| `/kritis-energieversorger` | Energy / SCADA | OT network diagram |
| `/healthcare-medizin` | Healthcare | Med-device VLAN monitoring |
| `/produktion-manufacturing` | Manufacturing | Office↔OT boundary IDS |
| `/oeffentliche-verwaltung` | Public sector | NIS2 compliance evidence |
| `/finanzdienstleister` | Finance | DORA/BaFin audit trail |
| `/handel-logistik` | E-commerce | DDoS early warning |

### 4.6 Compliance pages (2 total)

| URL | Regulation |
|-----|-----------|
| `/nis2-compliance` | NIS2 technical measures mapping |
| `/isms-iso-27001` | ISO 27001 Annex A control evidence |

### 4.7 Partner pages (3 total)

| URL | Page |
|-----|------|
| `/partner-modell` | Why the partner model works |
| `/partner-finden` | Partner finder with filter |
| `/partner-werden` | Become a partner (MSP/MSSP) |

---

## 5. Component library

All reusable patterns are in-file CSS classes. No external component library.

### 5.1 Browser wrap (`.browser-wrap`)

Dark-background window frame with macOS traffic-light dots, URL bar, and action buttons. Used to house every coded visual component.

```html
<div class="browser-wrap">
  <div class="browser-bar">
    <div class="b-dot b-dot-r"></div>
    <div class="b-dot b-dot-y"></div>
    <div class="b-dot b-dot-g"></div>
    <div class="b-url">app.enginsight.com · Path / here</div>
    <div class="b-actions">
      <span class="b-action">Action</span>
    </div>
  </div>
  <!-- visual content here -->
</div>
```

### 5.2 Feature section (`.feat-section`)

Alternating left/right layout. Add `.flip` to `.feat-inner` to reverse column order.

```html
<div class="feat-section">           <!-- add .alt for off-white bg -->
  <div class="feat-inner">           <!-- add .flip for image-right -->
    <div class="feat-visual"> ... </div>
    <div class="feat-copy">   ... </div>
  </div>
</div>
```

### 5.3 Float badge (`.feat-float-badge`)

Small white card that sits below a browser-wrap visual with a coloured dot + text.

```html
<div class="feat-float-badge">          <!-- add .right to pin right -->
  <div class="feat-badge-dot" style="background:#2DC262"></div>
  <div>
    <div class="feat-badge-text">587k attacks detected</div>
    <div class="feat-badge-sub">Last 7 days · IDS active</div>
  </div>
</div>
```

### 5.4 Scroll reveal (`.reveal`)

Any element with `.reveal` fades in from below when scrolled into view. Add `.reveal-delay-1/2/3` to stagger siblings.

### 5.5 Counter (`.js-count`)

```html
<span class="js-count" data-target="587">0</span>
```

Counts from 0 to `data-target` when scrolled into view. Cubic ease-out, 1800ms.

### 5.6 Severity badges

Used inside dark UI panels:

```html
<span class="audit-sev sev-crit">CRITICAL</span>   <!-- red -->
<span class="audit-sev sev-high">HIGH</span>        <!-- orange -->
<span class="audit-sev sev-med">MEDIUM</span>       <!-- amber -->
```

---

## 6. Navigation specification

### 6.1 Dropdown content

| Menu | Items |
|------|-------|
| Products | Core, SIEM, MDR, ── separator ──, Pentesting, Platform overview |
| Solutions | Energy & KRITIS, Healthcare, Manufacturing, Public Sector, Finance, E-Commerce & Logistics |
| Compliance | NIS2, ISO 27001, DORA, TISAX |
| Resources | Whitepapers, Case Studies, Partner Webinars, ── separator ──, Docs |

### 6.2 Rules

- Logo → always `index.html`
- Active page → `eng-nav-link active` class on the correct button
- Current page in dropdown → no `<a>` href, pink title, gray background, "Current page" subtitle
- Dropdowns open on mouseenter + click; close on mouseleave (130ms delay), outside click, or Escape
- Keyboard: Tab into trigger → Enter to open → Escape to close

---

## 7. Animation specification

### 7.1 Scroll reveal

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Triggered by `IntersectionObserver` at `threshold: 0.1`, `rootMargin: '0px 0px -24px 0px'`.

### 7.2 Visual component animations

Each coded component has a dedicated `animate*()` function called when the component's `vis-*` container enters the viewport:

| Function | Animates |
|----------|----------|
| `animateHost()` | Arc gauge `stroke-dasharray`, donut segments, bar fills, vuln count-up |
| `animateIDS()` | Stacked bar heights (48 bars, 12ms stagger) |
| `animateMDR()` | Counter from 0→11h (bad) and 0→11min (good) |
| `animateRisk()` | Score ring, count-up to 574, severity bars |
| `animateAtk()` | 3 donut segment `stroke-dasharray` values |
| `animateAudit()` | Sidebar bars, exec-count from 0→1.2k |
| `animateScore()` | Score ring to 574, severity bars |
| `animateNetwork()` | Sidebar bars |

### 7.3 Floating card animation

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}
/* Each float-card has animation: float 6s ease-in-out infinite */
/* nth-child(2) delays by -2s, nth-child(3) by -4s for phase offset */
```

---

## 8. Known issues / open items

| # | Issue | Priority | File |
|---|-------|----------|------|
| 1 | No mobile/responsive CSS | High | Both pages |
| 2 | Hero right column floats clip at narrow viewports | High | `index.html` |
| 3 | Dropdown menus not keyboard-navigable (Tab through items) | Medium | Both pages |
| 4 | No `<meta og:image>` or social preview tags | Low | Both pages |
| 5 | Font flash on slow connections (no `font-display: swap`) | Low | Both pages |
| 6 | No `404.html` page | Low | Project |
| 7 | Cross-page links for Core/SIEM/MDR go to `#` | Medium | Both pages |
| 8 | Pattern.png requires internet — no local fallback | Low | Both pages |

---

## 9. Pages still to build (priority order)

1. **`/core`** — Core product page (highest traffic product)
2. **`/siem`** — SIEM product page
3. **`/mdr`** — MDR product page
4. **`/nis2-compliance`** — NIS2 page (high SEO value)
5. **`/partner-werden`** — Partner acquisition
6. **`/kritis-energieversorger`** — Largest vertical
7. **`/healthcare-medizin`** — Second largest vertical

Each new page brief is in the copy document (`TEIL 2`), which contains the full H1, sections, CTAs, and feature lists ready to implement.

---

## 10. Working with Claude

This project is designed to be maintained with Claude (claude.ai or Claude in VS Code).

**How to prompt effectively:**

1. **Always reference the section by its CSS class** — e.g. "the `.feat-section` for SIEM" rather than "the second section"
2. **Share the specific block of HTML** you want changed, not the whole file, unless you need a full-page change
3. **Mention the design.md rule** if you want Claude to stay within the system — e.g. "following design.md, add a new start-card"
4. **For new pages**, say "build a new page for `/siem` following the product page structure in design.md, using the copy from TEIL 2"
5. **For visual components**, describe the data and layout, not the visual style — Claude knows the app palette and will recreate it

**Effective prompt examples:**
- "The IDS bar chart animation isn't triggering on scroll. Debug the `animateIDS()` call and the IntersectionObserver setup for `vis-ids`."
- "Add responsive CSS to `index.html` so that at ≤768px the hero grid becomes single-column and the floating cards are hidden."
- "Build `pages/core.html` using the product page structure from design.md and the copy from TEIL 2 for `/enginsight-core`. The hero visual should show the host dashboard component from `index.html`."
- "Update the nav on both pages to add a new dropdown item under Solutions: 'KRITIS' linking to `kritis.html`."
