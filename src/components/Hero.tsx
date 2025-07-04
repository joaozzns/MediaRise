
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
        backgroundImage: "url('/lovable-uploads/fa9258dd-7589-4a50-b78d-da04b8331d26.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight opacity-0 animate-fade-in text-white mb-6" 
            style={{ animationDelay: "0.3s" }}
          >
            QUAL O SEU <br />
            <span className="text-white">DIFERENCIAL?</span>
          </h1>
          
          <p 
            style={{ animationDelay: "0.5s" }} 
            className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 opacity-0 animate-fade-in text-white"
          >
            O NOSSO É <span className="text-[#FFB300]">VOCÊ!</span>
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.7s" }}
          >
            <a 
              href="https://wa.me/5531986173170?text=Agende%20uma%20Consultoria%20Gratuita" 
              target="_blank"
              className="flex items-center justify-center group w-full sm:w-auto text-center" 
              style={{
                backgroundColor: '#FFB300',
                borderRadius: '1440px',
                boxSizing: 'border-box',
                color: '#000000',
                cursor: 'pointer',
                fontSize: '16px',
                lineHeight: '20px',
                padding: '16px 32px',
                border: '1px solid #FFB300',
                transition: 'all 0.3s ease',
                fontWeight: '600'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E6A000';
                e.currentTarget.style.borderColor = '#E6A000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFB300';
                e.currentTarget.style.borderColor = '#FFB300';
              }}
            >
              Agende uma Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
