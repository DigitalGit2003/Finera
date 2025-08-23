import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  FileSearch, 
  Settings, 
  PlayCircle, 
  CheckCircle2,
  Users,
  Clock,
  Shield,
  RefreshCw,
  MessageSquare,
  BarChart3,
  Upload,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Workflow = () => {
  const workflowSteps = [
    {
      step: 1,
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "Initial Consultation",
      description: "Understanding your business requirements, current processes, and expectations",
      details: [
        "Business needs assessment",
        "Current process evaluation", 
        "Goals and objectives discussion",
        "Timeline and deliverable planning"
      ],
      duration: "1-2 Days"
    },
    {
      step: 2,
      icon: <Settings className="h-8 w-8 text-accent" />,
      title: "Setup & Configuration",
      description: "Configuring systems, establishing workflows, and preparing the foundation",
      details: [
        "System setup and integration",
        "Workflow design and optimization",
        "Access permissions and security setup",
        "Team assignment and training"
      ],
      duration: "3-5 Days"
    },
    {
      step: 3,
      icon: <Upload className="h-8 w-8 text-accent" />,
      title: "Data Migration & Onboarding",
      description: "Seamless transfer of existing data and smooth transition process",
      details: [
        "Historical data migration",
        "Document collection and organization",
        "Chart of accounts setup",
        "Opening balance validation"
      ],
      duration: "2-3 Days"
    },
    {
      step: 4,
      icon: <PlayCircle className="h-8 w-8 text-accent" />,
      title: "Service Execution",
      description: "Delivering consistent, high-quality accounting services as per agreement",
      details: [
        "Daily transaction processing",
        "Regular reconciliations",
        "Timely report generation", 
        "Ongoing client communication"
      ],
      duration: "Ongoing"
    },
    {
      step: 5,
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Review & Reporting",
      description: "Regular performance reviews and comprehensive reporting",
      details: [
        "Monthly financial reporting",
        "Performance metrics review",
        "Process improvement suggestions",
        "Client satisfaction feedback"
      ],
      duration: "Monthly"
    },
    {
      step: 6,
      icon: <RefreshCw className="h-8 w-8 text-accent" />,
      title: "Continuous Improvement",
      description: "Ongoing optimization and enhancement of services and processes",
      details: [
        "Process efficiency analysis",
        "Technology upgrades implementation",
        "Service enhancement initiatives",
        "Long-term strategic planning"
      ],
      duration: "Quarterly"
    }
  ];

  const qualityAssurance = [
    {
      icon: <CheckCircle2 className="h-8 w-8 text-accent" />,
      title: "Multi-Level Review Process",
      description: "Every deliverable goes through rigorous quality checks before submission"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Data Security Protocols",
      description: "Bank-level security measures to protect your sensitive financial information"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Timely Delivery Commitment",
      description: "Strict adherence to deadlines with proactive communication on progress"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Dedicated Account Management",
      description: "Single point of contact for consistent communication and relationship management"
    }
  ];

  const communicationChannels = [
    {
      channel: "Weekly Status Calls",
      description: "Regular check-ins to discuss progress, address concerns, and plan ahead",
      frequency: "Weekly"
    },
    {
      channel: "Monthly Business Reviews",
      description: "Comprehensive review of financial performance and process efficiency",
      frequency: "Monthly"
    },
    {
      channel: "Quarterly Strategic Sessions",
      description: "Strategic planning discussions and long-term goal alignment",
      frequency: "Quarterly"
    },
    {
      channel: "Real-time Support",
      description: "Email and chat support for urgent queries and immediate assistance",
      frequency: "As Needed"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Workflow</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A systematic, proven approach to delivering exceptional financial services with 
            transparency, efficiency, and consistent quality at every step.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Step-by-Step Process</h2>
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                      <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2 flex justify-center lg:justify-start">
                      {step.icon}
                    </div>
                    
                    <div className="lg:col-span-6 text-center lg:text-left">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="lg:col-span-3 text-center lg:text-right">
                      <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Quality Assurance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityAssurance.map((qa, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth text-center">
                <CardContent className="p-8">
                  <div className="mb-4">{qa.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{qa.title}</h3>
                  <p className="text-muted-foreground text-sm">{qa.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Communication Framework */}
        <Card className="shadow-elegant mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Communication Framework</CardTitle>
            <p className="text-xl text-muted-foreground">
              Regular touchpoints to ensure alignment, transparency, and continuous improvement
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {communicationChannels.map((comm, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{comm.channel}</h3>
                    <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                      {comm.frequency}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{comm.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technology & Tools */}
        <Card className="shadow-elegant mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Technology & Tools</CardTitle>
            <p className="text-xl text-muted-foreground">
              Leveraging cutting-edge technology for efficient and accurate service delivery
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Download className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Cloud-Based Systems</h3>
                <p className="text-muted-foreground text-sm">
                  Secure, accessible, and scalable cloud infrastructure for seamless collaboration
                </p>
              </div>
              
              <div className="text-center">
                <FileSearch className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Automated Processes</h3>
                <p className="text-muted-foreground text-sm">
                  Automation tools to reduce errors and increase efficiency in routine tasks
                </p>
              </div>
              
              <div className="text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Security Protocols</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced security measures including encryption and access controls
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center gradient-primary rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience Our Proven Workflow?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Let's start with a consultation to understand your needs and design a customized workflow 
            that perfectly fits your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/engage-model">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 text-gray-400 hover:text-primary">
                Choose Engagement Model
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;