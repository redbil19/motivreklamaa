
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "HOTEL Signage",
      category: "signage",
      image: "/lovable-uploads/e5422b0d-7021-410f-a9d3-c9405e63718e.png",
      description: "Elegant hotel signage with large windows and modern architecture",
      client: "Luxury Hotel Chain",
      location: "Tirana, Albania"
    },
    {
      id: 2,
      title: "SPAR Storefront",
      category: "storefront",
      image: "/lovable-uploads/453bdf5b-598f-4bc8-bcfb-bfc19c2db0c1.png",
      description: "Retail supermarket signage and storefront design for SPAR",
      client: "SPAR Supermarket",
      location: "Durres, Albania"
    },
    {
      id: 3,
      title: "Ikebana Restaurant",
      category: "signage",
      image: "/lovable-uploads/8e872b56-e9e2-4a78-9b62-094bcacbc04a.png",
      description: "Tropical-themed restaurant signage with distinctive design",
      client: "Ikebana Restaurant",
      location: "Vlore, Albania"
    },
    // Duplicating some projects to fill out the grid
    {
      id: 4,
      title: "SPAR Interior Signage",
      category: "interior",
      image: "/lovable-uploads/453bdf5b-598f-4bc8-bcfb-bfc19c2db0c1.png",
      description: "Interior department signs and promotional displays",
      client: "SPAR Supermarket",
      location: "Shkoder, Albania"
    },
    {
      id: 5,
      title: "Luxury Resort Branding",
      category: "branding",
      image: "/lovable-uploads/e5422b0d-7021-410f-a9d3-c9405e63718e.png",
      description: "Complete branding package for a luxury resort",
      client: "Mountain View Resort",
      location: "Korce, Albania"
    },
    {
      id: 6,
      title: "Beach Restaurant",
      category: "signage",
      image: "/lovable-uploads/8e872b56-e9e2-4a78-9b62-094bcacbc04a.png",
      description: "Beachfront restaurant sign with tropical elements",
      client: "Coastal Dining Group",
      location: "Sarande, Albania"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-motiv-gray">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Portfolio</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses stand out
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-motiv-red hover:bg-red-700" : ""}
            >
              All Projects
            </Button>
            <Button 
              variant={filter === "signage" ? "default" : "outline"}
              onClick={() => setFilter("signage")}
              className={filter === "signage" ? "bg-motiv-red hover:bg-red-700" : ""}
            >
              Signage
            </Button>
            <Button 
              variant={filter === "storefront" ? "default" : "outline"}
              onClick={() => setFilter("storefront")}
              className={filter === "storefront" ? "bg-motiv-red hover:bg-red-700" : ""}
            >
              Storefronts
            </Button>
            <Button 
              variant={filter === "interior" ? "default" : "outline"}
              onClick={() => setFilter("interior")}
              className={filter === "interior" ? "bg-motiv-red hover:bg-red-700" : ""}
            >
              Interior
            </Button>
            <Button 
              variant={filter === "branding" ? "default" : "outline"}
              onClick={() => setFilter("branding")}
              className={filter === "branding" ? "bg-motiv-red hover:bg-red-700" : ""}
            >
              Branding
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0 relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-bold text-xl">{project.title}</h3>
                        <p className="text-white/80 text-sm">{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="mb-6">{project.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex">
                          <span className="font-semibold w-24">Client:</span>
                          <span>{project.client}</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold w-24">Location:</span>
                          <span>{project.location}</span>
                        </div>
                        <div className="flex">
                          <span className="font-semibold w-24">Category:</span>
                          <span>{project.category.charAt(0).toUpperCase() + project.category.slice(1)}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        This project demonstrates our commitment to quality craftsmanship and attention to detail. We worked closely with the client to ensure their vision was realized perfectly.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-motiv-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8">
              Let us help you create a standout presence for your business.
            </p>
            <a 
              href="/contact" 
              className="inline-flex bg-motiv-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
