
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-black" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip bg-white/10 text-white border-white/20">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
              <span>Especificações</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-600"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12 text-white">
            O Atlas trabalha com sua equipe, não no lugar dela. Ao lidar com tarefas repetitivas, melhorar as condições de segurança e aprender com cada interação, o Atlas ajuda os humanos a se concentrarem no que fazem de melhor: criar, resolver e inovar.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
