'use client'

import { motion } from "motion/react"
import { Star, TrendingUp, Users, MessageCircle } from 'lucide-react'

const ReviewStats = () => {
  const ratingBreakdown = [
    { stars: 5, count: 35, percentage: 56 },
    { stars: 4, count: 18, percentage: 29 },
    { stars: 3, count: 6, percentage: 10 },
    { stars: 2, count: 2, percentage: 3 },
    { stars: 1, count: 1, percentage: 2 }
  ]

  const reviewCategories = [
    {
      category: 'Service Quality',
      rating: 4.2,
      icon: Star,
      color: 'text-yellow-500'
    },
    {
      category: 'Customer Service',
      rating: 4.1,
      icon: Users,
      color: 'text-blue-500'
    },
    {
      category: 'Value for Money',
      rating: 4.0,
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      category: 'Overall Experience',
      rating: 4.0,
      icon: MessageCircle,
      color: 'text-purple-500'
    }
  ]

  return (
    <section className="section-padding bg-neutral-50">
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
            Review <span className="text-primary-600">Statistics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detailed breakdown of our customer reviews and ratings. 
            See how we perform across different aspects of our service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Overall Rating */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Overall Rating</h3>
            
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary-600 mb-2">4.0</div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-8 w-8 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-700'}`} />
                ))}
              </div>
              <p className="text-gray-600">Based on 62 customer reviews</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-4">
              {ratingBreakdown.map((rating, index) => (
                <div key={rating.stars} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-16">
                    <span className="text-sm font-medium text-gray-400">{rating.stars}</span>
                    <Star className="h-4 w-4 text-gray-600 fill-current" />
                  </div>
                  <div className="flex-1 bg-neutral-200 rounded-full h-3">
                    <div 
                      className="bg-primary-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-600 w-16 text-right">
                    {rating.count} ({rating.percentage}%)
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Category Ratings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Category Ratings</h3>
            
            <div className="space-y-6">
              {reviewCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <div key={category.category} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                      <span className="font-semibold text-gray-800">{category.category}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < Math.floor(category.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900">{category.rating}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-3">Customer Satisfaction Summary</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>85% of customers rate us 4+ stars</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>95% would recommend our services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span>Consistent quality across all services</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Reviews</h3>
            <p className="text-gray-600">All reviews are from verified customers who used our services</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Recent Reviews</h3>
            <p className="text-gray-600">Reviews are regularly updated with the latest customer feedback</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">We maintain high standards to ensure customer satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReviewStats
