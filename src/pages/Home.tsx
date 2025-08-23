import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Shield, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-subtle"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 gradient-primary bg-clip-text text-transparent">
              FINERA GLOBAL
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 max-w-4xl mx-auto">
              Reliable & Trusted Outsourcing Partner
            </p>
            <p className="text-lg lg:text-xl text-foreground mb-12 max-w-3xl mx-auto font-medium">
              Forward-thinking outsourcing firm providing exceptional financial services with unwavering commitment to quality, innovation, and client success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="gradient-primary text-lg px-8 py-6 shadow-elegant hover:shadow-glow transition-smooth">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-accent hover:border-accent">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Core Values Section
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on the foundation of excellence, integrity, and client-centric approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  Upholding the highest standards of honesty and transparency in all our services.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Accountability</h3>
                <p className="text-muted-foreground">
                  Taking ownership of the quality and outcomes of the services we deliver.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Embracing technology and modern practices to enhance client experience.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Client-Centricity</h3>
                <p className="text-muted-foreground">
                  Ensuring exceptional service delivery and building lasting partnerships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose Finera Global?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Expertise</h3>
                    <p className="text-muted-foreground">
                      Specialized knowledge in outsourced bookkeeping and taxation services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Efficient Solutions</h3>
                    <p className="text-muted-foreground">
                      Reduce overhead and administrative burdens while maintaining quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Improved Operational Efficiency</h3>
                    <p className="text-muted-foreground">
                      Focus on strategic business growth while we handle your financial operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reliable Partnership</h3>
                    <p className="text-muted-foreground">
                      Dedicated team committed to your success with proven track record.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Compliance & Accuracy</h3>
                    <p className="text-muted-foreground">
                      Ensure peace of mind and adherence to financial regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-elegant p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">500+</div>
                      <div className="text-muted-foreground">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">99%</div>
                      <div className="text-muted-foreground">Client Retention</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">4+</div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                      <div className="text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Let Finera Global be your trusted partner in achieving financial excellence and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-6 text-gray-400 hover:text-primary">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;