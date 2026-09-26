# Run and publish the Thomas NG website

## Project location

```text
E:\Profile
```

This folder contains the source code. `src/` contains the React interface, `public/` contains static assets, and `.github/workflows/deploy-pages.yml` builds and publishes the site.

Do not commit `node_modules/` or `dist/`; both are generated locally.

## Run locally

Open PowerShell:

```powershell
cd "E:\Profile"
npm install
npm run dev
```

Open `http://localhost:5173/`. To stop the server, press `Ctrl+C`.

Before publishing:

```powershell
npm run build
npm run test:sites
```

## Create the GitHub repository

The GitHub account is `Banhmikepthit0105`, so the user-site repository must be named exactly:

```text
Banhmikepthit0105.github.io
```

Create a new public repository at GitHub with that name. Do not initialize it with a README, license, or `.gitignore`, because the local project already contains files.

## Initialize Git and push

Run these commands from the website folder:

```powershell
git init
git branch -M main
git add .
git commit -m "Build Thomas NG academic website"
git remote add origin https://github.com/Banhmikepthit0105/Banhmikepthit0105.github.io.git
git push -u origin main
```

Then open the repository on GitHub:

1. Select `Settings`.
2. Select `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Open `Actions` and wait for `Deploy website to GitHub Pages` to complete.
5. The default website will be `https://banhmikepthit0105.github.io/`.

Every later push to `main` will rebuild and publish automatically:

```powershell
git add .
git commit -m "Update profile content"
git push
```

## Domain recommendation

Use `thomasng` as the brand stem, but not `thomasng_`: underscores are invalid in normal website hostnames and are not accepted in GitHub usernames.

Recommended order, subject to registrar availability:

1. `thomasng.ai` — strongest fit for an AI researcher.
2. `thomasng.dev` — clear technical identity.
3. `thomasng.me` — personal and academic.
4. `thomas-ng.com` — conventional fallback.

The GitHub account can remain `Banhmikepthit0105`; a custom domain does not require changing the GitHub username.

## Connect a custom domain

After buying a domain such as `thomasng.ai`:

1. In GitHub, open `Settings > Pages` for `Banhmikepthit0105.github.io`.
2. Enter the custom domain and save it before changing DNS.
3. At the domain registrar, add these apex `A` records for host `@`:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

4. Add a `CNAME` record for `www` pointing directly to `Banhmikepthit0105.github.io`.
5. In GitHub account settings, verify the domain with the TXT record GitHub provides.
6. Wait for DNS propagation, then enable `Enforce HTTPS` in repository Pages settings.

DNS may take up to 24 hours. Do not create a wildcard DNS record such as `*.thomasng.ai`.
