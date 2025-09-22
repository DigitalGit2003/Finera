import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, CheckCircle, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PayrollManagement = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-gray-900">Payroll Management</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive payroll management services to ensure accuracy, compliance, and employee satisfaction.
          </p>
        </div>
        <div className="mb-20">
          <div className="relative">
            <div className="absolute -top-8 -left-4 z-10">
              <div className="relative">
                <img 
                  src="/9.jpg" 
                  alt="Payroll Management Services"
                  className="w-[300px] h-[320px] object-cover rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Employee Focus
                </div>
              </div>
            </div>
            <div className="ml-64 pt-32">
              <div className="border-4 border-dotted border-green-400 rounded-2xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-green-500">
                <div className="px-8 py-6">
                  <h2 className="text-5xl font-bold mb-10 text-gray-900 leading-tight">
                    Payroll Management
                  </h2>
                  <div className="space-y-6 text-gray-700 mb-10 text-lg leading-relaxed">
                    <p>
                      Payroll is not just about numbers—it’s about people. We ensure error-free payroll processing, compliance, and employee satisfaction for your business.
                    </p>
                    <p>
                      Our professionals handle timesheet entry, payslip generation, pension processing, RTI filing, and more, so you can focus on your core business.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                    <p className="font-bold mb-4 text-gray-900 text-xl flex items-center">
                      <Users className="mr-2 text-green-600" size={24} />
                      We take care of all aspects of payroll:
                    </p>
                    <ul className="text-gray-700 ml-8 space-y-2 text-lg">
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        Pay slips
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        Payroll Summary Period wise
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        Expense reports of Employee
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        Form P45
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        New Employee Starter checklist
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        Form P60
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="mr-2 text-green-500" size={16} />
                        Pension Calculations & all what you want
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

export default PayrollManagement;
