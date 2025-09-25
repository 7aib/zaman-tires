'use client'

import { motion } from "motion/react"
import { Award, Users, Wrench, Star } from 'lucide-react'

const TeamSection = () => {
  const teamStats = [
    {
      icon: Users,
      number: '10+',
      label: 'Expert Technicians',
      description: 'Highly skilled professionals with years of experience'
    },
    {
      icon: Wrench,
      number: '1000+',
      label: 'Vehicles Serviced',
      description: 'Successfully serviced thousands of vehicles'
    },
    {
      icon: Award,
      number: '90+',
      label: 'Tire Brands',
      description: 'Comprehensive inventory of premium tire brands'
    },
    {
      icon: Star,
      number: '4.0',
      label: 'Customer Rating',
      description: 'Consistently high customer satisfaction scores'
    }
  ]

  const teamValues = [
    {
      title: 'Expert Knowledge',
      description: 'Our technicians are certified professionals with extensive training in tire installation, wheel alignment, and automotive services.'
    },
    {
      title: 'Quality Tools',
      description: 'We use state-of-the-art equipment and tools to ensure precise and efficient service delivery.'
    },
    {
      title: 'Customer Service',
      description: 'Our team is dedicated to providing exceptional customer service and building long-lasting relationships.'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay updated with the latest automotive technology and tire industry developments.'
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
            Our <span className="text-primary-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals who make Zaman Tyres Trader the most trusted 
            tire shop in Wah Cantt. Our team combines experience, expertise, and passion for excellence.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {teamStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {teamValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Our Commitment to You
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Zaman Tyres Trader, our team is committed to providing you with the best possible 
            tire and automotive services. We believe in building lasting relationships with our 
            customers through trust, quality, and exceptional service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Quality Assurance</h4>
              <p className="text-primary-100 text-sm">
                Every service is performed with the highest standards of quality and precision.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Expert Advice</h4>
              <p className="text-primary-100 text-sm">
                Our team provides professional guidance to help you make the best decisions.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3">Customer Satisfaction</h4>
              <p className="text-primary-100 text-sm">
                Your satisfaction is our priority. We stand behind every service we provide.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
