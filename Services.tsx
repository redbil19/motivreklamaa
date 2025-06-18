
import { Camera, Layout, Brush, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Layout size={48} className="text-motiv-red mb-4" />,
      title: "Brand Design",
      description: "Professional logos and brand identities that make a lasting impression"
    },
    {
      icon: <Camera size={48} className="text-motiv-red mb-4" />,
      title: "Outdoor Signage",
      description: "Eye-catching outdoor signs and displays for maximum visibility"
    },
    {
      icon: <Brush size={48} className="text-motiv-red mb-4" />,
      title: "Print & Design",
      description: "Business cards, brochures, and promotional materials that look professional"
    },
    {
      icon: <Tag size={48} className="text-motiv-red mb-4" />,
      title: "Custom Uniforms",
      description: "Branded uniforms and apparel for your team with your custom design"
    }
  ];

  return (
    <section id="services" className="py-20 bg-motiv-gray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive advertising and branding solutions to help your business stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pt-8">
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle className="mt-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
