import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap - Zaman tyre Trader",
  description:
    "Complete sitemap for Zaman tyre Trader website. Find all pages and sections.",
};

export default function Sitemap() {
  const pages = [
    {
      url: "/",
      title: "Home",
      description: "Main homepage with hero banner and services overview",
    },
    {
      url: "/about",
      title: "About Us",
      description: "Learn about Zaman tyre Trader history and team",
    },
    {
      url: "/services",
      title: "Services",
      description:
        "Detailed information about our tire and automotive services",
    },
    {
      url: "/brands",
      title: "Brands",
      description: "90+ tire brands available at our shop",
    },
    {
      url: "/products",
      title: "Products",
      description: "New and used tires for cars, SUVs, and pickups",
    },
    {
      url: "/contact",
      title: "Contact",
      description: "Contact information, location, and business hours",
    },
    {
      url: "/reviews",
      title: "Reviews",
      description: "Customer reviews and testimonials",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>

          <div className="space-y-6">
            {pages.map((page, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 last:border-b-0"
              >
                <Link
                  href={page.url}
                  className="text-xl font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  {page.title}
                </Link>
                <p className="text-gray-600 mt-2">{page.description}</p>
                <p className="text-sm text-gray-500 mt-1">{page.url}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
