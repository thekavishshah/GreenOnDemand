import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Globe, Target } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Industry Partners" },
    { number: "15+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering solutions that exceed expectations and create lasting impact."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Success is built on partnerships. We work closely with clients, stakeholders, and communities to achieve shared goals."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Environmental responsibility isn't just what we do—it's who we are. Every decision considers planetary impact."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace innovation and continuously seek new ways to solve complex sustainability challenges."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Green On Demand</h1>
            <p className="text-lg text-primary-foreground/90">
              Building a circular future, one project at a time
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              To empower organizations to build a sustainable future through innovative strategies, 
              cutting-edge materials, and collaborative partnerships that benefit business and planet alike.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg border border-border"
              >
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2008, EcoStrategy Consulting emerged from a simple belief: that business success 
                and environmental sustainability are not mutually exclusive—they're interdependent.
              </p>
              <p>
                What began as a small team of environmental consultants has grown into a leading sustainability 
                advisory firm, serving clients across multiple industries and continents. Our growth reflects 
                the increasing recognition that sustainable practices aren't just good ethics—they're good business.
              </p>
              <p>
                Today, we combine deep technical expertise with practical business acumen to help organizations 
                navigate the complex landscape of environmental compliance, circular economy principles, and 
                sustainable innovation. Our team of dedicated professionals brings diverse backgrounds in 
                environmental science, engineering, business strategy, and policy.
              </p>
              <p>
                As we look to the future, our commitment remains unchanged: to be trusted partners in building 
                a more sustainable world, one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us on the Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with us to create sustainable solutions that drive real change
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">Get Started Today</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
