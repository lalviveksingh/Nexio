# Asset QA — supplied photography

All supplied photographs are **AI-generated concept imagery**, not documentary photos of NEXIO premises, installations, customers or products. Every file in `Photos/` was opened and inspected at full size before use. The contact sheet (`PHOTO-CONTACT-SHEET.jpg`) was used only to review the set and is **never** placed on the website.

Website copies live in `public/images/` (renamed, and cropped where noted). All are referenced from one place — `photos` in `src/data/content.ts` — so they can be swapped for approved real photography without touching page code. A visible footer note on every page says imagery is illustrative, and product pages add "Models confirmed on enquiry".

| Supplied file | Status | Website file | Notes |
|---|---|---|---|
| `01-classroom-hero.jpg` (1672×941) | **Used** | `classroom-hero.jpg` | Standalone, clean, no visible brand mark. Used as the primary hero / classroom image. Crops checked at 4:3, 16:9 and 21:9. |
| `02-teacher-in-class.jpg` (1200×900) | **Used — cropped** | `teacher-lesson.jpg` (900×694) | The original shows misspelled on-screen labels ("Bloud Vessels", "Osygen Supply") and a nonsense UI label at top left, plus a white border at the bottom. Cropped to x 0–900, y 190–884, which removes all of the label text and the border. A tiny, unreadable bezel mark is left at small size. |
| `03-interactive-touch-closeup.jpg` (1200×900) | **Used — trimmed** | `touch-writing.jpg` (1184×866) | Hand, stylus and stroke look natural. Thin white edges from the source board were trimmed. The on-screen icons are blurred and unreadable. |
| `04-team-collaboration.jpg` (1200×900) | **Reserved (not used)** | — | People look natural, but the laptop shows a logo resembling a real third-party brand mark. A white border is also present. Kept back to avoid implying a vendor relationship. It could be used later as a tight crop that excludes the laptop. |
| `05-av-camera-and-audio.jpg` (1200×900) | **Rejected** | — | The soundbar carries a fabricated "NEXIO" mark, which would imply a real NEXIO-branded product. |
| `06-in-room-display-installation.jpg` (1200×900) | **Used — cropped** | `display-installed.jpg` (1100×888) | A strip from a neighbouring frame of the contact board (left ~95px) was removed. No brand mark is visible. The source resolution is soft, so it is used at medium sizes only. |
| `07-classroom-display-context.jpg` (1200×900) | **Rejected** | — | The display shows a fabricated "NEXIO" logo on screen, and a strip from another frame sits along the top edge. |
| `08-bezel-and-screen-detail.jpg` (1200×900) | **Rejected** | — | The bezel is printed with a fabricated "NEXIO" mark, and a strip from another frame sits along the top. |
| `09-ops-and-connectivity.jpg` (1200×900) | **Used — cropped** | `ops-connectivity.jpg` (1200×756) | The top strip from the adjacent frame was removed (y ≥ 140). The tiny port-label text is blurred and unreadable. Used only for OPS / connectivity contexts. It is not presented as a specific product. |
| `PHOTO-CONTACT-SHEET.jpg` | **Review only** | — | Never placed on the site. |

## Visuals/ (vector / PNG illustrations)
Reviewed as secondary direction only. They are **not used** on the site, because the brief prefers photography and the illustrations add no information the layouts lack. They remain available in `Documentation/source-assets/` if wanted later.

## Brand/
- The symbol geometry from `NEXIO-Symbol.svg` is reproduced exactly in `src/components/Logo.tsx`. Colours are tokenised so the mark adapts to light and dark themes.
- The wordmark is set in live text with the brand typeface, matching the supplied lockup.
- `NEXIO-Favicon.svg` is used as `public/favicon.svg`.
- The original brand files are kept in `Documentation/source-assets/Brand/`.

## Before launch
Replace all photography with approved real NEXIO imagery: installations, products and team. Keep the `alt` text accurate to the new images.
