import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Target, Users, TrendingUp } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Target,
      title: "Advisory & Project Leadership",
      description: "Capital projects, governance, and ESG integration—from concept to commissioning."
    },
    {
      icon: Leaf,
      title: "Sustainable Products",
      description: "Recycled rubber + solar solutions that cut carbon and lifecycle costs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to Green On Demand Strategies Inc.
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Waste is yesterday's model.
            </p>
            <p className="text-lg text-muted-foreground">
              The future is circular — let's build it together.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <service.icon className="h-16 w-16 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <Link to={index === 0 ? "/services" : "/products"}>
                  <Button variant="outline">
                    {index === 0 ? "View Services" : "View Products"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 lowercase">
            who we work with
          </h2>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            We partner with executive teams, project sponsors, and operational leaders in highly regulated, safety-sensitive, and industrial environments.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale">
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">Industry 1</div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">Industry 2</div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">Industry 3</div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">Industry 4</div>
            <div className="h-16 w-32 bg-muted rounded flex items-center justify-center">Industry 5</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect to find out about sustainable products and services.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
