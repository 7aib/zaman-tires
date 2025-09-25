'use client'

import { motion } from "motion/react"
import { 
  Phone, 
  Calendar, 
  Car, 
  Wrench, 
  CheckCircle, 
  Star,
  Clock,
  MapPin
} from 'lucide-react'

const ServiceProcess = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Contact Us',
      description: 'Call us at 0300 5888776 or visit our shop to discuss your tire and automotive service needs.',
      details: ['Free consultation', 'Service recommendations', 'Price quotes']
    },
    {
      icon: Calendar,
      title: 'Schedule Service',
      description: 'Book your appointment at a convenient time. We offer flexible scheduling to fit your needs.',
      details: ['Flexible timing', 'Quick booking', 'Service confirmation']
    },
    {
      icon: Car,
      title: 'Vehicle Inspection',
      description: 'Our expert technicians perform a thorough inspection of your vehicle and tires.',
      details: ['Comprehensive check', 'Detailed assessment', 'Service recommendations']
    },
    {
      icon: Wrench,
      title: 'Professional Service',
      description: 'Our certified technicians perform the service using premium equipment and quality parts.',
      details: ['Expert technicians', 'Quality equipment', 'Professional installation']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Every service is thoroughly checked to ensure it meets our high quality standards.',
      details: ['Quality control', 'Final inspection', 'Performance testing']
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: 'We ensure your complete satisfaction with our service and provide warranty coverage.',
      details: ['Service warranty', 'Customer feedback', 'Follow-up support']
    }
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Most services completed within 30-60 minutes'
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Easy to find on GT Road, Cantt, Wah'
    },
    {
      icon: Star,
      title: '4.0 Rating',
      description: 'Highly rated by 62+ satisfied customers'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'All services come with quality assurance'
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
            Our Service <span className="text-primary-600">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Simple, transparent, and customer-focused service process designed to provide 
            you with the best possible experience and results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 hidden lg:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          <div className="text-sm text-primary-600 font-semibold">Step {index + 1}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex w-12 h-12 bg-primary-600 rounded-full items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                  
                  <div className="w-full lg:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Our Service?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your service appointment. 
              We're here to provide you with the best tire and automotive services in Wah Cantt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+923005888776"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Call Now: 0300 5888776
              </a>
              <a
                href="https://share.google/v8LnVtVICJoSqbK1Q"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg border border-primary-500 transition-colors duration-200"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceProcess
