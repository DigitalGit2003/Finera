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
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const heroStats = [
    { number: "100+", label: "Clients Served" },
    { number: "100000+", label: "Invoices Processed Per Month" },
    { number: "500+", label: "Completed Projects" },
    { number: "1000000+", label: "Reconciliation in a Month" },
    { number: "150+", label: "Team Size" }
  ];

  const mainServices = [
    {
      icon: <Receipt className="h-16 w-16 text-accent" />,
      title: "Accounts Reconciliation",
      description: "Say goodbye to errors with our expert team by your side. We proactively resolve discrepancies, ensuring your financial records are always accurate and reliable.",
      link: "/services/accounts-reconciliation"
    },
    {
      icon: <CreditCard className="h-16 w-16 text-accent" />,
      title: "Accounts Payable",
      description: "Outsource accounts payable for smoother operations. Our services offer managing vendor payments, reducing errors and maintaining financial stability. Make AP a cornerstone of your success.",
      link: "/services/accounts-payable"
    },
    {
      icon: <Receipt className="h-16 w-16 text-accent" />,
      title: "Accounts Receivable",
      description: "Transform receivables into a growth engine. Hire us to automate invoicing and monitor collections, which will ultimately improve cash flow. We prioritize timely payment processing.",
      link: "/services/accounts-receivable"
    },
    {
      icon: <FileBarChart className="h-16 w-16 text-accent" />,
      title: "Financial Reporting",
      description: "Gain clarity with customized reports crafted to inform strategic decisions. Our insights help you navigate challenges and seize growth opportunities.",
      link: "/services/financial-reporting"
    },
    {
      icon: <TrendingUp className="h-16 w-16 text-accent" />,
      title: "Cash Flow Forecasting",
      description: "Stay in control with precise cash flow forecasts tailored to your needs. Our solutions ensure financial stability and efficiency at every step.",
      link: "/services/cash-flow-forecasting"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Connect with Us",
      description: "Understanding your accounting challenges and requirements."
    },
    {
      number: "2", 
      title: "Understand Deliverables",
      description: "Comprehending your expectations and setting specific deliverables"
    },
    {
      number: "3",
      title: "Pricing", 
      description: "We propose a fixed pricing plan based on your exact requirements."
    },
    {
      number: "4",
      title: "Plan of Action",
      description: "Connect with our accountant to create customized plans and bring effective solutions."
    },
    {
      number: "5",
      title: "Kick Off",
      description: "Once approved, it's time to put the plan into action."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-12 w-12 text-accent" />,
      title: "Expertise You Can Trust",
      description: "Our team is comprised of experienced professionals dedicated to accuracy and compliance."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-accent" />,
      title: "Tailored Solutions for Every Business",
      description: "We customize our services to fit the unique needs of your business, ensuring optimal results."
    },
    {
      icon: <Clock className="h-12 w-12 text-accent" />,
      title: "Efficient, Hassle-Free Process",
      description: "We have a simple plug and play model, we assign the accountants based on your needs, no long-term contracts."
    },
    {
      icon: <Building2 className="h-12 w-12 text-accent" />,
      title: "Cutting-Edge Technology",
      description: "We know just the right tools to use to get those numbers accurately and on time."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-accent" />,
      title: "Transparent and Flexible Pricing",
      description: "We offer upfront fixed pricing options that suit your budget without any hidden fees."
    }
  ];

  const technologyPartners = [
    { name: "NetSuite", description: "Boost Your Growth with NetSuite Accounting Excellence." },
    { name: "Xero", description: "Simplify Your Finances with Xero Accounting Service." },
    { name: "Zoho Books", description: "Empower Your Business with Zoho Books." },
    { name: "QuickBooks", description: "Maximize efficiency with QuickBooks Accounting Software." },
    { name: "Business Central", description: "Financial Management Made Simple with Business Central" }
  ];

  const testimonials = [
    {
      quote: "Excellent work with invoicing automation and AP & AR processing. Highly recommended!",
      author: "Aaron Attwell",
      position: "Director"
    },
    {
      quote: "Excellent team to work with. Great work. Will use their service again for sure.",
      author: "Jon Kontopos", 
      position: "Vice President"
    },
    {
      quote: "Exceptionally understanding and competent team. A wonderful experience.",
      author: "Andy Seth",
      position: "CFO"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Accounting Outsourcing Services Built for Overseas Firms
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Accounting doesn't have to be complicated—we make it simple. With a decade of experience, we understand the value of accurate books and timely reports for any business, big or small. As your trusted partner, we've spent over a decade helping businesses worldwide to stay on top of their finances.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Experience Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Experience Unmatched Accounting and Bookkeeping Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Wondering what sets us apart? It's our unwavering commitment to delivering exceptional outsourced accounting services. From streamlining compliance to empowering smarter decisions, our solutions are designed to drive your success effortlessly.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      Know More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Catch Up Bookkeeping Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 mb-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Catch up Bookkeeping
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Falling behind on your bookkeeping? Don't stress-we've got you covered! Our expert bookkeepers will clean up your records, get everything up to date, and make tax season a breeze. Let us save you time, money, and hassle, so you can focus on what matters most. We'll handle the numbers while you take charge of your success!
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            The Process Behind Our Success
          </h2>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why We're the Perfect Accounting and Bookkeeping Company for You?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <div className="text-sm font-medium text-blue-600 mb-2">{index + 1}/5</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Driving Results with The Best Technology
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our services are backed by top industry software to tackle every accounting and bookkeeping challenge.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyPartners.map((partner, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            See how we've helped others achieve their financial goals with personalized solutions and expert guidance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center gradient-primary rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Streamline Your Finances, One Step At A Time
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Let us take care of your books and make this financial year a good one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;