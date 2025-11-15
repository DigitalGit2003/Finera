import React from 'react';
import { motion } from 'framer-motion';

const whyChooseUs = [
  {
    title: "Cost-Effective Scalability",
    description: "We deliver UK-grade financial precision at a significantly reduced operating cost, allowing your firm to scale its capacity sustainably.",
    img: "/WhatMakesUsUnique/Cost_Effective_Scalability.png"
  },
  {
    title: "Automated & Tech-Driven",
    description: "Leveraging tools like Xero, IRIS, and Dext, we implement smart, automated workflows to optimize processes and eliminate manual errors.",
    img: "/WhatMakesUsUnique/Automated_Tech_Driven.png"
  },
  {
    title: "Guaranteed UK Compliance",
    description: "We guarantee 100% adherence to all HMRC regulations and statutory requirements, ensuring peace of mind for you and your clients.",
    img: "/WhatMakesUsUnique/Guaranteed_UK_Compliance.png"
  },
  {
    title: "Client-First Partnership",
    description: "We act as a seamless extension of your firm, providing a hands-on, personalized experience with clear, direct communication channels.",
    img: "/WhatMakesUsUnique/Client_First_Partnership.png"
  },
  {
    title: "Robust Data Security",
    description: "Your financial data is safeguarded with strict confidentiality protocols, secure network infrastructure, and advanced encryption.",
    img: "/WhatMakesUsUnique/Robust_Data_Security.png"
  },
  {
    title: "Rapid Turnaround Times",
    description: "Benefit from guaranteed fast response times and efficient service delivery, ensuring all your critical client deadlines are met without fail.",
    img: "/WhatMakesUsUnique/Rapid_Turnaround_Times.png"
  },
  {
    title: "Niche Industry Acumen",
    description: "Our dedicated teams possess deep experience across key sectors like IT, Real Estate, and Healthcare, ensuring precise, context-aware service.",
    img: "/WhatMakesUsUnique/Niche_Industry_Acumen.png"
  },
  {
    title: "UK-Qualified Team Leaders",
    description: "Oversight and quality control are managed by fully UK-qualified accountants, ensuring every output meets the highest professional standards.",
    img: "/WhatMakesUsUnique/Senior_Level_Expertise.png"
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What makes us unique?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {/* Row 1: first 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: next 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.slice(3, 6).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3: last 2 centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.slice(6).map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 6) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
