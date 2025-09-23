import React from 'react';
import { motion } from 'framer-motion';
import AboutHeroSection from './About/AboutHeroSection';
import AboutMainSection from './About/AboutMainSection';
import MeetOurTeamSection from './About/MeetOurTeamSection';
import CoreValuesSection from './About/CoreValues';

const AboutUsSection: React.FC = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutMainSection />
      <CoreValuesSection />
      <MeetOurTeamSection />
    </>
  );
};

export default AboutUsSection;
