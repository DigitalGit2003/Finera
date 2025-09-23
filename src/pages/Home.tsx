import { motion } from 'framer-motion';
import HeroSection from "./Home/HeroSection";
import WhyChooseUsSection from "./Home/WhyChooseUs";
import WhatDoWeServeSection from "./Home/WhatDoWeServeSection";
import TechnologiesCapabilitiesSection from "./Home/TechnologiesCapabilitiesSection";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-background text-gray-900 font-sans">
      <HeroSection />
      <WhatDoWeServeSection />
      <WhyChooseUsSection />
      <TechnologiesCapabilitiesSection />
    </main>
  );
};

export default Index;
