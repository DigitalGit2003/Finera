import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email Us",
      content: "info@fineraglobal.com",
      description: "Send us an email and we'll get back to you within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Call Us",
      content: "+91 98765 43210",
      description: "Speak directly with our experts during business hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Visit Us",
      content: "Mumbai, India",
      description: "Schedule an appointment to meet us in person"
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      title: "Office Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      description: "We're available during standard business hours"
    }
  ];

  const services = [
    "Bookkeeping Services",
    "Taxation Services", 
    "Financial Reporting",
    "Accounts Payable & Receivable",
    "Financial Analysis",
    "Payroll Processing",
    "Other Services"
  ];

  const reasons = [
    {
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      title: "General Inquiry",
      description: "Learn more about our services and capabilities"
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Schedule Consultation",
      description: "Book a free consultation to discuss your needs"
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Partnership Opportunity",
      description: "Explore potential partnership opportunities"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to transform your financial operations? Get in touch with our experts 
            and discover how Finera Global can help your business thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center">
                  <Send className="h-8 w-8 text-accent mr-3" />
                  Let's Talk
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your requirements, current challenges, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-primary">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <p className="text-muted-foreground">
                  Multiple ways to reach us for your convenience
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-accent font-medium">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Why Contact Us */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Why Contact Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{reason.icon}</div>
                    <div>
                      <h3 className="font-semibold">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-elegant gradient-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6">Quick Response Guarantee</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">&lt; 24 hrs</div>
                    <div className="text-primary-foreground/90">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-primary-foreground/90">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-primary-foreground/90">Happy Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;