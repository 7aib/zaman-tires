"use client";

import { ChevronLeft, ChevronRight, Star, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { googleReviews } from "@/utils/googleReviews";

interface SlideContent {
  id: number;
  logo?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
}

const slides: SlideContent[] = [
  {
    id: 1,
    logo: "static/yokohama-seeklogo.png",
    title: "Yokohama",
    subtitle: "Premium Tire Excellence",
    description: "Experience superior grip and durability with Yokohama's advanced tire technology. Designed for all weather conditions with enhanced safety and longevity.",
    image: "url('static/yokohama.jpg')",
    cta: "Explore Yokohama"
  },
  {
    id: 2,
    logo: "static/good-year-seeklogo.png",
    title: "Goodyear",
    subtitle: "Trusted Performance",
    description: "Drive with confidence using Goodyear's innovative tire solutions. Over 120 years of excellence in tire manufacturing with proven reliability and comfort.",
    image: "url('static/goodyear.jpg')",
    cta: "Explore Goodyear"
  },
  {
    id: 3,
    logo: "static/continental-seeklogo.png",
    title: "Continental",
    subtitle: "German Engineering",
    description: "Feel the difference with Continental's cutting-edge tire technology. Precision-engineered for optimal handling, fuel efficiency, and safety on every road.",
    image: "url('static/continental.jpg')",
    cta: "Explore Continental"
  },
  {
    id: 4,
    logo: "static/bridgestone-seeklogo.png",
    title: "Bridgestone",
    subtitle: "Innovation in Motion",
    description: "Bridgestone brings you revolutionary tire technology with superior performance and reliability. Perfect balance of comfort, safety, and long-lasting durability.",
    image: "url('static/bridgestone.jpg')",
    cta: "Explore Bridgestone"
  },
  {
    id: 5,
    logo: "static/dunlop-70th-seeklogo.png",
    title: "Dunlop",
    subtitle: "Precision & Performance",
    description: "Dunlop tires deliver exceptional grip and braking power. Engineered for responsive handling and extended tire life in all driving conditions.",
    image: "url('static/dunlop.jpg')",
    cta: "Explore Dunlop"
  },
  {
    id: 6,
    logo: "static/pirelli-seeklogo.png",
    title: "Pirelli",
    subtitle: "Italian Excellence",
    description: "Experience luxury and performance with Pirelli's premium tire collection. Engineered for sophisticated driving with superior handling and aesthetic appeal.",
    image: "url('static/pirelli.jpg')",
    cta: "Explore Pirelli"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: slide.image,
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="container-max w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 lg:px-0">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Rating Badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(googleReviews.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{googleReviews.rating} Rating • {googleReviews.reviewCount} Reviews</span>
              </motion.div> */}

              {/* Logo */}
              {slide.logo && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <img
                    src={slide.logo}
                    alt="Company Logo"
                    className="h-16 w-auto"
                  />
                </motion.div>
              )}

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg"
              >
                <span className="text-white">{slide.title}</span>
                <br />
                <span className="text-primary-400">{slide.subtitle}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg"
              >
                {slide.description}
              </motion.p>

              {/* Location & Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 mb-10"
              >
                <div className="flex items-center space-x-2 text-gray-200">
                  <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span>GT Rd, Cantt, Wah</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-200">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span>0300 5888776</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <a
                  href="tel:+923005888776"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 text-lg"
                >
                  <Phone className="h-5 w-5" />
                  <span>{slide.cta}</span>
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=33.75530,72.74754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white font-semibold py-4 px-8 rounded-lg border border-white border-opacity-30 transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-lg"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Get Directions</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Image (visible on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block h-96 relative rounded-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: slide.image,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-primary-400 w-8"
              : "bg-white bg-opacity-40 w-3 hover:bg-opacity-60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
