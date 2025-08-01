
import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#hero" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-black/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - aumentado */}
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/da97c366-e7d4-4a21-80d3-85de190ad201.png"
              alt="MediaRise Logo"
              className="h-12 w-auto sm:h-14 md:h-16 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <a
              href="tel:+5531986173170"
              className="flex items-center space-x-2 text-gray-300 hover:text-pulse-500 transition-colors"
            >
              <Phone size={16} />
              <span>(31) 98617-3170</span>
            </a>
            <a
              href="mailto:contato@mediarise.com.br"
              className="flex items-center space-x-2 text-gray-300 hover:text-pulse-500 transition-colors"
            >
              <Mail size={16} />
              <span>contato@mediarise.com.br</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
                setIsOpen(false);
              }}
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile contact info */}
          <div className="border-t border-gray-700 mt-4 pt-4 space-y-2">
            <a
              href="tel:+5531986173170"
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span>(31) 98617-3170</span>
            </a>
            <a
              href="mailto:contato@mediarise.com.br"
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>contato@mediarise.com.br</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
