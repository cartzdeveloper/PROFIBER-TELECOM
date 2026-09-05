import React, { useState } from 'react';
import { User, Phone, MapPin, CheckCircle2, AlertCircle, Wifi, Lock, Eye, EyeOff } from 'lucide-react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    setErrorMessage('');

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

📅 *Data de Vencimento Escolhida:* Todo dia ${formData.dueDate}

📶 *Configuração do Wi-Fi Desejada:*
*Nome da Rede (SSID):* ${formData.wifiName}
*Senha da Rede:* ${formData.wifiPassword}
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

              {/* Data de Vencimento (01, 10 ou 20) */}
              <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <i className="fa-solid fa-calendar-days text-base"></i>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Data de Vencimento</h5>
                      <p className="text-xs text-slate-500">Escolha o melhor dia para o pagamento da sua fatura.</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-[10px]"></i>
                    Dia {formData.dueDate}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-1">
                  {[
                    { day: '01', label: 'Dia 01', note: 'Início do mês' },
                    { day: '10', label: 'Dia 10', note: 'Mais escolhido', popular: true },
                    { day: '20', label: 'Dia 20', note: 'Final do mês' }
                  ].map((option) => {
                    const isSelected = formData.dueDate === option.day;
                    return (
                      <button
                        key={option.day}
                        type="button"
                        onClick={() => handleSelectDueDate(option.day)}
                        className={`relative p-3.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 group cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.02]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                        }`}
                      >
                        {option.popular && (
                          <span className={`absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold tracking-tight uppercase shadow-sm ${
                            isSelected ? 'bg-amber-300 text-amber-950' : 'bg-amber-100 text-amber-800 border border-amber-300'
                          }`}>
                            Popular
                          </span>
                        )}
                        <span className={`text-xl font-black leading-none ${isSelected ? 'text-white' : 'text-slate-900 group-hover:text-blue-600'}`}>
                          {option.day}
                        </span>
                        <span className={`text-[11px] font-medium leading-tight ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                          {option.note}
                        </span>
                        <div className={`mt-0.5 flex items-center justify-center ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-blue-400'}`}>
                          <i className={`fa-solid ${isSelected ? 'fa-circle-check text-xs' : 'fa-circle text-[8px] opacity-40'}`}></i>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wi-Fi Setup Section */}
              <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <i className="fa-solid fa-wifi text-base"></i>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900">Personalização da sua Rede Wi-Fi</h5>
                    <p className="text-xs text-slate-500">Configure com antecedência para agilizar a instalação pelo técnico.</p>
                  </div>
                </div>

                {/* Nome da Rede */}
                <div>
                  <label htmlFor="wifiName" className="block text-sm font-bold text-slate-700 mb-2">
                    Qual nome da rede você deseja? (SSID)
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Wifi className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="wifiName"
                      id="wifiName"
                      required
                      className="block w-full pl-11 pr-4 sm:text-sm border-gray-200 rounded-xl py-3.5 bg-white border focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none font-medium text-slate-800"
                      placeholder="Ex: Profiber_FamiliaSilva"
                      value={formData.wifiName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Senha da Rede */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="wifiPassword" className="block text-sm font-bold text-slate-700">
                      Qual senha você deseja para o Wi-Fi?
                    </label>
                    {formData.wifiPassword && (
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors flex items-center gap-1 ${
                        isPasswordValid 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        <i className={`fa-solid ${isPasswordValid ? 'fa-check' : 'fa-circle-exclamation'} text-[10px]`}></i>
                        {isPasswordValid ? 'Senha Segura' : 'Requisitos Pendentes'}
                      </span>
                    )}
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="wifiPassword"
                      id="wifiPassword"
                      required
                      className={`block w-full pl-11 pr-11 sm:text-sm rounded-xl py-3.5 bg-white border transition-all outline-none font-medium text-slate-800 ${
                        formData.wifiPassword
                          ? (isPasswordValid ? 'border-emerald-300 focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500' : 'border-amber-300 focus:ring-2 focus:ring-amber-100 focus:border-amber-500')
                          : 'border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500'
                      }`}
                      placeholder="Digite a senha desejada"
                      value={formData.wifiPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-slate-600 transition-colors"
                      aria-label={showPassword ? 'Ocultar senha' : 'Exibir senha'}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {/* Password Requirements Checklist */}
                  <div className="mt-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm text-xs">
                    <p className="font-semibold text-slate-700 mb-2 flex items-center gap-1.5">
                      <i className="fa-solid fa-shield-halved text-blue-600 text-xs"></i>
                      A senha precisa ter:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {passwordRules.map((rule) => {
                        const met = rule.test(formData.wifiPassword);
                        return (
                          <div
                            key={rule.id}
                            className={`flex items-center gap-2 transition-colors ${
                              met ? 'text-emerald-700 font-semibold' : 'text-slate-500'
                            }`}
                          >
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 transition-all ${
                              met 
                                ? 'bg-emerald-500 text-white font-bold' 
                                : 'bg-slate-100 text-slate-400 border border-slate-300'
                            }`}>
                              {met ? <i className="fa-solid fa-check text-[9px]"></i> : '•'}
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
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                  <span className="font-medium">{errorMessage}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-3 py-4 px-6 border border-transparent rounded-xl shadow-lg shadow-green-500/25 text-base font-bold text-white bg-green-600 hover:bg-green-700 hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-2xl"></i>
                  <span>Enviar Pedido pelo WhatsApp</span>
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
                <p className="mt-4 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5">
                  <i className="fa-solid fa-shield-halved text-slate-400 text-xs"></i>
                  <span>Ao clicar em enviar, seus dados são transmitidos com segurança para nossa equipe.</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};