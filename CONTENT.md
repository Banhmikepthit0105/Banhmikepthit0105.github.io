# Profile and journal content

Edit `src/content.js` to add confirmed content. The profile and blog share the two theme palettes in `src/styles.css`.

- `profile.news`: date, text
- `profile.publications`: topic, title, url, authors (text), venue
- `profile.experience`: period, role, organization, description
- `profile.awards`: year, title

Store your photographs under `public/assets/` and reference `/assets/filename.jpg`. There are no sample entries or environment-specific content. The first article is Life at 22; its title and topic are confirmed, while the owner has not yet supplied the article body. There is no CMS or upload backend yet; content is managed in this file.

Profile section links remain same-page anchors. The journal uses `/?view=journal` for compatibility with static hosting and opens in a new tab from the profile. Entries use `/?view=journal&post=slug`.

Design references: Yankai Lin (academic layout), Alex Cornell (photo/writing presentation), Ghost Journal (editorial hierarchy). No articles or images have been copied from those sites.

The earlier profile UI is preserved under `reference/previous-profile/`.


## Paper thumbnails
Each publication accepts `badge` (short venue, e.g. `KES 2026`), `art` (`gmorda`, `kwordinaryvqa`, `flamereavers` — drawings in `src/PaperArt.jsx`), optional `image` (`/assets/papers/<file>.png`, overrides `art`; 16:10 works best), and optional `links` (`[{ label, url }]`). Projects accept `icon` (`database`, `food`, `learning`, `scroll`).

## Blog & Notes: edit with a web UI (Pages CMS)

Posts are Markdown files in `content/posts/` (file name = link slug). The easiest way to write them is **Pages CMS**, a free web editor that works directly on this GitHub repository:

1. Open https://app.pagescms.org and sign in with GitHub (account `Banhmikepthit0105`).
2. Choose the repository `Banhmikepthit0105.github.io`, branch `main`.
3. Open **Blog & Notes**. Create or edit a post: title, date, category (Blog/Notes), language, short summary, cover photo, and the article in a rich-text editor. Photos you upload are stored in `public/assets/blog/`.
4. Save. Pages CMS commits to `main`, and GitHub Actions republishes the site in about a minute.

Tick **Draft** to keep a post hidden on the site. The editor's configuration is `.pages.yml`.
Remember to `git pull` in your local folder before editing files on your computer, so it picks up posts written in the web editor.

### Language versions (VI · EN · 中文)
Each language is its own post file. Give every version the same **Post ID** (`key`, e.g. `life-at-22`) and pick its **Language** (Tiếng Việt / English / 简体中文). The Blog page shows one language at a time with the VI · EN · 中文 switch; a post that has no version in the chosen language shows its available version with a small "Only in …" label.
