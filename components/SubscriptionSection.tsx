import React, { useState } from 'react';
import { Send, User, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { Plan } from '../types';
import { CONTACT_INFO } from '../constants';

interface SubscriptionSectionProps {
  selectedPlan: Plan | null;
}

export const SubscriptionSection: React.FC<SubscriptionSectionProps> = ({ selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const planText = selectedPlan 
      ? `🚀 *Plano Escolhido:* ${selectedPlan.speed}\n💰 *Valor:* R$ ${selectedPlan.price}${selectedPlan.period}`
      : `❓ *Plano:* Cliente ainda não selecionou um plano específico (Contato Geral)`;

    const message = `Olá! Tenho interesse em contratar a Profiber.
    
${planText}

----------------------------------
👤 *Dados do Cliente:*
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Cidade:* ${formData.city}
*Endereço:* ${formData.address}
----------------------------------

Gostaria de verificar a disponibilidade para instalação.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="subscription-form" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden border border-slate-100 flex flex-col md:flex-row transform transition-all hover:shadow-[0_30px_60px_rgba(37,99,235,0.15)]">
          
          {/* Left Side: Info/Plan */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-profiber-royal to-blue-800 p-10 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circles */}
             <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

             <div className="relative z-10">
               <h3 className="text-3xl font-black mb-3">Vamos Conectar?</h3>
               <p className="text-blue-100 mb-10 text-lg leading-relaxed">Preencha seus dados para finalizarmos sua contratação via WhatsApp.</p>
             </div>

             <div className="relative z-10 mt-auto">
               {selectedPlan ? (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="flex items-center gap-2 mb-3 text-cyan-300 text-xs font-bold uppercase tracking-widest">
                      <CheckCircle2 className="w-4 h-4" /> Plano Selecionado
                    </div>
                    <div className="text-4xl font-black mb-1">{selectedPlan.speed}</div>
                    <div className="text-xl opacity-90 font-medium">R$ {selectedPlan.price}</div>
                  </div>
               ) : (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                     <div className="flex items-center gap-2 mb-3 text-yellow-300 text-xs font-bold uppercase tracking-widest">
                      <AlertCircle className="w-4 h-4" /> Nenhum plano
                    </div>
                    <p className="text-sm leading-relaxed text-blue-50">Selecione um plano acima para agilizar seu atendimento, ou preencha o formulário para falar com um consultor.</p>
                  </div>
               )}
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
            <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <User className="w-6 h-6 text-blue-600" />
              Dados para Contato
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full pl-11 pr-4 sm:text-sm border-gray-200 rounded-xl py-3.5 bg-slate-50 border focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none font-medium"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">WhatsApp / Celular</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="block w-full pl-11 pr-4 sm:text-sm border-gray-200 rounded-xl py-3.5 bg-slate-50 border focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none font-medium"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="city" className="block text-sm font-bold text-slate-700 mb-2">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        className="block w-full px-4 sm:text-sm border-gray-200 rounded-xl py-3.5 bg-slate-50 border focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none font-medium"
                        placeholder="Sua cidade"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-2">Bairro/Rua</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                      </div>
                      <input
                          type="text"
                          name="address"
                          id="address"
                          required
                          className="block w-full pl-11 pr-4 sm:text-sm border-gray-200 rounded-xl py-3.5 bg-slate-50 border focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none font-medium"
                          placeholder="Endereço"
                          value={formData.address}
                          onChange={handleChange}
                      />
                    </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg shadow-green-500/20 text-base font-bold text-white bg-green-600 hover:bg-green-700 hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Pedido no WhatsApp
                </button>
                <p className="mt-4 text-center text-xs text-slate-400 font-medium">
                  Ao clicar em enviar, você concorda com nossos termos de uso.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};