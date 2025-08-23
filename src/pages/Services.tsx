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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-accent" />,
      title: "Bookkeeping Services",
      description: "Comprehensive bookkeeping solutions tailored to your business needs",
      features: [
        "Transaction recording and categorization",
        "Bank reconciliations", 
        "Accounts payable and receivable management",
        "Monthly financial statements preparation",
        "General ledger maintenance"
      ]
    },
    {
      icon: <Calculator className="h-12 w-12 text-accent" />,
      title: "Taxation Services", 
      description: "Expert tax preparation and compliance services for individuals and businesses",
      features: [
        "Corporate tax returns preparation",
        "Personal tax returns filing",
        "Tax planning and advisory",
        "VAT/GST compliance and returns",
        "Tax audit support and representation"
      ]
    },
    {
      icon: <PieChart className="h-12 w-12 text-accent" />,
      title: "Financial Reporting",
      description: "Accurate and timely financial reporting to support business decisions",
      features: [
        "Monthly, quarterly, and annual reports",
        "Management reporting packages",
        "Cash flow statements",
        "Budget vs actual analysis",
        "Key performance indicators (KPIs) tracking"
      ]
    },
    {
      icon: <Receipt className="h-12 w-12 text-accent" />,
      title: "Accounts Payable & Receivable",
      description: "Efficient management of your business cash flow and vendor relationships",
      features: [
        "Invoice processing and approval workflows",
        "Vendor payment management",
        "Customer invoice generation",
        "Collections management",
        "Aging reports and analysis"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Financial Analysis",
      description: "Data-driven insights to help you make informed business decisions",
      features: [
        "Profitability analysis",
        "Cost center reporting", 
        "Variance analysis",
        "Financial ratio calculations",
        "Trend analysis and forecasting"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Payroll Processing",
      description: "Complete payroll management ensuring compliance and accuracy",
      features: [
        "Salary and wage calculations",
        "Tax deductions and filings",
        "Benefits administration",
        "Payroll register maintenance",
        "Year-end tax document preparation"
      ]
    }
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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive financial outsourcing solutions designed to streamline your operations 
            and drive business growth with precision and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  {service.icon}
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-2xl p-12 shadow-elegant mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Services?</h2>
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

        {/* Service Process */}
        <Card className="shadow-elegant mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Our Service Process</CardTitle>
            <p className="text-xl text-muted-foreground">
              A streamlined approach to delivering exceptional financial services
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Consultation</h3>
                <p className="text-muted-foreground text-sm">
                  Understanding your business needs and requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Setup</h3>
                <p className="text-muted-foreground text-sm">
                  Configuring systems and establishing workflows
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Execution</h3>
                <p className="text-muted-foreground text-sm">
                  Delivering services with precision and timeliness
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Review</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous monitoring and improvement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center gradient-primary rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Streamline Your Financial Operations?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Let our expert team handle your financial processes while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/engage-model">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 text-gray-400 hover:text-primary">
                Learn About Our Models
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;