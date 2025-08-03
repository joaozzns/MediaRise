
import React from "react";
import { Users, Megaphone, Palette, Globe, MessageSquare, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "SOCIAL MEDIA",
      description: "Gestão completa das suas redes sociais com estratégias personalizadas"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "TRÁFEGO PAGO",
      description: "Campanhas otimizadas para maximizar seu ROI e conversões"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "BRANDING",
      description: "Criação e fortalecimento da identidade visual da sua marca"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "LANDING PAGE/SITE",
      description: "Sites e páginas de alta conversão com design responsivo"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "MARKETING",
      description: "Estratégias integradas para acelerar o crescimento do seu negócio"
    }
  ];

  return (
    <section 
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" 
      id="servicos"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-radial from-[#FFB300]/10 via-[#FFB300]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-radial from-gray-200/30 via-gray-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container px-6 lg:px-8 mx-auto relative z-10 max-w-7xl">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black mb-8 leading-tight">
            <span className="text-gray-900">POR QUE NOS </span>
            <span className="relative inline-block">
              <span className="text-[#FFB300]">ESCOLHER</span>
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-[#FFB300] to-[#FF9900] rounded-full transform scale-110"></div>
            </span>
            <span className="text-gray-900">?</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 max-w-4xl mx-auto">
              NOSSO <span className="text-[#FFB300] font-black">MAIOR</span> COMPROMISSO É EXPANDIR
            </p>
            <p className="text-xl sm:text-2xl font-black text-[#FFB300] mb-8">
              SEUS RESULTADOS.
            </p>
          </div>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFB300] to-[#FF9900] mx-auto mb-12 rounded-full"></div>
          
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Estamos aqui para ajudar nossos clientes a chegarem no topo através de nossos serviços.
            Desenvolvemos soluções criativas que buscam inovar e que apresentem diferenciais em todos
            aspectos, para que você conquiste seu público de maneira objetiva e exponencial.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 border border-gray-700/50 overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB300]/20 via-[#FF9900]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Efeito de luz nos cantos */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FFB300]/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#FF9900]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6 text-[#FFB300] transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider leading-tight text-center mb-4 group-hover:text-[#FFB300] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-300 text-center leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {service.description}
                </p>
              </div>
              
              {/* Linha animada na base */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB300] via-[#FF9900] to-[#FFB300] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-12 text-gray-900 leading-tight">
            VOCÊ <span className="relative inline-block text-[#FFB300]">
              VEM COM A GENTE
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB300] to-[#FF9900] rounded-full"></div>
            </span> NESSA JORNADA?
          </h3>
          
          <div className="flex justify-center">
            <a 
              href="https://wa.me/5531986173170?text=Agende%20uma%20Consultoria%20Gratuita" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#FFB300] via-[#FF9900] to-[#FFB300] hover:from-[#FF9900] hover:via-[#FFB300] hover:to-[#FF9900] text-black font-black py-5 px-10 rounded-2xl text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg border-2 border-[#FFB300]/50 hover:border-[#FF9900] overflow-hidden min-w-[320px]"
            >
              {/* Efeito de brilho animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Ícone do WhatsApp */}
              <MessageCircle className="w-6 h-6 fill-current transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
              
              {/* Texto do botão */}
              <span className="relative z-10 uppercase tracking-wide">
                Agende uma Consultoria Gratuita
              </span>
              
              {/* Efeito de pulso */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#FFB300]/40 scale-100 group-hover:scale-110 group-hover:border-[#FF9900]/60 transition-all duration-500 animate-pulse"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB300]/30 to-[#FF9900]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-125"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
