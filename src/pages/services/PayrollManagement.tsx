import AnimatedServiceSection from '@/components/AnimatedServiceSection';
import { Users, ArrowRight } from 'lucide-react';

const PayrollManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight break-words max-w-4xl mx-auto">
            Payroll Management
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive payroll management services to ensure accuracy, compliance, and employee satisfaction.
          </p>
        </section>

        <section>
          <AnimatedServiceSection
            imageSrc="/PayrollService.jpg"
            imageAlt="Payroll Management Services"
            imageBadge="Employee Focus"
            imageBadgeClass="bg-gradient-to-r from-teal-500 to-teal-600"
            borderClass="border-teal-300 hover:border-teal-400"
            title="Payroll Management"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                Payroll is not just about numbers—it’s about people. We ensure error-free payroll processing, compliance, and employee satisfaction for your business.
              </p>
              <p>
                Our professionals handle timesheet entry, payslip generation, pension processing, RTI filing, and more, so you can focus on your core business.
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                <Users className="text-teal-600 shrink-0" size={22} />
                <span>We take care of all aspects of payroll:</span>
              </p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Pay slips</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Payroll Summary Period wise</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Expense reports of Employee</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Form P45</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>New Employee Starter checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Form P60</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Pension Calculations & all what you want</span>
                </li>
              </ul>
            </div>
          </AnimatedServiceSection>
        </section>
      </div>
    </div>
  );
};

export default PayrollManagement;
