import React from 'react';
import { motion } from 'framer-motion';

const AboutMainSection: React.FC = () => (
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
);

export default AboutMainSection;
