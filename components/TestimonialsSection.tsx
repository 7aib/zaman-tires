"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";
import { googleReviews } from "@/utils/googleReviews";

const TestimonialsSection = () => {
  useEffect(() => {
    // Load Elfsight widget script
    const script = document.createElement("script");
    console.log(script);
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className="section-padding bg-black">
      <div className="container-max">
        {/* Section Header */}
        {/* Google Reviews Widget Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-300 mb-8 text-center">
            Live Google <span className="text-primary-600">Reviews</span>
          </h3>
          
          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-722eeb16-ed28-443c-b20d-ca9a748f6657" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
