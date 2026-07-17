import reviewsData from "../data/reviews.json";
import { siteConfig } from "../lib/config";
import type { Dictionary } from "../lib/i18n/dictionaries/en";

type Review = {
  author: string;
  rating: number;
  text: string;
  date?: string;
};

type ReviewsProps = {
  dict: Dictionary;
};

export function Reviews({ dict }: ReviewsProps) {
  if (!siteConfig.showReviews) {
    return null;
  }

  const reviews = (reviewsData.reviews ?? []) as Review[];
  const rating = reviewsData.rating ?? 0;
  const totalCount = reviewsData.totalCount ?? reviews.length;
  const reviewsUrl =
    reviewsData.googleMapsReviewsUrl || siteConfig.reviewsUrl || siteConfig.mapsUrl;

  return (
    <section className="section section-muted" id="reviews">
      <div className="container">
        <p className="kicker">Google</p>
        <h2 className="section-title">{dict.home.reviewsTitle}</h2>
        <p className="section-lead">{dict.home.reviewsLead}</p>

        {totalCount > 0 ? (
          <p className="mt-4 text-lg font-semibold text-ink">
            {rating.toFixed(1)} / 5 · {totalCount} {dict.home.reviewsCountLabel}
          </p>
        ) : null}

        {reviews.length > 0 ? (
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li
                key={`${review.author}-${review.date ?? review.text.slice(0, 24)}`}
                className="border-t-4 border-brand-gold bg-bg-elevated p-5"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="m-0 font-semibold">{review.author}</p>
                  <p
                    className="m-0 text-sm text-brand-red"
                    aria-label={`${review.rating} stars`}
                  >
                    {"★".repeat(Math.round(review.rating))}
                  </p>
                </div>
                {review.date ? (
                  <p className="mb-3 text-xs text-ink-muted">{review.date}</p>
                ) : null}
                <p className="m-0 text-ink-muted">{review.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 text-ink-muted">{dict.home.reviewsEmpty}</p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {dict.home.viewGoogleReviews}
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {dict.common.openMaps}
          </a>
        </div>
      </div>
    </section>
  );
}
