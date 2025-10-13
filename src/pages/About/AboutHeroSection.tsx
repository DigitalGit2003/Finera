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
              className="mt-3 text-base font-normal text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 space-y-4 text-justify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Finera Global was founded with a simple vision: to support UK accountancy practices with reliable and efficient outsourced accounting and taxation services. We understand the challenges firms face in balancing accuracy, compliance, and client service, and we built our model to help practices overcome those challenges with ease.
              </p>
              
              <p>
                What sets us apart is our commitment to working as true partners. We don’t just process numbers—we integrate with your systems, adapt to your workflows, and deliver the back-office support you need to run smoothly and scale confidently.
              </p>

              <p>
                Our team is skilled in bookkeeping, year-end accounting, VAT, management reporting, payroll, and tax compliance, with hands-on experience across leading platforms like Xero, QuickBooks, Sage, and more. By combining expertise, technology, and client-first values, we deliver services that are consistent, precise, and tailored to your practice.
              </p>

              <p>
                At Finera Global, integrity, accuracy, and excellence are at the heart of everything we do. Our goal is simple: to give UK accountancy firms the space to focus on their clients while we take care of the numbers.
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
                  Contact Us
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
      </motion.div>
    </div>
  </section>
);

export default AboutHeroSection;
