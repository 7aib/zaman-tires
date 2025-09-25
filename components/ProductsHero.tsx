'use client'

import { motion } from 'framer-motion'
import { Car, Truck, Zap, Shield } from 'lucide-react'

const ProductsHero = () => {
  const vehicleTypes = [
    { icon: Car, name: 'Cars', count: '1000+ Tires' },
    { icon: Truck, name: 'SUVs', count: '500+ Tires' },
    { icon: Zap, name: 'Pickups', count: '300+ Tires' }
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
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
            <span className="text-white">New & Used</span>
            <br />
            <span className="text-primary-400">Tire Products</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive tire inventory for all vehicle types. From premium new tires 
            to quality used options, we have the perfect tire for every need and budget.
          </motion.p>

          {/* Vehicle Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            {vehicleTypes.map((vehicle, index) => {
              const IconComponent = vehicle.icon
              return (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300"
                >
                  <IconComponent className="h-12 w-12 text-primary-400 mx-auto mb-3" />
                  <h3 className="text-xl font-semibold text-white mb-2">{vehicle.name}</h3>
                  <p className="text-primary-200 text-sm">{vehicle.count}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <div className="flex items-center space-x-2 text-gray-200">
              <Shield className="h-5 w-5 text-primary-400" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-200">
              <Zap className="h-5 w-5 text-primary-400" />
              <span>Expert Installation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-200">
              <Car className="h-5 w-5 text-primary-400" />
              <span>All Vehicle Types</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsHero
