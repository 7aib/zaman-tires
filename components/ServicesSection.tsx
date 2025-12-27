'use client'

import { motion } from "motion/react"
import { 
  Wrench, 
  Settings, 
  Zap, 
  Droplets, 
  Car, 
  Circle,
  ArrowRight 
} from 'lucide-react'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Tire Change',
      description: 'Professional tire replacement service for new and old tires. Expert installation with precision.',
      features: ['New & Old Tires', 'Expert Installation', 'Quality Assurance'],
      color: 'bg-blue-500'
    },
    {
      icon: Settings,
      title: 'Wheel Balance',
      description: 'Advanced wheel balancing technology to ensure smooth ride and extended tire life.',
      features: ['Computerized Balancing', 'Precision Technology', 'Smooth Ride'],
      color: 'bg-green-500'
    },
    {
      icon: Circle,
      title: '3D Wheel Alignment',
      description: 'State-of-the-art 3D wheel alignment service for optimal vehicle performance and safety.',
      features: ['3D Technology', 'Precision Alignment', 'Safety First'],
      color: 'bg-purple-500'
    },
    {
      icon: Zap,
      title: 'Nitrogen Air',
      description: 'Premium nitrogen air service for better tire performance, fuel efficiency, and longevity.',
      features: ['Better Performance', 'Fuel Efficiency', 'Tire Longevity'],
      color: 'bg-yellow-500'
    },
    {
      icon: Droplets,
      title: 'Oil Change',
      description: 'Professional oil change service to keep your vehicle running smoothly and efficiently.',
      features: ['Quality Oil', 'Expert Service', 'Regular Maintenance'],
      color: 'bg-red-500'
    },
    {
      icon: Car,
      title: 'Rims & Wheels',
      description: 'Wide selection of premium rims and wheels to enhance your vehicle\'s appearance.',
      features: ['Premium Quality', 'Wide Selection', 'Expert Installation'],
      color: 'bg-indigo-500'
    }
  ]

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
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automotive services to keep your vehicle running smoothly and safely. 
            From tire changes to wheel alignment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-300 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link
                  href="/services"
                  className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Service?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today for professional tire services. We're here to help with all your automotive needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+923005888776"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border border-primary-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
