'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const ContactHero = () => {
  const contactMethods = [
    { icon: Phone, label: 'Call Us', value: '0300 5888776', href: 'tel:+923005888776' },
    { icon: MapPin, label: 'Visit Us', value: 'GT Rd, Cantt, Wah', href: 'https://share.google/v8LnVtVICJoSqbK1Q' },
    { icon: Clock, label: 'Hours', value: '9 AM - 9 PM Daily', href: null },
    { icon: Mail, label: 'Email', value: 'info@zamantyres.com', href: 'mailto:info@zamantyres.com' }
  ]

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg"
          >
            <span className="text-white">Get in</span>
            <br />
            <span className="text-primary-400">Touch</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to get your tires serviced? Contact us today for expert advice, 
            service appointments, or any questions about our tire products and services.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <IconComponent className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-200 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-primary-200 text-sm">{method.value}</p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
