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
    <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            What makes us unique?
          </h2>
          <p className="text-sm md:text-base text-gray-700 max-w-2xl leading-relaxed">
            From bookkeeping to financial management, we bring a competitive edge
            with precision and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-lg bg-sky-50 border border-sky-100 p-5 md:p-6 h-full"
            >
              <div className="h-14 w-14 mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
