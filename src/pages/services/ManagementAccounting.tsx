import AnimatedServiceSection from '@/components/AnimatedServiceSection';
import { PieChart, CheckCircle, ArrowRight, FileText } from 'lucide-react';

const ManagementAccounting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight break-words max-w-4xl mx-auto">
            Management Accounting
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tailored management accounting services to turn financial data into actionable insights for better business decisions.
          </p>
        </section>

        <section>
          <AnimatedServiceSection
            imageSrc="/ManagementAccountingService.jpg"
            imageAlt="Management Accounting Services"
            imageBadge="Strategic Insights"
            imageBadgeClass="bg-gradient-to-r from-emerald-500 to-emerald-600"
            borderClass="border-emerald-300 hover:border-emerald-400"
            title="Management Accounting"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                Management accounting goes beyond basic bookkeeping, turning financial data into meaningful insights for better business decisions. At <strong className="text-emerald-600 font-bold">Finera Global</strong>, we provide tailored management accounting services to UK businesses and accounting firms.
              </p>
              <p>
                Our professionals prepare detailed management reports including margin, turnover, cash flow analysis, budget vs. actual comparisons, and KPIs. Reports are clear and concise for informed strategic decisions.
              </p>
              <p>
                Whether you need monthly reports or white label services, we deliver timely, accurate, and compliant reports.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <PieChart className="text-emerald-600 shrink-0" size={22} />
                  <span>
                    Clients need to provide following documents for Management Accounting:
                  </span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Monthly/Quarterly sales, purchase, expenses, bank statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Payroll Information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <FileText className="text-blue-600 shrink-0" size={22} />
                  <span>We will provide following results:</span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Management accounts reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Cash flow Statements</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedServiceSection>
        </section>
      </div>
    </div>
  );
};

export default ManagementAccounting;
