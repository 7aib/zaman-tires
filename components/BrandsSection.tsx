"use client";

import { motion } from "motion/react";
import Link from "next/link";

const BrandsSection = () => {
  const brands = [
    { name: "Yokohama", logo: "Y", color: "bg-red-600" },
    { name: "Dunlop", logo: "D", color: "bg-blue-600" },
    { name: "Michelin", logo: "M", color: "bg-yellow-600" },
    { name: "Goodyear", logo: "G", color: "bg-green-600" },
    { name: "Bridgestone", logo: "B", color: "bg-purple-600" },
    { name: "New Age", logo: "N", color: "bg-indigo-600" },
    { name: "Continental", logo: "C", color: "bg-orange-600" },
    { name: "Pirelli", logo: "P", color: "bg-pink-600" },
    { name: "Hankook", logo: "H", color: "bg-teal-600" },
    { name: "Toyo", logo: "T", color: "bg-cyan-600" },
    { name: "Falken", logo: "F", color: "bg-lime-600" },
    { name: "Nexen", logo: "N", color: "bg-emerald-600" },
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
            Premium <span className="text-primary-600">Tire Brands</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We stock over 90+ tire brands including world-renowned
            manufacturers. From premium imported tires to quality Chinese
            brands, we have it all.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:bg-gray-700">
                <div
                  className={`w-16 h-16 ${brand.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-xl">
                    {brand.logo}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-300 text-sm">
                  {brand.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Brands CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
              90+ Tire Brands Available
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              From premium international brands to quality local manufacturers,
              we have the perfect tire for every vehicle and budget.
            </p>

            {/* Brand Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-gray-700 rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  Premium Brands
                </h4>
                <p className="text-gray-500 text-sm">
                  Premium international tire manufacturers including Yokohama,
                  Dunlop, Michelin, Goodyear, Bridgestone, and many more.
                </p>
              </div>
              <div className="bg-gray-700 rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-300 mb-3">
                  Chinese Brands
                </h4>
                <p className="text-gray-500 text-sm">
                  Quality Chinese tire brands offering excellent value for
                  money. Perfect for budget-conscious customers without
                  compromising on quality.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/brands" className="btn-primary">
                View All Brands
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
