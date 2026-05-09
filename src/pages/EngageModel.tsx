import React from 'react';
import FlexibilitySection from './Engage/FlexibilitySection';
import CustomisableModelsSection from './Engage/CustomisableModelsSection';
import EngagementModelsSection from './Engage/EngagementModelsSection';

const EngageModelPage: React.FC = () => {
  return (
    <div className="bg-white">
      <FlexibilitySection />
      <EngagementModelsSection />
      <CustomisableModelsSection />
    </div>
  );
};

export default EngageModelPage;
