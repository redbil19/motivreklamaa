
import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-motiv-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/3b979775-df96-4092-85e6-6ea2136af429.png" 
                alt="Motiv Reklama" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/70 mb-6">
              Professional advertising and branding solutions to help your business stand out from the competition.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/motivreklama/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-motiv-red p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:motivreklama@gmail.com" className="bg-white/10 hover:bg-motiv-red p-2 rounded-full transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Brand Design</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Outdoor Signage</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Print & Design</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Custom Uniforms</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-white transition-colors">Promotional Materials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={20} className="text-motiv-red mr-3" />
                <span className="text-white/70">00355 69 209 9179</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-motiv-red mr-3" />
                <a href="mailto:motivreklama@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  motivreklama@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/50">
          <p>&copy; {currentYear} Motiv Reklama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
