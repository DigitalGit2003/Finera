import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Target, Award, Medal, CheckCircle, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  const founderProfile = {
    name: "CA Nilay Mavani",
    description: "A seasoned accounting professional with robust academic foundation as a Chartered Accountant and Master of Commerce. Driven by vision to provide exceptional financial outsourcing services, Finera Global was founded with integrity, innovation, and excellence. We specialize in delivering comprehensive and customized accounting, bookkeeping, and taxation solutions to clients across various industries. Our mission empowers businesses to focus on their core competencies while we ensure their financial operations are handled with precision and transparency, and excellence, empowering global clients to focus on their core business growth.",
    experience: "4+ years in accounting, taxation, audit, and financial reporting with strong technical expertise and a practical understanding of international accounting requirements."
  };

  const softwareKnowledge = [
    "QuickBooks", "Xero", "Hubdoc", "Dext", "IRIS Element", 
    "Receipt Bank", "AutoEntry", "Sage", "Wave", "FreshBooks",
    "Zoho Books", "MYOB", "Kashflow"
  ];

  const visionStatement = "To be the trusted global partner in outsourced financial services, recognized for our unwavering commitment to quality, innovation, and client success.";

  const coreValues = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and transparency in all our services."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Accountability", 
      description: "We take ownership of the quality and outcomes of the services we deliver."
    },
    {
      icon: <Medal className="h-8 w-8 text-accent" />,
      title: "Excellence", 
      description: "We are committed to continuous improvement and delivering top-tier results."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Innovation",
      description: "We embrace technology and modern practices to enhance client experience."
    },
    {
      icon: <Handshake className="h-8 w-8 text-accent" />,
      title: "Client-Centricity",
      description: "We value and nurture long-term relationships for sustainable mutual success."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Finera Global</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Finera Global is a forward-thinking outsourcing firm founded by CA Nilay Mavani, a seasoned 
            accounting and bookkeeping professional with robust academic foundation as a Chartered Accountant and Master of Commerce. Driven by a vision to provide exceptional financial outsourcing services, Finera Global is built on the pillars of trust, integrity, and excellence.
          </p>
        </div>

        {/* Vision Statement */}
        <Card className="mb-16 shadow-elegant">
          <CardContent className="p-12 text-center">
            <Target className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              {visionStatement}
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Software Knowledge */}
        <Card className="mb-16 shadow-elegant">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl">Software Knowledge & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {softwareKnowledge.map((software, index) => (
                <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                  {software}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg">
              Leveraging modern tools and technology to ensure consistency and smooth workflows, 
              helping our clients scale operations and better serve their own customers.
            </p>
          </CardContent>
        </Card>

        {/* Founder Profile */}
        <Card className="shadow-elegant">
          <CardHeader className="text-center pb-8">
            <User className="h-16 w-16 text-accent mx-auto mb-4" />
            <CardTitle className="text-3xl">Founder Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-accent mb-4">{founderProfile.name}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                {founderProfile.description}
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h4 className="text-xl font-bold mb-4 text-center">Professional Experience</h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                {founderProfile.experience}
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Finera Global was born with the desire to offer specialized, efficient support to firms in these vital 
                markets. We focus on providing reliable back-office solutions that free up valuable time and resources. 
                My focus remains on building long-term partnerships grounded in trust, quality, and process-driven service delivery.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;