import React from 'react';
import { Check, Zap, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Nossos Planos</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Escolha a velocidade ideal
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fibra óptica de ponta a ponta com a melhor relação custo-benefício da região. Sem surpresas na fatura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative group rounded-2xl transition-all duration-300 hover:-translate-y-2 
                ${plan.isRecommended 
                  ? 'bg-white shadow-2xl shadow-blue-900/10 border-2 border-profiber-royal scale-100 md:scale-105 z-10' 
                  : 'bg-white shadow-xl border border-slate-100 hover:border-blue-200'
                }
              `}
            >
              {plan.isRecommended && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider
                   ${plan.highlightColor === 'purple' ? 'bg-purple-600' : 'bg-profiber-royal'}
                `}>
                  {plan.highlightColor === 'purple' ? 'Premium' : 'Mais Vendido'}
                </div>
              )}

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="block text-slate-500 text-sm font-medium">Internet Fibra</span>
                        <h4 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                            {plan.speed}
                            {plan.id === 4 && <Zap className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                        </h4>
                    </div>
                    {plan.isRecommended && <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />}
                </div>

                <div className="flex items-baseline mb-8">
                  <span className="text-sm text-slate-500 font-medium">R$</span>
                  <span className={`text-4xl font-extrabold tracking-tight ${plan.isRecommended ? 'text-blue-600' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-500 ml-1">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                         ${plan.isRecommended ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}
                      `}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="ml-3 text-slate-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onSelectPlan(plan)}
                  className={`block w-full py-3 px-6 rounded-xl text-center font-bold transition-all duration-200 cursor-pointer
                    ${plan.isRecommended 
                      ? 'bg-profiber-royal text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }
                  `}
                >
                  Assinar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
