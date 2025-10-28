import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Leaf, Recycle, Factory } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Package,
      title: "Sustainable Materials Database",
      description: "Access our comprehensive database of eco-friendly materials and suppliers. Compare environmental impacts, costs, and performance characteristics to make informed decisions.",
      features: ["10,000+ materials", "Life cycle assessments", "Supplier directory", "Regular updates"]
    },
    {
      icon: Leaf,
      title: "Carbon Footprint Calculator",
      description: "Calculate and track your organization's carbon emissions with our industry-leading tool. Generate reports for stakeholders and identify reduction opportunities.",
      features: ["Real-time tracking", "Scope 1, 2 & 3", "Custom reporting", "Benchmarking"]
    },
    {
      icon: Recycle,
      title: "Circular Economy Framework",
      description: "Our proprietary framework helps you design, implement, and measure circular business models. Includes templates, case studies, and best practices.",
      features: ["Step-by-step guide", "ROI calculator", "Success stories", "Implementation support"]
    },
    {
      icon: Factory,
      title: "Supply Chain Analyzer",
      description: "Evaluate the sustainability of your supply chain from end to end. Identify risks, opportunities, and optimize for both efficiency and environmental impact.",
      features: ["Risk assessment", "Supplier scoring", "Optimization tools", "Compliance tracking"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
            <p className="text-lg text-primary-foreground/90">
              Recycled rubber + solar solutions that cut carbon and lifecycle costs
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1 bg-card p-8 rounded-lg border border-border">
                  <product.icon className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button>Request Demo</Button>
                  </Link>
                </div>
                <div className="flex-1 bg-muted rounded-lg h-80 flex items-center justify-center">
                  <product.icon className="h-32 w-32 text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact us to learn more about our products and find the right solution for your needs
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">Contact Sales</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
