'use client'

import { motion } from 'framer-motion'
import { CheckCircle, XCircle, Star, Award, Shield, DollarSign } from 'lucide-react'

const NewVsOldTires = () => {
  const comparison = [
    {
      feature: 'Price',
      newTire: 'Higher initial cost',
      usedTire: 'Significantly lower cost',
      newIcon: DollarSign,
      usedIcon: DollarSign,
      newColor: 'text-red-600',
      usedColor: 'text-green-600'
    },
    {
      feature: 'Quality & Condition',
      newTire: 'Perfect condition, full tread',
      usedTire: 'Variable condition, worn tread',
      newIcon: Star,
      usedIcon: Award,
      newColor: 'text-green-600',
      usedColor: 'text-yellow-600'
    },
    {
      feature: 'Warranty',
      newTire: 'Full manufacturer warranty',
      usedTire: 'Limited or no warranty',
      newIcon: Shield,
      usedIcon: XCircle,
      newColor: 'text-green-600',
      usedColor: 'text-red-600'
    },
    {
      feature: 'Performance',
      newTire: 'Optimal performance & safety',
      usedTire: 'Reduced performance & safety',
      newIcon: CheckCircle,
      usedIcon: XCircle,
      newColor: 'text-green-600',
      usedColor: 'text-red-600'
    },
    {
      feature: 'Lifespan',
      newTire: 'Full tire life expectancy',
      usedTire: 'Shorter remaining lifespan',
      newIcon: CheckCircle,
      usedIcon: XCircle,
      newColor: 'text-green-600',
      usedColor: 'text-yellow-600'
    },
    {
      feature: 'Safety',
      newTire: 'Maximum safety standards',
      usedTire: 'Safety depends on condition',
      newIcon: Shield,
      usedIcon: Award,
      newColor: 'text-green-600',
      usedColor: 'text-yellow-600'
    }
  ]

  const newTireBenefits = [
    'Perfect condition with full tread depth',
    'Full manufacturer warranty coverage',
    'Optimal performance and safety',
    'Latest technology and innovations',
    'Maximum fuel efficiency',
    'Longest possible lifespan',
    'Peace of mind and reliability'
  ]

  const usedTireBenefits = [
    'Significantly lower cost',
    'Good value for budget-conscious buyers',
    'Environmentally friendly option',
    'Quick replacement solution',
    'Good condition tires available',
    'Suitable for short-term use',
    'Cost-effective for older vehicles'
  ]

  const recommendations = [
    {
      scenario: 'Daily Commuting',
      recommendation: 'New Tires',
      reason: 'Safety and reliability are paramount for daily driving',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-800'
    },
    {
      scenario: 'Budget Constraints',
      recommendation: 'Quality Used Tires',
      reason: 'Good condition used tires offer excellent value',
      icon: DollarSign,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      scenario: 'High-Performance Vehicle',
      recommendation: 'New Premium Tires',
      reason: 'Maximum performance requires new, high-quality tires',
      icon: Star,
      color: 'bg-purple-100 text-purple-800'
    },
    {
      scenario: 'Temporary Replacement',
      recommendation: 'Used Tires',
      reason: 'Cost-effective solution for temporary needs',
      icon: Award,
      color: 'bg-orange-100 text-orange-800'
    }
  ]

  return (
    <section className="section-padding bg-white">
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
            New vs <span className="text-primary-600">Used Tires</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding the differences between new and used tires to help you make 
            the best decision for your vehicle, budget, and driving needs.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 overflow-hidden">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Detailed Comparison</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Feature Column */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center">Features</h4>
                  <div className="space-y-6">
                    {comparison.map((item, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">{item.feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* New Tires Column */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-green-800 mb-6 text-center flex items-center justify-center">
                    <Star className="h-5 w-5 mr-2" />
                    New Tires
                  </h4>
                  <div className="space-y-6">
                    {comparison.map((item, index) => {
                      const IconComponent = item.newIcon
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <IconComponent className={`h-5 w-5 mt-0.5 ${item.newColor}`} />
                          <span className="text-sm text-gray-700">{item.newTire}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Used Tires Column */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-orange-800 mb-6 text-center flex items-center justify-center">
                    <Award className="h-5 w-5 mr-2" />
                    Used Tires
                  </h4>
                  <div className="space-y-6">
                    {comparison.map((item, index) => {
                      const IconComponent = item.usedIcon
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <IconComponent className={`h-5 w-5 mt-0.5 ${item.usedColor}`} />
                          <span className="text-sm text-gray-700">{item.usedTire}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* New Tire Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Star className="h-6 w-6 mr-3" />
              New Tire Benefits
            </h3>
            <ul className="space-y-3">
              {newTireBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Used Tire Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3" />
              Used Tire Benefits
            </h3>
            <ul className="space-y-3">
              {usedTireBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Recommendations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => {
              const IconComponent = rec.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{rec.scenario}</h4>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${rec.color}`}>
                        {rec.recommendation}
                      </div>
                      <p className="text-gray-600 text-sm">{rec.reason}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Expert Advice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Advice?
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Our tire experts can help you choose between new and used tires based on your 
            specific needs, budget, and driving habits. We'll ensure you get the best value and safety.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+923005888776"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call: 0300 5888776
            </a>
            <a
              href="/contact"
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border border-primary-500 transition-colors duration-200"
            >
              Visit Our Shop
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default NewVsOldTires
