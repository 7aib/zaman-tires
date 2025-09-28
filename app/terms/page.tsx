import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Zaman tyre Trader",
  description:
    "Terms of service for Zaman tyre Trader website. Read our terms and conditions.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Services
            </h2>
            <p className="text-gray-600 mb-4">
              Zaman tyre Trader provides tire and automotive services. All
              services are subject to availability and terms of service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <ul className="text-gray-600">
              <li>Phone: 0300 5888776</li>
              <li>Address: GT Rd, Cantt, Wah, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
