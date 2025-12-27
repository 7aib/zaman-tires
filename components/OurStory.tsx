"use client";

import { motion } from "motion/react";
import { Award, Users, MapPin, Clock, Star, CheckCircle } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      year: "2019",
      title: "Established",
      description:
        "Zaman tyre Trader opened its doors in Wah Cantt, starting with a vision to provide quality tire services.",
    },
    {
      year: "2020",
      title: "Expanded Services",
      description:
        "Added wheel alignment, balancing, and comprehensive automotive services to our portfolio.",
    },
    {
      year: "2021",
      title: "Brand Partnerships",
      description:
        "Established partnerships with major tire manufacturers, expanding our inventory to 50+ brands.",
    },
    {
      year: "2022",
      title: "Community Recognition",
      description:
        "Became the go-to tire shop in Wah Cantt, earning recognition for exceptional customer service.",
    },
    {
      year: "2023",
      title: "90+ Brands",
      description:
        "Achieved milestone of stocking 90+ tire brands, becoming the most comprehensive tire shop in the area.",
    },
    {
      year: "2024",
      title: "4.0 Rating",
      description:
        "Maintained excellent customer satisfaction with 4.0-star rating and 62+ positive reviews.",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We never compromise on quality. Every tire and service meets our high standards.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do. Your satisfaction is our priority.",
    },
    {
      icon: CheckCircle,
      title: "Trust & Reliability",
      description:
        "Building trust through consistent, reliable service and honest business practices.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "Striving for excellence in every interaction, from consultation to service delivery.",
    },
  ];

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
            Our <span className="text-primary-600">Story</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming Wah Cantt's most trusted tire
            shop, our journey has been driven by a commitment to quality and
            customer satisfaction.
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted by Thousands of Customers
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Zaman tyre Trader was established with a simple mission: to
              provide the highest quality tire services to the community of Wah
              Cantt and surrounding areas. What started as a small tire shop has
              grown into the most comprehensive automotive service center in the
              region.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Today, we stock over 90+ tire brands, from premium international
              manufacturers like Yokohama, Dunlop, and Michelin to quality
              Chinese brands that offer excellent value. Our expert team
              provides professional tire installation, wheel alignment,
              balancing, and a full range of automotive services.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located conveniently on GT Road, Cantt, Wah, we've become the
              preferred choice for thousands of satisfied customers who trust us
              with their vehicle maintenance needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="w-full h-96 rounded-2xl bg-cover bg-center bg-no-repeat shadow-2xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
              }}
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">4.0</div>
              <div className="text-primary-100">Star Rating</div>
              <div className="text-sm text-primary-200">62+ Reviews</div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {milestone.year.slice(-2)}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {milestone.title}
                        </h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-8 h-8 bg-primary-600 rounded-full items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  <div className="w-full md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
