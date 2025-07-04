
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-black/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          aria-label="MediaRise"
        >
          <img 
            src="/lovable-uploads/9bf7d1f7-bcd6-4ee2-bd76-39814439f351.png" 
            alt="Logo MediaRise" 
            className="h-10 sm:h-12" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#" 
            className="relative text-white hover:text-[#FFB300] py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFB300] after:transition-all hover:after:w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
          >
            HOME
          </a>
          <a href="#servicos" className="relative text-white hover:text-[#FFB300] py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFB300] after:transition-all hover:after:w-full">SERVIÇOS</a>
          <a href="#sobre" className="relative text-white hover:text-[#FFB300] py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFB300] after:transition-all hover:after:w-full">QUEM SOMOS</a>
          <a href="#details" className="relative text-white hover:text-[#FFB300] py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFB300] after:transition-all hover:after:w-full">ORÇAMENTO</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-8 items-center mt-8">
          <a 
            href="#" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-800 text-white hover:text-[#FFB300] transition-colors duration-300" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            HOME
          </a>
          <a 
            href="#servicos" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-800 text-white hover:text-[#FFB300] transition-colors duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            SERVIÇOS
          </a>
          <a 
            href="#sobre" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-800 text-white hover:text-[#FFB300] transition-colors duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            QUEM SOMOS
          </a>
          <a 
            href="#details" 
            className="text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-800 text-white hover:text-[#FFB300] transition-colors duration-300" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            ORÇAMENTO
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
