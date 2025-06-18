
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/3b979775-df96-4092-85e6-6ea2136af429.png" 
            alt="Motiv Reklama" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button className="bg-motiv-red hover:bg-red-700 text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 border-t">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
            <Button className="bg-motiv-red hover:bg-red-700 text-white w-full">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          onClick={onClick}
          className={`font-medium ${
            mobile 
              ? "block py-2 hover:text-motiv-red" 
              : "hover:text-motiv-red transition-colors"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
