import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Clock, 
  Target, 
  CheckCircle,
  ArrowRight,
  Briefcase,
  Building,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EngageModel = () => {
  const engagementModels = [
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Team-as-a-Service (TaaS)",
      subtitle: "Dedicated Team Model",
      description: "Get a dedicated team of accounting professionals exclusively working on your projects with full commitment and expertise.",
      features: [
        "Dedicated accounting team assigned to your business",
        "Direct communication with team members",
        "Consistent service delivery and relationship building",
        "Scalable team size based on workload",
        "Long-term partnership approach"
      ],
      benefits: [
        "Better understanding of your business",
        "Consistent quality and approach",
        "Reduced onboarding time",
        "Enhanced collaboration"
      ],
      ideal: "Growing businesses with consistent, ongoing accounting needs"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-accent" />,
      title: "Portfolio Management Model",
      subtitle: "Service Offered, Business Focused",
      description: "Comprehensive portfolio management where we handle multiple aspects of your financial operations as an extension of your team.",
      features: [
        "Complete financial operations management",
        "End-to-end process ownership",
        "Strategic financial planning and advisory",
        "Performance monitoring and reporting",
        "Compliance and risk management"
      ],
      benefits: [
        "Complete peace of mind",
        "Strategic insights and recommendations", 
        "Improved financial performance",
        "Regulatory compliance assurance"
      ],
      ideal: "Established businesses seeking comprehensive financial management"
    },
    {
      icon: <Building className="h-12 w-12 text-accent" />,
      title: "Customizable Models",
      subtitle: "Flexible & Adaptable",
      description: "Tailored engagement models designed specifically for your unique business requirements and operational preferences.",
      features: [
        "Hybrid service delivery approaches",
        "Flexible pricing structures",
        "Customized service level agreements",
        "Adaptable to changing business needs",
        "Integration with existing systems"
      ],
      benefits: [
        "Perfect fit for your business model",
        "Cost-effective solutions",
        "Flexibility to scale up or down",
        "Seamless integration"
      ],
      ideal: "Businesses with unique requirements or specific operational models"
    }
  ];

  const comparisonTable = [
    {
      feature: "Resource Allocation",
      taas: "Dedicated team members",
      portfolio: "Shared expert resources", 
      customizable: "Flexible allocation"
    },
    {
      feature: "Communication",
      taas: "Direct team communication",
      portfolio: "Account manager interface",
      customizable: "Preferred communication model"
    },
    {
      feature: "Scalability", 
      taas: "Team size adjustable",
      portfolio: "Service scope expandable",
      customizable: "Fully scalable"
    },
    {
      feature: "Pricing Model",
      taas: "Team-based pricing",
      portfolio: "Service-based pricing",
      customizable: "Negotiable pricing"
    }
  ];

  const selectionCriteria = [
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Business Size & Complexity",
      description: "Consider your business size, transaction volume, and operational complexity"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Service Requirements",
      description: "Evaluate the scope and frequency of services needed"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-accent" />,
      title: "Control Preference",
      description: "Determine your preferred level of involvement and control"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-accent" />,
      title: "Budget Considerations",
      description: "Align the engagement model with your budget and ROI expectations"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Engagement Models</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Flexible and customizable engagement models designed to fit your unique business needs, 
            ensuring optimal service delivery and maximum value.
          </p>
        </div>

        {/* Engagement Models */}
        <div className="space-y-8 mb-20">
          {engagementModels.map((model, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    {model.icon}
                    <div>
                      <CardTitle className="text-2xl">{model.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{model.subtitle}</Badge>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
                    <strong>Ideal for:</strong> {model.ideal}
                  </div>
                </div>
                <p className="text-lg text-muted-foreground mt-4">{model.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {model.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <Target className="h-5 w-5 text-accent mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {model.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card className="shadow-elegant mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Model Comparison</CardTitle>
            <p className="text-xl text-muted-foreground">
              Compare our engagement models to find the perfect fit for your business
            </p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold">Team-as-a-Service</th>
                    <th className="text-center py-4 px-4 font-semibold">Portfolio Management</th>
                    <th className="text-center py-4 px-4 font-semibold">Customizable Models</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-4 px-4 font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.taas}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.portfolio}</td>
                      <td className="py-4 px-4 text-center text-muted-foreground">{row.customizable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Selection Criteria */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">How to Choose the Right Model</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {selectionCriteria.map((criteria, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth text-center">
                <CardContent className="p-8">
                  <div className="mb-4">{criteria.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{criteria.title}</h3>
                  <p className="text-muted-foreground text-sm">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center gradient-primary rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Need Help Choosing the Right Model?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Our experts will help you select the perfect engagement model based on your specific needs and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/workflow">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 text-gray-400 hover:text-primary">
                View Our Workflow
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngageModel;