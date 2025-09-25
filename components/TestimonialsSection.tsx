'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Ahmed Ali',
      location: 'Wah Cantt',
      rating: 5,
      text: 'Excellent service! Got my tires changed quickly and professionally. The staff is very knowledgeable and friendly. Highly recommended!',
      date: '2 weeks ago'
    },
    {
      name: 'Sara Khan',
      location: 'Rawalpindi',
      rating: 5,
      text: 'Best tire shop in Wah Cantt. They have a huge variety of brands and the prices are very reasonable. Will definitely come back.',
      date: '1 month ago'
    },
    {
      name: 'Muhammad Hassan',
      location: 'Islamabad',
      rating: 4,
      text: 'Good quality tires and professional service. The wheel alignment was done perfectly. My car drives much smoother now.',
      date: '3 weeks ago'
    },
    {
      name: 'Fatima Ahmed',
      location: 'Wah Cantt',
      rating: 5,
      text: 'Very satisfied with their service. They explained everything clearly and the work was done on time. Great customer service!',
      date: '1 week ago'
    },
    {
      name: 'Ali Raza',
      location: 'Taxila',
      rating: 5,
      text: 'Professional team and excellent work. Got my SUV tires changed and the service was outstanding. Highly recommended for all tire needs.',
      date: '2 months ago'
    },
    {
      name: 'Aisha Malik',
      location: 'Wah Cantt',
      rating: 4,
      text: 'Good experience overall. They have all the major tire brands and the installation was done properly. Will visit again.',
      date: '1 month ago'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
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
            What Our <span className="text-primary-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Zaman Tyres Trader.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.0</span>
            <span className="text-gray-600">(62 reviews)</span>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See More Reviews on Google
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Read all 62+ reviews from our satisfied customers on Google and see why 
              we're the most trusted tire shop in Wah Cantt.
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-gray-900">4.0</div>
                <div className="text-gray-600">Google Reviews</div>
              </div>
            </div>

            <a
              href="https://www.google.com/search?q=Zaman+Tyres+Trader+Wah+Cantt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>View Google Reviews</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
