import React from 'react';

const CoreValuesSection: React.FC = () => {
  const coreValues = [
    {
      letter: 'I',
      title: 'Integrity',
      description: 'Integrity is the foundation of our business. We act with accountability and uphold the highest ethical standards in all our financial services. Our integrity gives confidence to clients to rely on us not only for accurate financial services, but also for a trustworthy partnership built on ethics.'
    },
    {
      letter: 'A',
      title: 'Accuracy',
      description: 'We believe that meticulous attention on every minor detail is essential for every aspect of accounting and tax services. Accuracy is not negotiable at our firm.'
    },
    {
      letter: 'C',
      title: 'Competency',
      description: 'Competency is the cornerstone that gives shape to our excellence service. We always believe that competency is the root of every solution.'
    },
    {
      letter: 'E',
      title: 'Excellence',
      description: 'Excellence drives everything we do. We never settle for "good enough." Our aim is to consistently deliver outstanding results that exceed client expectations and set new industry standards.'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Following Our Core VALUES
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Built on Integrity. Driven by Competency. Delivered with Accuracy. Defined by Excellence.
          </p>
        </div>

        {/* Core Values List */}
        <div className="space-y-8">
          {coreValues.map((value, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 bg-white rounded-lg shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-green-600">
                  {value.letter}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
