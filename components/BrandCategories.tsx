'use client'

import { motion } from "motion/react"
import { Globe, Factory, Star, Award } from 'lucide-react'

const BrandCategories = () => {
  const categories = [
    {
      icon: Globe,
      title: 'Imported Brands',
      description: 'Premium international tire manufacturers from around the world',
      brands: ['Yokohama', 'Dunlop', 'Michelin', 'Goodyear', 'Bridgestone', 'Continental', 'Pirelli', 'Hankook'],
      features: [
        'World-class manufacturing standards',
        'Advanced technology and innovation',
        'Superior quality and performance',
        'Extensive research and development',
        'Global recognition and trust',
        'Premium materials and construction'
      ],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900'
    },
    {
      icon: Factory,
      title: 'Chinese Brands',
      description: 'Quality Chinese tire manufacturers offering excellent value',
      brands: ['New Age', 'Triangle', 'Linglong', 'Sailun', 'Giti', 'Nexen', 'Falken', 'Kenda'],
      features: [
        'Excellent value for money',
        'Quality construction and materials',
        'Good performance and durability',
        'Wide range of options',
        'Competitive pricing',
        'Reliable service and support'
      ],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Brand <span className="text-primary-600">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer two main categories of tire brands to meet different needs and budgets. 
            Both categories provide quality tires with their own unique advantages.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category, index) => {
            const IconComponent = category.icon
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
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl opacity-10`} />
                
                <div className={`relative ${category.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>
                    <h3 className={`text-3xl font-bold ${category.textColor} mb-3`}>{category.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{category.description}</p>
                  </div>

                  {/* Sample Brands */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Star className="h-5 w-5 text-primary-600 mr-2" />
                      Popular Brands
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {category.brands.map((brand, brandIndex) => (
                        <div key={brandIndex} className="bg-white rounded-lg p-3 text-center shadow-sm">
                          <span className="text-sm font-medium text-gray-700">{brand}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 text-primary-600 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="/products"
                      className={`block w-full bg-gradient-to-r ${category.color} text-white font-semibold py-3 px-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      View {category.title} Products
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Which Category is Right for You?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Choose Imported Brands If:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You prioritize maximum performance and quality</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You want the latest technology and innovation</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You need tires for high-performance vehicles</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You prefer globally recognized brand names</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Choose Chinese Brands If:</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You want excellent value for money</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You need reliable tires for daily commuting</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You're looking for budget-friendly options</span>
                </li>
                <li className="flex items-start space-x-2 text-gray-600">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <span>You want quality tires without premium pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandCategories
