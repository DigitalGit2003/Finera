import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, CheckCircle, ArrowRight, Building2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const YearEndAccounting = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">Year-End Accounting</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Year-end accounting services to ensure your business is compliant and your financials are accurate and ready for submission.
          </p>
        </div>
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -top-8 -left-4 z-10">
              <div className="relative">
                <img 
                  src="/YearEndAccountingService.jpg" 
                  alt="Year-End Accounting Services"
                  className="w-[300px] h-[320px] object-cover rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Year-End Compliance
                </div>
              </div>
            </div>
            <div className="ml-64 pt-32">
              <div className="border-4 border-dotted border-orange-400 rounded-2xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-orange-500">
                <div className="px-8 py-6">
                  <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight">
                    Year-End Accounting
                  </h2>
                  <div className="space-y-6 text-gray-700 mb-10 text-lg leading-relaxed">
                    <p>
                      Year-End Accounting refers to the financial statements a company prepares at the end of its financial year. These statements provide a snapshot of the financial position and performance of the company and are essential for compliance with regulatory and HMRC requirements.
                    </p>
                    <p>
                      At <strong className="text-orange-600 font-bold">Finera Global</strong>, we support UK businesses and accountancy firms with year-end accounting, ensuring all statements and supporting schedules are fully compliant with UK GAAP and ready for HMRC submission.
                    </p>
                    <p>
                      Our professionals are experienced with finalisation software like IRIS, CCH, VT Accounts, Tax Calc, and more.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-8">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <Calendar className="mr-2 text-orange-600" size={24} />
                      Clients need to provide following documents for Finalization of account services:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-orange-500" size={16} />
                        Last Year Financial statements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-orange-500" size={16} />
                        Last Year Tax return
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-orange-500" size={16} />
                        Current Year data for account finalization
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <Building2 className="mr-2 text-red-600" size={24} />
                      We will provide following results:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-red-500" size={16} />
                        Excel Working Papers
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-red-500" size={16} />
                        Trial Balance
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-red-500" size={16} />
                        All final ledgers
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-red-500" size={16} />
                        Balance sheets and Profit and Loss Accounts
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-red-500" size={16} />
                        Tax Computation
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

export default YearEndAccounting;
