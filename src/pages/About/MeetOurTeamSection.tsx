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
            Meet Our Team
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Our leadership team, with decades of combined expertise in accounting and 
            operations, is dedicated to delivering exceptional service and support to our 
            clients.
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
            <div className="flex flex-col md:flex-row">
              {/* Profile Image */}
              <div className="flex-shrink-0 p-6 md:p-8">
                <div className="w-64 h-80 md:w-72 md:h-96 relative mx-auto md:mx-0">
                  <img
                    src="./founder.jpeg"
                    alt="Nilay Mavani"
                    className="rounded-lg object-cover shadow-lg w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 md:pl-4 text-center md:text-left">
                <div className="md:pt-4">
                  <span className="inline-block text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 uppercase tracking-wide font-medium">
                    FOUNDING MEMBER
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Nilay Mavani
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-8">
                    Nilay Mavani is a qualified Chartered Accountant, currently pursuing ACCA, 
                    with over 4 years of experience in accounting, taxation, audit, and financial 
                    reporting. He brings strong technical expertise and a practical understanding 
                    of international accounting requirements.
                  </p>
                  
                  {/* Credentials List */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Qualified Chartered Accountant</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Currently pursuing ACCA</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>4+ years of experience</span>
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
