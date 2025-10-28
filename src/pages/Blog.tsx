import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Circular Economy in Manufacturing",
      excerpt: "Explore how manufacturing companies are transforming waste into valuable resources through circular economy principles...",
      date: "March 15, 2024",
      author: "Sarah Mitchell",
      category: "Manufacturing"
    },
    {
      title: "5 Steps to Carbon Neutrality for Small Businesses",
      excerpt: "A practical guide for small businesses looking to reduce their carbon footprint and achieve carbon neutrality...",
      date: "March 10, 2024",
      author: "James Chen",
      category: "Climate Action"
    },
    {
      title: "Sustainable Materials: Beyond Recycled Plastics",
      excerpt: "Discover innovative sustainable materials that are revolutionizing product design and packaging...",
      date: "March 5, 2024",
      author: "Emily Rodriguez",
      category: "Materials"
    },
    {
      title: "ESG Reporting: Best Practices for 2024",
      excerpt: "Navigate the evolving landscape of ESG reporting with these essential best practices and frameworks...",
      date: "February 28, 2024",
      author: "Michael Brown",
      category: "Compliance"
    },
    {
      title: "How Supply Chain Transparency Drives Sustainability",
      excerpt: "Learn why transparent supply chains are crucial for achieving sustainability goals and building consumer trust...",
      date: "February 20, 2024",
      author: "Lisa Thompson",
      category: "Supply Chain"
    },
    {
      title: "Green Building Certifications: A Comprehensive Guide",
      excerpt: "Compare LEED, BREEAM, and other green building certifications to choose the right path for your project...",
      date: "February 15, 2024",
      author: "David Park",
      category: "Construction"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability Insights</h1>
            <p className="text-lg text-primary-foreground/90">
              Expert perspectives on sustainability, circular economy, and environmental innovation
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-4xl text-muted-foreground/30">📝</span>
                </div>
                <div className="p-6">
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
