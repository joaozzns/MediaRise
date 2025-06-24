
import React from "react";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-8">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center space-y-4">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center">
            <a 
              href="mailto:agenciamediarise@gmail.com" 
              className="text-white hover:text-[#FFB300] transition-colors duration-300"
            >
              agenciamediarise@gmail.com
            </a>
            <a 
              href="tel:+5531986173170" 
              className="text-white hover:text-[#FFB300] transition-colors duration-300"
            >
              (31) 98617-3170
            </a>
          </div>
          
          {/* Instagram Button */}
          <a 
            href="https://www.instagram.com/agenciamediarise/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FFB300] hover:bg-[#E6A000] text-black px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={20} />
            <span>Siga no Instagram</span>
          </a>
          
          {/* Copyright */}
          <p className="text-center text-white text-sm">
            © 2025 MediaRise © - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
