import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <span className="text-slate-800 font-bold text-xl">F</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Finera</h3>
                  <p className="text-sm text-blue-400 font-medium">GLOBAL</p>
                </div>
              </div>
              
              {/* Tagline */}
              <p className="text-lg italic text-gray-300 mb-6">Empowering Your Financial Growth</p>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a 
                  href="tel:+919999999999" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Phone"
                >
                  <Phone size={20} className="text-white" />
                </a>
                <a 
                  href="mailto:info@fineraglobal.com" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={20} className="text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">About Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="/about-finera" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Finera
                </a>
              </li>
              <li>
                <a href="/vision" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Vision
                </a>
              </li>
              <li>
                <a href="/core-values" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Core Values
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services/accounting-bookkeeping" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Accounting & Bookkeeping
                </a>
              </li>
              <li>
                <a href="/services/management-accounting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Management Accounting
                </a>
              </li>
              <li>
                <a href="/services/year-end" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Year-End Accounting
                </a>
              </li>
              <li>
                <a href="/services/vat-return" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  VAT Return
                </a>
              </li>
              <li>
                <a href="/services/payroll" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Payroll Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <a 
                  href="mailto:info@fineraglobal.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block"
                >
                  info@fineraglobal.com
                </a>
              </div>
              <div>
                <a 
                  href="tel:+919999999999" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block"
                >
                  +91 99999 99999
                </a>
              </div>
              <div className="text-gray-300 leading-relaxed">
                123, Finera Business Park, Main Road,
                <br />
                Mumbai, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-300">
            Finera Global © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
