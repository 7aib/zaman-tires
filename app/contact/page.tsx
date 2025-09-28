import { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import BusinessHours from "@/components/BusinessHours";

export const metadata: Metadata = {
  title: "Contact Zaman tyre Trader - Phone: 0300 5888776 | GT Rd, Cantt, Wah",
  description:
    "Contact Zaman tyre Trader in Wah Cantt. Phone: 0300 5888776. Located on GT Rd, Cantt, Wah. Open 9 AM - 9 PM daily. Get directions and visit our tire shop.",
  openGraph: {
    title: "Contact Zaman tyre Trader - Wah Cantt Tire Shop",
    description:
      "Contact us at 0300 5888776. Located on GT Rd, Cantt, Wah. Open daily 9 AM - 9 PM.",
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
