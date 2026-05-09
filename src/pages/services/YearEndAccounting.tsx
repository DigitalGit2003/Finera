import AnimatedServiceSection from '@/components/AnimatedServiceSection';
import { Calendar, CheckCircle, ArrowRight, Building2 } from 'lucide-react';

const YearEndAccounting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight break-words max-w-4xl mx-auto">
            Year-End Accounting
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Year-end accounting services to ensure your business is compliant and your financials are accurate and ready for submission.
          </p>
        </section>

        <section>
          <AnimatedServiceSection
            imageSrc="/YearEndAccountingService.jpg"
            imageAlt="Year-End Accounting Services"
            imageBadge="Year-End Compliance"
            imageBadgeClass="bg-gradient-to-r from-amber-500 to-amber-600"
            borderClass="border-amber-300 hover:border-amber-400"
            title="Year-End Accounting"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                Year-End Accounting refers to the financial statements a company prepares at the end of its financial year. These statements provide a snapshot of the financial position and performance of the company and are essential for compliance with regulatory and HMRC requirements.
              </p>
              <p>
                At <strong className="text-amber-600 font-bold">Finera Global</strong>, we support UK businesses and accountancy firms with year-end accounting, ensuring all statements and supporting schedules are fully compliant with UK GAAP and ready for HMRC submission.
              </p>
              <p>
                Our professionals are experienced with finalisation software like IRIS, CCH, VT Accounts, Tax Calc, and more.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <Calendar className="text-amber-600 shrink-0" size={22} />
                  <span>
                    Clients need to provide following documents for Finalization of account services:
                  </span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Last Year Financial statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Last Year Tax return</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-amber-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Current Year data for account finalization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <Building2 className="text-orange-600 shrink-0" size={22} />
                  <span>We will provide following results:</span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Excel Working Papers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Trial Balance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>All final ledgers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Balance sheets and Profit and Loss Accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Tax Computation</span>
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

export default YearEndAccounting;
