
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
        
        
      </div>
    </section>
  );
};

export default Hero;
