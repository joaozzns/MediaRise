
import React from "react";
import { MessageCircle, Instagram } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-[#FFB300] font-bold text-xl">
              <span className="inline-block transform rotate-45 mr-2">📈</span>
              MediaRise
            </div>
            <span className="text-gray-400 text-sm ml-2">AGÊNCIA</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-white hover:text-[#FFB300] transition-colors">
              HOME
            </a>
            <a href="#servicos" className="text-white hover:text-[#FFB300] transition-colors">
              SERVIÇOS
            </a>
            <a href="#sobre" className="text-white hover:text-[#FFB300] transition-colors">
              QUEM SOMOS
            </a>
            <a href="#orcamento" className="text-white hover:text-[#FFB300] transition-colors">
              ORÇAMENTO
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/5531986173170" 
              target="_blank" 
              className="text-white hover:text-[#FFB300] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              className="text-white hover:text-[#FFB300] transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
