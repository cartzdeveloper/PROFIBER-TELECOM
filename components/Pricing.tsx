import React from 'react';
import { Check, Zap, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { Plan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: Plan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-24 bg-profiber-dark relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Escolha sua <span className="text-gradient-premium">Velocidade</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sem pegadinhas, sem franquia. Internet pura e ultra-rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative group rounded-3xl p-px transition-all duration-300 hover:-translate-y-2
                ${plan.isRecommended 
                  ? 'bg-gradient-to-b from-blue-500 via-blue-600 to-blue-900 shadow-2xl shadow-blue-900/20' 
                  : 'bg-white/5 hover:bg-white/10'
                }
              `}
            >
              {/* Inner Card Content */}
              <div className={`h-full rounded-[23px] p-6 flex flex-col relative overflow-hidden card-glow
                 ${plan.isRecommended ? 'bg-slate-900/90' : 'bg-slate-950'}
              `}>
                
                {/* Popular Badge */}
                {plan.isRecommended && (
                  <div className="absolute top-0 right-0 p-4">
                     <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50">
                        <Star className="w-4 h-4 fill-current" />
                     </div>
                  </div>
                )}

                <div className="mb-6">
                    <p className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.isRecommended ? 'text-blue-400' : 'text-slate-500'}`}>
                        Fibra Óptica
                    </p>
                    <h4 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                        {plan.speed}
                        {plan.id === 4 && <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse" />}
                    </h4>
                </div>

                <div className="flex items-baseline mb-8 pb-8 border-b border-white/5">
                  <span className="text-sm text-slate-400 font-semibold mr-1">R$</span>
                  <span className="text-5xl font-extrabold tracking-tighter text-white">
                    {plan.price.split(',')[0]}
                  </span>
                  <div className="flex flex-col ml-1">
                      <span className="text-lg font-bold text-white/90 leading-none">,{plan.price.split(',')[1]}</span>
                      <span className="text-xs text-slate-500 font-medium">/mês</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.isRecommended ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="ml-3 text-slate-300 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-4 px-6 rounded-xl text-center text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2
                      ${plan.isRecommended 
                        ? 'bg-profiber-royal text-white hover:bg-blue-600 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/5'
                      }
                    `}
                  >
                    Escolher Plano
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};