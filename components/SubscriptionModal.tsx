import React, { useState } from 'react';
import { X, User, Phone, MapPin, CheckCircle2, Wifi, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';
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
    city: '',
    wifiName: '',
    wifiPassword: '',
    dueDate: '10' // '01', '10', '20'
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const passwordRules = [
    {
      id: 'length',
      label: 'Mínimo de 8 caracteres',
      test: (val: string) => val.length >= 8,
    },
    {
      id: 'uppercase',
      label: 'Pelo menos 1 letra maiúscula (A-Z)',
      test: (val: string) => /[A-Z]/.test(val),
    },
    {
      id: 'lowercase',
      label: 'Pelo menos 1 letra minúscula (a-z)',
      test: (val: string) => /[a-z]/.test(val),
    },
    {
      id: 'symbol',
      label: 'Pelo menos 1 símbolo (ex: @, !, #, $, %)',
      test: (val: string) => /[^A-Za-z0-9]/.test(val),
    },
  ];

  const isPasswordValid = passwordRules.every(rule => rule.test(formData.wifiPassword));

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectDueDate = (day: string) => {
    setFormData(prev => ({ ...prev, dueDate: day }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.wifiName.trim()) {
      setErrorMessage('Por favor, informe o nome desejado para a rede Wi-Fi.');
      return;
    }

    if (!isPasswordValid) {
      setErrorMessage('A senha do Wi-Fi precisa atender a todos os 4 requisitos de segurança.');
      return;
    }

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

📅 *Data de Vencimento Escolhida:* Todo dia ${formData.dueDate}

📶 *Configuração do Wi-Fi Desejada:*
*Nome da Rede (SSID):* ${formData.wifiName}
*Senha da Rede:* ${formData.wifiPassword}
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
          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[85vh] overflow-y-auto">
            <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <p className="text-sm text-blue-800 font-medium">Você selecionou:</p>
              <div className="flex justify-between items-end mt-1">
                <span className="text-2xl font-black text-profiber-royal">{plan.speed}</span>
                <span className="text-lg font-bold text-slate-700">R$ {plan.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="modal-name"
                    required
                    className="focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp / Celular</label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="modal-phone"
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
                    <label htmlFor="modal-city" className="block text-sm font-medium text-slate-700 mb-1">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        id="modal-city"
                        required
                        className="focus:ring-profiber-royal focus:border-profiber-royal block w-full sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border px-3"
                        placeholder="Sua cidade"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="modal-address" className="block text-sm font-medium text-slate-700 mb-1">Bairro/Rua</label>
                    <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        name="address"
                        id="modal-address"
                        required
                        className="focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 bg-gray-50 border"
                        placeholder="Seu endereço"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    </div>
                </div>
              </div>

              {/* Data de Vencimento (01, 10 ou 20) */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-calendar-days text-sm"></i>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Data de Vencimento</h5>
                      <p className="text-[11px] text-slate-500">Escolha o dia de vencimento da fatura.</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    Dia {formData.dueDate}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { day: '01', label: 'Dia 01' },
                    { day: '10', label: 'Dia 10', popular: true },
                    { day: '20', label: 'Dia 20' }
                  ].map((option) => {
                    const isSelected = formData.dueDate === option.day;
                    return (
                      <button
                        key={option.day}
                        type="button"
                        onClick={() => handleSelectDueDate(option.day)}
                        className={`py-2 px-1 rounded-lg border text-center transition-all flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <span className={`text-base font-black leading-none ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                          {option.day}
                        </span>
                        <span className={`text-[10px] font-medium ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                          {option.popular ? 'Mais escolhido' : `Todo dia ${option.day}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wi-Fi Setup Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-wifi text-xs"></i>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Personalização do Wi-Fi</h5>
                    <p className="text-[11px] text-slate-500">Nome e senha para pré-configuração técnica.</p>
                  </div>
                </div>

                {/* Nome da Rede */}
                <div>
                  <label htmlFor="modal-wifiName" className="block text-xs font-semibold text-slate-700 mb-1">
                    Qual nome da rede você deseja? (SSID)
                  </label>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Wifi className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="wifiName"
                      id="modal-wifiName"
                      required
                      className="focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-9 sm:text-sm border-gray-300 rounded-lg py-2 bg-white border"
                      placeholder="Ex: Profiber_Familia"
                      value={formData.wifiName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Senha da Rede */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="modal-wifiPassword" className="block text-xs font-semibold text-slate-700">
                      Qual senha você deseja para o Wi-Fi?
                    </label>
                    {formData.wifiPassword && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isPasswordValid 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {isPasswordValid ? '✓ Senha Segura' : 'Pendente'}
                      </span>
                    )}
                  </div>
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="wifiPassword"
                      id="modal-wifiPassword"
                      required
                      className={`focus:ring-profiber-royal focus:border-profiber-royal block w-full pl-9 pr-9 sm:text-sm rounded-lg py-2 bg-white border ${
                        formData.wifiPassword
                          ? (isPasswordValid ? 'border-emerald-400' : 'border-amber-400')
                          : 'border-gray-300'
                      }`}
                      placeholder="Digite a senha"
                      value={formData.wifiPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-slate-600"
                      aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  {/* Password Rules Checklist */}
                  <div className="mt-2 p-2.5 bg-white rounded-lg border border-slate-200 text-[11px] space-y-1">
                    <p className="font-semibold text-slate-700">A senha precisa ter:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {passwordRules.map((rule) => {
                        const met = rule.test(formData.wifiPassword);
                        return (
                          <div
                            key={rule.id}
                            className={`flex items-center gap-1.5 ${
                              met ? 'text-emerald-700 font-medium' : 'text-slate-500'
                            }`}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 ${
                              met ? 'bg-emerald-500 text-white font-bold' : 'bg-slate-100 text-slate-400 border border-slate-300'
                            }`}>
                              {met ? '✓' : '•'}
                            </span>
                            <span>{rule.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:scale-[1.02] cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Enviar Pedido pelo WhatsApp</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
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
