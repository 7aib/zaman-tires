import { Metadata } from "next";
import ProductsHero from "@/components/ProductsHero";
import ProductCategories from "@/components/ProductCategories";
import NewVsOldTires from "@/components/NewVsOldTires";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title:
    "Tire Products in Wah Cantt - New & Used Tires for Cars, SUVs, Pickups | Zaman tyre Trader",
  description:
    "Wide selection of new and used tires for cars, SUVs, and pickups in Wah Cantt. Premium brands available with expert installation and warranty.",
  openGraph: {
    title: "Tire Products - New & Used Tires Wah Cantt | Zaman tyre Trader",
    description:
      "Wide selection of new and used tires for all vehicle types in Wah Cantt.",
  },
};

export default function Products() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <NewVsOldTires />
      <CTASection />
    </>
  );
}
