import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  CheckCircle,
  BookOpen,
  PieChart,
  Receipt,
  ArrowRight,
  DollarSign,
  FileBarChart,
  CreditCard,
  Calendar,
  Building2,
  Play,
  Star,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedServiceSection({ imageSrc, imageAlt, imageBadge, imageBadgeClass, borderClass, title, children }) {
  const ref = useRef(null);
  const controls = useAnimation();
  
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <div ref={ref} className="mb-16 md:mb-32">
      <div className="relative">
        {/* Desktop: Overlapping Image */}
        <motion.div
          className="hidden lg:block absolute -top-8 -left-4 z-10"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={controls}
          variants={{ visible: { scale: 1, opacity: 1, transition: { duration: 0.7, type: 'spring' } } }}
        >
          <div className="relative">
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-[300px] h-[320px] object-cover rounded-2xl shadow-lg border-4 border-white"
            />
            <div className={`absolute top-4 right-4 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-md ${imageBadgeClass}`}>
              {imageBadge}
            </div>
          </div>
        </motion.div>

        {/* Mobile: Image on Top */}
        <motion.div
          className="lg:hidden mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={controls}
          variants={{ visible: { scale: 1, opacity: 1, transition: { duration: 0.7, type: 'spring' } } }}
        >
          <div className="relative">
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-2xl shadow-lg"
            />
            <div className={`absolute top-4 right-4 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-md ${imageBadgeClass}`}>
              {imageBadge}
            </div>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="lg:ml-64 lg:pt-32"
          initial={{ y: 80, opacity: 0 }}
          animate={controls}
          variants={{ visible: { y: 0, opacity: 1, transition: { duration: 0.7, type: 'spring' } } }}
        >
          <div className={`border-2 border-dashed rounded-2xl p-6 md:p-12 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ${borderClass}`}>
            <div className="md:px-4 md:py-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-gray-900 leading-tight">{title}</h2>
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ServiceOverviewCard({ icon: Icon, title, description, color }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="group h-full"
    >
      <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white relative overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 ${color}`}></div>
        <CardHeader className="pb-4 pt-8 px-6">
          <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
            <Icon className="text-white" size={26} />
          </div>
          <CardTitle className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-gray-700 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const Services = () => {
  const servicesOverview = [
    {
      icon: Calculator,
      title: "Accounting & Bookkeeping",
      description: "Routine accounting, bookkeeping, reconciliations, and ledger management for businesses and firms.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: PieChart,
      title: "Management Accounting",
      description: "Insightful management reports, KPIs, and cash flow analysis to drive strategic decisions.",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: "Year-End Accounting",
      description: "Compliant year-end accounts, tax computations, and HMRC submissions for UK businesses.",
      color: "bg-gradient-to-br from-amber-500 to-amber-600"
    },
    {
      icon: Receipt,
      title: "VAT Return",
      description: "Accurate VAT calculations, returns, and compliance with Making Tax Digital (MTD) regulations.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "End-to-end payroll processing, payslips, RTI filing, and pension management for your team.",
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Overview Section */}
        <section className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Our Services
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-5">
              <p className="text-xl text-gray-700 font-medium">
                At <span className="font-bold text-gray-900">Finera Global</span>, we empower businesses and accounting firms with reliable, accurate, and scalable financial solutions.
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our expert team leverages the latest technology and best practices to help you focus on growth while we handle the numbers with precision and care.
              </p>
            </div>
          </motion.div>
        </section>

        {/* What Do We Serve Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Do We Serve?
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
            {servicesOverview.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceOverviewCard {...service} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Service Sections */}
        <section>
          {/* Section 1: Accounting and Bookkeeping */}
          <AnimatedServiceSection
            imageSrc="/9.jpg"
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
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <FileText className="mr-3 text-blue-600" size={22} />
                  Requirements
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    <span>Invoices (Sales, Purchases, Expenses)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    <span>Bank Statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    <span>Credit Card Statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    <span>Cashbook</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <Award className="mr-3 text-emerald-600" size={22} />
                  Deliverables
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0" size={16} />
                    <span>All Ledgers</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0" size={16} />
                    <span>Bank Reconciliation</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0" size={16} />
                    <span>Trial Balance</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-emerald-500 flex-shrink-0" size={16} />
                    <span>Debtors and Creditors Ageing</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedServiceSection>

          {/* Section 2: Management Accounting */}
          <AnimatedServiceSection
            imageSrc="/9.jpg"
            imageAlt="Management Accounting Services"
            imageBadge="Strategic Insights"
            imageBadgeClass="bg-gradient-to-r from-emerald-500 to-emerald-600"
            borderClass="border-emerald-300 hover:border-emerald-400"
            title="Management Accounting"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                Management accounting is goes beyond to basic bookkeeping, it is about turning financial data into meaningful insights that support better business decisions. At <strong className="text-emerald-600 font-bold">Finera Global</strong>, we provide tailored management accounting services to UK businesses and Accounting and Bookkeeping firms.
              </p>
              <p>
                Our qualified professional prepare detail management reports including precise information related to margin, turnover, cash flow analysis, budget vs. actual comparisons, and key performance indicators (KPIs). These reports are presented in a clear, concise format that enables business owners and managers to make informed strategic decisions in real time.
              </p>
              <p>
                Whether you are a business owner need monthly reports or an accounting firm seeking white label management accounting services, we deliver timely, accurate, and fully compliant reports.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <FileText className="mr-3 text-emerald-600" size={22} />
                  Requirements
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-emerald-500 flex-shrink-0" size={16} />
                    <span>Monthly/Quarterly Information regarding the sales, Purchase, Expenses, Bank statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-emerald-500 flex-shrink-0" size={16} />
                    <span>Payroll Information</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <Award className="mr-3 text-blue-600" size={22} />
                  Deliverables
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    <span>Management accounts reports</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-blue-500 flex-shrink-0" size={16} />
                    <span>Cash flow Statements</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedServiceSection>

          {/* Section 3: Year-End Accounting */}
          <AnimatedServiceSection
            imageSrc="/9.jpg"
            imageAlt="Year-End Accounting Services"
            imageBadge="Year-End Compliance"
            imageBadgeClass="bg-gradient-to-r from-amber-500 to-amber-600"
            borderClass="border-amber-300 hover:border-amber-400"
            title="Year-End Accounting"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                Year-End Accounting refer to the financial statements that a Company prepares at the end of its financial year. These financial statement provide a snapshot of the financial position and financial performance of the company. Year-End Accounting is an essential part of keeping businesses compliant with regulatory and HMRC requirements, but they have the potential to offer much more.
              </p>
              <p>
                At <strong className="text-amber-600 font-bold">Finera Global</strong>, we provide year-end accounting services to support UK businesses and accountancy firm. We ensure that profit and loss statements, balance sheets, trial balances, and supporting schedules have been prepare with full compliance of UK GAAP. We assist in calculating corporation tax (CT600), and preparing working papers needed for submission to HMRC.
              </p>
              <p>
                Our qualified professionals has sound knowledge of finalisation of accounts like tied up Working Paper File, usage of different software – IRIS, CCH, VT Accounts, Tax Calc, Tax Filer etc.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <FileText className="mr-3 text-amber-600" size={22} />
                  Requirements
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-amber-500 flex-shrink-0" size={16} />
                    <span>Last Year Financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-amber-500 flex-shrink-0" size={16} />
                    <span>Last Year Tax return</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-amber-500 flex-shrink-0" size={16} />
                    <span>Current Year data for account finalization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <Award className="mr-3 text-orange-600" size={22} />
                  Deliverables
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0" size={16} />
                    <span>Excel Working Papers</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0" size={16} />
                    <span>Trial Balance</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0" size={16} />
                    <span>All final ledgers</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0" size={16} />
                    <span>Balance sheets and Profit and Loss Accounts</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-orange-500 flex-shrink-0" size={16} />
                    <span>Tax Computation</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedServiceSection>

          {/* Section 4: VAT Return */}
          <AnimatedServiceSection
            imageSrc="/9.jpg"
            imageAlt="VAT Return Services"
            imageBadge="VAT Compliance"
            imageBadgeClass="bg-gradient-to-r from-indigo-500 to-indigo-600"
            borderClass="border-indigo-300 hover:border-indigo-400"
            title="VAT Return"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                VAT is governed by specific regulations. Handling VAT returns is one of the most time-consuming and detail sensitive tasks for any UK accountancy practices. As client volumes grow and regulations evolve under Making Tax Digital (MTD), many firms need a helping hand. These accuracy driven tasks demand significant time to ensuring VAT stuffs are properly recorded, declared correct output VAT and claimed correct input VAT.
              </p>
              <p>
                Delays in filing VAT returns can lead to HMRC penalties and impact on client trust. Our expert professional ensure that routine VAT compliance requirements are met.
              </p>
              <p>
                In VAT Return mainly cover things for the financial period like: Total sales and purchases, The VAT amount you owe, The VAT amount you can claim for refund, Your VAT refund amount from HMRC.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <FileText className="mr-3 text-indigo-600" size={22} />
                  Requirements
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0" size={16} />
                    <span>Invoices (Sales, Purchases, Expenses)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0" size={16} />
                    <span>Bank Statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0" size={16} />
                    <span>Credit Card Statements</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-500 flex-shrink-0" size={16} />
                    <span>Cashbook</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                  <Award className="mr-3 text-purple-600" size={22} />
                  Deliverables
                </p>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-purple-500 flex-shrink-0" size={16} />
                    <span>VAT Return</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="mr-2 text-purple-500 flex-shrink-0" size={16} />
                    <span>VAT Calculation</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedServiceSection>

          {/* Section 5: Payroll Management */}
          <AnimatedServiceSection
            imageSrc="/9.jpg"
            imageAlt="Payroll Management Services"
            imageBadge="Employee Focus"
            imageBadgeClass="bg-gradient-to-r from-teal-500 to-teal-600"
            borderClass="border-teal-300 hover:border-teal-400"
            title="Payroll Management"
          >
            <div className="space-y-6 text-gray-700 mb-10 text-base leading-relaxed">
              <p>
                We understand that payroll is not just about numbers it is about people. Error in payroll processing does not leading to penalty but it is affect on employee morale, trust and expectation toward company and we ensure that it is never happen.
              </p>
              <p>
                Payroll Processing work includes data entry of timesheet, generating payslip, checking employees fall into an auto-enrolment pension scheme. It also requires frequent changes as per client requirements. Many accountancy practices feel the payroll processing task is Boring and time-consuming.
              </p>
              <p>
                Our professional is proficient in all rules and regulations for payroll/pension processing, RTI filling, Auto-Enrolment Pension.
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-6">
              <p className="font-bold mb-4 text-gray-900 text-lg flex items-center">
                <Award className="mr-3 text-teal-600" size={22} />
                At Finera Global shall take care of all the aspects of payroll as under:
              </p>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                  <span>Pay slips</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                  <span>Payroll Summary Period wise</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                  <span>Expense reports of Employee</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                  <span>Form P45</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                  <span>New Employee Starter checklist</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
                  <span>Form P60</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 text-teal-500 flex-shrink-0" size={16} />
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

export default Services;
