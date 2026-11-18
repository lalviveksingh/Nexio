# NEXIO — three website concepts

**Live demo:** https://lalviveksingh.github.io/Nexio/

| Folder | Concept | Look & feel | Live demo |
|---|---|---|---|
| [`Nexio-1/`](Nexio-1) | **Editorial Intelligence**, "Technology, thoughtfully delivered." | White-forward editorial with serif headlines, teal accents, numbered index lists and figure captions | [/Nexio/Nexio-1/](https://lalviveksingh.github.io/Nexio/Nexio-1/) |
| [`Nexio-2/`](Nexio-2) | **Intelligent Systems**, "Connected technology. Clearer possibilities." | Modular grid with cobalt accents and a tiny lime signal, framed modules, an ecosystem diagram and feature tabs | [/Nexio/Nexio-2/](https://lalviveksingh.github.io/Nexio/Nexio-2/) |
| [`Nexio-3/`](Nexio-3) | **Bold Future**, "Make technology matter." | Oversized type, carbon sections with angled edges, signal-orange markers and layered, asymmetric photos | [/Nexio/Nexio-3/](https://lalviveksingh.github.io/Nexio/Nexio-3/) |

Each folder is an independent, complete six-page Next.js site with its own dependencies, README, `.env.example`, `Documentation/REFERENCE-AUDIT.md` and `Documentation/ASSET-QA.md`.

## Run a concept locally
```bash
cd Nexio-1          # or Nexio-2 / Nexio-3
npm install
npm run dev         # http://localhost:3000
```

## GitHub Pages demo
`.github/workflows/pages.yml` runs on every push to `main`. It:
1. builds each concept as a static site (`npm run build:pages`, using base path `/Nexio/Nexio-N`);
2. adds the landing page from `pages-landing/index.html`;
3. publishes everything to the `gh-pages` branch.

GitHub Pages only serves static files, so the demo **cannot send email**. Its enquiry form validates input, then shows the honest "email delivery is not set up yet" message. The full server build (`npm run build` + `npm start`, or a host such as Vercel) includes the working `/api/enquiry` email route.

One-time setup, if the demo URL is not live after the first workflow run: go to **Settings → Pages → Build and deployment**, set **Source = Deploy from a branch**, choose **Branch = `gh-pages`** and **Folder = `/ (root)`**, then save.

## Shared across all three
- The same six routes: `/`, `/about`, `/products-services`, `/classroom-solutions`, `/interactive-flat-panels`, `/contact`.
- The same content source (`src/data/content.ts`) and contact config (`src/config/site.ts`). Nothing is fabricated.
- The same enquiry form and server route: validation, a honeypot, rate limiting, SMTP through environment variables, and no fake "sent" message.
- The same theme rules: light by default, the OS setting is ignored, and the saved choice persists.
- The same QA'd photo set: 5 used, 3 rejected for fabricated NEXIO marks, 1 reserved.

## Before choosing one for production
See "Remaining configuration" in any concept README. In short: real phone, email, WhatsApp, address, SMTP credentials, verified panel specifications, approved photography, a production URL and legal pages.
