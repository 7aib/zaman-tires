import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Zaman tyre Trader",
  description:
    "Privacy policy for Zaman tyre Trader website. Learn how we collect, use, and protect your personal information.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when
              you contact us, request services, or fill out our contact form.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to provide, maintain, and
              improve our services, communicate with you, and respond to your
              inquiries.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
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
