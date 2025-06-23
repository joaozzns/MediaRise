
import React, { useState } from "react";
import { toast } from "sonner";

const DetailsSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.fullName || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Demo form submission
    toast.success("Request submitted successfully!");

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="details" className="w-full bg-black py-12 sm:py-16">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <div className="w-16 h-1 bg-[#FFB300] mx-auto"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  name="fullName" 
                  value={formData.fullName} 
                  onChange={handleChange} 
                  placeholder="Nome" 
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB300] transition-colors" 
                  required 
                />
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="E-mail" 
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB300] transition-colors" 
                  required 
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Telefone com DDD" 
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB300] transition-colors" 
              />
            </div>

            {/* Company Field */}
            <div>
              <input 
                type="text" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                placeholder="Empresa" 
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB300] transition-colors" 
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Mensagem" 
                rows={4}
                className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFB300] transition-colors resize-none" 
              />
            </div>
            
            {/* Submit Button */}
            <div className="text-center pt-6">
              <button 
                type="submit" 
                className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 inline-flex items-center gap-2"
              >
                Enviar
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
