
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-motiv-gray">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Get in touch to discuss your project or request a free quote
          </p>
        </div>
      </div>
      
      <Contact />
      
      <Footer />
    </div>
  );
};

export default ContactPage;
