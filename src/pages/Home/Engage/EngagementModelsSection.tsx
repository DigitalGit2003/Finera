import React from 'react';

interface EngagementModel {
  title: string;
  description: string;
  keyAttributes: string[];
}

const EngagementModelsSection: React.FC = () => {
  const engagementModels: EngagementModel[] = [
    {
      title: "Full Time or Part Time Employee",
      description: "We provide professionals who will work exclusively with your firm on either a full-time or part-time basis, depending on your specific requirements. These professionals will directly interact with your firm and accountable for the assigned tasks.",
      keyAttributes: [
        "Direct interaction with assigned professionals",
        "Full accountability of work performed",
        "Smooth integration with your existing team",
        "Flexible scheduling to suite your firm's needs"
      ]
    },
    {
      title: "Fixed Price Agreement",
      description: "In this model, you commit to a fixed number of hours prior to the start of the agreed period, you can use these hours flexibly at any time within the agreed timeframe. Any unused hours at the conclusion of the contract period will be billable.",
      keyAttributes: [
        "Flexible usage of services throughout the contract period",
        "Enables accurate and predictable budgeting",
        "Customizable in accordance with your firm's workload and requirements"
      ]
    },
    {
      title: "Pay-As-You-Go or Ad-hoc Model", 
      description: "This model provides full flexibility, with no fixed hourly commitments. You can request services as needed, and we will assign the right professionals to complete each task efficiently.",
      keyAttributes: [
        "No upfront commitment",
        "Services provided as needed",
        "Efficient resource allocation",
        "Flexibility to manage fluctuating workloads"
      ]
    },
    {
      title: "Revenue Sharing",
      description: "Under this model, we charge a specific percentage of the revenue generated from each performed job. This percentage is based on the actual accounting fees billed to the end client.",
      keyAttributes: [
        "Percentage-based fee model",
        "Our success align with your success",
        "Transparent pricing",
        "Suitable for performance-driven engagements"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">
            Our Engagement Models
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-base text-gray-600">
            Choose the engagement model that aligns with your business requirements
          </p>
        </div>

        {/* Cards Grid - Using CSS Grid for Perfect Alignment */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {engagementModels.map((model, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" style={{
              display: 'grid',
              gridTemplateRows: 'auto auto 1fr auto',
              minHeight: '500px'
            }}>
              
              {/* Card Title - Row 1 */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
                {model.title}
              </h3>
              
              {/* Card Description - Row 2 */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {model.description}
              </p>
              
              {/* Spacer - Row 3 (takes up remaining space) */}
              <div></div>
              
              {/* Key Attributes - Row 4 (always at bottom) */}
              <div>
                <h4 className="text-base font-bold text-gray-800 mb-3 flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Key Attributes
                </h4>
                <ul className="space-y-2">
                  {model.keyAttributes.map((attribute, attributeIndex) => (
                    <li key={attributeIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="leading-relaxed">{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
