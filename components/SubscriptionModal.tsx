import React, { useState } from 'react';
import { X, Send, User, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Plan } from '../types';
import { CONTACT_INFO } from '../constants';

interface SubscriptionModalProps {
  plan: Plan;
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ plan, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const message = `Olá! Tenho interesse em contratar a Profiber.
    
🚀 *Plano Escolhido:* ${plan.speed}
💰 *Valor:* R$ ${plan.price}${plan.period}

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

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div 
        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div 
          className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" 
          aria-hidden="true"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        {/* Modal Panel */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          {/* Header */}
          <div className="bg-profiber-royal px-4 py-5 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white flex items-center gap-2" id="modal-title">
              <CheckCircle2 className="w-5 h-5" />
              Finalizar Contratação
            </h3>
            <button 
              onClick={onClose}
              className="bg-white/10 rounded-full p-1 text-white hover:bg-white/20 transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <p className="text-sm text-blue-800 font-medium">Você selecionou:</p>
              <div className="flex justify-between items-end mt-1">
                <span className="text-2xl font-black text-profiber-royal">{plan.speed}</span>
                <span className="text-lg font-bold text-slate-700">R$ {plan.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Celular</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        id="city"
                        required
                        className="focus:ring-profiber-royal focus:border-profiber-royal block w-full sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border px-3"
                        placeholder="Sua cidade"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Bairro/Rua</label>
                    <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        required
                        className="focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border"
                        placeholder="Seu endereço"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Pedido no WhatsApp
                </button>
                <p className="mt-2 text-center text-xs text-gray-500">
                  Ao clicar em enviar, você será redirecionado para o WhatsApp da nossa equipe.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
