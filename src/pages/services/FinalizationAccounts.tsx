import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle,
  ArrowRight,
  FileBarChart,
  Users,
  Shield,
  Clock,
  TrendingUp,
  FileText,
  DollarSign,
  Building2,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalizationAccounts = () => {
  const services = [
    "Financial statement preparation",
    "Trial balance preparation and review",
    "Working papers development",
    "Balance sheet finalization",
    "Profit and loss account preparation",
    "Tax computation and planning",
    "Audit support and coordination",
    "Regulatory compliance reporting",
    "Management reporting packages",
    "Year-end closing procedures"
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Team",
      description: "Qualified ACCA and CPA professionals with extensive experience in account finalization"
    },
    {
      icon: <Calculator className="h-8 w-8 text-accent" />,
      title: "Cost Effective",
      description: "Save on hiring expensive senior accountants while getting expert finalization services"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Compliance Assurance",
      description: "Ensure full compliance with accounting standards and regulatory requirements"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Strategic Focus",
      description: "Free up your senior staff to focus on high-value strategic activities"
    }
  ];

  const clientDocuments = [
    "Last Year Financial statements",
    "Last Year Tax return",
    "Current Year data for account finalization",
    "Bank statements and reconciliations",
    "Trial balance and general ledger",
    "Supporting schedules and documentation",
    "Audit reports and management letters",
    "Tax computations and returns"
  ];

  const deliverables = [
    "Excel Working Papers",
    "Trial Balance",
    "All final ledgers",
    "Balance sheets and Profit and Loss Accounts",
    "Tax Computation",
    "Working paper files",
    "Audit-ready financial statements",
    "Management commentary and notes",
    "Compliance reports",
    "Tax planning recommendations"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Finalization of Accounts</h1>
        </div>

        {/* Main Content - Overlapping Layout */}
        <div className="mb-16">
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
              {/* Left Column - Image */}
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Finalization of Accounts Services"
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
                    Finalization of Accounts
                    <div className="absolute bottom-0 left-0 w-16 h-1 bg-blue-600"></div>
                  </h2>
                  
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Finalisation of Accounts preparation is required a high skill level of knowledge and experience. 
                      It is one of very important services for the Accountancy Firm because it gives overall insight of 
                      business entity and corporation tax amount is based on these finalised accounts.
                    </p>
                    
                    <p>
                      To fulfil this responsibility, Accountancy firm require to recruits experienced senior accountant, 
                      qualified ACCA where generally they prepare finalisation of accounts only. Many times it has been 
                      observed that this staffs is not willing to carry out bookkeeping or other work of accountancy firm. 
                      Accountancy firm pay huge cost to this senior accountant, ACCA.
                    </p>
                    
                    <p>
                      <strong>FINERA Global</strong> is helping to Accountancy Firm as a work partner where it shares work 
                      load of yours and save your cost. Where, team of FINERA outsourcing are always available to finish 
                      up finalisation of accounts with good quality, preparation of bookkeeping and other task as well.
                    </p>
                    
                    <p>
                      Our expertise team has sound knowledge of finalisation of accounts like tied up Working Paper File, 
                      usage of different software – IRIS, CCH, VT Accounts, Tax Calc, Tax Filer etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Finalization of Accounts Services We Offer</h2>
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
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose FINERA Global for Account Finalization?</h2>
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

        {/* Software Expertise */}
        <Card className="shadow-elegant mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Our Software Expertise</CardTitle>
            <p className="text-xl text-muted-foreground">
              Our expertise team has sound knowledge of finalisation of accounts with various software platforms
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">UK Software</h3>
                <p className="text-muted-foreground text-sm">
                  IRIS, CCH, VT Accounts, Tax Calc, Tax Filer and other UK-specific accounting software
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">US Software</h3>
                <p className="text-muted-foreground text-sm">
                  NetSuite, FreshBooks, XERO, QuickBooks, Sage and other US accounting platforms
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Tied up Working Paper Files and systematic approach to account finalization
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center gradient-primary rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Finalize Your Accounts?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            FINERA Global is helping to Accountancy Firm as a work partner where it shares work load of yours 
            and save your cost. Our team is always available to finish up finalisation of accounts with good quality.
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

export default FinalizationAccounts;