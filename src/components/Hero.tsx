import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-black min-h-screen flex items-center justify-center" 
      id="hero" 
      style={{
        backgroundImage: "url('/lovable-uploads/9feb14a2-582e-49e2-a701-444d9232b71e.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "brightness(1.3) contrast(1.1)"
      }}
    >
      {/* Reduced dark overlay for better image visibility */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            QUAL O SEU<br />
            <span className="block">DIFERENCIAL?</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            O NOSSO É <span className="text-[#FFB300]">VOCÊ!</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a 
              href="https://wa.me/5531986173170?text=Quero%20saber%20mais%20sobre%20os%20serviços" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFB300] hover:bg-[#E6A000] text-black font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 flex items-center gap-2 uppercase tracking-wide"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
