import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Green on Demand" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Smart Materials, Smarter Outcomes, Greener Communities, One Project at a Time!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Products</Link></li>
              <li><Link to="/industries" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Industries</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm text-primary-foreground/80 mb-2">
              Connect to find out about sustainable products and services.
            </p>
            <Link to="/contact">
              <button className="text-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-md transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Green On Demand Strategies Inc. All rights reserved.</p>
          <p className="mt-2">Alberta T4B 3C3, Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
