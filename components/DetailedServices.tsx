"use client";

import { motion } from "motion/react";
import {
  Wrench,
  Settings,
  Circle,
  Zap,
  Droplets,
  Car,
  CheckCircle,
  Clock,
  Shield,
  Award,
} from "lucide-react";

const DetailedServices = () => {
  const services = [
    {
      id: "tire-change",
      icon: Wrench,
      title: "Tire Change Service",
      subtitle: "Professional Tire Replacement",
      description:
        "Expert tire installation service for both new and used tires. Our certified technicians ensure proper mounting, balancing, and inflation for optimal performance and safety.",
      features: [
        "New & Used Tires Available",
        "Expert Installation & Mounting",
        "Proper Torque Specifications",
        "Quality Assurance Check",
        "Professional Tire Pressure Setting",
        "Tire Rotation Service",
      ],
      benefits: [
        "Improved Vehicle Performance",
        "Enhanced Safety & Reliability",
        "Extended Tire Life",
        "Better Fuel Efficiency",
        "Smooth & Comfortable Ride",
        "Warranty Protection",
      ],
      process: [
        "Vehicle Inspection",
        "Tire Selection & Recommendation",
        "Professional Installation",
        "Balancing & Alignment Check",
        "Quality Control Verification",
        "Final Inspection & Testing",
      ],
      priceRange: "PKR 2,000 - 109,000 each",
      duration: "30-60 minutes",
      warranty: "Service Warranty Included",
    },
    {
      id: "wheel-balance",
      icon: Settings,
      title: "Wheel Balancing Service",
      subtitle: "Precision Wheel Balancing",
      description:
        "Advanced computerized wheel balancing service to eliminate vibrations and ensure smooth, comfortable driving. Our precision equipment provides accurate balancing for all wheel types.",
      features: [
        "Computerized Balancing Technology",
        "Static & Dynamic Balancing",
        "Precision Weight Application",
        "All Wheel Types Supported",
        "Vibration Elimination",
        "Performance Optimization",
      ],
      benefits: [
        "Smooth & Comfortable Ride",
        "Reduced Tire Wear",
        "Improved Fuel Efficiency",
        "Enhanced Vehicle Stability",
        "Extended Tire Life",
        "Better Handling & Control",
      ],
      process: [
        "Wheel Mounting on Balancer",
        "Computer Analysis",
        "Precision Weight Calculation",
        "Weight Application",
        "Final Balance Verification",
        "Test Drive Confirmation",
      ],
      priceRange: "PKR 1,500 - 3,000",
      duration: "20-30 minutes",
      warranty: "Balance Guarantee",
    },
    {
      id: "wheel-alignment",
      icon: Circle,
      title: "3D Wheel Alignment",
      subtitle: "Advanced 3D Alignment Technology",
      description:
        "State-of-the-art 3D wheel alignment service using the latest technology to ensure precise alignment angles. Perfect for optimal vehicle performance, safety, and tire longevity.",
      features: [
        "3D Laser Alignment Technology",
        "Precision Angle Measurement",
        "Computer-Controlled Adjustments",
        "Real-Time Monitoring",
        "All Vehicle Types Supported",
        "Professional Calibration",
      ],
      benefits: [
        "Optimal Vehicle Performance",
        "Improved Tire Life",
        "Better Fuel Efficiency",
        "Enhanced Safety",
        "Reduced Steering Effort",
        "Smooth & Straight Driving",
      ],
      process: [
        "Vehicle Positioning",
        "Sensor Installation",
        "3D Measurement Scan",
        "Alignment Analysis",
        "Precision Adjustments",
        "Final Verification Test",
      ],
      priceRange: "PKR 1,000 - 3,000",
      duration: "45-75 minutes",
      warranty: "Alignment Warranty",
    },
    {
      id: "nitrogen-air",
      icon: Zap,
      title: "Nitrogen Air Service",
      subtitle: "Premium Nitrogen Inflation",
      description:
        "Premium nitrogen air service for superior tire performance. Nitrogen provides more stable tire pressure, better fuel efficiency, and extended tire life compared to regular air.",
      features: [
        "Pure Nitrogen Inflation",
        "Pressure Stability",
        "Temperature Resistance",
        "Corrosion Prevention",
        "All Tire Types Supported",
        "Professional Installation",
      ],
      benefits: [
        "More Stable Tire Pressure",
        "Better Fuel Efficiency",
        "Extended Tire Life",
        "Improved Safety",
        "Reduced Tire Wear",
        "Enhanced Performance",
      ],
      process: [
        "Tire Pressure Check",
        "Nitrogen Purge",
        "Pure Nitrogen Fill",
        "Pressure Calibration",
        "Seal Verification",
        "Performance Testing",
      ],
      priceRange: "Free with Tire Purchase",
      duration: "15-25 minutes",
      warranty: "Pressure Guarantee",
    },
    {
      id: "oil-change",
      icon: Droplets,
      title: "Oil Change Service",
      subtitle: "Professional Engine Oil Service",
      description:
        "Complete engine oil change service with premium quality oils and filters. Regular oil changes are essential for maintaining engine performance and longevity.",
      features: [
        "Premium Quality Engine Oil",
        "High-Quality Oil Filter",
        "Professional Drain & Refill",
        "Oil Level Verification",
        "Filter Replacement",
        "Engine Inspection",
      ],
      benefits: [
        "Improved Engine Performance",
        "Extended Engine Life",
        "Better Fuel Efficiency",
        "Reduced Engine Wear",
        "Enhanced Reliability",
        "Optimal Engine Protection",
      ],
      process: [
        "Engine Warm-Up",
        "Old Oil Drain",
        "Filter Removal",
        "New Filter Installation",
        "Fresh Oil Fill",
        "Level & Quality Check",
      ],
      priceRange: "PKR 800/ltr - 1800/ltr ",
      duration: "30-45 minutes",
      warranty: "Service Warranty",
    },
    {
      id: "rims",
      icon: Car,
      title: "Rims & Wheels",
      subtitle: "Premium Wheel Solutions",
      description:
        "Comprehensive rim and wheel services including sales, installation, and customization. We offer a wide selection of premium rims to enhance your vehicle's appearance and performance.",
      features: [
        "Wide Selection of Premium Rims",
        "Professional Installation",
        "Custom Wheel Fitting",
        "Tire Mounting Service",
        "Balancing & Alignment",
        "Quality Assurance",
      ],
      benefits: [
        "Enhanced Vehicle Appearance",
        "Improved Performance",
        "Better Handling",
        "Custom Styling Options",
        "Professional Installation",
        "Warranty Protection",
      ],
      process: [
        "Vehicle & Wheel Assessment",
        "Rim Selection & Recommendation",
        "Professional Installation",
        "Tire Mounting & Balancing",
        "Alignment Adjustment",
        "Final Quality Check",
      ],
      priceRange: "PKR 12,000 - 1,80,000",
      duration: "60-120 minutes",
      warranty: "Product & Service Warranty",
    },
  ];

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
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automotive services designed to keep your vehicle
            running smoothly, safely, and efficiently. Each service is performed
            by certified professionals using premium equipment.
          </p>
        </motion.div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Service Info */}
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Service Details */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">
                          <strong>Duration:</strong> {service.duration}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">
                          <strong>Price:</strong> {service.priceRange}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-primary-600" />
                        <span className="text-gray-700">
                          <strong>Warranty:</strong> {service.warranty}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features & Benefits */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          Service Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-start space-x-2 text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Award className="h-5 w-5 text-yellow-600 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-start space-x-2 text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Process */}
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Settings className="h-5 w-5 text-blue-600 mr-2" />
                        Service Process
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {service.process.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="bg-gray-50 rounded-lg p-3 text-center"
                          >
                            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-white font-bold text-sm">
                                {stepIndex + 1}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 font-medium">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
