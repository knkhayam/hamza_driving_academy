/**
 * Fetch up to 5 Google reviews via Places API and write src/data/reviews.json
 *
 * Setup:
 * 1. Enable Places API in Google Cloud
 * 2. Add to .env.local:
 *    GOOGLE_PLACES_API_KEY=...
 *    NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJ...   (optional — auto-resolved from business name if omitted)
 * 3. Run: npm run fetch-reviews
 *
 * Google only returns a max of 5 reviews via the API.
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { config as loadEnv } from "dotenv";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

loadEnv({ path: resolve(root, ".env.local") });
loadEnv({ path: resolve(root, ".env") });

const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
const placeIdEnv = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID?.trim();
const mapsUrl = process.env.NEXT_PUBLIC_MAPS_URL?.trim();
const businessName =
  process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Hamza Driving Academy";
const city = process.env.NEXT_PUBLIC_CITY?.trim() || "Derby";

if (!apiKey) {
  console.error(
    "Missing GOOGLE_PLACES_API_KEY in .env.local\n" +
      "Without an API key we can only link to Google Maps (already enabled on the site).\n" +
      "Create a key: https://console.cloud.google.com/apis/credentials",
  );
  process.exit(1);
}

async function findPlaceId() {
  if (placeIdEnv) return placeIdEnv;

  const query = `${businessName} ${city}`;
  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
  );
  url.searchParams.set("input", query);
  url.searchParams.set("inputtype", "textquery");
  url.searchParams.set("fields", "place_id,name,formatted_address");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK" || !data.candidates?.[0]?.place_id) {
    throw new Error(
      `Could not find Place ID for "${query}". Status: ${data.status}. ` +
        `Set NEXT_PUBLIC_GOOGLE_PLACE_ID manually.`,
    );
  }

  const found = data.candidates[0];
  console.log(`Resolved Place ID: ${found.place_id} (${found.name})`);
  return found.place_id;
}

async function fetchDetails(placeId) {
  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/details/json",
  );
  url.searchParams.set("place_id", placeId);
  url.searchParams.set(
    "fields",
    "name,rating,user_ratings_total,url,reviews",
  );
  url.searchParams.set("reviews_sort", "newest");
  url.searchParams.set("key", apiKey);

  const res = await fetch(url);
  const data = await res.json();

  if (data.status !== "OK" || !data.result) {
    throw new Error(
      `Place Details failed: ${data.status} ${data.error_message || ""}`.trim(),
    );
  }

  return data.result;
}

function formatDate(timestamp) {
  if (!timestamp) return undefined;
  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

const placeId = await findPlaceId();
const details = await fetchDetails(placeId);

const reviews = (details.reviews || []).map((review) => ({
  author: review.author_name || "Google user",
  rating: review.rating ?? 5,
  text: review.text || "",
  date: formatDate(review.time),
}));

const payload = {
  rating: details.rating ?? 0,
  totalCount: details.user_ratings_total ?? reviews.length,
  placeId,
  googleMapsReviewsUrl: details.url || mapsUrl || "",
  fetchedAt: new Date().toISOString(),
  reviews,
};

const outPath = resolve(root, "src/data/reviews.json");
writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(
  `Wrote ${reviews.length} review(s) to src/data/reviews.json ` +
    `(${payload.rating}/5 from ${payload.totalCount} total).`,
);
console.log("Tip: keep NEXT_PUBLIC_SHOW_REVIEWS=true and rebuild the site.");
