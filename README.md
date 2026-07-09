# Johar Trails

A zero-commission eco and cultural tourism platform for **Jharkhand, India** — browse bookable local experiences (waterfall treks, wildlife homestays, tribal art workshops), contact guides directly on WhatsApp with no booking commission, and learn about the state's tribal communities, art forms, and festival calendar.

Built with **React 19 + Vite** and **Tailwind CSS v4**. No backend, no database, no API keys — it's a fully static site that deploys straight to **GitHub Pages** on every push to `main`.

## What's in this version

- **No Firebase.** An earlier version of this project included an unused Firebase config file with a hardcoded API key committed to source. It's been removed — the site doesn't need a backend for its current feature set, and this avoids ever shipping credentials in a public repo.
- **Works as a direct GitHub upload.** Routing uses `HashRouter`, so the site works correctly on GitHub Pages with zero server configuration — no 404 redirect tricks needed.
- **New: Culture page.** A dedicated `/culture` route covering Jharkhand's indigenous communities, tribal art forms (Sohrai, Khovar, Paitkar, Chhau), the festival calendar, and responsible-visiting guidance.

## Pages

| Route | Page | What it does |
|---|---|---|
| `/` | Home | Hero, value props (zero commission, verified guides, sustainable travel) |
| `/explore` | Explore | Filterable grid of 9 bookable experiences across Falls, Wildlife, Tribal Art, Hill Station categories |
| `/location/:id` | Experience detail | Full write-up per experience: overview, highlights, best time, duration, price, what's included, and a direct WhatsApp contact link to the local guide |
| `/culture` | Culture | Indigenous communities, art forms, festival calendar, and visiting etiquette |

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (automatic, from `main`)

1. If your GitHub repo is **not** named `johar-trails`, open `vite.config.js` and change:

   ```js
   base: '/johar-trails/',
   ```

   to match your repo name (e.g. `base: '/my-repo-name/',`). For a `<username>.github.io` repo, use `base: '/'`.

2. Push to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Johar Trails"
   git branch -M main
   git remote add origin https://github.com/<your-username>/johar-trails.git
   git push -u origin main
   ```

3. In your repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**. That's the only manual step.

4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes the site on every push to `main`. Check the **Actions** tab for the live URL.

## Editing content

- **Experiences:** `src/data/locations.js` — one object per bookable experience (title, price, guide name/WhatsApp number, highlights, what's included, images).
- **Culture content:** `src/data/culture.js` — indigenous communities, art forms, festivals, and etiquette tips.

Update guide WhatsApp numbers in `locations.js` before publishing — the sample data uses placeholder numbers.

## License

MIT — see `LICENSE`.
