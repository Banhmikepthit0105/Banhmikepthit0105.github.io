# Profile and journal content

Edit `src/content.js` to add confirmed content. The profile and blog share the two theme palettes in `src/styles.css`.

- `profile.news`: date, text
- `profile.publications`: topic, title, url, authors (text), venue
- `profile.experience`: period, role, organization, description
- `profile.awards`: year, title
- `posts`: slug (unique), title, category (`Blog` or `Notes`), excerpt, body (array of paragraphs), optional date, image and alt.

Store your photographs under `public/assets/` and reference `/assets/filename.jpg`. There are no sample entries or environment-specific content. The first article is Life at 22; its title and topic are confirmed, while the owner has not yet supplied the article body. There is no CMS or upload backend yet; content is managed in this file.

Profile section links remain same-page anchors. The journal uses `/?view=journal` for compatibility with static hosting and opens in a new tab from the profile. Entries use `/?view=journal&post=slug`.

Design references: Yankai Lin (academic layout), Alex Cornell (photo/writing presentation), Ghost Journal (editorial hierarchy). No articles or images have been copied from those sites.

The earlier profile UI is preserved under `reference/previous-profile/`.


## Paper thumbnails
Each publication accepts `badge` (short venue, e.g. `KES 2026`), `art` (`gmorda`, `kwordinaryvqa`, `flamereavers` — drawings in `src/PaperArt.jsx`), optional `image` (`/assets/papers/<file>.png`, overrides `art`; 16:10 works best), and optional `links` (`[{ label, url }]`). Projects accept `icon` (`database`, `food`, `learning`, `scroll`).
