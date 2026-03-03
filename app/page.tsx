import HeroSection from "@/components/HeroSection";
import ProductFlow from "@/components/ProductFlow";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best Tire Shop in Wah Cantt & Islamabad - Zaman tyre Trader | 90+ Brands",
  description:
    "Leading tire shop in Wah Cantt and Islamabad B-17 offering premium tires, rims, wheel alignment, and automotive services. 90+ brands including Yokohama, Dunlop, Michelin.",
  openGraph: {
    title: "Best Tire Shop in Wah Cantt & Islamabad - Zaman tyre Trader",
    description:
      "Leading tire shop in Wah Cantt and Islamabad B-17 offering premium tires, rims, wheel alignment, and automotive services.",
    images: ["/hero-tires.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductFlow />
      <ServicesSection />
      {/* <BrandsSection /> */}
      <WhyChooseUs />
      <TestimonialsSection />
      {/* <CTASection /> */}
    </>
  );
}
