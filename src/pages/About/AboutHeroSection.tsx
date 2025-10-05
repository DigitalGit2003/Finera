import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroSection: React.FC = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block xl:inline">About</span>{' '}
              <span className="block text-blue-600 xl:inline">Finera Global</span>
            </motion.h1>
            
            {/* Description Paragraphs */}
            <motion.div 
              className="mt-3 text-base font-normal text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Finera Global was founded with a simple vision: to support UK accountancy practices with 
                reliable and efficient outsourced accounting and taxation services. We understand the 
                challenges firms face in balancing accuracy, compliance, and client service.
              </p>
              
              <p>
                What sets us apart is our commitment to working as true partners. We integrate with your 
                systems, adapt to your workflows, and deliver the back-office support you need to run 
                smoothly and scale confidently.
              </p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-md shadow">
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Partner with Us
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Our Services
                </a>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-6 flex flex-wrap gap-6 sm:justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center text-sm font-normal text-gray-500">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                UK Accounting Experts
              </div>
              <div className="flex items-center text-sm font-normal text-gray-500">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Xero, QuickBooks, Sage
              </div>
              <div className="flex items-center text-sm font-normal text-gray-500">
                <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Trusted Partner
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>

    {/* Right side image */}
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full relative"
      >
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="./about.jpeg?auto=format&fit=crop&w=2340&q=80"
          alt="Professional accounting team at Finera Global"
        />
        
        {/* "Trusted Partner" card - now at top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute top-6 right-6 bg-white rounded-lg shadow-lg px-6 py-4"
        >
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Trusted</div>
              <div className="text-xs font-normal text-gray-500">Partner</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default AboutHeroSection;
