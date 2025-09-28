"use client";

import { motion } from "motion/react";
import {
  Shield,
  Award,
  Clock,
  Users,
  Star,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "90+ Tire Brands",
      description:
        "Wide selection of premium imported and Chinese tire brands to meet every need and budget.",
    },
    {
      icon: Shield,
      title: "Trusted Service",
      description:
        "Established tire shop in Wah Cantt with years of experience and thousands of satisfied customers.",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description:
        "Fast and efficient tire services without compromising on quality. Get back on the road quickly.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Professional technicians with extensive experience in tire installation and automotive services.",
    },
    {
      icon: Star,
      title: "4.0 Rating",
      description:
        "Highly rated by our customers with 62+ positive reviews on Google.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description:
        "All our services come with quality assurance and customer satisfaction guarantee.",
    },
  ];

  const stats = [
    { number: "90+", label: "Tire Brands" },
    { number: "1000+", label: "Happy Customers" },
    { number: "4.0", label: "Star Rating" },
    { number: "20+", label: "Years Experience" },
  ];

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-primary-400">Zaman Tyres Trader</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are Wah Cantt's most trusted tire shop, offering premium services
            with unmatched quality and customer satisfaction.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Location & Contact Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conveniently Located in Wah Cantt
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Easy to find on GT Road, Cantt, Wah. Open daily from 9 AM to 9 PM.
            Call us or visit our shop for all your tire needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-3 text-white">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">GT Rd, Cantt, Wah</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Phone className="h-6 w-6" />
              <span className="text-lg">0300 5888776</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+923005888776"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border border-primary-500 transition-colors duration-200"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
