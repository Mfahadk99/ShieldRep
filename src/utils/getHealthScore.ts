export function calculateHealthScore({
  insights,
  reviews,
  media,
  posts,
}: {
  insights: any;
  reviews: any;
  media: any;
  posts: any;
}) {
  const coreInfo = 100; // assuming profile exists

  const services = insights?.locationMetrics[0]?.timeSeries[0]?.value
    ? Math.min(
        100,
        insights.locationMetrics[0].timeSeries[0].value.searchViews / 20
      )
    : 0;

  const productsOffers = posts?.posts?.length
    ? Math.min(100, posts.posts.length * 20)
    : 0;

  const mediaAndQA = media?.mediaItems?.length
    ? Math.min(100, media.mediaItems.length * 15)
    : 0;

  const reviewsSocials = reviews?.reviews?.length
    ? Math.min(
        100,
        (reviews.reviews.reduce((acc: number, r: any) => {
          const ratingValue =
            r.starRating === "FIVE" ? 5 : r.starRating === "FOUR" ? 4 : 3;
          return acc + ratingValue;
        }, 0) /
          reviews.reviews.length) *
          20
      )
    : 0;

  const score = Math.round(
    (coreInfo + services + productsOffers + mediaAndQA + reviewsSocials) / 5
  );

  return {
    score,
    breakdown: {
      coreInfo,
      services,
      productsOffers,
      mediaAndQA,
      reviewsSocials,
    },
  };
}
