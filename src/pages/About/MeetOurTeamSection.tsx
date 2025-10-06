import React from 'react';
import { motion } from 'framer-motion';

const MeetOurTeamSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Founder
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Meet the visionary behind Finera Global, who is transforming how UK accountancy practices 
            handle their back-office operations through innovative solutions and unwavering commitment to excellence.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0 p-6 md:p-8 flex items-center">
                <div className="relative mx-auto">
                  <div className="w-48 h-56 md:w-[300px] md:h-[380px] relative overflow-hidden rounded-2xl">
                    <img
                      src="/founder.jpeg"
                      alt="Nilay B. Mavani"
                      className="object-cover w-full h-full shadow-xl transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-12 text-center md:text-left">
                <div className="md:pt-4">
                  <span className="inline-block text-sm text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide font-medium">
                    FOUNDING MEMBER
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Nilay B. Mavani
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                    As a CA Finalist and the Founder of Finera Global, Nilay brings over four years 
                    of invaluable experience in accounting, taxation, audit, and financial reporting. 
                    His unique combination of technical expertise and practical understanding of 
                    international accounting requirements has been instrumental in shaping our services.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify">
                    His vision for Finera Global was born from recognizing the need to bridge the gap 
                    for UK accountancy practices. By leveraging leading tools such as QuickBooks, Xero, 
                    Hubdoc, Dext, and IRIS Elements, we ensure precision, seamless workflows, and 
                    consistent quality in all our operations.
                  </p>
                  
                  {/* Credentials List */}
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>CA Finalist with 4+ years of expertise</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Expert in leading accounting software</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Focus on building long-term partnerships</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
