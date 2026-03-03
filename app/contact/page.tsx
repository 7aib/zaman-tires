import { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import BusinessHours from "@/components/BusinessHours";

export const metadata: Metadata = {
  title: "Contact Zaman tyre Trader - Wah Cantt & Islamabad | Phone: 0300 5888776",
  description:
    "Visit Zaman tyre Trader in Wah Cantt or our new Islamabad B-17 branch. Phone: 0300 5888776. Premium tires, rims, and automotive services at both locations.",
  openGraph: {
    title: "Contact Zaman tyre Trader - Wah Cantt & Islamabad",
    description:
      "Contact us at 0300 5888776. Locations in Wah Cantt and Islamabad B-17. Open daily 9 AM - 9 PM.",
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <GoogleMap />
      </div>
      <BusinessHours />
    </>
  );
}
