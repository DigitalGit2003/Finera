import React from 'react';
import { motion } from 'framer-motion';

const CoreValuesSection: React.FC = () => {
  const coreValues = [
    {
      letter: 'I',
      title: 'Integrity',
      description: 'The foundation of our business. We act with accountability and uphold the highest ethical standards in everything we do. Our clients trust us not just for accurate services, but also for a partnership grounded in ethics.'
    },
    {
      letter: 'A',
      title: 'Accuracy',
      description: 'Attention to detail is non-negotiable. Every figure, every report, and every return reflects our commitment to precision.'
    },
    {
      letter: 'C',
      title: 'Competency',
      description: 'We believe competency is the root of every solution. Our skilled team ensures that expertise shapes the quality of every service delivered.'
    },
    {
      letter: 'E',
      title: 'Excellence',
      description: 'We don’t settle for “good enough.” Excellence drives us to consistently meet and exceed client expectations.'
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
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
            Following Our Core Values
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Built on Integrity. Driven by Competency. Delivered with Accuracy. Defined by Excellence.
          </p>
        </motion.div>

        {/* Core Values List */}
        <div className="space-y-6">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">
                  {value.letter}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
