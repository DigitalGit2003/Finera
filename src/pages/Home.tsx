import { motion } from 'framer-motion';
import WhyChooseUsSection from "./Home/WhyChooseUs";
import WhatDoWeServeSection from "./Home/WhatDoWeServeSection";
import TechnologiesCapabilitiesSection from "./Home/TechnologiesCapabilitiesSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background text-gray-900 font-sans">
      {/* Enhanced Hero Section - Left Aligned */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Better Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
            alt="Professional landscape background"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for Better Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Left-aligned Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl lg:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left"
            >
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Professional UK
                <br />
                <span className="text-blue-400">Accounting Services</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl">
                Your trusted partner for all accounting requirements, where experienced 
                financial services experts help streamline your operations and drive success.
              </p>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-4"
              >
                <a
                  href="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get in Touch
                  <svg 
                    className="ml-2 -mr-1 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Still Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-0.5 h-16 bg-white/30"></div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Sections with Better Spacing */}
      <WhatDoWeServeSection />
      <WhyChooseUsSection />
      <TechnologiesCapabilitiesSection />
    </main>
  );
};

export default Index;
