import { Metadata } from "next";
import BrandsHero from "@/components/BrandsHero";
import PremiumBrands from "@/components/PremiumBrands";
import AllBrands from "@/components/AllBrands";
import BrandCategories from "@/components/BrandCategories";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Tire Brands in Wah Cantt - Yokohama, Dunlop, Michelin, Goodyear | Zaman tyre Trader",
  description:
    "90+ tire brands available at Zaman tyre Trader Wah Cantt. Premium imported brands like Yokohama, Dunlop, Michelin, Goodyear, Bridgestone and quality Chinese brands.",
  openGraph: {
    title: "90+ Tire Brands Available - Zaman tyre Trader Wah Cantt",
    description:
      "Premium imported and quality Chinese tire brands available at Zaman tyre Trader.",
  },
};

export default function Brands() {
  return (
    <>
      <BrandsHero />
      <PremiumBrands />
      <BrandCategories />
      <AllBrands />
      <CTASection />
    </>
  );
}
