'use client'

import { motion } from "motion/react"
import { MapPin, Navigation, ExternalLink } from 'lucide-react'

const GoogleMap = () => {
  return (
    <section className="bg-gray-100 p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Find Us on <span className="text-primary-600">Google Maps</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Located conveniently on GT Road, Cantt, Wah. Easy to find and access from all major roads. 
            Plenty of parking space available for your vehicle.
          </p>

          {/* Map Container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
            {/* Google Maps Embed */}
            <div className="relative w-full h-80 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890123!2d72.7581!3d33.7741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGT%20Rd%2C%20Cantt%2C%20Wah!5e0!3m2!1sen!2spk!4v1234567890123!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zaman Tyres Trader Location"
              />
            </div>

            {/* Map Info */}
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Zaman Tyres Trader</h3>
                  <p className="text-gray-600 mb-3">
                    GT Rd, Cantt, Wah<br />
                    Pakistan
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <Navigation className="h-4 w-4" />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href="https://www.google.com/search?q=Zaman+Tyres+Trader+Wah+Cantt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on Google</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location Details</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Easy to Find</h4>
                  <p className="text-gray-600 text-sm">Located on main GT Road, easily accessible from all directions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ample Parking</h4>
                  <p className="text-gray-600 text-sm">Free parking space available for customers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Public Transport</h4>
                  <p className="text-gray-600 text-sm">Well connected by public transport and rickshaws</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Landmarks Nearby</h4>
                  <p className="text-gray-600 text-sm">Close to Wah Cantt main market and residential areas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GoogleMap
