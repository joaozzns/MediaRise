
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

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
      className="overflow-hidden relative min-h-screen flex items-center justify-center" 
      id="hero" 
      style={{
        backgroundImage: isMobile 
          ? `url('/lovable-uploads/b63e6a0e-6b3b-4e61-ae6f-181b5300885a.png')`
          : `url('/lovable-uploads/0d876914-397e-44c2-84fa-2c737494e57a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Efeito de brilho dourado */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-yellow-400/20 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-radial from-amber-400/15 via-orange-400/8 to-transparent rounded-full blur-2xl animate-float"></div>
      </div>
      
      {/* Efeito adicional de partículas douradas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-300 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Hero;
