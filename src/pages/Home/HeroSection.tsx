import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => (
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

        <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-blue-600 xl:inline font-extrabold">Professional UK</span>{' '}
              <span className="block text-blue-600 xl:inline font-extrabold">Accounting & Taxation Services</span>
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              className="mt-3 text-base text-green-600 font-semibold uppercase tracking-wide sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Your Trusted Outsourcing Partner for Scalable Success
            </motion.p>
            
            {/* Description */}
            <motion.p 
              className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Finera Global provides outsourced accounting and taxation services to UK accountancy practices and businesses. We serve Practicing Accountants, Start-ups, and SMEs, helping them reduce costs, improve operations, and unlock capacity to scale. We act as an extension of your team, ensuring accuracy, compliance, and efficiency while reducing costs and freeing your time to focus on clients.
            </motion.p>
            <motion.p
              className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Partner with Finera Global today and focus on what you do best.  
            </motion.p>
            
            {/* CTA Buttons - FIXED: Changed <a> to <Link> */}
            <motion.div 
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="rounded-md shadow">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200 font-sans"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/services"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors duration-200 font-sans"
                >
                  Our Services
                </Link>
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
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Professional accounting team at work"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
