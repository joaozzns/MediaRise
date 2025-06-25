
import React from "react";

const CallToActionSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-black">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1E1E1E] rounded-3xl p-8 border border-gray-700 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
              OTIMIZE SEUS RESULTADOS{" "}
              <span className="text-[#FFB300]">CONOSCO</span>
            </h2>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFB300] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Impulsione Seus Resultados com Tráfego Pago Estratégico
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFB300] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Conecte-se e Engaje: Sua Marca no Centro das Redes Sociais
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFB300] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Construa uma Marca Inesquecível: A Essência do Seu Negócio
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFB300] flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Resultados Mensuráveis: Otimizando Sua Presença Digital para o Sucesso
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://wa.me/5531986173170?text=Solicite%20um%20Or%C3%A7amento" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFB300] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#FFB300]/90 transition-colors inline-block"
              >
                Solicite um Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
