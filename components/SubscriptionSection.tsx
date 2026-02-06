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
    <section id="subscription-form" className="relative py-24 bg-profiber-dark overflow-hidden border-t border-white/5">
      
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="bg-slate-950/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 flex flex-col md:flex-row transform transition-all hover:border-white/20">
          
          {/* Left Side: Info/Plan Card */}
          <div className="w-full md:w-2/5 bg-gradient-to-br from-profiber-royal to-blue-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decorative patterns */}
             <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

             <div className="relative z-10">
               <h3 className="text-3xl font-black mb-3 tracking-tighter">Pronto para a Ultra Velocidade?</h3>
               <p className="text-blue-100 mb-10 text-lg leading-relaxed font-light">Preencha os campos e inicie seu atendimento VIP agora mesmo.</p>
             </div>

             <div className="relative z-10 mt-auto">
               {selectedPlan ? (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                    <div className="flex items-center gap-2 mb-3 text-cyan-300 text-[10px] font-bold uppercase tracking-[0.2em]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Plano Selecionado
                    </div>
                    <div className="text-4xl font-black mb-1 tracking-tight">{selectedPlan.speed}</div>
                    <div className="text-xl opacity-90 font-bold">R$ {selectedPlan.price}<span className="text-xs opacity-60 font-medium">{selectedPlan.period}</span></div>
                  </div>
               ) : (
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                     <div className="flex items-center gap-2 mb-3 text-yellow-300 text-[10px] font-bold uppercase tracking-[0.2em]">
                      <AlertCircle className="w-3.5 h-3.5" /> Atenção
                    </div>
                    <p className="text-sm leading-relaxed text-blue-50 font-medium">Selecione um plano acima para agilizar seu atendimento, ou envie seus dados para consultoria.</p>
                  </div>
               )}
             </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-3/5 p-8 md:p-12">
            <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-profiber-royal/10 flex items-center justify-center text-profiber-royal">
                <User className="w-5 h-5" />
              </div>
              Dados de Contato
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nome Completo</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-slate-500 group-focus-within:text-profiber-royal transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full pl-11 pr-4 text-sm border-white/5 rounded-xl py-4 bg-white/[0.03] border focus:ring-2 focus:ring-profiber-royal/20 focus:border-profiber-royal/50 transition-all outline-none text-white font-medium"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">WhatsApp</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-slate-500 group-focus-within:text-profiber-royal transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="block w-full pl-11 pr-4 text-sm border-white/5 rounded-xl py-4 bg-white/[0.03] border focus:ring-2 focus:ring-profiber-royal/20 focus:border-profiber-royal/50 transition-all outline-none text-white font-medium"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="city" className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        className="block w-full px-4 text-sm border-white/5 rounded-xl py-4 bg-white/[0.03] border focus:ring-2 focus:ring-profiber-royal/20 focus:border-profiber-royal/50 transition-all outline-none text-white font-medium"
                        placeholder="Sua cidade"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="address" className="block text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Bairro/Rua</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <MapPin className="h-4 w-4 text-slate-500 group-focus-within:text-profiber-royal transition-colors" />
                      </div>
                      <input
                          type="text"
                          name="address"
                          id="address"
                          required
                          className="block w-full pl-11 pr-4 text-sm border-white/5 rounded-xl py-4 bg-white/[0.03] border focus:ring-2 focus:ring-profiber-royal/20 focus:border-profiber-royal/50 transition-all outline-none text-white font-medium"
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
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-2xl shadow-xl shadow-blue-600/10 text-base font-bold text-white bg-profiber-royal hover:bg-blue-600 hover:shadow-blue-600/25 focus:outline-none transition-all transform hover:-translate-y-1 active:translate-y-0"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Finalizar no WhatsApp
                </button>
                <p className="mt-4 text-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  Atendimento humano e rápido
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};