# Hamza Driving Academy — static site

Next.js static export for Cloudflare Pages. English / Urdu.

## Quick start

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000/en/](http://localhost:3000/en/).

## Static build

```bash
npm run build
```

Output is in `web/out/` — upload that folder to Cloudflare Pages, or connect the repo:

| Setting | Value |
|---|---|
| Root directory | `web` |
| Build command | `npm run build` |
| Output directory | `out` |

## Environment variables

All public site values live in `.env.local` (see `.env.example`). After changing them, rebuild and redeploy.

Important keys:

- `NEXT_PUBLIC_SITE_URL` — temporary `*.pages.dev` URL now; swap to your domain later
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

Same paths under `/ur/`.
