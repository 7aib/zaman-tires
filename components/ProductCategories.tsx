"use client";

import { motion } from "motion/react";
import { Car, Truck, Zap, Star, Shield, Award } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      icon: Car,
      title: "Car Tires",
      subtitle: "Perfect for Sedans & Hatchbacks",
      description:
        "Comprehensive selection of car tires for all makes and models. From economy to premium options, we have tires for every car owner.",
      features: [
        "Economy to Premium Options",
        "All Season Tires Available",
        "High Performance Variants",
        "Fuel Efficient Models",
        "Quiet & Comfortable Ride",
        "Warranty Protection",
      ],
      sizes: ['12" - 19"', "145/70R12 to 225/45R19", "Various Speed Ratings"],
      brands: ["Yokohama", "Dunlop", "Michelin", "Goodyear", "Bridgestone"],
      priceRange: "PKR 3,000 - 109,000",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Truck,
      title: "SUV Tires",
      subtitle: "Built for Adventure & Performance",
      description:
        "Robust SUV tires designed for enhanced performance, durability, and safety. Perfect for both city driving and off-road adventures.",
      features: [
        "Enhanced Traction & Grip",
        "Durable Construction",
        "All Terrain Options",
        "Heavy Duty Performance",
        "Weather Resistant",
        "Extended Tread Life",
      ],
      sizes: ['15" - 22"', "215/70R15 to 285/60R22", "Load Rating E & F"],
      brands: ["Yokohama", "Dunlop", "Michelin", "Goodyear", "Bridgestone"],
      priceRange: "PKR 8,000 - 45,000",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Zap,
      title: "Pickup Tires",
      subtitle: "Heavy Duty & Commercial Grade",
      description:
        "Heavy-duty pickup tires designed for commercial use, towing, and hauling. Built to withstand the toughest conditions.",
      features: [
        "Commercial Grade Quality",
        "High Load Capacity",
        "Towing & Hauling Ready",
        "Durable Sidewalls",
        "Long Tread Life",
        "Cost Effective",
      ],
      sizes: ['15" - 18"', "225/70R15 to 265/65R18", "Load Rating D, E & F"],
      brands: ["Yokohama", "Dunlop", "Michelin", "Goodyear", "Bridgestone"],
      priceRange: "PKR 6,000 - 35,000",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="section-padding bg-gray-900">
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
            Tire <span className="text-primary-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Specialized tire solutions for different vehicle types. Each
            category is designed to meet specific performance requirements and
            driving conditions.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-5`}
                />

                <div
                  className={`relative ${category.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-3">
                      {category.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Star className="h-4 w-4 text-primary-600 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-2 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Award className="h-4 w-4 text-primary-600 mr-2" />
                        Available Sizes
                      </h4>
                      <div className="space-y-1">
                        {category.sizes.map((size, sizeIndex) => (
                          <p
                            key={sizeIndex}
                            className="text-sm text-gray-600 bg-white rounded px-2 py-1"
                          >
                            {size}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Popular Brands
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {category.brands.map((brand, brandIndex) => (
                          <span
                            key={brandIndex}
                            className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Price Range
                      </h4>
                      <p className="text-sm text-primary-600 font-semibold">
                        {category.priceRange}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200">
                    <a
                      href="/contact"
                      className={`block w-full bg-gradient-to-r ${category.color} text-white font-semibold py-3 px-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      View {category.title}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">
                Need Help Choosing?
              </h3>
              <p className="text-gray-400 mb-6">
                Our expert team can help you select the perfect tires for your
                vehicle. We consider your driving habits, vehicle
                specifications, and budget to recommend the best options.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Free consultation and recommendations</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Expert installation and warranty</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-600">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span>Quality assurance and customer satisfaction</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vehicle Compatibility
              </h3>
              <p className="text-gray-600 mb-6">
                We stock tires for all major vehicle makes and models. From
                compact cars to heavy-duty pickups, we have the right tire for
                your specific vehicle requirements.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Car className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Cars</p>
                  <p className="text-xs text-gray-600">All Makes & Models</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">SUVs</p>
                  <p className="text-xs text-gray-600">Crossovers & SUVs</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">Pickups</p>
                  <p className="text-xs text-gray-600">Light & Heavy Duty</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Commercial
                  </p>
                  <p className="text-xs text-gray-600">Commercial Vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
