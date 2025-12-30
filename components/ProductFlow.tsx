"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

const ProductFlow = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );

  const categories = {
    rims: {
      name: "Rims",
      subcategories: [
        "12 inches",
        "13 inches",
        "14 inches",
        "15 inches",
        "16 inches",
        "17 inches",
        "18 inches",
        "19 inches",
        "20 inches",
        "21 inches",
      ],
    },
    tires: {
      name: "Tires",
      subcategories: [
        "Michelin",
        "Yokohama",
        "Bridgestone",
        "Continental",
        "Good Year",
        "Tracmax",
      ],
    },
  };

  const products = {
    rims: {
      "12 inches": [
        {
          id: 1,
          name: "12 inch Steel Rim",
          price: "PKR 2,500",
          image: "/images/rims/12-rim-1.jpg",
        },
        {
          id: 2,
          name: "12 inch Alloy Rim",
          price: "PKR 3,500",
          image: "/images/rims/12-rim-2.jpg",
        },
      ],
      "13 inches": [
        {
          id: 3,
          name: "13 inch Steel Rim",
          price: "PKR 2,800",
          image: "/images/rims/13-rim-1.jpg",
        },
      ],
      "14 inches": [
        {
          id: 4,
          name: "14 inch Alloy Rim",
          price: "PKR 4,500",
          image: "/images/rims/14-rim-1.jpg",
        },
      ],
      "15 inches": [
        {
          id: 5,
          name: "15 inch Steel Rim",
          price: "PKR 3,200",
          image: "/images/rims/15-rim-1.jpg",
        },
      ],
      "16 inches": [
        {
          id: 6,
          name: "16 inch Alloy Rim",
          price: "PKR 5,500",
          image: "/images/rims/16-rim-1.jpg",
        },
      ],
      "17 inches": [
        {
          id: 7,
          name: "17 inch Alloy Rim",
          price: "PKR 6,500",
          image: "/images/rims/17-rim-1.jpg",
        },
      ],
      "18 inches": [
        {
          id: 8,
          name: "18 inch Alloy Rim",
          price: "PKR 7,500",
          image: "/images/rims/18-rim-1.jpg",
        },
      ],
      "19 inches": [
        {
          id: 9,
          name: "19 inch Alloy Rim",
          price: "PKR 8,500",
          image: "/images/rims/19-rim-1.jpg",
        },
      ],
      "20 inches": [
        {
          id: 10,
          name: "20 inch Alloy Rim",
          price: "PKR 9,500",
          image: "/images/rims/20-rim-1.jpg",
        },
      ],
      "21 inches": [
        {
          id: 11,
          name: "21 inch Alloy Rim",
          price: "PKR 10,500",
          image: "/images/rims/21-rim-1.jpg",
        },
      ],
    },
    tires: {
      Michelin: [
        {
          id: 12,
          name: "Michelin Pilot Sport",
          price: "PKR 12,500",
          image: "/images/tires/michelin-1.jpg",
        },
        {
          id: 13,
          name: "Michelin Defender",
          price: "PKR 8,500",
          image: "/images/tires/michelin-2.jpg",
        },
      ],
      Yokohama: [
        {
          id: 14,
          name: "Yokohama AVID",
          price: "PKR 9,500",
          image: "/images/tires/yokohama-1.jpg",
        },
      ],
      Bridgestone: [
        {
          id: 15,
          name: "Bridgestone Turanza",
          price: "PKR 10,500",
          image: "/images/tires/bridgestone-1.jpg",
        },
      ],
      Continental: [
        {
          id: 16,
          name: "Continental PureContact",
          price: "PKR 11,500",
          image: "/images/tires/continental-1.jpg",
        },
      ],
      "Good Year": [
        {
          id: 17,
          name: "Good Year Excellence",
          price: "PKR 9,800",
          image: "/images/tires/goodyear-1.jpg",
        },
      ],
      Tracmax: [
        {
          id: 18,
          name: "Tracmax Tarmac",
          price: "PKR 7,500",
          image: "/images/tires/tracmax-1.jpg",
        },
      ],
    },
  };

  const handleCategorySelect = (category: "rims" | "tires") => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
  };

  const handleBackToCategory = () => {
    setSelectedSubcategory(null);
  };

  const currentProducts =
    selectedCategory && selectedSubcategory
      ? (products[selectedCategory as keyof typeof products]?.[selectedSubcategory] || [])
      : [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Fit
          </h2>
          <p className="text-gray-600 text-lg">
            Browse our extensive collection of rims and tires
          </p>
        </motion.div>

        {/* Category Selection */}
        <AnimatePresence mode="wait">
          {!selectedCategory ? (
            <motion.div
              key="categories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {Object.entries(categories).map(([key, category]) => (
                <motion.button
                  key={key}
                  onClick={() => handleCategorySelect(key as "rims" | "tires")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary-600 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600">
                        {category.subcategories.length} options available
                      </p>
                    </div>
                    <ChevronRight className="h-8 w-8 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : !selectedSubcategory ? (
            /* Subcategory Selection */
            <motion.div
              key="subcategories"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleBack}
                className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <ChevronRight className="h-5 w-5 mr-1 rotate-180" />
                Back to Categories
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Select {categories[selectedCategory as keyof typeof categories].name} Size
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {categories[selectedCategory as keyof typeof categories].subcategories.map(
                  (subcat) => (
                    <motion.button
                      key={subcat}
                      onClick={() => handleSubcategorySelect(subcat)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-primary-50 transition-all border-2 border-gray-200 hover:border-primary-600 font-medium text-gray-900"
                    >
                      {subcat}
                    </motion.button>
                  )
                )}
              </div>
            </motion.div>
          ) : (
            /* Products Display */
            <motion.div
              key="products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleBackToCategory}
                className="mb-6 flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                <ChevronRight className="h-5 w-5 mr-1 rotate-180" />
                Back to {categories[selectedCategory as keyof typeof categories].name}
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedSubcategory}
              </h3>

              {currentProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square bg-gray-200 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 mb-2">
                          {product.name}
                        </h4>
                        <p className="text-primary-600 font-bold text-lg">
                          {product.price}
                        </p>
                        <button className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 rounded-lg transition-colors">
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No products available in this category.
                  </p>
                  <button
                    onClick={handleBackToCategory}
                    className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Try another selection
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductFlow;
