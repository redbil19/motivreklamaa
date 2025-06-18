
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-motiv-gray">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Motiv Reklama</h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Your trusted partner for professional advertising and branding solutions
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Motiv Reklama was founded with a simple mission: to help businesses stand out through exceptional branding and advertising solutions. 
              </p>
              <p className="text-lg mb-4">
                With years of experience in the industry, our team has developed a reputation for delivering high-quality signage, branding, and promotional materials that make a real impact.
              </p>
              <p className="text-lg">
                We're passionate about what we do, and we take pride in helping our clients achieve their marketing goals through creative and effective solutions.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="/lovable-uploads/3b979775-df96-4092-85e6-6ea2136af429.png"
                alt="About Motiv Reklama"
                className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-motiv-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
              <p>
                We use only the best materials and techniques to ensure that your signage and promotional materials stand the test of time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Creative Solutions</h3>
              <p>
                Our team of designers brings fresh ideas and innovative approaches to every project, helping your brand make a real impact.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Customer Service</h3>
              <p>
                We prioritize clear communication and exceptional service from the first consultation to the final installation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Fast Turnaround</h3>
              <p>
                We understand that time matters, so we work efficiently to deliver your project on schedule without compromising quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Comprehensive Services</h3>
              <p>
                From design to installation, we handle every aspect of your project with professionalism and attention to detail.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Competitive Pricing</h3>
              <p>
                We offer excellent value for your investment, with transparent pricing and no hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
