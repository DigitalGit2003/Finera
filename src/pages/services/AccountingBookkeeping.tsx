import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle,
  ArrowRight,
  BookOpen,
  Users,
  Shield,
  Clock,
  TrendingUp,
  FileText,
  DollarSign,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AccountingBookkeeping = () => {
  const services = [
    "Transaction recording and categorization",
    "Bank reconciliations", 
    "Accounts payable and receivable management",
    "Monthly financial statements preparation",
    "General ledger maintenance",
    "Chart of accounts setup and maintenance",
    "Inventory tracking and valuation",
    "Fixed assets management",
    "Cash flow monitoring",
    "Financial reporting and analysis"
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Time Efficiency",
      description: "Focus on core business activities while we handle your financial operations"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Data Security",
      description: "Bank-level security protocols to protect your sensitive financial information"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Cost Savings", 
      description: "Reduce overhead costs compared to maintaining in-house accounting staff"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Compliance Assurance",
      description: "Stay compliant with latest regulations and accounting standards"
    }
  ];

  const clientDocuments = [
    "Invoices (Sales, Purchases, Expenses)",
    "Bank Statements", 
    "Credit Card Statements",
    "Cashbook",
    "Receipts and supporting documents",
    "Payroll records",
    "Tax documents",
    "Previous financial statements"
  ];

  const deliverables = [
    "Debtors and Creditors Ageing",
    "All Ledgers",
    "Bank Reconciliation",
    "Trial Balance",
    "Monthly financial statements",
    "Cash flow statements",
    "Balance sheet",
    "Profit and loss statement",
    "General ledger reports",
    "Aged receivables and payables"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Accounting and Bookkeeping Services</h1>
        </div>

        {/* Main Content - Overlapping Layout */}
        <div className="mb-16">
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Left Column - Image */}
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Accounting and Bookkeeping Services"
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded text-xs text-gray-600">
                  freepik
                </div>
              </div>
              
              {/* Right Column - Content that overlaps */}
              <div className="relative z-10 -ml-16 lg:-ml-20">
                <div className="bg-white rounded-lg p-8 shadow-lg border">
                  <h2 className="text-4xl font-bold mb-6 text-gray-800 relative">
                    Accounting and Bookkeeping
                    <div className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></div>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Nowadays, Bookkeeping work is becoming most regular work for each and every Accountancy Firm. 
                      Bookkeeping work is a volume-based work, which involved data entry, analysis of transactions, 
                      reconciling banking transactions etc.
                    </p>
                    
                    <p>
                      Bookkeeping work is lengthy process task and over a period of time, staff are going to bored 
                      as it is monotones task at certain level.
                    </p>
                    
                    <p>
                      Accountancy Firm can utilise outsourcing bookkeeping services of <strong>FINERA Global</strong>, 
                      which reduce burden of staff. Accountancy Firm can delegate other advancement task to their 
                      staff and maximize their potentiality.
                    </p>
                    
                    <p>
                      FINERA Global has their dedicated bookkeeping team, where all the team members are XERO and 
                      QuickBook Certified and they have sound knowledge of VAT compliance and Bookkeeping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Outsourced Accounting and Bookkeeping Services We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-2xl p-12 shadow-elegant mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose FINERA Global for Bookkeeping?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Documents and Deliverables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Clients need to provide following documents:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {clientDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">We will provide following results:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Our Expertise Team */}
        <Card className="shadow-elegant mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Our Expertise Team</CardTitle>
            <p className="text-xl text-muted-foreground">
              Skilled professionals with sound knowledge of accounting software and compliance
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Certified Professionals</h3>
                <p className="text-muted-foreground text-sm">
                  Our team members are XERO and QuickBooks Certified with sound knowledge of VAT compliance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Software Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Proficient in IRIS, CCH, VT Accounts, Tax Calc, NetSuite, FreshBooks, and more
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous feedback and transparent approach for better actionable insights
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center gradient-primary rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Streamline Your Bookkeeping?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Leave all your critical bookkeeping tasks to us and focus on high income generating accounting and taxation tasks. 
            We provide you with feedback on an ongoing basis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 text-gray-400 hover:text-primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingBookkeeping;