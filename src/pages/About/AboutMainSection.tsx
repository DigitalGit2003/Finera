import React from 'react';
import { motion } from 'framer-motion';

const AboutMainSection: React.FC = () => (
  <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We Are On A <span className="text-blue-600">MISSION</span>
            </h3>
            <div className="w-12 h-1 bg-blue-600 mx-auto mb-5 rounded-full"></div>
            <p className="text-base text-gray-700 leading-relaxed">
              To provide accurate, reliable, and cost-efficient accounting and tax support to UK businesses and practice firms, enabling them to streamline financial operations, reduce workload, and focus on delivering greater value to their clients.
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
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              With A <span className="text-blue-600">VISION</span>
            </h3>
            <div className="w-12 h-1 bg-blue-600 mx-auto mb-5 rounded-full"></div>
            <p className="text-base text-gray-700 leading-relaxed">
              To cater to the UK accounting and taxation industry through consistent service excellence, client-first values, and technology-driven financial solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMainSection;
