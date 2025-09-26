"use client";

import { motion } from "motion/react";
import { Clock, Calendar, Phone, MapPin } from "lucide-react";

const BusinessHours = () => {
  const hours = [
    { day: "Monday", hours: "9:00 AM - 9:00 PM", status: "open" },
    { day: "Tuesday", hours: "9:00 AM - 9:00 PM", status: "open" },
    { day: "Wednesday", hours: "9:00 AM - 9:00 PM", status: "open" },
    { day: "Thursday", hours: "9:00 AM - 9:00 PM", status: "open" },
    { day: "Friday", hours: "9:00 AM - 9:00 PM", status: "close" },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM", status: "open" },
    { day: "Sunday", hours: "9:00 AM - 9:00 PM", status: "open" },
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= 9 && currentHour < 21;
    return isOpen ? "Open Now" : "Closed";
  };

  const getCurrentStatusColor = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const isOpen = currentHour >= 9 && currentHour < 21;
    return isOpen ? "text-green-600" : "text-red-600";
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Business <span className="text-primary-600">Hours</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're open 7 days a week to serve you better. Extended hours ensure
            you can get your tire services when it's most convenient for you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hours Table */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Operating Hours
                  </h3>
                  <p
                    className={`text-lg font-semibold ${getCurrentStatusColor()}`}
                  >
                    {getCurrentStatus()}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {hours.map((day, index) => (
                  <div
                    key={day.day}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-semibold text-gray-900">
                      {day.day}
                    </span>
                    <span className="text-gray-600">{day.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-800 text-center">
                  <strong>Note:</strong> We're open every day including weekends
                  and public holidays to ensure you're never left stranded with
                  tire issues.
                </p>
              </div>
            </motion.div>

            {/* Contact & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Quick Contact
                    </h3>
                    <p className="text-gray-600">
                      Call us anytime during business hours
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a
                        href="tel:+923005888776"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        0300 5888776
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        GT Rd, Cantt, Wah, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+923005888776"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://share.google/v8LnVtVICJoSqbK1Q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors duration-200"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Special Services */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Special Services
                    </h3>
                    <p className="text-gray-600">
                      Additional convenience for our customers
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Emergency Service
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Available for urgent tire issues
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Appointment Booking
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Schedule your service in advance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Waiting Area
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Comfortable seating while we work
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Free Consultation
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Expert advice on tire selection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Visit Us?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Come visit our shop during business hours for the best tire
              services in Wah Cantt. No appointment necessary for most services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+923005888776"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Call: 0300 5888776
              </a>
              <a
                href="https://share.google/v8LnVtVICJoSqbK1Q"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border border-primary-500 transition-colors duration-200"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessHours;
