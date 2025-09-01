import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import scinovaLogoPath from "@assets/78509581647.jpg";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) { // Change background after scrolling 50px
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the height of the navigation bar to use as an offset
      const navBar = document.querySelector('nav');
      const navHeight = navBar ? navBar.offsetHeight : 0;
      
      const y = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-[hsl(231,63%,31%)]/80 shadow-lg backdrop-blur-xl" // Translucent royal blue
        : "glass-effect border-b border-white/20"
    }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src={scinovaLogoPath}
              alt="Scinova Scientifics Logo"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className={`text-xl font-bold ${isScrolled ? "text-white" : "text-gray-700"}`}>Scinova Scientifics</span>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => scrollToSection('home')} // Changed to target 'home' section
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium border-white/30 backdrop-blur-sm hover:scale-105 ${
                isScrolled ? "text-white hover:bg-[hsl(181,69%,41%)]" : "bg-white/20 hover:bg-[hsl(181,69%,41%)] text-[hsl(231,63%,31%)] hover:text-white"
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium border-white/30 backdrop-blur-sm hover:scale-105 ${
                isScrolled ? "text-white hover:bg-blue-500" : "bg-white/20 hover:bg-blue-500 text-[hsl(231,63%,31%)] hover:text-white"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium border-white/30 backdrop-blur-sm hover:scale-105 ${
                isScrolled ? "text-white hover:bg-[hsl(340,82%,52%)]" : "bg-white/20 hover:bg-[hsl(340,82%,52%)] text-[hsl(231,63%,31%)] hover:text-white"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact-us')}
              className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium border-white/30 backdrop-blur-sm hover:scale-105 ${
                isScrolled ? "text-white hover:bg-[hsl(33,100%,50%)]" : "bg-white/20 hover:bg-[hsl(33,100%,50%)] text-[hsl(231,63%,31%)] hover:text-white"
              }`}
            >
              Contact Us
            </button>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className={`h-6 w-6 ${isScrolled ? "text-white" : "text-gray-700"}`} /> : <Menu className={`h-6 w-6 ${isScrolled ? "text-white" : "text-gray-700"}`} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('about-us')}
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-[hsl(181,69%,41%)] text-[hsl(231,63%,31%)] hover:text-white transition-all duration-300 font-medium border border-white/30 backdrop-blur-sm text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('about-us')}
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-blue-500 text-[hsl(231,63%,31%)] hover:text-white transition-all duration-300 font-medium border border-white/30 backdrop-blur-sm text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-[hsl(340,82%,52%)] text-[hsl(231,63%,31%)] hover:text-white transition-all duration-300 font-medium border border-white/30 backdrop-blur-sm text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact-us')}
                className="px-4 py-2 rounded-xl bg-white/20 hover:bg-[hsl(33,100%,50%)] text-[hsl(231,63%,31%)] hover:text-white transition-all duration-300 font-medium border border-white/30 backdrop-blur-sm text-left"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
