'use client'

import { motion } from "motion/react"
import { Phone, MapPin, Clock, Mail, MessageCircle, Star } from 'lucide-react'
import { googleReviews } from '@/utils/googleReviews'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['0300 5888776'],
      description: 'Call us for immediate assistance, tire inquiries, or service appointments.',
      action: { text: 'Call Now', href: 'tel:+923005888776' }
    },
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['GT Rd, Cantt, Wah', 'Pakistan'],
      description: 'Conveniently located on GT Road in Wah Cantt. Easy to find and access.',
      action: { text: 'Get Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754' }
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Sunday', '9:00 AM - 9:00 PM'],
      description: 'Open 7 days a week to serve you better. Extended hours for your convenience.',
      action: null
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['0300 5888776'],
      description: 'Quick messaging for tire inquiries, quotes, and service bookings.',
      action: { text: 'WhatsApp Us', href: 'https://wa.me/923005888776' }
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
            Contact <span className="text-primary-600">Information</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Multiple ways to reach us. Choose the method that's most convenient for you. 
            We're here to help with all your tire and automotive service needs.
          </p>
        </motion.div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-300 mb-3">{detail.title}</h3>

                {/* Details */}
                <div className="space-y-1 mb-4">
                  {detail.details.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-400 font-medium">{item}</p>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{detail.description}</p>

                {/* Action Button */}
                {detail.action && (
                  <a
                    href={detail.action.href}
                    target={detail.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={detail.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    {detail.action.text}
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              For urgent tire issues or immediate service needs, call us directly. 
              Our team is ready to help you get back on the road safely.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">{googleReviews.rating} Rating</div>
                <div className="text-primary-200 text-sm">{googleReviews.reviewCount}+ Happy Customers</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+923005888776"
                className="bg-gray-800 text-gray-300 hover:bg-gray-700 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                Call: 0300 5888776
              </a>
              <a
                href="https://wa.me/923005888776"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfo
