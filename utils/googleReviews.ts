// Google Reviews Configuration
// Update these values from your Google Business Profile
// Or integrate with Google Places API for automatic updates

export const googleReviews = {
  rating: 4.0,           // Overall rating (0-5)
  reviewCount: 62,       // Total number of reviews
  businessName: "Zaman Tyre Trader",
  businessId: "ChIJ...", // Google Place ID (optional, for direct links)
  businessUrl: "https://share.google/2AT8HhaeE0Ozcd7aY",
  location: "GT Rd, Cantt, Wah",
};

// Helper function to get review data
export const getGoogleReviewStats = () => {
  return {
    rating: googleReviews.rating,
    count: googleReviews.reviewCount,
    stars: Math.round(googleReviews.rating * 10) / 10,
  };
};

// Helper function to generate star array
export const getStarArray = (rating: number) => {
  return [...Array(5)].map((_, i) => i < Math.floor(rating));
};
