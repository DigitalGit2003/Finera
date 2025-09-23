import React from 'react';

const MeetOurTeamSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our leadership team, with decades of combined expertise in accounting and 
            operations, is dedicated to delivering exceptional service and support to our 
            clients.
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Profile Image */}
              <div className="flex-shrink-0 p-6 md:p-8">
                <div className="w-64 h-80 md:w-72 md:h-96 relative mx-auto md:mx-0">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Nilay Mavani"
                    className="rounded-lg object-cover shadow-lg w-full h-full"
                />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 md:pl-4 text-center md:text-left">
                <div className="md:pt-4">
                  <p className="text-sm text-blue-600 mb-2 uppercase tracking-wide font-medium">
                    FOUNDING MEMBER
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Nilay Mavani
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Nilay Mavani is a qualified Chartered Accountant, currently pursuing ACCA, 
                    with over 4 years of experience in accounting, taxation, audit, and financial 
                    reporting. He brings strong technical expertise and a practical understanding 
                    of international accounting requirements.
                  </p>
                  
                  {/* Credentials List */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Qualified Chartered Accountant</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>Currently pursuing ACCA</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-base text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span>4+ years of experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeamSection;
