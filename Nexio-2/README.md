# Nexio-2 - NEXIO website, Concept 02 - Intelligent Systems

A complete, six-page, responsive concept website for **NEXIO R&D TECH PRIVATE LIMITED**.
Concept tagline: *Connected technology. Clearer possibilities.* | Company tagline: *Innovate. Educate. Elevate.*

Built with **Next.js 15 (App Router) + React 19 + TypeScript**, plain CSS custom properties (design tokens for light and dark), **Motion** for animation, **Lucide** icons and **nodemailer** for server-side email. There is no database, CRM, login, cart or payments.

This is one of three independent concepts (`Nexio-1`, `Nexio-2` and `Nexio-3`). **Live demo:** https://lalviveksingh.github.io/Nexio/Nexio-2/

## Concept identity
- **Personality:** crisp, modular and technology-first, without being a SaaS dashboard.
- **Colour:** white and cool paper `#F6F8FC` canvas. Cobalt `#365CF5` is used precisely for navigation, CTAs and diagrams. Lime `#CBEA63` appears only as small status squares. Midnight `#111C36` is used for type and for selective dark "product stage" panels.
- **Type:** Space Grotesk for headings, Inter for body text, Space Mono for codes and labels.
- **Layout language:** a 12-column grid with static guide lines, framed image modules with "MOD 0X" bars, coded section heads (NX/01...), a hub-and-spoke classroom ecosystem diagram, a category index table and a before/after comparison table.
- **Logo:** the supplied modular NX planes. The midnight plane uses `currentColor` so it stays legible in dark mode.

## Motion (Motion / Framer Motion, one framework)
- Section heads: the hairline draws in (900ms), then the title rises 14px.
- Hero headline word reveal and a mask reveal on framed images.
- Ecosystem diagram: dashed connectors draw in (pathLength), then nodes fade up in sequence.
- Feature Explorer: accessible tabs (arrow keys, Home and End) with a short clip transition when the image swaps.
- Modules lift 4px on hover and a cobalt top edge draws across. Desktop-only parallax on the product stage image.
- Reduced-motion users get opacity-only transitions. Nothing runs perpetually (the grid guides are static).

## Accessibility
- Skip link, semantic landmarks, a single `h1` per page and labelled sections.
- Visible `:focus-visible` rings and touch targets of at least 44px.
- Mobile menu: `aria-expanded` and `aria-controls`, focus moves into the menu and is trapped there, Escape closes it and returns focus, and the body scroll is locked.
- Theme toggle with a dynamic `aria-label`. Catalogue filter chips use `aria-pressed`, with a polite result count.
- Form labels, required markers, inline errors, a focusable error summary and an `aria-live` status.

## Testing performed
- `typecheck`, `lint` and `build` all pass.
- An automated overflow sweep found **no horizontal overflow** on all 6 routes at 360, 390, 430, 768, 1024, 1280, 1440 and 1920px.
- All internal links resolve to the six routes, and every image has `alt` text and fixed aspect ratios (no layout shift). The hero image uses `priority` and the rest lazy-load.
- Checked in the browser:
  - With OS dark mode emulated, the first visit opens light.
  - The saved dark choice survives a reload.
  - The mobile menu opens and closes by keyboard.
  - Empty form submission shows the error summary.
  - A valid submission shows the "not configured" state.
  - The API rejects honeypot, too-fast, invalid and malformed requests.
- **Not verified:** actual email delivery through a real SMTP server, because no credentials are available. Screen-reader passes were not run with NVDA or VoiceOver.

## Requirements
- Node.js 18.18+ (tested with Node 26 / npm 11)

## Setup & run
```bash
npm install
cp .env.example .env.local      # then fill in values (all optional for a local preview)
npm run dev -- -p 3002            # http://localhost:3002
```

## Build & checks
```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint (next/core-web-vitals + typescript)
npm run build       # production build
npm start           # serve the production build
```

## Static demo build (GitHub Pages)
```bash
npm run build:pages     # -> out/ (static export, base path /Nexio/Nexio-2)
```
This mode runs `scripts/build-pages.mjs`. It exports static HTML, moves the server-only `src/app/api` route aside during the build and restores it afterwards, and turns on demo mode for the form. In demo mode the form validates input, then honestly reports that email delivery is not set up. The repo's GitHub Actions workflow runs this mode for all three concepts on every push to `main`.

## Routes (six primary pages)
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About NEXIO |
| `/products-services` | Products & Services (5 pillars + filterable 10-category catalogue) |
| `/classroom-solutions` | Classroom Solutions |
| `/interactive-flat-panels` | Interactive Flat Panels (features, gallery, ecosystem, spec layout) |
| `/contact` | Contact Us (enquiry form + WhatsApp + contact details) |
| `/api/enquiry` | Server-side enquiry endpoint (POST only) |

Catalogue "Enquire" links open `/contact?interest=...`, which pre-selects the matching **Interested in** option.

## Project structure
```
src/
  app/                 routes, layout, globals.css + base.css (shared mechanics)
  app/api/enquiry/     server-side validation + email delivery
  components/          SiteHeader (desktop + mobile nav), SiteFooter, Theme (toggle), Logo,
                       Motion primitives, EnquiryForm, ProductCatalogue, SpecSheet,
                       ContactDetails, Cta, ui (ButtonLink, Eyebrow, Photo),
                       sys.tsx (SysHead line-draw heads, FeatureTabs, EcosystemDiagram)
  config/site.ts       <- business contact config (env-driven, no fabricated values)
  config/concept.ts    concept name, tagline, hero copy
  data/content.ts      <- all copy, pillars, values, catalogue, panel spec rows, photos
  lib/enquiry.ts       shared client/server validation
  lib/mailer.ts        SMTP delivery via nodemailer (server only)
  lib/theme.ts         no-flash theme init script
public/images/         QA'd photo crops (see Documentation/ASSET-QA.md)
Documentation/         REFERENCE-AUDIT.md, ASSET-QA.md, source-assets/ (original brand + docs)
```

## Theme behaviour
- The first visit **always opens light**. `prefers-color-scheme` is deliberately ignored.
- The sun/moon toggle saves an explicit choice to `localStorage` (`nexio-theme`), and the choice survives reloads.
- An inline script in `<head>` applies the saved theme before first paint, so there is no flash.

## Enquiry form & email setup
Fields: Full Name\*, School/Organisation, Business Email\*, Phone\*, City, Interested In\* (6 options), Number of Panels/Quantity, Message\*.

- Validation runs on the client (inline errors, a focusable error summary and `aria-invalid`/`aria-describedby`) **and** again on the server (`src/lib/enquiry.ts`).
- Anti-spam measures: a hidden honeypot field, a minimum fill time of about 3 seconds, a 20 KB body limit and a per-IP rate limit (5 per 10 minutes, in memory).
- The form has loading, success, error, rate-limited and **setup-needed** states.
- **No fake success.** Until SMTP is configured, the API returns `503 EMAIL_NOT_CONFIGURED`. The form then says plainly that the enquiry was *not sent*, keeps the user's data, and offers WhatsApp if a number is configured.
- Secrets are read only on the server (`process.env` inside the API route). Nothing secret uses the `NEXT_PUBLIC_` prefix.

To enable email delivery, set these in `.env.local` (or in your host's environment settings):
```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587            # 465 -> also set SMTP_SECURE=true
SMTP_SECURE=false
SMTP_USER=...
SMTP_PASS=...
ENQUIRY_TO_EMAIL=inbox-that-receives-enquiries@...
ENQUIRY_FROM_EMAIL=verified-sender@...   # optional, defaults to SMTP_USER
```
Restart the server after changing these. Any SMTP provider works, for example Google Workspace, Zoho, Amazon SES, Brevo, Mailgun or Postmark. Use an app password or API-key-based SMTP credentials, and verify the sender domain (SPF/DKIM) so mail is not marked as spam. If you deploy to several instances, replace the in-memory rate limiter with a shared store.

## Remaining configuration (needs NEXIO's real data)
| Item | Where | Current state |
|---|---|---|
| Business phone | `NEXT_PUBLIC_CONTACT_PHONE` | Shows "To be confirmed" |
| Public email | `NEXT_PUBLIC_CONTACT_EMAIL` | Shows "To be confirmed" |
| WhatsApp number | `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits + country code) | WhatsApp button hidden; a note is shown instead |
| Address / hours | `NEXT_PUBLIC_BUSINESS_ADDRESS`, `NEXT_PUBLIC_BUSINESS_HOURS` | "To be confirmed" (no map, nothing invented) |
| Social links | `NEXT_PUBLIC_SOCIAL_*` | Hidden until set |
| SMTP credentials + recipient | `SMTP_*`, `ENQUIRY_TO_EMAIL` | Form shows the honest setup-needed state |
| Interactive flat panel specifications | `panelSpecs` in `src/data/content.ts` | Every value `null`, shown as "Details available on enquiry" |
| Product category summaries / imagery | `productCategories` in `src/data/content.ts` | Conceptual placeholders, not SKUs |
| Real photography | `photos` in `src/data/content.ts` + `public/images/` | AI concept imagery, labelled illustrative |
| Production URL | `NEXT_PUBLIC_SITE_URL` | `http://localhost:3000` |
| Final logo lockup | `src/components/Logo.tsx` | Supplied initial artwork (brand guide says refine before release) |
| Legal pages (privacy policy etc.) | - | Not in scope. Add them before collecting enquiries in production. |

`NEXT_PUBLIC_*` values are inlined at build time, so **rebuild** after changing them.

## Content truthfulness
The site has no testimonials, statistics, client logos, prices, certifications, addresses or product specifications. All copy comes from the supplied company brief. Product categories are presented as indicative, with an "on enquiry" disclaimer.
