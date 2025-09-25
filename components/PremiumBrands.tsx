'use client'

import { motion } from 'framer-motion'
import { Star, Award, Globe, Shield } from 'lucide-react'

const PremiumBrands = () => {
  const premiumBrands = [
    {
      name: 'Yokohama',
      logo: 'Y',
      color: 'bg-red-600',
      origin: 'Japan',
      description: 'Premium Japanese tire manufacturer known for high-performance tires with excellent grip and durability.',
      features: ['High Performance', 'Excellent Grip', 'Durable Construction', 'Advanced Technology']
    },
    {
      name: 'Dunlop',
      logo: 'D',
      color: 'bg-blue-600',
      origin: 'UK',
      description: 'British tire brand with over 100 years of innovation, offering superior handling and comfort.',
      features: ['Superior Handling', 'Comfort Ride', 'Long History', 'Innovation Leader']
    },
    {
      name: 'Michelin',
      logo: 'M',
      color: 'bg-yellow-600',
      origin: 'France',
      description: 'French tire giant known for premium quality, fuel efficiency, and long-lasting performance.',
      features: ['Fuel Efficient', 'Long Lasting', 'Premium Quality', 'Global Leader']
    },
    {
      name: 'Goodyear',
      logo: 'G',
      color: 'bg-green-600',
      origin: 'USA',
      description: 'American tire manufacturer with advanced technology and reliable performance in all conditions.',
      features: ['Advanced Technology', 'All Weather', 'Reliable Performance', 'American Heritage']
    },
    {
      name: 'Bridgestone',
      logo: 'B',
      color: 'bg-purple-600',
      origin: 'Japan',
      description: 'World\'s largest tire manufacturer, known for innovation, quality, and comprehensive tire solutions.',
      features: ['World\'s Largest', 'Innovation Focus', 'Quality Assurance', 'Comprehensive Range']
    },
    {
      name: 'Continental',
      logo: 'C',
      color: 'bg-orange-600',
      origin: 'Germany',
      description: 'German engineering excellence with premium tires offering superior safety and performance.',
      features: ['German Engineering', 'Superior Safety', 'Premium Quality', 'Engineering Excellence']
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
            Premium <span className="text-primary-600">International Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            World-renowned tire manufacturers known for their innovation, quality, 
            and performance. These premium brands represent the pinnacle of tire technology.
          </p>
        </motion.div>

        {/* Premium Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Brand Logo & Info */}
              <div className="text-center mb-6">
                <div className={`w-20 h-20 ${brand.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-2xl">{brand.logo}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Globe className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{brand.origin}</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">Premium</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {brand.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Award className="h-4 w-4 text-primary-600 mr-2" />
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {brand.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Availability Badge */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">Available in Stock</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Brand Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Premium Brands?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Superior Quality</h4>
              <p className="text-gray-600 text-sm">Premium materials and manufacturing standards ensure long-lasting performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h4>
              <p className="text-gray-600 text-sm">Advanced safety features and rigorous testing for maximum protection.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Global Recognition</h4>
              <p className="text-gray-600 text-sm">Trusted by millions of drivers worldwide with proven track records.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Cutting-edge technology and continuous innovation in tire design.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PremiumBrands
