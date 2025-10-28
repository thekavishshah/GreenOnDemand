import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Recycle, LineChart, Shield, Lightbulb, FileCheck, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Recycle,
      title: "Circular Economy Strategy",
      description: "Transform your linear business model into a circular one. We help you identify opportunities to reduce waste, reuse materials, and create closed-loop systems that drive profitability."
    },
    {
      icon: LineChart,
      title: "Sustainability Assessment",
      description: "Comprehensive analysis of your current environmental impact. We measure, benchmark, and provide actionable insights to improve your sustainability performance."
    },
    {
      icon: Shield,
      title: "Compliance & Regulatory Support",
      description: "Navigate complex environmental regulations with confidence. We ensure your operations meet all local, national, and international sustainability standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Discover innovative solutions to your sustainability challenges. From material substitution to process optimization, we help you stay ahead of the curve."
    },
    {
      icon: FileCheck,
      title: "ESG Reporting",
      description: "Transparent and comprehensive ESG reporting that meets stakeholder expectations. We help you communicate your sustainability story effectively."
    },
    {
      icon: BookOpen,
      title: "Training & Workshops",
      description: "Empower your team with sustainability knowledge. Our customized training programs build internal capacity for lasting change."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
            <p className="text-lg text-primary-foreground/90">
              Advisory and project leadership for sustainable success
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Sustainable Together
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Contact us to discuss which services are right for your organization
          </p>
          <Link to="/contact">
            <Button size="lg">Schedule a Consultation</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
