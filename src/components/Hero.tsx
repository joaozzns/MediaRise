
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
        backgroundImage: `url('/lovable-uploads/80a1bf36-9f2f-49f5-87f6-5da755019dcb.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Efeito de brilho dourado */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-yellow-400/20 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-radial from-amber-400/15 via-orange-400/8 to-transparent rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center" ref={containerRef}>
        {/* Lado esquerdo - Texto */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            QUAL O SEU DIFERENCIAL?
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold">
            <span className="text-white drop-shadow-2xl">O NOSSO É </span>
            <span className="text-yellow-400 drop-shadow-lg animate-pulse-slow">VOCÊ!</span>
          </div>
        </div>
        
        {/* Lado direito - espaço vazio ou conteúdo adicional */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Removido o círculo do planeta */}
        </div>
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
