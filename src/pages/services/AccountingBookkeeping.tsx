import AnimatedServiceSection from '@/components/AnimatedServiceSection';
import { CheckCircle, ArrowRight, FileText, TrendingUp } from 'lucide-react';

const AccountingBookkeeping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12 md:mb-16 px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight break-words max-w-4xl mx-auto">
            Accounting and Bookkeeping Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reliable and accurate accounting and bookkeeping services to help you focus on growing your business
          </p>
        </section>

        <section>
          <AnimatedServiceSection
            imageSrc="/AccountingBookKeepingService.jpg"
            imageAlt="Accounting and Bookkeeping Services"
            imageBadge="Professional Team"
            imageBadgeClass="bg-gradient-to-r from-blue-500 to-blue-600"
            borderClass="border-blue-300 hover:border-blue-400"
            title="Accounting and Bookkeeping"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                Accurate accounting and bookkeeping is the backbone of every successful business. These functions involve routine tasks such as data entry, bank reconciliations, invoice processing, and ledger maintenance. Accounting and bookkeeping is essential but these routine activities can consume valuable time especially of accounting and book keeping firm, such precious time Accounting and book keeping firm can dedicate to strategic advisory services or enhancing client relationship or any other valuable services by outsourcing these tasks to a reliable outsourcing partner.
              </p>
              <p>
                At <strong className="text-blue-600 font-bold">Finera Global</strong>, we provide reliable and accurate Accounting and bookkeeping services to accounting firms and businesses. we offer scalable back-office support to manage routine work, reduce operational pressure, and handle seasonal workload peaks. Our qualified professionals have expertise in accounting software like Quickbooks, Xero, Sage50, Sage-one.
              </p>
              <p>
                We handle day-to-day financial transactions including recording sales, purchases, receipts, and payments. Our services cover bank and credit card reconciliations, ledger maintenance expense tracking, Debtor Managements and Creditor Managements.
              </p>
              <p>
                You can leave all your critical bookkeeping tasks to us and focus on high income generating accounting and taxation tasks. We provide you with feedback on an on-going basis. Due to this transparent approach, you gain better actionable insights into your financial performance, which can empower you to manage your business better.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <FileText className="text-blue-600 shrink-0" size={22} />
                  <span>
                    Clients need to provide following documents for Bookkeeping services:
                  </span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Invoices (Sales, Purchases, Expenses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Bank Statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Credit Card Statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Cashbook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Receipts and supporting documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Payroll records</span>
                  </li>
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex flex-wrap items-center gap-2">
                  <TrendingUp className="text-emerald-600 shrink-0" size={22} />
                  <span>We will Deliver following results:</span>
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>All Ledgers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Bank Reconciliation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Trial Balance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Debtors and Creditors Ageing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Monthly financial statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Cash flow statements</span>
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

export default AccountingBookkeeping;
