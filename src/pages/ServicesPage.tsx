
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Layout, Brush, Tag, FileImage, Globe, MessageSquare } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: <Layout size={48} className="text-motiv-red mb-4" />,
      title: "Brand Design",
      description: "Professional logos and brand identities that make a lasting impression on your customers.",
      details: "Our brand design services include logo creation, brand identity guides, corporate stationery design, and brand strategy consultation."
    },
    {
      icon: <Camera size={48} className="text-motiv-red mb-4" />,
      title: "Outdoor Signage",
      description: "Eye-catching outdoor signs and displays that maximize visibility for your business.",
      details: "We create illuminated signs, building facades, 3D letters, directional signs, and more to help your business stand out."
    },
    {
      icon: <Brush size={48} className="text-motiv-red mb-4" />,
      title: "Print & Design",
      description: "Business cards, brochures, and promotional materials that convey professionalism.",
      details: "From business cards and brochures to posters, flyers, and catalogs, we handle all your print design and production needs."
    },
    {
      icon: <Tag size={48} className="text-motiv-red mb-4" />,
      title: "Custom Uniforms",
      description: "Branded uniforms and apparel for your team featuring your custom design.",
      details: "Enhance your brand presence with custom embroidered or printed uniforms, t-shirts, caps, and other corporate apparel."
    },
    {
      icon: <FileImage size={48} className="text-motiv-red mb-4" />,
      title: "Vehicle Graphics",
      description: "Turn your company vehicles into moving advertisements with custom vehicle wraps.",
      details: "Options include full vehicle wraps, partial wraps, decals, and magnetic signs, all designed to promote your brand on the go."
    },
    {
      icon: <Globe size={48} className="text-motiv-red mb-4" />,
      title: "Exhibition Materials",
      description: "Stand out at trade shows and events with professional exhibition displays.",
      details: "Banner stands, pop-up displays, counters, literature holders, and custom exhibition booths designed to attract attention."
    },
    {
      icon: <MessageSquare size={48} className="text-motiv-red mb-4" />,
      title: "Promotional Items",
      description: "Custom promotional products that keep your brand in front of customers.",
      details: "Branded pens, USB drives, bags, mugs, and other promotional items that serve as effective marketing tools."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-motiv-gray">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Services</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Comprehensive advertising and branding solutions to help your business stand out
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <p className="text-sm text-gray-700">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-motiv-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Contact us today to discuss your project needs and get a free quote.
            </p>
            <a 
              href="/contact" 
              className="inline-flex bg-motiv-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
