import React from 'react';
import { motion } from 'framer-motion';
import MeetOurTeamSection from './About/MeetOurTeamSection';
import CoreValuesSection from './About/CoreValues';

const AboutUsSection: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
            alt="Professional business meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/70"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-5xl mx-auto"
            >
              <span className="block">15+ Years Of Growth,</span>
              <span className="block">Driven By Your Trust And</span>
              <span className="block">
                <span className="text-blue-400">Successful Recommendations</span>
              </span>
              <span className="block">In Accounting</span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                We Pride Ourselves On Our Approach To Delivering 
                <span className="text-blue-300 font-semibold"> Exceptional Accounting Services</span>
              </p>
            </motion.div>

            {/* Glass Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-gray-200 leading-relaxed">
                  We Leverage <span className="text-blue-300 font-semibold">Cutting-Edge Technology</span> And Expert Team To Provide Tailored Solutions.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <p className="text-lg text-gray-200 leading-relaxed">
                  We Aim To Become A <span className="text-blue-300 font-semibold">Seamless Extension</span> Of Your Business With Utmost Precision.
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <a
                href="/contact-us"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-semibold rounded-xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
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

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
      </section>

      {/* About Section - Changed to white background */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Empowering UK Businesses with Expert Accounting Solutions
            </h2>
            <div className="w-16 h-0.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              With a strong knowledge of UK accounting, we provide high-quality, efficient services that allow businesses to focus on their core activities. 
              Our dedicated team of professionals seamlessly supports your accounting needs, offering services from bookkeeping and VAT management 
              to comprehensive tax planning and payroll solutions.
            </p>
          </motion.div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  We Are On A <span className="text-blue-600">MISSION</span>
                </h3>
                <div className="w-10 h-0.5 bg-blue-600 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">
                  To serve the maximum number of UK accountants with our skilled 
                  staff and cost-effective structure, adhering to a "Grow Together" 
                  concept.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  With A <span className="text-blue-600">VISION</span>
                </h3>
                <div className="w-10 h-0.5 bg-blue-600 mx-auto mb-4 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed">
                  To cater to UK accountancy firms by providing accurate, efficient, 
                  and cost-effective solutions. Using high-end technology and highly 
                  skilled staff, we empower our outsourcing partners to focus on their 
                  business development activities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CoreValuesSection />
      <MeetOurTeamSection/>
    </>
  );
};

export default AboutUsSection;
