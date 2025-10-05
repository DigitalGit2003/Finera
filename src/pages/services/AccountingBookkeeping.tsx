import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle,
  ArrowRight,
  FileText,
  TrendingUp,
  Calculator,
  Clock,
  Shield,
  Building2,
  Users,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountingBookkeeping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">Accounting and Bookkeeping Services</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Reliable and accurate accounting and bookkeeping services to help you focus on growing your business
          </p>
        </div>

        {/* Main Service Section - Matching Services Page Design */}
        <div className="mb-20">
          <div className="relative">
            {/* Image outside border - top-left */}
            <div className="absolute -top-8 -left-4 z-10">
              <div className="relative">
                <img 
                  src="/AccountingBookKeepingService.jpg" 
                  alt="Accounting and Bookkeeping Services"
                  className="w-[300px] h-[320px] object-cover rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Professional Team
                </div>
              </div>
            </div>
            
            {/* Text Content with Enhanced Border */}
            <div className="ml-64 pt-32">
              <div className="border-4 border-dotted border-teal-400 rounded-2xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-teal-500">
                <div className="px-8 py-6">
                  <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight">
                    Accounting and Bookkeeping
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 mb-10 text-lg leading-relaxed">
                    <p>
                      Accurate accounting and bookkeeping is the backbone of every successful business. These functions involve routine tasks such as data entry, bank reconciliations, invoice processing, and ledger maintenance. Accounting and bookkeeping is essential but these routine activities can consume valuable time especially of accounting and book keeping firm, such precious time Accounting and book keeping firm can dedicate to strategic advisory services or enhancing client relationship or any other valuable services by outsourcing these tasks to a reliable outsourcing partner.
                    </p>
                    
                    <p>
                      At <strong className="text-teal-600 font-bold">Finera Global</strong>, we provide reliable and accurate Accounting and bookkeeping services to accounting firms and businesses. we offer scalable back-office support to manage routine work, reduce operational pressure, and handle seasonal workload peaks. Our qualified professionals have expertise in accounting software like Quickbooks, Xero, Sage50, Sage-one.
                    </p>
                    
                    <p>
                      We handle day-to-day financial transactions including recording sales, purchases, receipts, and payments. Our services cover bank and credit card reconciliations, ledger maintenance expense tracking, Debtor Managements and Creditor Managements.
                    </p>
                    
                    <p>
                      You can leave all your critical bookkeeping tasks to us and focus on high income generating accounting and taxation tasks. We provide you with feedback on an on-going basis. Due to this transparent approach, you gain better actionable insights into your financial performance, which can empower you to manage your business better.
                    </p>
                  </div>

                  {/* Enhanced Requirements Section */}
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 mb-8">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <FileText className="mr-2 text-teal-600" size={24} />
                      Clients need to provide following documents for Bookkeeping services:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-teal-500" size={16} />
                        Invoices (Sales, Purchases, Expenses)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-teal-500" size={16} />
                        Bank Statements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-teal-500" size={16} />
                        Credit Card Statements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-teal-500" size={16} />
                        Cashbook
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-teal-500" size={16} />
                        Receipts and supporting documents
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-teal-500" size={16} />
                        Payroll records
                      </li>
                    </ul>
                  </div>

                  {/* Enhanced Results Section */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <TrendingUp className="mr-2 text-emerald-600" size={24} />
                      We will Deliver following results:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-emerald-500" size={16} />
                        All Ledgers
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-emerald-500" size={16} />
                        Bank Reconciliation
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-emerald-500" size={16} />
                        Trial Balance
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-emerald-500" size={16} />
                        Debtors and Creditors Ageing
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-emerald-500" size={16} />
                        Monthly financial statements
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-emerald-500" size={16} />
                        Cash flow statements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingBookkeeping;
