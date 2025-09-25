'use client'

import { motion } from 'framer-motion'
import { Search, Filter, Star, Award } from 'lucide-react'
import { useState } from 'react'

const AllBrands = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const allBrands = [
    // Premium International Brands
    { name: 'Yokohama', category: 'premium', origin: 'Japan', logo: 'Y', color: 'bg-red-600' },
    { name: 'Dunlop', category: 'premium', origin: 'UK', logo: 'D', color: 'bg-blue-600' },
    { name: 'Michelin', category: 'premium', origin: 'France', logo: 'M', color: 'bg-yellow-600' },
    { name: 'Goodyear', category: 'premium', origin: 'USA', logo: 'G', color: 'bg-green-600' },
    { name: 'Bridgestone', category: 'premium', origin: 'Japan', logo: 'B', color: 'bg-purple-600' },
    { name: 'Continental', category: 'premium', origin: 'Germany', logo: 'C', color: 'bg-orange-600' },
    { name: 'Pirelli', category: 'premium', origin: 'Italy', logo: 'P', color: 'bg-pink-600' },
    { name: 'Hankook', category: 'premium', origin: 'South Korea', logo: 'H', color: 'bg-teal-600' },
    { name: 'Toyo', category: 'premium', origin: 'Japan', logo: 'T', color: 'bg-cyan-600' },
    { name: 'Falken', category: 'premium', origin: 'Japan', logo: 'F', color: 'bg-lime-600' },
    { name: 'Nexen', category: 'premium', origin: 'South Korea', logo: 'N', color: 'bg-emerald-600' },
    { name: 'Kumho', category: 'premium', origin: 'South Korea', logo: 'K', color: 'bg-indigo-600' },

    // Chinese Brands
    { name: 'New Age', category: 'chinese', origin: 'China', logo: 'N', color: 'bg-red-500' },
    { name: 'Triangle', category: 'chinese', origin: 'China', logo: 'T', color: 'bg-blue-500' },
    { name: 'Linglong', category: 'chinese', origin: 'China', logo: 'L', color: 'bg-green-500' },
    { name: 'Sailun', category: 'chinese', origin: 'China', logo: 'S', color: 'bg-yellow-500' },
    { name: 'Giti', category: 'chinese', origin: 'Singapore', logo: 'G', color: 'bg-purple-500' },
    { name: 'Kenda', category: 'chinese', origin: 'Taiwan', logo: 'K', color: 'bg-orange-500' },
    { name: 'Maxxis', category: 'chinese', origin: 'Taiwan', logo: 'M', color: 'bg-pink-500' },
    { name: 'Westlake', category: 'chinese', origin: 'China', logo: 'W', color: 'bg-teal-500' },
    { name: 'Roadstone', category: 'chinese', origin: 'South Korea', logo: 'R', color: 'bg-cyan-500' },
    { name: 'Federal', category: 'chinese', origin: 'Taiwan', logo: 'F', color: 'bg-lime-500' },
    { name: 'Nankang', category: 'chinese', origin: 'Taiwan', logo: 'N', color: 'bg-emerald-500' },
    { name: 'Cooper', category: 'chinese', origin: 'USA', logo: 'C', color: 'bg-indigo-500' },

    // Additional Brands
    { name: 'Firestone', category: 'premium', origin: 'USA', logo: 'F', color: 'bg-red-700' },
    { name: 'General', category: 'premium', origin: 'Germany', logo: 'G', color: 'bg-blue-700' },
    { name: 'Uniroyal', category: 'premium', origin: 'Germany', logo: 'U', color: 'bg-green-700' },
    { name: 'BFGoodrich', category: 'premium', origin: 'USA', logo: 'B', color: 'bg-yellow-700' },
    { name: 'Kelly', category: 'premium', origin: 'USA', logo: 'K', color: 'bg-purple-700' },
    { name: 'Vredestein', category: 'premium', origin: 'Netherlands', logo: 'V', color: 'bg-orange-700' },
    { name: 'Nitto', category: 'premium', origin: 'Japan', logo: 'N', color: 'bg-pink-700' },
    { name: 'Toyo Proxes', category: 'premium', origin: 'Japan', logo: 'T', color: 'bg-teal-700' },
    { name: 'Yokohama Advan', category: 'premium', origin: 'Japan', logo: 'Y', color: 'bg-cyan-700' },
    { name: 'Michelin Pilot', category: 'premium', origin: 'France', logo: 'M', color: 'bg-lime-700' },
    { name: 'Goodyear Eagle', category: 'premium', origin: 'USA', logo: 'G', color: 'bg-emerald-700' },
    { name: 'Dunlop Sport', category: 'premium', origin: 'UK', logo: 'D', color: 'bg-indigo-700' }
  ]

  const categories = [
    { value: 'all', label: 'All Brands' },
    { value: 'premium', label: 'Premium International' },
    { value: 'chinese', label: 'Chinese Brands' }
  ]

  const filteredBrands = allBrands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
            Complete Brand <span className="text-primary-600">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our complete collection of 90+ tire brands. Use the search and filter options 
            to find the perfect brand for your needs.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tire brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold text-primary-600">{filteredBrands.length}</span> brands
            {searchTerm && ` matching "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.value === selectedCategory)?.label}`}
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:bg-white">
                <div className={`w-12 h-12 ${brand.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{brand.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{brand.origin}</p>
                
                {/* Category Badge */}
                <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                  brand.category === 'premium' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {brand.category === 'premium' ? (
                    <Star className="h-3 w-3" />
                  ) : (
                    <Award className="h-3 w-3" />
                  )}
                  <span className="capitalize">{brand.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredBrands.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No brands found</h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find Your Preferred Brand?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're constantly expanding our inventory. Contact us to check availability 
              for specific brands or to request a particular tire model.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+923005888776"
                className="btn-primary"
              >
                Call: 0300 5888776
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AllBrands
