import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactSection from './Contact/ContactSection';
import ContactInfoSection from './Contact/ContactInfoSection';

const ContactUsPage: React.FC = () => {

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Contact us today to discuss a tailored outsourcing solution for your firm.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactInfoSection />
      <ContactSection />
    </>
  );
};

export default ContactUsPage;
