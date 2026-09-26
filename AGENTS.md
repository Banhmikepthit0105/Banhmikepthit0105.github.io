# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Durable design decisions

- Latest direction (2026-09-25): prioritize matching https://linyankai.github.io/ in layout and publication formatting; use https://songwxuan.github.io/ as a secondary reference. This supersedes the previous EroNguyen/mock layout direction below wherever they conflict.
- The profile must also provide a place for personal blog posts and reflections, alongside academic work. Do not invent posts or personal opinions on the owner's behalf.
- Confirmed layout: identity on the left, academic content in the centre, and a Blog & Notes doorway on the right. About, News, Publications, Work Experience, and Awards are sections on one page, reached by anchor links.
- Blog & Notes opens in a new tab and contains photographs, long-form blogs, short posts, reflections, and experience sharing. Follow the editorial photo/text presentation of Alex Cornell and Ghost Journal, using the same light/dark palette and synchronizing theme changes between tabs.
- Blog & Notes uses the same real content in development and production. No demo entries, Preview labels, Photos/Experience categories, or Explore the journal copy. Keep only the blog index and actual article links; omit filters/search until needed. First article: Life at 22, about university life. The owner must supply personal narrative; do not fabricate it.

- The selected visual source is `reference/selected-dark-mock.png`.
- Use the identity `Nguyen Thanh Thai (Thomas NG)` and the short brand `Thomas NG`.
- Keep the compact EroNguyen-inspired two-column hero, plain news rows, and horizontal publication rows.
- Support exactly two themes: `mono` (light) and `dark`; dark remains the first-visit default. Retired cyan preferences fall back to dark.
- Light uses the Yankai Lin system font stack, white canvas, charcoal text, blue links, red (#b41b1b) highlights, and gold/yellow Awards decoration. Dark uses navy with accessible red, blue, and gold accents. Apply the same font stack to profile and journal.
- Do not publish invented affiliations, degrees, employers, awards, citations, authors, venues, paper links, or dated news.
- Interaction logic follows the public Ero Nguyen pattern: sticky/scrolled navigation, section reveal, active-section tracking, restrained typewriter copy, and a canvas particle background. Keep the implementation original and theme-aware.
- Motion must respect `prefers-reduced-motion`; particles become static and decorative motion is disabled.
- Use the user-provided `public/assets/thomas-ng-portrait.jpg` as the confirmed portrait in the brand and hero.


- Typography must match the actual Yankai Lin source, not just font family: root/body 16px below 768px and 18px from 768px, section titles 1.563rem, publication titles 1.1em bold, publication body line-height 1.6. Light palette uses #494e52 body, #333 lists, #377d98 paper links, #52adc8 general links, #b41b1b highlights and #a02020 paper distinctions.
- Every award has a short, smaller explanatory caption. Odon Vallet 2026 and Outstanding Thesis (10/10) were confirmed directly by the user. Do not invent a thesis title, awarding unit, ranking, or exact award date.
- Personal academic content is sourced from D:/Thai/CV and D:/Thai/InfoNTT; LinkedIn URL is https://www.linkedin.com/in/thomasng015. Do not publish identity documents, residential addresses, birth dates, or private student details. Company-named CV folders are applications, not evidence of employment.

- Latest color clarification: KEEP the Yankai Lin red decorative accents, including 6x32px section markers (#b41b1b in light mode), active navigation underline and small decorative rules. Limit RED TEXT only: ordinary About copy, role, headings and routine news remain neutral; exceptional achievements may use red (Odon Vallet news, first-place paper distinction). Retain restrained gold treatment for Dean’s List and Odon Vallet awards. Do not interpret reduced red text as removal of red decoration. Preserve the verified typography sizes.
- User confirms G-MORDA accepted at KES 2026 (KES, distinct from KSE 2025) and a Research Assistant role at VinUni. Do not invent paper URLs, RA dates, lab, supervisor, or duties.

- Publications use plain three-line entries (title, authors, abbreviated venue), without topic subheadings for this small list. Underline only the owner's author-name variants (Thai Nguyen, Thanh Thai Nguyen, Thanh-Thai Nguyen); do not bold them. Keep publication body 18px desktop / 16px mobile; titles now use normal weight and body size per the latest request.
- Latest LinkedIn content pasted by the user is authoritative for VISHC RA (May 2026-present, remote), HCMUS undergraduate research (May 2025-May 2026, part-time, advisor Dr. Thanh Le), education dates and GPA 9.06/10 (3.81/4), and detailed award dates/issuers. Do not publish the private LinkedIn edit links or skill-association links.
- Select four representative projects: Vector Database Benchmarking, FoodieVQA, DeepShark, historical Sino-Nom/Chinese OCR alignment. Omit Skills lists.
- Languages: Vietnamese native; English professional working proficiency, TOEIC 830; Chinese currently learning. Add a concise Beyond Research section near the end for piano and Chinese learning; longer personal writing belongs in Blog & Notes, without new category buttons.

- Latest placement: Blog & Notes has exactly one entry button on the profile, at the far right of the header, opening a new tab. Remove the blog sidebar and repeated in-body blog links. Remove the footer entirely (copyright, tagline, and blog link); leave the bottom clear. Use a two-column profile with identity and academic content.

- Navigation uses one sliding red indicator shared by hover and active states, never double underlines. Button hover/press transitions should be subtle and smooth; section clicks scroll smoothly, respecting reduced-motion preferences.

- Identity sidebar follows the supplied Yankai Lin screenshot: bold name, neutral charcoal/theme text, static role description, compact vertical icon links. Use confirmed contact destinations only; do not fabricate Google Scholar or ORCID profiles.

- 2026-09-26: Every publication shows a thumbnail on the left (reference: https://vhvkhoa.github.io/), with an abbreviated venue badge, a small topic label, and link pills only for confirmed URLs. Thumbnails are theme-aware inline SVGs in `src/PaperArt.jsx` that summarise each paper's method; a real figure can replace one via `image` in `content.js`. Selected Projects carry a small duotone icon tile. Keep decoration purposeful and clean (Apple-like restraint).

- 2026-09-26 (supersedes "dark remains the first-visit default"): the owner's GitHub account is `Banhmikepthit0105` (site: Banhmikepthit0105.github.io), not SPyofgame. Colors follow https://linyankai.github.io/: light/white is the default theme; the particle canvas runs only in dark mode. Paper titles are bold 1.1em #377d98; venues are plain (not italic). Work Experience and Education use Yankai's CV row format (date column + details). G-MORDA uses its real architecture figure from the KES 2026 paper (`public/assets/papers/g-morda.png`); projects link to their confirmed public GitHub repos.
