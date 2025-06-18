
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "HOTEL Signage",
      category: "signage",
      image: "/lovable-uploads/e5422b0d-7021-410f-a9d3-c9405e63718e.png",
      description: "Elegant hotel signage with large windows and modern architecture"
    },
    {
      id: 2,
      title: "SPAR Storefront",
      category: "storefront",
      image: "/lovable-uploads/453bdf5b-598f-4bc8-bcfb-bfc19c2db0c1.png",
      description: "Retail supermarket signage and storefront design for SPAR"
    },
    {
      id: 3,
      title: "Ikebana Restaurant",
      category: "signage",
      image: "/lovable-uploads/8e872b56-e9e2-4a78-9b62-094bcacbc04a.png",
      description: "Tropical-themed restaurant signage with distinctive design"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest projects and see how we've helped businesses stand out
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-2">
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
                    <p className="text-sm text-muted-foreground">
                      Category: {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-motiv-red hover:bg-red-700"
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
