import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PieChart, CheckCircle, ArrowRight, FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ManagementAccounting = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">Management Accounting</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Tailored management accounting services to turn financial data into actionable insights for better business decisions.
          </p>
        </div>
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -top-8 -left-4 z-10">
              <div className="relative">
                <img 
                  src="/9.jpg" 
                  alt="Management Accounting Services"
                  className="w-[300px] h-[320px] object-cover rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Strategic Insights
                </div>
              </div>
            </div>
            <div className="ml-64 pt-32">
              <div className="border-4 border-dotted border-purple-400 rounded-2xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-500">
                <div className="px-8 py-6">
                  <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight">
                    Management Accounting
                  </h2>
                  <div className="space-y-6 text-gray-700 mb-10 text-lg leading-relaxed">
                    <p>
                      Management accounting goes beyond basic bookkeeping, turning financial data into meaningful insights for better business decisions. At <strong className="text-purple-600 font-bold">Finera Global</strong>, we provide tailored management accounting services to UK businesses and accounting firms.
                    </p>
                    <p>
                      Our professionals prepare detailed management reports including margin, turnover, cash flow analysis, budget vs. actual comparisons, and KPIs. Reports are clear and concise for informed strategic decisions.
                    </p>
                    <p>
                      Whether you need monthly reports or white label services, we deliver timely, accurate, and compliant reports.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <PieChart className="mr-2 text-purple-600" size={24} />
                      Clients need to provide following documents for Management Accounting:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-purple-500" size={16} />
                        Monthly/Quarterly sales, purchase, expenses, bank statements
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 text-purple-500" size={16} />
                        Payroll Information
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <FileText className="mr-2 text-violet-600" size={24} />
                      We will provide following results:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-violet-500" size={16} />
                        Management accounts reports
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-violet-500" size={16} />
                        Cash flow Statements
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

export default ManagementAccounting;
