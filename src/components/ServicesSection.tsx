
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
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden" 
      id="servicos"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            POR QUE NOS <span className="text-[#FFB300] relative">
              ESCOLHER
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFB300] rounded-full"></div>
            </span>?
          </h2>
          <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
            NOSSO <span className="text-[#FFB300] font-bold">MAIOR</span> COMPROMISSO É EXPANDIR
          </p>
          <p className="text-lg sm:text-xl font-bold mb-8 text-[#FFB300]">
            SEUS RESULTADOS.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FFB300] to-[#FF8C00] mx-auto mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Estamos aqui para ajudar nossos clientes a chegarem no topo através de nossos serviços.
            Desenvolvemos soluções criativas que buscam inovar e que apresentem diferenciais em todos
            aspectos, para que você conquiste seu público de maneira objetiva e exponencial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10 text-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-800"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB300]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6 text-[#FFB300] transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider leading-tight group-hover:text-[#FFB300] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB300] to-[#FF8C00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 tracking-tight">
            VOCÊ <span className="text-[#FFB300] relative">
              VEM COM A GENTE
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFB300] rounded-full"></div>
            </span> NESSA JORNADA?
          </h3>
          <div className="relative inline-block">
            <a 
              href="https://wa.me/5531986173170?text=Agende%20uma%20Consultoria%20Online" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#FFB300] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFB300] text-black font-bold py-5 px-10 rounded-full text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-[#FFB300]/30"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '1px',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Agende uma Consultoria Online
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FFB300]/20 to-[#FF8C00]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
