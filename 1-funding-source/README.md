# 1 Funding Source — Landing Page Funnel

**Client:** OneFunding LLC (1 Funding Source)
**Project Type:** Direct-Response Landing Page
**Framework:** PAS (Problem → Agitate → Solve)
**Traffic Source:** Meta / LinkedIn Ads (Interruption-Based)
**Conversion Goal:** Lead submits form → books consultation via GHL page

---

## Folder Structure

```
1-funding-source/
├── index.html              ← Main landing page (8 sections)
├── css/
│   └── style.css           ← Full design system + responsive styles
├── js/
│   └── script.js           ← Nav scroll, live ticker, FAQ accordion, scroll reveal
├── assets/
│   ├── images/
│   │   ├── hero-warehouse.jpg   ← Section 1 & 6 (Step 1) hero image
│   │   ├── hero-checkout.jpg    ← Section 1 & 6 (Step 2) checkout image
│   │   └── hero-pos.jpg         ← Section 1 & 6 (Step 3) POS terminal image
│   ├── fonts/              ← (empty — using Google Fonts CDN: Inter)
│   └── icons/              ← (empty — using inline HTML entities)
└── docs/
    └── implementation_plan.md   ← Full funnel documentation & strategy
```

---

## Funnel Architecture (8 Sections)

| # | Section | PAS Role | Key Element |
|---|---|---|---|
| 1 | **Hero** | Pre-PAS | Dream outcome headline, 3-image collage, live ticker |
| 2 | **Authority Bar** | Credibility | Partner logos + 5 platform stats |
| 3 | **The Problem** | P — Problem | 4 pain cards (dark crimson bg) |
| 4 | **Agitation** | A — Agitate | 3 hard stats ($8K–22K, 1-in-4, 14 days) |
| 5 | **Paradigm Shift** | S — Solve | Light bg, differentiator cards, feature-benefit grid |
| 6 | **How It Works** | Post-PAS | Diagonal zig-zag 3-step layout |
| 7 | **Social Proof** | Trust | 3 detailed testimonials, trust badge row |
| 8 | **The Closer** | Convert | Recap CTA + 6-question FAQ accordion |

---

## Brand Tokens (from onefundingllc.lovable.app)

| Token | Value |
|---|---|
| Background Primary | `#0A0F1E` |
| Accent Purple | `#635BFF` |
| Accent Cyan | `#00D4FF` |
| Pain Section BG | `#1a0505` |
| Solution Section BG | `#F0F9FF` |
| Font | Inter (Google Fonts) |

---

## CTA Destination
All CTA buttons link to:
`https://sites.leadconnectorhq.com/preview/0dIJr5xZgpiy3lsveWs0`
(GoHighLevel form page — lead capture → books consultation call)

---

## JavaScript Features
- **Live ticker** — animates payment volume every ~3 seconds
- **FAQ accordion** — one-at-a-time open/close with smooth animation
- **Scroll reveal** — cards fade up as they enter viewport
- **Nav scroll behavior** — blur/opacity increase after 40px scroll

---

## Open Items (Before Going Live)
- [ ] Replace placeholder testimonials with real client reviews + photos
- [ ] Confirm/source Stripe freeze statistic for Section 4
- [ ] Add real phone number to nav (replace 800-555-0100)
- [ ] Add analytics tracking to CTA click handlers in script.js
- [ ] Test form submission flow on GHL page
- [ ] Mobile QA pass (especially hero section)
