
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
    { name: "INÍCIO", href: "#hero" },
    { name: "SERVIÇOS", href: "#services" },
    { name: "SOBRE", href: "#about" },
    { name: "CONTATO", href: "#contact" },
  ];

  return (
    <nav style={{ backgroundColor: '#212121' }} className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - MediaRise */}
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/7b7abc61-03c5-4fdd-9234-affa591edc08.png"
              alt="MediaRise Logo"
              className="h-10 w-auto sm:h-12 md:h-14 transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
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

          {/* Contact Icons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+5531986173170"
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:contato@mediarise.com.br"
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              <Mail size={20} />
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: '#212121' }}>
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
          
          {/* Mobile contact icons */}
          <div className="border-t border-gray-700 mt-4 pt-4 flex space-x-4 px-3">
            <a
              href="tel:+5531986173170"
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:contato@mediarise.com.br"
              className="text-white hover:text-yellow-400 transition-colors duration-300 p-2"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
