# CLAUDE IMPLEMENTATION PROMPT — NEXIO CONCEPT 02: Intelligent Systems

You are acting as an elite **creative director, brand designer, senior product/UX designer, art director, motion designer and senior frontend engineer**. Your job is to build a visually exceptional, complete, responsive NEXIO corporate website concept from the attached assets. Treat this as a premium brand launch for an ambitious Indian technology company, not as a generic template exercise.

## 1. Your task

Implement one complete, clickable, six-page website for NEXIO R&D TECH PRIVATE LIMITED using this concept only: **Intelligent Systems**. It must work across desktop, laptop, tablet and mobile. Include all core routes, light/dark theme behaviour, catalogue interactions, enquiry form UI and a server-side email integration architecture that can be configured later. Do not stop after a moodboard, static mockup, design explanation or homepage screenshot: implement the actual website in the available code workspace.

This prompt and the ZIP are for one concept. Run each of the three concepts in a separate folder, branch or workspace so the three directions remain independent. Do not overwrite another concept's project.

## 2. Read the attached ZIP before coding

Inspect the package contents first:
- `Brand/` — use the supplied NEXIO logo and symbol SVG files; check light/dark variants.
- `Documentation/Brand-Guide.md` and `design-tokens.json` — use as the starting brand system.
- `Documentation/Asset-Manifest.csv` and `Documentation/Photo-Asset-Manifest.json` — review each asset's intended role and caveats.
- `Photos/` — inspect the individual files; use the contact sheet only to review the set, never as an image placed in the website.
- `Visuals/` — supplied vector/PNG illustrations are secondary concept assets, not mandatory hero art. Prefer a suitable photographic asset where available.

### Photography quality control
The supplied photographs are AI-generated concept visuals, not documentary photographs of real NEXIO premises, real installations or verified products. One file, `Photos/01-classroom-hero.jpg`, is a standalone classroom image and is the safest hero candidate. Some other files are individual crops from generated photo boards and may contain synthetic product labels, NEXIO-like marks, odd interface text, inconsistent device details or image-generation artifacts. Open and inspect each one before placing it. Reject any image with visible defects, nonsensical text, malformed hands/faces, distorted hardware or brand marks that look fabricated. Do not use the contact sheet as a page image. Do not claim an image depicts a real customer, school, NEXIO facility or actual product model. Product imagery is illustrative; leave layouts easy to replace with approved real assets later.

Do not add fake logos/signage into photographs. Use the supplied vector logo in the actual HTML site header/footer. If a generated photo already contains synthetic brand/signage text, avoid that crop or place it only where the mark is not visible.

## 3. Business context and content

NEXIO R&D TECH PRIVATE LIMITED is a technology-driven company focused on IT products, computer peripherals, technology solutions, system integration, networking and infrastructure, sales and distribution, technical support and services, and research and development. Its education-technology offering includes smart classroom solutions and interactive flat-panel displays. The company tagline is **Innovate. Educate. Elevate.**

Preserve the company positioning and supplied source copy from this brief. You may edit for clarity and web readability, but do not introduce invented facts. The website is a **technology products and services corporate website with an education-technology specialisation**. It is not a SaaS platform, AI agency, productivity dashboard, software startup or generic digital agency.

### Company content themes
- About: technology as a driver of progress and possibility; combining technology, creativity and practical expertise to make digital experiences smarter, simpler and more accessible.
- IT Products & Accessories: computers, peripherals, accessories, electronics and essential technology equipment.
- Technology Solutions: customised IT solutions, networking, infrastructure, system integration and deployment.
- Sales & Distribution: sourcing and supply for retail, corporate, institutional and enterprise customers.
- Technical Support & Services: installation, troubleshooting, repair, maintenance and after-sales support.
- Research & Development: exploring ideas, developing products, improving designs and creating future technology solutions.
- Vision: become a trusted, forward-thinking brand recognised for innovation, quality, reliability and meaningful impact.
- Mission: make technology accessible, dependable and valuable through quality products, innovative solutions, reliable services and customer experience.
- Values: Innovation, Integrity, Quality, Customer First and Growth.
- NEXIO Promise: create opportunities, solve challenges, build trust and help people and businesses move forward.

### Classroom content themes
Headline direction: **Smart Classrooms. Smarter Learning.** NEXIO classroom solutions help transform traditional classrooms into interactive, collaborative and future-ready learning spaces. Interactive flat panels bring digital writing, annotation, multimedia presentation, screen sharing and teaching tools together. Use cases include schools, colleges, coaching institutes and training centres. Feature themes: interactive touch; digital writing and annotation; engaging visual learning; collaborative learning; compatible device connectivity; wireless screen sharing; everyday teaching. Ecosystem: interactive flat panels, wall mounts and installation, OPS computing, wireless sharing, classroom audio, connectivity/accessories, installation/training/support.

## 4. Pages and navigation — exactly six primary pages

Build these six pages with a complete page flow and consistent shared header/footer:

### Home
- Premium hero with one dominant photograph, well-composed headline, short positioning line and two CTAs. Keep enough negative space for copy; do not overlay text on a busy image.
- Brief company intro.
- Five business pillars.
- Classroom Solutions spotlight.
- Featured Interactive Flat Panel display section.
- Product/service category preview.
- Why NEXIO / value proposition using only grounded values and service themes.
- Relevant application environments: schools, colleges, coaching/training institutes, businesses and organisations.
- Closing CTA and considered footer.

### About NEXIO
- Company story and positioning.
- Vision and mission.
- Five values in a strong typographic or visual composition.
- NEXIO Promise.
- Contact/enquiry CTA.

### Products & Services
- Clear category introduction and navigation.
- Five service pillars: IT Products & Accessories; Technology Solutions; Sales & Distribution; Technical Support & Services; Research & Development.
- Catalogue of up to ten conceptual categories, using reusable cards and data-driven content.
- Product categories (conceptual placeholders only): Interactive Flat Panel Displays; LED Display Solutions; Digital Signage Displays; OPS Computing Solutions; Wireless Screen Sharing; Classroom Audio Solutions; Display Mounting Systems; Connectivity & Accessories; Computers & IT Peripherals; Networking & Infrastructure.
- Do not represent these as confirmed stock/SKUs. Add enquiry CTAs.

### Classroom Solutions
- Hero: “Smart Classrooms. Smarter Learning.”
- Editorial explanation of the transformation from traditional classroom to interactive learning.
- Feature modules: interactive touch; visual learning; collaboration; connectivity; wireless sharing; everyday teaching.
- Complete classroom ecosystem grid.
- Audience/use-case band for schools, colleges, coaching and training institutes.
- Enquiry CTA.

### Interactive Flat Panels
- Dedicated product-led hero and image composition.
- Explanation: a smarter way to teach, present, collaborate and inspire.
- Feature storytelling: touch, writing/annotation, multimedia, screen sharing, compatible devices and classroom use.
- Hardware/product gallery using only inspected images.
- Accessories/solution ecosystem.
- A clean specification layout prepared for future verified product data. Hide unknown values or display “Details available on enquiry”; never invent screen size, resolution, RAM, operating system, brightness, touch points, warranty, price or certifications.
- Clear enquiry CTA.

### Contact Us
- Contact introduction.
- Enquiry form with fields below.
- WhatsApp CTA (configurable number only).
- Contact details are placeholders until actual details are supplied. Do not invent an address, map location, phone or email.

## 5. Enquiry form and email integration

Fields: Full Name (required); School/Organisation (optional); Business Email (required); Phone Number (required); City (optional); Interested In (required select: Interactive Flat Panel Display, Smart Classroom Solutions, IT Products & Accessories, Networking & Infrastructure, Installation & Technical Support, Other Enquiries); Number of Panels/Quantity (optional); Message/Requirement (required).

Implement accessible field labels, validation, loading/success/error states, client-side and server-side validation, basic anti-spam (honeypot or equivalent) and server-side email delivery architecture. Use environment variables and include `.env.example`. Never expose SMTP/API secrets in browser code. When credentials are missing, do not fake a successful email; show an honest setup-needed/demo state and document the steps. No database, CRM, login, admin dashboard, e-commerce, cart, payments or checkout. WhatsApp number and email recipient must be configurable, not fabricated.

## 6. Responsive design and themes

Breakpoints to test: 360, 390, 430, 768, 1024, 1280, 1440 and 1920px. Build desktop, laptop, tablet and mobile intentionally. Mobile should not be a compressed desktop page. Add a real mobile navigation, accessible theme toggle, image art direction/crops, touch-friendly buttons, legible type and usable forms. No overflow or clipped content.

Theme rules: first visit always opens LIGHT; add a sun/moon control; explicit user choice persists in localStorage; if there is no saved choice, default to light; do not auto-follow the OS setting or `prefers-color-scheme`; avoid hydration flash. Light and dark must both have proper contrast, surfaces, cards, borders, shadows, inputs, nav and CTAs.

## 7. Concept-specific brand direction

**Concept name:** Intelligent Systems

**Personality:** A crisp, modular, technology-first identity

**Tagline direction:** Connected technology. Clearer possibilities.

**Colour direction:** Official supplied tokens: cobalt #365CF5, midnight ink #111C36, cool paper #F6F8FC, surface #E7ECF5, restrained lime #CBEA63, white #FFFFFF. Keep the canvas bright and light-first. Use cobalt precisely for navigation accents, CTAs and key diagrams; lime should be a small secondary signal only, never a large neon wash.

**Typography:** Space Grotesk for headings; Inter or Manrope for body; Space Mono for compact technical labels.

**Logo:** Use the supplied modular NX geometric symbol and NEXIO wordmark as the initial identity. Preserve the distinctive silhouette and avoid making it resemble a crypto token, generic AI mark or cube logo.

**Art direction:** Build a precise technology brand with modular layout logic, disciplined grids, clean white space, measured cobalt accents, subtle cool-grey panels and confident product photography. Use Structa for IT-company content architecture, Zephiq for bright tech composition and restrained GSAP-style movement, Nexa Growth for section flow, and Talentflow for product explanation rhythm. Use dark product stages selectively, not as the default site theme. Do not build dashboard UI, software screenshots or SaaS feature cards as the main design language.

**Photography direction:** Use cool, clear natural lighting, neutral architectural materials, glass, white surfaces, controlled blue tones and realistic education/enterprise environments. Images should feel precise and modern rather than sci-fi. Use `Photos/01-classroom-hero.jpg` as the safest home/classroom hero candidate; colour and contrast in CSS should support the concept, not destroy photographic realism. Inspect every other crop before use.

**Motion direction:** System-like but quiet: grid-aligned section reveals, short line-draw accents, controlled panel/image transitions, restrained parallax on product imagery, clean hover states, concise button arrow movement and smooth theme switching. No perpetual animated grids or glowing circuitry.

**Hero copy direction:** Suggested home hero: “Connected technology. Smarter learning.” Support: “Technology products, integrated solutions and interactive classroom experiences for organisations ready to move forward.” Primary CTA: “Explore solutions”. Secondary CTA: “Talk to NEXIO”.

**Additional creative notes:** Use modularity and technical precision in the layout, not software product metaphors. Strong alignment, measured grids, smart product comparisons and clean category architecture should make the site feel like an advanced technology solutions brand.

## 8. Reference websites — inspect and interpret, do not clone

## Reference links — inspect before design

Use these links as visual and interaction references. Open the template detail page and, where available, its live preview. Study hierarchy, spacing, composition, animation, component rhythm and responsive behaviour. Do not copy the templates, wording, logos, layout pixel-for-pixel or their original industry positioning. If a link is unavailable, record that and continue with accessible references; do not pretend to have inspected it.

### Webflow references supplied for this project
- Taped — https://webflow.com/templates/html/taped-website-template — study layered composition, tactile cards and expressive hover details only; it is a designer portfolio template, not a model for NEXIO's business positioning.
- Fynora — https://webflow.com/templates/html/fynora-website-template — study restrained professional hierarchy, clear service presentation and trust-building layout; do not borrow financial-services content.
- Althor — https://webflow.com/templates/html/althor-website-template — study conversion hierarchy, hero and CTA sequencing, and consistency of its design system; do not adopt AI-agency visuals or language.
- Talentflow — https://webflow.com/templates/html/talentflow-website-template — study product-marketing page rhythm, feature explanations and layout variety; do not turn NEXIO into an HR/SaaS platform.
- Carefront — https://webflow.com/templates/html/carefront-website-template — study calm editorial art direction, serif/sans typography pairing, warm neutrals and custom visual treatment.
- Nexa Growth — https://webflow.com/templates/html/nexa-growth-website-template — study a light visual system, scroll interactions and concise section transitions.
- Zephiq — https://webflow.com/templates/html/zephiq-website-template — study bright technology presentation, clean service cards, modern grid logic and restrained GSAP motion; do not copy AI-agency messaging.
- Structa — https://webflow.com/templates/html/structa-website-template — study IT-company information architecture, service taxonomy and institutional credibility.

### Framer references
- Upstream — https://www.framer.com/community/gallery/upstream/ — primary reference for clean white/aqua/teal identity, strategic editorial feel, refined typography, whitespace and hierarchy. This is particularly relevant to Concept 01.
- Velox — https://www.framer.com/marketplace/templates/velox/ — study photography-led editorial composition, image sequencing, typography and responsive gallery treatment.
- LUMIÈRE Premium — https://www.framer.com/marketplace/templates/lumi-re-premium/ — study high-end image presentation, restrained editorial typography and polished transitions.

### Reference priority
1. Upstream for the white/teal corporate tone (especially Concept 01).
2. Carefront + Talentflow + Fynora for editorial structure and premium clarity.
3. Structa for IT-company page architecture.
4. Zephiq + Nexa Growth for technology layout and balanced motion.
5. Velox + LUMIÈRE for photography art direction and image handling.
6. Taped + Althor for selected interaction and conversion patterns only.


Before coding, create a short internal reference audit in `Documentation/REFERENCE-AUDIT.md`: for each accessible reference, record 2–3 visual/interaction insights relevant to this concept and one thing not to copy. Then create the design. If you cannot access a preview, say so accurately.

## 9. Motion design specification

Choose one main motion framework already available or best suited to the project (GSAP + ScrollTrigger or Framer Motion). Keep dependencies lean and avoid mixing systems without reason. Apply the balanced quality bar:
- Hero headline: line/word reveal, 500–800ms, subtle 12–20px rise.
- Hero image: mask/clip reveal or scale-in, 700–1000ms, no dramatic zoom.
- Scroll sections: opacity + 12–20px vertical movement, once per section, small stagger only for related children.
- Cards: hover lift 3–5px; image scale about 1.02; 200–300ms.
- Buttons: small arrow or icon movement; no bounce.
- Navigation: clean underline/colour transition; subtle sticky surface after scroll.
- Product image: restrained reveal and gentle parallax only on desktop.
- Theme toggle: smooth, quick colour change.
- Use `prefers-reduced-motion`; reduce/disable nonessential effects on mobile and reduced-motion users.
No scroll hijacking, cursor-follow, perpetual animation, excessive blur, aggressive parallax or decorative 3D that harms performance. Motion must never block usability or content.

## 10. Technical implementation

Preferred: Next.js + React + TypeScript; Tailwind or clear CSS variables; reusable components; semantic HTML; Lucide plus supplied/custom SVGs; data-driven catalogue; image optimization and responsive `sizes`; accessible forms; clean route structure. Inspect the current project first and preserve useful existing code. Build the actual site, not just a design proposal.

Suggested component system: SiteHeader; DesktopNavigation; MobileNavigation; ThemeToggle; SiteFooter; PrimaryButton; SectionEyebrow; SplitHero; ImageFeature; ValueGrid; ServiceCard; ProductCard; ProductGallery; EcosystemGrid; EnquiryForm; CTASection. Use components where they create consistency, not as a reason to make every section look identical.

Keep content and product entries in a central data file. Use CSS custom properties/design tokens for light and dark modes. Add a central config for email recipient, business phone, WhatsApp, address and social links. Keep all unknown values visibly marked in code as TODO/config placeholders and avoid rendering fabricated data in the UI.

## 11. Quality bar and acceptance checklist

Before final response, verify:
- All six navigation routes work, with no dead links.
- Header/footer and theme toggle work on each route.
- First visit is light; saved dark preference survives reload; OS theme is ignored.
- Mobile menu opens/closes and is keyboard accessible.
- All images are the correct asset, crop well and have dimensions/alt text. Contact sheet is never used as a website image.
- Invalid form entries are caught; no credentials are hard-coded; no false success is shown.
- No fake stats, testimonial, logos, product specs, prices or addresses.
- No horizontal overflow at all required widths.
- Focus states, labels, contrast and reduced motion work.
- Build/lint/typecheck pass where supported.
- Performance: no avoidable layout shift, hero image prioritised, offscreen images lazy-loaded, no heavy unnecessary dependencies.
- The design has a clear concept-specific identity and does not look like a copied Webflow template or generic AI-made startup page.

## 12. Your creative autonomy

You are explicitly encouraged to make senior-level improvements to layout, content hierarchy, image composition, responsive behaviour, micro-interactions and motion if they improve the finished experience. You may add subtle, useful details not listed here. Do not add new pages, invented company information, speculative product claims or unnecessary complexity. Prioritise craft and coherence over novelty. If an enhancement changes the scope or requires real client data, leave a configurable placeholder and explain it in the handoff notes.

## 13. Final handoff

Provide:
1. A working six-page responsive website for this concept.
2. Clean source code with reusable components.
3. `README.md` with setup/run/build steps.
4. `.env.example` and email integration setup instructions.
5. `Documentation/REFERENCE-AUDIT.md`.
6. `Documentation/ASSET-QA.md` listing each supplied photo as used, rejected or reserved and why.
7. A short summary of implemented motion, accessibility and responsive testing.
8. A clear list of remaining configuration items that require the business's real contact details or email credentials.

Begin by inspecting the project directory and ZIP assets, then implement the website. Do not return only a plan.
