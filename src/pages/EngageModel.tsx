import React from 'react';
import EngagementModelsSection from './Engage/EngagementModelsSection';

const FlexibilitySection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* How Flexible Are We Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Flexible Are We?
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We understand that every business is unique, with its own goals, challenges, and vision. 
            We provide flexibility at every stage of our engagement. You may select a predefined model 
            that aligns with your objectives or let us design a tailored solution that precisely 
            addresses your individual needs.
          </p>
        </div>
      </section>

      {/* Customisable Models Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customisable Models
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-10"></div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We are flexible and open to customize any model in accordance with your specific 
            requirements. Should you have a distinct engagement model in mind, we are happy 
            to adopt and tailor your needs.
          </p>
        </div>
      </section>
      
      <EngagementModelsSection/>
    </div>
  );
};

export default FlexibilitySection;
