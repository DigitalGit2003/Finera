import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Receipt, CheckCircle, ArrowRight, Calculator 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VATReturn = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">VAT Return</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Expert VAT return services to ensure compliance, accuracy, and timely submissions for your business.
          </p>
        </div>
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -top-8 -left-4 z-10">
              <div className="relative">
                <img 
                  src="/VATService.jpg" 
                  alt="VAT Return Services"
                  className="w-[300px] h-[320px] object-cover rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  VAT Compliance
                </div>
              </div>
            </div>
            <div className="ml-64 pt-32">
              <div className="border-4 border-dotted border-blue-400 rounded-2xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-500">
                <div className="px-8 py-6">
                  <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight">
                    VAT Return
                  </h2>
                  <div className="space-y-6 text-gray-700 mb-10 text-lg leading-relaxed">
                    <p>
                      VAT is governed by specific regulations. Handling VAT returns is one of the most time-consuming and detail-sensitive tasks for any UK accountancy practice. Our expert professionals ensure that all VAT compliance requirements are met accurately and on time.
                    </p>
                    <p>
                      We cover all aspects of VAT return: total sales and purchases, VAT owed, VAT claimable, and refund calculations.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <Receipt className="mr-2 text-blue-600" size={24} />
                      Clients need to provide following documents for VAT return:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-blue-500" size={16} />
                        Invoices (Sales, Purchases, Expenses)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-blue-500" size={16} />
                        Bank Statements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-blue-500" size={16} />
                        Credit Card Statements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-blue-500" size={16} />
                        Cashbook
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <Calculator className="mr-2 text-cyan-600" size={24} />
                      We will provide following results:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-cyan-500" size={16} />
                        VAT Return
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-cyan-500" size={16} />
                        VAT Calculation
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

export default VATReturn;
