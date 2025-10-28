import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Factory, Truck, ShoppingBag, Home, Zap } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Construction & Real Estate",
      description: "Build sustainable structures with eco-friendly materials and circular design principles. We help you meet green building standards and reduce construction waste.",
      challenges: ["Material sourcing", "Waste reduction", "LEED certification", "Energy efficiency"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Transform production processes to minimize environmental impact. From raw materials to finished products, we optimize every step for sustainability.",
      challenges: ["Process optimization", "Supply chain sustainability", "Waste-to-value", "Energy management"]
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Reduce emissions and improve efficiency across your distribution network. We help you transition to cleaner fuels and optimize routes.",
      challenges: ["Fleet electrification", "Route optimization", "Carbon reduction", "Last-mile delivery"]
    },
    {
      icon: ShoppingBag,
      title: "Retail & Consumer Goods",
      description: "Meet consumer demand for sustainable products. We help you develop circular packaging solutions and transparent supply chains.",
      challenges: ["Sustainable packaging", "Product lifecycle", "Consumer communication", "Reverse logistics"]
    },
    {
      icon: Home,
      title: "Hospitality & Tourism",
      description: "Create memorable experiences while minimizing environmental impact. From energy efficiency to waste management, we cover all aspects of sustainable hospitality.",
      challenges: ["Energy & water use", "Waste management", "Local sourcing", "Guest engagement"]
    },
    {
      icon: Zap,
      title: "Energy & Utilities",
      description: "Accelerate the transition to renewable energy. We help utilities modernize infrastructure and develop innovative clean energy solutions.",
      challenges: ["Grid modernization", "Renewable integration", "Energy storage", "Demand management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-lg text-primary-foreground/90">
              Specialized sustainability solutions for diverse sectors
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <industry.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground mb-6">{industry.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-sm">Key Focus Areas:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Industry, Our Expertise
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            Let's discuss how our industry-specific solutions can help your organization thrive sustainably
          </p>
          <Link to="/contact">
            <Button size="lg">Get Industry Insights</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
