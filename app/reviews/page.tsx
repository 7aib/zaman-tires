import { Metadata } from "next";
import ReviewsHero from "@/components/ReviewsHero";
import GoogleReviews from "@/components/GoogleReviews";
import ReviewStats from "@/components/ReviewStats";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Customer Reviews - 4.0★ Rating | Zaman tyre Trader Wah Cantt",
  description:
    "Read 62+ customer reviews for Zaman tyre Trader in Wah Cantt. 4.0 star rating with testimonials about tire services, wheel alignment, and customer service.",
  openGraph: {
    title: "Customer Reviews - 4.0★ Rating | Zaman tyre Trader",
    description:
      "Read customer reviews and testimonials for Zaman tyre Trader in Wah Cantt.",
  },
};

export default function Reviews() {
  return (
    <>
      <ReviewsHero />
      <ReviewStats />
      <GoogleReviews />
      <CTASection />
    </>
  );
}
