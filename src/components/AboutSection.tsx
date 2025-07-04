
import React from "react";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-black" id="sobre">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-6">
              SOBRE A <br />
              <span className="text-[#FFB300]">MEDIARISE</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8">
              Na MediaRise, não somos apenas mais uma agência de marketing digital. Somos os estrategistas por trás do crescimento de marcas que hoje lideram seus mercados.
              <br /><br />
              Nossa missão é simples: tirar negócios da zona comum e levá-los a um novo nível de visibilidade e resultado. Combinamos inteligência de mercado, criatividade estratégica e execução de alta performance, sempre focados em uma coisa: crescimento real e mensurável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
                  fontSize: '14px',
                  lineHeight: '20px',
                  padding: '16px 24px',
                  border: '1px solid #FFB300',
                  transition: 'all 0.3s ease'
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
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
              <img 
                src="/lovable-uploads/da97c366-e7d4-4a21-80d3-85de190ad201.png" 
                alt="Astronauta" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
