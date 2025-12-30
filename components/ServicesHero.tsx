'use client'

import { motion } from "motion/react"
import { Wrench, Settings, Zap, Droplets, Car, Circle } from 'lucide-react'

const ServicesHero = () => {
  const services = [
    { icon: Wrench, name: 'Tire Change' },
    { icon: Settings, name: 'Wheel Balance' },
    { icon: Circle, name: '3D Alignment' },
    { icon: Zap, name: 'Nitrogen Air' },
    { icon: Droplets, name: 'Oil Change' },
    { icon: Car, name: 'Rims & Wheels' }
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-white bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center text-gray-900 px-4">
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
            Professional <span className="text-primary-400">Tire Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Expert automotive services to keep your vehicle running smoothly and safely. 
            From tire changes to wheel alignment, we provide comprehensive solutions.
          </motion.p>

          {/* Services Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 hover:shadow-sm transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="h-8 w-8 text-primary-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-900">{service.name}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="tel:+923005888776"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 text-lg"
            >
              <span>Call Now for Service</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
