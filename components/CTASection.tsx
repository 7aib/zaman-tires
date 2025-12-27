"use client";

import { motion } from "motion/react";
import { Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't wait! Contact Zaman tyre Trader today for all your tire and
            automotive service needs. We're here to help you get back on the
            road safely.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a
              href="tel:+923005888776"
              className="bg-gray-800 text-gray-300 hover:bg-gray-700 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 text-lg"
            >
              <Phone className="h-6 w-6" />
              <span>Call Now: 0300 5888776</span>
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-lg border border-primary-500 transition-all duration-300 hover:scale-105 flex items-center space-x-3 text-lg"
            >
              <MapPin className="h-6 w-6" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Call */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-primary-100 mb-4">
                Speak directly with our experts
              </p>
              <a
                href="tel:+923005888776"
                className="inline-flex items-center space-x-2 text-white hover:text-primary-200 font-medium transition-colors"
              >
                <span>0300 5888776</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Visit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
              <p className="text-primary-100 mb-4">
                Come to our shop in Wah Cantt
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-white hover:text-primary-200 font-medium transition-colors"
              >
                <span>Get Directions</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Book Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Book Service</h3>
              <p className="text-primary-100 mb-4">
                Schedule your appointment online
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 text-white hover:text-primary-200 font-medium transition-colors"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
              <div className="flex justify-end">
                <span>Saturday - Thursday:</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">9:00 AM - 9:00 PM</span>
              </div>
            </div>
            <p className="text-primary-100 mt-4 text-sm">
              We're open 6 days a week to serve you better!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
