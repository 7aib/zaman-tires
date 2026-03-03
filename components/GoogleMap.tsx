"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Navigation, ExternalLink, ChevronRight } from "lucide-react";

const branches = [
  {
    id: "wah-cantt",
    name: "Zaman Tyre Trader - Wah Cantt",
    address: "GT Rd, Cantt, Wah, Pakistan",
    coordinates: "33.75530,72.74754",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.12345!2d72.74754!3d33.7553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa7321e1a473f%3A0x6bba46c57f5c9e99!2sZaman%20Tyre%20Trader!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754",
    searchUrl: "https://www.google.com/search?q=Zaman+tyre+Trader+Wah+Cantt"
  },
  {
    id: "islamabad-b17",
    name: "Zaman Tyre Trader - Islamabad B-17",
    address: "Block B1 Arcade, B-17 Multi Gardens, Islamabad, Pakistan",
    coordinates: "33.6892, 72.8204",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.29!2d72.8204!3d33.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9792080f507b%3A0xe781907cb387431e!2sZaman%20Tyre%20Trader%20Islamabad%20B_17!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=33.689204,72.820383",
    searchUrl: "https://www.google.com/search?q=Zaman+tyre+Trader+Islamabad+B-17"
  }
];

const GoogleMap = () => {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section id="locations" className="bg-gray-900 p-8 md:p-12 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300 mb-6">
            Our <span className="text-primary-600">Locations</span>
          </h2>
          <p className="text-gray-500 text-center mb-10 leading-relaxed max-w-2xl mx-auto">
            Visit us at any of our conveniently located branches for premium tires and automotive services.
          </p>

          {/* Branch Switcher */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeBranch.id === branch.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
              >
                <MapPin className="h-4 w-4" />
                <span>{branch.id === "wah-cantt" ? "Wah Cantt" : "Islamabad B-17"}</span>
                {activeBranch.id === branch.id && (
                  <motion.div layoutId="active" className="ml-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </motion.div>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-3 bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBranch.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-[400px] bg-gray-700"
                >
                  <iframe
                    src={activeBranch.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={activeBranch.name}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Branch Info Card */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700 h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBranch.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-14 h-14 bg-primary-600/10 rounded-2xl flex items-center justify-center mb-6 border border-primary-600/20">
                      <MapPin className="h-7 w-7 text-primary-500" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-200 mb-4">
                      {activeBranch.name}
                    </h3>

                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {activeBranch.address}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        <span>Premium Tire Service</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        <span>Professional Technicians</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        <span>State-of-the-art Equipment</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <a
                        href={activeBranch.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/20"
                      >
                        <Navigation className="h-5 w-5" />
                        <span>Get Directions</span>
                      </a>
                      <a
                        href={activeBranch.searchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View on Google</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMap;
