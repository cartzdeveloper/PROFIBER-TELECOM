import React from 'react';
import { Check, Zap, Star, Rocket } from 'lucide-react';
import { PLANS } from '../constants';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs bg-blue-100 px-3 py-1 rounded-full">Nossos Planos</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 mb-6">
            A velocidade que você merece
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sem pegadinhas. Apenas a melhor fibra óptica para você jogar, assistir e navegar com tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative group rounded-3xl transition-all duration-300 hover:-translate-y-3 flex flex-col
                ${plan.isRecommended 
                  ? 'bg-white shadow-[0_20px_40px_rgba(37,99,235,0.15)] border-2 border-blue-500 scale-100 md:scale-105 z-10 hover:shadow-[0_30px_60px_rgba(37,99,235,0.25)]' 
                  : 'bg-white shadow-xl border border-slate-100 hover:border-blue-300 hover:shadow-2xl'
                }
              `}
            >
              {plan.isRecommended && (
                <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-lg flex items-center gap-2
                   ${plan.highlightColor === 'purple' ? 'bg-gradient-to-r from-purple-600 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}
                `}>
                  <Star className="w-3 h-3 fill-white" />
                  {plan.highlightColor === 'purple' ? 'VIP Gamer' : 'Mais Escolhido'}
                </div>
              )}

              <div className="p-8 flex-grow">
                <div className="mb-6">
                    <span className="block text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wide">Internet Fibra</span>
                    <h4 className="text-3xl font-black text-slate-900 flex items-center gap-2">
                        {plan.speed}
                        {plan.id === 4 && <Zap className="w-6 h-6 text-yellow-500 fill-yellow-500" />}
                    </h4>
                </div>

                <div className="flex items-baseline mb-8 pb-8 border-b border-slate-100">
                  <span className="text-sm text-slate-500 font-medium">R$</span>
                  <span className={`text-5xl font-black tracking-tight mx-1 ${plan.isRecommended ? 'text-blue-600' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400 font-medium">{plan.period}</span>
                </div>

                <ul className="space-y-5 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shadow-sm
                         ${plan.isRecommended ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors'}
                      `}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="ml-3 text-slate-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-8 pb-8 mt-auto">
                <button 
                  onClick={() => onSelectPlan(plan)}
                  className={`relative overflow-hidden w-full py-4 px-6 rounded-2xl text-center font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group/btn
                    ${plan.isRecommended 
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:text-blue-700'
                    }
                  `}
                >
                  <span className="relative z-10">Quero Este Plano</span>
                  <Rocket className={`w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 ${!plan.isRecommended && 'text-slate-400 group-hover/btn:text-blue-700'}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};