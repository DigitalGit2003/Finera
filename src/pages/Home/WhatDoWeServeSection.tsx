import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  PieChart, 
  Calendar, 
  Receipt, 
  Users,
  ArrowUpRight
} from 'lucide-react';

const servicesOverview = [
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description: "Routine accounting, bookkeeping, reconciliations, and ledger management for businesses and firms.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    link: "/services/accounting-bookkeeping"
  },
  {
    icon: PieChart,
    title: "Management Accounting", 
    description: "Insightful management reports, KPIs, and cash flow analysis to drive strategic decisions.",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    link: "/services/management-accounting"
  },
  {
    icon: Calendar,
    title: "Year-End Accounting",
    description: "Compliant year-end accounts, tax computations, and HMRC submissions for UK businesses.",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    link: "/services/year-end-accounting"
  },
  {
    icon: Receipt,
    title: "VAT Return",
    description: "Accurate VAT calculations, returns, and compliance with Making Tax Digital (MTD) regulations.",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    link: "/services/vat-return"
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "End-to-end payroll processing, payslips, RTI filing, and pension management for your team.",
    color: "bg-gradient-to-br from-teal-500 to-teal-600",
    link: "/services/payroll-management"
  }
];

const WhatDoWeServeSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Do We Serve?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-500 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Services Grid - First Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesOverview.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Colored Top Border */}
                <div className={`h-1 ${service.color}`}></div>
                
                {/* Content */}
                <div className="p-8 relative">
                  {/* View Details Button - FIXED: Changed <a> to <Link> */}
                  <Link
                    to={service.link}
                    className="absolute top-4 right-4 flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 group/button"
                  >
                    <span>View Details</span>
                    <ArrowUpRight 
                      size={18} 
                      className="group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform duration-200" 
                    />
                  </Link>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight pr-8">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid - Second Row (2 cards, centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {servicesOverview.slice(3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Colored Top Border */}
                <div className={`h-1 ${service.color}`}></div>
                
                {/* Content */}
                <div className="p-8 relative">
                  {/* View Details Button - FIXED: Changed <a> to <Link> */}
                  <Link
                    to={service.link}
                    className="absolute top-4 right-4 flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200 group/button font-sans"
                  >
                    <span>View Details</span>
                    <ArrowUpRight 
                      size={18} 
                      className="group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform duration-200" 
                    />
                  </Link>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight pr-8">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDoWeServeSection;
