"use client";

import { motion } from "motion/react";
import { Star, Quote, ExternalLink, MessageCircle } from "lucide-react";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Ahmed Ali",
      location: "Wah Cantt",
      rating: 5,
      date: "2 weeks ago",
      text: "Excellent service! Got my tires changed quickly and professionally. The staff is very knowledgeable and friendly. Highly recommended for all tire needs.",
      service: "Tire Change",
      verified: true,
    },
    {
      name: "Sara Khan",
      location: "Rawalpindi",
      rating: 5,
      date: "1 month ago",
      text: "Best tire shop in Wah Cantt. They have a huge variety of brands and the prices are very reasonable. Will definitely come back for future tire needs.",
      service: "Tire Purchase",
      verified: true,
    },
    {
      name: "Muhammad Hassan",
      location: "Islamabad",
      rating: 4,
      date: "3 weeks ago",
      text: "Good quality tires and professional service. The wheel alignment was done perfectly. My car drives much smoother now. Great value for money.",
      service: "Wheel Alignment",
      verified: true,
    },
    {
      name: "Fatima Ahmed",
      location: "Wah Cantt",
      rating: 5,
      date: "1 week ago",
      text: "Very satisfied with their service. They explained everything clearly and the work was done on time. Great customer service and fair pricing.",
      service: "Oil Change",
      verified: true,
    },
    {
      name: "Ali Raza",
      location: "Taxila",
      rating: 5,
      date: "2 months ago",
      text: "Professional team and excellent work. Got my SUV tires changed and the service was outstanding. Highly recommended for all automotive needs.",
      service: "SUV Tire Change",
      verified: true,
    },
    {
      name: "Aisha Malik",
      location: "Wah Cantt",
      rating: 4,
      date: "1 month ago",
      text: "Good experience overall. They have all the major tire brands and the installation was done properly. Will visit again for future tire needs.",
      service: "Tire Installation",
      verified: true,
    },
    {
      name: "Hassan Sheikh",
      location: "Rawalpindi",
      rating: 5,
      date: "3 weeks ago",
      text: "Outstanding service! The team was very professional and the work quality was excellent. Fair prices and quick service. Highly recommended!",
      service: "Wheel Balance",
      verified: true,
    },
    {
      name: "Zainab Ali",
      location: "Wah Cantt",
      rating: 4,
      date: "2 weeks ago",
      text: "Great service and friendly staff. They helped me choose the right tires for my car and the installation was done perfectly. Good value for money.",
      service: "Tire Consultation",
      verified: true,
    },
    {
      name: "Omar Khan",
      location: "Islamabad",
      rating: 5,
      date: "1 month ago",
      text: "Excellent tire shop with professional service. They have a wide selection of brands and the staff is very helpful. Will definitely return.",
      service: "Tire Purchase",
      verified: true,
    },
  ];

  const getServiceColor = (service: string) => {
    const colors = {
      "Tire Change": "bg-blue-100 text-blue-800",
      "Tire Purchase": "bg-green-100 text-green-800",
      "Wheel Alignment": "bg-purple-100 text-purple-800",
      "Oil Change": "bg-orange-100 text-orange-800",
      "SUV Tire Change": "bg-red-100 text-red-800",
      "Tire Installation": "bg-indigo-100 text-indigo-800",
      "Wheel Balance": "bg-pink-100 text-pink-800",
      "Tire Consultation": "bg-yellow-100 text-yellow-800",
    };
    return (
      colors[service as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <section className="section-padding bg-black">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
            Customer <span className="text-primary-600">Reviews</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real reviews from our satisfied customers. Read what people are
            saying about their experience with Zaman tyre Trader.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Service Tag */}
              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getServiceColor(
                    review.service
                  )}`}
                >
                  {review.service}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                    <span>{review.name}</span>
                    {review.verified && (
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <div className="text-sm text-gray-400">{review.date}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See More Reviews on Google
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Read all our reviews on Google and see why customers trust us with
              their tire needs. Join hundreds of satisfied customers who have
              rated us 4.0 stars.
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-8 w-8 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">4.0</div>
                <div className="text-gray-600">Google Reviews</div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=Zaman+tyre+Trader+Wah+Cantt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>View All Google Reviews</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Write Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Had a Great Experience?</h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We'd love to hear about your experience! Your feedback helps us
              improve our services and helps other customers make informed
              decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://www.google.com/search?q=Zaman+tyre+Trader+Wah+Cantt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Write a Google Review
              </a>
              <a
                href="tel:+923005888776"
                className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border border-primary-500 transition-colors duration-200"
              >
                Call Us: 0300 5888776
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
