import React from "react";
import { Users, Megaphone, Palette, Globe, MessageSquare } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "SOCIAL MEDIA"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "TRÁFEGO PAGO"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "BRANDING"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "LANDING PAGE/SITE"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "MARKETING"
    }
  ];

  return (
    <section 
      className="py-20 bg-gray-100 relative overflow-hidden" 
      id="servicos"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">
            POR QUE NOS <span className="text-[#FFB300]">ESCOLHER</span>?
          </h2>
          <p className="text-lg sm:text-xl font-bold mb-4 text-black">
            NOSSO <span className="text-[#FFB300]">MAIOR</span> COMPROMISSO É EXPANDIR
          </p>
          <p className="text-lg sm:text-xl font-bold mb-8 text-[#FFB300]">
            SEUS RESULTADOS.
          </p>
          <div className="w-20 h-1 bg-[#FFB300] mx-auto mb-8"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Estamos aqui para ajudar nossos clientes a chegarem no topo através de nossos serviços.
            Desenvolvemos soluções criativas que buscam inovar e que apresentem diferenciais em todos
            aspectos, para que você conquiste seu público de maneira objetiva e exponencial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black text-white px-6 py-8 text-center hover:bg-gray-800 transition-colors duration-300"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex justify-center mb-4 text-[#FFB300]">
                {service.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black">
            VOCÊ <span className="text-[#FFB300]">VEM COM A GENTE</span> NESSA JORNADA?
          </h3>
          <a 
            href="https://wa.me/5531986173170?text=Agende%20uma%20Consultoria%20Online" 
            target="_blank"
            className="inline-block bg-[#FFB300] hover:bg-[#E6A000] text-black font-bold py-4 px-8 text-lg transition-colors duration-300"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            AGENDE UMA CONSULTORIA ONLINE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
