import AnimatedServiceSection from '@/components/AnimatedServiceSection';
import { Receipt, CheckCircle, ArrowRight, Calculator } from 'lucide-react';

const VATReturn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight break-words max-w-4xl mx-auto">
            VAT Return
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert VAT return services to ensure compliance, accuracy, and timely submissions for your business.
          </p>
        </section>

        <section>
          <AnimatedServiceSection
            imageSrc="/VATService.jpg"
            imageAlt="VAT Return Services"
            imageBadge="VAT Compliance"
            imageBadgeClass="bg-gradient-to-r from-indigo-500 to-indigo-600"
            borderClass="border-indigo-300 hover:border-indigo-400"
            title="VAT Return"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                VAT is governed by specific regulations. Handling VAT returns is one of the most time-consuming and detail-sensitive tasks for any UK accountancy practice. Our expert professionals ensure that all VAT compliance requirements are met accurately and on time.
              </p>
              <p>
                We cover all aspects of VAT return: total sales and purchases, VAT owed, VAT claimable, and refund calculations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <Receipt className="text-indigo-600 shrink-0" size={22} />
                  <span>Clients need to provide following documents for VAT return:</span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Invoices (Sales, Purchases, Expenses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Bank Statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Credit Card Statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Cashbook</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <Calculator className="text-purple-600 shrink-0" size={22} />
                  <span>We will provide following results:</span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>VAT Return</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>VAT Calculation</span>
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

export default VATReturn;
