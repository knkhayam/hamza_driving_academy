# Hamza Driving Academy — static site

Next.js static export for **GitHub Pages**. English / Urdu.

Live (after enabling Pages): [https://knkhayam.github.io/hamza_driving_academy/](https://knkhayam.github.io/hamza_driving_academy/)

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000/en/](http://localhost:3000/en/).

For local preview **with** the GitHub Pages base path:

```bash
# in .env.local
NEXT_PUBLIC_BASE_PATH=/hamza_driving_academy
NEXT_PUBLIC_SITE_URL=https://knkhayam.github.io/hamza_driving_academy
```

Then open [http://localhost:3000/hamza_driving_academy/en/](http://localhost:3000/hamza_driving_academy/en/). Leave `NEXT_PUBLIC_BASE_PATH` blank for root-path local/dev.

## Static build

```bash
npm run build
```

Output is in `out/`.

## Deploy to GitHub Pages

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually)
3. Site URL: `https://knkhayam.github.io/hamza_driving_academy/`

The workflow (`.github/workflows/deploy-pages.yml`) builds with:

| Env | Value |
|---|---|
| `NEXT_PUBLIC_BASE_PATH` | `/hamza_driving_academy` |
| `NEXT_PUBLIC_SITE_URL` | `https://knkhayam.github.io/hamza_driving_academy` |

Custom domain later: point DNS at GitHub Pages, then you can clear `NEXT_PUBLIC_BASE_PATH` if the site is served from the domain root.

## Environment variables

All public site values live in `.env.local` (see `.env.example`). After changing them, rebuild and redeploy.

Important keys:

- `NEXT_PUBLIC_SITE_URL` — GitHub Pages URL (or custom domain)
- `NEXT_PUBLIC_BASE_PATH` — `/hamza_driving_academy` for project Pages; blank for root hosting
- `NEXT_PUBLIC_PHONE` / `NEXT_PUBLIC_WHATSAPP`
- `NEXT_PUBLIC_EMAIL` — leave blank until you have one
- `NEXT_PUBLIC_INSTRUCTOR_NAME` / `NEXT_PUBLIC_EXPERIENCE_YEARS`
- `NEXT_PUBLIC_AREAS` — comma-separated list
- `NEXT_PUBLIC_SHOW_REVIEWS` — `true` after editing `src/data/reviews.json`

## Google reviews

The home page reviews section is **on by default** and links to your Google Maps listing (`NEXT_PUBLIC_MAPS_URL` / `NEXT_PUBLIC_REVIEWS_URL`).

Google does not allow free scraping of review text. To import up to 5 reviews into the site:

1. Create a Google Cloud API key with **Places API** enabled
2. Add to `.env.local`:
   ```env
   GOOGLE_PLACES_API_KEY=your_key
   NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...   # optional; auto-found from business name if omitted
   ```
3. Run:
   ```bash
   npm run fetch-reviews
   npm run build
   ```

Or paste reviews manually into `src/data/reviews.json`.

## Pages

- `/en/` Home
- `/en/about/` About
- `/en/lessons/` Lessons
- `/en/areas/` Areas covered
- `/en/contact/` Contact

Same paths under `/ur/` (plus the base path on GitHub Pages).
