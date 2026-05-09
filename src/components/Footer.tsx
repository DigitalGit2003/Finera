import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleHashLink = (path: string, hash: string) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img
                    src="/FineraLogo.jpg"
                    alt="Finera Global Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Finera Global</h3>
                </div>
              </div>
              
              {/* Tagline */}
              <p className="text-lg italic text-gray-300 mb-6">Reliable Accounting & Taxation, Built to Scale</p>
              
              {/* Social Icons - Keep as <a> for external links */}
              <div className="flex space-x-4">
                <a 
                  href="tel:+918153056548" 
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
                  href="https://www.linkedin.com/company/fineraglobal/" 
                  target="_blank"
                  rel="noopener noreferrer"
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
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  About Finera
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('/about', 'vision')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleHashLink('/about', 'core-values')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-left"
                >
                  Core Values
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/accounting-bookkeeping" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Accounting & Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services/management-accounting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Management Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/year-end-accounting" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Year-End Accounting
                </Link>
              </li>
              <li>
                <Link to="/services/VAT-return" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  VAT Return
                </Link>
              </li>
              <li>
                <Link to="/services/payroll-management" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Payroll Management
                </Link>
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
                  href="tel:+918153056548" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 block"
                >
                  +91 81530 56548
                </a>
              </div>
              <div className="text-gray-300 leading-relaxed">
                Shop No. 1, Opp Dharmajivan jivan Soc, Chikuwadi, Surat, Gujarat, India - 395006
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-300">
            Finera Global © 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
